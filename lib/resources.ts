export type Resource = {
  slug: string; title: string; short: string; coverLabel: string; cover: string; file: string; pages: string;
  seoTitle: string; seoDesc: string; h1: string; lede: string; inside: string[]; forWho: string;
};

export const RESOURCES: Resource[] = [
  {
    slug: 'compliance-calendar',
    title: 'Statutory Compliance Calendar, Oct 2026 – Sep 2027',
    short: 'Every recurring payroll, TDS, GST, ROC and FEMA due date for the next 12 months on one page per month, updated for the Income-tax Act, 2025.',
    coverLabel: 'Statutory compliance calendar 2026–27',
    cover: '/assets/covers/compliance-calendar.webp',
    file: '/downloads/procor-compliance-calendar-2026-27.pdf',
    pages: '14-page PDF',
    seoTitle: 'Statutory Compliance Calendar 2026-27 (Free PDF) | Procor',
    seoDesc: 'Free month-by-month compliance calendar for Indian businesses: EPF, ESIC, TDS (Form 138/130), GST, ROC, LLP and FEMA due dates, Oct 2026 to Sep 2027.',
    h1: 'Free statutory compliance calendar for Indian businesses, Oct 2026 – Sep 2027',
    lede: 'A printable, month-by-month calendar of the payroll, TDS, GST, corporate and FEMA due dates most Indian companies have to meet, with the new form numbers under the Income-tax Act, 2025.',
    inside: [
      'Monthly deadlines: TDS deposit, EPF and ESIC, GSTR-1 and GSTR-3B',
      'Quarterly TDS returns on the new forms (138, 140, 143, 144)',
      'Annual dates: Form 130 (formerly Form 16), advance tax, ITR and tax audit',
      'ROC and LLP filings: AOC-4, MGT-7, DIR-3 KYC, DPT-3, MSME-1, Form 8 and Form 11',
      'FEMA annual return (FLA) and a quick old-to-new form reference',
    ],
    forWho: 'Founders, finance heads and HR teams who want every due date in one place.',
  },
  {
    slug: 'payroll-compliance-health-check',
    title: 'Payroll Compliance Health Check',
    short: 'A 30-point self-assessment across EPF, ESIC, PT and LWF, TDS on salary, labour-law records and payroll controls, with a simple way to score where you stand.',
    coverLabel: 'Payroll compliance health check',
    cover: '/assets/covers/payroll-compliance-health-check.webp',
    file: '/downloads/procor-payroll-compliance-health-check.pdf',
    pages: '5-page PDF',
    seoTitle: 'Payroll Compliance Checklist for India (Free PDF) | Procor',
    seoDesc: 'Free 30-point payroll compliance health check: EPF, ESIC, professional tax, LWF, TDS on salary, labour registers and payroll controls. Score your risk in 15 minutes.',
    h1: 'Payroll compliance health check: a 30-point self-assessment',
    lede: 'Answer yes or no to 30 questions and find out where your payroll compliance is solid, where it is exposed, and what to fix first. Takes about 15 minutes.',
    inside: [
      'EPF and ESIC: registration, coverage, deposits and reconciliation',
      'Professional tax and labour welfare fund, state by state',
      'TDS on salary: declarations, deposits, Form 138 returns and Form 130',
      'Labour-law records: registrations, registers, wages, bonus and gratuity',
      'Payroll controls: inputs, approvals, full & final and continuity',
    ],
    forWho: 'HR heads, payroll managers and CFOs reviewing payroll risk before an audit or a vendor change.',
  },
];

export const resBySlug = Object.fromEntries(RESOURCES.map((r) => [r.slug, r])) as Record<string, Resource>;
