import { notFound } from 'next/navigation';
import { ServiceVisual } from '@/components/HeroVisuals';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQ from '@/components/FAQ';
import JsonLd, { breadcrumbLd, faqLd } from '@/components/JsonLd';
import { ServiceGrid } from '@/components/ServiceCard';
import { BookButton } from '@/components/Buttons';
import { CtaBand, FinalCta, ResourcePromo } from '@/components/Sections';
import { SERVICES, bySlug } from '@/lib/services';
import { resBySlug } from '@/lib/resources';
import { SITE } from '@/lib/site';
import { seo } from '@/lib/seo';
import { HrmsCallout } from '@/components/Hrms';

const HRMS_SLUGS = ['payroll-processing', 'hr-operations', 'payroll-compliance'];

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => SERVICES.map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: Props) {
  const s = bySlug[(await params).slug];
  return seo({ title: s.seoTitle, description: s.seoDesc, path: s.url! });
}

export default async function ServicePage({ params }: Props) {
  const s = bySlug[(await params).slug];
  if (!s) notFound();
  return (
    <>
      <JsonLd data={[
        { '@type': 'Service', name: s.name, serviceType: s.name, description: s.seoDesc, provider: { '@id': `${SITE.url}/#org` }, areaServed: 'IN', url: SITE.url + s.url },
        breadcrumbLd([['Services', '/services/'], [s.name, s.url!]]), faqLd(s.faqs),
      ]} />
      <PageHero crumbs={[{ name: 'Services', href: '/services/' }, { name: s.name }]} title={s.h1} lede={s.lede} service={s.slug} visual={<ServiceVisual s={s} />} />
      <section><div className="wrap two">
        <div><p className="kicker">The problem</p><h2>{s.problem[0]}</h2><p className="lede" style={{ marginTop: 16 }}>{s.problem[1]}</p></div>
        <div><h2 style={{ fontSize: '1.4rem', marginBottom: 12 }}>What Procor handles</h2>
          <ul className="checks">{s.handles.map((h) => <li key={h}><Icon name="check" /><span>{h}</span></li>)}</ul>
          {HRMS_SLUGS.includes(s.slug) && <HrmsCallout placement={`service_${s.slug}`} />}</div>
      </div></section>
      <section className="tint"><div className="wrap">
        <div className="sec-head"><p className="kicker">Scope of services</p><h2>What&apos;s included</h2><p className="lede">The exact scope is agreed in writing during goal setting.</p></div>
        <div className="scope">{s.scope.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
        <CtaBand title="Want this scoped for your company?" text="Share your headcount and locations and we'll outline what Procor would handle."><BookButton service={s.slug} /></CtaBand>
      </div></section>
      <section><div className="wrap"><div className="sec-head"><p className="kicker">Process</p><h2>How we run it</h2></div><ProcessTimeline /></div></section>
      <section className="tint"><div className="wrap two">
        <div><p className="kicker">Key benefits</p><h2 style={{ marginBottom: 24 }}>What changes for your team</h2>
          <div className="why" style={{ gridTemplateColumns: '1fr' }}>{s.benefits.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div></div>
        <div className="aside-card"><h3>Who needs this service</h3>
          <ul className="checks">{s.who.map((w) => <li key={w}><Icon name="check" /><span>{w}</span></li>)}</ul><BookButton service={s.slug} /></div>
      </div></section>
      <section><div className="wrap faq-grid"><div><p className="kicker">FAQ</p><h2>{s.name}: common questions</h2></div><FAQ items={s.faqs} /></div></section>
      <section className="tint"><div className="wrap">
        <ResourcePromo r={resBySlug[s.resource]} />
        <div className="sec-head" style={{ marginTop: 64 }}><h2>Related services</h2></div>
        <ServiceGrid className="related" items={s.related.map((k) => bySlug[k])} />
      </div></section>
      <FinalCta service={s.slug} />
    </>
  );
}
