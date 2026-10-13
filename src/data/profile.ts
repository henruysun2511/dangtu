import { ProfileInfo } from '@/types';

export const profileData: ProfileInfo = {
  name: 'Dang Tu',
  role: 'Data Analyst',
  headline: 'Data Analyst & Business Intelligence Specialist',
  tagline: 'Empowering Strategic Growth through Advanced SQL, Star-Schema Power BI Dashboards, and Predictive Analytics',
  bio: 'Results-oriented Data Analyst with a rigorous quantitative foundation. Specialized in transforming high-volume transaction databases into star-schema analytical models, building executive-ready Power BI & Tableau cockpits, designing cohort retention matrices, and running statistically powered A/B testing experimentation.',
  avatarUrl: '/images/dangtu-avatar.jpg',
  bannerUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
  academicBackground: {
    degree: 'Bachelor of Science / Economics & Data Analytics',
    major: 'Applied Statistics & Business Intelligence',
    institution: 'National University of Economics & Business',
    expectedGraduation: '2026',
    relevantCoursework: [
      'Advanced Relational Databases & SQL Optimization',
      'Enterprise Business Intelligence & Dimensional Modeling (Power BI & Tableau)',
      'Applied Econometrics & Statistical Hypothesis Testing',
      'Python for Data Science (pandas, numpy, scikit-learn, statsmodels)',
      'Product Analytics, Cohort Retention & Funnel Optimization',
      'Data Warehousing Architecture & ETL Pipeline Engineering'
    ],
    isPlaceholder: true,
  },
  careerInterests: [
    'Data Analyst (Product / Business Intelligence / Commercial)',
    'BI Developer (Power BI / Tableau / SQL / Star Schema)',
    'Growth & Monetization Analyst (Cohort, LTV, A/B Testing)',
    'Quantitative & Strategy Analytics Specialist'
  ],
  contact: {
    email: 'dangtu.analytics@sample-domain.edu',
    linkedin: 'https://linkedin.com/in/placeholder-dangtu',
    github: 'https://github.com/placeholder-dangtu',
    location: 'Vietnam / Available for Remote & Hybrid Roles',
    resumeFileName: 'DangTu_Resume_DataAnalyst.pdf'
  },
  technicalSkills: [
    {
      category: 'SQL & Data Warehousing',
      skills: ['Advanced SQL (PostgreSQL, BigQuery, Snowflake)', 'Window Functions & Recursive CTEs', 'Dimensional Modeling (Star & Snowflake Schemas)', 'Query Execution Plan Tuning & Indexing', 'Data Cleaning & Schema Normalization']
    },
    {
      category: 'Business Intelligence & Reporting',
      skills: ['Power BI Desktop & Power BI Service', 'Advanced DAX (Calculated Tables, Filter Context, Time Intelligence)', 'Power Query (M Formula Language)', 'Tableau Software & Interactive Storyboards', 'Executive Dashboard UX & Drill-Throughs']
    },
    {
      category: 'Programming & Data Science',
      skills: ['Python (Pandas, NumPy, Matplotlib, Seaborn)', 'Jupyter Lab & Script Automation', 'Statistical Modeling (statsmodels, scipy.stats)', 'Git Version Control & CI/CD Basics']
    },
    {
      category: 'Experimentation & Product Analytics',
      skills: ['A/B Testing (Sample Size Power, Two-Sample Z-Test, p-values)', 'Customer Cohort Analysis & Retention Matrices', 'RFM Customer Segmentation & LTV Forecasting', 'Metric Trees & Executive KPI Formulation']
    }
  ]
};
