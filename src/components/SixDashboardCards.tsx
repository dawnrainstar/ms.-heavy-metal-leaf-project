import React from 'react';
import { 
  Leaf, 
  Coins, 
  Zap, 
  Bot, 
  Globe2, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Compass
} from 'lucide-react';
import { EpistemicStatus } from '../types';

interface DashboardCardItem {
  id: string;
  domainNumber: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  researchAreas: string[];
  icon: any;
  epistemicStatus: EpistemicStatus;
  epistemicLabel: string;
  targetTab: string;
  targetLabel: string;
  borderColor: string;
  glowColor: string;
  textColor: string;
}

interface SixDashboardCardsProps {
  onNavigateTab: (tabId: string) => void;
}

export const SixDashboardCards: React.FC<SixDashboardCardsProps> = ({ onNavigateTab }) => {
  const cards: DashboardCardItem[] = [
    {
      id: 'phytoremediation',
      domainNumber: '01',
      title: 'Phytoremediation',
      subtitle: 'Contaminant Removal & Soil Stabilization',
      tag: 'Verified Metallophytes',
      description: 'Using specialized hyperaccumulator plants to biologically extract, stabilize, or transform heavy metals and industrial contaminants from polluted soils and mine tailings.',
      researchAreas: [
        'Heavy metal removal (Ni, Zn, Cd, Cu, Pb)',
        'Brownfield restoration & soil stabilization',
        'Mine tailing remediation kinetics',
        'Rhizosphere soil regeneration & pH dynamics',
        'Water quality improvement & runoff bio-filtration'
      ],
      icon: Leaf,
      epistemicStatus: 'PROVEN_FACT',
      epistemicLabel: '🟢 VERIFIED SCIENCE',
      targetTab: 'verified-science',
      targetLabel: 'Verified Science Archive',
      borderColor: 'border-emerald-500/50 hover:border-emerald-400',
      glowColor: 'from-emerald-950/30',
      textColor: 'text-emerald-400'
    },
    {
      id: 'phytomining',
      domainNumber: '02',
      title: 'Phytomining',
      subtitle: 'Bio-Ore Harvesting & Resource Recovery',
      tag: 'Circular Resource Recovery',
      description: 'Using hyperaccumulator crops to harvest economic-grade critical metals from contaminated or low-grade soils, producing battery precursors without smelting emissions.',
      researchAreas: [
        'Nickel recovery (>20% Ni in dry biomass ash)',
        'Zinc recovery (Noccaea caerulescens up to 39,000 ppm)',
        'Copper recovery & tailings leachates',
        'Rare metal recovery (Cobalt, Cadmium, Arsenic)',
        'Circular battery-grade precursor synthesis'
      ],
      icon: Coins,
      epistemicStatus: 'PROVEN_FACT',
      epistemicLabel: '🟢 FIELD VERIFIED',
      targetTab: 'field-sites',
      targetLabel: 'Field Sites & Phytomining',
      borderColor: 'border-amber-500/50 hover:border-amber-400',
      glowColor: 'from-amber-950/20',
      textColor: 'text-amber-400'
    },
    {
      id: 'bioelectronics',
      domainNumber: '03',
      title: 'Bioelectronics',
      subtitle: 'Plant Electrophysiology & Passive Interfaces',
      tag: '1 TΩ Non-Invasive Sensing',
      description: 'Understanding plant electrical action potentials and engineering non-invasive, ultra-high impedance interfaces between living botanical tissues and digital hardware.',
      researchAreas: [
        'Plant electrophysiology & action potentials',
        'Environmental stress sensing (drought, cations)',
        'Non-invasive electrodes & zero-incision PDMS molds',
        'Biological signal classification & noise filtering',
        'Low-power sensor systems (<2 nA passive draw)'
      ],
      icon: Zap,
      epistemicStatus: 'ACTIVE_TEST',
      epistemicLabel: '🟡 ACTIVE EXPERIMENTS',
      targetTab: 'active-experiments',
      targetLabel: 'Bioelectronics Lab',
      borderColor: 'border-amber-500/50 hover:border-amber-400',
      glowColor: 'from-amber-950/20',
      textColor: 'text-amber-400'
    },
    {
      id: 'environmental-intelligence',
      domainNumber: '04',
      title: 'Environmental Intelligence',
      subtitle: 'Living Monitoring Networks & Ecological AI',
      tag: 'Adaptive AI Engine',
      description: 'Transforming natural ecosystems into distributed living monitoring networks integrated with edge AI, sensor fusion, and biophysical predictive digital twins.',
      researchAreas: [
        'Subterranean soil sensing & rhizosphere metrics',
        'Water quality tracking & aquatic ion kinetics',
        'Air quality tracking & particulate deposition',
        'Ecological analytics & time-series uptake models',
        'AI environmental models & biophysical reasoning'
      ],
      icon: Bot,
      epistemicStatus: 'PROVEN_FACT',
      epistemicLabel: '🟢 CORE INTELLIGENCE',
      targetTab: 'ai-assistant',
      targetLabel: 'AI Co-Scientist Console',
      borderColor: 'border-teal-500/50 hover:border-teal-400',
      glowColor: 'from-teal-950/30',
      textColor: 'text-teal-400'
    },
    {
      id: 'regenerative-infrastructure',
      domainNumber: '05',
      title: 'Regenerative Infrastructure',
      subtitle: 'Deployable Systems Improving Ambient Ecology',
      tag: 'Ecosystem Engineering',
      description: 'Designing systems that actively heal environmental conditions: floating treatment wetlands, living barriers, urban restoration corridors, and carbon-sequestering landscapes.',
      researchAreas: [
        'Floating treatment wetlands for toxic ponds',
        'Urban restoration systems & bio-swales',
        'Living barriers for particulate capture',
        'Carbon capture landscapes with dense root mats',
        'Ecological construction & vegetative support'
      ],
      icon: Globe2,
      epistemicStatus: 'ACTIVE_TEST',
      epistemicLabel: '🟡 FIELD DEPLOYMENT',
      targetTab: 'field-sites',
      targetLabel: 'Field Restoration Sites',
      borderColor: 'border-teal-500/50 hover:border-teal-400',
      glowColor: 'from-teal-950/20',
      textColor: 'text-teal-400'
    },
    {
      id: 'living-materials',
      domainNumber: '06',
      title: 'Living Materials',
      subtitle: 'Biological Alternatives to Conventional Manufacturing',
      tag: 'Emerging Biomaterials',
      description: 'Exploring grown biological materials, mycelium composites, biochar matrices, and biomineralized tissues as regenerative alternatives to petrochemicals and extractive metallurgy.',
      researchAreas: [
        'Plant fiber composites & structural polymers',
        'Mycelium composites for acoustic & thermal insulation',
        'Biomineralization & in-situ conductive pathways',
        'Biochar materials for permanent carbon storage',
        'Self-healing living construction composites'
      ],
      icon: Layers,
      epistemicStatus: 'EMERGING_TECH',
      epistemicLabel: '🔷 EMERGING PIPELINE',
      targetTab: 'emerging-tech',
      targetLabel: 'Emerging Tech Pipeline',
      borderColor: 'border-blue-500/50 hover:border-blue-400',
      glowColor: 'from-blue-950/30',
      textColor: 'text-blue-400'
    }
  ];

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
        <div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
            Core Architecture
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center gap-2">
            <span>6 Core Research Domains</span>
          </h2>
        </div>
        <span className="text-xs font-mono text-neutral-400">
          Integrated scientific programs bridging biology, technology, and materials
        </span>
      </div>

      {/* Grid of 6 Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br from-neutral-900/90 via-neutral-950 to-neutral-900/60 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${card.borderColor}`}
            >
              {/* Top ambient hover glow */}
              <div className={`absolute -right-8 -top-8 h-36 w-36 rounded-full bg-gradient-to-br ${card.glowColor} to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div className="relative z-10 space-y-4">
                {/* Header: Domain Number, Epistemic Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-extrabold text-neutral-500">
                      {card.domainNumber}
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold ${
                      card.epistemicStatus === 'PROVEN_FACT'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : card.epistemicStatus === 'ACTIVE_TEST'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                    }`}>
                      {card.epistemicLabel}
                    </span>
                  </div>

                  <div className={`rounded-xl bg-neutral-900/90 p-2.5 ${card.textColor} group-hover:scale-110 transition-transform shadow-inner`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5">
                    {card.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {card.description}
                </p>

                {/* Research Areas Bullet Points */}
                <div className="rounded-xl border border-neutral-850 bg-neutral-950/60 p-3.5 space-y-1.5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                    Core Research Areas:
                  </div>
                  <ul className="space-y-1 text-[11px] font-mono text-neutral-300">
                    {card.researchAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 text-xs leading-none mt-0.5">•</span>
                        <span className="leading-snug">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 relative z-10">
                <button
                  onClick={() => onNavigateTab(card.targetTab)}
                  className="flex items-center justify-between w-full rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-2.5 text-xs font-mono font-bold text-white hover:border-emerald-500 hover:bg-emerald-950/40 hover:text-emerald-300 transition-all shadow-sm group/btn"
                >
                  <span>Explore {card.targetLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
