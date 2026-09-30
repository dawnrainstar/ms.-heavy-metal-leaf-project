import React from 'react';
import { 
  Leaf, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Layers, 
  Globe2, 
  Bot, 
  BookOpen, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface CommandCenterHeroProps {
  onNavigateTab: (tabId: string) => void;
}

export const CommandCenterHero: React.FC<CommandCenterHeroProps> = ({ onNavigateTab }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40 p-6 sm:p-8 shadow-2xl">
      {/* Background ambient radial glow */}
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Eyebrow Platform Badge */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 font-bold text-emerald-300 border border-emerald-500/40">
            <Leaf className="h-3.5 w-3.5 text-emerald-400" />
            MS. HEAVY METAL LEAF
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-300 font-medium">Ecological Intelligence Platform</span>
          <span className="text-neutral-500">•</span>
          <span className="text-amber-400 font-mono">Adaptive AI Operating System</span>
        </div>

        {/* Hero Title & Identity Statement */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            MS. HEAVY METAL LEAF
          </h1>
          <p className="text-base sm:text-lg font-mono text-emerald-400 font-semibold tracking-wide">
            Ecological Intelligence Platform
          </p>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
            An AI-powered research and development platform focused on phytoremediation, phytomining, bioelectronics, environmental sensing, regenerative infrastructure, resource recovery, and emerging ecological technologies.
          </p>
        </div>

        {/* Direct Exploration Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <button
            onClick={() => onNavigateTab('verified-science')}
            className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-3.5 py-2 text-xs font-mono font-bold text-emerald-300 hover:bg-emerald-900/50 hover:text-white transition-all shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Verified Science</span>
          </button>

          <button
            onClick={() => onNavigateTab('active-experiments')}
            className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-950/30 px-3.5 py-2 text-xs font-mono font-bold text-amber-300 hover:bg-amber-900/50 hover:text-white transition-all shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>Active Experiments</span>
          </button>

          <button
            onClick={() => onNavigateTab('emerging-tech')}
            className="flex items-center gap-2 rounded-xl border border-blue-500/40 bg-blue-950/30 px-3.5 py-2 text-xs font-mono font-bold text-blue-300 hover:bg-blue-900/50 hover:text-white transition-all shadow-sm"
          >
            <span className="text-sm leading-none">🔷</span>
            <span>Emerging Tech Pipeline</span>
          </button>

          <button
            onClick={() => onNavigateTab('future-concepts')}
            className="flex items-center gap-2 rounded-xl border border-purple-500/40 bg-purple-950/30 px-3.5 py-2 text-xs font-mono font-bold text-purple-300 hover:bg-purple-900/50 hover:text-white transition-all shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            <span>Future Concepts</span>
          </button>

          <button
            onClick={() => onNavigateTab('ai-assistant')}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-xs font-mono font-bold text-white shadow-lg hover:from-emerald-500 hover:to-teal-500 transition-all"
          >
            <Bot className="h-3.5 w-3.5" />
            <span>AI Co-Scientist Console</span>
          </button>

          <button
            onClick={() => onNavigateTab('project-vision')}
            className="flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/80 px-3.5 py-2 text-xs font-mono font-medium text-neutral-300 hover:border-neutral-500 hover:text-white transition-all"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Project Vision & Myth</span>
          </button>
        </div>

        {/* Live Lab Diagnostics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-neutral-800/80">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3">
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">Plant Voltage Safety</span>
            <span className="text-base font-bold font-mono text-emerald-400 flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              1 TΩ Passive (&lt;2 nA)
            </span>
            <span className="text-[10px] text-neutral-500 block">Zero voltage injection</span>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3">
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">Faraday Protection</span>
            <span className="text-base font-bold font-mono text-amber-400 flex items-center gap-1.5 mt-0.5">
              <Zap className="h-4 w-4 text-amber-400" />
              Grounded Mesh Shield
            </span>
            <span className="text-[10px] text-neutral-500 block">Ambient E-field = 0.00 V/m</span>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3">
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">Natural Record Cap</span>
            <span className="text-base font-bold font-mono text-cyan-400 block mt-0.5">
              25.7% Ni Dry Wt.
            </span>
            <span className="text-[10px] text-neutral-500 block">Pycnandra blue latex</span>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3">
            <span className="text-[10px] font-mono text-neutral-400 uppercase block">Field Cleanup Impact</span>
            <span className="text-base font-bold font-mono text-teal-400 block mt-0.5">
              94% Toxic Reduction
            </span>
            <span className="text-[10px] text-neutral-500 block">Sudbury smelter basin model</span>
          </div>
        </div>
      </div>
    </div>
  );
};
