import PageHero from '@/components/PageHero';
import { OfficeVisual } from '@/components/HeroVisuals';
import ProcessTimeline from '@/components/ProcessTimeline';
import JsonLd, { breadcrumbLd } from '@/components/JsonLd';
import { ServiceGrid } from '@/components/ServiceCard';
import { FinalCta } from '@/components/Sections';
import { VALUES } from '@/lib/content';
import Team from '@/components/Team';
import ClientLogos from '@/components/ClientLogos';
import { OfficeBand } from '@/components/Office';
import { SERVICES } from '@/lib/services';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'About Procor Compliance Solutions LLP | New Delhi',
  description: 'Procor Compliance Solutions LLP is a New Delhi-based partner for payroll, statutory compliance, HR operations, accounting and corporate advisory.',
  path: '/about/',
});

export default function About() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['About us', '/about/']])]} />
      <PageHero crumbs={[{ name: 'About us' }]} title="A compliance and business operations partner for Indian businesses"
        lede="Procor Compliance Solutions LLP helps businesses simplify regulatory complexity across payroll, statutory compliance, HR operations, accounting, taxation and corporate advisory, from its office in New Delhi." visual={<OfficeVisual />} />
      <section><div className="wrap two">
        <div><p className="kicker">Our story</p><h2>Founded in 2018. Built around one integrated platform.</h2></div>
        <div>
          <p className="lede">Procor was founded in 2018 to give businesses structured, reliable and efficient compliance support across multiple domains, and has grown steadily into a trusted partner for organisations across India and abroad.</p>
          <p className="lede">Our portfolio spans income tax, GST and indirect taxation, corporate law advisory and filings, payroll and statutory compliances, business incorporation and registrations, licensing, and data entry and MIS outsourcing, so clients have a single, integrated partner for their regulatory needs.</p>
          <p className="lede">What sets Procor apart is combining technical expertise with a client-centric approach. The regulatory landscape is dynamic and often complex, so we put strong emphasis on staying updated, planning proactively and executing meticulously.</p>
        </div>
      </div></section>
      <section className="tint"><div className="wrap two">
        <div><p className="kicker">What we believe</p><h2>Compliance should run on process, not on heroics.</h2></div>
        <div><p className="lede">Most compliance failures aren&apos;t caused by a lack of knowledge. They happen when work depends on one person&apos;s memory, when handoffs between vendors break, or when nobody owns the calendar.</p>
          <p className="lede">Procor was built around the opposite idea: documented SOPs, a maintained statutory calendar, a named point of contact and scheduled reviews on every engagement.</p></div>
      </div></section>
      <section><div className="wrap"><div className="sec-head"><p className="kicker">Our approach</p><h2>The same four steps, every client</h2></div><ProcessTimeline /></div></section>
      <section className="tint" id="leadership" aria-labelledby="lead-h"><div className="wrap">
        <div className="sec-head"><p className="kicker">Leadership</p><h2 id="lead-h">The partners accountable for your compliance</h2>
          <p className="lede">Each practice is led by a partner, so the person answerable for your payroll, compliance or finance work is never more than one call away.</p></div>
        <Team />
        <div className="values-row"><h3 className="values-h">What we stand for</h3><ul className="values">{VALUES.map((v) => <li key={v}>{v}</li>)}</ul></div>
      </div></section>
      <OfficeBand />
      <section className="tint"><div className="wrap"><div className="sec-head"><p className="kicker">Clients</p><h2>Who we work with</h2></div><ClientLogos /></div></section>
      <section><div className="wrap"><div className="sec-head"><h2>Our services</h2></div><ServiceGrid items={SERVICES} /></div></section>
      <FinalCta />
    </>
  );
}
