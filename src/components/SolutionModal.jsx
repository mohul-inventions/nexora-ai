import React from 'react';
import { X, Check, Cpu, ShieldCheck, Zap, Sparkles, ArrowRight, Layers } from 'lucide-react';

export default function SolutionModal({ solution, onClose }) {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-[#090d24] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            <span>{solution.category}</span>
            <span>•</span>
            <span>{solution.badge}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {solution.title}
          </h3>
          <p className="text-sm text-cyan-400 font-mono">
            {solution.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-6 space-y-5 text-slate-300 text-sm">
          <p className="leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            {solution.description}
          </p>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
              Core Technical Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {solution.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="mt-0.5 p-1 rounded-full bg-cyan-500/20 text-cyan-300 flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-violet-950/30 to-slate-900 border border-cyan-500/30 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400">Validated Impact Metric</div>
              <div className="text-sm font-semibold text-cyan-300 mt-0.5">{solution.metric}</div>
            </div>
            <div className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs border border-cyan-500/40">
              Live Verified
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono">Status: Ready for Institution Deployment</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
