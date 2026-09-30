import React from 'react';
import { 
  Bot, 
  BookOpen, 
  Layers, 
  Globe2, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Coins,
  Compass
} from 'lucide-react';
import { EpistemicStatus } from '../types';

interface DashboardCardItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  bullets: string[];
  icon: any;
  epistemicStatus: EpistemicStatus;
  epistemicLabel: string;
  targetTab: string;
  borderColor: string;
  glowColor: string;
}

interface SixDashboardCardsProps {
  onNavigateTab: (tabId: string) => void;
}

export const SixDashboardCards: React.FC<SixDashboardCardsProps> = ({ onNavigateTab }) => {
  const cards: DashboardCardItem[] = [
    {
      id: 'ai-assistant',
      title: 'AI Research Assistant',
      subtitle: 'Ms. Heavy Metal Leaf Knowledge Engine',
      tag: 'Adaptive Ecological AI',
      description: 'Interact directly with the platform intelligence across Research, Engineering, and Data modes to evaluate plant electrophysiology, verify protocols, or model ionic transport.',
      bullets: [
        'Research Mode: Phytoremediation & hyperaccumulation analysis',
        'Engineering Mode: Guided-growth molds & sensor integration',
        'Data Mode: Environmental datasets & soil reduction analytics'
      ],
      icon: Bot,
      epistemicStatus: 'PROVEN_FACT',
      epistemicLabel: '🟢 CORE INTELLIGENCE',
      targetTab: 'ai-assistant',
      borderColor: 'border-emerald-500/50 hover:border-emerald-400',
      glowColor: 'from-emerald-950/30'
    },
    {
      id: 'verified-science',
      title: 'Verified Science',
      subtitle: 'Peer-Reviewed Botanical Archive',
      tag: 'Documented Science',
      description: 'Peer-reviewed metallophyte research, documented hyperaccumulation taxa, molecular transporters (HMA4, MTP1), vacuolar chelation, and published academic papers.',
      bullets: [
        'Pycnandra acuminata: 25.7% Ni blue latex (Science, 1976)',
        'Noccaea caerulescens: 3.9% Zn & Cd hyperaccumulation',
        'Berkheya coddii: High-biomass nickel phytomining (18-22 t/ha)'
      ],
      icon: BookOpen,
      epistemicStatus: 'PROVEN_FACT',
      epistemicLabel: '🟢 VERIFIED SCIENCE',
      targetTab: 'verified-science',
      borderColor: 'border-emerald-500/50 hover:border-emerald-400',
      glowColor: 'from-emerald-950/20'
    },
    {
      id: 'active-experiments',
      title: 'Active Experiments',
      subtitle: 'Guided-Growth & In-Growth Laboratory',
      tag: 'Bench Trials & Faraday Cage',
      description: 'Zero-incision bio-molding: pre-casting gold electrodes into PDMS molds with 1 TΩ passive sensing and grounded Faraday mesh cages to eliminate ambient electrical fields.',
      bullets: [
        'Zero surgical incisions: Pectin-sealed contact impedance 4.8 kΩ',
        '1 TΩ passive sensing (<2 nA) & Grounded Faraday cage (0.00 V/m)',
        'Cleanroom Protocol SOP-01: Plasma degassing & auxin pacing'
      ],
      icon: Layers,
      epistemicStatus: 'ACTIVE_TEST',
      epistemicLabel: '🟡 ACTIVE EXPERIMENTS',
      targetTab: 'active-experiments',
      borderColor: 'border-amber-500/50 hover:border-amber-400',
      glowColor: 'from-amber-950/20'
    },
    {
      id: 'emerging-pipeline',
      title: 'Emerging Tech Pipeline',
      subtitle: 'Technologies Under Evaluation',
      tag: 'Plausibility Evaluation',
      description: 'Evaluating scientifically plausible candidate technologies that bridge active laboratory experiments and wild future visions. Not yet validated on our core platform bench.',
      bullets: [
        'Plant neural network mapping & systemic action potential decoding',
        'Root-grown conductive metallic micro-wires via redox precipitation',
        'Mycelial-plant logic systems & living environmental memory'
      ],
      icon: Compass,
      epistemicStatus: 'EMERGING_TECH',
      epistemicLabel: '🔷 EMERGING PIPELINE',
      targetTab: 'emerging-tech',
      borderColor: 'border-blue-500/50 hover:border-blue-400',
      glowColor: 'from-blue-950/30'
    },
    {
      id: 'field-restoration',
      title: 'Field Restoration',
      subtitle: 'Mine Tailings & Toxic Land Recovery',
      tag: 'Ecological Projects',
      description: 'Phytoremediation kinetic simulators for legacy industrial brownfields, smelter tailings, and Superfund sites, calculating soil toxic reduction and battery-grade bio-ore yields.',
      bullets: [
        'Sudbury Smelter Tailings (Ni) & Katanga Copper-Cobalt Belt',
        'Avoided excavation carbon: saves ~85 kg CO2 per ton of soil',
        'Recoverable high-purity battery cathode precursors (>99.2% NiSO4)'
      ],
      icon: Globe2,
      epistemicStatus: 'PROVEN_FACT',
      epistemicLabel: '🟢 FIELD VERIFIED',
      targetTab: 'field-sites',
      borderColor: 'border-teal-500/50 hover:border-teal-400',
      glowColor: 'from-teal-950/20'
    },
    {
      id: 'future-concepts',
      title: 'Future Concepts',
      subtitle: 'Speculative Systems & Living Robotics',
      tag: 'Theoretical Designs',
      description: 'Exploratory biophysical modeling: engineered dual-compartment 80% dry-weight metal percolation matrices, plant-machine symbiosis, grown cybernetic bio-bots, and living infrastructure.',
      bullets: [
        'Dual-Compartment Partitioning: 25% symplastic core + 55% apoplast',
        'Kirkpatrick continuum electrical percolation threshold (~16% vol)',
        'Autonomous biohybrid landscape restoration networks'
      ],
      icon: Sparkles,
      epistemicStatus: 'THEORETICAL',
      epistemicLabel: '🟣 FUTURE CONCEPTS',
      targetTab: 'future-concepts',
      borderColor: 'border-purple-500/50 hover:border-purple-400',
      glowColor: 'from-purple-950/20'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
            <span>Primary Research Workspaces</span>
            <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400">
              6 Modules
            </span>
          </h3>
          <p className="text-xs text-neutral-400">
            Categorized research disciplines powering Ms. Heavy Metal Leaf.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onNavigateTab(card.targetTab)}
              className={`group cursor-pointer rounded-2xl border ${card.borderColor} bg-gradient-to-br ${card.glowColor} via-neutral-900 to-neutral-950 p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold ${
                    card.epistemicStatus === 'PROVEN_FACT'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : card.epistemicStatus === 'ACTIVE_TEST'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : card.epistemicStatus === 'EMERGING_TECH'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                      : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                  }`}>
                    {card.epistemicLabel}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h4>
                  <span className="text-xs text-neutral-400 font-mono block mt-0.5">
                    {card.subtitle}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {card.description}
                </p>

                <div className="space-y-1 pt-1 border-t border-neutral-800/80">
                  {card.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-neutral-400">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span className="leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
                <span>Explore Module</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
