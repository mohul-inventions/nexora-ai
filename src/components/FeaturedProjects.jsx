import React, { useState } from 'react';
import { 
  Layers, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Info,
  ChevronRight
} from 'lucide-react';
import { featuredProjects } from '../data/mockData';
import ProjectModal from './ProjectModal';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? featuredProjects
    : featuredProjects.filter(p => p.id === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#050713] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-violet-500/30 text-xs font-mono text-violet-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPUS INNOVATION LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Concept Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Exploratory architectures and prototypes developed to tackle real-world university challenges. 
            All projects are demonstrated as architectural concepts.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All Projects (3)' },
            { id: 'traffic-management', label: 'Traffic & Transit' },
            { id: 'campus-safety-system', label: 'Safety & Emergency' },
            { id: 'student-productivity', label: 'Student Productivity' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-250 ${
                activeFilter === filter.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 3 Project Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#090d24]/90 border border-slate-800 p-6 sm:p-7 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Status Badges */}
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border ${project.badgeColor}`}>
                    {project.status}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    Concept Prototype
                  </span>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80">
                  {project.keyStats.map((stat, idx) => (
                    <div key={idx} className="text-center p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-sm font-bold font-mono text-cyan-300">{stat.value}</div>
                      <div className="text-[9px] uppercase tracking-wider text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold text-cyan-300 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Interactive Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  title="Inspect Architecture"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Concept Disclaimer */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 px-4 py-2 rounded-full border border-slate-800">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>All projects shown are academic engineering concepts designed for proof-of-concept evaluation.</span>
          </p>
        </div>

      </div>

      {/* Project Inspector Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
