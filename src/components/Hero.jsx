import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Zap, 
  Activity, 
  Layers, 
  TrendingUp, 
  Server, 
  CheckCircle2, 
  Play
} from 'lucide-react';

export default function Hero({ onExploreSolutions, onViewProjects, onOpenDemo }) {
  const [pulseCount, setPulseCount] = useState(18420);
  const [activeTab, setActiveTab] = useState('traffic');

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden grid-background">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/20 via-violet-600/20 to-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-violet-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-sm shadow-cyan-500/10 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>NEXORA AI PLATFORM • CAMPUS OS 2.0</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building the Future of <br className="hidden sm:inline" />
              <span className="gradient-text">Smart Campuses</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Transforming traditional academic environments into intelligent, self-optimizing ecosystems. 
              From predictive resource scheduling to autonomous student safety and 24/7 academic co-pilots, 
              NEXORA AI powers the next era of university life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#solutions"
                onClick={onExploreSolutions}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                onClick={onViewProjects}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 shadow-sm transition-all duration-300 flex items-center gap-2"
              >
                <span>View Projects</span>
                <Layers className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href="#assistant-demo"
                onClick={onOpenDemo}
                className="px-5 py-3.5 rounded-xl font-medium text-xs text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 border border-cyan-500/25 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                <span>Interactive AI Demo</span>
              </a>
            </div>

            {/* Micro Metrics Banner */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl font-bold font-mono text-cyan-300">
                  {pulseCount.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400">Students Supported</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-violet-400">
                  -28.4%
                </div>
                <div className="text-[11px] text-slate-400">Energy Consumption</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">
                  1.4s
                </div>
                <div className="text-[11px] text-slate-400">Safety Response Avg</div>
              </div>
            </div>

          </div>

          {/* Right Column: Futuristic Interactive Visual Dashboard */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Glow Halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-violet-600/30 to-blue-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10"></div>
            
            {/* Dashboard Container */}
            <div className="relative rounded-2xl bg-[#090d24]/90 border border-cyan-500/30 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">nexora_core_kernel // telemetry</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  REAL-TIME
                </span>
              </div>

              {/* Status Header */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    Autonomous Campus Matrix
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono">Central Node: Quad A-1 • Latency 9ms</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-emerald-400">NORMAL STABLE</span>
                </div>
              </div>

              {/* Interactive Telemetry Feed */}
              <div className="mt-4 space-y-3">
                
                {/* Metric Strip 1 */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-200">Smart Grid Optimization</div>
                      <div className="text-[10px] text-slate-400">Dynamic load balancing across 18 halls</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-cyan-300">+34% Saved</span>
                </div>

                {/* Metric Strip 2 */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-200">SafeWalk Neural Perimeter</div>
                      <div className="text-[10px] text-slate-400">Zero active alerts • 48 beacons online</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-400">100% Secure</span>
                </div>

                {/* Metric Strip 3 */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-200">Library & Lab Capacity</div>
                      <div className="text-[10px] text-slate-400">Occupancy rate 64% • 120 seats open</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-blue-300">Optimal</span>
                </div>

              </div>

              {/* Graphic Radar Simulation */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>Sensor Grid: 248 Nodes Online</span>
                </div>
                <div className="text-slate-400">
                  Concept Engine v2.4
                </div>
              </div>

            </div>

            {/* Floating Decorative Chip */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3 rounded-xl bg-[#0b1028]/95 border border-cyan-500/40 shadow-xl backdrop-blur-md items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Edge AI Verified</div>
                <div className="text-[10px] text-cyan-300 font-mono">100% Privacy Compliant (FERPA)</div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-5 -right-4 p-3 rounded-xl bg-[#0b1028]/95 border border-violet-500/40 shadow-xl backdrop-blur-md items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-medium text-violet-200">Autonomous Orchestration</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
