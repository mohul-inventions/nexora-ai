import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import AiAssistantDemo from './components/AiAssistantDemo';
import FeaturedProjects from './components/FeaturedProjects';
import Dashboard from './components/Dashboard';
import WhyNexora from './components/WhyNexora';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Bot, ArrowUp, Sparkles, X, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track active section and scroll position for back to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);

      const sections = ['hero', 'about', 'solutions', 'assistant-demo', 'projects', 'dashboard', 'why-nexora', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050713] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Fixed Header */}
      <Navbar 
        activeSection={activeSection}
        onOpenGetStarted={() => setShowGetStartedModal(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onExploreSolutions={() => scrollToSection('solutions')}
          onViewProjects={() => scrollToSection('projects')}
          onOpenDemo={() => scrollToSection('assistant-demo')}
        />

        <About />

        <Solutions />

        <AiAssistantDemo />

        <FeaturedProjects />

        <Dashboard />

        <WhyNexora />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Hub */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Floating AI Assistant Trigger */}
        <button
          onClick={() => scrollToSection('assistant-demo')}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          title="Open Campus Co-Pilot Demo"
        >
          <Bot className="w-4 h-4 animate-bounce" />
          <span className="hidden sm:inline">Try AI Co-Pilot</span>
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#070913]"></span>
        </button>

        {/* Back To Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-750 text-slate-300 hover:text-white shadow-lg transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Get Started Quick Action Modal */}
      {showGetStartedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-[#090d24] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowGetStartedModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NEXORA CAMPUS SUITE</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Experience the Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Choose a module to explore live concept interactions or schedule an academic pilot.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowGetStartedModal(false);
                  scrollToSection('assistant-demo');
                }}
                className="w-full p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/40 text-left transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                    1. Test Interactive Student Co-Pilot
                  </div>
                  <div className="text-xs text-slate-400">
                    Query library hours, study spots, and shuttle lines with instant answers.
                  </div>
                </div>
                <Bot className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setShowGetStartedModal(false);
                  scrollToSection('dashboard');
                }}
                className="w-full p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/40 text-left transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                    2. Inspect Live Telemetry Dashboard
                  </div>
                  <div className="text-xs text-slate-400">
                    Simulate real-time grid energy balancing and crowd occupancy metrics.
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setShowGetStartedModal(false);
                  scrollToSection('contact');
                }}
                className="w-full p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/40 text-left transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                    3. Submit Pilot Evaluation Request
                  </div>
                  <div className="text-xs text-slate-400">
                    Test client-side validation and submit your sample inquiry.
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setShowGetStartedModal(false)}
                className="text-xs text-slate-500 hover:text-slate-300 font-mono transition-colors"
              >
                Dismiss Modal
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
