import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd, { breadcrumbLd } from '@/components/JsonLd';
import { LeadMagnetForm } from '@/components/LeadForm';
import { RESOURCES, resBySlug } from '@/lib/resources';
import { SITE } from '@/lib/site';
import { seo } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => RESOURCES.map((r) => ({ slug: r.slug }));
export async function generateMetadata({ params }: Props) {
  const r = resBySlug[(await params).slug];
  return seo({ title: r.seoTitle, description: r.seoDesc, path: `/resources/${r.slug}/`, image: `/assets/og/${r.slug}.png` });
}

export default async function ResourcePage({ params }: Props) {
  const r = resBySlug[(await params).slug];
  if (!r) notFound();
  return (
    <>
      <JsonLd data={[
        { '@type': 'DigitalDocument', name: r.title, description: r.seoDesc, encodingFormat: 'application/pdf', publisher: { '@id': `${SITE.url}/#org` }, isAccessibleForFree: true },
        breadcrumbLd([['Resources', '/resources/'], [r.title, `/resources/${r.slug}/`]]),
      ]} />
      <section className="phero" id="book"><div className="wrap res-hero">
        <div>
          <Breadcrumbs items={[{ name: 'Resources', href: '/resources/' }, { name: r.title }]} />
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>{r.h1}</h1>
          <p className="lede">{r.lede}</p>
          <h2 style={{ fontSize: '1.15rem', marginTop: 32 }}>What&apos;s inside ({r.pages})</h2>
          <ul className="inside">{r.inside.map((x) => <li key={x}><Icon name="check" /><span>{x}</span></li>)}</ul>
          <p className="muted" style={{ marginTop: 20 }}><strong>Who it&apos;s for:</strong> {r.forWho}</p>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="res-cover" src={r.cover} alt={`Cover of ${r.title}`} width={600} height={849} />
          <LeadMagnetForm slug={r.slug} title={r.title} file={r.file} />
        </div>
      </div></section>
    </>
  );
}
