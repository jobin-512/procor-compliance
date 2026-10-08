import Link from 'next/link';
import { HubVisual } from '@/components/HeroVisuals';
import PageHero from '@/components/PageHero';
import ProcessTimeline from '@/components/ProcessTimeline';
import JsonLd, { breadcrumbLd } from '@/components/JsonLd';
import { ServiceGrid } from '@/components/ServiceCard';
import { CtaBand, FinalCta } from '@/components/Sections';
import { SERVICES } from '@/lib/services';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Payroll, Compliance & HR Outsourcing Services | Procor',
  description: "Explore Procor's seven services: payroll, payroll compliance, HR operations, labour law, finance & accounting, corporate & tax advisory and HRMS application management.",
  path: '/services/',
});

export default function Services() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Services', '/services/']])]} />
      <PageHero crumbs={[{ name: 'Services' }]} title="Payroll, compliance and business operations services"
        lede="Seven practices that cover the operational obligations behind every employee and every transaction. Engage one, or combine several under a single point of contact." visual={<HubVisual />} />
      <section aria-labelledby="svcs-h"><div className="wrap">
        <h2 id="svcs-h" className="sr">All services</h2>
        <ServiceGrid items={SERVICES} />
        <CtaBand title="Want a view of your current exposure?" text="Ask for a compliance assessment. We'll map what applies to you and what is pending.">
          <Link className="btn btn-primary" href="/contact/?service=assessment#book">Get a compliance assessment</Link>
        </CtaBand>
      </div></section>
      <section className="tint"><div className="wrap"><div className="sec-head"><h2>How every engagement runs</h2></div><ProcessTimeline /></div></section>
      <FinalCta />
    </>
  );
}
