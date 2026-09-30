import React, { useState } from 'react';
import { 
  FlaskConical, 
  Search, 
  Leaf, 
  BookOpen, 
  Atom, 
  Award, 
  Filter, 
  Sparkles, 
  Zap, 
  Globe2, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { HYPERACCUMULATOR_SPECIES, TARGET_METALS_INFO } from '../data/hyperaccumulators';
import { HyperaccumulatorSpecies } from '../types';

export const HyperaccumulatorArchive: React.FC = () => {
  const [selectedMetal, setSelectedMetal] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSpecies, setActiveSpecies] = useState<HyperaccumulatorSpecies>(HYPERACCUMULATOR_SPECIES[0]);

  const metalsList = ['All', 'Nickel (Ni)', 'Zinc (Zn)', 'Cadmium (Cd)', 'Copper (Cu)', 'Cobalt (Co)', 'Arsenic (As)', 'Lead (Pb)'];

  const filteredSpecies = HYPERACCUMULATOR_SPECIES.filter(sp => {
    const matchesMetal = selectedMetal === 'All' || sp.targetMetals.some(m => m.includes(selectedMetal.split(' ')[0]));
    const matchesSearch = 
      sp.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.chelationMechanism.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.bioBotAdvantage.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMetal && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40 p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-mono font-medium text-emerald-400 border border-emerald-500/40">
                <Leaf className="h-3 w-3" />
                Peer-Reviewed Metallophyte Archive
              </span>
              <span className="text-xs text-neutral-400 font-mono">7 Key Bio-Bot Taxa</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Hyperaccumulator & Metallophyte Botanical Encyclopedia
            </h2>
            <p className="mt-1 max-w-3xl text-sm text-neutral-300">
              Only ~0.2% of all angiosperms can hyperaccumulate toxic heavy metals without dying. These extraordinary plants express specialized P-type ATPases, natural metal-chelating ligands (citric acid, histidine, nicotianamine), and vacuolar compartmentalization that form the living genetic foundation of <strong className="text-emerald-300">Ms. Heavy Metal Leaf</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3 text-center min-w-[120px]">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block">World Record Dry Wt.</span>
              <span className="text-xl font-bold font-mono text-cyan-400">25.7% Ni</span>
              <span className="text-[10px] text-cyan-500/80 block mt-0.5">Pycnandra acuminata</span>
            </div>
          </div>
        </div>
      </div>

      {/* Target Metals Fact Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {TARGET_METALS_INFO.map(metal => (
          <div key={metal.symbol} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-2.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-amber-400">{metal.symbol}</span>
              <span className="text-[10px] font-mono text-neutral-400">${metal.marketPerKg}/kg</span>
            </div>
            <div className="font-semibold text-neutral-200 mt-0.5">{metal.name}</div>
            <div className="text-[10px] text-neutral-500 font-mono mt-1">
              Hyper threshold: <strong className="text-emerald-400">{metal.hyperPPM.toLocaleString()} ppm</strong>
            </div>
            <div className="text-[9px] text-neutral-400 truncate mt-0.5" title={metal.batteryGrade}>
              {metal.batteryGrade}
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-neutral-800 bg-neutral-900/60 p-3">
        {/* Metal Category Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1 sm:pb-0">
          <Filter className="h-4 w-4 text-neutral-400 shrink-0 mr-1" />
          {metalsList.map(metal => (
            <button
              key={metal}
              onClick={() => setSelectedMetal(metal)}
              className={`rounded-lg px-2.5 py-1 text-xs font-mono whitespace-nowrap transition-all ${
                selectedMetal === metal
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'bg-neutral-800/60 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
              }`}
            >
              {metal}
            </button>
          ))}
        </div>

        {/* Text Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-neutral-500" />
          <input
            type="text"
            placeholder="Search species, genes, ligands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 pl-8 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:outline-none"
          />
        </div>
      </div>

      {/* Main Two-Column Layout: Species List vs Detailed Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Species Cards Grid */}
        <div className="lg:col-span-6 space-y-3">
          {filteredSpecies.map(sp => {
            const isSelected = activeSpecies.id === sp.id;
            return (
              <div
                key={sp.id}
                onClick={() => setActiveSpecies(sp)}
                className={`group cursor-pointer rounded-xl border p-4 transition-all ${
                  isSelected
                    ? 'border-emerald-500/70 bg-gradient-to-r from-emerald-950/40 to-neutral-900 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/40'
                    : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {/* Visual Sap Color Swatch */}
                    <div 
                      className="mt-1 h-8 w-8 rounded-lg border border-neutral-700 shadow-md flex items-center justify-center shrink-0"
                      style={{ backgroundColor: sp.sapColor }}
                      title={`Vascular sap tint: ${sp.sapColor}`}
                    >
                      <Leaf className="h-4 w-4 text-neutral-950" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors italic">
                          {sp.scientificName}
                        </h3>
                        <span className="rounded bg-neutral-800 px-1.5 py-0.2 text-[10px] font-mono text-neutral-400">
                          {sp.botanicalFamily}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 font-medium">
                        {sp.commonName}
                      </p>
                    </div>
                  </div>

                  {/* Metal PPM Badge */}
                  <div className="text-right shrink-0">
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-mono font-bold text-emerald-400 border border-emerald-500/30 block">
                      {sp.maxNaturalDryWeightPercent}% Dry Wt
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 block mt-0.5">
                      {sp.maxNaturalConcentrationPPM.toLocaleString()} ppm
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {sp.targetMetals.map(m => (
                    <span key={m} className="rounded bg-neutral-950/80 px-2 py-0.5 text-[10px] font-mono text-amber-300 border border-neutral-800">
                      {m}
                    </span>
                  ))}
                  <span className="rounded bg-neutral-950/80 px-2 py-0.5 text-[10px] font-mono text-cyan-300 border border-neutral-800">
                    Conductivity: {sp.conductivityPotential}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: In-Depth Selected Species Dossier */}
        <div className="lg:col-span-6">
          <div className="sticky top-28 rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-2xl space-y-4">
            <div className="border-b border-neutral-800 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider flex items-center gap-1.5">
                  <Atom className="h-3.5 w-3.5" />
                  Botanical & Genetic Profile
                </span>
                <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-[11px] font-mono text-neutral-300 border border-neutral-700">
                  {activeSpecies.botanicalFamily}
                </span>
              </div>
              <h2 className="mt-1 text-xl font-bold text-white italic">
                {activeSpecies.scientificName}
              </h2>
              <p className="text-xs text-neutral-400">
                Commonly known as <strong className="text-neutral-200">{activeSpecies.commonName}</strong> • Native to {activeSpecies.nativeHabitat}
              </p>
            </div>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block">Max Natural Content</span>
                <span className="text-lg font-bold font-mono text-emerald-400">
                  {activeSpecies.maxNaturalConcentrationPPM.toLocaleString()} ppm
                </span>
                <span className="text-[10px] text-neutral-400 block mt-0.5">
                  ({activeSpecies.maxNaturalDryWeightPercent}% total dry biomass)
                </span>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block">Biomass Harvest Yield</span>
                <span className="text-lg font-bold font-mono text-amber-400">
                  {activeSpecies.biomassPerYear}
                </span>
                <span className="text-[10px] text-neutral-400 block mt-0.5">Annual dry matter</span>
              </div>
            </div>

            {/* In-Depth Scientific Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="rounded-xl border border-emerald-900/50 bg-emerald-950/20 p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    Epistemic Status: Established Scientific Fact
                  </span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.2 text-[9px] font-mono text-emerald-300">
                    Peer-Reviewed Botany
                  </span>
                </div>
                <p className="text-neutral-300 text-xs leading-relaxed">
                  {activeSpecies.epistemicProof}
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3">
                <h4 className="font-mono text-[11px] font-bold text-cyan-300 uppercase flex items-center gap-1.5 mb-1">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  Primary Storage Tissue & Vascular Sap
                </h4>
                <p className="text-neutral-300 leading-relaxed">
                  {activeSpecies.primaryTissue}
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3">
                <h4 className="font-mono text-[11px] font-bold text-emerald-300 uppercase flex items-center gap-1.5 mb-1">
                  <Atom className="h-3.5 w-3.5 text-emerald-400" />
                  Biochemical Chelation & Transporters
                </h4>
                <p className="text-neutral-300 leading-relaxed">
                  {activeSpecies.chelationMechanism}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {activeSpecies.molecularTransporters.map(trans => (
                    <span key={trans} className="rounded bg-neutral-900 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-900/50">
                      Gene: {trans}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-3">
                <h4 className="font-mono text-[11px] font-bold text-amber-300 uppercase flex items-center gap-1.5 mb-1">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  Role in Ms. Heavy Metal Leaf Bio-Bot
                </h4>
                <p className="text-neutral-200 leading-relaxed">
                  {activeSpecies.bioBotAdvantage}
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800/80 bg-neutral-950/40 p-3">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Foundational Academic Citation:</span>
                    <p className="text-[11px] text-neutral-300 italic mt-0.5">
                      {activeSpecies.academicCitation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
