'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { SERVICES } from '@/lib/services';
import { SITE, CONTACT_BOOK, HRMS, hrmsLink } from '@/lib/site';
import { ExtIcon } from './Hrms';

const NAV = [
  { href: '/about/', label: 'About us' },
  { href: '/who-we-help/', label: 'Who we help' },
  { href: '/insights/', label: 'Insights' },
  { href: '/contact/', label: 'Contact us' },
];

export default function Navbar() {
  const path = usePathname() || '/';
  const [dd, setDd] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const cur = (href: string) => (path.startsWith(href) ? 'page' : undefined);

  useEffect(() => { setDd(false); setMenu(false); }, [path]);
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 8);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setDd(false); if (menu) { setMenu(false); burgerRef.current?.focus(); } } };
    const onClick = (e: MouseEvent) => { if (!ddRef.current?.contains(e.target as Node)) setDd(false); };
    const onResize = () => { if (innerWidth > 1120) setMenu(false); };
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('keydown', onKey);
    document.addEventListener('click', onClick); addEventListener('resize', onResize); onScroll();
    return () => { removeEventListener('scroll', onScroll); removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); removeEventListener('resize', onResize); };
  }, [menu]);
  useEffect(() => { document.body.style.overflow = menu ? 'hidden' : ''; }, [menu]);

  const hover = () => matchMedia('(hover:hover)').matches;
  return (
    <>
      <header className={`hdr${scrolled ? ' scrolled' : ''}`}><div className="wrap hdr-in">
        <Link className="logo" href="/" aria-label="Procor Compliance Solutions LLP, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/procor-logo.svg" alt="Procor: Payroll, Compliance, Accounting & Shared Services" width={130} height={60} />
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/about/" aria-current={cur('/about/')}>About us</Link>
          <div className={`dd${dd ? ' open' : ''}`} ref={ddRef}
            onMouseEnter={() => hover() && setDd(true)} onMouseLeave={() => hover() && setDd(false)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setDd(false); }}>
            <Link className="dd-link" href="/services/" aria-current={cur('/services/')}>Services</Link>
            <button type="button" className="dd-tog" aria-expanded={dd} aria-controls="dd-svc" aria-label="Show services menu"
              onClick={(e) => { e.stopPropagation(); setDd(!dd); }}><Icon name="chev" size={16} /></button>
            <div className="dd-panel" id="dd-svc">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={s.url!}><strong>{s.name}</strong><span>{s.short.split(',')[0].replace(/\.$/, '')}</span></Link>
              ))}
              <a className="dd-hrms" href={hrmsLink('nav_dropdown')} target="_blank" rel="noopener"><strong>{HRMS.name} <ExtIcon /></strong><span>Cloud HRMS &amp; payroll software from our group company</span></a>
              <Link className="all" href="/services/">All services</Link>
            </div>
          </div>
          <a className="nav-ext" href={hrmsLink('nav')} target="_blank" rel="noopener" aria-label={`HRMS: visit ${HRMS.name} (opens in a new tab)`}>HRMS <ExtIcon /></a>
          {NAV.slice(1).map((n) => <Link key={n.href} href={n.href} aria-current={cur(n.href)}>{n.label}</Link>)}
        </nav>
        <Link className="btn btn-primary btn-sm btn-cta" href={CONTACT_BOOK()}>Book a free consultation</Link>
        <button ref={burgerRef} className="burger" type="button" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} aria-controls="mnav"
          onClick={() => setMenu(!menu)}><Icon name={menu ? 'x' : 'menu'} size={22} /></button>
      </div></header>
      <nav className={`mnav${menu ? ' open' : ''}`} id="mnav" aria-label="Mobile" onClick={(e) => { if ((e.target as HTMLElement).closest('a')) setMenu(false); }}>
        <Link href="/">Home</Link><Link href="/about/">About us</Link><Link href="/services/">Services</Link>
        <div className="sub">{SERVICES.map((s) => <Link key={s.slug} href={s.url!}>{s.name}</Link>)}</div>
        <a href={hrmsLink('mobile_nav')} target="_blank" rel="noopener">{HRMS.name} <ExtIcon /></a>
        <Link href="/who-we-help/">Who we help</Link><Link href="/insights/">Insights</Link><Link href="/resources/">Free resources</Link><Link href="/contact/">Contact us</Link>
        <Link className="btn btn-primary" href={CONTACT_BOOK()}>Book a free consultation</Link>
        <a className="btn btn-ghost" href={SITE.tel}>Call {SITE.phone}</a>
      </nav>
    </>
  );
}
