'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, ExternalLink, ArrowUpRight, BarChart3 } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { profileData } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white text-slate-500 text-xs">
      {/* Integrity Disclaimer Banner */}
      <div className="border-b border-slate-100 bg-slate-50/70 py-4 px-4 md:px-8">
        <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-blue-600 font-black">
            <ShieldCheck className="size-4 shrink-0" />
            <span>Academic Integrity & Evidence-First Principle</span>
          </div>
          <p className="text-[11px] text-slate-500 max-w-3xl leading-relaxed font-medium">
            All analytical models, Power BI reports, econometric specifications, and SQL queries featured across this portfolio are constructed using verified public datasets and reproducible methodologies. All raw schemas and calculations are accessible for independent audit.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/25">
                <BarChart3 className="size-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                {profileData.name}
              </span>
              <span className="text-xs font-mono font-black text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                {profileData.role}
              </span>
            </div>

            <p className="text-xs text-slate-500 max-w-md leading-relaxed font-medium pt-1">
              {profileData.tagline}. Dedicated to delivering measurable commercial impact through rigorous data modeling and visual intelligence.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-emerald-600">
              <span className="flex items-center gap-2 font-black">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Data Analyst & BI Roles
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Portfolio Navigation</p>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li>
                <a href="/#projects" className="hover:text-blue-600 transition-colors">
                  Analytical Projects Registry
                </a>
              </li>
              <li>
                <a href="/#power-bi" className="hover:text-blue-600 transition-colors">
                  Power BI & DAX Architecture
                </a>
              </li>
              <li>
                <a href="/#research" className="hover:text-blue-600 transition-colors">
                  Econometric Research Papers
                </a>
              </li>
              <li>
                <a href="/#case-studies" className="hover:text-blue-600 transition-colors">
                  Commercial Case Studies
                </a>
              </li>
              <li>
                <a href="/#experience" className="hover:text-blue-600 transition-colors">
                  Experience & Credentials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Profiles */}
          <div className="space-y-2.5">
            <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Connect & Repositories</p>
            <ul className="space-y-2.5 text-xs font-bold">
              <li>
                <a 
                  href={`mailto:${profileData.contact.email}`} 
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="size-4 text-blue-600" />
                  <span className="truncate">{profileData.contact.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={profileData.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="size-4 text-purple-600" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="size-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a 
                  href={profileData.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="size-4 text-blue-600" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="size-3.5 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© 2026 {profileData.name} — Data Analyst Portfolio. Inspired by Solarn Enterprise Design.</p>
          <p className="font-mono text-slate-400">
            Engineered with Next.js 16 • React 19 • Tailwind CSS • Recharts
          </p>
        </div>
      </div>
    </footer>
  );
}
