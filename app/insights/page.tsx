import PageHero from '@/components/PageHero';
import JsonLd, { breadcrumbLd } from '@/components/JsonLd';
import { FinalCta, InsightsGrid, ResourcePromo } from '@/components/Sections';
import { getPosts } from '@/lib/posts';
import { RESOURCES } from '@/lib/resources';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Payroll, Labour Law & Tax Insights for India | Procor',
  description: 'Practical articles on payroll, labour laws, tax, accounting and corporate compliance in India from the Procor team.',
  path: '/insights/',
});

export default function Insights() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Insights', '/insights/']])]} />
      <PageHero crumbs={[{ name: 'Insights' }]} title="Insights on payroll, labour law, tax and compliance in India"
        lede="Practical guidance from the Procor team for founders, finance heads and HR leaders." ctas={false} />
      <section aria-labelledby="all-h"><div className="wrap"><h2 id="all-h" className="sr">All articles</h2><InsightsGrid posts={getPosts()} /></div></section>
      <section className="tint"><div className="wrap">
        <div className="sec-head"><h2>Free resources</h2></div>
        <div style={{ display: 'grid', gap: 20 }}>{RESOURCES.map((r) => <ResourcePromo key={r.slug} r={r} />)}</div>
      </div></section>
      <FinalCta />
    </>
  );
}
