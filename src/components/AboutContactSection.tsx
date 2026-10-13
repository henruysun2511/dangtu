'use client';

import React, { useState } from 'react';
import {
  Mail,
  Download,
  Send,
  MapPin,
  GraduationCap,
  Target,
  CheckCircle2,
  FileText,
  User,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { profileData } from '@/data/profile';
import ResumeModal from './ResumeModal';

export default function AboutContactSection() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <>
      <section id="about" className="py-20 border-t border-slate-100 bg-slate-50/60">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: About & Academic Profile */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-black text-blue-600 mb-3">
                  <User className="size-4" />
                  <span>Candidate Profile • {profileData.role}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
                  About {profileData.name}
                </h2>
                <p className="text-base text-slate-600 mt-4 leading-relaxed font-medium">
                  {profileData.bio}
                </p>
              </div>

              {/* Photo & Profile Identity Card */}
              <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                <div className="relative size-32 rounded-3xl overflow-hidden shrink-0 border-2 border-blue-100 shadow-md">
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="size-full object-cover object-center"
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                    <h3 className="text-xl font-black text-slate-900">{profileData.name}</h3>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-black border border-blue-100">
                      {profileData.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {profileData.tagline}
                  </p>
                  <p className="text-xs text-blue-600 font-bold pt-1">
                    (Candidate photo placeholder — easily replaceable with formal portrait)
                  </p>
                </div>
              </div>

              {/* Academic Background Card */}
              <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 space-y-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <GraduationCap className="size-4 text-blue-600" />
                    University Education & Curriculum
                  </h3>
                  <span className="text-xs font-mono font-black text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    Class of {profileData.academicBackground.expectedGraduation}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-black text-slate-900">
                    {profileData.academicBackground.degree}
                  </h4>
                  <p className="text-xs text-slate-500 font-bold mt-0.5">
                    {profileData.academicBackground.institution} • Major: {profileData.academicBackground.major}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <span className="text-xs font-black text-slate-700 block">
                    Core Coursework Competencies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {profileData.academicBackground.relevantCoursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Target Career Roles */}
              <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 space-y-4 shadow-sm">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Target className="size-4 text-blue-600" />
                  Target Career Paths & Objectives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {profileData.careerInterests.map((interest, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-black text-slate-800"
                    >
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Connect Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
                    SOLARN: CONNECT-01
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Get in Touch with Tu
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Interested in reviewing project .pbix files, discussing analyst openings, or collaborating on quantitative research.
                  </p>
                </div>

                {/* Direct Contact Links */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                    <div className="flex items-center gap-3">
                      <Mail className="size-4 text-blue-600" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-black uppercase tracking-wider">Direct Email</span>
                        <span className="text-slate-900 font-mono font-bold">{profileData.contact.email}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 text-xs font-black rounded-xl bg-white hover:bg-slate-100 text-blue-600 border border-slate-200 transition-colors"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 text-xs transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="size-4 text-blue-600" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-black uppercase tracking-wider">Professional Profile</span>
                        <span className="text-slate-900 font-black">LinkedIn Profile (Dang Tu)</span>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-blue-600 font-black">↗</span>
                  </a>

                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 text-xs transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="size-4 text-purple-600" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-black uppercase tracking-wider">Source Code & Notebooks</span>
                        <span className="text-slate-900 font-black">GitHub Repositories</span>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-blue-600 font-black">↗</span>
                  </a>
                </div>

                {/* Quick Resume CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-500/25"
                  >
                    <FileText className="size-4" />
                    <span>View & Download Resume (PDF)</span>
                  </button>
                </div>

                {/* Message Box */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                    Send a Quick Message
                  </h4>

                  {formSent ? (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800 flex items-start gap-3">
                      <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-emerald-600" />
                      <div>
                        <span className="font-black block">Message transmitted successfully.</span>
                        <span className="text-slate-500 font-medium">Thank you for reaching out! Tu will reply promptly via email.</span>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name / Organization"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200/80 focus:bg-white rounded-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 font-medium"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Your Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200/80 focus:bg-white rounded-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 font-medium"
                        />
                      </div>
                      <div>
                        <textarea
                          rows={3}
                          required
                          placeholder="Inquiry regarding analyst roles, project walkthroughs, or collaboration..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200/80 focus:bg-white rounded-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 font-medium resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
                      >
                        <Send className="size-3.5" />
                        <span>Send Transmission</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
