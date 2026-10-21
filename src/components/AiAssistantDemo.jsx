import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  RotateCcw, 
  Info, 
  Check, 
  Clock, 
  MapPin, 
  HelpCircle,
  CornerDownLeft,
  ChevronRight
} from 'lucide-react';
import { demoChatPrompts, demoChatResponses } from '../data/mockData';

export default function AiAssistantDemo() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: "👋 Hello! I am the **NEXORA Campus Co-Pilot** demo assistant. You can ask me about study desk availability, 24/7 library hours, shuttle bus tracking, lab workstation booking, or student wellness support.",
      time: 'Just now',
      actions: ["Nearest Study Hub", "Central Library Hours", "Transit Shuttle Times"]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedAction, setCopiedAction] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate smart matching
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedResponse = demoChatResponses.fallback;

      if (lower.includes('study') || lower.includes('hub') || lower.includes('charging') || lower.includes('desk')) {
        matchedResponse = demoChatResponses['study hub'];
      } else if (lower.includes('library') || lower.includes('hours') || lower.includes('finals') || lower.includes('book')) {
        matchedResponse = demoChatResponses.library;
      } else if (lower.includes('ai lab') || lower.includes('lab') || lower.includes('workstation') || lower.includes('robotics')) {
        matchedResponse = demoChatResponses['ai lab'];
      } else if (lower.includes('shuttle') || lower.includes('transit') || lower.includes('bus') || lower.includes('gate') || lower.includes('transport')) {
        matchedResponse = demoChatResponses.shuttle;
      } else if (lower.includes('wellness') || lower.includes('counseling') || lower.includes('mental') || lower.includes('health') || lower.includes('support')) {
        matchedResponse = demoChatResponses.wellness;
      }

      const assistantMsg = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: matchedResponse.text,
        time: 'Just now',
        actions: matchedResponse.actions
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'assistant',
        text: "Chat cleared. What campus information can I help you navigate today?",
        time: 'Just now',
        actions: ["Nearest Study Hub", "Central Library Hours", "Transit Shuttle Times"]
      }
    ]);
  };

  const handleActionClick = (actionText) => {
    setCopiedAction(actionText);
    setTimeout(() => setCopiedAction(null), 2000);
  };

  return (
    <section id="assistant-demo" className="py-24 relative bg-[#070913] border-t border-slate-900 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Bot className="w-3.5 h-3.5" />
            <span>INTERACTIVE ASSISTANT PROTOTYPE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Test the NEXORA <span className="gradient-text">Student Co-Pilot</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience our conversational campus interface designed to resolve common student inquiries 
            with zero wait times.
          </p>
        </div>

        {/* Prominent Demo Notice Banner */}
        <div className="mt-8 max-w-3xl mx-auto p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-amber-200 text-xs">
          <Info className="w-4 h-4 flex-shrink-0 text-amber-400" />
          <div>
            <strong className="font-semibold text-amber-300">Concept Demo Engine:</strong>{' '}
            This is an interactive simulation using predefined response templates and keyword matching. It is not connected to a commercial live LLM API.
          </div>
        </div>

        {/* Quick Prompts Bar */}
        <div className="mt-6 max-w-3xl mx-auto">
          <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
            <span>SUGGESTED CAMPUS QUERIES (CLICK TO TEST):</span>
            <span className="text-cyan-400 text-[11px]">Instant Fill</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {demoChatPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="text-left text-xs px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-200 border border-slate-850 hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
              >
                <ChevronRight className="w-3 h-3 text-cyan-400" />
                <span>{prompt}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window Container */}
        <div className="mt-6 max-w-3xl mx-auto rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col h-[560px]">
          
          {/* Chat Window Top Bar */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#090d24]"></span>
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>NEXORA Co-Pilot</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    DEMO V1.2
                  </span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Response latency: ~14ms (Local Engine)
                </div>
              </div>
            </div>

            <button
              onClick={handleResetChat}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
              title="Reset Chat Session"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[85%] sm:max-w-[78%] space-y-2`}>
                    <div
                      className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isAssistant
                          ? 'bg-[#0f172e] border border-cyan-500/20 text-slate-200 rounded-tl-sm'
                          : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-sm shadow-md shadow-cyan-600/20'
                      }`}
                    >
                      {/* Formatted Text renderer */}
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: msg.text
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-300 font-semibold">$1</strong>')
                        }} 
                      />
                    </div>

                    {/* Interactive Mock Action Pills on assistant responses */}
                    {isAssistant && msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.actions.map((act, i) => (
                          <button
                            key={i}
                            onClick={() => handleActionClick(act)}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white transition-all flex items-center gap-1"
                          >
                            <span>{act}</span>
                            {copiedAction === act ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : null}
                          </button>
                        ))}
                      </div>
                    )}

                    <div className={`text-[10px] font-mono text-slate-500 ${isAssistant ? 'text-left' : 'text-right'}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-3 rounded-2xl bg-[#0f172e] border border-cyan-500/20 rounded-tl-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 sm:p-4 bg-slate-900/90 border-t border-slate-800">
            {copiedAction && (
              <div className="mb-2 px-3 py-1 text-[11px] font-mono bg-cyan-950 text-cyan-300 rounded border border-cyan-500/30 flex items-center justify-between">
                <span>Action triggered: "{copiedAction}" (Mock preview event recorded)</span>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about library hours, study spots, shuttle lines, lab seats..."
                className="flex-1 bg-slate-950 border border-slate-750 focus:border-cyan-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-cyan-500/20"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-2 text-[10px] text-center text-slate-500 font-mono">
              NEXORA Concept Prototype • Client-Side Simulation • Try keywords like "library", "shuttle", "study", or "lab"
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
