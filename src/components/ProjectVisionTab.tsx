import React from 'react';
import { 
  Sparkles, 
  Leaf, 
  Globe2, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Compass,
  Layers,
  Heart,
  Droplets,
  Wind,
  Recycle,
  Coins,
  Zap,
  Bot,
  Hammer,
  Trees,
  Rocket
} from 'lucide-react';

interface ProjectVisionTabProps {
  onNavigateTab?: (tabId: string) => void;
}

export const ProjectVisionTab: React.FC<ProjectVisionTabProps> = ({ onNavigateTab }) => {
  const integratedPillars = [
    { name: 'Phytoremediation', icon: Leaf, color: 'text-emerald-400' },
    { name: 'Hyperaccumulator Plants', icon: Sparkles, color: 'text-emerald-300' },
    { name: 'Phytomining', icon: Coins, color: 'text-amber-400' },
    { name: 'Bioelectronics', icon: Zap, color: 'text-amber-300' },
    { name: 'Environmental Sensing', icon: Compass, color: 'text-cyan-400' },
    { name: 'Ecological AI', icon: Bot, color: 'text-teal-400' },
    { name: 'Living Materials', icon: Layers, color: 'text-blue-400' },
    { name: 'Resource Recovery', icon: Recycle, color: 'text-emerald-400' },
    { name: 'Circular Manufacturing', icon: Hammer, color: 'text-cyan-300' },
    { name: 'Regenerative Infrastructure', icon: Globe2, color: 'text-teal-300' },
    { name: 'Bioregenerative Systems', icon: Trees, color: 'text-emerald-300' },
    { name: 'Space Agriculture Concepts', icon: Rocket, color: 'text-purple-400' },
    { name: 'Closed-Loop Ecological Design', icon: CheckCircle2, color: 'text-cyan-400' }
  ];

  const missionStatements = [
    { title: 'Restore Polluted Ecosystems', desc: 'Deploy metallophytes and biological kinetics to detoxify mine tailings, brownfields, and degraded industrial soils.' },
    { title: 'Recover Valuable Resources', desc: 'Extract high-purity battery-grade precursors (>99% NiSO4) and critical minerals directly from hyperaccumulator bio-ore.' },
    { title: 'Develop Plant-Based Sensing', desc: 'Interface living plant vascular signaling with ultra-low power 1 TΩ instrumentation to turn flora into ecological monitors.' },
    { title: 'Explore Living Materials', desc: 'Engineer biological alternatives including mycelium composites, plant fiber architectures, and biomineralized structures.' },
    { title: 'Reduce Destructive Extraction', desc: 'Provide scalable regenerative alternatives to blast furnace smelting, open-pit strip mining, and pyrometallurgical carbon emissions.' },
    { title: 'Support Circular Economies', desc: 'Close industrial resource loops by returning captured soil cations directly into high-tech energy storage and manufacturing.' },
    { title: 'Work With Natural Systems', desc: 'Create practical, deployable technologies that synergize with natural evolutionary adaptations rather than working against them.' }
  ];

  const coreResearchDomains = [
    {
      number: '1',
      title: 'PHYTOREMEDIATION',
      subtitle: 'Contaminant Transformation & Stabilization',
      description: 'Using specialized metallophyte plants to biologically remove, stabilize, or transform toxic pollutants in soils and aquatic systems.',
      researchAreas: [
        'Heavy metal removal (Ni, Zn, Cd, Cu, Pb, Co)',
        'Brownfield restoration & soil stabilization',
        'Mine tailing rehabilitation kinetics',
        'Rhizosphere soil regeneration & pH balance',
        'Water quality improvement & runoff bio-filtration'
      ],
      icon: Leaf,
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      targetTab: 'verified-science',
      targetLabel: 'Verified Science Archive'
    },
    {
      number: '2',
      title: 'PHYTOMINING',
      subtitle: 'Bio-Ore Harvesting & Circular Resource Recovery',
      description: 'Using hyperaccumulator species to concentrate economic-grade critical metals from low-grade ultramafic soils and industrial tailings.',
      researchAreas: [
        'Nickel recovery (>20% Ni in dry biomass ash)',
        'Zinc recovery (Noccaea caerulescens up to 39,000 ppm)',
        'Copper recovery & tailings leachates',
        'Rare metal recovery (Cobalt, Cadmium, Arsenic)',
        'Circular battery chemistry & smelting-free precursors'
      ],
      icon: Coins,
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      targetTab: 'field-sites',
      targetLabel: 'Field Sites & Phytomining'
    },
    {
      number: '3',
      title: 'BIOELECTRONICS',
      subtitle: 'Biological Signal Interfaces & Passive Sensing',
      description: 'Understanding plant electrical action potentials and building ultra-high impedance, non-invasive interfaces between living tissue and electronic hardware.',
      researchAreas: [
        'Plant electrophysiology (resting vs action potentials)',
        'Environmental stress sensing (drought, salt, metal surge)',
        'Non-invasive electrodes & zero-incision PDMS molds',
        'Biological signal classification & noise filtering',
        'Low-power sensor systems (<2 nA passive listening)'
      ],
      icon: Zap,
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      targetTab: 'active-experiments',
      targetLabel: 'Bioelectronics Lab'
    },
    {
      number: '4',
      title: 'ENVIRONMENTAL INTELLIGENCE',
      subtitle: 'Living Monitoring Networks & Ecological AI',
      description: 'Transforming natural ecosystems into distributed, living environmental monitoring networks powered by edge AI and adaptive biophysical models.',
      researchAreas: [
        'Subterranean soil sensing & rhizosphere metrics',
        'Continuous water quality & aquatic nutrient monitoring',
        'Air quality tracking & particulate deposition',
        'Ecological analytics & time-series cation uptake',
        'AI environmental models & biophysical digital twins'
      ],
      icon: Bot,
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      targetTab: 'ai-assistant',
      targetLabel: 'AI Co-Scientist Console'
    },
    {
      number: '5',
      title: 'REGENERATIVE INFRASTRUCTURE',
      subtitle: 'Deployable Systems Improving Ambient Ecology',
      description: 'Designing architectural and civil systems that actively heal degraded ecosystems, sequester carbon, and restore native biodiversity.',
      researchAreas: [
        'Floating treatment wetlands for industrial retention ponds',
        'Urban restoration systems & roadside bio-swales',
        'Living barriers for particulate and acoustic capture',
        'Carbon capture landscapes with high-density roots',
        'Ecological construction & vegetative structural support'
      ],
      icon: Globe2,
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      targetTab: 'field-sites',
      targetLabel: 'Field Sites & Remediation'
    },
    {
      number: '6',
      title: 'LIVING MATERIALS',
      subtitle: 'Biological Alternatives to Conventional Manufacturing',
      description: 'Exploring grown biological materials, biochar substrates, and biomineralized plant tissues as circular alternatives to petroleum and high-emission metallurgy.',
      researchAreas: [
        'Plant fiber composites & structural bio-polymers',
        'Mycelium composites for acoustic & thermal insulation',
        'Biomineralization & in-situ conductive pathways',
        'Biochar materials for long-term carbon stabilization',
        'Engineered self-healing biological structures'
      ],
      icon: Layers,
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      targetTab: 'emerging-tech',
      targetLabel: 'Emerging Tech Pipeline'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Top Identity Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40 p-6 sm:p-8 shadow-2xl">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        
        <div className="space-y-4 max-w-4xl relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-mono font-bold text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              ECOLOGICAL INTELLIGENCE PLATFORM
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Open Research & Development Engine
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            MS. HEAVY METAL LEAF
          </h1>
          <p className="text-base sm:text-lg font-mono text-emerald-400 font-semibold tracking-wide">
            An AI-powered research and development platform focused on phytoremediation, phytomining, bioelectronics, environmental sensing, regenerative infrastructure, resource recovery, and emerging ecological technologies.
          </p>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed space-y-3">
            <p className="font-bold text-emerald-300 text-sm">
              Ms. Heavy Metal Leaf is not a fictional character.
            </p>
            <p className="text-neutral-300">
              Ms. Heavy Metal Leaf is the <strong>AI intelligence and operating system of the platform</strong>. Its purpose is to help researchers, engineers, designers, students, environmental scientists, and innovators explore technologies that restore ecosystems while generating useful knowledge, materials, and infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* The 13 Integrated Pillars */}
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-7 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <Layers className="h-4 w-4 text-emerald-400" />
            <span>Integrated Platform Disciplines (13 Core Pillars)</span>
          </h2>
          <span className="text-xs font-mono text-neutral-400">
            Uniting biological evolution with open-science technology
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {integratedPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-neutral-800/80 bg-neutral-950/70 p-3 flex items-center gap-2.5 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all shadow-sm"
              >
                <div className={`p-1.5 rounded-lg bg-neutral-900 ${pillar.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-mono font-medium text-neutral-200">
                  {pillar.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Platform Mission Statements */}
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-7 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <Compass className="h-4 w-4 text-emerald-400" />
            <span>Platform Mission</span>
          </h2>
          <span className="text-xs font-mono text-neutral-400">
            Guiding planetary-scale ecological transition
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {missionStatements.map((m, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 space-y-1.5 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wide">
                    {m.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed pl-6">
                  {m.desc}
                </p>
              </div>
              <div className="text-[10px] font-mono text-neutral-500 pl-6 pt-1">
                Core Directive 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Core Research Domains */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
              Scientific Program
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
              6 Core Research Domains
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            Systematic exploration across biology, engineering, and materials
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreResearchDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.number}
                className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between hover:border-neutral-700 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold border ${domain.badgeColor}`}>
                      DOMAIN {domain.number}
                    </span>
                    <div className="p-2 rounded-xl bg-neutral-900 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white font-mono">
                      {domain.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400/90 mt-0.5">
                      {domain.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {domain.description}
                  </p>

                  <div className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-3 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block">
                      Target Research Areas:
                    </span>
                    <ul className="space-y-1 text-[11px] font-mono text-neutral-300">
                      {domain.researchAreas.map((area, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 text-xs leading-none mt-0.5">•</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab(domain.targetTab)}
                    className="flex items-center justify-between w-full rounded-xl border border-neutral-800 bg-neutral-900/90 px-3.5 py-2 text-xs font-mono font-bold text-neutral-200 hover:border-emerald-500 hover:text-white hover:bg-emerald-950/30 transition-all shadow-sm"
                  >
                    <span>Explore {domain.targetLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Epistemic Boundary Notice */}
      <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-neutral-900 via-neutral-950 to-purple-950/20 p-6 shadow-xl space-y-3">
        <div className="flex items-center gap-2 font-bold font-mono text-purple-300">
          <Sparkles className="h-4 w-4" />
          <h3 className="text-sm font-bold uppercase tracking-wider">
            THE EPISTEMIC BOUNDARY: SCIENCE VS. SPECULATION
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-neutral-300 font-mono leading-relaxed max-w-4xl">
          Ms. Heavy Metal Leaf strictly segregates <strong>peer-reviewed facts</strong> (Verified Science), <strong>laboratory bench protocols</strong> (Active Experiments), <strong>plausible concepts</strong> (Emerging Technologies Pipeline), and <strong>civilization-scale myth and art</strong> (Project Vision). This boundary protects scientific rigor while preserving planetary imagination.
        </p>
      </div>
    </div>
  );
};
