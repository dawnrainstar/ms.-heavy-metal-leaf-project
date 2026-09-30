import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  BookOpen, 
  FlaskConical, 
  ArrowRight, 
  Layers, 
  ThumbsUp, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Info,
  ShieldAlert,
  Cpu,
  Zap,
  Globe2,
  Atom,
  Share2
} from 'lucide-react';
import { EMERGING_TECHNOLOGIES } from '../data/emergingTechnologies';
import { EmergingTechnology } from '../types';
import { DevelopmentRoadmapStrip } from './DevelopmentRoadmapStrip';

interface EmergingTechPipelineProps {
  onNavigateTab?: (tabId: string) => void;
}

export const EmergingTechPipeline: React.FC<EmergingTechPipelineProps> = ({ onNavigateTab }) => {
  const [techList, setTechList] = useState<EmergingTechnology[]>(EMERGING_TECHNOLOGIES);
  const [activeViewMode, setActiveViewMode] = useState<'roadmap' | 'candidates'>('roadmap');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(EMERGING_TECHNOLOGIES[0].id);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());

  // New proposal form state
  const [newTitle, setNewTitle] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [newStatus, setNewStatus] = useState<EmergingTechnology['evaluationStatus']>('Research Question');
  const [newRationale, setNewRationale] = useState('');

  const statusOptions = [
    { label: 'All Technologies', value: 'ALL', count: techList.length },
    { label: 'Research Question', value: 'Research Question', count: techList.filter(t => t.evaluationStatus === 'Research Question').length },
    { label: 'Literature Review', value: 'Literature Review', count: techList.filter(t => t.evaluationStatus === 'Literature Review').length },
    { label: 'Concept Evaluation', value: 'Concept Evaluation', count: techList.filter(t => t.evaluationStatus === 'Concept Evaluation').length },
    { label: 'Feasibility Assessment', value: 'Feasibility Assessment', count: techList.filter(t => t.evaluationStatus === 'Feasibility Assessment').length },
    { label: 'Future Pilot', value: 'Future Pilot', count: techList.filter(t => t.evaluationStatus === 'Future Pilot').length },
  ];

  const filteredTechnologies = techList.filter(tech => {
    const matchesFilter = selectedStatusFilter === 'ALL' || tech.evaluationStatus === selectedStatusFilter;
    const matchesSearch = 
      tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.scientificRationale.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleVote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (votedIds.has(id)) {
      setVotedIds(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      setTechList(prev => prev.map(t => t.id === id ? { ...t, upvotes: t.upvotes - 1 } : t));
    } else {
      setVotedIds(prev => new Set(prev).add(id));
      setTechList(prev => prev.map(t => t.id === id ? { ...t, upvotes: t.upvotes + 1 } : t));
    }
  };

  const handleCreateProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newQuestion.trim()) return;

    const newTech: EmergingTechnology = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      subtitle: 'Researcher Proposed Pipeline Candidate',
      question: newQuestion.trim(),
      evaluationStatus: newStatus,
      readinessLevel: 'TRL 1: Candidate Proposal',
      plausibilityScore: 70,
      scientificRationale: newRationale.trim() || 'Theoretical rationale logged by contributing open-science researcher.',
      coreHypothesis: 'Candidate hypothesis awaiting preliminary literature benchmarking and peer consensus.',
      requiredPreconditions: [
        'Experimental protocol drafting & peer review validation',
        'Biocompatibility testing with target hyperaccumulator cultivars',
        'Preliminary control trial in Faraday growth enclosure'
      ],
      keyRisksOrBarriers: [
        'Unverified in-vivo cytotoxicity under elevated ion flux',
        'Physical measurement noise in non-laboratory settings'
      ],
      proposedExperimentalProtocol: 'Stage 1 bench characterization in sterile agar medium.',
      academicPrecedents: ['Open-Science Contributor Submission'],
      currentAssessmentNotes: 'Submitted for committee review and peer critique.',
      upvotes: 1
    };

    setTechList(prev => [newTech, ...prev]);
    setIsSubmitModalOpen(false);
    setNewTitle('');
    setNewQuestion('');
    setNewRationale('');
    setExpandedCardId(newTech.id);
  };

  const getStatusBadge = (status: EmergingTechnology['evaluationStatus']) => {
    switch (status) {
      case 'Research Question':
        return {
          bg: 'bg-slate-500/20 text-slate-300 border-slate-500/40',
          dot: 'bg-slate-400',
          border: 'border-slate-800'
        };
      case 'Literature Review':
        return {
          bg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
          dot: 'bg-blue-400',
          border: 'border-blue-800'
        };
      case 'Concept Evaluation':
        return {
          bg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          dot: 'bg-cyan-400',
          border: 'border-cyan-800'
        };
      case 'Feasibility Assessment':
        return {
          bg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
          dot: 'bg-indigo-400',
          border: 'border-indigo-800'
        };
      case 'Future Pilot':
        return {
          bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          dot: 'bg-emerald-400',
          border: 'border-emerald-800'
        };
      default:
        return {
          bg: 'bg-neutral-800 text-neutral-300 border-neutral-700',
          dot: 'bg-neutral-400',
          border: 'border-neutral-800'
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner with Epistemic Disclaimer */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-br from-neutral-900 via-neutral-950 to-blue-950/40 p-6 sm:p-8 shadow-2xl">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        
        <div className="space-y-4 max-w-4xl relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-mono font-bold text-blue-300 border border-blue-500/40 flex items-center gap-1.5">
              <span className="text-base leading-none">🔷</span>
              EMERGING TECHNOLOGY PIPELINE
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Epistemic Layer 3 • Technologies Under Scientific Evaluation
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Experimental Technology Pipeline
          </h2>

          {/* Epistemic Demarcation Box */}
          <div className="rounded-xl border border-blue-500/30 bg-blue-950/30 p-4 font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed space-y-1.5">
            <div className="flex items-center gap-2 text-blue-300 font-bold">
              <Info className="h-4 w-4 shrink-0" />
              <span>TECHNOLOGIES UNDER EVALUATION DISCLAIMER</span>
            </div>
            <p className="text-neutral-300 text-xs">
              These concepts are <strong>scientifically plausible</strong> and may become future research directions. They are <strong>not currently validated</strong> within the Heavy Metal Leaf platform bench protocols. This pipeline bridges the gap between active laboratory experiments and wild future visions.
            </p>
          </div>

          {/* Pipeline Flow Visualization */}
          <div className="pt-2">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-2">
              Evaluation Maturity Stages:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono">
              <div className="rounded-lg bg-neutral-900/80 border border-slate-700/60 p-2 text-center">
                <span className="text-[10px] text-slate-400 block">Stage 1</span>
                <span className="font-bold text-slate-200">Research Question</span>
              </div>
              <div className="rounded-lg bg-neutral-900/80 border border-blue-700/60 p-2 text-center">
                <span className="text-[10px] text-blue-400 block">Stage 2</span>
                <span className="font-bold text-blue-200">Literature Review</span>
              </div>
              <div className="rounded-lg bg-neutral-900/80 border border-cyan-700/60 p-2 text-center">
                <span className="text-[10px] text-cyan-400 block">Stage 3</span>
                <span className="font-bold text-cyan-200">Concept Evaluation</span>
              </div>
              <div className="rounded-lg bg-neutral-900/80 border border-indigo-700/60 p-2 text-center">
                <span className="text-[10px] text-indigo-400 block">Stage 4</span>
                <span className="font-bold text-indigo-200">Feasibility Study</span>
              </div>
              <div className="rounded-lg bg-neutral-900/80 border border-emerald-700/60 p-2 text-center">
                <span className="text-[10px] text-emerald-400 block">Stage 5</span>
                <span className="font-bold text-emerald-200">Future Pilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Switch: Testing Roadmap (Phases 0-5) vs Evaluated Technologies */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveViewMode('roadmap')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
              activeViewMode === 'roadmap'
                ? 'bg-blue-600 text-white shadow-blue-500/20'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Compass className="h-3.5 w-3.5" />
            <span>Testing Roadmap v1.0 (Phases 0–5)</span>
          </button>

          <button
            onClick={() => setActiveViewMode('candidates')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
              activeViewMode === 'candidates'
                ? 'bg-blue-600 text-white shadow-blue-500/20'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Atom className="h-3.5 w-3.5" />
            <span>Candidate Technologies ({techList.length})</span>
          </button>
        </div>

        <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
          {activeViewMode === 'roadmap' ? 'Systematic Testing Protocols & Verification' : 'Pipeline Candidates & Open Proposals'}
        </span>
      </div>

      {/* ROADMAP VIEW */}
      {activeViewMode === 'roadmap' && (
        <DevelopmentRoadmapStrip onNavigateTab={onNavigateTab} />
      )}

      {/* CANDIDATES VIEW */}
      {activeViewMode === 'candidates' && (
        <>
          {/* Control Bar: Filters, Search, and Propose Button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technologies, questions, or mechanisms..."
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900/90 pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Action Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-mono font-bold text-white hover:bg-blue-500 transition-colors shadow-md"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Propose Technology</span>
              </button>
            </div>
          </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-neutral-800/80 pb-3">
        {statusOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setSelectedStatusFilter(opt.value)}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono transition-all ${
              selectedStatusFilter === opt.value
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50 font-bold shadow-sm'
                : 'bg-neutral-900/60 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <span>{opt.label}</span>
            <span className="rounded bg-neutral-800 px-1.5 py-0.2 text-[10px] text-neutral-400">
              {opt.count}
            </span>
          </button>
        ))}
      </div>

      {/* Technologies List */}
      <div className="space-y-4">
        {filteredTechnologies.length === 0 ? (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-12 text-center text-xs text-neutral-400 font-mono">
            No emerging technologies match your search or filter criteria.
          </div>
        ) : (
          filteredTechnologies.map((tech) => {
            const isExpanded = expandedCardId === tech.id;
            const badge = getStatusBadge(tech.evaluationStatus);
            const hasVoted = votedIds.has(tech.id);

            return (
              <div
                key={tech.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 shadow-xl ${
                  isExpanded ? 'border-blue-500/50 ring-1 ring-blue-500/30' : 'border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Main Card Header (Click to expand) */}
                <div
                  onClick={() => setExpandedCardId(isExpanded ? null : tech.id)}
                  className="cursor-pointer p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-neutral-900/40"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-base">🔷</span>
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold border ${badge.bg}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${badge.dot}`} />
                        <span>Status: {tech.evaluationStatus}</span>
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        • {tech.readinessLevel}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {tech.title}
                    </h3>

                    {/* The Prominent Evaluation Question */}
                    <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-3 font-mono text-xs text-blue-200">
                      <span className="text-neutral-500 block text-[10px] uppercase font-bold mb-0.5">Inquiry Question:</span>
                      "{tech.question}"
                    </div>
                  </div>

                  {/* Right Metrics & Expand Action */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-neutral-400 block">Plausibility Score</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-16 h-2 rounded-full bg-neutral-800 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" 
                              style={{ width: `${tech.plausibilityScore}%` }}
                            />
                          </div>
                          <span className="text-xs font-mono font-bold text-cyan-300">
                            {tech.plausibilityScore}%
                          </span>
                        </div>
                      </div>

                      {/* Vote Button */}
                      <button
                        onClick={(e) => handleVote(tech.id, e)}
                        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-mono font-bold transition-all border ${
                          hasVoted
                            ? 'bg-blue-500/20 text-blue-300 border-blue-500/50'
                            : 'bg-neutral-800/80 text-neutral-400 border-neutral-700 hover:text-white'
                        }`}
                        title="Endorse scientific plausibility"
                      >
                        <ThumbsUp className="h-3.5 w-3.5" />
                        <span>{tech.upvotes}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-mono text-neutral-400">
                      <span>{isExpanded ? 'Collapse' : 'Inspect'}</span>
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Inspection Drawer */}
                {isExpanded && (
                  <div className="border-t border-neutral-800/80 bg-neutral-950/80 p-5 space-y-5 animate-in fade-in duration-150">
                    {/* Scientific Rationale */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                        <FlaskConical className="h-3.5 w-3.5" />
                        <span>Scientific Rationale & Biological Mechanism</span>
                      </h4>
                      <p className="text-xs text-neutral-200 leading-relaxed">
                        {tech.scientificRationale}
                      </p>
                    </div>

                    {/* Core Hypothesis */}
                    <div className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-3.5 space-y-1">
                      <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">Formal Working Hypothesis:</span>
                      <p className="text-xs text-blue-100 font-mono leading-relaxed">
                        {tech.coreHypothesis}
                      </p>
                    </div>

                    {/* Two-Column Grid: Preconditions vs Risks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Preconditions */}
                      <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 space-y-2">
                        <h5 className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>Required Scientific Preconditions</span>
                        </h5>
                        <ul className="space-y-1.5 text-xs text-neutral-300">
                          {tech.requiredPreconditions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Risks & Physical Constraints */}
                      <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-4 space-y-2">
                        <h5 className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          <span>Key Risks & Physical Constraints</span>
                        </h5>
                        <ul className="space-y-1.5 text-xs text-neutral-300">
                          {tech.keyRisksOrBarriers.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-amber-500 font-bold">•</span>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Proposed Protocol */}
                    <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 space-y-1.5">
                      <h5 className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5" />
                        <span>Proposed Benchmarking Protocol</span>
                      </h5>
                      <p className="text-xs font-mono text-neutral-200 leading-relaxed">
                        {tech.proposedExperimentalProtocol}
                      </p>
                    </div>

                    {/* Precedents and Current Assessment Notes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold flex items-center gap-1.5">
                          <BookOpen className="h-3.5 w-3.5 text-blue-400" />
                          <span>Academic Literature Precedents:</span>
                        </span>
                        <div className="space-y-1">
                          {tech.academicPrecedents.map((citation, idx) => (
                            <div key={idx} className="rounded bg-neutral-900 border border-neutral-800 p-2 text-[11px] font-mono text-neutral-300">
                              {citation}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold flex items-center gap-1.5">
                          <Info className="h-3.5 w-3.5 text-cyan-400" />
                          <span>Current Committee Assessment:</span>
                        </span>
                        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 text-xs text-neutral-300 leading-relaxed">
                          {tech.currentAssessmentNotes}
                        </div>
                      </div>
                    </div>

                    {/* Jump to Co-Scientist */}
                    <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
                      <div className="text-[11px] text-neutral-500 font-mono">
                        Pipeline ID: <span className="text-neutral-400">{tech.id}</span>
                      </div>
                      {onNavigateTab && (
                        <button
                          onClick={() => onNavigateTab('ai-assistant')}
                          className="flex items-center gap-1.5 rounded-lg border border-blue-500/40 bg-blue-950/30 px-3 py-1.5 text-xs font-mono font-bold text-blue-300 hover:bg-blue-900/50 transition-all"
                        >
                          <span>Ask AI Co-Scientist about this tech</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Propose Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-blue-500/50 bg-neutral-950 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-base">🔷</span>
                <h3 className="text-base font-bold text-white font-mono">
                  Propose Emerging Technology
                </h3>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateProposal} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-neutral-300 block mb-1">
                  Technology Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Endophytic Bacterial Bio-Batteries"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-300 block mb-1">
                  Core Scientific Question *
                </label>
                <textarea
                  required
                  rows={2}
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Can endophytes living in hyperaccumulator xylem donate electrons to micro-electrodes?"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-300 block mb-1">
                  Initial Evaluation Status
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value as any)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="Research Question">Research Question</option>
                  <option value="Literature Review">Literature Review</option>
                  <option value="Concept Evaluation">Concept Evaluation</option>
                  <option value="Feasibility Assessment">Feasibility Assessment</option>
                  <option value="Future Pilot">Future Pilot</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-300 block mb-1">
                  Scientific Rationale
                </label>
                <textarea
                  rows={3}
                  value={newRationale}
                  onChange={(e) => setNewRationale(e.target.value)}
                  placeholder="Detail the biophysical, chemical, or engineering mechanism..."
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="rounded-lg border border-neutral-700 px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-mono font-bold text-white hover:bg-blue-500 shadow-md"
                >
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
};
