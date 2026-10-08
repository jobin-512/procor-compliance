import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Needed from '@/components/Needed';
import ServiceCard from '@/components/ServiceCard';
import JsonLd, { breadcrumbLd } from '@/components/JsonLd';
import { BookButton } from '@/components/Buttons';
import { Cover } from '@/components/Sections';
import { getPost, getPosts } from '@/lib/posts';
import { bySlug } from '@/lib/services';
import { resBySlug } from '@/lib/resources';
import { SITE } from '@/lib/site';
import { seo } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
/** Only migrated articles (non-empty body) get a page; the rest keep their legacy /blogs/ URL. */
export const generateStaticParams = () => getPosts().filter((p) => p.migrated).map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: Props) {
  const p = getPost((await params).slug)!;
  return seo({ title: p.seoTitle, description: p.description, path: `/insights/${p.slug}/`, image: `/assets/og/${p.slug}.png` });
}

export default async function Article({ params }: Props) {
  const p = getPost((await params).slug);
  if (!p || !p.migrated) notFound();
  const res = resBySlug[p.resource];
  const url = `/insights/${p.slug}/`;
  return (
    <>
      <JsonLd data={[
        { '@type': 'Article', headline: p.title, description: p.description, ...(p.date ? { datePublished: p.date, dateModified: p.date } : {}),
          author: { '@type': 'Organization', name: p.author }, publisher: { '@id': `${SITE.url}/#org` }, mainEntityOfPage: SITE.url + url, image: `${SITE.url}/assets/og/${p.slug}.png` },
        breadcrumbLd([['Insights', '/insights/'], [p.title, url]]),
      ]} />
      <section className="phero"><div className="wrap">
        <Breadcrumbs items={[{ name: 'Insights', href: '/insights/' }, { name: p.title }]} />
        <h1 style={{ maxWidth: '26ch', fontSize: 'clamp(1.9rem,3.6vw,2.8rem)' }}>{p.title}</h1>
        <p className="lede">{p.description}</p>
        <div className="article-meta"><b>{p.category}</b><span>{p.dateLabel}</span><span>{p.readingMins} min read</span><span>By {p.author}</span></div>
        {p.needed.map((n) => <Needed key={n} block note={n} />)}
      </div></section>
      <section><div className="wrap article-wrap">
        <article>
          <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />
          <p className="disclaimer">This article is general information based on the law as of its publication date, not advice for your specific situation. Rules, forms and due dates can change; confirm current requirements before acting.</p>
          <div className="article-cta">
            <h2>Want Procor to handle this for you?</h2>
            <p>Book a free 30-minute consultation and we&apos;ll review what applies to your business.</p>
            <BookButton service={p.related[0] || ''} />
          </div>
        </article>
        <aside className="toc" aria-label="Related">
          <div className="aside-card" style={{ position: 'static' }}>
            <Cover label={res.coverLabel} img={res.cover} large />
            <h3 style={{ marginTop: 18 }}>Free: {res.title}</h3>
            <p className="muted" style={{ fontSize: '.93rem' }}>{res.pages}</p>
            <Link className="btn btn-primary" href={`/resources/${res.slug}/`}>Get the free PDF</Link>
          </div>
          {p.related.slice(0, 1).map((k) => bySlug[k] && <ServiceCard key={k} s={bySlug[k]} />)}
        </aside>
      </div></section>
    </>
  );
}
