import Link from 'next/link';
import Icon from './Icon';
import { CONTACT_BOOK, SITE } from '@/lib/site';

export const BookButton = ({ service = '', className = 'btn btn-primary' }: { service?: string; className?: string }) => (
  <Link className={className} href={CONTACT_BOOK(service)}>Book a free consultation</Link>
);
export const CallButton = ({ className = 'btn btn-ghost' }: { className?: string }) => (
  <a className={className} href={SITE.tel}><Icon name="phone" /> Call {SITE.phone}</a>
);
export const ArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link className="link-arrow" href={href}>{children} <Icon name="arrow" size={18} /></Link>
);
