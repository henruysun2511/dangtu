'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileText, ChevronRight, BarChart3, Star, Download } from 'lucide-react';
import { profileData } from '@/data/profile';
import ResumeModal from './ResumeModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '/#projects' },
    { label: 'Power BI & DAX', href: '/#power-bi' },
    { label: 'Data Research', href: '/#research' },
    { label: 'Case Studies', href: '/#case-studies' },
    { label: 'Experience', href: '/#experience' },
    { label: 'About & Contact', href: '/#about' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] transition-all">
        <div className="container mx-auto h-20 px-4 md:px-8 flex items-center justify-between">
          {/* LEFT: Dang Tu Brand Logo (Unified) */}
          <Link href="/" className="flex items-center gap-3.5 group">
            {/* Avatar / Profile Badge */}
            <div className="relative">
              <div className="size-11 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 p-[2px] shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="size-full rounded-[0.9rem] object-cover"
                />
              </div>
              <span className="absolute -top-0.5 -right-0.5 size-3 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
            </div>

            {/* Dang Tu Title & Role */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                  {profileData.name}
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 rounded-md">
                  PRO
                </span>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 mt-1">
                {profileData.role}
              </span>
            </div>
          </Link>

          {/* CENTER: Navigation Menu */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-[14px] font-[900] tracking-tight text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#about"
              className="px-4 py-2.5 text-xs font-black text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 rounded-2xl transition-all"
            >
              Get in Touch
            </a>
            <button
              onClick={() => setResumeModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-black text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-102"
            >
              <FileText className="size-4" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl text-xs"
              aria-label="View Resume"
            >
              <FileText className="size-5 text-blue-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-b border-slate-100 bg-white/95 backdrop-blur-xl px-5 pt-3 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-black text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-black text-white bg-blue-600 rounded-2xl shadow-md shadow-blue-500/25"
              >
                <FileText className="size-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
