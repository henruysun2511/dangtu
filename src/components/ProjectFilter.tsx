'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '@/types';
import ProjectCard from './ProjectCard';
import { Filter, Layers, CheckCircle2, Search, SlidersHorizontal, Sparkles } from 'lucide-react';

interface ProjectFilterProps {
  projects: Project[];
}

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Product & Growth Analytics',
  'Power BI & Data Analytics',
  'Financial Analysis',
  'Scientific Research'
];

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.ticketId && project.ticketId.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.toolsAndTechniques.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-mono uppercase font-black tracking-widest text-blue-600">
                Solarn Analytics Registry: Production Deliverables
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
              Featured Data Analytics Projects & Case Studies
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1 max-w-2xl">
              Verified portfolio of end-to-end data analytics solutions: Customer cohort analysis, Star-schema Power BI dashboards, and empirical econometric research.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="text-xs font-mono font-bold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-2xl shrink-0 shadow-xs">
            Showing <span className="text-blue-600 font-black">{filteredProjects.length}</span> of {projects.length} completed projects
          </div>
        </div>

        {/* Filter Category Tabs (Solarn Rounded 2xl Pills) */}
        <div className="flex flex-wrap items-center gap-2.5 pb-6 border-b border-slate-100">
          {CATEGORIES.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs font-black rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-102'
                    : 'bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-black ${
                  isActive ? 'bg-blue-800 text-white' : 'bg-white text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input Bar */}
        <div className="my-8 flex items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-lg">
            <Search className="size-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by keywords (e.g. SQL, Cohort, DAX, Power BI, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-xs font-medium bg-slate-50 border border-slate-100 focus:bg-white rounded-2xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all"
            />
          </div>

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-black text-blue-600 hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-[2.5rem] bg-slate-50 border border-slate-100 p-8 space-y-3">
            <Layers className="size-10 text-slate-400 mx-auto" />
            <h4 className="text-base font-black text-slate-900">No projects found for current criteria</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
              Try selecting a different filter category or reset your search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 text-xs font-black rounded-2xl bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
