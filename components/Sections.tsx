import Link from 'next/link';
import Icon from './Icon';
import { BookButton } from './Buttons';
import { STAGES } from '@/lib/content';
import { SITE } from '@/lib/site';
import type { Post } from '@/lib/posts';
import { postHref } from '@/lib/posts';
import type { Resource } from '@/lib/resources';

export const Stages = () => (
  <div className="stages">{STAGES.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
);

export const CtaBand = ({ title, text, children }: { title: string; text: string; children: React.ReactNode }) => (
  <div className="band"><div><h3>{title}</h3><p>{text}</p></div>{children}</div>
);

export const FinalCta = ({ service = '' }: { service?: string }) => (
  <section className="final" aria-labelledby="final-h"><div className="wrap"><div className="final-card">
    <div><h2 id="final-h">Let&apos;s take compliance off your plate.</h2>
      <p>A 30-minute call to understand how your payroll, compliance, HR and accounts run today, and which parts Procor could take over. No obligation.</p></div>
    <div className="acts">
      <BookButton service={service} />
      <a className="btn btn-ghost" href={SITE.tel}><Icon name="phone" /> Call {SITE.phone}</a>
      <a className="btn btn-ghost" href={SITE.whatsapp} target="_blank" rel="noopener">Message on WhatsApp</a>
    </div>
  </div></div></section>
);

export const PostCard = ({ p, lead, thumb }: { p: Post; lead?: boolean; thumb?: boolean }) => (
  <Link className={`post${lead ? ' lead' : ''}${thumb ? ' has-thumb' : ''}`} href={postHref(p)}>
    {(lead || thumb) && (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="post-img" src={`/assets/insights/${p.slug}.webp`} alt="" width={800} height={420} loading={lead ? 'eager' : 'lazy'} />
    )}
    <div className="meta"><b>{p.category}</b><span>{p.dateLabel}</span>{p.migrated && <span>{p.readingMins} min read</span>}</div>
    <h3>{p.title}</h3><p>{p.description}</p>
    <span className="link-arrow">Read article <Icon name="arrow" size={18} /></span>
  </Link>
);

export const InsightsList = ({ posts }: { posts: Post[] }) => {
  const [a, ...rest] = posts;
  return <div className="ins"><PostCard p={a} lead /><div>{rest.map((p) => <PostCard key={p.slug} p={p} />)}</div></div>;
};

/** Resource cover: the real PDF cover thumbnail when available, otherwise a styled placeholder. */
export const Cover = ({ label, large, img }: { label: string; large?: boolean; img?: string }) => img ? (
  // eslint-disable-next-line @next/next/no-img-element
  <img className={`cover-img${large ? ' lg' : ''}`} src={img} alt="" width={600} height={849} loading="lazy" />
) : (
  <div className={`cover${large ? ' lg' : ''}`} aria-hidden="true"><span>{label}</span></div>
);

export const ResourcePromo = ({ r }: { r: Resource }) => (
  <div className="promo">
    <Cover label={r.coverLabel} img={r.cover} />
    <div><h3>Free download: {r.title}</h3><p>{r.short}</p></div>
    <Link className="btn btn-primary" href={`/resources/${r.slug}/`}>Get the free {r.slug === 'compliance-calendar' ? 'calendar' : 'checklist'}</Link>
  </div>
);

/** Full listing: newest article featured, the rest in a responsive grid. */
export const InsightsGrid = ({ posts }: { posts: Post[] }) => {
  const [a, ...rest] = posts;
  return (
    <>
      <div className="ins"><PostCard p={a} lead /><div>{rest.slice(0, 2).map((p) => <PostCard key={p.slug} p={p} />)}</div></div>
      {rest.length > 2 && <div className="post-grid">{rest.slice(2).map((p) => <PostCard key={p.slug} p={p} thumb />)}</div>}
    </>
  );
};
