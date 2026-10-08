export type QA = { q: string; a: string; needed?: string };

export const STEPS: [string, string][] = [
  ['Goal setting', 'We map your obligations and agree, in writing, exactly what Procor will handle.'],
  ['Dedicated SPOC', 'One named point of contact owns your account end to end.'],
  ['Implementation', "Work runs on documented SOPs, not on any one person's memory."],
  ['Review', 'Scheduled reviews and audits catch gaps before they become notices.'],
];

// Client logos supplied by Procor (Sept 2026). Files in public/assets/clients/<slug>.png are single-colour
// alpha masks (tinted via CSS), with optical display sizes so wide wordmarks and compact marks look balanced.
export const CLIENT_LOGOS: { name: string; slug: string; w: number; h: number }[] = [
  { name: 'Blinkit', slug: 'blinkit', w: 113, h: 30 },
  { name: 'Moglix', slug: 'moglix', w: 112, h: 38 },
  { name: 'Darwinbox', slug: 'darwinbox', w: 136, h: 31 },
  { name: 'Steelcase', slug: 'steelcase', w: 150, h: 28 },
  { name: 'Coding Ninjas', slug: 'coding-ninjas', w: 152, h: 28 },
  { name: 'CollegeDekho', slug: 'collegedekho', w: 105, h: 39 },
  { name: 'Blackberrys', slug: 'blackberrys', w: 170, h: 22 },
  { name: 'Euler', slug: 'euler', w: 159, h: 26 },
  { name: 'Kelly+Partners', slug: 'kelly-partners', w: 168, h: 24 },
  { name: 'The Acheson Group', slug: 'acheson-group', w: 96, h: 44 },
  { name: 'Alt.F Coworking', slug: 'altf', w: 91, h: 45 },
  { name: 'Ambak', slug: 'ambak', w: 120, h: 35 },
  { name: 'Acelerar', slug: 'acelerar', w: 168, h: 24 },
  { name: 'Gravity', slug: 'gravity', w: 109, h: 38 },
  { name: 'Greenpod Labs', slug: 'greenpod-labs', w: 164, h: 26 },
  { name: 'Odyssey', slug: 'odyssey', w: 110, h: 37 },
  { name: 'Savapill Pharmaceuticals', slug: 'savapill', w: 113, h: 37 },
  { name: 'Trenchless Engineering', slug: 'trenchless', w: 170, h: 23 },
];
export const CLIENTS = CLIENT_LOGOS.map((c) => c.name);

// Figures exactly as stated on the current procor.co.in (no new claims).
export const FACTS: [string, string][] = [
  ['Since 2018', 'delivering compliance, payroll and advisory'],
  ['7 practices', 'under one partner and one SPOC'],
  ['10 to 10,000', 'employees: payroll at any scale'],
  ['India & abroad', 'where our clients operate'],
];

// Leadership as supplied by Procor (Sept 2026). To add a missing photo, save 800x1000 and 480x600 WebP files
// in public/assets/team/ and set `photo` to the slug used in their file names.
export type Member = { name: string; role: string; focus: string; bio: string; linkedin: string; initials: string; photo?: string };
export const TEAM: Member[] = [
  {
    name: 'Paras Jha', role: 'Designated Partner', focus: 'Finance & Operations', initials: 'PJ', photo: 'paras-jha',
    bio: 'Paras leads finance and operations at Procor, bringing expertise in compliance management, financial advisory and corporate governance. His focus is giving clients structured, reliable and ethical compliance support, built on trust, transparency and open communication.',
    linkedin: 'https://www.linkedin.com/in/paras-kumar-a78633264/',
  },
  {
    name: 'Abhishek Jha', role: 'Partner', focus: 'Payroll Operations', initials: 'AJ', photo: 'abhishek-jha',
    bio: "Abhishek heads Procor's payroll operations, responsible for accurate, on-time payroll and payroll compliance for clients. He writes regularly on payroll practice, payroll audits and compliance for companies entering India.",
    linkedin: 'https://www.linkedin.com/in/abhishek-kumar-jha-06347b101/',
  },
  {
    name: 'Kanika Magu', role: 'Designated Partner', focus: 'Compliance & Labour Laws', initials: 'KM', photo: 'kanika-magu',
    bio: "Kanika leads Procor's compliance and labour law practice, covering statutory registrations, labour law compliances and regulatory requirements for clients.",
    linkedin: 'https://www.linkedin.com/in/kanika-magu-61699135/',
  },
];
export const VALUES = ['Integrity', 'Accuracy', 'Accountability', 'Transparency'];

export const PROBLEMS: [string, string, string][] = [
  ['clock', 'Deadlines every week', 'EPF, ESIC, TDS, GST, PT and ROC each run on their own calendar.'],
  ['pay', 'Payroll that keeps changing', 'New joiners, exits, revisions and attendance changes every cycle.'],
  ['scale', 'Shifting rules', 'State-wise labour rules, the Labour Codes and the new Income-tax Act, 2025.'],
  ['alert', 'Notices and penalties', 'A late or incorrect filing turns into interest, penalties and follow-ups.'],
  ['split', 'Too many vendors', 'Payroll with one firm, tax with another, accounts with a third.'],
  ['user', "Knowledge in one person's head", 'When the person who "just knows" is on leave, things slip.'],
];

export const WHY: [string, string][] = [
  ['Structured processes', 'Every service runs on documented SOPs and a maintained statutory calendar.'],
  ['Dedicated ownership', 'A named SPOC is accountable for your account end to end.'],
  ['Multi-function expertise', 'Payroll, compliance, HR, finance and regulatory work under one partner.'],
  ['Proactive management', 'Deadlines, documentation and reviews are tracked ahead of time, not after a notice.'],
  ['Scales with you', 'The same process works for 10 employees or 10,000.'],
  ['Business focus', 'Your internal team gets its time back for strategic work.'],
];

