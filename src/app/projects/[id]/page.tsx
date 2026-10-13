import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Database,
  Code2,
  FileText,
  Layers,
  BarChart2,
  TrendingUp,
  ExternalLink,
  ShieldAlert,
  HelpCircle,
  Download,
  Info,
  Image as ImageIcon
} from 'lucide-react';
import { Github } from '@/components/Icons';
import { projectsData } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinancialDashboardPreview from '@/components/FinancialDashboardPreview';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Dang Tu - Data Analyst Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const sections = [
    { id: 'overview', title: '1. Overview & Context' },
    { id: 'problem', title: '2. Problem Statement' },
    { id: 'role', title: '3. Tu’s Contribution & Role' },
    { id: 'data', title: '4. Data Sources & Scope' },
    { id: 'methodology', title: '5. Methodology & Analytical Process' },
    { id: 'tools', title: '6. Tools & Technical Stack' },
    { id: 'analysis', title: '7. Analysis & Visualizations' },
    { id: 'findings', title: '8. Key Findings & Insights' },
    { id: 'deliverables', title: '9. Supporting Deliverables' },
    { id: 'limitations', title: '10. Limitations & Lessons Learned' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col selection:bg-blue-600/20 selection:text-blue-600">
      <Navbar />

      <main className="flex-1 py-10 sm:py-14">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-black text-slate-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span>Back to Projects Registry</span>
            </Link>

            <span className="text-xs font-mono font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100">
              SOLARN TICKET: {project.ticketId || project.id}
            </span>
          </div>

          {/* Project Title Header Banner (Solarn 3rem card) */}
          <div className="p-8 sm:p-12 rounded-[3rem] bg-white border border-slate-100 shadow-sm mb-10 space-y-6 relative overflow-hidden">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-4 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-600 border border-blue-100">
                {project.category}
              </span>
              <span className="px-4 py-1 rounded-full text-xs font-black bg-slate-100 text-slate-700">
                {project.badge}
              </span>
              <span className="text-xs font-mono font-bold text-slate-400 ml-auto flex items-center gap-1.5">
                <Calendar className="size-4 text-blue-600" />
                {project.startDate} – {project.endDate}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              {project.title}
            </h1>

            {/* Academic / Scenario Disclaimer */}
            {project.isHypotheticalOrAcademic && project.academicDisclaimer && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 text-xs text-amber-900 flex items-start gap-3">
                <AlertCircle className="size-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-black text-amber-800 block">Dataset & Methodology Governance:</span>
                  <p className="text-slate-600 font-medium leading-relaxed">{project.academicDisclaimer}</p>
                </div>
              </div>
            )}

            {/* Top Metric Strip */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider block truncate">{m.label}</span>
                    <div className="text-xl font-black font-mono text-slate-900 mt-1 flex items-center gap-2">
                      <span>{m.value}</span>
                      {m.change && (
                        <span className={`text-xs font-black ${m.isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
                          {m.change}
                        </span>
                      )}
                    </div>
                    {m.description && (
                      <span className="text-[10px] text-slate-500 font-medium block mt-1 truncate">{m.description}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 2-Column Case Study Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Sticky Outline Navigation */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-5">
              <div className="p-6 rounded-[2rem] bg-white border border-slate-100 text-xs space-y-4 shadow-sm">
                <p className="font-black text-slate-900 uppercase tracking-widest text-[11px] flex items-center gap-2">
                  <Layers className="size-4 text-blue-600" />
                  Case Study Outline
                </p>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 font-bold transition-colors"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Quick Deliverable Card */}
              <div className="p-6 rounded-[2rem] bg-white border border-slate-100 text-xs space-y-2 shadow-sm">
                <span className="font-black text-slate-900 block text-sm">Verified Deliverables</span>
                <p className="text-xs text-slate-500 font-medium">
                  Review reproducible notebooks, dashboards, and data models.
                </p>
                <a
                  href="#deliverables"
                  className="inline-block text-xs font-black text-blue-600 hover:underline pt-2"
                >
                  Jump to Deliverables ↓
                </a>
              </div>
            </aside>

            {/* Main 10-Part Case Study Body */}
            <div className="lg:col-span-9 space-y-10">
              {/* 1. Overview */}
              <section id="overview" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-4 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">01.</span> Overview & Business Context
                </h2>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {project.summary}
                </p>
              </section>

              {/* 2. Problem Statement */}
              <section id="problem" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-4 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">02.</span> Problem Statement
                </h2>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-700 font-medium leading-relaxed">
                  {project.problemStatement}
                </div>
              </section>

              {/* 3. My Role */}
              <section id="role" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-4 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">03.</span> Candidate Specific Responsibilities & Role
                </h2>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-700 font-medium leading-relaxed">
                  {project.myRole}
                </div>
              </section>

              {/* 4. Data Sources */}
              <section id="data" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-5 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">04.</span> Data Sources & Sampling Scope
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.dataSources.map((ds, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
                      <div className="flex items-center gap-2 text-slate-900 font-black text-xs">
                        <Database className="size-4 text-blue-600" />
                        <span>{ds.name}</span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {ds.description}
                      </p>
                      <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/60 font-medium">
                        <span className="font-black text-slate-700">Scope:</span> {ds.scope}
                      </div>
                      {ds.limitations && (
                        <div className="text-[11px] text-amber-700 font-medium">
                          <span className="font-black">Boundary:</span> {ds.limitations}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Methodology */}
              <section id="methodology" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-5 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">05.</span> Methodology & Analytical Execution Steps
                </h2>
                <div className="space-y-3">
                  {project.methodology.map((step, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                      <span className="size-7 rounded-xl bg-blue-600 text-white font-mono text-xs font-black flex items-center justify-center shrink-0 shadow-sm">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Tools & Techniques */}
              <section id="tools" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-5 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">06.</span> Tools & Analytical Stack
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {project.toolsAndTechniques.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-2xl text-xs font-mono font-black bg-slate-50 text-slate-800 border border-slate-100 flex items-center gap-2 shadow-xs"
                    >
                      <Code2 className="size-4 text-blue-600" />
                      {tool}
                    </span>
                  ))}
                </div>
              </section>

              {/* 7. Analysis & Visualizations */}
              <section id="analysis" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-6 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">07.</span> Visual Analytics & Dashboard Interface
                </h2>
                
                {/* Visual Preview embed */}
                <FinancialDashboardPreview />

                {/* Screenshot & Architecture Descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {project.screenshots.map((s, idx) => (
                    <div key={idx} className="rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden shadow-xs">
                      {s.imageUrl && (
                        <div className="relative h-44 bg-slate-100 overflow-hidden border-b border-slate-100">
                          <img
                            src={s.imageUrl}
                            alt={s.title}
                            className="size-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-5 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-slate-900">{s.title}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-blue-600 font-black border border-slate-100">
                            {s.type.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          {s.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 8. Key Findings */}
              <section id="findings" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-4 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">08.</span> Key Findings & Supported Insights
                </h2>
                <div className="space-y-3">
                  {project.keyFindings.map((finding, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                      <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {finding}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 9. Deliverables */}
              <section id="deliverables" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-5 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">09.</span> Verifiable Deliverables & Repositories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.deliverables.map((deliv, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-black text-slate-900">{deliv.label}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-black border border-emerald-100">
                            {deliv.isAvailable ? 'Available' : 'Pending'}
                          </span>
                        </div>
                        {deliv.note && (
                          <p className="text-xs text-slate-500 font-medium">{deliv.note}</p>
                        )}
                      </div>

                      {deliv.url && deliv.url !== '#' ? (
                        <a
                          href={deliv.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <span>Open Deliverable</span>
                          <ExternalLink className="size-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 font-mono font-bold">
                          Available on formal request
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* 10. Limitations & Lessons Learned */}
              <section id="limitations" className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-5 scroll-mt-24">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 pb-3 border-b border-slate-100">
                  <span className="text-blue-600 font-mono text-base font-black">10.</span> Analytical Boundaries & Lessons Learned
                </h2>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Transparent assessment of methodological boundaries:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    {project.limitationsAndLessons.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="size-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Bottom Navigation */}
              <div className="pt-6 flex items-center justify-between">
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 text-xs font-black text-slate-600 hover:text-blue-600"
                >
                  <ArrowLeft className="size-4" />
                  <span>Return to Projects Registry</span>
                </Link>

                <a
                  href="#overview"
                  className="text-xs font-black text-blue-600 hover:underline"
                >
                  Back to Top ↑
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
