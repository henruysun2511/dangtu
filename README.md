# DangTu-Portfolio — Professional Finance & Business Analytics Portfolio

A modern, evidence-based personal portfolio website built for **Tu**, specializing in **Finance**, **Business Analytics**, and **Data Analysis**.

## 1. Overview & Architecture

Unlike generic personal portfolios, this platform demonstrates concrete analytical rigor through:
- **Interactive Financial Dashboard Preview**: Live Recharts visualizations featuring Commercial Credit Risk NPL trends, Price-Volume-Mix (PVM) gross margin bridges, and Cash Conversion Cycle diagnostics.
- **Dedicated Power BI & DAX Workflow**: A full 6-stage engineering breakdown from Power Query (M) ETL to Star Schema dimensional modeling, VertiPaq-tuned DAX measures, and business decision recommendations.
- **Scientific Research & Econometrics**: Academic research papers modeling corporate capital structure with Two-Way Fixed Effects panel regressions.
- **10-Part Case Study Detail Pages**: Dynamic deep dives (`/projects/[id]`) for every project with full problem statements, methodologies, formulas, and verifiable deliverables.
- **Zero Fabricated Metrics**: All academic coursework and scenario models are explicitly labeled with integrity disclaimers.

---

## 2. Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Static Site Generation / Prerendering)
- **Language**: TypeScript (Strict typing for all profile & project models)
- **Styling**: Tailwind CSS v4 (Custom deep navy, emerald green, and slate color tokens)
- **Charts & Data Visualization**: [Recharts](https://recharts.org/)
- **Icons**: Lucide React + custom SVG icons
- **Fonts**: Geist Sans & Geist Mono

---

## 3. Project Structure

```
dangtu-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with SEO metadata & OpenGraph tags
│   │   ├── page.tsx               # Homepage assembling all portfolio sections
│   │   ├── globals.css            # Financial grid & custom color system
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx       # 10-part dynamic case study detail page
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive header with navigation & resume modal
│   │   ├── Hero.tsx               # Hero section with headline & integrated dashboard preview
│   │   ├── FinancialDashboardPreview.tsx  # Live Recharts area & bar chart analytics
│   │   ├── ProjectFilter.tsx      # Category filter & keyword search gallery
│   │   ├── ProjectCard.tsx        # Reusable card with metrics, disclaimer, & tags
│   │   ├── PowerBiShowcase.tsx    # 6-step Power BI workflow & interactive DAX lab
│   │   ├── ResearchSection.tsx    # Scientific research & econometric model showcase
│   │   ├── CaseStudySection.tsx   # FP&A variance models & unit economics
│   │   ├── ExperienceSection.tsx  # Timeline of research & certifications
│   │   ├── AboutContactSection.tsx# Academic bio, target roles & contact form
│   │   ├── ResumeModal.tsx        # Candidate resume overview modal
│   │   ├── Footer.tsx             # Integrity banner & quick links
│   │   └── Icons.tsx              # SVG brand icons
│   ├── data/
│   │   ├── profile.ts             # Tu's bio, education, target roles, contact
│   │   ├── projects.ts            # Detailed project catalog (10-part schema)
│   │   └── experiences.ts         # Career timeline, certifications
│   └── types/
│       └── index.ts               # Complete TypeScript interfaces
└── public/                        # Static assets & resume PDF
```

---

## 4. How Tu Can Update Content

All content is decoupled from UI code and managed via strongly typed TypeScript data files:

1. **Personal Information & Contact**:
   - Edit `src/data/profile.ts`
   - Update university name, degree, contact email, LinkedIn, and GitHub links.
2. **Resume PDF**:
   - Place your real PDF in `public/Tu_Resume_Finance_Analytics.pdf`.
3. **Projects & Case Studies**:
   - Edit `src/data/projects.ts`
   - Add new projects or update existing ones using the typed `Project` interface.
4. **Experience & Certifications**:
   - Edit `src/data/experiences.ts`
   - Replace placeholder internship or certification entries with verified details.

---

## 5. Development & Build Commands

Inside the `dangtu-portfolio` folder:

```bash
# Start local development server
npm run dev

# Run TypeScript typecheck
npx tsc --noEmit

# Build production bundle (Prerenders all static pages)
npm run build

# Start production server
npm run start
```
