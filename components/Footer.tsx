import Link from 'next/link';
import Icon from './Icon';
import { SERVICES } from '@/lib/services';
import { SITE, HRMS, hrmsLink } from '@/lib/site';
import { ExtIcon } from './Hrms';

const SOC_ICON: Record<string, string> = { LinkedIn: 'li', Facebook: 'fb', Instagram: 'ig', YouTube: 'yt' };

export default function Footer() {
  return (
    <footer className="ftr"><div className="wrap">
      <div className="ftr-grid">
        <div className="about">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Link className="logo" href="/" aria-label="Procor home"><img src="/assets/procor-logo.svg" alt="Procor" width={130} height={60} loading="lazy" /></Link>
          <p>Procor Compliance Solutions LLP runs payroll, statutory compliance, HR operations, accounting, taxation and corporate advisory for businesses across India.</p>
          <div className="social">{SITE.social.map((s) => <a key={s.name} href={s.url} target="_blank" rel="noopener" aria-label={`Procor on ${s.name}`}><Icon name={SOC_ICON[s.name]} /></a>)}</div>
        </div>
        <div><h2>Company</h2><ul>
          <li><Link href="/about/">About us</Link></li><li><Link href="/services/">Services</Link></li><li><Link href="/who-we-help/">Who we help</Link></li>
          <li><Link href="/insights/">Insights</Link></li><li><Link href="/resources/">Free resources</Link></li><li><Link href="/contact/">Contact</Link></li></ul></div>
        <div><h2>Services</h2><ul>{SERVICES.map((s) => <li key={s.slug}><Link href={s.url!}>{s.name.replace('Corporate, Taxation, Regulatory & Business Advisory', 'Corporate & Tax Advisory')}</Link></li>)}
          <li className="ftr-hrms"><a href={hrmsLink('footer')} target="_blank" rel="noopener">{HRMS.name} <ExtIcon /></a><span>by {HRMS.entity}</span></li></ul></div>
        <div><h2>Contact</h2><ul><li><a href={SITE.tel}>{SITE.phone}</a></li><li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li><li>{SITE.address}</li><li>{SITE.hours}</li></ul></div>
      </div>
      <div className="ftr-base">
        <span>© {new Date().getFullYear()} {SITE.name} · LLPIN {SITE.llpin}. All rights reserved.</span>
        <span><Link href="/privacy-policy/">Privacy policy</Link> · <Link href="/terms/">Terms &amp; conditions</Link></span>
      </div>
    </div></footer>
  );
}
