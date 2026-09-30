import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Maximize2, 
  Play, 
  Pause, 
  RotateCcw,
  Zap,
  Info,
  ShieldCheck,
  ChevronRight,
  Droplet
} from 'lucide-react';
import { BioMoldLayer, SensorItem, GrowthTimelineStage } from '../types';

export const MoldGrowthLab: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<number>(30);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedSensor, setSelectedSensor] = useState<string | null>('sensor-1');

  // Layer toggles
  const [layers, setLayers] = useState<Record<string, boolean>>({
    mold: true,
    electronics: true,
    plant: true,
    metallicVeins: true,
    microfluidics: true,
    faraday: true,
  });

  const timelineStages: GrowthTimelineStage[] = [
    {
      day: 0,
      stageName: 'Day 0: Precision Mold Preparation & Seed Seeding',
      plantState: 'Un-germinated hyperaccumulator seed (Noccaea or Pycnandra embryo) placed at apical germination chamber.',
      moldInteraction: 'Gold interdigitated microelectrodes and capacitive carbon traces are pre-cast inside the flexible PDMS mold. Zero mechanical surgery.',
      electricalContinuity: 0,
      livingViability: 100,
    },
    {
      day: 7,
      stageName: 'Day 7: Radicle Emergence & Hydrodynamic Guidance',
      plantState: 'Primary radicle emerges and elongates down the micro-grooved guide channel, drawn by capillary nutrient wicking.',
      moldInteraction: 'Negative pressure capillary slots direct root growth directly toward gold sensor arrays via natural thigmotropism.',
      electricalContinuity: 15,
      livingViability: 100,
    },
    {
      day: 18,
      stageName: 'Day 18: Zero-Incision Sensor Encapsulation',
      plantState: 'Dense root hairs and epidermal cell walls naturally envelop electrode pads. Epidermal pectin seals contacts seamlessly.',
      moldInteraction: 'Zero mechanical incisions; no wound callose or oxidative necrosis occurs. Contact resistance plummets by 96%.',
      electricalContinuity: 62,
      livingViability: 99,
    },
    {
      day: 30,
      stageName: 'Day 30: Vascular Xylem Integration & Metal Flux',
      plantState: 'High-affinity P-type ATPase transporters (HMA4) pump nickel and zinc ions up the central vascular bundle.',
      moldInteraction: 'Ionic sap flow couples directly with pre-cast micro-electrodes, turning stem into an organic biological transistor (OECT).',
      electricalContinuity: 88,
      livingViability: 98,
    },
    {
      day: 45,
      stageName: 'Day 45: Mature Cyborg Bio-Bot with Conductive Matrix',
      plantState: 'Extracellular apoplastic matrix saturates with metallic precipitate (~78-80% metal), while symplastic core remains alive.',
      moldInteraction: 'Bio-bot acts as a living environmental sensing node, drawing toxic heavy metals from soil while transmitting impedance telemetry.',
      electricalContinuity: 99,
      livingViability: 96,
    }
  ];

  const sensors: SensorItem[] = [
    {
      id: 'sensor-1',
      name: 'Interdigitated Gold Microelectrode (IDA-15)',
      category: 'Electrode',
      material: 'Au (Gold) on Kapton Flex Substrate (15μm pitch)',
      moldPlacement: 'Pre-cast along the primary stem groove',
      inGrowthMechanism: 'Roots and xylem bundle wrap the gold pads; epidermal pectin bonds to gold without callose scarring.',
      x: 48,
      y: 52,
      status: currentDay >= 18 ? 'Encapsulated' : 'Ready',
    },
    {
      id: 'sensor-2',
      name: 'Capacitive Graphene Leaf Sensor',
      category: 'Capacitive Wick',
      material: 'Laser-Induced Porous Graphene (LIG)',
      moldPlacement: 'Cast in the upper foliage wing mold',
      inGrowthMechanism: 'Mesophyll leaf lamina expands into the mold cavity, intimately kissing the graphene trace.',
      x: 74,
      y: 28,
      status: currentDay >= 30 ? 'Active' : 'Ready',
    },
    {
      id: 'sensor-3',
      name: 'Hydrophilic Capillary Nutrient Conduit',
      category: 'Microfluidics',
      material: 'Oxygen-plasma treated PDMS (Contact angle 18°)',
      moldPlacement: 'Lower root guidance manifold',
      inGrowthMechanism: 'Micro-capillary negative pressure directs nutrient flow and guides root hairs via electrotaxis.',
      x: 32,
      y: 78,
      status: 'Active',
    },
    {
      id: 'sensor-4',
      name: 'Vascular OECT Organic Gate Pad',
      category: 'Power Harvester',
      material: 'PEDOT:PSS Organic Ionic Conductor',
      moldPlacement: 'Central bifurcation chamber',
      inGrowthMechanism: 'Transpirational sap ion flux directly modulates channel transconductance (12 mS).',
      x: 50,
      y: 38,
      status: currentDay >= 30 ? 'Active' : 'Ready',
    },
    {
      id: 'sensor-5',
      name: 'Grounded Faraday Copper Mesh Enclosure',
      category: 'Electrode',
      material: '100-Mesh Woven Copper Lattice (<5Ω to Earth Ground)',
      moldPlacement: 'Outer boundary enclosing the entire pod perimeter',
      inGrowthMechanism: 'Surrounds and isolates the plant from ambient 50/60Hz electromagnetic fields, grow light noise, and static. Passive sensing (<2 nA) ensures zero voltage harm.',
      x: 20,
      y: 12,
      status: 'Active',
    }
  ];

  // Get active stage details based on slider
  const activeStage = timelineStages.reduce((prev, curr) => {
    return currentDay >= curr.day ? curr : prev;
  }, timelineStages[0]);

  const toggleLayer = (key: string) => {
    setLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const selectedSensorData = sensors.find(s => s.id === selectedSensor);

  return (
    <div className="space-y-6">
      {/* Intro Overview Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40 p-6 shadow-xl">
        <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-mono font-medium text-emerald-400 border border-emerald-500/40">
                <Sparkles className="h-3 w-3" />
                Zero-Installation Paradigm
              </span>
              <span className="text-xs text-neutral-400 font-mono">Patent-Free Open Hardware</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Bio-Mold In-Growth Laboratory
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-neutral-300">
              Traditional plant robotics drill, pierce, or surgically insert wires—triggering necrotic wound response and scar callose that kills electrical contact. In <strong className="text-emerald-300">Ms. Heavy Metal Leaf</strong>, all non-growable electronics (electrodes, wicks, conduits) are placed into the silicone mold <span className="underline decoration-emerald-400">before</span> germination. The hyperaccumulator plant grows <em className="text-emerald-300 font-semibold">into</em> the mold, naturally encapsulating the components with zero surgery.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3 text-center min-w-[120px]">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block">Surgical Incisions</span>
              <span className="text-xl font-bold font-mono text-emerald-400">0 (Zero)</span>
              <span className="text-[10px] text-emerald-500/80 block mt-0.5">Zero Callose Wounds</span>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3 text-center min-w-[120px]">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block">Contact Impedance</span>
              <span className="text-xl font-bold font-mono text-cyan-400">4.8 kΩ</span>
              <span className="text-[10px] text-cyan-500/80 block mt-0.5">25x Lower Than Needle</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Mold CAD Viewport & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive CAD Schematic Viewport */}
        <div className="lg:col-span-8 flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/90 shadow-2xl overflow-hidden">
          {/* Viewport Top Bar */}
          <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-mono font-semibold uppercase text-neutral-200">
                Bio-Mold Cross-Section & In-Growth Simulation
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                Day {currentDay} / 45
              </span>
            </div>

            {/* Layer Visibility Toggles */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => toggleLayer('mold')}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  layers.mold ? 'bg-neutral-800 text-neutral-200 border border-neutral-700' : 'bg-neutral-900/50 text-neutral-600 line-through'
                }`}
                title="Toggle PDMS mold geometry"
              >
                Mold
              </button>
              <button
                onClick={() => toggleLayer('electronics')}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  layers.electronics ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-neutral-900/50 text-neutral-600 line-through'
                }`}
                title="Toggle pre-cast gold sensors"
              >
                Sensors
              </button>
              <button
                onClick={() => toggleLayer('plant')}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  layers.plant ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-neutral-900/50 text-neutral-600 line-through'
                }`}
                title="Toggle growing plant tissue"
              >
                Plant Core
              </button>
              <button
                onClick={() => toggleLayer('metallicVeins')}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  layers.metallicVeins ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-neutral-900/50 text-neutral-600 line-through'
                }`}
                title="Toggle conductive metal percolation matrix"
              >
                Metallic Matrix
              </button>
              <button
                onClick={() => toggleLayer('faraday')}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  layers.faraday ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' : 'bg-neutral-900/50 text-neutral-600 line-through'
                }`}
                title="Toggle Grounded Faraday Shield (Zero Electrical Fields)"
              >
                ⚡ Faraday Shield
              </button>
            </div>
          </div>

          {/* Interactive SVG Schematic Canvas */}
          <div className="relative h-[420px] w-full bg-grid-cyber bg-neutral-950 flex items-center justify-center p-4 overflow-hidden select-none">
            {/* Ambient biological glow based on growth */}
            <div 
              className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, ${0.05 + (currentDay / 45) * 0.15}) 0%, transparent 70%)`
              }}
            />

            <svg viewBox="0 0 600 400" className="w-full h-full max-h-[400px]">
              <defs>
                {/* Gradients */}
                <linearGradient id="pdmsMoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="plantStemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#065f46" />
                  <stop offset="60%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>

                <linearGradient id="metalPercolationGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>

                <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Grounded Faraday Mesh Pattern */}
                <pattern id="faradayMeshPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f59e0b" strokeWidth="0.75" strokeOpacity="0.35" />
                </pattern>
              </defs>

              {/* LAYER 0: GROUNDED FARADAY SHIELD ENCLOSURE (Surrounds & Deflects Ambient Fields) */}
              {layers.faraday && (
                <g id="layer-faraday">
                  <rect x="95" y="22" width="410" height="356" rx="28" fill="url(#faradayMeshPattern)" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3" strokeOpacity="0.8" />
                  {/* Earth Ground Symbol */}
                  <g transform="translate(105, 360)">
                    <line x1="0" y1="0" x2="16" y2="0" stroke="#f59e0b" strokeWidth="2" />
                    <line x1="3" y1="4" x2="13" y2="4" stroke="#f59e0b" strokeWidth="1.5" />
                    <line x1="6" y1="8" x2="10" y2="8" stroke="#f59e0b" strokeWidth="1" />
                    <text x="22" y="5" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">EARTH GROUND (&lt;5Ω)</text>
                  </g>
                  <text x="105" y="38" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    ⚡ GROUNDED FARADAY ENCLOSURE (AMBIENT E-FIELD = 0.00 V/m)
                  </text>
                </g>
              )}

              {/* LAYER 1: MOLD HOUSING (Flexible PDMS silicone outer shell with microchannels) */}
              {layers.mold && (
                <g id="layer-mold" className="transition-opacity duration-300">
                  {/* Mold Chamber Body */}
                  <rect x="120" y="40" width="360" height="320" rx="24" fill="url(#pdmsMoldGrad)" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Internal Guided Cavity (Negative space where seedling grows) */}
                  <path
                    d="M 280 60 C 260 90, 240 140, 230 190 C 220 250, 190 300, 170 340 L 430 340 C 410 300, 380 250, 370 190 C 360 140, 340 90, 320 60 Z"
                    fill="#030712"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />

                  {/* Micro-Capillary Guide Ribs */}
                  <path d="M 240 220 Q 270 240 300 240" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
                  <path d="M 360 220 Q 330 240 300 240" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
                  <path d="M 210 280 Q 260 290 300 295" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
                  <path d="M 390 280 Q 340 290 300 295" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
                  
                  {/* Mold Label */}
                  <text x="135" y="65" fill="#64748b" fontSize="10" fontFamily="monospace">PDMS BIO-MOLD v2.4 (PLASMA HYDROPHILIZED)</text>
                  <text x="135" y="80" fill="#475569" fontSize="9" fontFamily="monospace">THIGMOTROPIC ROOT CONDUITS</text>
                </g>
              )}

              {/* LAYER 2: PRE-CAST ELECTRONICS (Gold electrodes, Kapton flex, graphene wicks) */}
              {layers.electronics && (
                <g id="layer-electronics">
                  {/* Central Stem Interdigitated Microelectrode Array */}
                  <rect x="285" y="180" width="30" height="50" rx="3" fill="#78350f" stroke="#f59e0b" strokeWidth="1.5" />
                  {/* Interdigitated fingers */}
                  <line x1="287" y1="188" x2="308" y2="188" stroke="#fbbf24" strokeWidth="1.5" />
                  <line x1="292" y1="196" x2="313" y2="196" stroke="#fbbf24" strokeWidth="1.5" />
                  <line x1="287" y1="204" x2="308" y2="204" stroke="#fbbf24" strokeWidth="1.5" />
                  <line x1="292" y1="212" x2="313" y2="212" stroke="#fbbf24" strokeWidth="1.5" />
                  <line x1="287" y1="220" x2="308" y2="220" stroke="#fbbf24" strokeWidth="1.5" />

                  {/* Kapton Flex busbar leading out to telemetry interface */}
                  <path d="M 315 205 L 460 205 L 460 170" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="460" cy="170" r="5" fill="#f59e0b" filter="url(#glowGold)" />
                  <text x="470" y="174" fill="#fbbf24" fontSize="10" fontFamily="monospace">Ohmic Busbar (4.8 kΩ)</text>

                  {/* Foliar Capacitive Graphene Wick (Right Wing) */}
                  <path d="M 370 120 Q 420 100 440 120 Q 430 145 370 140 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="415" y="98" fill="#38bdf8" fontSize="9" fontFamily="monospace">Graphene Wick</text>

                  {/* Root Guidance Electrodes (Bottom Left) */}
                  <rect x="180" y="290" width="35" height="15" rx="2" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.2" />
                  <line x1="185" y1="297" x2="210" y2="297" stroke="#22d3ee" strokeWidth="1.5" />

                  {/* Root Guidance Electrodes (Bottom Right) */}
                  <rect x="385" y="290" width="35" height="15" rx="2" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.2" />
                  <line x1="390" y1="297" x2="415" y2="297" stroke="#22d3ee" strokeWidth="1.5" />
                </g>
              )}

              {/* LAYER 3: LIVING PLANT TISSUE (Grows according to Day slider) */}
              {layers.plant && (
                <g id="layer-plant" className="transition-all duration-500">
                  {/* Seed / Apical Meristem */}
                  <circle cx="300" cy="70" r={currentDay === 0 ? "7" : "5"} fill={currentDay === 0 ? "#854d0e" : "#10b981"} stroke="#34d399" strokeWidth="1.5" />

                  {/* Seedling Stem (Grows longer with Day) */}
                  {currentDay > 3 && (
                    <path
                      d={`M 300 75 Q 302 130 300 ${Math.min(75 + currentDay * 4.5, 230)}`}
                      fill="none"
                      stroke="url(#plantStemGrad)"
                      strokeWidth={Math.min(4 + currentDay * 0.15, 12)}
                      strokeLinecap="round"
                    />
                  )}

                  {/* Foliar Lamina / Leaves (Form around day 12+) */}
                  {currentDay >= 12 && (
                    <g opacity={Math.min((currentDay - 12) / 15, 1)}>
                      {/* Left Leaf */}
                      <path
                        d="M 298 120 C 260 100, 220 110, 210 135 C 235 150, 275 145, 298 135 Z"
                        fill="#059669"
                        stroke="#34d399"
                        strokeWidth="1.5"
                      />
                      {/* Right Leaf (In contact with Graphene Wick) */}
                      <path
                        d="M 302 120 C 350 95, 410 105, 435 125 C 410 145, 355 145, 302 135 Z"
                        fill="#059669"
                        stroke="#34d399"
                        strokeWidth="1.5"
                      />
                    </g>
                  )}

                  {/* Root System (Radicle emerges day 5, branches fill mold day 18+) */}
                  {currentDay >= 7 && (
                    <g opacity={Math.min((currentDay - 5) / 10, 1)}>
                      {/* Main Taproot */}
                      <path
                        d={`M 300 220 Q 295 270 300 ${Math.min(220 + (currentDay - 7) * 3, 330)}`}
                        fill="none"
                        stroke="#059669"
                        strokeWidth={Math.min(3 + currentDay * 0.08, 6)}
                        strokeLinecap="round"
                      />
                      {/* Left Lateral Root - Engulfs Left Guidance Electrode */}
                      {currentDay >= 15 && (
                        <path
                          d={`M 298 240 Q 250 260 195 ${Math.min(260 + (currentDay - 15) * 2.5, 300)}`}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      )}
                      {/* Right Lateral Root - Engulfs Right Guidance Electrode */}
                      {currentDay >= 15 && (
                        <path
                          d={`M 302 240 Q 350 260 405 ${Math.min(260 + (currentDay - 15) * 2.5, 300)}`}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      )}

                      {/* Micro Root-Hairs encapsulating the Gold IDA Electrode directly without wounding! */}
                      {currentDay >= 18 && (
                        <g opacity="0.9">
                          <line x1="288" y1="190" x2="298" y2="192" stroke="#6ee7b7" strokeWidth="1" />
                          <line x1="288" y1="200" x2="299" y2="201" stroke="#6ee7b7" strokeWidth="1" />
                          <line x1="288" y1="210" x2="298" y2="211" stroke="#6ee7b7" strokeWidth="1" />
                          <line x1="312" y1="192" x2="302" y2="193" stroke="#6ee7b7" strokeWidth="1" />
                          <line x1="312" y1="205" x2="302" y2="204" stroke="#6ee7b7" strokeWidth="1" />
                        </g>
                      )}
                    </g>
                  )}
                </g>
              )}

              {/* LAYER 4: METALLIC VEINS & PERCOLATION FLOW (Cyan/Gold veins when metal uptake is active) */}
              {layers.metallicVeins && currentDay >= 20 && (
                <g id="layer-metal" opacity={Math.min((currentDay - 20) / 20, 1)}>
                  {/* High Metal Sap Flux Streams */}
                  <path
                    d="M 300 320 L 300 120"
                    fill="none"
                    stroke="url(#metalPercolationGrad)"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                    filter="url(#glowCyan)"
                  />
                  {/* Foliar metallic branching */}
                  <path
                    d="M 300 130 Q 360 115 425 125"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                  <path
                    d="M 300 130 Q 240 115 220 135"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                </g>
              )}

              {/* INTERACTIVE SENSOR HOTSPOTS */}
              {sensors.map((s) => (
                <g 
                  key={s.id} 
                  className="cursor-pointer group"
                  onClick={() => setSelectedSensor(s.id)}
                >
                  <circle
                    cx={(s.x / 100) * 600}
                    cy={(s.y / 100) * 400}
                    r={selectedSensor === s.id ? "10" : "7"}
                    fill={selectedSensor === s.id ? "#10b981" : "#f59e0b"}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    className="transition-all duration-200 hover:scale-125"
                  />
                  <circle
                    cx={(s.x / 100) * 600}
                    cy={(s.y / 100) * 400}
                    r="15"
                    fill="none"
                    stroke={selectedSensor === s.id ? "#10b981" : "#f59e0b"}
                    strokeWidth="1"
                    opacity="0.4"
                    className="animate-ping"
                  />
                </g>
              ))}
            </svg>

            {/* Zero-Installation Badge Overlay */}
            <div className="absolute bottom-3 left-3 rounded-lg border border-emerald-500/30 bg-neutral-900/90 backdrop-blur-md px-3 py-1.5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-neutral-300">Bio-Incision Wound Level:</span>
                <span className="text-emerald-400 font-bold">0.00% (Intact Pectin Seal)</span>
              </div>
            </div>
          </div>

          {/* Timeline Scrub Controls & Stage Information */}
          <div className="border-t border-neutral-800 bg-neutral-950 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                  title={isPlaying ? "Pause timeline" : "Play in-growth timelapse"}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setCurrentDay(0)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white transition-colors"
                  title="Reset to Day 0 Seedling"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <span className="text-xs font-mono text-neutral-300 font-semibold">
                  Growth Timeline: Day {currentDay} of 45
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-neutral-400">
                  Electrical Coupling: <strong className="text-amber-400">{activeStage.electricalContinuity}%</strong>
                </span>
                <span className="text-neutral-400">
                  Tissue Viability: <strong className="text-emerald-400">{activeStage.livingViability}%</strong>
                </span>
              </div>
            </div>

            {/* Interactive Slider */}
            <input
              type="range"
              min="0"
              max="45"
              step="1"
              value={currentDay}
              onChange={(e) => setCurrentDay(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
            />

            {/* Stage Quick Jump Buttons */}
            <div className="mt-3 grid grid-cols-5 gap-2 text-center">
              {timelineStages.map((stage) => (
                <button
                  key={stage.day}
                  onClick={() => setCurrentDay(stage.day)}
                  className={`rounded border px-2 py-1 text-[11px] font-mono transition-all ${
                    currentDay === stage.day
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300 font-bold'
                      : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                  }`}
                >
                  Day {stage.day}
                </button>
              ))}
            </div>

            {/* Active Stage Narration Card */}
            <div className="mt-3 rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-3">
              <h4 className="text-xs font-bold text-emerald-300 flex items-center gap-1.5 font-mono">
                <ChevronRight className="h-3.5 w-3.5 text-emerald-400" />
                {activeStage.stageName}
              </h4>
              <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                {activeStage.plantState}
              </p>
              <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-amber-300/90 font-mono">
                <span className="text-neutral-500">MOLD INTERFACE:</span>
                <span>{activeStage.moldInteraction}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Selected Component Inspector & Zero-Installation Science */}
        <div className="lg:col-span-4 space-y-6">
          {/* Selected Component Inspector Card */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                  Component Inspector
                </h3>
              </div>
              <span className="rounded bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-400">
                Click map node
              </span>
            </div>

            {selectedSensorData ? (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      {selectedSensorData.category}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-medium ${
                      selectedSensorData.status === 'Encapsulated' || selectedSensorData.status === 'Active'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {selectedSensorData.status}
                    </span>
                  </div>
                  <h4 className="mt-1 text-base font-bold text-white">
                    {selectedSensorData.name}
                  </h4>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-3 space-y-2 text-xs">
                  <div>
                    <span className="text-neutral-500 font-mono text-[10px] block">MATERIAL / COMPOSITION:</span>
                    <span className="text-neutral-200 font-medium">{selectedSensorData.material}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 font-mono text-[10px] block">MOLD PRE-INSTALLATION:</span>
                    <span className="text-amber-300/90 font-mono text-[11px]">{selectedSensorData.moldPlacement}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 font-mono text-[10px] block">ZERO-INCISION IN-GROWTH:</span>
                    <span className="text-emerald-300/90 leading-relaxed text-[11px]">{selectedSensorData.inGrowthMechanism}</span>
                  </div>
                </div>

                <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/40 p-3 text-xs text-neutral-300 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    Because this component is pre-cast, the seedling conforms its epidermal wax and pectin layer around the trace during expansion, resulting in a hermetic biological seal.
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-xs text-neutral-400">Select any marker on the mold schematic to inspect its integration kinetics.</p>
            )}
          </div>

          {/* Cleanroom Standard Operating Procedure (SOP) Checklist */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2 mb-3">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Cleanroom In-Growth Protocol (SOP-01)
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold font-mono text-emerald-400 border border-emerald-500/40">1</span>
                <div>
                  <h5 className="font-semibold text-neutral-200">Mold Degassing & Oxygen Plasma</h5>
                  <p className="text-neutral-400 text-[11px]">Expose PDMS cavity to air plasma for 90s (100W) to reduce contact angle to 18°, ensuring even capillary wicking.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold font-mono text-emerald-400 border border-emerald-500/40">2</span>
                <div>
                  <h5 className="font-semibold text-neutral-200">Sensor Matrix Alignment</h5>
                  <p className="text-neutral-400 text-[11px]">Seat gold microelectrode flex pads into mold locator pins before casting 2% agar-gel nutrient bed.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold font-mono text-emerald-400 border border-emerald-500/40">3</span>
                <div>
                  <h5 className="font-semibold text-neutral-200">Seedling Germination & Auxin Pacing</h5>
                  <p className="text-neutral-400 text-[11px]">Introduce scarified *Noccaea* or *Pycnandra* seed; auxin gradient (10nM IAA) stimulates downward thigmotropic tracking.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold font-mono text-emerald-400 border border-emerald-500/40">4</span>
                <div>
                  <h5 className="font-semibold text-neutral-200">Heavy Metal Nutrient Induction</h5>
                  <p className="text-neutral-400 text-[11px]">Stepwise ramp from 20mM to 150mM nickel citrate over 14 days, triggering apoplastic metal saturation without shock.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
