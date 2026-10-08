import Link from 'next/link';
import Icon from '@/components/Icon';
import HeroCalendar from '@/components/HeroCalendar';
import HubDiagram from '@/components/HubDiagram';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQ from '@/components/FAQ';
import JsonLd, { faqLd } from '@/components/JsonLd';
import { ServiceGrid } from '@/components/ServiceCard';
import { BookButton, CallButton, ArrowLink } from '@/components/Buttons';
import { CtaBand, FinalCta, InsightsList, ResourcePromo, Stages } from '@/components/Sections';
import { FACTS, HOME_FAQ, PROBLEMS, WHY } from '@/lib/content';
import { TeamStrip } from '@/components/Team';
import { IndustryChips } from '@/components/Industries';
import ClientLogos from '@/components/ClientLogos';
import { HrmsSection } from '@/components/Hrms';
import { SERVICES } from '@/lib/services';
import { getPosts } from '@/lib/posts';
import { resBySlug } from '@/lib/resources';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Payroll, Compliance & HR Outsourcing in India | Procor',
  description: 'Procor runs payroll, EPF/ESIC and labour-law compliance, HR operations, accounting and tax advisory for businesses across India. Book a free consultation.',
  path: '/',
});

export default function Home() {
  const posts = getPosts().slice(0, 3);
  return (
    <>
      <JsonLd data={[faqLd(HOME_FAQ)]} />
      <section className="hero" aria-labelledby="h1"><div className="wrap hero-grid">
        <div>
          <p className="kicker">Payroll, compliance, accounting &amp; shared services</p>
          <h1 id="h1">The deadlines are ours. The business is yours.</h1>
          <p className="lede">Procor runs payroll, statutory and labour-law compliance, HR operations, accounting and regulatory work for businesses across India, on a fixed, SOP-driven process with one named point of contact accountable for all of it.</p>
          <div className="hero-cta"><BookButton /><Link className="btn btn-ghost" href="/services/">Explore our services</Link></div>
          <p className="hero-note">Free 30-minute call. We&apos;ll tell you what you can hand over and what it involves.</p>
        </div>
        <div><HeroCalendar /></div>
      </div></section>

      <section className="trust" aria-labelledby="trust-h"><div className="wrap">
        <div className="trust-in"><h2 id="trust-h" className="trust-h">Trusted by teams at companies including</h2><ClientLogos /></div>
        <div className="facts">{FACTS.map(([b, t]) => <div key={b}><b>{b}</b><span>{t}</span></div>)}</div>
      </div></section>

      <section aria-labelledby="prob-h"><div className="wrap">
        <div className="sec-head"><p className="kicker">The challenge</p><h2 id="prob-h">Compliance shouldn&apos;t slow your business down.</h2>
          <p className="lede">As a company grows, the operational load behind every employee and every transaction grows faster. Most of it is invisible until something is missed.</p></div>
        <div className="probs">{PROBLEMS.map(([i, h, p]) => <div className="prob" key={h}><Icon name={i} /><div><h3>{h}</h3><p>{p}</p></div></div>)}</div>
      </div></section>

      <section className="tint" aria-labelledby="val-h"><div className="wrap hub-wrap">
        <div><p className="kicker">Why one partner</p><h2 id="val-h">One partner. Seven business-critical functions.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Payroll feeds compliance. HR records feed payroll. Accounting feeds tax. When one team runs all of it, the handoffs stop breaking.</p>
          <ul className="pillars"><li><b>Less risk</b><span>Fewer missed filings and fewer notices.</span></li><li><b>More visibility</b><span>One point of contact who knows the full picture.</span></li><li><b>More time</b><span>Your team works on growth, not on portals.</span></li></ul></div>
        <div className="hub"><HubDiagram /></div>
      </div></section>

      <section aria-labelledby="svc-h"><div className="wrap">
        <div className="sec-head"><p className="kicker">Services</p><h2 id="svc-h">What Procor runs for you</h2>
          <p className="lede">Engage one practice or combine several. Each is a team, an SOP library and a filing calendar already running for clients.</p></div>
        <ServiceGrid items={SERVICES} />
        <CtaBand title="Not sure which services you need?" text="Tell us how your payroll, compliance and accounts run today. We'll suggest what to hand over first."><BookButton /></CtaBand>
      </div></section>

      <HrmsSection />

      <section aria-labelledby="how-h"><div className="wrap">
        <div className="sec-head"><p className="kicker">How Procor works</p><h2 id="how-h">A process, not personalities.</h2>
          <p className="lede">The same four steps govern every engagement. That is why filings stay on schedule when people go on leave.</p></div>
        <ProcessTimeline /><div style={{ marginTop: 44 }}><CallButton /></div>
      </div></section>

      <section className="tint" aria-labelledby="why-h"><div className="wrap">
        <div className="sec-head"><p className="kicker">Why Procor</p><h2 id="why-h">What working with Procor is like</h2></div>
        <div className="why">{WHY.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
        <TeamStrip />
      </div></section>

      <section aria-labelledby="who-h"><div className="wrap">
        <div className="sec-head"><p className="kicker">Who we help</p><h2 id="who-h">Built for businesses at every stage of growth</h2></div>
        <Stages />
        <IndustryChips />
      </div></section>

      <section className="tint" aria-labelledby="ins-h"><div className="wrap">
        <div className="sec-head"><p className="kicker">Insights</p><h2 id="ins-h">From the Procor desk</h2></div>
        <InsightsList posts={posts} />
        <p style={{ margin: '28px 0 40px' }}><ArrowLink href="/insights/">All insights</ArrowLink></p>
        <ResourcePromo r={resBySlug['compliance-calendar']} />
      </div></section>

      <section aria-labelledby="faq-h"><div className="wrap faq-grid">
        <div><p className="kicker">FAQ</p><h2 id="faq-h">Questions decision-makers ask us</h2>
          <p className="lede" style={{ marginTop: 16 }}>Can&apos;t find your answer? <Link href="/contact/">Ask the team directly.</Link></p></div>
        <FAQ items={HOME_FAQ} />
      </div></section>
      <FinalCta />
    </>
  );
}
