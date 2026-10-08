import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { ServiceGrid } from '@/components/ServiceCard';
import { SERVICES } from '@/lib/services';

export const metadata = { title: 'Page not found | Procor', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Page not found' }]} title="This page doesn't exist" lede="The link may be out of date. These pages are a good place to start." ctas={false} />
      <section><div className="wrap">
        <ServiceGrid className="related" items={SERVICES.slice(0, 3)} />
        <p style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}><Link className="btn btn-primary" href="/">Go to homepage</Link><Link className="btn btn-ghost" href="/services/">All services</Link></p>
      </div></section>
    </>
  );
}
