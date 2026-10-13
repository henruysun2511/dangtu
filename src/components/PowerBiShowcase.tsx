'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  Database,
  Code2,
  Workflow,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { Github } from '@/components/Icons';
import { projectsData } from '@/data/projects';

export default function PowerBiShowcase() {
  const pbiProject = projectsData.find(p => p.id === 'sme-banking-credit-risk-powerbi');
  const workflow = pbiProject?.powerBiWorkflow;

  const [activeDaxIdx, setActiveDaxIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!pbiProject || !workflow) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(workflow.daxMeasures[activeDaxIdx].formula);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="power-bi" className="py-20 border-t border-slate-100 bg-slate-50/60">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-black text-blue-600 mb-3">
              <BarChart3 className="size-4" />
              <span>Full-Stack Business Intelligence Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
              Power BI & DAX Data Modeling Workflow
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-2 max-w-2xl leading-relaxed">
              Demonstrating the full analytics lifecycle: From raw extract ingestion in Power Query (M) to dimensional Star Schema formulation, high-performance DAX measure calculation, and executive dashboard design.
            </p>
          </div>

          <Link
            href={`/projects/${pbiProject.id}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-600 text-xs font-black text-blue-600 hover:bg-blue-50/50 transition-all shrink-0 shadow-sm"
          >
            <span>Read Full Case Study</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Visual Dashboard Gallery Strip (Solarn 3-Card Visual) */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="relative h-52 bg-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Executive Overview Dashboard Screen"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 text-[10px] font-mono font-black px-3 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                (Demo Screen 1)
              </span>
            </div>
            <div className="p-6">
              <h4 className="text-base font-black text-slate-900">Executive Risk Cockpit</h4>
              <p className="text-xs text-slate-500 font-medium mt-1.5 leading-relaxed">
                Centralized real-time tracking of gross committed loan facilities, NPL delinquency rates, and collateral coverage cushions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="relative h-52 bg-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
                alt="Star Schema Data Model Topology"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 text-[10px] font-mono font-black px-3 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                (Demo Screen 2)
              </span>
            </div>
            <div className="p-6">
              <h4 className="text-base font-black text-slate-900">Star Schema Topology</h4>
              <p className="text-xs text-slate-500 font-medium mt-1.5 leading-relaxed">
                One central Fact table connected strictly to 4 conformed Dimensions with 1-to-many single-directional filtering logic.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="relative h-52 bg-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80"
                alt="Drill-through Branch Analytics"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 text-[10px] font-mono font-black px-3 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                (Demo Screen 3)
              </span>
            </div>
            <div className="p-6">
              <h4 className="text-base font-black text-slate-900">Drill-Through Telemetry</h4>
              <p className="text-xs text-slate-500 font-medium mt-1.5 leading-relaxed">
                Empowering loan officers to seamlessly drill down from high-level portfolio KPIs directly into individual facility covenants.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Stage Analytical Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stage 1: Business Requirements */}
          <div className="p-7 rounded-[2.5rem] bg-white border border-slate-100 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 font-mono font-black text-xs flex items-center justify-center">
                01
              </span>
              <h3 className="text-sm font-black text-slate-900">Business Requirements</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              {workflow.businessRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stage 2: Power Query Cleaning */}
          <div className="p-7 rounded-[2.5rem] bg-white border border-slate-100 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 font-mono font-black text-xs flex items-center justify-center">
                02
              </span>
              <h3 className="text-sm font-black text-slate-900">Power Query (M) ETL</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              {workflow.powerQueryCleaning.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stage 3: Star Schema Data Modeling */}
          <div className="p-7 rounded-[2.5rem] bg-white border border-slate-100 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 font-mono font-black text-xs flex items-center justify-center">
                03
              </span>
              <h3 className="text-sm font-black text-slate-900">Star Schema Modeling</h3>
            </div>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {workflow.dataModeling}
            </p>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-[11px] font-mono font-black text-blue-600">
              1 Fact (`Fact_Loans`) : 4 Dimensions (Single-direction)
            </div>
          </div>
        </div>

        {/* Stage 4: DAX Measure Lab (Interactive Code Inspector) */}
        <div className="p-7 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <Code2 className="size-5 text-blue-600" />
                <h3 className="text-lg font-black text-slate-900">
                  DAX Measure Formulation Lab
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Inspect calculated metrics engineered for VertiPaq engine efficiency and sub-400ms query rendering.
              </p>
            </div>

            {/* DAX Selector Buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/60">
              {workflow.daxMeasures.map((measure, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDaxIdx(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition-all ${
                    activeDaxIdx === idx
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {measure.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Measure Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 border border-slate-800 font-mono text-xs overflow-x-auto text-slate-100 relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                <span className="font-bold tracking-wider">DAX EXPRESSION</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="text-emerald-400 leading-relaxed font-mono whitespace-pre-wrap">
                {workflow.daxMeasures[activeDaxIdx].formula}
              </pre>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">
                  Analytical Logic & Purpose:
                </span>
                <p className="text-xs text-slate-700 font-medium leading-relaxed p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  {workflow.daxMeasures[activeDaxIdx].explanation}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1.5">
                <span className="text-xs font-black text-slate-900 block">
                  Performance & Storage Notes:
                </span>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Measures leverage `DIVIDE()` to protect against division-by-zero exceptions and calculate dynamically at aggregated filter contexts, keeping VertiPaq memory consumption minimal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables & Evidence Row */}
        <div className="mt-8 p-8 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-base font-black text-slate-900">Inspect Supporting Deliverables</h4>
            <p className="text-xs text-slate-500 font-medium">
              Access the complete data model dictionary, star-schema diagram, and replication GitHub repository.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/placeholder-dangtu/sme-credit-risk-bi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-black transition-colors"
            >
              <Github className="size-4 text-blue-600" />
              <span>GitHub Repository</span>
            </a>
            <Link
              href={`/projects/${pbiProject.id}#deliverables`}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black transition-colors shadow-md shadow-blue-500/25"
            >
              <FileSpreadsheet className="size-4" />
              <span>Inspect Data Dictionary</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
