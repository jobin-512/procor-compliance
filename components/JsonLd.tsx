import type { QA } from '@/lib/content';
import { SITE } from '@/lib/site';
import { TEAM } from '@/lib/content';

export default function JsonLd({ data }: { data: object[] }) {
  if (!data.length) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': data }).replace(/</g, '\\u003c') }} />;
}
export const faqLd = (items: QA[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.filter((f) => f.a && !f.needed).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
export const breadcrumbLd = (items: [string, string][]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [['Home', '/'], ...items].map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE.url + path })),
});
export const ORG_LD = [
  { '@type': 'Organization', '@id': `${SITE.url}/#org`, name: SITE.name, url: `${SITE.url}/`, logo: `${SITE.url}/assets/procor-logo.png`, email: SITE.email, telephone: '+91-9999954416', foundingDate: '2018',
    employee: TEAM.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: `${m.role}, ${m.focus}`, sameAs: [m.linkedin], ...(m.photo ? { image: `${SITE.url}/assets/team/${m.photo}-800.webp` } : {}) })), sameAs: SITE.social.map((s) => s.url) },
  { '@type': 'ProfessionalService', '@id': `${SITE.url}/#local`, name: SITE.name, parentOrganization: { '@id': `${SITE.url}/#org` }, url: `${SITE.url}/`, image: `${SITE.url}/assets/procor-logo.png`, telephone: '+91-9999954416', email: SITE.email,
    address: { '@type': 'PostalAddress', streetAddress: SITE.street, addressLocality: 'New Delhi', addressRegion: 'Delhi', postalCode: '110044', addressCountry: 'IN' }, areaServed: 'IN',
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' }] },
];
