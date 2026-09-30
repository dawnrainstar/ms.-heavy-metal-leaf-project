/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { CommandCenterHero } from './components/CommandCenterHero';
import { SystemsKnowledgeMap } from './components/SystemsKnowledgeMap';
import { SixDashboardCards } from './components/SixDashboardCards';
import { DevelopmentRoadmapStrip } from './components/DevelopmentRoadmapStrip';
import { AiAssistantTab } from './components/AiAssistantTab';
import { MoldGrowthLab } from './components/MoldGrowthLab';
import { MetalFeasibilityCalculator } from './components/MetalFeasibilityCalculator';
import { EmergingTechPipeline } from './components/EmergingTechPipeline';
import { HyperaccumulatorArchive } from './components/HyperaccumulatorArchive';
import { RemediationCalculator } from './components/RemediationCalculator';
import { ProjectVisionTab } from './components/ProjectVisionTab';
import { CollaboratorOutreachHub } from './components/CollaboratorOutreachHub';
import { ExportDossierModal } from './components/ExportDossierModal';

export default function App() {
  // Default to Research Command Center (Workspace)
  const [activeTab, setActiveTab] = useState<string>('workspace');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  const handleOpenInvite = () => {
    setActiveTab('outreach');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Header & Clean 6-Tab Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenInvite={handleOpenInvite}
      />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 space-y-6">
        {/* TAB 1: WORKSPACE / RESEARCH COMMAND CENTER */}
        {activeTab === 'workspace' && (
          <div className="space-y-6">
            <CommandCenterHero onNavigateTab={setActiveTab} />
            <SystemsKnowledgeMap onNavigateTab={setActiveTab} />
            <SixDashboardCards onNavigateTab={setActiveTab} />
            <DevelopmentRoadmapStrip onNavigateTab={setActiveTab} />
          </div>
        )}

        {/* TAB 2: AI CO-SCIENTIST (ADAPTIVE ECOLOGICAL INTELLIGENCE) */}
        {activeTab === 'ai-assistant' && (
          <AiAssistantTab onNavigateTab={setActiveTab} />
        )}

        {/* TAB 3: VERIFIED SCIENCE (PEER-REVIEWED ARCHIVE) */}
        {activeTab === 'verified-science' && (
          <div className="space-y-4">
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-3.5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="font-bold text-emerald-300">VERIFIED SCIENCE ARCHIVE</span>
                <span className="text-neutral-400">• Peer-reviewed botanical, molecular, and agronomic literature only</span>
              </div>
              <span className="text-neutral-500 hidden sm:inline">Academic Citations Included</span>
            </div>
            <HyperaccumulatorArchive />
          </div>
        )}

        {/* TAB 4: ACTIVE EXPERIMENTS (BIO-MOLD LAB & FARADAY SHIELDING) */}
        {activeTab === 'active-experiments' && (
          <div className="space-y-4">
            <div className="rounded-xl border border-amber-500/40 bg-amber-950/20 p-3.5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="font-bold text-amber-300">ACTIVE LABORATORY EXPERIMENTS</span>
                <span className="text-neutral-400">• Zero-incision guided growth, 1 TΩ passive sensing, Faraday shielding</span>
              </div>
              <span className="text-neutral-500 hidden sm:inline">Bench Prototype SOP-01</span>
            </div>
            <MoldGrowthLab />
          </div>
        )}

        {/* TAB 5: EMERGING TECHNOLOGY PIPELINE */}
        {activeTab === 'emerging-tech' && (
          <div className="space-y-4">
            <EmergingTechPipeline onNavigateTab={setActiveTab} />
          </div>
        )}

        {/* TAB 6: FIELD SITES & RESTORATION */}
        {activeTab === 'field-sites' && (
          <div className="space-y-4">
            <div className="rounded-xl border border-teal-500/40 bg-teal-950/20 p-3.5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
                <span className="font-bold text-teal-300">FIELD RESTORATION & PHYTOMINING</span>
                <span className="text-neutral-400">• Mine tailing remediation kinetics and battery-grade bio-ore value</span>
              </div>
              <span className="text-neutral-500 hidden sm:inline">Sudbury • Katanga • Silesia • Silver Bow</span>
            </div>
            <RemediationCalculator />
          </div>
        )}

        {/* FUTURE CONCEPTS (SPECULATIVE 80% MATRIX) */}
        {activeTab === 'future-concepts' && (
          <div className="space-y-4">
            <div className="rounded-xl border border-purple-500/40 bg-purple-950/20 p-3.5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-purple-400" />
                <span className="font-bold text-purple-300">FUTURE CONCEPTS & SPECULATIVE DESIGNS</span>
                <span className="text-neutral-400">• Mathematical percolation models & theoretical biohybrid living robotics</span>
              </div>
              <span className="text-neutral-500 hidden sm:inline">Kirkpatrick Continuum Percolation Model</span>
            </div>
            <MetalFeasibilityCalculator />
          </div>
        )}

        {/* TAB 6: PROJECT VISION & MYTHIC INTERFACE */}
        {activeTab === 'project-vision' && (
          <ProjectVisionTab />
        )}

        {/* COLLABORATOR OUTREACH & INVITE STUDIO */}
        {activeTab === 'outreach' && (
          <CollaboratorOutreachHub />
        )}
      </main>

      {/* Export Whitepaper / Protocol Modal */}
      <ExportDossierModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950/90 py-6 px-4 text-center text-xs text-neutral-500 font-mono">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-neutral-300 font-bold">MS. HEAVY METAL LEAF</span>
            <span>•</span>
            <span className="text-neutral-400">Open Research Platform for Living Technologies</span>
            <span>•</span>
            <span className="text-emerald-400">1 TΩ Passive Safety & Faraday Shielded</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-neutral-400">CERN Open Hardware License v2</span>
            <span>•</span>
            <button
              onClick={() => setIsExportOpen(true)}
              className="text-emerald-400 hover:underline"
            >
              Protocol Whitepaper
            </button>
            <span>•</span>
            <button
              onClick={handleOpenInvite}
              className="text-amber-400 hover:underline"
            >
              Collaborate
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