export const STAGES: [string, string][] = [
  ['Startups', 'Incorporation, registrations, first payroll and books set up correctly from day one.'],
  ['Growing SMEs', 'Payroll, compliance and accounting that keep pace as headcount and locations grow.'],
  ['Multi-state employers', 'State-wise professional tax, LWF, Shops & Establishments and labour-law registers.'],
  ['Foreign companies entering India', 'India entry, FEMA/RBI compliance and local payroll and tax operations.'],
];

export const HOME_FAQ: QA[] = [
  { q: 'What is payroll processing?', a: "Payroll processing is the monthly cycle of collecting attendance and pay inputs, computing each employee's gross-to-net salary with statutory deductions, issuing payslips and preparing salary disbursement." },
  { q: 'What are payroll compliances in India?', a: 'They are the statutory obligations that come with paying employees: EPF and ESIC contributions, professional tax and labour welfare fund where applicable, TDS on salary with quarterly returns (Form 138, formerly Form 24Q) and annual salary TDS certificates (Form 130, formerly Form 16).' },
  { q: 'What does a payroll outsourcing company do?', a: 'It runs your payroll cycle and the related statutory filings on your behalf, following an agreed scope and calendar, while you approve outputs and keep control of pay decisions.' },
  { q: 'What labour law compliances apply to businesses in India?', a: 'It depends on your headcount, industry and states of operation. Common obligations include Shops & Establishments registration, minimum wages, bonus, gratuity, maternity benefit, holidays, statutory registers and periodic returns.' },
  { q: 'What is HR outsourcing?', a: 'HR outsourcing means a partner handles defined HR administration, such as onboarding, exits, employee records, policy administration and employee queries, while people decisions stay with you.' },
  { q: 'What is finance and accounting outsourcing?', a: 'It means a partner runs finance processes such as bookkeeping, payables, receivables, month-end close and MIS reporting, often with virtual CFO or controller support.' },
  { q: 'Why outsource payroll and compliance?', a: 'To reduce dependence on individuals, keep filings on schedule, get specialist knowledge of changing rules, and free your internal team for higher-value work.' },
  { q: 'How does Procor manage compliance?', a: 'Every engagement follows four steps: goal setting to define scope, a dedicated SPOC, SOP-driven implementation and scheduled reviews to catch gaps early.' },
  { q: 'Which businesses should outsource payroll and compliance?', a: 'Startups, growing SMEs, companies expanding into new states and foreign businesses setting up in India often benefit most, especially without a large in-house payroll, HR or finance team.' },
  { q: 'Can Procor handle just one service?', a: 'Yes. You can engage Procor for a single service, such as payroll processing, or combine several under one SPOC.' },
];

// Industries served. `eg` lists clients from the logo wall only where the fit is certain.
export const INDUSTRIES: { icon: string; name: string; text: string; eg?: string }[] = [
  { icon: 'cart', name: 'E-commerce & quick commerce', text: 'Fast-growing, multi-location workforces with high joiner and exit volumes.', eg: 'Blinkit, Moglix' },
  { icon: 'code', name: 'Technology & SaaS', text: 'Variable pay, ESOP-linked payroll and scaling teams across states.', eg: 'Darwinbox' },
  { icon: 'cap', name: 'Education & EdTech', text: 'Large academic and sales teams, contract staff and multi-city operations.', eg: 'CollegeDekho, Coding Ninjas' },
  { icon: 'bag', name: 'Retail & apparel', text: 'Store-level Shops & Establishments registrations and shift-based staff.', eg: 'Blackberrys' },
  { icon: 'pill', name: 'Pharma & life sciences', text: 'Field forces, plant workers and regulated operations.', eg: 'Savapill' },
  { icon: 'health', name: 'Healthcare', text: 'Round-the-clock staffing, clinical and non-clinical payroll structures.' },
  { icon: 'factory', name: 'Manufacturing', text: 'Factory-floor wages, overtime, contract labour and labour-law registers.', eg: 'Steelcase' },
  { icon: 'crane', name: 'Construction & infrastructure', text: 'Site-based and contract workforces across multiple states.', eg: 'Trenchless Engineering' },
  { icon: 'bolt', name: 'Automotive & electric mobility', text: 'Plant, service and sales teams with fast-changing headcount.', eg: 'Euler' },
  { icon: 'building', name: 'Real estate & coworking', text: 'Multi-centre operations and facility staff across cities.', eg: 'Alt.F Coworking' },
  { icon: 'bank', name: 'Financial services & fintech', text: 'Sales-heavy teams, incentive payroll and tight regulatory oversight.', eg: 'Ambak' },
  { icon: 'brief', name: 'Professional services', text: 'Consulting, accounting and advisory firms, including India teams of global firms.', eg: 'Kelly+Partners, The Acheson Group' },
  { icon: 'leaf', name: 'Agritech & food', text: 'Seasonal, field and processing workforces.', eg: 'Greenpod Labs' },
  { icon: 'headset', name: 'IT-enabled services & BPO', text: 'Shift allowances, large-scale onboarding and statutory compliance at volume.' },
  { icon: 'truck', name: 'Logistics & supply chain', text: 'Warehouse, delivery and fleet teams across locations.' },
  { icon: 'cup', name: 'Hospitality & food service', text: 'Outlet-level registrations, service charges and shift-based rosters.' },
];
