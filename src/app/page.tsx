import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectFilter from '@/components/ProjectFilter';
import PowerBiShowcase from '@/components/PowerBiShowcase';
import ResearchSection from '@/components/ResearchSection';
import CaseStudySection from '@/components/CaseStudySection';
import ExperienceSection from '@/components/ExperienceSection';
import AboutContactSection from '@/components/AboutContactSection';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col selection:bg-blue-600/20 selection:text-blue-600">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectFilter projects={projectsData} />
        <PowerBiShowcase />
        <ResearchSection />
        <CaseStudySection />
        <ExperienceSection />
        <AboutContactSection />
      </main>
      <Footer />
    </div>
  );
}
