'use client';

import React, { useState } from 'react';
import {
  FileText,
  ChevronRight,
  BarChart3,
  Database,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  CalendarDays,
  Briefcase,
  Mail,
  BookOpen,
  User,
  GraduationCap,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Clock,
  TrendingUp,
  Activity,
  Zap,
  Server
} from 'lucide-react';
import { profileData } from '@/data/profile';
import FinancialDashboardPreview from './FinancialDashboardPreview';
import ResumeModal from './ResumeModal';

function InfoItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 group/item">
      <div className="size-11 rounded-2xl bg-slate-100 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{label}</p>
        <p className="text-sm font-black text-slate-900 leading-tight">{value}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden solarn-dot-bg">
      {/* Solarn Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] solarn-glow pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 space-y-8">
        
        {/* SOLARN WELCOME BANNER (Teacher/Student Solarn Hero Card) */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden group">
          <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 relative z-10">
            
            {/* AVATAR COLUMN */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              <div className="relative group/avatar">
                <div className="size-44 md:size-52 rounded-full bg-blue-50 border-4 border-blue-500/15 overflow-hidden shadow-2xl transition-transform group-hover/avatar:scale-105 duration-500">
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="size-full object-cover object-center"
                  />
                </div>
                <span className="absolute bottom-2 right-2 size-6 bg-emerald-500 border-4 border-white rounded-full animate-pulse shadow-md" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider bg-slate-100/90 px-3 py-1 rounded-full border border-slate-200/50">
                Data Analyst Profile
              </span>
            </div>

            {/* PROFILE INFO & DETAILS */}
            <div className="flex-1 space-y-7 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-center md:text-left">
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                    <span className="bg-blue-50 text-blue-600 border border-blue-100 font-black rounded-full px-4 py-1 text-xs uppercase tracking-tight">
                      ROLE: {profileData.role}
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 font-black rounded-full px-4 py-1 text-xs uppercase tracking-tight flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      READY FOR HIRE
                    </span>
                    <span className="bg-amber-50 text-amber-700 border border-amber-100 font-black rounded-full px-4 py-1 text-xs uppercase tracking-tight">
                      SOLARN VERIFIED PORTFOLIO
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                    Dang <span className="text-blue-600">Tu</span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-600 max-w-3xl font-medium leading-relaxed">
                    {profileData.tagline}. Translating massive transactional databases into reliable <strong className="text-blue-600 font-black">Star-Schema Power BI models</strong>, automated <strong className="text-blue-600 font-black">SQL pipelines</strong>, cohort retention matrices, and executive growth insights.
                  </p>
                </div>

                {/* Top Action Button */}
                <button
                  onClick={() => setResumeOpen(true)}
                  className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black h-12 px-6 shadow-lg shadow-blue-500/25 transition-all hover:scale-105 shrink-0 flex items-center gap-2 text-sm"
                >
                  <FileText className="size-4" />
                  <span>View Resume</span>
                </button>
              </div>

              {/* Solarn InfoItem 6-Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                <InfoItem icon={User} label="Primary Role" value="Data Analyst (BI & Product)" />
                <InfoItem icon={GraduationCap} label="Academic Degree" value="B.S. Economics & Analytics" />
                <InfoItem icon={CalendarDays} label="Expected Graduation" value="Class of 2026" />
                <InfoItem icon={Code2} label="Core Stack" value="SQL • Power BI • Python • Tableau" />
                <InfoItem icon={Mail} label="Contact Email" value={profileData.contact.email} />
                <InfoItem icon={BookOpen} label="Featured Studies" value="5 Quantitative Case Studies" />
              </div>

              {/* Solarn CTA Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-black text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                >
                  <span>Explore Analytical Projects</span>
                  <ChevronRight className="size-4" />
                </a>

                <a
                  href="#power-bi"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-600 font-black text-xs uppercase tracking-wider transition-colors border border-blue-100"
                >
                  <BarChart3 className="size-4" />
                  <span>Power BI & DAX Architecture</span>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 -z-0 pointer-events-none" />
        </div>

        {/* SOLAR KEY METRICS GRID (Exact Solarn 4-Card Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              label: "Transactions Analyzed",
              value: "1.24M+",
              color: "text-blue-600",
              bg: "bg-blue-50",
              icon: Database,
              desc: "Processed in Star Schema models"
            },
            {
              label: "Calculated Measures",
              value: "22+ DAX",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
              icon: Activity,
              desc: "VertiPaq engine optimized"
            },
            {
              label: "Query Latency SLA",
              value: "< 400ms",
              color: "text-purple-600",
              bg: "bg-purple-50",
              icon: Zap,
              desc: "Sub-second analytical rendering"
            },
            {
              label: "Pipeline Health",
              value: "99.85%",
              color: "text-amber-600",
              bg: "bg-amber-50",
              icon: Server,
              desc: "18 active ETL batch streams"
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group bg-white border-b-4 border-b-transparent hover:border-b-blue-600 p-7"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3.5 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="size-6" />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-2">
                  <p className={`text-3xl font-black tracking-tighter ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SOLAR INTERACTIVE MULTI-COLOR DASHBOARD PREVIEW */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-mono font-black uppercase tracking-wider text-blue-600">
                Figure 1.0 • Enterprise Interactive Analytics Cockpit
              </span>
            </div>
            <span className="text-xs text-slate-400 font-bold hidden sm:inline">
              Switch interactive tabs below to inspect multi-color Recharts visuals
            </span>
          </div>

          <FinancialDashboardPreview />
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
