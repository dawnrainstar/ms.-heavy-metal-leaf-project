import React, { useState } from 'react';
import { 
  Globe2, 
  Coins, 
  TreePine, 
  ShieldCheck, 
  ArrowRight, 
  DollarSign, 
  TrendingDown, 
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';
import { REMEDIATION_SITES } from '../data/remediationSites';
import { HYPERACCUMULATOR_SPECIES } from '../data/hyperaccumulators';

export const RemediationCalculator: React.FC = () => {
  const [selectedSiteId, setSelectedSiteId] = useState<string>(REMEDIATION_SITES[0].id);
  const activeSite = REMEDIATION_SITES.find(s => s.id === selectedSiteId) || REMEDIATION_SITES[0];

  // Customizable inputs based on active site
  const [initialPPM, setInitialPPM] = useState<number>(activeSite.initialPPM);
  const [targetPPM, setTargetPPM] = useState<number>(activeSite.targetRegulatoryPPM);
  const [areaHectares, setAreaHectares] = useState<number>(activeSite.areaHectares);
  const [soilDepth, setSoilDepth] = useState<number>(activeSite.soilDepthMeters);

  // Update inputs when site changes
  const handleSiteSelect = (siteId: string) => {
    setSelectedSiteId(siteId);
    const site = REMEDIATION_SITES.find(s => s.id === siteId);
    if (site) {
      setInitialPPM(site.initialPPM);
      setTargetPPM(site.targetRegulatoryPPM);
      setAreaHectares(site.areaHectares);
      setSoilDepth(site.soilDepthMeters);
    }
  };

  // Matched hyperaccumulator species
  const matchedSpecies = HYPERACCUMULATOR_SPECIES.find(sp => sp.id === activeSite.recommendedSpeciesId) || HYPERACCUMULATOR_SPECIES[2];

  // Mathematical Model:
  // Soil bulk density = 1.35 tonnes/m³
  const soilVolumeM3 = areaHectares * 10000 * soilDepth;
  const soilMassTonnes = soilVolumeM3 * 1.35;
  
  // Total contaminant metal mass in kilograms
  const initialMetalKg = (soilMassTonnes * 1000 * initialPPM) / 1000000;
  const targetMetalKg = (soilMassTonnes * 1000 * targetPPM) / 1000000;
  const metalToExtractKg = Math.max(0, initialMetalKg - targetMetalKg);

  // Annual Extraction by Ms. Heavy Metal Leaf Bio-Bots:
  // Assume 18 tonnes dry biomass/hectare/year with 3.2% average metal concentration
  const annualBiomassPerHectare = 18; // tonnes dry biomass/ha/yr
  const tissueMetalFraction = 0.032; // 3.2%
  const annualMetalExtractedKgPerHa = annualBiomassPerHectare * 1000 * tissueMetalFraction; // 576 kg/ha/yr
  const totalAnnualMetalExtractedKg = annualMetalExtractedKgPerHa * areaHectares;

  const yearsToRemediate = totalAnnualMetalExtractedKg > 0 
    ? Math.max(1, Number((metalToExtractKg / totalAnnualMetalExtractedKg).toFixed(1))) 
    : 0;

  // Economic Phytomining Value:
  const totalBioOreValueUSD = (metalToExtractKg * activeSite.metalMarketValuePerKg);
  const annualRevenueUSD = (totalAnnualMetalExtractedKg * activeSite.metalMarketValuePerKg);

  // Carbon Offset compared to traditional mechanical dig-and-haul (approx 85 kg CO2 per ton soil)
  const traditionalExcavationCostUSD = soilMassTonnes * 420; // $420/ton traditional hazardous soil removal
  const avoidedCO2Tonnes = (soilMassTonnes * 85) / 1000;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40 p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-mono font-medium text-emerald-400 border border-emerald-500/40">
                <Globe2 className="h-3 w-3" />
                Phytoremediation & Phytomining Engine
              </span>
              <span className="text-xs text-neutral-400 font-mono">Field Scale Kinetics</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Toxic Land Remediation & Battery-Grade Bio-Ore Simulator
            </h2>
            <p className="mt-1 max-w-3xl text-sm text-neutral-300">
              The dual mission of <strong className="text-emerald-300">Ms. Heavy Metal Leaf</strong>: detoxifying legacy industrial brownfields and smelter tailings while recovering ultra-pure battery-grade metals (Ni, Co, Cu, Zn) without open-pit excavation or blast furnace emissions.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/40 p-3 text-center min-w-[140px]">
              <span className="text-[10px] font-mono uppercase text-emerald-300/80 block">Estimated Bio-Ore Value</span>
              <span className="text-2xl font-extrabold font-mono text-emerald-400">
                ${(totalBioOreValueUSD / 1000000).toFixed(2)}M
              </span>
              <span className="text-[10px] font-mono text-neutral-300 block mt-0.5">Recoverable Metal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Contaminated Site Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {REMEDIATION_SITES.map((site) => {
          const isSelected = site.id === selectedSiteId;
          return (
            <div
              key={site.id}
              onClick={() => handleSiteSelect(site.id)}
              className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-950/30 ring-1 ring-emerald-500/40 shadow-lg'
                  : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-400">{site.primaryMetal} Tailings</span>
                <span className="rounded bg-neutral-800 px-1.5 py-0.2 text-[10px] font-mono text-neutral-300">
                  {site.areaHectares} ha
                </span>
              </div>
              <h4 className="mt-1 text-sm font-bold text-white leading-snug">
                {site.name}
              </h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                {site.region}
              </p>
              <div className="mt-2.5 flex items-center justify-between text-xs font-mono border-t border-neutral-800/80 pt-2">
                <span className="text-neutral-500">Soil Contamination:</span>
                <span className="text-rose-400 font-bold">{site.initialPPM.toLocaleString()} ppm</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Parameters & Real-Time Projections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Site Parameters */}
        <div className="lg:col-span-6 space-y-5">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Remediation Site Parameters
              </h3>
              <button
                onClick={() => handleSiteSelect(activeSite.id)}
                className="text-[11px] font-mono text-neutral-400 hover:text-white flex items-center gap-1"
              >
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
            </div>

            {/* Initial PPM Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-neutral-300">Initial Soil Metal Concentration</span>
                <span className="text-rose-400 font-bold">{initialPPM.toLocaleString()} PPM (mg/kg)</span>
              </div>
              <input
                type="range"
                min="200"
                max="25000"
                step="50"
                value={initialPPM}
                onChange={(e) => setInitialPPM(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
              />
            </div>

            {/* Target Regulatory PPM Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-neutral-300">Target Environmental Standard</span>
                <span className="text-emerald-400 font-bold">{targetPPM.toLocaleString()} PPM</span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={targetPPM}
                onChange={(e) => setTargetPPM(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
              />
            </div>

            {/* Area Hectares */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-neutral-300">Contaminated Land Footprint</span>
                <span className="text-cyan-400 font-bold">{areaHectares} Hectares</span>
              </div>
              <input
                type="range"
                min="5"
                max="1000"
                step="5"
                value={areaHectares}
                onChange={(e) => setAreaHectares(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
              />
            </div>

            {/* Soil Treatment Depth */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-neutral-300">Active Rhizosphere Root Depth</span>
                <span className="text-amber-400 font-bold">{soilDepth.toFixed(2)} meters</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="1.2"
                step="0.05"
                value={soilDepth}
                onChange={(e) => setSoilDepth(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
              />
            </div>

            {/* Site Context Box */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3 text-xs text-neutral-300 space-y-1">
              <span className="font-mono text-neutral-500 uppercase text-[10px] block">SITE ENVIRONMENTAL HISTORY:</span>
              <p className="text-[11px] leading-relaxed">{activeSite.historicalContaminantSource}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Projections & Phytomining Value */}
        <div className="lg:col-span-6 space-y-5">
          {/* Key Output Cards Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Timeline */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-4">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Remediation Timeline</span>
              <span className="text-2xl font-bold font-mono text-emerald-400 block mt-1">
                {yearsToRemediate} <span className="text-sm font-normal">Years</span>
              </span>
              <span className="text-[11px] text-neutral-400 block mt-1">
                To reach regulatory compliance ({targetPPM} ppm)
              </span>
            </div>

            {/* Metal Extracted */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-4">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Total Metal Extracted</span>
              <span className="text-2xl font-bold font-mono text-cyan-400 block mt-1">
                {(metalToExtractKg / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 })} <span className="text-sm font-normal">Tonnes</span>
              </span>
              <span className="text-[11px] text-neutral-400 block mt-1">
                Pure elemental {activeSite.primaryMetal}
              </span>
            </div>

            {/* Bio-Ore Harvest Value */}
            <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/20 p-4">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Annual Bio-Ore Revenue</span>
              <span className="text-2xl font-bold font-mono text-emerald-300 block mt-1">
                ${(annualRevenueUSD / 1000).toLocaleString(undefined, { maximumFractionDigits: 0 })}k / yr
              </span>
              <span className="text-[11px] text-emerald-400/80 block mt-1">
                At ${activeSite.metalMarketValuePerKg}/kg market price
              </span>
            </div>

            {/* Avoided Carbon */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-4">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Avoided CO₂ Emissions</span>
              <span className="text-2xl font-bold font-mono text-teal-400 block mt-1">
                {avoidedCO2Tonnes.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-sm font-normal">t CO₂</span>
              </span>
              <span className="text-[11px] text-neutral-400 block mt-1">
                Vs. diesel excavators & haulage
              </span>
            </div>
          </div>

          {/* Comparison Table: Traditional Dig-and-Dump vs Ms. Heavy Metal Leaf */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider mb-3">
              Ecological Impact Comparison
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-3 gap-2 rounded-lg bg-neutral-950/60 p-2.5 font-mono text-[11px] border border-neutral-800">
                <span className="text-neutral-400">Metric</span>
                <span className="text-rose-400">Dig-and-Dump</span>
                <span className="text-emerald-400">Ms. Heavy Metal Leaf</span>
              </div>
              <div className="grid grid-cols-3 gap-2 p-2 text-[11px] border-b border-neutral-800/60">
                <span className="text-neutral-300">Soil Disturbance</span>
                <span className="text-neutral-400">100% stripped & trucked</span>
                <span className="text-emerald-300 font-semibold">0% (In-situ living roots)</span>
              </div>
              <div className="grid grid-cols-3 gap-2 p-2 text-[11px] border-b border-neutral-800/60">
                <span className="text-neutral-300">Excavation Cost</span>
                <span className="text-rose-400">${(traditionalExcavationCostUSD / 1000000).toFixed(1)} Million</span>
                <span className="text-emerald-300 font-semibold">Net Profitable (Phytomining)</span>
              </div>
              <div className="grid grid-cols-3 gap-2 p-2 text-[11px]">
                <span className="text-neutral-300">Recovered Metal Purity</span>
                <span className="text-neutral-400">Mixed landfill slag</span>
                <span className="text-emerald-300 font-semibold">&gt;99.2% Battery Precursor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
