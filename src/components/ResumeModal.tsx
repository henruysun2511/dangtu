'use client';

import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';
import { profileData } from '@/data/profile';
import { certificationsData } from '@/data/experiences';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-7 bg-white/95 backdrop-blur-md border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600">
              <FileText className="size-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">{profileData.name} — Data Analyst Resume</h2>
              <p className="text-xs text-slate-500 font-mono font-bold">{profileData.role} • {profileData.headline}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                alert(`Resume file download: ${profileData.contact.resumeFileName}\n(Attach official PDF in public folder for production download)`);
              }}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-black text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl shadow-md shadow-blue-500/25"
            >
              <Download className="size-4" />
              Download PDF
            </button>
            <button 
              onClick={onClose}
              className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-7 text-sm">
          {/* Note Banner */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-blue-900">
            <p className="text-xs font-black mb-1 flex items-center gap-1.5 text-blue-600">
              <CheckCircle2 className="size-4" />
              Candidate Profile Summary
            </p>
            <p className="text-xs leading-relaxed text-slate-700 font-medium">
              Comprehensive overview of Dang Tu&apos;s quantitative preparation, advanced coursework, data analytics case studies (Power BI Star Schema, Cohorts, A/B Testing), and verified academic credentials.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <GraduationCap className="size-4 text-blue-600" />
              Education & Academic Preparation
            </h3>
            <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="font-black text-slate-900 text-base">{profileData.academicBackground.degree}</span>
                <span className="text-xs font-mono font-black text-blue-600">Class of {profileData.academicBackground.expectedGraduation}</span>
              </div>
              <p className="text-xs text-slate-500 font-bold mb-3">{profileData.academicBackground.institution} • Major: {profileData.academicBackground.major}</p>
              
              <div className="text-xs text-slate-700">
                <span className="font-black text-slate-500 block mb-2">Core Relevant Coursework:</span>
                <div className="flex flex-wrap gap-2">
                  {profileData.academicBackground.relevantCoursework.map((course, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-white text-slate-700 text-xs font-medium border border-slate-100 shadow-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Briefcase className="size-4 text-blue-600" />
              Core Competencies & Analytical Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.technicalSkills.map((category, idx) => (
                <div key={idx} className="p-5 rounded-[2rem] bg-slate-50 border border-slate-100">
                  <p className="text-xs font-black text-slate-900 mb-2.5">{category.category}</p>
                  <ul className="space-y-1.5">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-600 font-medium flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-blue-600" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Badges */}
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Award className="size-4 text-blue-600" />
              Professional Certifications & Training
            </h3>
            <div className="space-y-3">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black text-slate-900">{cert.title}</p>
                    <p className="text-xs text-slate-500 font-medium">{cert.issuer} • {cert.note}</p>
                  </div>
                  <span className={`text-[10px] px-3 py-1 rounded-full font-mono font-black ${
                    cert.isVerified 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                      : 'bg-amber-50 text-amber-700 border border-amber-100'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span className="font-mono text-blue-600 font-bold">Direct: {profileData.contact.email}</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-900 font-black transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
