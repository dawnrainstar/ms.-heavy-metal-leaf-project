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
  Wind
} from 'lucide-react';

export const ProjectVisionTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Identity Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-amber-950/40 p-6 sm:p-8 shadow-2xl">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-mono font-bold text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Platform Identity & Designation
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Living Interface Core
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MS. HEAVY METAL LEAF
          </h2>

          <div className="rounded-xl border border-amber-500/40 bg-amber-950/20 p-4 font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed space-y-2">
            <p className="font-bold text-amber-400">
              Ms. Heavy Metal Leaf is not a character. Ms. Heavy Metal Leaf is not a mascot. Ms. Heavy Metal Leaf is not a fictional researcher.
            </p>
            <p className="text-neutral-300">
              Ms. Heavy Metal Leaf is the <strong>artificial intelligence core and open research platform</strong> — an adaptive ecological intelligence designed to bridge biological systems, machine intelligence, environmental restoration, engineering, and future regenerative technologies.
            </p>
          </div>

          <p className="text-sm font-mono text-cyan-300">
            <strong>The Living Interface Between:</strong> Earth • Biology • Plants • Materials • Technology • Artificial Intelligence • Human Creativity • Regeneration • Myth
          </p>
        </div>
      </div>

      {/* Purpose & Primary Objectives */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <Compass className="h-4 w-4 text-emerald-400" />
              Platform Purpose & Objectives
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Ms. Heavy Metal Leaf exists to help humanity transition from extraction-based systems toward regenerative systems:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                '1. Restore damaged ecosystems (mine tailings, brownfields)',
                '2. Accelerate hyperaccumulator phytoremediation',
                '3. Advance circular phytomining technologies',
                '4. Support bioelectronics & non-destructive sensing',
                '5. Enable living environmental sensing systems',
                '6. Reduce ecological destruction from mining',
                '7. Promote circular material economies',
                '8. Explore living technological infrastructure',
                '9. Connect scientific knowledge with imagination',
                '10. Transform restoration into planetary-scale design'
              ].map((item, idx) => (
                <div key={idx} className="rounded-lg bg-neutral-950/70 border border-neutral-800/80 p-2.5 flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Research Thesis */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-xl space-y-3">
            <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <Leaf className="h-4 w-4 text-emerald-400" />
              Core Research Thesis
            </h3>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-xs font-mono text-emerald-200 leading-relaxed">
              "Can biological growth processes be guided to create useful structural, sensing, and environmental systems while simultaneously restoring ecological health?"
            </div>

            <div className="space-y-1.5 text-xs text-neutral-300">
              <span className="font-mono text-[10px] text-neutral-500 uppercase block">5 KEY SCIENTIFIC INQUIRIES:</span>
              <div className="p-2 rounded bg-neutral-950/60 border border-neutral-850">
                1. Can hyperaccumulator plants recover useful metals from contaminated soils?
              </div>
              <div className="p-2 rounded bg-neutral-950/60 border border-neutral-850">
                2. Can guided-growth molds influence vascular development without harming plant function?
              </div>
              <div className="p-2 rounded bg-neutral-950/60 border border-neutral-850">
                3. Can living plants act as environmental sensing platforms?
              </div>
              <div className="p-2 rounded bg-neutral-950/60 border border-neutral-850">
                4. Can plant electrophysiology provide meaningful environmental signals?
              </div>
              <div className="p-2 rounded bg-neutral-950/60 border border-neutral-850">
                5. Can restoration infrastructure become partially living, adaptive, and self-maintaining?
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Deployment Pathways */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-cyan-400" />
              Deployment Pathways
            </h3>

            {/* Terrestrial */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-400">
                <Globe2 className="h-4 w-4" />
                <span>TERRESTRIAL SYSTEMS</span>
              </div>
              <p className="text-xs text-neutral-300">
                <strong>Applications:</strong> Brownfields, mine tailings, industrial slag, urban soil restoration.
              </p>
              <p className="text-[11px] text-neutral-400 font-mono">
                Functions: Heavy metal uptake, environmental monitoring, ecological recovery, long-term in-situ remediation.
              </p>
            </div>

            {/* Aquatic */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
                <Droplets className="h-4 w-4" />
                <span>AQUATIC SYSTEMS</span>
              </div>
              <p className="text-xs text-neutral-300">
                <strong>Applications:</strong> Stormwater ponds, floating wetlands, estuaries, nutrient runoff channels.
              </p>
              <p className="text-[11px] text-neutral-400 font-mono">
                Functions: Water quality monitoring, pollutant reduction, habitat restoration, bioelectric sensing networks.
              </p>
            </div>

            {/* Atmospheric */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-teal-400">
                <Wind className="h-4 w-4" />
                <span>ATMOSPHERIC SYSTEMS</span>
              </div>
              <p className="text-xs text-neutral-300">
                <strong>Applications:</strong> Canopy air monitoring, particulate and aerosol deposition, microclimate research.
              </p>
              <p className="text-[11px] text-neutral-400 font-mono">
                Functions: Transpiration flux monitoring, urban climate observation, distributed bio-bot nodes.
              </p>
            </div>
          </div>

          {/* Separation Rule Callout */}
          <div className="rounded-2xl border border-purple-500/40 bg-purple-950/20 p-5 shadow-xl space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold font-mono text-purple-300">
              <Sparkles className="h-4 w-4" />
              <span>THE EPISTEMIC BOUNDARY: SCIENCE VS. MYTH</span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              In this platform, <strong>myth, visionary art, and future civilization concepts</strong> serve as inspiration and human empathy bridges. They are strictly segregated in this dedicated Project Vision workspace, ensuring our laboratory data and peer-reviewed science remain 100% rigorous and unclouded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
