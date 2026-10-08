import PageHero from '@/components/PageHero';
import { PartnersVisual } from '@/components/HeroVisuals';
import JsonLd, { breadcrumbLd } from '@/components/JsonLd';
import { ContactForm } from '@/components/LeadForm';
import { OfficePhoto } from '@/components/Office';
import MapCard from '@/components/MapCard';
import { SERVICES } from '@/lib/services';
import { SITE } from '@/lib/site';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Contact Procor | Book a Free Consultation, New Delhi',
  description: 'Talk to Procor about payroll, compliance, HR and accounting outsourcing. Call +91 99999 54416 or book a free 30-minute consultation.',
  path: '/contact/',
});

export default function Contact() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Contact', '/contact/']])]} />
      <PageHero crumbs={[{ name: 'Contact' }]} title="Book a free consultation" lede="Pick a time that suits you, or leave your details and the team will call you back." ctas={false} visual={<PartnersVisual />} />
      <section id="book"><div className="wrap contact-grid">
        <div>
          <ContactForm services={SERVICES.map(({ slug, name }) => ({ slug, name }))} />
          <div className="next"><h2>What happens next</h2><ol>
            <li><b>We reply</b><span>A member of the team contacts you to confirm a time.</span></li>
            <li><b>30-minute call</b><span>We understand your current setup, headcount and locations.</span></li>
            <li><b>Scope proposal</b><span>You receive a written scope of what Procor would handle.</span></li></ol></div>
        </div>
        <aside>
          <div className="aside-card" style={{ position: 'static' }}>
            <h3>Prefer to pick a time?</h3><p className="muted">Choose a 30-minute slot directly in our calendar.</p>
            <a className="btn btn-primary" href={SITE.calendly} target="_blank" rel="noopener">Choose a time</a>
            <a className="btn btn-ghost" style={{ width: '100%', marginTop: 10 }} href={SITE.whatsapp} target="_blank" rel="noopener">Message on WhatsApp</a>
          </div>
          <div className="info" style={{ marginTop: 28 }}>
            <div><h3>Phone</h3><a href={SITE.tel}>{SITE.phone}</a></div>
            <div><h3>Email</h3><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            <div><h3>Office</h3><p>{SITE.address}</p></div>
            <div><h3>Office hours</h3><p>{SITE.hours}</p></div>
          </div>
          <OfficePhoto />
          <MapCard />
        </aside>
      </div></section>
    </>
  );
}
