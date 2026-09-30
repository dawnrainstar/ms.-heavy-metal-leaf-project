import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  BookOpen, 
  Cpu, 
  BarChart3, 
  HelpCircle, 
  ThumbsUp, 
  RotateCcw,
  CheckCircle2,
  Layers,
  Filter
} from 'lucide-react';
import { EpistemicStatus } from '../types';

interface AiAssistantTabProps {
  onNavigateTab: (tabId: string) => void;
}

export const AiAssistantTab: React.FC<AiAssistantTabProps> = ({ onNavigateTab }) => {
  const [activeMode, setActiveMode] = useState<'RESEARCH' | 'ENGINEERING' | 'DATA'>('RESEARCH');
  const [inputQuery, setInputQuery] = useState<string>('');
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  const [chatHistory, setChatHistory] = useState([
    {
      id: 'init-1',
      role: 'assistant',
      author: 'Ms. Heavy Metal Leaf AI Engine',
      mode: 'RESEARCH',
      text: `### MS. HEAVY METAL LEAF // ADAPTIVE ECOLOGICAL INTELLIGENCE ONLINE
Welcome Dawn and research team. I am the artificial intelligence core of the platform — bridging biological systems, plant electrophysiology, environmental restoration, and regenerative engineering.

I operate in three distinct analytical modes:
• **RESEARCH MODE:** Evaluate hyperaccumulators, heavy metal vacuolar chelation, and published literature.
• **ENGINEERING MODE:** Guide bio-mold design, 1 TΩ passive sensing circuits, and Faraday mesh shielding.
• **DATA MODE:** Analyze soil moisture, leaf-angle kinetics, and mine tailing phytomining yields.

All answers strictly maintain our five-tier epistemic separation:
🟢 **[VERIFIED SCIENCE]** • 🟡 **[ACTIVE EXPERIMENTS]** • 🔷 **[EMERGING TECHNOLOGIES]** • 🟣 **[FUTURE CONCEPTS]** • ✨ **[PROJECT VISION]**

How may I assist your investigations today?`,
      timestamp: 'System Boot'
    }
  ]);

  const handleSend = async (overrideText?: string) => {
    const query = (overrideText || inputQuery).trim();
    if (!query) return;
    if (!overrideText) setInputQuery('');

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      author: 'Researcher (Dawn Milazzo & Team)',
      mode: activeMode,
      text: query,
      timestamp: 'Just now'
    };

    setChatHistory(prev => [...prev, userMessage]);
    setIsAiLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          mode: activeMode,
          history: chatHistory.slice(-6).map(m => ({
            role: m.role,
            content: m.text
          }))
        })
      });

      const data = await response.json();
      if (data && data.reply) {
        const aiMessage = {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          author: 'Ms. Heavy Metal Leaf AI Engine',
          mode: activeMode,
          text: data.reply,
          timestamp: 'Just now'
        };
        setChatHistory(prev => [...prev, aiMessage]);
      }
    } catch (err) {
      console.error('AI synthesis failed:', err);
    } finally {
      setIsAiLoading(false);
    }
  };

  const quickQuestions = [
    {
      title: "What if we kill the plants with too much voltage? How do we surround the electrical fields?",
      mode: 'ENGINEERING' as const,
      tag: '⚡ Plant Voltage Safety'
    },
    {
      title: "Can plants really be 80% metal and stay alive? What is verified science vs theoretical?",
      mode: 'RESEARCH' as const,
      tag: '🌿 80% Metal Feasibility'
    },
    {
      title: "What technologies are currently in the Emerging Technology Pipeline, and how are they evaluated?",
      mode: 'RESEARCH' as const,
      tag: '🔷 Emerging Tech Pipeline'
    },
    {
      title: "How does zero-incision guided mold in-growth prevent callose scar tissue?",
      mode: 'ENGINEERING' as const,
      tag: '🔬 Guided-Growth Bio-Molds'
    },
    {
      title: "How much battery-grade nickel can be recovered from Sudbury smelter tailings?",
      mode: 'DATA' as const,
      tag: '📊 Phytomining Analytics'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Console Top Header */}
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40 p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-mono font-bold text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                <Bot className="h-3.5 w-3.5" />
                Adaptive Ecological Intelligence
              </span>
              <span className="text-xs font-mono text-neutral-400">
                AI Research Co-Scientist Console
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ms. Heavy Metal Leaf AI Assistant
            </h2>
            <p className="mt-1 max-w-2xl text-xs sm:text-sm text-neutral-300">
              Select an operational mode to analyze hyperaccumulators, engineer guided-growth molds, or evaluate phytomining data.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 rounded-xl border border-neutral-800 bg-neutral-950 p-1.5 text-xs font-mono">
            <button
              onClick={() => setActiveMode('RESEARCH')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition-all ${
                activeMode === 'RESEARCH'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Research</span>
            </button>

            <button
              onClick={() => setActiveMode('ENGINEERING')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition-all ${
                activeMode === 'ENGINEERING'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              <span>Engineering</span>
            </button>

            <button
              onClick={() => setActiveMode('DATA')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition-all ${
                activeMode === 'DATA'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Data</span>
            </button>
          </div>
        </div>

        {/* Quick Launch Buttons */}
        <div className="mt-4 pt-4 border-t border-neutral-800/80">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-neutral-400">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Instant Inquiries (Click to ask AI):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveMode(q.mode);
                  handleSend(q.title);
                }}
                className="text-left rounded-xl border border-neutral-800 bg-neutral-950/70 p-2.5 text-xs text-neutral-300 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] text-emerald-400 font-bold mb-1">
                  {q.tag}
                </span>
                <span className="text-[11px] text-neutral-300 line-clamp-2">
                  "{q.title}"
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Thread Window */}
      <div className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/90 shadow-2xl h-[600px] overflow-hidden">
        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {chatHistory.map((msg) => (
            <div
              key={msg.id}
              className={`rounded-2xl border p-4.5 transition-all ${
                msg.role === 'assistant'
                  ? 'border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 via-neutral-900 to-neutral-950 shadow-md ring-1 ring-emerald-500/30'
                  : 'border-neutral-800 bg-neutral-950/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg text-xs font-bold ${
                    msg.role === 'assistant' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-neutral-800 text-neutral-300'
                  }`}>
                    {msg.role === 'assistant' ? <Bot className="h-4 w-4" /> : 'You'}
                  </div>
                  <span className="font-bold text-xs text-white">
                    {msg.author}
                  </span>
                  <span className="rounded bg-neutral-800 px-2 py-0.2 text-[9px] font-mono text-neutral-400">
                    {msg.mode} MODE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">
                  {msg.timestamp}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-line font-sans">
                {msg.text}
              </div>
            </div>
          ))}

          {isAiLoading && (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
              <span className="text-xs font-mono text-emerald-300">
                Ms. Heavy Metal Leaf AI is synthesizing biophysical literature, electrical safety constraints, and empirical data...
              </span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
          className="border-t border-neutral-800 bg-neutral-950 p-3.5"
        >
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={`Ask Ms. Heavy Metal Leaf in ${activeMode} Mode (e.g., electrical safety, hyperaccumulators, guided molds)...`}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isAiLoading}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 disabled:opacity-40 transition-colors shadow-md"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Query AI</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
