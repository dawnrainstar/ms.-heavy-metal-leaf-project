import React, { useState, useId } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Globe2, 
  Leaf, 
  Layers, 
  Coins, 
  ShieldCheck, 
  Zap, 
  Bot, 
  Info,
  Compass,
  Search,
  ExternalLink,
  RotateCcw,
  SlidersHorizontal,
  ChevronRight,
  Flame,
  Radio
} from 'lucide-react';
import { EpistemicStatus } from '../types';

export interface SystemNode {
  id: string;
  name: string;
  shortLabel: string;
  domainName: string;
  tagline: string;
  category: 'core' | 'biology' | 'electronics' | 'ecology' | 'future';
  epistemicStatus: EpistemicStatus;
  x: number; // SVG coordinate (0 - 1000)
  y: number; // SVG coordinate (0 - 600)
  radius: number;
  icon: 'leaf' | 'zap' | 'layers' | 'bot' | 'globe' | 'coins' | 'soil' | 'compass' | 'sparkles' | 'core';
  targetTab: string;
  targetDomainLabel: string;
  description: string;
  keyMetric: string;
  benchmarkProof: string;
  connectedNodeIds: string[];
}

interface SystemsKnowledgeMapProps {
  onNavigateTab: (tabId: string) => void;
}

export const SystemsKnowledgeMap: React.FC<SystemsKnowledgeMapProps> = ({ onNavigateTab }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('core');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'verified' | 'experiments' | 'emerging' | 'future'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(true);

  const uniqueId = useId().replace(/:/g, '');

  const nodes: SystemNode[] = [
    {
      id: 'core',
      name: 'MS. HEAVY METAL LEAF',
      shortLabel: 'LIVING CORE',
      domainName: 'Adaptive Ecological Intelligence',
      tagline: 'Living Interface: Earth • Biology • Technology • Intelligence',
      category: 'core',
      epistemicStatus: 'PROVEN_FACT',
      x: 500,
      y: 300,
      radius: 56,
      icon: 'core',
      targetTab: 'project-vision',
      targetDomainLabel: 'Project Vision & Core Architecture',
      description: 'The central platform architecture uniting plant electrophysiology, guided bio-molding, and environmental restoration into one integrated living operating system.',
      keyMetric: 'Unified Knowledge Graph (9 Connected Domains)',
      benchmarkProof: 'Platform Architecture Specification v2.4',
      connectedNodeIds: ['hyperaccumulators', 'bioelectronics', 'guided-molds', 'ai-analysis', 'restoration', 'phytomining', 'soil', 'emerging-tech', 'future-systems']
    },
    {
      id: 'hyperaccumulators',
      name: 'Hyperaccumulators',
      shortLabel: 'METALLOPHYTES',
      domainName: 'Verified Botanical Science',
      tagline: 'Metallophyte Genetics, Tonoplast Transporters & Vacuolar Storage',
      category: 'biology',
      epistemicStatus: 'PROVEN_FACT',
      x: 500,
      y: 85,
      radius: 40,
      icon: 'leaf',
      targetTab: 'verified-science',
      targetDomainLabel: 'Verified Science Archive',
      description: 'Peer-reviewed botanical taxa (Pycnandra acuminata 25.7% Ni latex, Noccaea caerulescens, Berkheya coddii) concentrating heavy metals into cell vacuoles without cytotoxicity.',
      keyMetric: '25.7% Ni in Dry Latex (Pycnandra)',
      benchmarkProof: 'Jaffré et al. (1976) Science; Assunção et al. (2003)',
      connectedNodeIds: ['core', 'soil', 'phytomining', 'bioelectronics']
    },
    {
      id: 'bioelectronics',
      name: 'Bioelectronics Lab',
      shortLabel: 'BIOELECTRONICS',
      domainName: '1 TΩ Non-Invasive Sensing',
      tagline: 'Passive Electrophysiology, INA128 Front-End & Faraday Enclosure',
      category: 'electronics',
      epistemicStatus: 'PROVEN_FACT',
      x: 800,
      y: 130,
      radius: 38,
      icon: 'zap',
      targetTab: 'active-experiments',
      targetDomainLabel: 'Active Experiments Lab',
      description: 'Non-destructive analog front-end (INA128) drawing <2 nA bias current, enclosed in grounded mu-metal and copper Faraday mesh to capture sub-millivolt plant action potentials.',
      keyMetric: '1 TΩ Input Impedance • <2 nA Current Draw',
      benchmarkProof: 'Volkov (2012) Plant Electrophysiology Standard',
      connectedNodeIds: ['core', 'hyperaccumulators', 'guided-molds', 'ai-analysis']
    },
    {
      id: 'guided-molds',
      name: 'Guided-Growth Molds',
      shortLabel: 'BIO-MOLDING',
      domainName: 'Zero-Incision Root Encapsulation',
      tagline: 'PDMS Micro-Channels & Pre-Cast Electrode Arrays',
      category: 'electronics',
      epistemicStatus: 'ACTIVE_TEST',
      x: 860,
      y: 340,
      radius: 36,
      icon: 'layers',
      targetTab: 'active-experiments',
      targetDomainLabel: 'Active Experiments Lab',
      description: 'Pre-casting gold electrodes and capillary conduits into compliant PDMS molds so seedling roots naturally encapsulate sensors without surgical wounding or callose impedance spikes.',
      keyMetric: '4.8 kΩ Contact Impedance (25x Lower Than Needles)',
      benchmarkProof: 'Bench Chamber Prototype Run SOP-01',
      connectedNodeIds: ['core', 'bioelectronics', 'ai-analysis']
    },
    {
      id: 'ai-analysis',
      name: 'AI Co-Scientist',
      shortLabel: 'AI INTELLIGENCE',
      domainName: 'Adaptive Ecological Intelligence',
      tagline: 'Open-Science Inference, SOP Synthesis & Biophysical Modeling',
      category: 'electronics',
      epistemicStatus: 'PROVEN_FACT',
      x: 750,
      y: 480,
      radius: 36,
      icon: 'bot',
      targetTab: 'ai-assistant',
      targetDomainLabel: 'AI Co-Scientist Console',
      description: 'Biophysical AI co-pilot grounding live plant action potential queries, cleanroom SOP synthesis, and multi-tier epistemic validation (peer-reviewed facts vs speculative models).',
      keyMetric: 'Gemini 3.8 Flash + Multi-Tier Epistemic Filter',
      benchmarkProof: 'System Prompt v3.0 Grounding Engine',
      connectedNodeIds: ['core', 'bioelectronics', 'guided-molds']
    },
    {
      id: 'restoration',
      name: 'Field Restoration',
      shortLabel: 'RESTORATION',
      domainName: 'Ecological Remediation & Sites',
      tagline: 'Mine Tailing Rehabilitation & Floating Treatment Wetlands',
      category: 'ecology',
      epistemicStatus: 'ACTIVE_TEST',
      x: 500,
      y: 520,
      radius: 40,
      icon: 'globe',
      targetTab: 'field-sites',
      targetDomainLabel: 'Field Sites & Restoration',
      description: 'Deployable ecological infrastructure turning toxic industrial brownfields into clean vegetative ecosystems while capturing toxic cations (Ni, Zn, Cd, Cu, Pb) across seasonal cycles.',
      keyMetric: '94% Heavy Metal Reduction Over 3 Seasons',
      benchmarkProof: 'Sudbury Basin Pilot & Katanga Copperbelt Model',
      connectedNodeIds: ['core', 'soil', 'phytomining']
    },
    {
      id: 'phytomining',
      name: 'Phytomining & Bio-Ore',
      shortLabel: 'PHYTOMINING',
      domainName: 'Circular Battery Chemistry',
      tagline: 'Circular Battery-Grade Precursors from Hyperaccumulator Ash',
      category: 'biology',
      epistemicStatus: 'PROVEN_FACT',
      x: 240,
      y: 480,
      radius: 38,
      icon: 'coins',
      targetTab: 'field-sites',
      targetDomainLabel: 'Field Sites & Phytomining',
      description: 'Recovering battery-grade NiSO4 (>99.2% purity) from hyperaccumulator dry biomass ash, avoiding carbon-heavy smelting and pyrometallurgical slag emissions.',
      keyMetric: '22.4% Ni in Ash (18x Richer than Conventional Ore)',
      benchmarkProof: 'van der Ent et al. (2015) Agronomic Phytomining',
      connectedNodeIds: ['core', 'hyperaccumulators', 'restoration']
    },
    {
      id: 'soil',
      name: 'Soil Health & Tailings',
      shortLabel: 'RHIZOSPHERE',
      domainName: 'Substrate Geochemistry',
      tagline: 'Rhizosphere Chemistry, Organic Chelation & Bioavailability',
      category: 'ecology',
      epistemicStatus: 'PROVEN_FACT',
      x: 140,
      y: 330,
      radius: 36,
      icon: 'soil',
      targetTab: 'field-sites',
      targetDomainLabel: 'Field Sites & Restoration',
      description: 'Heavy metal soil matrices (Ni, Zn, Cd, Cu, Co, As, Pb) in mine tailings where root exudates like citrate and malate mobilize tightly bound metal ions.',
      keyMetric: '2,400+ PPM Initial Mine Tailing Concentration',
      benchmarkProof: 'EPA Superfund Soil Chemistry SOP-310',
      connectedNodeIds: ['core', 'hyperaccumulators', 'restoration']
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Tech Pipeline',
      shortLabel: 'EMERGING TECH',
      domainName: 'Technologies Under Evaluation',
      tagline: 'Plausible Future Systems: Living Memory, Plant Neural Mapping',
      category: 'electronics',
      epistemicStatus: 'EMERGING_TECH',
      x: 200,
      y: 130,
      radius: 38,
      icon: 'compass',
      targetTab: 'emerging-tech',
      targetDomainLabel: 'Emerging Technology Pipeline',
      description: 'Scientifically plausible technologies under rigorous evaluation (Plant neural mapping, root-grown metallic micro-wires, mycelial logic gates, autonomous phytomining networks).',
      keyMetric: '6 Pipeline Concepts Under Evaluation (TRL 1-3)',
      benchmarkProof: 'Heavy Metal Leaf Emerging Tech Assessment v1.2',
      connectedNodeIds: ['core', 'future-systems', 'hyperaccumulators']
    },
    {
      id: 'future-systems',
      name: 'Future Living Systems',
      shortLabel: 'FUTURE VISION',
      domainName: 'Speculative Bio-Robotics',
      tagline: 'Dual-Compartment 80% Living Metal Percolation Matrix',
      category: 'future',
      epistemicStatus: 'THEORETICAL',
      x: 340,
      y: 220,
      radius: 34,
      icon: 'sparkles',
      targetTab: 'future-concepts',
      targetDomainLabel: 'Future Concepts & Speculative Systems',
      description: 'Speculative bio-bot designs: 25% symplastic live cell core + 55% apoplastic metal crust reaching Kirkpatrick mathematical continuum percolation for living autonomous robotics.',
      keyMetric: 'Theoretical 80% Metal Density Threshold',
      benchmarkProof: 'Kirkpatrick (1973) Continuum Percolation Model',
      connectedNodeIds: ['core', 'emerging-tech']
    }
  ];

  // Secondary cross-domain links for rich system mapping
  const secondaryLinks: [string, string][] = [
    ['soil', 'hyperaccumulators'],
    ['hyperaccumulators', 'bioelectronics'],
    ['hyperaccumulators', 'phytomining'],
    ['bioelectronics', 'guided-molds'],
    ['bioelectronics', 'ai-analysis'],
    ['phytomining', 'restoration'],
    ['soil', 'restoration'],
    ['emerging-tech', 'future-systems'],
    ['emerging-tech', 'hyperaccumulators']
  ];

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];
  const centralNode = nodes.find(n => n.id === 'core') || nodes[0];

  // Filtered nodes logic
  const filteredNodes = nodes.filter(node => {
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = node.name.toLowerCase().includes(q) ||
                    node.tagline.toLowerCase().includes(q) ||
                    node.description.toLowerCase().includes(q) ||
                    node.keyMetric.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Category / Epistemic filter
    if (filterCategory === 'verified') return node.epistemicStatus === 'PROVEN_FACT';
    if (filterCategory === 'experiments') return node.epistemicStatus === 'ACTIVE_TEST';
    if (filterCategory === 'emerging') return node.epistemicStatus === 'EMERGING_TECH';
    if (filterCategory === 'future') return node.epistemicStatus === 'THEORETICAL';
    return true;
  });

  const isNodeFiltered = (nodeId: string) => {
    return filteredNodes.some(n => n.id === nodeId);
  };

  const getStatusColor = (status: EpistemicStatus) => {
    switch (status) {
      case 'PROVEN_FACT':
        return {
          stroke: '#10b981',
          fill: 'rgba(16, 185, 129, 0.16)',
          text: '#34d399',
          badgeBg: 'bg-emerald-500/20',
          badgeText: 'text-emerald-300',
          badgeBorder: 'border-emerald-500/40',
          label: '🟢 VERIFIED SCIENCE'
        };
      case 'ACTIVE_TEST':
        return {
          stroke: '#f59e0b',
          fill: 'rgba(245, 158, 11, 0.16)',
          text: '#fbbf24',
          badgeBg: 'bg-amber-500/20',
          badgeText: 'text-amber-300',
          badgeBorder: 'border-amber-500/40',
          label: '🟡 ACTIVE EXPERIMENT'
        };
      case 'EMERGING_TECH':
        return {
          stroke: '#38bdf8',
          fill: 'rgba(56, 189, 248, 0.16)',
          text: '#7dd3fc',
          badgeBg: 'bg-blue-500/20',
          badgeText: 'text-blue-300',
          badgeBorder: 'border-blue-500/40',
          label: '🔷 EMERGING PIPELINE'
        };
      case 'THEORETICAL':
      default:
        return {
          stroke: '#c084fc',
          fill: 'rgba(192, 132, 252, 0.16)',
          text: '#d8b4fe',
          badgeBg: 'bg-purple-500/20',
          badgeText: 'text-purple-300',
          badgeBorder: 'border-purple-500/40',
          label: '🟣 FUTURE CONCEPT'
        };
    }
  };

  const renderNodeIcon = (type: SystemNode['icon'], x: number, y: number, color: string) => {
    const s = 18;
    switch (type) {
      case 'leaf':
        return (
          <path
            d="M 0,-8 C 6,-8 10,-3 10,4 C 10,9 6,10 0,10 C -6,10 -10,9 -10,4 C -10,-3 -6,-8 0,-8 Z M 0,-8 L 0,10"
            transform={`translate(${x}, ${y})`}
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        );
      case 'zap':
        return (
          <polygon
            points="1,-9 -8,1 -1,1 -3,9 8,-1 1,-1"
            transform={`translate(${x}, ${y})`}
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        );
      case 'globe':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <circle r="8" fill="none" stroke={color} strokeWidth="1.6" />
            <path d="M -8,0 L 8,0 M 0,-8 C 3,-4 3,4 0,8 M 0,-8 C -3,-4 -3,4 0,8" fill="none" stroke={color} strokeWidth="1.2" />
          </g>
        );
      case 'layers':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <polygon points="0,-7 9,-2 0,3 -9,-2" fill="none" stroke={color} strokeWidth="1.5" />
            <path d="M -9,1 L 0,6 L 9,1 M -9,4 L 0,9 L 9,4" fill="none" stroke={color} strokeWidth="1.5" />
          </g>
        );
      case 'bot':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <rect x="-7" y="-6" width="14" height="12" rx="2" fill="none" stroke={color} strokeWidth="1.6" />
            <circle cx="-3" cy="-1" r="1.5" fill={color} />
            <circle cx="3" cy="-1" r="1.5" fill={color} />
            <line x1="0" y1="-6" x2="0" y2="-9" stroke={color} strokeWidth="1.5" />
            <circle cx="0" cy="-9" r="1" fill={color} />
          </g>
        );
      case 'coins':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <ellipse cx="0" cy="-3" rx="7" ry="3.5" fill="none" stroke={color} strokeWidth="1.5" />
            <path d="M -7,-3 L -7,3 C -7,5 7,5 7,3 L 7,-3 M -7,0 C -7,2 7,2 7,0" fill="none" stroke={color} strokeWidth="1.5" />
          </g>
        );
      case 'soil':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <path d="M -8,4 L 8,4 M -6,7 L 6,7 M -9,0 L 9,0" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 0,0 C 0,-5 5,-7 5,-7 C 5,-7 5,-3 0,0 Z" fill="none" stroke={color} strokeWidth="1.3" />
          </g>
        );
      case 'compass':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <circle r="8" fill="none" stroke={color} strokeWidth="1.5" />
            <polygon points="0,-6 4,4 0,2 -4,4" fill={color} opacity="0.8" />
          </g>
        );
      case 'sparkles':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <path d="M 0,-8 Q 0,0 8,0 Q 0,0 0,8 Q 0,0 -8,0 Q 0,0 0,-8 Z" fill="none" stroke={color} strokeWidth="1.5" />
          </g>
        );
      case 'core':
      default:
        return (
          <g transform={`translate(${x}, ${y})`}>
            <circle r="18" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 0,-14 C 9,-14 14,-6 14,5 C 14,13 8,14 0,14 C -8,14 -14,13 -14,5 C -14,-6 -9,-14 0,-14 Z M 0,-14 L 0,14" fill="none" stroke="#6ee7b7" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="0" cy="0" r="4" fill="#10b981" />
          </g>
        );
    }
  };

  return (
    <div className="rounded-3xl border border-emerald-500/30 bg-neutral-900/95 p-5 sm:p-7 shadow-2xl space-y-5 backdrop-blur-xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      {/* Top Header & Context */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-800 pb-4 relative z-10">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-mono font-bold text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SYSTEMS KNOWLEDGE MAP
            </span>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
              Living Knowledge Graph • Click any node to inspect • Double-click to jump to research domain
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1.5 tracking-tight flex items-center gap-2">
            <span>Adaptive Ecological Systems Architecture</span>
          </h2>
        </div>

        {/* Quick-Jump Buttons: Hyperaccumulators, Bioelectronics, Restoration */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-neutral-400 font-bold hidden xl:inline">
            Direct Jump:
          </span>
          <button
            onClick={() => onNavigateTab('verified-science')}
            className="group flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-3 py-1.5 text-xs font-mono font-bold text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
            title="Jump directly to Verified Science & Hyperaccumulator Archive"
          >
            <Leaf className="h-3 w-3 text-emerald-400 group-hover:text-white" />
            <span>Hyperaccumulators</span>
            <ArrowRight className="h-3 w-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigateTab('active-experiments')}
            className="group flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-950/40 px-3 py-1.5 text-xs font-mono font-bold text-amber-300 hover:bg-amber-600 hover:text-white transition-all shadow-sm"
            title="Jump directly to Bioelectronics Lab & Active Experiments"
          >
            <Zap className="h-3 w-3 text-amber-400 group-hover:text-white" />
            <span>Bioelectronics</span>
            <ArrowRight className="h-3 w-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigateTab('field-sites')}
            className="group flex items-center gap-1.5 rounded-xl border border-teal-500/40 bg-teal-950/40 px-3 py-1.5 text-xs font-mono font-bold text-teal-300 hover:bg-teal-600 hover:text-white transition-all shadow-sm"
            title="Jump directly to Field Restoration & Mine Tailing Sites"
          >
            <Globe2 className="h-3 w-3 text-teal-400 group-hover:text-white" />
            <span>Restoration</span>
            <ArrowRight className="h-3 w-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Animation Toggle */}
          <button
            onClick={() => setIsAnimationActive(!isAnimationActive)}
            className={`flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-mono border transition-all ${
              isAnimationActive 
                ? 'bg-neutral-800 text-neutral-300 border-neutral-700' 
                : 'bg-neutral-900 text-neutral-500 border-neutral-800'
            }`}
            title="Toggle animated ion flux streams"
          >
            <Radio className={`h-3 w-3 ${isAnimationActive ? 'text-emerald-400 animate-pulse' : 'text-neutral-500'}`} />
            <span className="hidden sm:inline">Flux</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs font-mono">
        {/* Epistemic Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setFilterCategory('all')}
            className={`rounded-lg px-2.5 py-1 transition-all ${
              filterCategory === 'all'
                ? 'bg-neutral-700 text-white font-bold shadow'
                : 'bg-neutral-800/80 text-neutral-400 hover:text-neutral-200'
            }`}
          >
            All Nodes ({nodes.length})
          </button>
          <button
            onClick={() => setFilterCategory('verified')}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 transition-all ${
              filterCategory === 'verified'
                ? 'bg-emerald-600 text-white font-bold shadow'
                : 'bg-neutral-800/80 text-emerald-400 hover:bg-emerald-950/40'
            }`}
          >
            <span>🟢 Verified Science</span>
          </button>
          <button
            onClick={() => setFilterCategory('experiments')}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 transition-all ${
              filterCategory === 'experiments'
                ? 'bg-amber-600 text-white font-bold shadow'
                : 'bg-neutral-800/80 text-amber-400 hover:bg-amber-950/40'
            }`}
          >
            <span>🟡 Active Experiments</span>
          </button>
          <button
            onClick={() => setFilterCategory('emerging')}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 transition-all ${
              filterCategory === 'emerging'
                ? 'bg-blue-600 text-white font-bold shadow'
                : 'bg-neutral-800/80 text-blue-400 hover:bg-blue-950/40'
            }`}
          >
            <span>🔷 Emerging Tech</span>
          </button>
          <button
            onClick={() => setFilterCategory('future')}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 transition-all ${
              filterCategory === 'future'
                ? 'bg-purple-600 text-white font-bold shadow'
                : 'bg-neutral-800/80 text-purple-400 hover:bg-purple-950/40'
            }`}
          >
            <span>🟣 Future Concepts</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative min-w-[200px]">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search nodes or metrics..."
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950/80 pl-8 pr-3 py-1 text-xs text-neutral-200 placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-neutral-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Interactive SVG Canvas */}
      <div className="relative w-full rounded-2xl bg-neutral-950/90 border border-neutral-800 p-2 overflow-hidden shadow-inner select-none">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(#10b981 0.75px, transparent 0.75px)`,
            backgroundSize: '24px 24px'
          }} 
        />

        <svg 
          viewBox="0 0 1000 600" 
          className="w-full h-auto max-h-[540px] drop-shadow-lg"
          style={{ minHeight: '380px' }}
        >
          <defs>
            {/* Core Glow Filter */}
            <filter id={`${uniqueId}-glow`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Subtle Node Hover Glow */}
            <filter id={`${uniqueId}-hover-glow`} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient for radial linkages */}
            <linearGradient id={`${uniqueId}-coreGradient`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>

            <linearGradient id={`${uniqueId}-lineGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Orbit Rings around Central Core */}
          <circle
            cx={centralNode.x}
            cy={centralNode.y}
            r="160"
            fill="none"
            stroke="#10b981"
            strokeWidth="0.8"
            strokeDasharray="4 8"
            opacity="0.25"
          />
          <circle
            cx={centralNode.x}
            cy={centralNode.y}
            r="260"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="0.6"
            strokeDasharray="6 10"
            opacity="0.18"
          />

          {/* Secondary Interconnection Links (Cross-Domain Relationships) */}
          {secondaryLinks.map(([sourceId, targetId]) => {
            const source = nodes.find(n => n.id === sourceId);
            const target = nodes.find(n => n.id === targetId);
            if (!source || !target) return null;

            const isHighlighted = 
              (selectedNodeId === sourceId || selectedNodeId === targetId) ||
              (hoveredNodeId === sourceId || hoveredNodeId === targetId);

            const isDimmed = !isNodeFiltered(sourceId) || !isNodeFiltered(targetId);

            return (
              <g key={`secondary-${sourceId}-${targetId}`}>
                <line
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke={isHighlighted ? "#06b6d4" : "#334155"}
                  strokeWidth={isHighlighted ? "2" : "1"}
                  strokeDasharray="5 5"
                  opacity={isDimmed ? 0.08 : isHighlighted ? 0.75 : 0.25}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}

          {/* Primary Radial Linkages (Central Core to Nodes) */}
          {nodes.filter(n => n.id !== 'core').map(node => {
            const isSelected = selectedNodeId === node.id || selectedNodeId === 'core';
            const isHovered = hoveredNodeId === node.id;
            const isVisible = isNodeFiltered(node.id);
            const statusConfig = getStatusColor(node.epistemicStatus);

            return (
              <g key={`radial-link-${node.id}`}>
                {/* Base Link */}
                <line
                  x1={centralNode.x}
                  y1={centralNode.y}
                  x2={node.x}
                  y2={node.y}
                  stroke={isSelected || isHovered ? statusConfig.stroke : '#262626'}
                  strokeWidth={isSelected ? '2.5' : isHovered ? '2' : '1.2'}
                  opacity={!isVisible ? 0.1 : isSelected ? 0.85 : isHovered ? 0.7 : 0.35}
                  className="transition-all duration-300"
                />

                {/* Animated Signal Particle Flow traveling along link */}
                {isAnimationActive && isVisible && (
                  <circle
                    r={isSelected ? "3.5" : "2"}
                    fill={statusConfig.stroke}
                    opacity={isSelected ? 0.95 : 0.6}
                  >
                    <animate
                      attributeName="cx"
                      from={centralNode.x}
                      to={node.x}
                      dur={`${3 + (node.x % 3)}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      from={centralNode.y}
                      to={node.y}
                      dur={`${3 + (node.x % 3)}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Non-Core Domain Nodes */}
          {nodes.filter(n => n.id !== 'core').map(node => {
            const isSelected = selectedNodeId === node.id;
            const isHovered = hoveredNodeId === node.id;
            const isFiltered = isNodeFiltered(node.id);
            const statusConfig = getStatusColor(node.epistemicStatus);
            const isNeighborOfSelected = selectedNode.connectedNodeIds.includes(node.id);

            return (
              <g
                key={`node-${node.id}`}
                className="cursor-pointer group"
                opacity={!isFiltered ? 0.2 : 1}
                onClick={() => setSelectedNodeId(node.id)}
                onDoubleClick={() => onNavigateTab(node.targetTab)}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
              >
                {/* Highlight Ripple Ring on Selection */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.radius + 14}
                    fill="none"
                    stroke={statusConfig.stroke}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-spin-slow origin-center opacity-80"
                  />
                )}

                {/* Neighbor Indicator Halo */}
                {isNeighborOfSelected && !isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.radius + 6}
                    fill="none"
                    stroke={statusConfig.stroke}
                    strokeWidth="1"
                    strokeDasharray="2 4"
                    opacity="0.4"
                  />
                )}

                {/* Main Node Circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? node.radius + 4 : isHovered ? node.radius + 2 : node.radius}
                  fill={isSelected ? statusConfig.fill : 'rgba(15, 23, 42, 0.9)'}
                  stroke={statusConfig.stroke}
                  strokeWidth={isSelected ? '3' : isHovered ? '2.5' : '1.8'}
                  filter={isSelected || isHovered ? `url(#${uniqueId}-hover-glow)` : undefined}
                  className="transition-all duration-200"
                />

                {/* Inner Icon */}
                {renderNodeIcon(node.icon, node.x, node.y - 4, statusConfig.stroke)}

                {/* Short Monospace Badge Label inside node */}
                <text
                  x={node.x}
                  y={node.y + 16}
                  fill={statusConfig.text}
                  fontSize="8"
                  fontWeight="bold"
                  fontFamily="monospace"
                  textAnchor="middle"
                  letterSpacing="0.8"
                >
                  {node.shortLabel}
                </text>

                {/* Node Full Title Below */}
                <text
                  x={node.x}
                  y={node.y + node.radius + 15}
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="monospace"
                  textAnchor="middle"
                  className="drop-shadow-md select-none"
                >
                  {node.name}
                </text>

                {/* Epistemic Subtitle */}
                <text
                  x={node.x}
                  y={node.y + node.radius + 28}
                  fill="#94a3b8"
                  fontSize="9"
                  fontFamily="monospace"
                  textAnchor="middle"
                  className="select-none"
                >
                  {node.domainName}
                </text>

                {/* Interactive Tooltip on Hover */}
                {isHovered && (
                  <g transform={`translate(${node.x}, ${node.y - node.radius - 32})`}>
                    <rect
                      x="-80"
                      y="-16"
                      width="160"
                      height="24"
                      rx="6"
                      fill="#0f172a"
                      stroke={statusConfig.stroke}
                      strokeWidth="1.2"
                    />
                    <text
                      x="0"
                      y="0"
                      fill="#f8fafc"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="monospace"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      Double-click to open ↗
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Central Core Node: MS. HEAVY METAL LEAF */}
          <g
            className="cursor-pointer group"
            onClick={() => setSelectedNodeId('core')}
            onDoubleClick={() => onNavigateTab('project-vision')}
            onMouseEnter={() => setHoveredNodeId('core')}
            onMouseLeave={() => setHoveredNodeId(null)}
          >
            {/* Outer Pulsing Aura */}
            <circle
              cx={centralNode.x}
              cy={centralNode.y}
              r={selectedNodeId === 'core' ? "76" : "70"}
              fill="none"
              stroke="#34d399"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              className="animate-spin-slow origin-center opacity-70"
            />

            {/* Inner Core Disc */}
            <circle
              cx={centralNode.x}
              cy={centralNode.y}
              r={centralNode.radius}
              fill="rgba(6, 78, 59, 0.95)"
              stroke="#34d399"
              strokeWidth={selectedNodeId === 'core' ? "4" : "3"}
              filter={`url(#${uniqueId}-glow)`}
              className="transition-all duration-300 group-hover:scale-105"
            />

            {/* Central Bio-Icon */}
            {renderNodeIcon('core', centralNode.x, centralNode.y - 12, '#a7f3d0')}

            {/* Central Core Typography */}
            <text
              x={centralNode.x}
              y={centralNode.y + 12}
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              fontFamily="monospace"
              textAnchor="middle"
              letterSpacing="1"
            >
              MS. HEAVY METAL
            </text>
            <text
              x={centralNode.x}
              y={centralNode.y + 24}
              fill="#34d399"
              fontSize="12"
              fontWeight="extrabold"
              fontFamily="monospace"
              textAnchor="middle"
              letterSpacing="2"
            >
              LEAF
            </text>
            <text
              x={centralNode.x}
              y={centralNode.y + 36}
              fill="#6ee7b7"
              fontSize="7.5"
              fontFamily="monospace"
              textAnchor="middle"
              letterSpacing="1.2"
            >
              LIVING INTERFACE
            </text>
          </g>
        </svg>

        {/* Bottom Legend Overlay inside SVG card */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neutral-900 pt-3 px-2 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Verified Science</span>
            </span>
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span>Active Experiments</span>
            </span>
            <span className="flex items-center gap-1.5 text-sky-400">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              <span>Emerging Tech</span>
            </span>
            <span className="flex items-center gap-1.5 text-purple-400">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              <span>Future Concepts</span>
            </span>
          </div>
          <span className="text-neutral-500 hidden sm:inline">
            Double-click any node to jump directly to its domain
          </span>
        </div>
      </div>

      {/* Selected Node Inspector & Direct Action Panel */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-850 pb-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              {/* Epistemic Level Badge */}
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold border ${getStatusColor(selectedNode.epistemicStatus).badgeBg} ${getStatusColor(selectedNode.epistemicStatus).badgeText} ${getStatusColor(selectedNode.epistemicStatus).badgeBorder}`}>
                {getStatusColor(selectedNode.epistemicStatus).label}
              </span>
              <span className="text-xs text-neutral-500 font-mono">•</span>
              <h3 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
                <span>{selectedNode.name}</span>
                <span className="text-xs text-neutral-400 font-normal">({selectedNode.domainName})</span>
              </h3>
            </div>
            <p className="text-xs font-mono text-emerald-400">
              {selectedNode.tagline}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {/* Ask AI about this node */}
            <button
              onClick={() => onNavigateTab('ai-assistant')}
              className="flex items-center gap-1.5 rounded-xl border border-neutral-700 bg-neutral-900/90 px-3.5 py-2 text-xs font-mono text-neutral-300 hover:border-emerald-500 hover:text-white transition-all shadow-sm"
              title={`Ask AI Co-Scientist questions regarding ${selectedNode.name}`}
            >
              <Bot className="h-3.5 w-3.5 text-emerald-400" />
              <span>Ask Co-Scientist</span>
            </button>

            {/* Jump to Domain Module */}
            <button
              onClick={() => onNavigateTab(selectedNode.targetTab)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-xs font-mono font-bold text-white hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md group"
            >
              <span>Explore {selectedNode.targetDomainLabel}</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Detailed Description and Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-[11px] font-mono uppercase font-bold text-neutral-400">
              Domain Function & Biophysical Architecture
            </h4>
            <p className="text-neutral-300 leading-relaxed">
              {selectedNode.description}
            </p>
            <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5 pt-1">
              <span className="font-bold text-neutral-300">Validation Proof:</span>
              <span className="text-neutral-400 italic">{selectedNode.benchmarkProof}</span>
            </div>
          </div>

          {/* Key Metric & Neighbors */}
          <div className="rounded-xl border border-neutral-850 bg-neutral-900/70 p-3.5 space-y-3">
            <div>
              <div className="text-[10px] font-mono uppercase font-bold text-cyan-400">
                Primary Benchmark
              </div>
              <div className="text-xs font-mono font-bold text-white mt-0.5">
                {selectedNode.keyMetric}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase font-bold text-neutral-400 mb-1.5">
                Connected Systems Links ({selectedNode.connectedNodeIds.length})
              </div>
              <div className="flex flex-wrap gap-1">
                {selectedNode.connectedNodeIds.map(neighborId => {
                  const neighbor = nodes.find(n => n.id === neighborId);
                  if (!neighbor) return null;
                  return (
                    <button
                      key={neighborId}
                      onClick={() => setSelectedNodeId(neighborId)}
                      className="rounded-md border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-[10px] font-mono text-neutral-300 hover:border-emerald-500 hover:text-emerald-300 transition-colors"
                    >
                      {neighbor.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
