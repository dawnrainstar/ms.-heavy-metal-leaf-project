import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Sparkles,
  BookOpen
} from 'lucide-react';

interface ExportDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportDossierModal: React.FC<ExportDossierModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const whitepaperMarkdown = `# MS. HEAVY METAL LEAF: ZERO-INSTALLATION CYBORG HYPERACCUMULATOR BIO-BOTS
**An Open-Science Research Dossier on Plant-Grown Electronics, Dual-Compartment 80% Metal Percolation, and Mine Tailing Phytoremediation**
*Lead Author: The Ms. Heavy Metal Leaf Open-Science Consortium*
*Date: 2026-09-27 | Repository & Workspace: https://convergence.app/join?invite=heavy-metal-leaf*

---

## 1. ABSTRACT & CORE INNOVATIONS
Traditional attempts to interface electronics with living flora involve mechanical needle insertion, surgical piercing, or surface adhesive taping. These intrusive interventions invariably induce a traumatic plant wound response: reactive oxygen species (ROS) cascades, callose deposition around electrodes, and vascular cavitation, leading to severe contact impedance spikes (>1.2 MΩ) within 48 hours.

**Ms. Heavy Metal Leaf introduces three foundational paradigms:**
1. **Zero-Installation Bio-Molding**: Non-growable hardware (gold interdigitated microelectrodes, laser-induced graphene capacitive sensing wicks, microfluidic hydrophilic conduits) are pre-cast within a flexible polydimethylsiloxane (PDMS) negative mold. A metallophyte seedling (*Pycnandra acuminata* or *Noccaea caerulescens*) germinates directly inside the mold cavity. As roots and stems expand via thigmotropic cues, epidermal cell walls and pectins naturally conform to and hermetically encapsulate sensor contacts with zero surgical incisions, maintaining low contact resistance (<4.8 kΩ).
2. **The 80% Metal Feasibility Paradigm (Dual-Compartment Partitioning)**: While natural hyperaccumulators cap at ~25.7% Ni dry weight (e.g., *Pycnandra acuminata* blue-green latex), Ms. Heavy Metal Leaf models an engineered ~80% metal dry-weight matrix by bifurcating metal distribution:
   - **Living Symplastic Engine (~25% metal)**: Restricted strictly inside vacuolar tonoplasts using citric/malic acid and nicotianamine chelation, leaving chloroplast ATP synthesis, stomatal conductance, and mitochondrial respiration intact.
   - **Extracellular Apoplastic Matrix (~55% metal)**: Transpirational sap supersaturates cellulose micro-fibrils in cell walls, precipitating an outer metallic conductive crust that satisfies the Kirkpatrick continuum percolation threshold (~16% volume fraction). The leaf exterior acts as an ohmic circuit trace while the internal living cells maintain vitality.
3. **Circular Phytoremediation & Battery-Grade Phytomining**: Deployed across toxic mine tailings (Sudbury Ni, Katanga Co/Cu, Upper Silesian Zn/Cd), the bio-bots extract toxic heavy metals from contaminated soil, transforming hazardous Superfund sites into clean ecosystems while yielding battery-grade (>99.2% pure) cathode precursors without pit excavation.

---

## 2. STANDARD OPERATING PROCEDURE: BIO-MOLD FABRICATION & IN-GROWTH (SOP-01)
1. **Mold Surface Preparation**: Oxygen plasma treatment (100W, 90 seconds) of PDMS casting blocks reduces water contact angle from 110° to 18°, creating capillary wicking channels that draw root hairs down micro-grooves.
2. **Microelectrode Placement**: Interdigitated gold electrode arrays (15μm pitch on 25μm Kapton substrate) are seated into pre-molded alignment pins.
3. **Nutrient Bed Inoculation**: 2% phytagel nutrient agar with 10nM indole-3-acetic acid (IAA) auxin primer provides a downward gravitropic and thigmotropic guide.
4. **Seed Germination**: Seeds of *Noccaea caerulescens* or *Berkheya coddii* are scarified in 3% H2O2 and positioned at the apical mold chamber.
5. **Heavy Metal Induction Protocol**: Beginning Day 14, nutrient solution is ramped from 20mM to 150mM nickel citrate over a 2-week cycle.

---

## 3. BOTANICAL ARCHIVE & TRANSCRIPTIONAL TARGETS
- **Pycnandra acuminata** (Sapotaceae): 257,000 ppm Ni (25.7% dry wt). Blue latex driven by nickel-citrate complexes. Genes: HMA4, MTP1.
- **Noccaea caerulescens** (Brassicaceae): 39,600 ppm Zn, 1,800 ppm Cd. Tandemly duplicated NcHMA4 drives rapid xylem loading.
- **Berkheya coddii** (Asteraceae): 36,000 ppm Ni. Supreme biomass productivity (18-22 t/ha/yr).
- **Haumaniastrum robertii** (Lamiaceae): 10,200 ppm Cu, 2,500 ppm Co. Primary candidate for copper-belt battery mineral harvesting.

---

## 4. COLLABORATION CHARTER
Researchers, botanists, and roboticists are invited to participate in open testing.
Direct Join Link: https://convergence.app/join?invite=heavy-metal-leaf
Open Science License: CERN Open Hardware License v2 (CERN-OHL-S) & Creative Commons BY-SA 4.0
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(whitepaperMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([whitepaperMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ms-heavy-metal-leaf-scientific-dossier.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="flex flex-col w-full max-w-3xl max-h-[90vh] rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/80 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                Scientific Dossier & Whitepaper Export
              </h3>
              <p className="text-xs text-neutral-400">
                Complete protocol, 80% feasibility derivation, and open-science blueprint
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Markdown Preview Area */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs text-neutral-300 leading-relaxed bg-neutral-900/40 whitespace-pre-wrap select-text">
          {whitepaperMarkdown}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-950 px-6 py-4">
          <span className="text-xs font-mono text-neutral-500">
            Format: Markdown (.md) • CERN Open Hardware License v2
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-700 hover:text-white transition-colors"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-md"
            >
              <Download className="h-4 w-4" />
              <span>Download .MD Dossier</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
