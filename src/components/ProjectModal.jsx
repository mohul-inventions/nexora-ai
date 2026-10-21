import React from 'react';
import { X, Layers, Cpu, CheckCircle2, ShieldAlert, Activity, ArrowUpRight, Code2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-[#090d24] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/70 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Status & Category */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-mono border ${project.badgeColor}`}>
              {project.status}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-cyan-300 font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Main Details */}
        <div className="mt-6 space-y-5 text-slate-300 text-sm">
          
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Project Architecture & Pipeline</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          {/* Stats Triad */}
          <div className="grid grid-cols-3 gap-3">
            {project.keyStats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#0d122d] border border-cyan-500/20 text-center">
                <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack List */}
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Integrated Frameworks & Standards
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-cyan-200 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Concept Project Disclaimer Pill */}
          <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>{project.conceptDisclaimer}</span>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-mono">
              Internship Showcase Prototype
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-medium text-xs transition-colors"
            >
              Close Inspector
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
