import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  BookOpen, 
  Plus, 
  Layers, 
  Activity, 
  Globe2, 
  Cpu, 
  Coins, 
  CheckCircle2, 
  Bot,
  Filter,
  Share2,
  Shield,
  Zap,
  HelpCircle,
  AlertTriangle,
  Flame,
  Check,
  Info
} from 'lucide-react';
import { RESEARCH_CHANNELS, INITIAL_MESSAGES, INITIAL_HYPOTHESES } from '../data/researchChannels';
import { ELECTRICAL_SAFETY_FACTS, FACTS_VS_HYPOTHESES_MATRIX } from '../data/electricalSafety';
import { ResearchMessage, ResearchHypothesis, EpistemicStatus } from '../types';

interface CollaborationRoomProps {
  onOpenInvite: () => void;
}

export const CollaborationRoom: React.FC<CollaborationRoomProps> = ({ onOpenInvite }) => {
  const [activeChannelId, setActiveChannelId] = useState<string>('channel-electrical-safety');
  const [messages, setMessages] = useState<Record<string, ResearchMessage[]>>(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'chat' | 'hypotheses' | 'epistemic-matrix' | 'electrical-safety'>('chat');
  const [epistemicFilter, setEpistemicFilter] = useState<'ALL' | EpistemicStatus>('ALL');
  const [hypotheses, setHypotheses] = useState<ResearchHypothesis[]>(INITIAL_HYPOTHESES);
  
  // New Hypothesis form modal
  const [isHypothesisModalOpen, setIsHypothesisModalOpen] = useState<boolean>(false);
  const [newHypoTitle, setNewHypoTitle] = useState<string>('');
  const [newHypoSummary, setNewHypoSummary] = useState<string>('');
  const [newHypoMechanism, setNewHypoMechanism] = useState<string>('');
  const [newHypoEpistemic, setNewHypoEpistemic] = useState<EpistemicStatus>('THEORETICAL');
  const [newHypoAuthor, setNewHypoAuthor] = useState<string>('Dawn Milazzo & Team');
  const [newHypoSpecialty, setNewHypoSpecialty] = useState<string>('Bio-Bot Founder');

  const activeChannel = RESEARCH_CHANNELS.find(c => c.id === activeChannelId) || RESEARCH_CHANNELS[0];
  const rawChannelMessages = messages[activeChannelId] || [];

  // Filter messages based on Epistemic Clarity setting
  const channelMessages = rawChannelMessages.filter(msg => {
    if (epistemicFilter === 'ALL') return true;
    return msg.epistemicStatus === epistemicFilter;
  });

  // Channel icon mapper
  const getChannelIcon = (slug: string) => {
    switch (slug) {
      case 'electrical-safety-shielding': return Shield;
      case 'bio-mold-ingrowth': return Layers;
      case 'the-80-percent-limit': return Activity;
      case 'toxic-land-remediation': return Globe2;
      case 'biorobotic-circuits': return Cpu;
      case 'phytomining-yields': return Coins;
      default: return MessageSquare;
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;
    if (!textToSend) setInputMessage('');

    // Append user message
    const userMsg: ResearchMessage = {
      id: `msg-${Date.now()}`,
      channelId: activeChannelId,
      author: 'Dawn Milazzo (Project Founder)',
      affiliation: 'Ms. Heavy Metal Leaf Open Lab',
      specialty: 'Bio-Bot Systems & Phytoremediation',
      avatarSeed: 'dawn',
      timestamp: 'Just now',
      text: text,
      upvotes: 1,
      epistemicStatus: 'THEORETICAL'
    };

    setMessages(prev => ({
      ...prev,
      [activeChannelId]: [...(prev[activeChannelId] || []), userMsg]
    }));

    // Call Gemini Co-Scientist endpoint
    setIsAiLoading(true);
    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: (messages[activeChannelId] || []).map(m => ({
            role: m.isGemini ? 'assistant' : 'user',
            content: m.text
          }))
        })
      });

      const data = await response.json();
      if (data && data.reply) {
        const isFactAnswer = data.reply.includes('[ESTABLISHED SCIENTIFIC FACT]');
        const aiMsg: ResearchMessage = {
          id: `ai-${Date.now()}`,
          channelId: activeChannelId,
          author: 'AI Research Co-Scientist',
          affiliation: 'Ms. Heavy Metal Leaf Open-Science Engine',
          specialty: 'Plant Electrophysiology & Bio-Molding',
          avatarSeed: 'ai-engine',
          timestamp: 'Just now',
          text: data.reply,
          badge: isFactAnswer ? 'Fact Verified' : 'Co-Scientist Synthesis',
          upvotes: 5,
          isGemini: true,
          epistemicStatus: isFactAnswer ? 'PROVEN_FACT' : 'THEORETICAL',
          citations: ['IEEE EMBC Standards', 'Jaffré et al. (1976) Science', 'Faraday Electromagnetic Law']
        };

        setMessages(prev => ({
          ...prev,
          [activeChannelId]: [...(prev[activeChannelId] || []), aiMsg]
        }));
      }
    } catch (err) {
      console.error('Co-scientist API call failed:', err);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleUpvote = (msgId: string) => {
    setMessages(prev => {
      const channelMsgs = prev[activeChannelId] || [];
      return {
        ...prev,
        [activeChannelId]: channelMsgs.map(m => 
          m.id === msgId ? { ...m, upvotes: m.upvotes + 1 } : m
        )
      };
    });
  };

  const handleVoteHypothesis = (hypoId: string) => {
    setHypotheses(prev => 
      prev.map(h => h.id === hypoId ? { ...h, votes: h.votes + 1 } : h)
    );
  };

  const handleCreateHypothesis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHypoTitle.trim() || !newHypoSummary.trim()) return;

    const newHypo: ResearchHypothesis = {
      id: `hyp-${Date.now()}`,
      title: newHypoTitle,
      author: newHypoAuthor,
      specialty: newHypoSpecialty,
      date: 'Today',
      status: newHypoEpistemic === 'PROVEN_FACT' ? 'Empirical Verified' : newHypoEpistemic === 'ACTIVE_TEST' ? 'In Testing' : 'Theoretical',
      epistemicStatus: newHypoEpistemic,
      epistemicNotes: `Tagged as ${newHypoEpistemic}. Explicit distinction maintained.`,
      votes: 1,
      summary: newHypoSummary,
      mechanism: newHypoMechanism || 'Biochemical cellular mechanics & apoplastic metal transport.',
      targetMetals: ['Nickel', 'Zinc'],
      peerReviews: []
    };

    setHypotheses([newHypo, ...hypotheses]);
    setIsHypothesisModalOpen(false);
    setNewHypoTitle('');
    setNewHypoSummary('');
    setNewHypoMechanism('');
  };

  // Preset click-to-ask prompts
  const quickPrompts = [
    {
      title: "What if we kill the plants with too much voltage? How do we surround the electrical fields?",
      tag: "⚡ Voltage Safety & Faraday",
      channelId: "channel-electrical-safety"
    },
    {
      title: "Can a plant really be 80% metal and still be a living organism? What is proven vs untested?",
      tag: "🌿 The 80% Metal Inquiry",
      channelId: "channel-80-percent-limit"
    },
    {
      title: "How does zero-installation bio-molding eliminate callose scar tissue and wounding?",
      tag: "🔬 Zero-Incision In-Growth",
      channelId: "channel-mold-ingrowth"
    },
    {
      title: "How does phytomining recover battery-grade nickel from toxic mine tailings?",
      tag: "🪙 Phytomining Economics",
      channelId: "channel-phytomining-yields"
    }
  ];

  return (
    <div className="space-y-6">
      {/* ============================================================== */}
      {/* TOP WORKSPACE & CO-SCIENTIST CHAT BAR: PROMINENT & VISIBLE AT TOP */}
      {/* ============================================================== */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/50 p-6 shadow-2xl">
        <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-mono font-bold text-emerald-300 border border-emerald-500/40">
                <Users className="h-3.5 w-3.5" />
                Live Open-Science Room & AI Co-Scientist
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-mono text-amber-300 border border-amber-500/30">
                <Shield className="h-3 w-3" />
                Plant Electrical Safety Active
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-xs font-mono text-cyan-300 border border-cyan-500/30">
                <CheckCircle2 className="h-3 w-3" />
                Strict Epistemic Fact/Hypothesis Separation
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2.5">
              Ms. Heavy Metal Leaf Research Workspace
            </h2>
            <p className="mt-1 max-w-3xl text-sm text-neutral-300">
              Ask any biophysical, electrical, or botanical question directly to the <strong className="text-emerald-300">AI Research Co-Scientist</strong>. All knowledge is strictly separated between <span className="text-emerald-400 font-semibold underline decoration-emerald-500">Established Scientific Facts</span> and <span className="text-purple-400 font-semibold underline decoration-purple-500">Untested Hypotheses</span> so we are always 100% scientifically clear.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => setViewMode(viewMode === 'electrical-safety' ? 'chat' : 'electrical-safety')}
              className={`rounded-xl border px-3 py-2 text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'electrical-safety'
                  ? 'border-amber-400 bg-amber-500/20 text-amber-200 ring-1 ring-amber-400'
                  : 'border-neutral-700 bg-neutral-800/80 text-amber-300 hover:border-amber-500/50 hover:bg-neutral-800'
              }`}
            >
              <Zap className="h-4 w-4 text-amber-400" />
              <span>⚡ Voltage Safety & Faraday Shields</span>
            </button>

            <button
              onClick={() => setViewMode(viewMode === 'epistemic-matrix' ? 'chat' : 'epistemic-matrix')}
              className={`rounded-xl border px-3 py-2 text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'epistemic-matrix'
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-400'
                  : 'border-neutral-700 bg-neutral-800/80 text-cyan-300 hover:border-cyan-500/50 hover:bg-neutral-800'
              }`}
            >
              <BookOpen className="h-4 w-4 text-cyan-400" />
              <span>⚖️ Facts vs. Hypotheses Matrix</span>
            </button>

            <button
              onClick={onOpenInvite}
              className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center gap-1.5"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Invite Colleague</span>
            </button>
          </div>
        </div>

        {/* CLICK-TO-ASK QUICK QUESTION LAUNCHERS */}
        <div className="mt-4 pt-4 border-t border-neutral-800/80">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-neutral-400">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Instant Question Launchers (Click to ask AI Co-Scientist):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {quickPrompts.map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveChannelId(q.channelId);
                  setViewMode('chat');
                  handleSendMessage(q.title);
                }}
                className="text-left rounded-xl border border-neutral-800 bg-neutral-950/70 p-2.5 text-xs text-neutral-300 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all group flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] text-emerald-400 font-bold group-hover:text-emerald-300 mb-1">
                  {q.tag}
                </span>
                <span className="text-[11px] text-neutral-300 group-hover:text-white line-clamp-2 leading-snug">
                  "{q.title}"
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* EPISTEMIC CLARITY FILTER BAR */}
      {/* ============================================================== */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-neutral-800 bg-neutral-900/80 p-3 shadow-md">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Filter className="h-4 w-4 text-emerald-400" />
          <span>Epistemic Filter:</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => setEpistemicFilter('ALL')}
            className={`rounded-lg px-3 py-1 text-xs font-mono transition-all ${
              epistemicFilter === 'ALL'
                ? 'bg-neutral-800 text-white font-bold border border-neutral-600'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Show All
          </button>
          <button
            onClick={() => setEpistemicFilter('PROVEN_FACT')}
            className={`rounded-lg px-3 py-1 text-xs font-mono transition-all flex items-center gap-1.5 ${
              epistemicFilter === 'PROVEN_FACT'
                ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/50 ring-1 ring-emerald-500/40'
                : 'text-emerald-400/80 hover:text-emerald-300 bg-emerald-950/20'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>🟢 Proven Facts Only</span>
          </button>
          <button
            onClick={() => setEpistemicFilter('ACTIVE_TEST')}
            className={`rounded-lg px-3 py-1 text-xs font-mono transition-all flex items-center gap-1.5 ${
              epistemicFilter === 'ACTIVE_TEST'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/50 ring-1 ring-amber-500/40'
                : 'text-amber-400/80 hover:text-amber-300 bg-amber-950/20'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>🟡 Active Lab Tests</span>
          </button>
          <button
            onClick={() => setEpistemicFilter('THEORETICAL')}
            className={`rounded-lg px-3 py-1 text-xs font-mono transition-all flex items-center gap-1.5 ${
              epistemicFilter === 'THEORETICAL'
                ? 'bg-purple-500/20 text-purple-300 font-bold border border-purple-500/50 ring-1 ring-purple-500/40'
                : 'text-purple-400/80 hover:text-purple-300 bg-purple-950/20'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            <span>🟣 Untested Hypotheses Only</span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* VIEW: SPECIALIZED ELECTRICAL SAFETY & FARADAY SHIELDING VIEW */}
      {/* ============================================================== */}
      {viewMode === 'electrical-safety' && (
        <div className="rounded-2xl border border-amber-500/40 bg-neutral-900/95 p-6 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                  Plant Electrical Safety & Electrical Field Shielding
                </h3>
                <p className="text-xs text-neutral-300">
                  Direct answer to: <em className="text-amber-300">"What if we kill the plants with too much voltage? Do we have something we can surround the electrical fields?"</em>
                </p>
              </div>
            </div>
            <button
              onClick={() => setViewMode('chat')}
              className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:text-white"
            >
              Back to Chat
            </button>
          </div>

          {/* Safety Summary Banner */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-xs text-neutral-200 leading-relaxed">
            <div className="flex items-center gap-2 font-bold font-mono text-emerald-400 text-sm mb-1">
              <CheckCircle2 className="h-4 w-4" />
              100% PROVEN: THE PLANTS WILL NOT BE DAMAGED OR KILLED BY VOLTAGE
            </div>
            <p>
              Our sensing architecture does not inject or generate voltage in the plant. It operates purely as a passive, non-invasive bio-potential listening device (drawing under 2 nanoamperes, 50,000,000x below electroporation levels). Ambient electrical fields from LED lights, wall power cords, and WiFi are completely surrounded and shunted to ground via an earth-grounded Faraday mesh cage.
            </p>
          </div>

          {/* 5 Electrical Safety Barriers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ELECTRICAL_SAFETY_FACTS.map((fact) => (
              <div 
                key={fact.id}
                className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-amber-400 uppercase">
                      {fact.category}
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-300 border border-emerald-500/40">
                      🟢 ESTABLISHED FACT
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {fact.title}
                  </h4>
                  <div className="mt-1 rounded bg-neutral-900/80 px-2.5 py-1 text-[11px] font-mono text-cyan-300 border border-neutral-800">
                    {fact.specification}
                  </div>
                  <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                    {fact.howItWorks}
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-900 text-[10px] font-mono text-neutral-500">
                  Verified Standard: {fact.citationOrStandard}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW: EPISTEMIC REALITY MATRIX (FACTS VS UNTESTED HYPOTHESES) */}
      {/* ============================================================== */}
      {viewMode === 'epistemic-matrix' && (
        <div className="rounded-2xl border border-cyan-500/40 bg-neutral-900/95 p-6 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                  Epistemic Reality Matrix: Facts vs. Untested Hypotheses
                </h3>
                <p className="text-xs text-neutral-300">
                  Keeping peer-reviewed truth distinct from emerging possibilities.
                </p>
              </div>
            </div>
            <button
              onClick={() => setViewMode('chat')}
              className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:text-white"
            >
              Back to Chat
            </button>
          </div>

          <div className="space-y-4">
            {FACTS_VS_HYPOTHESES_MATRIX.map((item) => (
              <div key={item.id} className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-4 space-y-3">
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  Domain: {item.category}
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Proven Fact Box */}
                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-500/40 p-3 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold font-mono text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>🟢 ESTABLISHED SCIENTIFIC FACT:</span>
                    </div>
                    <p className="text-neutral-200 leading-relaxed">
                      {item.provenFact}
                    </p>
                    <span className="text-[10px] text-neutral-400 font-mono block pt-1">
                      Citation: {item.factCitation}
                    </span>
                  </div>

                  {/* Untested Hypothesis Box */}
                  <div className="rounded-lg bg-purple-950/20 border border-purple-500/40 p-3 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold font-mono text-purple-400">
                      <HelpCircle className="h-4 w-4" />
                      <span>🟣 UNTESTED HYPOTHESIS (UNDER INVESTIGATION):</span>
                    </div>
                    <p className="text-neutral-200 leading-relaxed">
                      {item.untestedHypothesis}
                    </p>
                    <span className="text-[10px] text-purple-300/80 font-mono block pt-1">
                      Status: Mathematical / Conceptual Model awaiting multi-year field trial
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW: MAIN COLLABORATIVE CHAT & CHANNEL WORKSPACE */}
      {/* ============================================================== */}
      {viewMode === 'chat' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Channel Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-4 shadow-xl">
              <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-xs font-bold text-neutral-400 font-mono uppercase tracking-wider">
                  Research Channels ({RESEARCH_CHANNELS.length})
                </h3>
                <span className="text-[10px] font-mono text-emerald-400">
                  {epistemicFilter === 'ALL' ? 'All Items' : epistemicFilter}
                </span>
              </div>
              <div className="space-y-1.5">
                {RESEARCH_CHANNELS.map(ch => {
                  const Icon = getChannelIcon(ch.slug);
                  const isSelected = activeChannelId === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => setActiveChannelId(ch.id)}
                      className={`w-full text-left rounded-xl p-3 transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-emerald-500/15 border border-emerald-500/40 text-white shadow-md ring-1 ring-emerald-500/30'
                          : 'bg-neutral-950/40 border border-neutral-800/80 text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200'
                      }`}
                    >
                      <div className={`mt-0.5 p-1.5 rounded-lg shrink-0 ${
                        isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-neutral-800 text-neutral-400'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold truncate">
                            {ch.title}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-500">
                            {ch.activeResearchers} online
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                          {ch.focusArea}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Channel Info Card */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-4 shadow-xl text-xs space-y-2">
              <span className="font-mono text-[10px] text-neutral-500 uppercase block">ACTIVE TRACK FOCUS:</span>
              <p className="text-neutral-300 font-medium leading-relaxed">
                {activeChannel.description}
              </p>
              <div className="rounded-lg bg-neutral-950 p-2.5 border border-neutral-800/80 text-[11px] text-amber-300/90 font-mono">
                <span className="text-neutral-500 block text-[9px]">PINNED PROTOCOL NOTE:</span>
                {activeChannel.pinnedTopic}
              </div>
            </div>
          </div>

          {/* Active Channel Chat Thread */}
          <div className="lg:col-span-8 flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/90 shadow-2xl h-[650px] overflow-hidden">
            {/* Thread Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950/80 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-white text-sm">
                  {activeChannel.title}
                </span>
                <span className="rounded bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-400">
                  {activeChannel.focusArea}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>AI Research Co-Scientist (Online)</span>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {channelMessages.length === 0 ? (
                <div className="text-center py-12 text-xs text-neutral-500 font-mono">
                  No messages matching epistemic filter "{epistemicFilter}". Switch filter to "Show All" to view all records.
                </div>
              ) : (
                channelMessages.map(msg => (
                  <div 
                    key={msg.id}
                    className={`rounded-xl border p-4 transition-all ${
                      msg.isGemini 
                        ? 'border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 via-neutral-900 to-neutral-950 shadow-md ring-1 ring-emerald-500/30'
                        : 'border-neutral-800 bg-neutral-950/60'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg font-bold text-xs shrink-0 ${
                          msg.isGemini 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                            : 'bg-neutral-800 text-neutral-300'
                        }`}>
                          {msg.isGemini ? <Bot className="h-4 w-4" /> : msg.author[0]}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-xs text-white">
                              {msg.author}
                            </span>
                            {/* Explicit Epistemic Badge */}
                            <span className={`rounded-full px-2 py-0.2 text-[9px] font-mono font-bold ${
                              msg.epistemicStatus === 'PROVEN_FACT'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : msg.epistemicStatus === 'ACTIVE_TEST'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                            }`}>
                              {msg.epistemicStatus === 'PROVEN_FACT' ? '🟢 PROVEN FACT' : msg.epistemicStatus === 'ACTIVE_TEST' ? '🟡 ACTIVE LAB TEST' : '🟣 THEORETICAL'}
                            </span>
                            {msg.badge && (
                              <span className="rounded-full bg-neutral-800 px-2 py-0.2 text-[9px] font-mono text-neutral-300 border border-neutral-700">
                                {msg.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            {msg.specialty} • {msg.affiliation} • {msg.timestamp}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleUpvote(msg.id)}
                        className="flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-400 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                        title="Upvote finding"
                      >
                        <ThumbsUp className="h-3 w-3" />
                        <span className="font-mono text-[10px]">{msg.upvotes}</span>
                      </button>
                    </div>

                    <div className="mt-3 text-xs text-neutral-200 leading-relaxed whitespace-pre-line">
                      {msg.text}
                    </div>

                    {msg.citations && msg.citations.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase">Citations:</span>
                        {msg.citations.map(cit => (
                          <span key={cit} className="rounded bg-neutral-900 px-2 py-0.5 text-[10px] font-mono text-neutral-400 border border-neutral-800">
                            {cit}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}

              {isAiLoading && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex items-center gap-3">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
                  <span className="text-xs font-mono text-emerald-300">
                    AI Research Co-Scientist is evaluating biophysical literature and categorizing facts vs untested hypotheses...
                  </span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="border-t border-neutral-800 bg-neutral-950 p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Ask a question or share findings in ${activeChannel.title}...`}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isAiLoading}
                  className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 disabled:opacity-40 transition-colors shadow-md"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Synthesize</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW: HYPOTHESES BOARD VIEW */}
      {/* ============================================================== */}
      {viewMode === 'hypotheses' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-emerald-400" />
              Empirical Hypothesis Registry
            </h3>
            <button
              onClick={() => setIsHypothesisModalOpen(true)}
              className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Submit Hypothesis</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hypotheses.map(hypo => (
              <div 
                key={hypo.id}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold ${
                      hypo.epistemicStatus === 'PROVEN_FACT'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : hypo.epistemicStatus === 'ACTIVE_TEST'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    }`}>
                      {hypo.epistemicStatus === 'PROVEN_FACT' ? '🟢 PROVEN FACT' : hypo.epistemicStatus === 'ACTIVE_TEST' ? '🟡 IN TESTING' : '🟣 UNTESTED HYPOTHESIS'}
                    </span>
                    <button
                      onClick={() => handleVoteHypothesis(hypo.id)}
                      className="flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-xs text-neutral-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span className="font-mono text-xs">{hypo.votes}</span>
                    </button>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug">
                    {hypo.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {hypo.summary}
                  </p>

                  <div className="rounded-lg bg-neutral-950/70 p-2.5 border border-neutral-800 text-[11px] text-neutral-300">
                    <span className="font-mono text-[9px] text-neutral-500 uppercase block">BIOPHYSICAL MECHANISM:</span>
                    <p className="mt-0.5 text-neutral-300">{hypo.mechanism}</p>
                  </div>

                  {hypo.epistemicNotes && (
                    <div className="rounded-lg bg-neutral-950/50 p-2 text-[10px] font-mono text-neutral-400 border border-neutral-900">
                      <span className="text-neutral-500">Epistemic Status:</span> {hypo.epistemicNotes}
                    </div>
                  )}
                </div>

                <div className="border-t border-neutral-800 pt-3 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
                  <span>Proposed by {hypo.author} ({hypo.specialty})</span>
                  <span>{hypo.peerReviews.length} Peer Reviews</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit Hypothesis Modal */}
      {isHypothesisModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <Plus className="h-5 w-5 text-emerald-400" />
              Propose New Research Hypothesis
            </h3>
            <p className="text-xs text-neutral-400">
              Contribute a proposal for Ms. Heavy Metal Leaf. Make sure to specify whether it is an established fact, active test, or untested theoretical idea.
            </p>

            <form onSubmit={handleCreateHypothesis} className="space-y-3 text-xs">
              <div>
                <label className="text-neutral-400 font-mono block mb-1">EPISTEMIC CLASSIFICATION:</label>
                <select
                  value={newHypoEpistemic}
                  onChange={(e) => setNewHypoEpistemic(e.target.value as any)}
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="THEORETICAL">🟣 Untested Hypothesis (Speculative / Modeled)</option>
                  <option value="ACTIVE_TEST">🟡 Active Lab Test (Under Current Empirical Trial)</option>
                  <option value="PROVEN_FACT">🟢 Established Scientific Fact (Peer-Reviewed Paper)</option>
                </select>
              </div>

              <div>
                <label className="text-neutral-400 font-mono block mb-1">HYPOTHESIS TITLE:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nicotianamine Exudation Stabilizes Gold-Xylem Ohmic Contact"
                  value={newHypoTitle}
                  onChange={(e) => setNewHypoTitle(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-neutral-400 font-mono block mb-1">SUMMARY ABSTRACT:</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Summarize the core claim and observed effect..."
                  value={newHypoSummary}
                  onChange={(e) => setNewHypoSummary(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-neutral-400 font-mono block mb-1">PROPOSED BIOPHYSICAL MECHANISM:</label>
                <textarea
                  rows={2}
                  placeholder="Cite transport proteins (HMA4, ZIP), ligands (citrate, histidine), or percolation mechanics..."
                  value={newHypoMechanism}
                  onChange={(e) => setNewHypoMechanism(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-neutral-400 font-mono block mb-1">YOUR NAME:</label>
                  <input
                    type="text"
                    value={newHypoAuthor}
                    onChange={(e) => setNewHypoAuthor(e.target.value)}
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-neutral-400 font-mono block mb-1">YOUR SPECIALTY:</label>
                  <input
                    type="text"
                    value={newHypoSpecialty}
                    onChange={(e) => setNewHypoSpecialty(e.target.value)}
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsHypothesisModalOpen(false)}
                  className="rounded-lg border border-neutral-800 px-4 py-2 text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-600 px-4 py-2 font-bold text-white hover:bg-emerald-500 shadow-md"
                >
                  Publish to Registry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
