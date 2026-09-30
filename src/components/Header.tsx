import React from 'react';
import { 
  Leaf, 
  Cpu, 
  Activity, 
  Share2, 
  Download, 
  Sparkles, 
  Layers, 
  FlaskConical, 
  Globe2, 
  Users, 
  Shield, 
  Zap, 
  BookOpen, 
  Bot, 
  LayoutDashboard,
  Compass,
  Atom
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenExport: () => void;
  onOpenInvite: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenExport,
  onOpenInvite,
}) => {
  const tabs = [
    { id: 'workspace', label: 'Workspace', icon: LayoutDashboard, badge: 'Command Center' },
    { id: 'ai-assistant', label: 'AI Co-Scientist', icon: Bot, badge: 'Adaptive Intelligence' },
    { id: 'verified-science', label: 'Verified Science', icon: BookOpen, badge: 'Peer-Reviewed' },
    { id: 'active-experiments', label: 'Active Experiments', icon: Layers, badge: 'Bio-Mold & Faraday' },
    { id: 'emerging-tech', label: 'Emerging Tech', icon: Compass, badge: 'Pipeline 🔷' },
    { id: 'future-concepts', label: 'Future Concepts', icon: Atom, badge: '80% Matrix' },
    { id: 'field-sites', label: 'Field Sites', icon: Globe2, badge: 'Phytoremediation' },
    { id: 'project-vision', label: 'Project Vision', icon: Sparkles, badge: 'Living Platform' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/40 bg-neutral-950/95 backdrop-blur-md">
      {/* Top Banner with Platform Identity */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div 
          onClick={() => setActiveTab('workspace')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-neutral-900 to-amber-500/20 p-2 ring-1 ring-emerald-500/40 shadow-lg shadow-emerald-950/50 group-hover:scale-105 transition-transform">
            <Leaf className="h-6 w-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <Cpu className="absolute -bottom-1 -right-1 h-4 w-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                MS. HEAVY METAL LEAF
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400 border border-emerald-500/30">
                  OPEN PLATFORM
                </span>
              </h1>
            </div>
            <p className="text-xs text-neutral-400 flex flex-wrap items-center gap-2">
              <span>Living Technologies</span>
              <span className="text-neutral-600">•</span>
              <span className="text-emerald-400/90 font-medium">Earth • Biology • Machines</span>
              <span className="text-neutral-600">•</span>
              <span className="text-amber-400/90 font-medium">⚡ Faraday Shielded</span>
              <span className="text-neutral-600">•</span>
              <span className="text-cyan-400/90 font-medium">🟢 Science Separated from Myth</span>
            </p>
          </div>
        </div>

        {/* Live Status Indicators & Action Buttons */}
        <div className="flex items-center gap-2.5">
          <div className="hidden xl:flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-1.5 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-neutral-400">Voltage Safety:</span>
              <span className="text-emerald-400 font-semibold">1 TΩ Passive (&lt;2 nA)</span>
            </div>
            <div className="h-3 w-px bg-neutral-800" />
            <div className="flex items-center gap-1.5">
              <span className="text-neutral-400">Faraday Cage:</span>
              <span className="text-amber-400 font-semibold">Grounded (0.00 V/m)</span>
            </div>
            <div className="h-3 w-px bg-neutral-800" />
            <div className="flex items-center gap-1.5">
              <span className="text-neutral-400">Epistemics:</span>
              <span className="text-cyan-400 font-semibold">5-Tier Epistemic Separation</span>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('ai-assistant')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all border ${
              activeTab === 'ai-assistant'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:text-white'
            }`}
          >
            <Bot className="h-3.5 w-3.5 text-emerald-400" />
            <span>AI Co-Scientist</span>
          </button>

          <button
            onClick={onOpenExport}
            className="flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-all hover:border-emerald-500/50 hover:bg-neutral-800 hover:text-white"
            title="Export complete scientific dossier & protocol"
          >
            <Download className="h-3.5 w-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Export Dossier</span>
          </button>

          <button
            onClick={onOpenInvite}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-emerald-950/60 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-900/80"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>Invite</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl overflow-x-auto px-4 sm:px-6 scrollbar-none border-t border-neutral-900">
        <nav className="flex space-x-1 py-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40 shadow-inner'
                    : 'text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-emerald-400' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`rounded px-1.5 py-0.2 text-[10px] font-mono ${
                      isActive
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                        : 'bg-neutral-800/80 text-neutral-400'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
