'use client';

import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { experiencesData, certificationsData } from '@/data/experiences';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-black text-blue-600 mb-3">
              <Briefcase className="size-4" />
              <span>Solarn Roadmap & Career Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
              Analytical Track Record & Professional Certifications
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-2 max-w-2xl leading-relaxed">
              Transparent chronological timeline of supervised university econometric research, national analytics case challenges, and industry-standard certifications.
            </p>
          </div>
        </div>

        {/* 2-column layout: Left = Experience Timeline, Right = Certifications & Training */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Experiences */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <GraduationCap className="size-4 text-blue-600" />
              Academic & Professional Engagements
            </h3>

            <div className="space-y-5">
              {experiencesData.map((exp) => (
                <div
                  key={exp.id}
                  className={`p-7 rounded-[2.5rem] border transition-all ${
                    exp.isVerified
                      ? 'bg-slate-50/70 border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1'
                      : 'bg-white border-dashed border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                    <div>
                      <div className="flex items-center gap-2.5">
                        {exp.ticketKey && (
                          <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100">
                            {exp.ticketKey}
                          </span>
                        )}
                        <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                          {exp.role}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 font-bold mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-3 py-1 rounded-full font-mono font-black tracking-tight ${
                        exp.isVerified
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                          : 'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}>
                        {exp.verificationBadgeText}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 mb-4">
                    <Calendar className="size-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 font-medium mb-5">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="size-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200/60">
                    {exp.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-xl bg-white text-slate-600 border border-slate-100 shadow-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Competencies */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Award className="size-4 text-blue-600" />
              Credentials & Professional Certifications
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[2rem] bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors space-y-2.5 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-sm font-black text-slate-900 leading-snug">
                      {cert.title}
                    </h4>
                    <span className={`text-[10px] font-mono px-3 py-1 rounded-full font-black tracking-tight shrink-0 ${
                      cert.isVerified
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        : 'bg-amber-50 text-amber-700 border border-amber-100'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-bold">
                    Issuer: <span className="text-slate-800">{cert.issuer}</span> • {cert.date}
                  </p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed pt-1">
                    {cert.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Verification Notice */}
            <div className="p-6 rounded-[2rem] bg-blue-50/60 border border-blue-100 text-xs text-slate-600 space-y-2.5">
              <span className="font-black text-blue-600 flex items-center gap-2 text-xs uppercase tracking-wider">
                <ShieldCheck className="size-4 text-blue-600" />
                Evidence Documentation Guarantee
              </span>
              <p className="text-xs leading-relaxed font-medium text-slate-600">
                Course transcripts, Power BI project files (.pbix), SQL query scripts, and Python replication Jupyter notebooks are readily provided upon request for hiring managers and academic supervisors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
