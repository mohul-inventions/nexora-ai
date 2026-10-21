import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Activity, 
  Zap, 
  Users, 
  ShieldCheck, 
  Bus, 
  RotateCw, 
  Calendar, 
  Building, 
  TrendingUp,
  AlertTriangle,
  Info
} from 'lucide-react';
import { campusStats } from '../data/mockData';

export default function Dashboard() {
  const [selectedSector, setSelectedSector] = useState('all');
  const [timeRange, setTimeRange] = useState('today');
  const [currentTime, setCurrentTime] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [simulatedMetrics, setSimulatedMetrics] = useState({
    activeUsers: 18450,
    energySaved: 3.82,
    shuttleOnTime: 98.8,
    beaconsOnline: 48
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setSimulatedMetrics({
        activeUsers: 18400 + Math.floor(Math.random() * 120),
        energySaved: (3.75 + Math.random() * 0.2).toFixed(2),
        shuttleOnTime: (98.2 + Math.random() * 1.5).toFixed(1),
        beaconsOnline: 48
      });
      setIsRefreshing(false);
    }, 600);
  };

  // Illustrative 24h sample curve points
  const hourlyData = [
    { hour: '00:00', baseline: 42, optimized: 28 },
    { hour: '04:00', baseline: 35, optimized: 20 },
    { hour: '08:00', baseline: 78, optimized: 52 },
    { hour: '12:00', baseline: 95, optimized: 68 },
    { hour: '16:00', baseline: 88, optimized: 61 },
    { hour: '20:00', baseline: 65, optimized: 44 },
    { hour: '23:00', baseline: 48, optimized: 31 },
  ];

  const zoneOccupancy = [
    { name: 'Central Science Library', capacity: 85, color: 'bg-cyan-500' },
    { name: 'Engineering Quad Labs', capacity: 64, color: 'bg-violet-500' },
    { name: 'Innovation Hub Coworking', capacity: 92, color: 'bg-blue-500' },
    { name: 'Student Athletic Pavilion', capacity: 48, color: 'bg-emerald-500' },
  ];

  return (
    <section id="dashboard" className="py-24 relative bg-[#070913] border-t border-slate-900 overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>CAMPUS OPERATIONS TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Live Intelligence <span className="gradient-text">Command Center</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-time telemetry aggregation monitoring energy optimization, active pedestrian flows, 
            facility capacity, and emergency nodes.
          </p>
        </div>

        {/* Clear Sample Data Disclaimer Badge */}
        <div className="mt-8 max-w-3xl mx-auto p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>
              <strong className="text-cyan-300">NOTE:</strong> All figures and metrics below represent illustrative sample data for prototype simulation.
            </span>
          </div>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-[10px]">
            DEMO MODE
          </span>
        </div>

        {/* Dashboard Control Bar */}
        <div className="mt-8 p-4 rounded-2xl glass-panel border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          
          {/* Sector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Sectors' },
              { id: 'north', label: 'North Science Quad' },
              { id: 'central', label: 'Central Library' },
              { id: 'tech', label: 'Engineering Hub' },
            ].map((sector) => (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedSector === sector.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                {sector.label}
              </button>
            ))}
          </div>

          {/* Right Status & Refresh */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>CLOCK: {currentTime || '12:00:00'} UTC</span>
            </div>

            <button
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-750 text-cyan-400 transition-colors flex items-center gap-1.5"
              title="Refresh Telemetry Sample"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline text-[11px]">Sync Feeds</span>
            </button>
          </div>

        </div>

        {/* Key Metrics Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-[#090e24]/90 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-mono uppercase">Students Connected</span>
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">
              {simulatedMetrics.activeUsers.toLocaleString()}
            </div>
            <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+6.2% vs typical Tuesday</span>
            </div>
            <div className="mt-2 text-[10px] text-slate-500 font-mono">Sample figure</div>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-[#090e24]/90 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-mono uppercase">Energy Saved Today</span>
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">
              {simulatedMetrics.energySaved} <span className="text-base text-slate-400">MWh</span>
            </div>
            <div className="mt-2 text-xs font-mono text-cyan-300">
              -28.4% Net Grid Consumption
            </div>
            <div className="mt-2 text-[10px] text-slate-500 font-mono">Sample figure</div>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-[#090e24]/90 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-mono uppercase">Transit Punctuality</span>
              <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                <Bus className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">
              {simulatedMetrics.shuttleOnTime}%
            </div>
            <div className="mt-2 text-xs font-mono text-violet-300">
              6 EV Shuttles Running
            </div>
            <div className="mt-2 text-[10px] text-slate-500 font-mono">Sample figure</div>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-[#090e24]/90 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-mono uppercase">Safety Node Grid</span>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">
              {simulatedMetrics.beaconsOnline} / 48
            </div>
            <div className="mt-2 text-xs font-mono text-emerald-400">
              100% Operational • 1.4s Dispatch
            </div>
            <div className="mt-2 text-[10px] text-slate-500 font-mono">Sample figure</div>
          </div>

        </div>

        {/* Charts & Analytical Breakdown */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Visual Comparison Chart (8 cols) */}
          <div className="lg:col-span-8 p-6 rounded-2xl glass-panel border border-slate-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  Campus Energy Profile (Simulated 24-Hour Comparison)
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Autonomous AI Setback vs Traditional Legacy Campus Schedule
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-rose-500/50"></span>
                  <span className="text-slate-400">Baseline Grid</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-cyan-400"></span>
                  <span className="text-cyan-300">NEXORA Optimized</span>
                </div>
              </div>
            </div>

            {/* Simulated Chart Bars */}
            <div className="space-y-4 pt-4">
              {hourlyData.map((d, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>{d.hour}</span>
                    <span>
                      <strong className="text-cyan-300">{d.optimized} kW</strong>{' '}
                      <span className="line-through text-slate-500">{d.baseline} kW</span>
                    </span>
                  </div>
                  <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden flex">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${d.optimized}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Average Daily Energy Savings: ~28.4%</span>
              <span className="text-cyan-400">Generated from Synthetic Profile Data</span>
            </div>
          </div>

          {/* Side Zone Breakdown (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-violet-400" />
                Live Sector Occupancy
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Headcount density across key buildings
              </p>

              <div className="mt-6 space-y-5">
                {zoneOccupancy.map((zone, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-200 font-medium">{zone.name}</span>
                      <span className="font-mono text-cyan-300 font-semibold">{zone.capacity}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div
                        className={`${zone.color} h-full rounded-full`}
                        style={{ width: `${zone.capacity}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-white">Automated Balancing Active</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Quiet study overflow automatically routed from Central Library to Turing Hall.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
