import React from 'react';
import { 
  Sparkles, 
  ArrowUp, 
  Heart, 
  Github, 
  Linkedin, 
  Twitter, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  ExternalLink 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Vision', href: '#about' },
    { name: 'Four Solutions', href: '#solutions' },
    { name: 'AI Co-Pilot Demo', href: '#assistant-demo' },
    { name: 'Concept Projects', href: '#projects' },
    { name: 'Live Dashboard', href: '#dashboard' },
    { name: 'Why NEXORA', href: '#why-nexora' },
    { name: 'Contact & Pilot', href: '#contact' },
  ];

  return (
    <footer className="bg-[#04060f] border-t border-slate-900 text-slate-400 text-xs relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 bg-gradient-to-t from-cyan-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 p-[1.5px] transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#070913] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                NEXORA <span className="text-cyan-400">AI</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Smart Campus, Smarter Future. An integrated AI-powered operating system synchronizing campus safety, 
              facility energy conservation, intelligent learning resources, and autonomous student advisory.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Next-Gen Campus OS • Architecture Release v2.4</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white tracking-wider font-semibold">
              Platform Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500/60">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tech Stack & Internship Attribution (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white tracking-wider font-semibold">
              Project Architecture
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Crafted as a flagship portfolio project for the <strong>AI Website Generation Internship</strong> task.
            </p>
            
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['React 18', 'Vite 6', 'Tailwind CSS', 'Lucide React', 'Glassmorphism', 'Responsive UI'].map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 transition-colors text-xs font-mono"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Concept Notice */}
        <div className="mt-14 pt-6 border-t border-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} NEXORA AI — Smart Campus, Smarter Future. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-slate-400">
            Internship Task Submission • Designed for Academic & Concept Showcase
          </div>
        </div>

      </div>
    </footer>
  );
}
