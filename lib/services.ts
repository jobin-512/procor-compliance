import type { QA } from "./content";

export type Service = {
  slug: string; no: string; icon: string; name: string; short: string; caps: string[];
  seoTitle: string; seoDesc: string; h1: string; lede: string; problem: [string, string];
  handles: string[]; scope: [string, string][]; benefits: [string, string][]; who: string[];
  faqs: QA[]; related: string[]; resource: string; url?: string;
};

// Content source: procor.co.in (services + process). Form numbers updated for the Income-tax Act, 2025.
export const SERVICES: Service[] = [
  {
    "slug": "payroll-processing",
    "no": "01",
    "icon": "pay",
    "name": "Payroll Processing",
    "short": "Accurate monthly payroll from attendance inputs to payslips, including salary structuring and full & final settlements.",
    "caps": [
      "Gross-to-net payroll",
      "Salary structuring",
      "Attendance integration",
      "Full & final settlements",
      "Payslips",
      "HRMS & ESS support"
    ],
    "seoTitle": "Payroll Processing Services in India | Procor",
    "seoDesc": "Outsourced payroll processing for Indian businesses: gross-to-net, salary structuring, attendance integration, FnF settlements and payslips, run on fixed SOPs.",
    "h1": "Payroll processing services, run the same way every month",
    "lede": "Procor runs your monthly payroll end to end, from collecting attendance and inputs to computing gross-to-net pay, issuing payslips and settling full & final dues. Whether you have 10 employees or 10,000.",
    "problem": [
      "Payroll touches every employee, every month",
      "One missed attendance change, an outdated declaration or a delayed exit settlement quickly becomes an employee escalation or a statutory mismatch. When payroll depends on one person's spreadsheet, the risk grows with every new hire."
    ],
    "handles": [
      "Monthly input collection and validation",
      "Attendance and leave data merged into the payroll cycle",
      "Gross-to-net computation, including statutory deductions",
      "Salary structuring for new hires and revisions",
      "Password-protected payslips for every employee",
      "Full & final settlement computation for exits",
      "Disbursement-ready outputs for your bank",
      "HRMS and employee self-service (ESS) support"
    ],
    "scope": [
      [
        "Payroll inputs",
        "Attendance, leave, new joiners, exits, revisions and one-time payments collected on a fixed cut-off."
      ],
      [
        "Computation",
        "Earnings, deductions, statutory contributions and TDS on salary computed and checked before sign-off."
      ],
      [
        "Outputs",
        "Payslips, payroll registers and disbursement files prepared for your approval."
      ],
      [
        "Exits",
        "Full & final settlements computed and closed on time."
      ]
    ],
    "benefits": [
      [
        "Predictable cycles",
        "Fixed cut-offs and checklists mean payroll closes on schedule."
      ],
      [
        "Fewer escalations",
        "Inputs are validated before computation, not after complaints."
      ],
      [
        "Continuity",
        "An SOP-driven process does not depend on one person being available."
      ]
    ],
    "who": [
      "Companies without a dedicated in-house payroll team",
      "Businesses whose headcount is growing month on month",
      "Teams moving away from spreadsheet-based payroll",
      "Companies unhappy with their current payroll vendor"
    ],
    "faqs": [
      {
        "q": "What does outsourced payroll processing include?",
        "a": "It typically covers collecting monthly inputs, computing gross-to-net pay with statutory deductions, generating payslips and payroll registers, preparing disbursement files and settling full & final dues for exits. The exact scope is agreed in writing at the start of the engagement."
      },
      {
        "q": "Can Procor work with our existing HRMS or attendance system?",
        "a": "HRMS and ESS support are part of Procor's payroll scope. How attendance and inputs flow from your current system is mapped during the goal-setting stage."
      },
      {
        "q": "Do you handle payroll for small teams?",
        "a": "Yes. Procor's payroll process is designed to work for teams of 10 employees as well as 10,000."
      }
    ],
    "related": [
      "payroll-compliance",
      "hr-operations",
      "labour-law-compliance"
    ],
    "resource": "payroll-compliance-health-check"
  },
  {
    "slug": "payroll-compliance",
    "no": "02",
    "icon": "shield",
    "name": "Payroll Related Compliances",
    "short": "EPF, ESIC, professional tax, LWF and TDS on salaries filed on time, with quarterly TDS returns, employee TDS certificates and notice handling.",
    "caps": [
      "EPF",
      "ESIC",
      "Professional Tax",
      "Labour Welfare Fund",
      "TDS on salaries",
      "Form 130 (ex-Form 16)", "Form 138 (ex-24Q)",
      "Notice handling"
    ],
    "seoTitle": "Payroll Compliance Services: EPF, ESIC, PT & TDS | Procor",
    "seoDesc": "EPF, ESIC, professional tax, LWF and TDS on salary filings handled on schedule, plus TDS returns (Form 138), Form 130 and notice handling across India.",
    "h1": "Payroll compliance services for EPF, ESIC, PT, LWF and TDS",
    "lede": "Every payroll creates statutory obligations with their own due dates, portals and state-wise rules. Procor prepares, files and reconciles them each cycle, so contributions, challans and returns stay current.",
    "problem": [
      "Each state and each statute has its own calendar",
      "EPF and ESIC fall due monthly, TDS on salary has monthly deposits and quarterly returns, now on renumbered forms under the Income-tax Act, 2025, and professional tax and labour welfare fund rules change from state to state. Late or incorrect filings lead to interest, penalties and notices."
    ],
    "handles": [
      "EPF ECR generation, challan and TRRN reconciliation",
      "ESIC monthly contributions",
      "Professional tax registration and returns, state-wise",
      "Labour Welfare Fund contributions where applicable",
      "TDS on salaries: computation and monthly deposits",
      "Quarterly salary TDS returns (Form 138, formerly Form 24Q)",
      "Annual salary TDS certificates (Form 130, formerly Form 16)",
      "Responses to statutory notices"
    ],
    "scope": [
      [
        "Monthly filings",
        "EPF, ESIC and TDS deposits prepared and filed each cycle."
      ],
      [
        "State levies",
        "Professional tax and labour welfare fund handled as per each state's rules."
      ],
      [
        "Returns & certificates",
        "Quarterly salary TDS returns (Form 138) and annual certificates (Form 130), under the Income-tax Act, 2025."
      ],
      [
        "Notices",
        "Statutory notices reviewed, documented and responded to."
      ]
    ],
    "benefits": [
      [
        "On-schedule filings",
        "A statutory calendar is maintained for every client."
      ],
      [
        "Reconciled records",
        "Challans and returns are reconciled against payroll."
      ],
      [
        "Audit readiness",
        "Filing records are organised and easy to retrieve."
      ]
    ],
    "who": [
      "Employers with staff in multiple states",
      "Companies that have received EPF, ESIC or TDS notices",
      "Businesses crossing EPF or ESIC applicability thresholds",
      "Finance teams stretched by monthly filing cycles"
    ],
    "faqs": [
      {
        "q": "What are payroll compliances in India?",
        "a": "They are the statutory obligations linked to paying employees: EPF and ESIC contributions, professional tax and labour welfare fund (depending on the state), TDS on salary with quarterly returns (Form 138, formerly Form 24Q) and annual salary TDS certificates for employees (Form 130, formerly Form 16)."
      },
      {
        "q": "Is professional tax the same in every state?",
        "a": "No. Professional tax is levied by individual states, and rates, slabs and filing frequency vary. Some states do not levy it at all."
      },
      {
        "q": "Can Procor help with a notice we have already received?",
        "a": "Yes. Notice handling is part of Procor's payroll compliance service. Share the notice and the team will review it and advise on the response."
      }
    ],
    "related": [
      "payroll-processing",
      "labour-law-compliance",
      "hr-operations"
    ],
    "resource": "payroll-compliance-health-check"
  },
  {
    "slug": "hr-operations",
    "no": "03",
    "icon": "people",
    "name": "HR Operations",
    "short": "Employee lifecycle administration from onboarding to exit, including policy administration, POSH-related support and an employee helpdesk.",
    "caps": [
      "Onboarding",
      "Exits",
      "HR administration",
      "POSH-related support",
      "Employee helpdesk",
      "Master data",
      "HRMS support"
    ],
    "seoTitle": "HR Operations Outsourcing Services in India | Procor",
    "seoDesc": "Outsource HR operations to Procor: onboarding, exits, policy administration including POSH, employee helpdesk, master data and HRMS support.",
    "h1": "HR operations outsourcing, from onboarding to exit",
    "lede": "Procor takes on the day-to-day administration of the employee lifecycle, so your HR team can spend its time on people, not paperwork.",
    "problem": [
      "HR teams lose their week to administration",
      "Joining formalities, document collection, exit checklists, employee queries and data updates pile up. When records are incomplete, payroll and compliance suffer next."
    ],
    "handles": [
      "Employee onboarding formalities and documentation",
      "Exit processing and clearances",
      "HR policy administration",
      "POSH-related support, including ICC annual report timelines",
      "Employee helpdesk for HR and payroll queries",
      "Employee master data maintenance",
      "HRMS administration support"
    ],
    "scope": [
      [
        "Joiners",
        "Documentation, records and system setup for new employees."
      ],
      [
        "Leavers",
        "Exit checklists, clearances and hand-off to full & final settlement."
      ],
      [
        "Policies",
        "Policy administration, including POSH-related requirements."
      ],
      [
        "Employee support",
        "A helpdesk that answers HR and payroll queries."
      ]
    ],
    "benefits": [
      [
        "Clean data",
        "One maintained employee master feeds payroll and compliance."
      ],
      [
        "Consistent experience",
        "Every joiner and leaver goes through the same defined process."
      ],
      [
        "Freed-up HR time",
        "Your team focuses on hiring, culture and performance."
      ]
    ],
    "who": [
      "Companies with a small or single-person HR team",
      "Fast-hiring businesses",
      "Organisations formalising HR policies for the first time",
      "Companies with distributed or multi-location teams"
    ],
    "faqs": [
      {
        "q": "What is HR outsourcing?",
        "a": "HR outsourcing means a specialist partner handles defined HR administration tasks on your behalf, such as onboarding, exits, records, policy administration and employee queries, while decisions about people stay with your team."
      },
      {
        "q": "Does Procor help with POSH compliance?",
        "a": "Procor's HR operations scope includes policy administration covering POSH-related support, such as tracking annual reporting timelines. The specific scope is agreed at the start of the engagement."
      },
      {
        "q": "Will employees contact Procor directly?",
        "a": "If an employee helpdesk is part of your scope, employees can raise HR and payroll queries with Procor directly."
      }
    ],
    "related": [
      "payroll-processing",
      "hrms-application-management",
      "labour-law-compliance"
    ],
    "resource": "payroll-compliance-health-check"
  },
  {
    "slug": "labour-law-compliance",
    "no": "04",
    "icon": "scale",
    "name": "Labour Law Compliances",
    "short": "Registrations, registers and returns under labour laws, including Shops & Establishments, minimum wages, bonus, gratuity and maternity benefit.",
    "caps": [
      "Shops & Establishments",
      "Minimum Wages",
      "Bonus",
      "Gratuity",
      "Maternity benefits",
      "Holidays",
      "Registers",
      "Returns",
      "Labour Codes transition"
    ],
    "seoTitle": "Labour Law Compliance Services in India | Procor",
    "seoDesc": "Labour law compliance for Indian employers: Shops & Establishments, minimum wages, bonus, gratuity, maternity benefit, holidays, statutory registers and returns.",
    "h1": "Labour law compliance services for Indian employers",
    "lede": "Procor keeps your establishment registrations, statutory registers and returns in order across central and state labour laws, so inspections and audits are routine, not stressful.",
    "problem": [
      "Labour law obligations are spread across states and statutes",
      "Shops & Establishments registrations, minimum wage revisions, bonus and gratuity rules, maternity benefit, holiday lists, registers and periodic returns each carry their own requirements, and they differ by state. The ongoing transition to India's Labour Codes adds another layer to track."
    ],
    "handles": [
      "Shops & Establishments registration and renewals",
      "Minimum wage applicability and revision tracking",
      "Bonus and gratuity compliance",
      "Maternity benefit compliance",
      "National and festival holiday compliance",
      "Statutory registers maintenance",
      "Periodic labour law returns",
      "Labour Codes transition: applicability review, wage-structure impact and updates"
    ],
    "scope": [
      [
        "Registrations",
        "Establishment registrations and renewals under applicable laws."
      ],
      [
        "Wages & benefits",
        "Minimum wages, bonus, gratuity and maternity benefit requirements."
      ],
      [
        "Registers",
        "Statutory registers maintained and kept inspection-ready."
      ],
      [
        "Returns",
        "Periodic returns filed on time."
      ]
    ],
    "benefits": [
      [
        "Inspection readiness",
        "Registers and records are current when an inspector asks."
      ],
      [
        "Fewer surprises",
        "Wage revisions and rule changes are tracked for you."
      ],
      [
        "State-wise clarity",
        "Know what applies in each state where you operate."
      ]
    ],
    "who": [
      "Employers opening offices or branches in new states",
      "Businesses with shop-floor, retail or field staff",
      "Companies preparing for audits or due diligence",
      "Organisations reviewing readiness for the Labour Codes"
    ],
    "faqs": [
      {
        "q": "What labour law compliances apply to businesses in India?",
        "a": "It depends on your headcount, industry and the states you operate in. Common obligations include Shops & Establishments registration, minimum wages, payment of bonus, gratuity, maternity benefit, holiday requirements, statutory registers and periodic returns."
      },
      {
        "q": "How do the new Labour Codes affect us?",
        "a": "India's four Labour Codes came into force on 21 November 2025, consolidating 29 earlier central labour laws. They change important definitions, such as what counts as 'wages' for PF, gratuity and bonus, along with registration, register and return requirements, while states continue to notify their own rules. Procor helps employers make the transition: we review how the Codes apply to your establishments, assess the impact on salary structures, and update registrations, registers, policies and filings as the rules take effect."
      },
      {
        "q": "Do you maintain statutory registers for us?",
        "a": "Yes. Maintaining statutory registers and filing returns are part of Procor's labour law compliance service."
      }
    ],
    "related": [
      "payroll-compliance",
      "hr-operations",
      "corporate-tax-regulatory-advisory"
    ],
    "resource": "compliance-calendar"
  },
  {
    "slug": "finance-accounting-outsourcing",
    "no": "05",
    "icon": "ledger",
    "name": "Finance & Accounting Outsourcing",
    "short": "Bookkeeping, payables, receivables, record-to-report, FP&A and MIS, with virtual CFO and controller support.",
    "caps": [
      "Bookkeeping",
      "Accounts Payable",
      "Accounts Receivable",
      "Record-to-report",
      "FP&A",
      "MIS",
      "Virtual CFO",
      "Controller support"
    ],
    "seoTitle": "Finance & Accounting Outsourcing (FAO) India | Procor",
    "seoDesc": "Finance and accounting outsourcing for Indian businesses: bookkeeping, AP, AR, record-to-report, FP&A, MIS reporting, virtual CFO and controller support.",
    "h1": "Finance and accounting outsourcing that closes the books on time",
    "lede": "Procor runs your accounting operations, from daily bookkeeping to month-end close and management reporting, with virtual CFO and controller support when you need senior oversight.",
    "problem": [
      "Growing businesses outgrow their books",
      "Invoices pile up, receivables slip, month-end close drags on and management works off numbers that are weeks old. Hiring a full finance team is expensive before you are ready for it."
    ],
    "handles": [
      "Day-to-day bookkeeping",
      "Accounts payable processing",
      "Accounts receivable tracking and follow-up",
      "Record-to-report and month-end close",
      "Financial planning and analysis (FP&A)",
      "Monthly MIS reporting",
      "Virtual CFO support",
      "Financial controller support"
    ],
    "scope": [
      [
        "Transactions",
        "Bookkeeping, payables and receivables processed on a defined schedule."
      ],
      [
        "Close",
        "Record-to-report and month-end close."
      ],
      [
        "Reporting",
        "MIS and FP&A for management decisions."
      ],
      [
        "Oversight",
        "Virtual CFO and controller support."
      ]
    ],
    "benefits": [
      [
        "Timely numbers",
        "Management sees current figures, not last quarter's."
      ],
      [
        "Tax-ready books",
        "Clean records support GST, TDS and income tax compliance."
      ],
      [
        "Senior expertise on demand",
        "CFO-level input without a full-time hire."
      ]
    ],
    "who": [
      "Startups and SMEs without a full finance team",
      "Founders who need investor-ready reporting",
      "Companies whose month-end close keeps slipping",
      "Businesses preparing for audit or fundraising"
    ],
    "faqs": [
      {
        "q": "What is finance and accounting outsourcing?",
        "a": "Finance and accounting outsourcing (FAO) means a specialist partner runs defined finance processes, such as bookkeeping, payables, receivables, month-end close and reporting, on your behalf."
      },
      {
        "q": "What is a virtual CFO?",
        "a": "A virtual CFO provides senior finance guidance, such as planning, reporting and financial controls, on a part-time or as-needed basis, instead of a full-time hire."
      },
      {
        "q": "Which accounting software do you work with?",
        "a": "Our team works across widely used desktop and cloud-based accounting platforms, so in most cases you can keep the system you already have. We confirm the platform during goal setting, and if you are setting up your books for the first time, we can help you choose one that fits your size and reporting needs."
      }
    ],
    "related": [
      "corporate-tax-regulatory-advisory",
      "payroll-compliance",
      "payroll-processing"
    ],
    "resource": "compliance-calendar"
  },
  {
    "slug": "corporate-tax-regulatory-advisory",
    "no": "06",
    "icon": "building",
    "name": "Corporate, Taxation, Regulatory & Business Advisory",
    "short": "Incorporation, registrations and licences, GST, income tax and TDS, ROC/MCA filings, FEMA/RBI compliance and India entry support.",
    "caps": [
      "Company incorporation",
      "Registrations & licences",
      "GST",
      "Income Tax",
      "TDS",
      "ROC/MCA",
      "FEMA/RBI",
      "India entry"
    ],
    "seoTitle": "Corporate, Tax & Regulatory Compliance Services | Procor",
    "seoDesc": "Company incorporation, registrations, GST, income tax, TDS, ROC/MCA filings, FEMA/RBI compliance and India entry support from Procor, New Delhi.",
    "h1": "Corporate, tax and regulatory compliance services",
    "lede": "From setting up your entity to keeping it compliant with tax, corporate and foreign-exchange regulations, Procor handles the filings and advises on what applies to you.",
    "problem": [
      "Corporate compliance does not stop after incorporation",
      "GST returns, TDS, income tax, annual ROC/MCA filings and FEMA/RBI reporting all run on separate calendars. For foreign-owned companies entering India, the first year brings an unfamiliar set of registrations and approvals."
    ],
    "handles": [
      "Company incorporation",
      "Business registrations and licences",
      "GST registration and returns",
      "Income tax compliance",
      "TDS compliance",
      "ROC/MCA annual filings",
      "FEMA and RBI compliance",
      "India entry support for foreign businesses"
    ],
    "scope": [
      [
        "Set-up",
        "Incorporation, registrations and licences."
      ],
      [
        "Tax",
        "GST, income tax and TDS compliance."
      ],
      [
        "Corporate",
        "ROC/MCA annual and event-based filings."
      ],
      [
        "Cross-border",
        "FEMA/RBI compliance and India entry support."
      ]
    ],
    "benefits": [
      [
        "One calendar",
        "Tax, corporate and regulatory deadlines tracked together."
      ],
      [
        "Faster set-up",
        "Registrations sequenced so you can start operating sooner."
      ],
      [
        "Informed decisions",
        "Advice on what applies to your business, before it becomes a notice."
      ]
    ],
    "who": [
      "Founders incorporating a new company",
      "Foreign companies setting up in India",
      "Businesses with GST, TDS or ROC filings falling behind",
      "Companies with foreign investment or cross-border transactions"
    ],
    "faqs": [
      {
        "q": "What services does a compliance consultant provide?",
        "a": "A compliance consultant identifies which legal and regulatory obligations apply to your business and helps meet them: registrations, tax and corporate filings, statutory returns and responses to notices."
      },
      {
        "q": "Do you help foreign companies enter India?",
        "a": "Yes. India entry support, including incorporation, registrations and FEMA/RBI compliance, is part of Procor's corporate and regulatory advisory service."
      },
      {
        "q": "Can you take over GST and ROC filings that are already overdue?",
        "a": "Share your current status and Procor will review what is pending and propose a plan to bring filings up to date."
      }
    ],
    "related": [
      "finance-accounting-outsourcing",
      "labour-law-compliance",
      "payroll-compliance"
    ],
    "resource": "compliance-calendar"
  },
  {
    "slug": "hrms-application-management",
    "no": "07",
    "icon": "gear",
    "name": "HRMS Application Management",
    "short": "Day-to-day configuration, administration and payroll support for the HRMS you already use: Keka, Darwinbox, PeopleStrong, greytHR and others.",
    "caps": [
      "Keka",
      "Darwinbox",
      "PeopleStrong",
      "greytHR",
      "Procor HRMS",
      "Configuration",
      "Payroll runs",
      "Statutory settings"
    ],
    "seoTitle": "HRMS Application Management Services in India | Procor",
    "seoDesc": "Application management for Keka, Darwinbox, PeopleStrong, greytHR and other HRMS: configuration, payroll runs, statutory settings, reports and user support.",
    "h1": "HRMS application management for Keka, Darwinbox, PeopleStrong, greytHR and more",
    "lede": "You have invested in an HRMS. Procor keeps it configured, compliant and running every month, so your HR team gets the value without becoming system administrators.",
    "problem": [
      "An HRMS is only as good as how it is run",
      "Salary structures change, statutory rates are revised, new states and policies are added, and the Labour Codes have changed how wages are defined. When nobody owns the configuration, payroll errors creep in, reports stop matching, and the platform ends up underused."
    ],
    "handles": [
      "Platform configuration: salary structures, leave, attendance, shifts and approval workflows",
      "Monthly payroll processing support on your HRMS",
      "Statutory settings: PF, ESI, PT, LWF and TDS, kept current as rules change",
      "Employee master data, onboarding and exit updates",
      "User, role and access management",
      "Standard and custom reports, reconciliations and MIS",
      "Employee and HR helpdesk for system queries",
      "Testing after platform updates and coordination with your HRMS vendor"
    ],
    "scope": [
      [
        "Configure",
        "Set up and maintain structures, policies and workflows on your platform."
      ],
      [
        "Run",
        "Support monthly payroll and statutory processing inside the HRMS."
      ],
      [
        "Maintain",
        "Keep statutory settings, masters and access current as things change."
      ],
      [
        "Support",
        "Answer user queries, build reports and coordinate with the vendor."
      ]
    ],
    "benefits": [
      [
        "Clean, current configuration",
        "Your HRMS reflects today's policies and statutory rules."
      ],
      [
        "Fewer payroll errors",
        "Setup issues are caught before they reach payslips."
      ],
      [
        "Full value from your investment",
        "Features you already pay for actually get used."
      ]
    ],
    "who": [
      "Companies on Keka, Darwinbox, PeopleStrong, greytHR or similar platforms",
      "HR teams without a dedicated HRIS or system administrator",
      "Businesses that have just gone live and need steady-state support",
      "Organisations whose HRMS configuration has drifted from policy"
    ],
    "faqs": [
      {
        "q": "Which HRMS platforms do you support?",
        "a": "We provide application management for widely used platforms including Keka, Darwinbox, PeopleStrong and greytHR, as well as Procor HRMS and other HRMS products. Tell us which system you use and we will confirm fit during the consultation."
      },
      {
        "q": "Are you a partner of these HRMS vendors?",
        "a": "Procor is an independent service provider. We are not affiliated with or endorsed by Keka, Darwinbox, PeopleStrong or greytHR; product names are used only to identify the platforms we support. Licensing and product support remain with your vendor, and we coordinate with them on your behalf where needed."
      },
      {
        "q": "How is the engagement structured?",
        "a": "Scope, response commitments and fees are agreed with each client based on your platform, headcount and the modules you use. Engagements can range from ongoing administration to monthly payroll support on the platform."
      },
      {
        "q": "Can you also run payroll and compliance for us?",
        "a": "Yes. Many clients combine application management with Procor's payroll processing and payroll compliance services, so the platform and the statutory work are handled by one team."
      }
    ],
    "related": [
      "payroll-processing",
      "hr-operations",
      "payroll-compliance"
    ],
    "resource": "payroll-compliance-health-check"
  }
];

SERVICES.forEach((s) => (s.url = `/services/${s.slug}/`));
export const bySlug = Object.fromEntries(SERVICES.map((s) => [s.slug, s])) as Record<string, Service>;
