import React, { useState } from 'react';
import { 
  CheckCircle2, 
  RotateCw, 
  Sparkles, 
  Layers, 
  Cpu, 
  Globe2, 
  Activity,
  ArrowRight,
  ChevronRight,
  ClipboardList,
  Copy,
  Check,
  Compass,
  Zap,
  Leaf,
  FlaskConical,
  FileText,
  Clock,
  Sliders
} from 'lucide-react';
import { TESTING_ROADMAP, RoadmapPhase, RoadmapTest } from '../data/testingRoadmap';

interface DevelopmentRoadmapStripProps {
  onNavigateTab?: (tabId: string) => void;
}

export const DevelopmentRoadmapStrip: React.FC<DevelopmentRoadmapStripProps> = ({ onNavigateTab }) => {
  const [phases, setPhases] = useState<RoadmapPhase[]>(TESTING_ROADMAP);
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(0);
  const [copiedProtocol, setCopiedProtocol] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'matrix' | 'deep-dive'>('matrix');

  const activePhase = phases[selectedPhaseIndex] || phases[0];

  // Toggle test completion
  const handleToggleTest = (phaseId: string, testId: string) => {
    setPhases(prevPhases => 
      prevPhases.map(phase => {
        if (phase.id !== phaseId) return phase;
        const updatedTests = phase.tests.map(t => 
          t.id === testId ? { ...t, isCompleted: !t.isCompleted } : t
        );
        const completedCount = updatedTests.filter(t => t.isCompleted).length;
        const newPercent = Math.round((completedCount / updatedTests.length) * 100);
        return {
          ...phase,
          tests: updatedTests,
          progressPercent: newPercent
        };
      })
    );
  };

  // Copy full roadmap markdown to clipboard
  const handleCopyMarkdown = () => {
    const md = `MS. HEAVY METAL LEAF\nEMERGING TECHNOLOGY TESTING ROADMAP\nVersion 1.0\n\nMission:\nSystematically evaluate technologies that could accelerate phytoremediation, phytomining, environmental sensing, bioelectronics, and living infrastructure development.\n\n` +
      phases.map(p => 
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPHASE ${p.phaseNumber}\n${p.title}\n\nStatus: ${p.status}\n\nObjective:\n${p.objective}\n\nTests:\n${p.tests.map(t => `□ [${t.isCompleted ? 'x' : ' '}] ${t.name}`).join('\n')}\n\n` +
        (p.emergingTechnologies ? `Emerging Technologies:\n${p.emergingTechnologies.map(et => `□ ${et}`).join('\n')}\n\n` : '') +
        `Success Criteria:\n${p.successCriteria.map(sc => `• ${sc}`).join('\n')}\n\n` +
        (p.deliverables ? `Deliverables:\n${p.deliverables.map(d => `• ${d}`).join('\n')}\n\n` : '') +
        `Technology Level:\n${p.technologyLevel.join(', ')}\n`
      ).join('\n');

    navigator.clipboard.writeText(md);
    setCopiedProtocol(true);
    setTimeout(() => setCopiedProtocol(false), 2500);
  };

  // Calculate overall platform tests completed
  const allTests = phases.flatMap(p => p.tests);
  const totalCompleted = allTests.filter(t => t.isCompleted).length;
  const overallPercentage = Math.round((totalCompleted / allTests.length) * 100);

  const getStatusBadge = (status: RoadmapPhase['status']) => {
    switch (status) {
      case 'ACTIVE':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-300 border border-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ACTIVE
          </span>
        );
      case 'NEXT':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-amber-300 border border-amber-500/40">
            <RotateCw className="h-2.5 w-2.5 text-amber-400 animate-spin-slow" />
            NEXT
          </span>
        );
      case 'PIPELINE':
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-neutral-800 px-2.5 py-0.5 text-[10px] font-mono font-bold text-neutral-400 border border-neutral-700">
            <Clock className="h-2.5 w-2.5 text-neutral-400" />
            PIPELINE
          </span>
        );
    }
  };

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-5 sm:p-7 shadow-2xl space-y-6 backdrop-blur-xl">
      {/* Header with Title, Version & Mission Statement */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-mono font-bold text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
              <ClipboardList className="h-3.5 w-3.5 text-emerald-400" />
              EMERGING TECHNOLOGY TESTING ROADMAP
            </span>
            <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-[10px] font-mono text-neutral-300 border border-neutral-700">
              Version 1.0
            </span>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              • {totalCompleted} of {allTests.length} Protocol Tests Verified ({overallPercentage}%)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span>Systematic Technology Evaluation Roadmap</span>
          </h3>
          <p className="text-xs sm:text-sm font-mono text-neutral-300 max-w-4xl leading-relaxed">
            <span className="text-emerald-400 font-bold">Mission:</span> Systematically evaluate technologies that could accelerate phytoremediation, phytomining, environmental sensing, bioelectronics, and living infrastructure development.
          </p>
        </div>

        {/* Global Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => setViewMode(viewMode === 'matrix' ? 'deep-dive' : 'matrix')}
            className="flex items-center gap-1.5 rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-all shadow-sm"
          >
            <Sliders className="h-3.5 w-3.5 text-neutral-400" />
            <span>{viewMode === 'matrix' ? 'Phases Grid' : 'Sequential Strip'}</span>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-3.5 py-1.5 text-xs font-mono font-bold text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
            title="Copy Roadmap v1.0 Markdown protocol"
          >
            {copiedProtocol ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span>Protocol Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Export v1.0 Protocol</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Phase Navigation Tabs / Progress Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {phases.map((phase, idx) => {
          const isSelected = selectedPhaseIndex === idx;
          const completedTests = phase.tests.filter(t => t.isCompleted).length;

          return (
            <button
              key={phase.id}
              onClick={() => setSelectedPhaseIndex(idx)}
              className={`rounded-2xl p-3 text-left transition-all border flex flex-col justify-between space-y-2 relative overflow-hidden ${
                isSelected
                  ? 'border-emerald-500 bg-neutral-950 shadow-lg ring-1 ring-emerald-500/50'
                  : 'border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900/80 hover:border-neutral-700'
              }`}
            >
              {/* Top Row: Phase Number and Status Badge */}
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-mono font-extrabold text-neutral-400">
                  PHASE {phase.phaseNumber}
                </span>
                {getStatusBadge(phase.status)}
              </div>

              {/* Title */}
              <div>
                <h4 className="text-xs font-bold text-white font-mono leading-snug line-clamp-2">
                  {phase.title}
                </h4>
              </div>

              {/* Mini Progress Bar */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                  <span>{completedTests}/{phase.tests.length} tests</span>
                  <span className="font-bold text-emerald-400">{phase.progressPercent}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      phase.status === 'ACTIVE' 
                        ? 'bg-emerald-400' 
                        : phase.status === 'NEXT' 
                        ? 'bg-amber-400' 
                        : 'bg-blue-400'
                    }`}
                    style={{ width: `${phase.progressPercent}%` }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase In-Depth Inspector Panel */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 sm:p-6 shadow-xl space-y-6">
        {/* Phase Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-850 pb-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                PHASE {activePhase.phaseNumber} PROTOCOL SPECIFICATION
              </span>
              <span className="text-neutral-500">•</span>
              {getStatusBadge(activePhase.status)}
              <span className="text-neutral-500">•</span>
              <div className="flex items-center gap-1.5">
                {activePhase.technologyLevel.map((lvl) => (
                  <span
                    key={lvl}
                    className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
                      lvl === 'Foundation' || lvl === 'Verified'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : lvl === 'Experimental'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}
                  >
                    {lvl === 'Foundation' || lvl === 'Verified' ? '🟢' : lvl === 'Experimental' ? '🟡' : '🔷'} {lvl}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
              {activePhase.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 font-mono">
              <span className="text-neutral-400 uppercase font-bold">Objective:</span> {activePhase.objective}
            </p>
          </div>

          {/* Jump to Relevant Platform Tab */}
          {onNavigateTab && (
            <button
              onClick={() => onNavigateTab(activePhase.linkedTab)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-mono font-bold text-white hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md shrink-0 self-start lg:self-center group"
            >
              <span>Explore {activePhase.linkedTabLabel}</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Core Protocol Sections: Tests Checklist, Emerging Technologies, Success Criteria & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1 & 2: Tests Checklist */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase text-neutral-300 tracking-wider flex items-center gap-1.5">
                  <FlaskConical className="h-4 w-4 text-emerald-400" />
                  Empirical Tests & Protocols ({activePhase.tests.filter(t => t.isCompleted).length}/{activePhase.tests.length} Complete)
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
                Click checkbox to toggle verification state
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activePhase.tests.map((test) => (
                <div
                  key={test.id}
                  onClick={() => handleToggleTest(activePhase.id, test.id)}
                  className={`rounded-xl border p-3 cursor-pointer transition-all flex items-start gap-3 select-none ${
                    test.isCompleted
                      ? 'border-emerald-500/40 bg-emerald-950/20 text-neutral-200'
                      : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={test.isCompleted}
                    onChange={() => {}} // handled by parent onClick
                    className="mt-0.5 h-4 w-4 rounded border-neutral-700 text-emerald-500 focus:ring-emerald-400 focus:ring-offset-neutral-950 cursor-pointer"
                  />
                  <div className="space-y-0.5">
                    <span className={`text-xs font-mono font-medium block leading-snug ${
                      test.isCompleted ? 'text-white' : 'text-neutral-400'
                    }`}>
                      {test.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {test.isCompleted ? '✅ Verified in Bench Trial' : '⏳ Pending Protocol Execution'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging Technologies (if present in phase) */}
            {activePhase.emergingTechnologies && activePhase.emergingTechnologies.length > 0 && (
              <div className="rounded-xl border border-blue-500/30 bg-blue-950/10 p-4 space-y-2 mt-4">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-blue-300">
                  <Compass className="h-3.5 w-3.5 text-blue-400" />
                  <span>Integrated Emerging Technologies (Under Evaluation)</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activePhase.emergingTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-blue-500/40 bg-blue-950/40 px-3 py-1 text-xs font-mono text-blue-200 shadow-sm flex items-center gap-1.5"
                    >
                      <span className="text-[10px] text-blue-400">🔷</span>
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Column 3: Success Criteria & Deliverables */}
          <div className="space-y-5">
            {/* Success Criteria */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300 uppercase">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>Success Criteria</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-neutral-300">
                {activePhase.successCriteria.map((criterion, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span className="leading-relaxed">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            {activePhase.deliverables && activePhase.deliverables.length > 0 && (
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-300 uppercase">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <span>Target Deliverables</span>
                </div>
                <ul className="space-y-2 text-xs font-mono text-neutral-300">
                  {activePhase.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="leading-relaxed">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
