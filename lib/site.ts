export const SITE = {
  name: 'Procor Compliance Solutions LLP',
  llpin: 'AAX-1796', // MCA record
  url: 'https://procor.co.in',
  phone: '+91 99999 54416',
  tel: 'tel:+919999954416',
  email: 'info@procor.co.in',
  address: 'A-26, 2nd Floor, Block B, Mohan Cooperative Industrial Estate, New Delhi, Delhi 110044',
  street: 'A-26, 2nd Floor, Block B, Mohan Cooperative Industrial Estate',
  // TODO(procor): replace with a branded Calendly link, e.g. calendly.com/procor/consultation
  calendly: 'https://calendly.com/kumarparas93/30min',
  whatsapp: 'https://api.whatsapp.com/send?phone=919999954416&text=Hello%20Procor',
  mapQuery: 'A-26 Block B Mohan Cooperative Industrial Estate New Delhi 110044',
  hours: 'Monday – Friday, 10:00 am – 7:00 pm',
  leadEndpoint: '/api/contact',
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/procor-compliance-solutionsllp/' },
    { name: 'Facebook', url: 'https://www.facebook.com/people/Procor-Compliance-Solutions-LLP/61586147813549/' },
    { name: 'Instagram', url: 'https://www.instagram.com/procor_compliance' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ProcorComplianceSolutionsL' },
  ],
} as const;

/** Office photos (AI-upscaled from Procor's originals). */
export const OFFICE_PHOTOS = {
  main: { src: '/assets/office/office-lounge-1132.webp', small: '/assets/office/office-lounge-640.webp', w: 1132, h: 640, alt: 'Seating area and glass-walled meeting rooms at the Procor office, New Delhi' },
  tiles: [
    { src: '/assets/office/office-meeting-rooms-540.webp', w: 540, h: 600, alt: 'Lounge seating and glass-walled meeting rooms at the Procor office' },
    { src: '/assets/office/office-reception.webp', w: 564, h: 626, alt: 'Reception lounge at the Procor office' },
  ],
};

/** Procor HRMS: group company product, linked from nav, home, service pages and footer. */
export const HRMS = {
  name: 'Procor HRMS',
  entity: 'Procor Digital Solutions Pvt Ltd',
  url: 'https://www.procorhrms.com/',
  // Verified figures supplied by Procor for HRMS marketing.
  facts: [['100+', 'companies live'], ['10,000+', 'users in India']] as [string, string][],
  modules: ['Core HR', 'Onboarding', 'Recruitment', 'Attendance', 'Leave', 'Payroll', 'Investment', 'Reimbursement', 'Performance', 'Asset', 'Helpdesk'],
};
/** Outbound HRMS link tagged so procorhrms.com analytics can attribute visits by placement. */
export const hrmsLink = (placement: string) =>
  `${HRMS.url}?utm_source=procor.co.in&utm_medium=referral&utm_campaign=procor_compliance&utm_content=${placement}`;

/** Set NEXT_PUBLIC_SHOW_PLACEHOLDERS=1 to render [CONTENT NEEDED] markers (review builds only). */
export const SHOW_PLACEHOLDERS = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === '1';

export const CONTACT_BOOK = (service = '') => `/contact/${service ? `?service=${service}` : ''}#book`;
