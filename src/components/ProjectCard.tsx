'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Database,
  BarChart2,
  FileCode,
  ShieldCheck,
  TrendingUp,
  AlertCircle,
  ExternalLink,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-white border border-slate-100 hover:border-slate-200/80 rounded-[2.5rem] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border-b-4 border-b-transparent hover:border-b-blue-600">
      {/* Visual Cover Image Thumbnail (Placeholder) */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <ImageIcon className="size-8" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* Top Badges overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-black bg-white/95 text-blue-600 shadow-sm">
              {project.ticketId || 'DA-PROJECT'}
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-black bg-emerald-500 text-white shadow-sm">
              COMPLETED
            </span>
          </div>

          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white">
            (Demo preview)
          </span>
        </div>

        {/* Category tag bottom of image */}
        <div className="absolute bottom-3 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-600 text-white shadow-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3.5">
          {/* Title */}
          <Link href={`/projects/${project.id}`} className="group-hover:text-blue-600 transition-colors">
            <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
              {project.title}
            </h3>
          </Link>

          {/* Academic / Scenario Disclaimer */}
          {project.isHypotheticalOrAcademic && project.academicDisclaimer && (
            <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-100 text-[11px] text-amber-900 flex items-start gap-2">
              <AlertCircle className="size-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="line-clamp-2 leading-relaxed font-medium">{project.academicDisclaimer}</span>
            </div>
          )}

          {/* Problem Statement */}
          <div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">
              Business Challenge & Scope:
            </span>
            <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-medium">
              {project.problemStatement}
            </p>
          </div>

          {/* Key Metrics Chips */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-400 truncate font-black uppercase tracking-wider">{metric.label}</div>
                  <div className="text-sm font-black font-mono text-slate-900 flex items-center gap-1.5 mt-1">
                    <span>{metric.value}</span>
                    {metric.change && (
                      <span className={`text-[10px] font-black ${metric.isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
                        {metric.change}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tools Badges & CTA */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          {/* Tools & Methods */}
          <div className="flex flex-wrap gap-1.5">
            {project.toolsAndTechniques.slice(0, 4).map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold bg-slate-100 text-slate-600"
              >
                {tool}
              </span>
            ))}
            {project.toolsAndTechniques.length > 4 && (
              <span className="px-2 py-1 text-[10px] text-slate-400 font-mono font-bold self-center">
                +{project.toolsAndTechniques.length - 4} more
              </span>
            )}
          </div>

          {/* Action Link */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono font-bold">
              <Layers className="size-3.5 text-blue-600" />
              10-Part Case Study
            </span>

            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 group-hover:text-blue-700 transition-colors"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
