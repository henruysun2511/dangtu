'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  FileText,
  Sigma,
  Users,
  Database,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { Github } from '@/components/Icons';
import { projectsData } from '@/data/projects';

export default function ResearchSection() {
  const researchProjects = projectsData.filter(p => p.category === 'Scientific Research');

  return (
    <section id="research" className="py-20 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-black text-blue-600 mb-3">
              <BookOpen className="size-4" />
              <span>Academic Inquiry & Econometric Modeling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
              Scientific & Empirical Econometric Research
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-2 max-w-2xl leading-relaxed">
              Rigorous empirical econometric investigations utilizing longitudinal panel data regressions (Fixed Effects), hypothesis testing, and macroeconomic risk indicators in Python (statsmodels) and Stata.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-black text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2.5 rounded-2xl shadow-xs">
            <ShieldCheck className="size-4 text-blue-600" />
            <span>Supervised University Research</span>
          </div>
        </div>

        {/* Research Entries List */}
        <div className="space-y-8">
          {researchProjects.map((paper) => {
            const details = paper.researchDetails;

            return (
              <div
                key={paper.id}
                className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-50/70 border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-8"
              >
                {/* Paper Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
                  <div>
                    <span className="text-xs font-mono font-black text-blue-600 uppercase tracking-wider block mb-1">
                      {paper.badge} • [SOLAR: {paper.ticketId || 'DA-105'}] • Status: {details?.publicationStatus || paper.status}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {paper.title}
                    </h3>
                  </div>

                  <Link
                    href={`/projects/${paper.id}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 text-xs font-black text-blue-600 hover:bg-blue-50/50 transition-all shrink-0 shadow-xs"
                  >
                    <span>Read Paper Case Study</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                {/* Grid breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Research Question & Methodology */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                        <Sigma className="size-4 text-blue-600" />
                        Research Hypothesis & Core Question
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed p-5 rounded-2xl bg-white border border-slate-100">
                        {details?.hypothesis || paper.problemStatement}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                        <Users className="size-4 text-emerald-600" />
                        Candidate Contribution & Research Collaboration
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed p-5 rounded-2xl bg-white border border-slate-100">
                        {paper.myRole}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                        <Database className="size-4 text-purple-600" />
                        Data Collection & Sampling Scope
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed p-5 rounded-2xl bg-white border border-slate-100">
                        {details?.dataCollection || paper.dataSources[0].description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Model Specification & Key Empirical Results */}
                  <div className="lg:col-span-5 space-y-5">
                    {/* Econometric Equation Box */}
                    {details?.analyticalModel && (
                      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 text-white">
                        <span className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-widest block">
                          Econometric Specification (Two-Way FE):
                        </span>
                        <pre className="text-xs text-emerald-300 font-mono whitespace-pre-wrap leading-relaxed">
                          {details.analyticalModel}
                        </pre>
                      </div>
                    )}

                    {/* Empirical Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      {paper.metrics.map((m, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
                          <div className="text-[10px] text-slate-400 font-black uppercase tracking-wider">{m.label}</div>
                          <div className="text-base font-black font-mono text-slate-900 mt-1">{m.value}</div>
                          <div className="text-[10px] text-slate-500 font-medium mt-0.5">{m.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Paper Deliverable Links */}
                    <div className="pt-2 flex flex-wrap gap-3">
                      <a
                        href="https://github.com/placeholder-dangtu/macro-capital-structure-econometrics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 text-xs font-black text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors shadow-xs"
                      >
                        <Github className="size-4 text-blue-600" />
                        <span>Replication Notebook</span>
                      </a>
                      <button
                        onClick={() => alert("Research Paper Preprint PDF placeholder. Attach official conference preprint file in /public directory.")}
                        className="flex items-center gap-2 px-4 py-2.5 text-xs font-black text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-xl transition-colors"
                      >
                        <FileText className="size-4" />
                        <span>Preprint PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
