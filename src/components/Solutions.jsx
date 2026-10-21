import React, { useState } from 'react';
import { 
  Bot, 
  Building2, 
  Sparkles, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  ExternalLink
} from 'lucide-react';
import { solutionsData } from '../data/mockData';
import SolutionModal from './SolutionModal';

const iconMap = {
  Bot: Bot,
  Building2: Building2,
  Sparkles: Sparkles,
  ShieldAlert: ShieldAlert,
};

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(null);

  return (
    <section id="solutions" className="py-24 relative bg-[#050713] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-cyan-900/10 via-violet-900/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>INTELLIGENT CAMPUS MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Integrated Solutions Built for <br />
            <span className="gradient-text">Academic Excellence</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Four specialized modules working in continuous harmony to elevate student success, 
            optimize infrastructure, safeguard wellbeing, and reduce operational waste.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((sol) => {
            const Icon = iconMap[sol.iconName] || Bot;
            return (
              <div
                key={sol.id}
                className="group relative rounded-2xl bg-[#090d24]/80 border border-slate-800/80 p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
              >
                {/* Subtle gradient hover highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  {/* Card Top Row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-300 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                          {sol.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                          {sol.title}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                      {sol.badge}
                    </span>
                  </div>

                  {/* Subtitle & Description */}
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 mb-2">
                      {sol.subtitle}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {sol.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {sol.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metric Pill */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-cyan-300 flex items-center justify-between">
                    <span className="text-slate-400 text-[11px]">BENCHMARK</span>
                    <span className="font-semibold text-right">{sol.metric}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedSolution(sol)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                  >
                    <span>View Architecture & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="#assistant-demo"
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Test Live Demo →
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Dialog */}
      {selectedSolution && (
        <SolutionModal
          solution={selectedSolution}
          onClose={() => setSelectedSolution(null)}
        />
      )}
    </section>
  );
}
