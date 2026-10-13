import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'ecommerce-cohort-retention-analytics',
    title: 'E-Commerce Customer Retention, Lifetime Value (LTV) & Cohort Analytics',
    category: 'Product & Growth Analytics',
    badge: 'Cohort & Funnel Modeling',
    ticketId: 'DA-101',
    isHypotheticalOrAcademic: true,
    academicDisclaimer: 'Sanitized E-Commerce Transaction Log — 1.2M transactions modeled across 45,000 active customer accounts with monthly cohort tracking.',
    summary: 'A full-funnel retention and unit economics intelligence system decomposing monthly repeat purchasing behaviors, churn probability indicators, and customer lifetime value (LTV) across acquisition channels.',
    problemStatement: 'The commercial team observed rising Customer Acquisition Costs (CAC) alongside a drop in 90-day repeat purchase rate. Business leadership lacked granular cohort visibility to identify which marketing channels generated high-LTV customers versus one-time churned buyers.',
    myRole: 'Lead Data Analyst: Extracted and cleaned 1.2M raw checkout events in SQL, engineered cohort matrices in Python, formulated survival curves, and designed an interactive multi-dimensional retention dashboard.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    dashboardImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    dataSources: [
      {
        name: 'PostgreSQL Orders & Order Items Table',
        description: 'Transaction-level grain records including invoice ID, customer UUID, SKU items, discount applied, and timestamp.',
        scope: '1,240,000 line items spanning 24 consecutive operating months.'
      },
      {
        name: 'Marketing Attribution Log (Google Ads / Meta Ads / Organic)',
        description: 'UTM parameter tracking connecting customer first-touch attribution with initial acquisition cost.',
        scope: '45,200 unique acquired customer profiles.'
      }
    ],
    methodology: [
      'SQL Data Aggregation: Wrote recursive CTEs and window functions (`FIRST_VALUE`, `DENSE_RANK`) to tag acquisition cohort month for every user.',
      'Retention Matrix Calculation: Computed Month 0 through Month 12 retention percentages for each monthly cohort in Python (Pandas heatmap).',
      'LTV / CAC Attribution: Segmented customers into RFM tiers (Recency, Frequency, Monetary value) to calculate dynamic 6-month and 12-month realized LTV.',
      'Churn Early-Warning Model: Identified behavioral churn indicators (e.g., >45 days between order 1 and 2 correlated with 82% terminal churn).'
    ],
    toolsAndTechniques: [
      'Advanced SQL (PostgreSQL, Window Functions, CTEs)',
      'Python (pandas, seaborn, matplotlib)',
      'Power BI & Tableau Dashboarding',
      'Cohort Analysis & RFM Customer Segmentation',
      'LTV / CAC Payback Period Modeling'
    ],
    keyFindings: [
      'Organic Search & Referral cohorts displayed 34.2% Month-3 retention, nearly double the 18.5% retention of discount-driven Paid Social cohorts.',
      'Customers who purchased across 2+ distinct categories in their first 30 days had a 2.8x higher 12-month LTV ($420 vs $150).',
      'Automated email triggers at day 21 post-first purchase recovered 14.5% of at-risk churners back into active buyers.'
    ],
    deliverables: [
      {
        type: 'dashboard',
        label: 'Interactive Retention Cohort Dashboard',
        note: 'Drill-through retention heatmap with channel filters',
        isAvailable: true,
        url: '#dashboard-preview'
      },
      {
        type: 'repository',
        label: 'SQL Queries & Python Notebooks',
        note: 'Complete ETL pipeline and cohort matrix calculation code',
        isAvailable: true,
        url: 'https://github.com/placeholder-dangtu/ecommerce-cohort-retention-analytics'
      },
      {
        type: 'report',
        label: 'Executive Retention Strategy Brief (PDF)',
        note: '12-page comprehensive diagnostic report with action items',
        isAvailable: true,
        url: '#'
      }
    ],
    metrics: [
      {
        label: 'Total Monitored Transactions',
        value: '1.24M',
        description: 'Processed in clean relational schema'
      },
      {
        label: '90-Day Retention Delta',
        value: '+6.8%',
        change: '18.2% -> 25.0%',
        isPositive: true,
        description: 'Post retention campaign optimization'
      },
      {
        label: 'High-Value LTV Segment Identified',
        value: '$1.85M',
        isPositive: true,
        description: 'Annualized revenue from top 20% RFM accounts'
      },
      {
        label: 'SQL Query Processing Speed',
        value: '1.2s',
        isPositive: true,
        description: 'Optimized via clustered indexing on user_id'
      }
    ],
    limitationsAndLessons: [
      'Guest checkouts without logged-in account UUIDs required heuristic cookie matching, introducing a ~4% attribution margin of error.',
      'Realized that optimizing for Month-1 repurchase without tracking gross margin per repeat order can generate unprofitably high shipping overhead.',
      'Recommended incorporating customer satisfaction (CSAT / NPS) data streams to pair qualitative sentiment with quantitative cohort drop-offs.'
    ],
    screenshots: [
      {
        title: 'Monthly Customer Cohort Heatmap',
        caption: 'Displays Month 0 to Month 12 retention percentage decay by acquisition channel.',
        type: 'chart',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'RFM Customer Segmentation Matrix',
        caption: 'Scatter plot visualizing customer transaction frequency vs average monetary basket size.',
        type: 'chart',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Star Schema Dimensional Model Architecture',
        caption: 'Central sales fact table linked to customer, date, marketing campaign, and product dimensions.',
        type: 'model',
        imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
      }
    ],
    startDate: '11/2025',
    endDate: '02/2026',
    status: 'Completed',
    featured: true
  },
  {
    id: 'sme-banking-credit-risk-powerbi',
    title: 'Commercial Banking Credit Risk & Loan Health Executive Dashboard',
    category: 'Power BI & Data Analytics',
    badge: 'Power BI & DAX Modeling',
    ticketId: 'DA-102',
    isHypotheticalOrAcademic: true,
    academicDisclaimer: 'Academic Project Dataset — Simulated banking portfolio of 14,200 loan facilities modeled under Basel II risk-weight principles.',
    summary: 'An enterprise Power BI business intelligence solution assessing Non-Performing Loans (NPL), default migration, collateral coverage ratios, and sector exposure concentration across commercial loan facilities.',
    problemStatement: 'Credit risk officers and portfolio managers lacked a centralized, real-time monitoring view of credit deterioration triggers across SME borrower segments. Static monthly spreadsheets delayed early-warning default detection by 30–45 days.',
    myRole: 'Lead BI Analyst: Designed star-schema data architecture, implemented 22 custom DAX measures for delinquency staging (Stage 1/2/3 under IFRS 9 concepts), and engineered an executive risk cockpit with drill-through branch telemetry.',
    coverImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80',
    dashboardImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    dataSources: [
      {
        name: 'Core Banking Loan Book Extract (Fact_Loans)',
        description: 'Facility-level grain records containing outstanding balance, interest rates, payment delinquency history, and borrower credit scores.',
        scope: '14,200 loans across 6 commercial industry sectors over a 24-month horizon.',
        limitations: 'Simulated anonymized academic dataset; macroeconomic stress variables calibrated using central bank baseline figures.'
      },
      {
        name: 'Collateral Valuation Registry (Dim_Collateral)',
        description: 'Property, equipment, and cash-pledged collateral appraised values and liquidation discounts.',
        scope: 'Appraisals updated quarterly.'
      },
      {
        name: 'Borrower Risk Classification (Dim_BorrowerGrade)',
        description: 'Internal rating scale grades AAA through C with historical default odds.',
        scope: '10 rating tiers aligned with standard credit matrices.'
      }
    ],
    methodology: [
      'Power Query ETL: Unpivoted historical monthly aging records, handled null collateral records, and normalized loan statuses.',
      'Data Modeling: Structured a pure Star Schema with 1 Fact table (`Fact_LoanTransactions`) connected to 4 Conformed Dimension tables (`Dim_Date`, `Dim_IndustrySector`, `Dim_Borrower`, `Dim_BranchRegion`). Enforced 1-to-many single-directional filtering to optimize engine vertex cache performance.',
      'DAX Metric Engineering: Formulated dynamic measures including Total Exposure at Default (EAD), Weighted Average Default Rate (WADR), Collateral Coverage Ratio, and Month-over-Month NPL Shift.',
      'UX Dashboard Architecture: Separated into 3 dedicated views: (1) Executive Risk Overview, (2) Sector & Collateral Stress Drilldown, (3) Early-Warning Trigger Watchlist.'
    ],
    toolsAndTechniques: [
      'Power BI Desktop & Power BI Service',
      'DAX Studio (Performance Tuning & SE/FE Engine Optimization)',
      'Power Query (M Formula Language)',
      'Star Schema dimensional modeling',
      'IFRS 9 / Basel II credit staging logic'
    ],
    keyFindings: [
      'Wholesale Trade & Commercial Real Estate accounted for 41.8% of gross exposure but represented 62.4% of total delinquent balances.',
      'Loans with Loan-to-Value (LTV) exceeding 75% in the secondary manufacturing segment displayed a 3.4x higher transition probability into 60+ DPD upon 50bps rate adjustments.',
      'The early-warning trigger identified 128 mid-tier accounts showing negative working capital indicators prior to formal default classification.'
    ],
    deliverables: [
      {
        type: 'dashboard',
        label: 'Interactive Power BI Report Preview',
        note: 'High-fidelity dashboard screens with drillthrough filtering logic',
        isAvailable: true,
        url: '#dashboard-preview'
      },
      {
        type: 'repository',
        label: 'GitHub Documentation & Data Model Dictionary',
        note: 'Contains DAX expressions, star-schema diagram, and Power Query scripts',
        isAvailable: true,
        url: 'https://github.com/placeholder-dangtu/sme-credit-risk-bi'
      },
      {
        type: 'report',
        label: 'Executive Credit Policy Briefing (PDF)',
        note: '8-page formal memo summarizing concentration limits and mitigation policies',
        isAvailable: true,
        url: '#'
      }
    ],
    metrics: [
      {
        label: 'Total Monitored Portfolio',
        value: '$148.5M',
        description: 'Simulated SME lending volume'
      },
      {
        label: 'Calculated NPL Ratio',
        value: '2.84%',
        change: '-0.32% MoM',
        isPositive: true,
        description: 'Compared to sector benchmark of 3.20%'
      },
      {
        label: 'Weighted Collateral Coverage',
        value: '142.6%',
        isPositive: true,
        description: 'Well above the minimum safety covenant of 115%'
      },
      {
        label: 'Query Latency in DAX Studio',
        value: '< 400ms',
        isPositive: true,
        description: 'Optimized via Star Schema & measure cardinality reduction'
      }
    ],
    limitationsAndLessons: [
      'The dataset assumes static collateral appraisal values between inspection cycles; in live deployment, automated index valuation adjustments should be applied.',
      'Learned the critical value of replacing complex bi-directional cross-filtering with targeted `CALCULATE(..., CROSSFILTER(...))` syntax to protect DAX performance.',
      'Future roadmap: Incorporate forward-looking macroeconomic scenario stress testing using What-If parameters.'
    ],
    screenshots: [
      {
        title: 'Executive Portfolio Health Cockpit',
        caption: 'Displays high-level NPL%, gross committed facilities, rating migrations, and geographical risk dispersion.',
        type: 'kpi',
        imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Sector Concentration & LTV Matrix',
        caption: 'Scatter plot visualizing industry exposure vs average Days Past Due with collateral buffer overlays.',
        type: 'chart',
        imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Star Schema Dimensional Model Topology',
        caption: 'One central fact table connected cleanly to 4 dimension tables with 1-to-many single direction relationships.',
        type: 'model',
        imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
      }
    ],
    startDate: '09/2025',
    endDate: '12/2025',
    status: 'Completed',
    featured: true,
    powerBiWorkflow: {
      businessRequirements: [
        'Track total exposure, default probability, and provisions across SME segments.',
        'Deliver interactive drilldown from bank-wide view down to individual loan officer portfolios.',
        'Flag loans approaching 30, 60, and 90 days past due before default events crystallize.'
      ],
      powerQueryCleaning: [
        'Standardized date formats and imputed missing ISO currency rates across transaction batches.',
        'Removed redundant nested columns and applied explicit data typing to maximize VertiPaq dictionary compression.',
        'Split delimited customer contact and branch codes into clean conformed dimension keys.'
      ],
      dataModeling: 'Architected a strict Star Schema: `Fact_Loans` linked to `Dim_Calendar` (Calendar Table created via DAX `CALENDARAUTO`), `Dim_BorrowerGrade`, `Dim_BranchRegion`, and `Dim_FacilityType`. Eliminated snowflake sub-dimensions.',
      daxMeasures: [
        {
          name: 'NPL Ratio %',
          formula: 'DIVIDE(\n  CALCULATE(SUM(Fact_Loans[OutstandingBalance]), Fact_Loans[DaysPastDue] >= 90),\n  SUM(Fact_Loans[OutstandingBalance]),\n  0\n)',
          explanation: 'Computes the standard banking non-performing loan percentage strictly isolating 90+ DPD facilities over total current book.'
        },
        {
          name: 'Weighted Collateral Coverage %',
          formula: 'DIVIDE(\n  SUMX(Fact_Loans, Fact_Loans[CollateralMarketValue] * Fact_Loans[HaircutRate]),\n  SUM(Fact_Loans[OutstandingBalance]),\n  0\n)',
          explanation: 'Calculates the real haircut-adjusted liquidation value of pledged assets relative to total facility obligations.'
        },
        {
          name: 'MoM NPL Delta',
          formula: 'VAR CurrentNPL = [NPL Ratio %]\nVAR PriorNPL = CALCULATE([NPL Ratio %], DATEADD(Dim_Calendar[Date], -1, MONTH))\nRETURN\nIF(ISBLANK(PriorNPL), BLANK(), CurrentNPL - PriorNPL)',
          explanation: 'Calculates month-over-month trajectory in delinquent balance percentage using time intelligence.'
        }
      ],
      dashboardDesign: [
        'Utilized Jira Blue headers with clean white cards and high-contrast emerald green for healthy coverage covenants.',
        'Implemented conditional formatting on KPI cards and data tables to instantly draw the risk officer eye to outlier branches.',
        'Built custom tooltip pages providing quick customer repayment trend history on hover without cluttering the main canvas.'
      ],
      businessInsights: [
        'Early intervention protocols should prioritize loans transitioning from 30 to 45 DPD, where recovery rates average 88% versus 24% after reaching 90 DPD.',
        'Establishing a 22% sector cap on wholesale distribution would protect bank tier-1 capital against sectoral supply-chain shocks.'
      ]
    }
  },
  {
    id: 'marketing-attribution-ab-testing',
    title: 'Multi-Touch Marketing Attribution & A/B Test Experimentation Cockpit',
    category: 'Product & Growth Analytics',
    badge: 'A/B Testing & Attribution',
    ticketId: 'DA-103',
    isHypotheticalOrAcademic: true,
    academicDisclaimer: 'Simulated Marketing Analytics Dataset — 350,000 session visits with randomized A/B test variants across checkout flows.',
    summary: 'A statistical experimentation framework comparing First-Touch, Last-Touch, and Data-Driven (Markov Chain) attribution models alongside randomized A/B hypothesis testing.',
    problemStatement: 'Marketing teams relied on simplistic last-click attribution, resulting in over-budgeting toward retargeting campaigns while starving top-of-funnel discovery channels. In parallel, new checkout UX variations lacked statistical power validation before site-wide launch.',
    myRole: 'Experimentation & Data Analyst: Engineered attribution models in Python, performed two-sample binomial proportion hypothesis testing with sample size power calculations, and built an automated conversion reporting interface.',
    coverImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    dashboardImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    dataSources: [
      {
        name: 'Web Analytics Session Logs (Google Analytics 4 Export)',
        description: 'Granular user event stream containing session_id, user_pseudo_id, event_timestamp, and traffic channel.',
        scope: '350,000 user sessions with 82,000 multi-session conversion touchpoints.'
      },
      {
        name: 'A/B Test Variant Experiment Database',
        description: 'Randomized 50/50 bucket allocation tracking checkout variant A (classic 3-step) vs variant B (one-page accordion).',
        scope: '28,400 completed checkouts over a 4-week testing window.'
      }
    ],
    methodology: [
      'Markov Chain Attribution: Constructed transition probability matrices between marketing touchpoints to determine true Shapley removal effects.',
      'Sample Size & Statistical Power: Calculated required sample size (alpha = 0.05, power = 0.80) to detect a Minimum Detectable Effect (MDE) of 1.2% in checkout conversion.',
      'Hypothesis Testing: Performed two-tailed z-tests on conversion proportions and evaluated confidence intervals for uplift certainty.',
      'Attribution Discrepancy Analysis: Quantified the budget misallocation gap between Last-Click and Data-Driven multi-touch attribution.'
    ],
    toolsAndTechniques: [
      'Python (statsmodels, scipy.stats, pandas)',
      'SQL (Event Stream Aggregations & Session Stitching)',
      'A/B Testing Statistical Theory (Two-sample Z-test, MDE, P-values)',
      'Markov Chain Multi-Touch Attribution Modeling'
    ],
    keyFindings: [
      'Variant B (One-Page Accordion) achieved a statistically significant +3.42% conversion uplift (p = 0.0031, 95% CI: [+1.18%, +5.66%]), generating $280K projected incremental monthly GMV.',
      'Last-touch attribution overstated Paid Search ROI by 42% while undervaluing YouTube video top-of-funnel brand discovery by 68%.',
      'Reallocating 18% of marketing spend toward high-assisted conversion channels lowered Blended CAC by 14.2%.'
    ],
    deliverables: [
      {
        type: 'dashboard',
        label: 'A/B Experimentation & Attribution Dashboard',
        note: 'Live visual conversion funnel with p-value and confidence interval gauges',
        isAvailable: true,
        url: '#dashboard-preview'
      },
      {
        type: 'repository',
        label: 'Python A/B Testing & Markov Attribution Code',
        note: 'Reusable statistical testing modules and attribution scripts',
        isAvailable: true,
        url: 'https://github.com/placeholder-dangtu/marketing-attribution-ab-testing'
      },
      {
        type: 'report',
        label: 'Experiment Rollout Memo & Recommendations',
        note: 'Formal decision brief submitted to Product Leadership',
        isAvailable: true,
        url: '#'
      }
    ],
    metrics: [
      {
        label: 'Checkout Conversion Uplift',
        value: '+3.42%*',
        change: 'p = 0.0031',
        isPositive: true,
        description: 'Statistically significant result exceeding MDE'
      },
      {
        label: 'Blended CAC Reduction',
        value: '-14.2%',
        isPositive: true,
        description: 'Via Markov attribution budget reallocation'
      },
      {
        label: 'Sample Size Evaluated',
        value: '28.4K',
        description: 'Full test sample achieving 85% statistical power'
      },
      {
        label: 'Annualized Revenue Uplift',
        value: '+$3.36M',
        isPositive: true,
        description: 'From permanent checkout variant deployment'
      }
    ],
    limitationsAndLessons: [
      'Observed early novelty effects in week 1 that diminished by week 3; emphasizes importance of running experiments for complete business cycles.',
      'Cross-device tracking loss due to browser privacy policies required probabilistic session stitching.',
      'Gained strong intuition for sample ratio mismatch (SRM) checks before trusting experimental results.'
    ],
    screenshots: [
      {
        title: 'Checkout Conversion Funnel & Variant Comparison',
        caption: 'Step-by-step drop-off analysis between Control (A) and Experiment (B).',
        type: 'chart',
        imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Attribution Model Comparison Matrix',
        caption: 'Comparison graph of credit assigned across First-Click, Last-Click, Linear, and Markov models.',
        type: 'chart',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
      }
    ],
    startDate: '08/2025',
    endDate: '10/2025',
    status: 'Completed',
    featured: true
  },
  {
    id: 'retail-profitability-working-capital-model',
    title: 'Omnichannel Retail Sales Performance & Margin Variance Analysis',
    category: 'Financial Analysis',
    badge: 'Sales & Variance Modeling',
    ticketId: 'DA-104',
    isHypotheticalOrAcademic: true,
    academicDisclaimer: 'Academic Financial Case Study — Modeled using audited financial statements of a consumer retail enterprise with simulated SKU-level cost breakdowns.',
    summary: 'A comprehensive sales analytics and driver-based budget variance model dissecting gross margin erosion, cash conversion cycle bottlenecks, and product mix contributions.',
    problemStatement: 'Despite a 14% top-line revenue expansion, net operating margins shrank by 230 basis points. Management required an objective decomposition to pinpoint whether deterioration stemmed from promotional discounting, logistics inflation, or inventory holding drag.',
    myRole: 'Commercial Data Analyst: Formulated the driver-based Price-Volume-Mix (PVM) mathematical variance model, calculated working capital cycles, and designed operational inventory restructuring dashboards.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    dashboardImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80',
    dataSources: [
      {
        name: 'General Ledger Monthly Trial Balances',
        description: 'Monthly P&L and Balance Sheet line items across 12 periods.',
        scope: '3 retail product divisions (Apparel, Footwear, Accessories).'
      },
      {
        name: 'Inventory Movement & Warehouse Ledger',
        description: 'Stock-keeping unit (SKU) purchase orders, lead times, and carrying charges.',
        scope: '1,450 active SKUs across 2 distribution hubs.'
      }
    ],
    methodology: [
      'Price-Volume-Mix (PVM) Variance Analysis: Decomposed total gross margin variance into Price effect, Volume effect, and Product Mix skew using mathematical attribution.',
      'Working Capital Diagnostics: Calculated Days Sales Outstanding (DSO), Days Inventory Outstanding (DIO), and Days Payable Outstanding (DPO) to evaluate the Cash Conversion Cycle.',
      'Contribution Margin Breakdown: Reallocated shared fulfillment and delivery expenses to calculate true SKU-level net contribution margins across direct-to-consumer (DTC) vs retail store channels.'
    ],
    toolsAndTechniques: [
      'SQL & Advanced Excel (Index/Match, Dynamic Arrays, Solver)',
      'Tableau & Power BI Interactive Visuals',
      'Price-Volume-Mix (PVM) Variance Decomposition',
      'DuPont Profitability Model'
    ],
    keyFindings: [
      'The margin decline was primarily driven by an unfavorable product mix shift toward low-margin third-party footwear, accounting for 64% of the negative variance, rather than general discounting.',
      'Days Inventory Outstanding surged from 68 days to 94 days due to excessive safety stock buffers in slow-turning seasonal apparel, locking up $3.2M in unproductive working capital.'
    ],
    deliverables: [
      {
        type: 'report',
        label: 'Comprehensive Sales & Margin Variance Memo (PDF)',
        note: 'Complete breakdown with financial bridges and strategic action plans',
        isAvailable: true,
        url: '#'
      },
      {
        type: 'repository',
        label: 'Financial Model Spreadsheet & Calculation Workings',
        note: 'Dynamic Excel model featuring macro-free formulas and dynamic array scenarios',
        isAvailable: true,
        url: 'https://github.com/placeholder-dangtu/retail-fpa-variance-model'
      }
    ],
    metrics: [
      {
        label: 'Identified Trapped Working Capital',
        value: '$3.2M',
        description: 'Concentrated in excess seasonal inventory'
      },
      {
        label: 'Cash Conversion Cycle Extension',
        value: '+22 Days',
        change: '62d -> 84d',
        isPositive: false,
        description: 'Driven by elevated Days Inventory Outstanding'
      },
      {
        label: 'Projected Margin Recovery',
        value: '+185 bps',
        isPositive: true,
        description: 'Through SKU rationalization and return policy controls'
      }
    ],
    limitationsAndLessons: [
      'Allocations of shared central warehousing overhead relied on square footage proxies rather than direct activity-based costing timestamps.',
      'Understood that top-line revenue growth can mask acute cash flow deterioration if inventory turnover is neglected.'
    ],
    screenshots: [
      {
        title: 'Price-Volume-Mix Margin Bridge (Waterfall)',
        caption: 'Decomposition attributing basis point impacts of pricing concessions, volume gains, and mix shifts.',
        type: 'chart',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
      }
    ],
    startDate: '02/2025',
    endDate: '05/2025',
    status: 'Completed',
    featured: true
  },
  {
    id: 'macroeconomic-capital-structure-research',
    title: 'Empirical Econometric Analysis of Macro Volatility & Capital Structure',
    category: 'Scientific Research',
    badge: 'Econometric Research Paper',
    ticketId: 'DA-105',
    isHypotheticalOrAcademic: true,
    academicDisclaimer: 'Academic Research Paper — Supervised university research utilizing verified public macroeconomic indicators and firm-level balance sheet data.',
    summary: 'An empirical econometric study investigating how central bank benchmark rate tightening cycles influence corporate leverage and maturity matching among listed emerging market non-financial firms.',
    problemStatement: 'Following global monetary tightening, corporations faced heightened refinancing costs. This study investigates whether firms adjusted leverage downwards or substituted long-term bonds with short-term credit facilities.',
    myRole: 'Co-Author & Lead Quantitative Data Analyst: Cleaned panel dataset in Python, performed econometric specification tests, ran Fixed Effects and Random Effects regression models in statsmodels, and authored findings.',
    coverImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    dashboardImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    dataSources: [
      {
        name: 'Listed Companies Financial Database',
        description: 'Panel balance sheet observations across 180 listed non-financial firms from 2018 to 2024.',
        scope: 'Quarterly financial statements across 28 consecutive quarters.'
      }
    ],
    methodology: [
      'Stationarity & Unit Root Diagnostics: Performed Augmented Dickey-Fuller (ADF) tests to confirm panel stationary variables.',
      'Hausman Specification Test: Conducted Hausman test (p < 0.001) confirming that the Fixed Effects (FE) estimator is consistent.',
      'Robust Standard Errors: Applied cluster-robust standard errors at the firm level to account for heteroskedasticity.'
    ],
    toolsAndTechniques: [
      'Python (pandas, statsmodels, linearmodels, seaborn)',
      'Econometric Modeling (Fixed Effects, Panel OLS)',
      'LaTeX / Overleaf (Research paper publication typesetting)'
    ],
    keyFindings: [
      'For every 100 bps hike in central bank policy rates, firms in high-tangibility sectors reduced their debt-to-equity ratio by an average of 1.84 percentage points (p < 0.01).',
      'Cash-rich firms displayed near-zero sensitivity to rate hikes, validating Pecking Order hierarchy under financial frictions.'
    ],
    deliverables: [
      {
        type: 'paper',
        label: 'Complete Academic Research Paper (Preprint PDF)',
        note: '24-page research paper with econometric tables and literature review',
        isAvailable: true,
        url: '#'
      },
      {
        type: 'repository',
        label: 'Replication Codebase & Jupyter Notebooks',
        note: 'Python data cleaning pipeline and regression tables',
        isAvailable: true,
        url: 'https://github.com/placeholder-dangtu/macro-capital-structure-econometrics'
      }
    ],
    metrics: [
      {
        label: 'Panel Sample Size',
        value: '5,040 obs',
        description: '180 firms across 28 financial quarters'
      },
      {
        label: 'Policy Rate Elasticity',
        value: '-0.0184***',
        description: 'Statistically significant at 99% confidence'
      },
      {
        label: 'Model Adjusted R-squared',
        value: '0.412',
        description: 'Within-firm variance explained'
      }
    ],
    limitationsAndLessons: [
      'The sample excludes unlisted small businesses due to lack of audited quarterly filings.',
      'Gained deep appreciation for empirical discipline: data must withstand diagnostic checks before drawing conclusions.'
    ],
    screenshots: [
      {
        title: 'Panel Regression Summary Output Table',
        caption: 'Model coefficients, t-statistics, and standard errors.',
        type: 'table',
        imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
      }
    ],
    startDate: '10/2024',
    endDate: '03/2025',
    status: 'Completed',
    featured: true,
    researchDetails: {
      hypothesis: 'Hypothesis: Benchmark interest rate shifts lead to significant asymmetric contractions in corporate debt ratios depending on asset tangibility.',
      teamComposition: 'Student Research Project: Lead Quantitative Analyst (Dang Tu) paired with Faculty Advisor.',
      dataCollection: 'Extracted from audited quarterly financial disclosures and public Central Bank statistical bulletins.',
      analyticalModel: 'Two-way Fixed Effects Panel Regression: Leverage_{i,t} = alpha_i + lambda_t + beta_1 * PolicyRate_t + beta_2 * Size_{i,t} + epsilon_{i,t}',
      publicationStatus: 'Completed University Academic Research Paper; Presented at Student Research Symposium.'
    }
  }
];
