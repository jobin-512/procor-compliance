import Breadcrumbs from './Breadcrumbs';
import JsonLd, { breadcrumbLd } from './JsonLd';
import { loadLegal } from '@/lib/legal';

export default function LegalPage({ slug }: { slug: string }) {
  const { title, updated, html } = loadLegal(slug);
  return (
    <>
      <JsonLd data={[breadcrumbLd([[title, `/${slug}/`]])]} />
      <section className="phero"><div className="wrap">
        <Breadcrumbs items={[{ name: title }]} />
        <h1>{title}</h1>
        <p className="lede">Last updated: {updated}</p>
      </div></section>
      <section><div className="wrap"><article className="prose legal" dangerouslySetInnerHTML={{ __html: html }} /></div></section>
    </>
  );
}
