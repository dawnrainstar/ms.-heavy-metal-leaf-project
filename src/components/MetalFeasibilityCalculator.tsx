import React, { useState } from 'react';
import { 
  Activity, 
  Zap, 
  ShieldCheck, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  Info,
  Atom,
  Flame,
  ArrowRight
} from 'lucide-react';
import { FeasibilityModelResult } from '../types';

export const MetalFeasibilityCalculator: React.FC = () => {
  const [metalPercent, setMetalPercent] = useState<number>(78); // Default to near 80%

  // Compute biophysical parameters based on metal percentage
  const calculateBiophysics = (percent: number): FeasibilityModelResult => {
    let symplastic = 0;
    let apoplastic = 0;
    let viability = 100;
    let conductivity = 0.05; // baseline low plant conductivity in S/m
    let percolation = false;
    let transpiration = 100;
    let modulus = 0.8; // GPa baseline cellulose
    let classification: FeasibilityModelResult['classification'] = 'Natural Metallophyte';
    let explanation = '';

    if (percent <= 25.7) {
      // Natural hyperaccumulator range (Pycnandra acuminata max is 25.7%)
      symplastic = percent * 0.85;
      apoplastic = percent * 0.15;
      viability = 98 - (percent * 0.08);
      conductivity = 0.05 + (percent * 0.18);
      transpiration = 100 - (percent * 0.2);
      modulus = 0.8 + (percent * 0.05);
      percolation = false;
      classification = percent <= 3 ? 'Natural Metallophyte' : 'Chelated Hybrid';
      explanation = `Natural range. In wild plants like Pycnandra acuminata (25.7% Ni), metal is held safely inside vacuolar tonoplasts with citric acid chelation. Viability is peak, but electrical percolation has not yet occurred.`;
    } else if (percent <= 75) {
      // Enhanced engineered zone
      symplastic = 24.5; // caps at safe physiological limit
      apoplastic = percent - 24.5;
      viability = 96 - ((percent - 25.7) * 0.18);
      conductivity = 5 + Math.pow((percent - 25.7) / 10, 2.4);
      transpiration = 95 - ((percent - 25.7) * 0.35);
      modulus = 2.1 + ((percent - 25.7) * 0.12);
      percolation = percent >= 70;
      classification = 'Chelated Hybrid';
      explanation = `Symplastic core remains at a safe 24.5% saturation. Metal begins heavily precipitating into apoplastic xylem cell walls, significantly boosting structural stiffness and electrical conductivity.`;
    } else if (percent <= 82) {
      // The Ms. Heavy Metal Leaf Sweet Spot: 76% - 82%
      symplastic = 25.0; // max safe vacuole tolerance
      apoplastic = percent - 25.0; // 51% to 57% apoplastic crust
      viability = 92 - ((percent - 75) * 1.2); // Still healthy ~84-90% viability!
      conductivity = 120 + Math.pow((percent - 70), 3.2) * 8; // Surges to 800+ S/m!
      transpiration = 78 - ((percent - 75) * 1.8); // Adequate for fluid flow
      modulus = 8.5 + ((percent - 75) * 0.9); // Stiff structural cyborg lamina
      percolation = true;
      classification = 'Percolation Bio-Bot';
      explanation = `THE MS. HEAVY METAL LEAF BREAKTHROUGH: At ~78-82% dry metal mass, the apoplastic cellulose fibrils reach Kirkpatrick continuum percolation (~16% vol. fraction). Ohmic metallic conduction surges across the leaf, forming an organic circuit board while living chloroplasts underneath keep transpiring!`;
    } else if (percent <= 86) {
      // Toxicity threshold
      symplastic = 26.5;
      apoplastic = percent - 26.5;
      viability = 75 - ((percent - 82) * 8.5);
      conductivity = 1850;
      transpiration = 50 - ((percent - 82) * 8);
      modulus = 15.0;
      percolation = true;
      classification = 'Toxicity Threshold';
      explanation = `Critical boundary: Apoplastic mineral deposits begin exerting compressive physical pressure onto cell membranes. Chloroplast ATP synthesis declines due to reduced light penetration.`;
    } else {
      // Cellular plasmolysis
      symplastic = 28.0;
      apoplastic = percent - 28.0;
      viability = Math.max(10, 40 - ((percent - 86) * 12));
      conductivity = 2200;
      transpiration = 15;
      modulus = 18.5;
      percolation = true;
      classification = 'Cellular Plasmolysis';
      explanation = `Extreme excess: Metal crystals rupture plasma membranes, causing cytoplasmic leakage and leaf senescence. Not viable long-term.`;
    }

    return {
      metalPercent: percent,
      symplasticCorePercent: Number(symplastic.toFixed(1)),
      apoplasticMatrixPercent: Number(apoplastic.toFixed(1)),
      tissueViability: Math.max(5, Number(viability.toFixed(1))),
      conductivitySm: Number(conductivity.toFixed(1)),
      percolationThresholdReached: percolation,
      transpirationRetention: Math.max(0, Number(transpiration.toFixed(1))),
      flexuralModulusGPa: Number(modulus.toFixed(1)),
      classification,
      explanation,
      epistemicStatus: percent <= 25.7 ? 'PROVEN_FACT' : 'THEORETICAL',
    };
  };

  const metrics = calculateBiophysics(metalPercent);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-amber-950/40 p-6 shadow-xl">
        <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-mono font-medium text-amber-300 border border-amber-500/40">
                <Atom className="h-3 w-3" />
                The 80% Biophysical Inquiry
              </span>
              <span className="text-xs text-neutral-400 font-mono">Kirkpatrick Continuum Percolation Model</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              The 80% Metal Feasibility & Cellular Limit Analyzer
            </h2>
            <p className="mt-1 max-w-3xl text-sm text-neutral-300">
              <strong className="text-amber-300">Can a plant really be ~80% metal and still be alive?</strong> In wild nature, plants cap at ~25.7% (Pycnandra blue latex) because free metal ions in living cytoplasm cause oxidative death. Ms. Heavy Metal Leaf solves this via <strong className="text-emerald-400">Dual-Compartment Partitioning</strong>: keeping the living core at a safe 25% vacuolar saturation, while precipitating 55% metallic crust in the non-living extracellular apoplast.
            </p>
          </div>

          <div className="rounded-xl border border-amber-500/40 bg-amber-950/40 p-4 text-center min-w-[140px] shrink-0">
            <span className="text-[10px] font-mono uppercase text-amber-300/80 block">Current Metal Density</span>
            <span className="text-3xl font-extrabold font-mono text-amber-400">{metalPercent}%</span>
            <span className="text-[10px] font-mono text-neutral-300 block mt-1">Dry Weight Bio-Ore</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Workspace: Slider & Dual-Compartment Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Slider & Live Calculated Metrics */}
        <div className="lg:col-span-7 space-y-6">
          {/* Metal Concentration Slider Card */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  <Activity className="h-4 w-4 text-amber-400" />
                  Heavy Metal Dry-Weight Concentration Slider
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Adjust target metal content to observe cellular viability vs. electrical conductivity.
                </p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-mono font-bold ${
                metrics.classification === 'Percolation Bio-Bot'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : metrics.classification === 'Toxicity Threshold' || metrics.classification === 'Cellular Plasmolysis'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}>
                {metrics.classification}
              </span>
            </div>

            {/* Slider */}
            <div className="space-y-3">
              <input
                type="range"
                min="1"
                max="90"
                step="1"
                value={metalPercent}
                onChange={(e) => setMetalPercent(Number(e.target.value))}
                className="w-full h-3 accent-amber-500 cursor-pointer bg-neutral-800 rounded-lg appearance-none"
              />

              {/* Reference Benchmarks on Slider */}
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 px-1">
                <button 
                  onClick={() => setMetalPercent(1)} 
                  className={`hover:text-emerald-400 ${metalPercent === 1 ? 'text-emerald-400 font-bold' : ''}`}
                >
                  1% Normal Flora
                </button>
                <button 
                  onClick={() => setMetalPercent(25)} 
                  className={`hover:text-cyan-400 ${metalPercent === 25 ? 'text-cyan-400 font-bold' : ''}`}
                >
                  25.7% Pycnandra (Nature's Max)
                </button>
                <button 
                  onClick={() => setMetalPercent(80)} 
                  className={`hover:text-amber-400 ${metalPercent === 80 ? 'text-amber-400 font-bold ring-1 ring-amber-500/40 px-1 rounded' : ''}`}
                >
                  80% Ms. Heavy Metal Leaf
                </button>
                <button 
                  onClick={() => setMetalPercent(88)} 
                  className={`hover:text-rose-400 ${metalPercent === 88 ? 'text-rose-400 font-bold' : ''}`}
                >
                  88% Necrosis
                </button>
              </div>
            </div>

            {/* Scientific Explanation Box with Explicit Epistemic Clarity */}
            <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950/70 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold flex items-center gap-1.5 ${
                  metrics.epistemicStatus === 'PROVEN_FACT'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                }`}>
                  {metrics.epistemicStatus === 'PROVEN_FACT' ? (
                    <>
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span>🟢 [ESTABLISHED SCIENTIFIC FACT: PEER-REVIEWED BOTANY]</span>
                    </>
                  ) : (
                    <>
                      <span className="h-2 w-2 rounded-full bg-purple-400" />
                      <span>🟣 [THEORETICAL HYPOTHESIS - UNTESTED MULTI-YEAR FIELD MODEL]</span>
                    </>
                  )}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  {metalPercent <= 25.7 ? 'Jaffré et al. (Science 1976)' : 'Kirkpatrick Percolation Theory (1973)'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Info className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {metrics.explanation}
                </p>
              </div>
            </div>

            {/* Quick Benchmark Preset Buttons */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <button
                onClick={() => setMetalPercent(25.7)}
                className={`rounded-lg border p-2 text-left text-xs transition-all ${
                  metalPercent === 25.7
                    ? 'border-cyan-500/60 bg-cyan-950/30 text-white'
                    : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                }`}
              >
                <span className="font-mono font-bold text-cyan-400 block">25.7% Natural Cap</span>
                <span className="text-[10px] text-neutral-400">Pycnandra blue latex</span>
              </button>

              <button
                onClick={() => setMetalPercent(78)}
                className={`rounded-lg border p-2 text-left text-xs transition-all ${
                  metalPercent === 78
                    ? 'border-emerald-500/60 bg-emerald-950/30 text-white ring-1 ring-emerald-500/40'
                    : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                }`}
              >
                <span className="font-mono font-bold text-emerald-400 block">78.0% Critical Percolation</span>
                <span className="text-[10px] text-emerald-300/80">Ohmic threshold crossed</span>
              </button>

              <button
                onClick={() => setMetalPercent(80)}
                className={`rounded-lg border p-2 text-left text-xs transition-all ${
                  metalPercent === 80
                    ? 'border-amber-500/60 bg-amber-950/30 text-white ring-1 ring-amber-500/40'
                    : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                }`}
              >
                <span className="font-mono font-bold text-amber-400 block">80.0% Bio-Bot Matrix</span>
                <span className="text-[10px] text-amber-300/80">Optimal cyborg balance</span>
              </button>
            </div>
          </div>

          {/* Key Biophysical Readout Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Viability */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/90 p-3.5">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Cellular Viability</span>
              <span className={`text-xl font-mono font-bold block mt-1 ${
                metrics.tissueViability > 75 ? 'text-emerald-400' : metrics.tissueViability > 50 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {metrics.tissueViability}%
              </span>
              <span className="text-[10px] text-neutral-400 block mt-0.5">Membrane intact</span>
            </div>

            {/* Conductivity */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/90 p-3.5">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Conductivity (σ)</span>
              <span className="text-xl font-mono font-bold text-cyan-400 block mt-1">
                {metrics.conductivitySm} <span className="text-xs font-normal">S/m</span>
              </span>
              <span className="text-[10px] text-neutral-400 block mt-0.5">
                {metrics.percolationThresholdReached ? 'Continuous Ohmic' : 'Electrolytic Only'}
              </span>
            </div>

            {/* Percolation */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/90 p-3.5">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Percolation</span>
              <span className={`text-xl font-mono font-bold block mt-1 ${
                metrics.percolationThresholdReached ? 'text-emerald-400' : 'text-neutral-500'
              }`}>
                {metrics.percolationThresholdReached ? 'Achieved' : 'Sub-Critical'}
              </span>
              <span className="text-[10px] text-neutral-400 block mt-0.5">Threshold ~16% vol</span>
            </div>

            {/* Transpiration */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/90 p-3.5">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Transpiration Flow</span>
              <span className="text-xl font-mono font-bold text-teal-400 block mt-1">
                {metrics.transpirationRetention}%
              </span>
              <span className="text-[10px] text-neutral-400 block mt-0.5">Hydration suction</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dual-Compartment Cellular Cross-Section & Theory */}
        <div className="lg:col-span-5 space-y-6">
          {/* Dual-Compartment Architecture Card */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              Dual-Compartment Partitioning Model
            </h3>

            {/* Compartment Mass Breakdown Bar */}
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-emerald-400">Living Symplast Core: {metrics.symplasticCorePercent}%</span>
                <span className="text-amber-400">Apoplast Shell: {metrics.apoplasticMatrixPercent}%</span>
              </div>
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-neutral-800">
                <div 
                  className="bg-emerald-500 transition-all duration-300"
                  style={{ width: `${metrics.symplasticCorePercent}%` }}
                />
                <div 
                  className="bg-amber-500 transition-all duration-300"
                  style={{ width: `${metrics.apoplasticMatrixPercent}%` }}
                />
                <div 
                  className="bg-neutral-700 transition-all duration-300"
                  style={{ width: `${100 - metrics.metalPercent}%` }}
                />
              </div>
              <div className="text-[10px] text-neutral-500 font-mono text-right">
                Remaining Organic Biomass (Cellulose, Water, Pectin): {(100 - metrics.metalPercent).toFixed(1)}%
              </div>
            </div>

            {/* Cellular Cross-Section SVG Diagram */}
            <div className="relative rounded-xl border border-neutral-800 bg-neutral-950 p-3 overflow-hidden">
              <svg viewBox="0 0 320 220" className="w-full h-auto">
                <defs>
                  <linearGradient id="cellWallMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Outer Apoplastic Cell Wall (Heavy Metal Shell) */}
                <rect 
                  x="20" 
                  y="20" 
                  width="280" 
                  height="180" 
                  rx="24" 
                  fill="#1e293b" 
                  stroke={metrics.percolationThresholdReached ? "url(#cellWallMetal)" : "#475569"} 
                  strokeWidth={Math.min(4 + metrics.apoplasticMatrixPercent * 0.25, 16)} 
                />

                {/* Plasma Membrane */}
                <rect x="44" y="44" width="232" height="132" rx="16" fill="#064e3b" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />

                {/* Central Vacuole (Symplastic Engine) */}
                <rect x="64" y="64" width="140" height="92" rx="12" fill="#083344" stroke="#06b6d4" strokeWidth="2" />
                <text x="75" y="88" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">CENTRAL VACUOLE</text>
                <text x="75" y="103" fill="#67e8f9" fontSize="8" fontFamily="monospace">Tonoplast [MTP1/HMA4]</text>
                <text x="75" y="118" fill="#a5f3fc" fontSize="8" fontFamily="monospace">Chelated Ni-Citrate (25%)</text>
                <text x="75" y="132" fill="#22d3ee" fontSize="7" fontFamily="monospace">ZERO free toxic ions</text>

                {/* Chloroplasts in Cytoplasm (Preserved Photosynthesis!) */}
                <circle cx="235" cy="80" r="14" fill="#059669" stroke="#34d399" strokeWidth="1.5" />
                <text x="227" y="83" fill="#d1fae5" fontSize="7" fontFamily="monospace" fontWeight="bold">ATP</text>
                <circle cx="235" cy="130" r="14" fill="#059669" stroke="#34d399" strokeWidth="1.5" />
                <text x="227" y="133" fill="#d1fae5" fontSize="7" fontFamily="monospace" fontWeight="bold">ATP</text>

                {/* Metallic Apoplastic Crust Particles (Dots showing percolation) */}
                {metrics.percolationThresholdReached && (
                  <g fill="#fbbf24">
                    <circle cx="28" cy="40" r="2.5" />
                    <circle cx="30" cy="80" r="3" />
                    <circle cx="26" cy="120" r="2.5" />
                    <circle cx="29" cy="160" r="3" />
                    <circle cx="70" cy="28" r="3" />
                    <circle cx="130" cy="26" r="2.5" />
                    <circle cx="190" cy="28" r="3" />
                    <circle cx="250" cy="26" r="2.5" />
                    <circle cx="290" cy="60" r="3" />
                    <circle cx="292" cy="100" r="2.5" />
                    <circle cx="288" cy="140" r="3" />
                    <circle cx="290" cy="180" r="2.5" />
                  </g>
                )}

                {/* Labels */}
                <text x="50" y="196" fill="#f59e0b" fontSize="8" fontFamily="monospace" fontWeight="bold">
                  APOPLAST: {metrics.apoplasticMatrixPercent}% Metal Percolation Crust
                </text>
              </svg>
            </div>

            {/* Key Comparison Points */}
            <div className="mt-4 space-y-2 text-xs">
              <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/40 p-2.5">
                <span className="font-semibold text-emerald-300 block font-mono">1. Living Symplastic Core (25% max):</span>
                <p className="text-neutral-300 text-[11px] mt-0.5">
                  Protects chloroplasts and mitochondrial enzymes from toxicity through strong ligand chelation (nicotianamine, citrate, histidine). The plant continues breathing and pumping sap!
                </p>
              </div>

              <div className="rounded-lg bg-amber-950/30 border border-amber-900/40 p-2.5">
                <span className="font-semibold text-amber-300 block font-mono">2. Extracellular Apoplast Shell (55%):</span>
                <p className="text-neutral-300 text-[11px] mt-0.5">
                  Mineralized onto non-living cellulose walls. Forms continuous metallic bridges across the leaf lamina, providing electrical busbars and structural rigidity without suffocating cells.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
