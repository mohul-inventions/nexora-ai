import React, { useState } from 'react';
import { 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Network, 
  Sparkles, 
  BarChart3, 
  Check, 
  Layers,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const [activePillar, setActivePillar] = useState('smarter');

  const pillars = {
    smarter: {
      title: 'Smarter Learning & Operations',
      subtitle: 'Synchronizing curriculum demands with facility resources in real time.',
      points: [
        'Dynamic lecture hall allocation powered by live enrollment streams',
        'Adaptive study room scheduling with zero ghost bookings',
        'Multi-department research cluster resource balancing',
        'Self-updating campus knowledge base indexing course syllabi'
      ],
      metric: '94% Operational Scheduling Efficiency',
      icon: Cpu,
      accent: 'cyan'
    },
    safer: {
      title: 'Safer Connected Living',
      subtitle: 'Zero-latency situational awareness without intrusive biometric surveillance.',
      points: [
        'Instant geofenced dispatch for blue-light emergency columns',
        'SafeWalk dynamic pathway illumination following student routes',
        'Real-time acoustic detection for anomalies (alarms, distress signals)',
        'Encrypted on-device computer vision preserving 100% student privacy'
      ],
      metric: '1.4s Average Incident Alert Speed',
      icon: ShieldCheck,
      accent: 'emerald'
    },
    efficient: {
      title: 'More Efficient & Sustainable',
      subtitle: 'Empowering universities to achieve net-zero campus sustainability targets.',
      points: [
        'Autonomous HVAC setback algorithms scaling with real hall occupancy',
        'Smart campus EV shuttle routing adjusting dynamically to rain and rush hours',
        'Underground acoustic pipeline sensors detecting water leaks early',
        'Integrated solar microgrid storage arbitrage during peak grid hours'
      ],
      metric: '28.4% Average Reduction in Utility Waste',
      icon: BarChart3,
      accent: 'violet'
    }
  };

  return (
    <section id="about" className="py-24 relative bg-[#070913] border-t border-slate-900 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Compass className="w-3.5 h-3.5" />
            <span>OUR VISION & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Next-Generation Intelligence for <br />
            <span className="gradient-text">Higher Education Ecosystems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            University campuses are mini-cities with complex logistical challenges—from energy distribution to 
            crowd management and student academic well-being. NEXORA AI builds an integrated nervous system 
            that harmonizes physical campus infrastructure with digital academic workflows.
          </p>
        </div>

        {/* Vision Pillars Selector */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {[
            { id: 'smarter', label: 'Smarter Learning', icon: Cpu },
            { id: 'safer', label: 'Safer Living', icon: ShieldCheck },
            { id: 'efficient', label: 'Sustainable Efficiency', icon: BarChart3 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activePillar === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePillar(tab.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-850'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Pillar Details Card */}
        <div className="mt-8 max-w-4xl mx-auto rounded-2xl glass-panel p-6 sm:p-8 border border-cyan-500/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Pillar Focus</span>
              <h3 className="text-2xl font-bold text-white">
                {pillars[activePillar].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {pillars[activePillar].subtitle}
              </p>

              <div className="space-y-2.5 pt-2">
                {pillars[activePillar].points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-cyan-500/15 text-cyan-400">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-[#090e24] rounded-xl p-5 border border-slate-800 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center border border-cyan-500/30 text-cyan-400">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Impact Benchmark</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 mt-1">
                  {pillars[activePillar].metric}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Validated against campus simulated trials across 14 university buildings.
              </p>
            </div>

          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Decentralized Edge Nodes',
              desc: 'Telemetry processes locally on campus gates, minimizing bandwidth and latency.',
              badge: 'Sub-10ms'
            },
            {
              title: 'FERPA & GDPR Compliance',
              desc: 'Architected with zero-biometric storage. Faces and identities are discarded in RAM.',
              badge: 'Zero-Retention'
            },
            {
              title: 'Modular API Microservices',
              desc: 'Easily hooks into legacy ERP systems (Banner, PeopleSoft, Canvas, Blackboard).',
              badge: 'Universal Connect'
            },
            {
              title: 'Student-First Transparency',
              desc: 'Open telemetry audits let student bodies inspect campus energy and safety metrics.',
              badge: 'Open Telemetry'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 mb-2">
                {item.badge}
              </span>
              <h4 className="text-base font-semibold text-white mb-1.5">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
