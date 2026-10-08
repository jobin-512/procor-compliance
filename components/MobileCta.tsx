'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE, CONTACT_BOOK } from '@/lib/site';

/** Sticky Call / Book bar on small screens, shown after the hero; hidden on pages that have their own form. */
export default function MobileCta() {
  const path = usePathname() || '/';
  const [show, setShow] = useState(false);
  const hide = path.startsWith('/contact') || path.startsWith('/resources/');
  useEffect(() => {
    const f = () => setShow(scrollY > 560); addEventListener('scroll', f, { passive: true }); f();
    return () => removeEventListener('scroll', f);
  }, []);
  if (hide) return null;
  return (
    <div className={`mcta${show ? ' show' : ''}`} aria-label="Quick actions">
      <a className="btn btn-ghost" href={SITE.tel}>Call</a>
      <Link className="btn btn-primary" href={CONTACT_BOOK()}>Book free consultation</Link>
    </div>
  );
}
