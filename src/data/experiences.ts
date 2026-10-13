import { ExperienceItem } from '@/types';

export const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Quantitative Data Analyst & Student Researcher',
    organization: 'University Applied Econometrics & Data Analytics Lab',
    type: 'Research',
    period: 'Oct 2024 – Present',
    isVerified: true,
    verificationBadgeText: 'Verified Academic Research [SOLAR: DA-01]',
    ticketKey: 'DA-EXP-01',
    highlights: [
      'Extracted, cleaned, and normalized longitudinal panel time-series datasets covering 180 listed corporate balance sheets across 28 financial quarters using SQL and Python (pandas).',
      'Engineered two-way Fixed Effects econometric regressions evaluating monetary benchmark rate elasticities and corporate debt rollover friction.',
      'Authored automated test suites in Python ensuring zero survivorship bias or data leakage across statistical samples.'
    ],
    toolsUsed: ['Python', 'SQL', 'pandas', 'statsmodels', 'Panel Econometrics', 'Hypothesis Testing']
  },
  {
    id: 'exp-2',
    role: 'Lead Business Intelligence & Growth Analyst',
    organization: 'National Business & Data Analytics Challenge',
    type: 'Competition',
    period: 'Nov 2024 – Jan 2025',
    isVerified: true,
    verificationBadgeText: 'National Finalist [SOLAR: DA-02]',
    ticketKey: 'DA-EXP-02',
    highlights: [
      'Engineered a comprehensive customer cohort retention and lifetime value (LTV) diagnostic framework for a high-growth subscription retail business.',
      'Dissected unit economics into Customer Acquisition Cost (CAC) payback periods, gross margin contribution by SKU, and Net Revenue Retention (NRR).',
      'Presented live analytical dashboards and strategic recommendations to a panel of corporate analytics executives.'
    ],
    toolsUsed: ['Power BI', 'SQL Window Functions', 'Cohort Analysis', 'LTV Modeling', 'Executive Storytelling']
  },
  {
    id: 'exp-3',
    role: 'Enterprise BI & Dimensional Modeling Practicum',
    organization: 'Advanced Business Intelligence Curriculum',
    type: 'Academic Project',
    period: 'Sep 2024 – Dec 2024',
    isVerified: true,
    verificationBadgeText: 'High Distinction Grade [SOLAR: DA-03]',
    ticketKey: 'DA-EXP-03',
    highlights: [
      'Architected a Star Schema data model incorporating over 14,000 credit facilities with single-directional 1-to-many relationships, eliminating snowflake sub-dimension query bottlenecks.',
      'Authored 22 specialized DAX measures optimized for the VertiPaq engine, securing sub-400ms query performance in DAX Studio.',
      'Engineered drill-through pages and custom tooltip canvas cards for executive portfolio health exploration.'
    ],
    toolsUsed: ['Power BI Desktop', 'DAX', 'Power Query (M)', 'DAX Studio', 'Star Schema']
  },
  {
    id: 'exp-4',
    role: 'Data Analyst Intern [Candidate Practical Entry]',
    organization: '[Target Enterprise / Institution — Open for Candidate Updates]',
    type: 'Internship',
    period: '[Internship Window — Candidate to specify]',
    isVerified: false,
    verificationBadgeText: 'Template Placeholder [SOLAR: DA-04]',
    ticketKey: 'DA-EXP-04',
    highlights: [
      'Constructed automated ETL data pipelines and scheduled SQL batch queries for automated recurring KPI summaries.',
      'Designed self-serve Power BI and Tableau dashboards for cross-functional marketing and operational stakeholders.',
      'Conducted A/B testing evaluations and funnel drop-off analyses to optimize checkout conversion rates.'
    ],
    toolsUsed: ['SQL', 'Power BI', 'Python', 'Tableau', 'Excel']
  }
];

export const certificationsData = [
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    issuer: 'Microsoft',
    status: 'In Progress / Final Preparation',
    date: 'Expected 2026',
    isVerified: false,
    note: 'Comprehensive curriculum completed: Data preparation in Power Query, dimensional modeling in DAX, interactive report UX, and Power BI Service administration.'
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google Career Certificates',
    status: 'Verified Completed',
    date: '2024',
    isVerified: true,
    note: 'Mastery of complete analytical lifecycle: Ask, Prepare, Process, Analyze, Share, and Act using SQL, R programming, and Tableau dashboards.'
  },
  {
    title: 'Advanced SQL for Data Analysts & Scientists',
    issuer: 'University Data Science Specialization',
    status: 'Verified Completed',
    date: '2024',
    isVerified: true,
    note: 'Advanced CTEs, window functions (ROW_NUMBER, DENSE_RANK, NTILE), execution plan tuning, index strategy, and relational schema normalization.'
  }
];
