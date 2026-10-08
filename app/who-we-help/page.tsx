import PageHero from '@/components/PageHero';
import { IndustryMosaic } from '@/components/HeroVisuals';
import Industries from '@/components/Industries';
import JsonLd, { breadcrumbLd } from '@/components/JsonLd';
import { ServiceGrid } from '@/components/ServiceCard';
import { FinalCta, Stages } from '@/components/Sections';
import { bySlug } from '@/lib/services';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Industries We Serve: Payroll & Compliance | Procor',
  description: 'Payroll, labour-law and compliance support for 16 industries, from e-commerce, SaaS and EdTech to manufacturing, pharma and logistics, at every growth stage.',
  path: '/who-we-help/',
});

export default function WhoWeHelp() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Who we help', '/who-we-help/']])]} />
      <PageHero crumbs={[{ name: 'Who we help' }]} title="Payroll and compliance support across industries"
        lede="From quick commerce and SaaS to manufacturing, pharma and logistics, Procor supports startups, growing SMEs, multi-state employers and foreign companies entering India." visual={<IndustryMosaic />} />
      <section id="industries" aria-labelledby="ind-h"><div className="wrap">
        <div className="sec-head"><p className="kicker">Industries</p><h2 id="ind-h">Industries we serve</h2>
          <p className="lede">Every industry brings its own mix of payroll structures, registrations and labour-law obligations. Here is where we work, and what typically matters there.</p></div>
        <Industries />
      </div></section>
      <section className="tint" aria-labelledby="stage-h"><div className="wrap">
        <div className="sec-head"><p className="kicker">Stages</p><h2 id="stage-h">From first hire to multi-state operations</h2></div>
        <Stages />
      </div></section>
      <section><div className="wrap">
        <div className="sec-head"><h2>Where most clients start</h2></div>
        <ServiceGrid className="related" items={['payroll-processing', 'labour-law-compliance', 'corporate-tax-regulatory-advisory'].map((k) => bySlug[k])} />
      </div></section>
      <FinalCta />
    </>
  );
}
