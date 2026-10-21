import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Cpu, ShieldCheck } from 'lucide-react';

export default function Navbar({ activeSection, onOpenGetStarted }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'AI Demo', href: '#assistant-demo' },
    { name: 'Projects', href: '#projects' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Why NEXORA', href: '#why-nexora' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a18]/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#070913] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors animate-pulse" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl blur-sm opacity-30 group-hover:opacity-75 transition duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                NEXORA <span className="text-cyan-400">AI</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase -mt-1 hidden sm:block">
                Smart Campus OS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>GRID LIVE • 99.98%</span>
            </div>

            <button
              onClick={onOpenGetStarted}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-xl group bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 group-hover:from-cyan-500 group-hover:to-violet-600 hover:text-white text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-200 bg-[#070913] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-1.5">
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e24]/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 transition-all duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Campus Node Active • v2.4
            </div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400">Navigation</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-800/80 border border-transparent hover:border-cyan-500/20 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <span>Explore Interactive Suite</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
