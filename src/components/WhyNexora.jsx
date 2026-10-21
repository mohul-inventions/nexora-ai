import React from 'react';
import { 
  Cpu, 
  Users, 
  Lock, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake,
  Check
} from 'lucide-react';
import { whyNexoraCards, comparisonData } from '../data/mockData';

const iconMap = {
  Cpu: Cpu,
  Users: Users,
  Lock: Lock,
  Zap: Zap,
};

export default function WhyNexora() {
  return (
    <section id="why-nexora" className="py-24 relative bg-[#050713] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-violet-600/10 via-cyan-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-violet-500/30 text-xs font-mono text-violet-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE NEXORA ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Academic Institutions <br />
            <span className="gradient-text">Choose NEXORA AI</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineered from the ground up for university complexity—combining cutting-edge edge intelligence, 
            rigorous student privacy guarantees, and intuitive accessibility.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyNexoraCards.map((card, idx) => {
            const Icon = iconMap[card.icon] || Cpu;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-[#090d24]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                      {card.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                  <Check className="w-3.5 h-3.5" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Comparison Matrix */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">
              Comparative Analysis: Legacy vs NEXORA
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Evaluating infrastructure performance, response latency, and privacy compliance
            </p>
          </div>

          <div className="rounded-2xl glass-panel border border-slate-800 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/90 border-b border-slate-800 text-xs font-mono uppercase text-slate-400">
                    <th className="py-4 px-6 font-semibold">Campus Capability</th>
                    <th className="py-4 px-6 font-semibold text-rose-300/80">Traditional University Systems</th>
                    <th className="py-4 px-6 font-semibold text-cyan-300">NEXORA AI Architecture</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{row.feature}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-rose-400/80 flex-shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-cyan-200 font-medium">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{row.nexora}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
