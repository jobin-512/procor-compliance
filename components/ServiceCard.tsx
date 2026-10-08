import Link from 'next/link';
import Icon from './Icon';
import type { Service } from '@/lib/services';

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link className="svc" href={s.url!}>
      <div className="svc-top"><span className="svc-ic"><Icon name={s.icon} /></span><span className="svc-no" aria-hidden="true">{s.no}</span></div>
      <h3>{s.name}</h3>
      <p>{s.short}</p>
      <ul aria-label="Key capabilities">{s.caps.map((c) => <li key={c}>{c}</li>)}</ul>
      <span className="link-arrow">Explore service <Icon name="arrow" size={18} /></span>
    </Link>
  );
}
export const ServiceGrid = ({ items, className = 'svc-grid' }: { items: Service[]; className?: string }) => (
  <div className={className}>{items.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
);
