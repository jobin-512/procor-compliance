import Link from 'next/link';
import PageHero from '@/components/PageHero';
import JsonLd, { breadcrumbLd } from '@/components/JsonLd';
import { Cover, FinalCta } from '@/components/Sections';
import { RESOURCES } from '@/lib/resources';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Free Payroll & Compliance Resources for India | Procor',
  description: 'Free downloads for Indian businesses: a 12-month statutory compliance calendar and a 30-point payroll compliance health check.',
  path: '/resources/',
});

export default function Resources() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Resources', '/resources/']])]} />
      <PageHero crumbs={[{ name: 'Resources' }]} title="Free payroll and compliance resources"
        lede="Practical tools you can use today, whether or not you work with Procor." ctas={false} />
      <section aria-labelledby="dl-h"><div className="wrap"><h2 id="dl-h" className="sr">Free downloads</h2><div className="res-grid">
        {RESOURCES.map((r) => (
          <Link key={r.slug} className="res-card" href={`/resources/${r.slug}/`}>
            <Cover label={r.coverLabel} img={r.cover} />
            <div><h3>{r.title}</h3><p>{r.short}</p><span className="link-arrow">Get the free PDF</span></div>
          </Link>
        ))}
      </div></div></section>
      <FinalCta />
    </>
  );
}
