'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  DollarSign,
  PieChart,
  Layers,
  ArrowRight,
  Calculator,
  ShieldAlert,
  Percent,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { projectsData } from '@/data/projects';

export default function CaseStudySection() {
  const caseStudies = projectsData.filter(
    p => p.category === 'Financial Analysis' || p.category === 'Product & Growth Analytics'
  );

  return (
    <section id="case-studies" className="py-20 border-t border-slate-100 bg-slate-50/60">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-black text-blue-600 mb-3">
              <Calculator className="size-4" />
              <span>Unit Economics & Quantitative Analytics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
              Commercial Analytics & Deep Case Studies
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-2 max-w-2xl leading-relaxed">
              Applying mathematical variance decomposition (Price-Volume-Mix), cash conversion cycle diagnostics, and customer lifetime value (LTV/CAC) frameworks to unlock enterprise value.
            </p>
          </div>
        </div>

        {/* Case Studies Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-200 transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 group border-b-4 border-b-transparent hover:border-b-blue-600"
            >
              {/* Image banner placeholder */}
              <div className="relative h-52 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                {study.coverImage ? (
                  <img
                    src={study.coverImage}
                    alt={study.title}
                    className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="size-full flex items-center justify-center text-slate-400">
                    <ImageIcon className="size-8" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-black bg-white/95 text-blue-600 shadow-sm">
                    {study.ticketId || study.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 text-white text-xs font-mono font-bold">
                  {study.startDate} – {study.endDate}
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                  (Demo banner)
                </div>
              </div>

              <div className="p-7 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>

                  {/* Academic disclaimer */}
                  {study.isHypotheticalOrAcademic && study.academicDisclaimer && (
                    <p className="text-xs text-slate-500 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 font-medium">
                      {study.academicDisclaimer}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Analytical Techniques & Frameworks */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                      Core Analytical Mechanisms:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700 font-medium">
                      {study.methodology.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {study.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider block truncate">{m.label}</span>
                        <div className="text-lg font-black font-mono text-slate-900 mt-1 flex items-center gap-1.5">
                          <span>{m.value}</span>
                          {m.change && (
                            <span className={`text-[10px] font-black ${m.isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
                              {m.change}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium block truncate mt-0.5">{m.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono font-bold">
                    Stack: {study.toolsAndTechniques.slice(0, 2).join(' • ')}
                  </span>
                  <Link
                    href={`/projects/${study.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
