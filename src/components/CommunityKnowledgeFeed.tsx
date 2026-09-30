import React, { useState } from 'react';
import { 
  Activity, 
  FileText, 
  FlaskConical, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  ThumbsUp, 
  Bookmark, 
  Share2, 
  Plus, 
  Filter, 
  Search, 
  Sparkles, 
  Award, 
  Leaf, 
  Zap, 
  Send, 
  Eye, 
  CornerDownRight, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { ReputationRole, EpistemicLifecycleStage } from '../data/communityKnowledge';

export type FeedCategory = 'ALL' | 'RESEARCH_NOTES' | 'EXPERIMENT_LOGS' | 'PEER_REVIEWS';

export interface FeedItem {
  id: string;
  author: string;
  authorTitle: string;
  authorOrg: string;
  authorRole: ReputationRole;
  authorAvatarColor: string;
  type: 'RESEARCH_NOTE' | 'EXPERIMENT_LOG' | 'PEER_REVIEW' | 'ACTIVITY';
  title: string;
  content: string;
  timestamp: string;
  status?: EpistemicLifecycleStage;
  tags: string[];
  metrics: {
    upvotes: number;
    comments: number;
    bookmarks: number;
  };
  attachments?: string[];
  peerReviewTarget?: string;
  peerReviewScore?: number;
}

export const INITIAL_FEED_ITEMS: FeedItem[] = [
  {
    id: 'feed-1',
    author: 'Dawn',
    authorTitle: 'Platform Architect & Ecological Technologist',
    authorOrg: 'Heavy Metal Leaf Initiative',
    authorRole: 'Project Lead',
    authorAvatarColor: 'from-emerald-500 to-teal-600',
    type: 'EXPERIMENT_LOG',
    title: 'Trial Run #14: Sudbury Slag Berkheya Bio-Ore Harvest',
    content: 'Completed 60-day chronosequence evaluation on 2,400 ppm Ni smelter tailings. Apoplastic leaf concentration reached 21.4% dry-weight ash without premature senescence. Zero-incision gold electrodes retained stable contact impedance of 4.8 kΩ under continuous 1 TΩ passive sensing.',
    timestamp: '12m ago',
    status: '🟡 Experimental',
    tags: ['Phytomining', 'Nickel Recovery', 'Bioelectronics'],
    metrics: { upvotes: 24, comments: 6, bookmarks: 8 },
    attachments: ['sudbury_assay_spectroscopy.csv', 'potentiostat_log_ch3.bin']
  },
  {
    id: 'feed-2',
    author: 'Dr. Elena Vance',
    authorTitle: 'Lead Plant Electrophysiologist',
    authorOrg: 'Zurich Phytotechnology Institute',
    authorRole: 'Subject Matter Expert',
    authorAvatarColor: 'from-amber-500 to-orange-600',
    type: 'PEER_REVIEW',
    title: 'Peer Review: SOP-01 Zero-Incision Micro-Mold Protocol',
    content: 'Thoroughly examined the Faraday chamber baseline recordings. The suppression of 50/60 Hz ambient interference exceeds 86 dB. Recommend increasing the degassing duration of the PDMS elastomer from 20 to 35 minutes to eliminate micro-voids at the gold-contact boundary.',
    timestamp: '45m ago',
    status: '🟢 Verified Science',
    tags: ['Peer Review', 'Electrophysiology', 'Faraday Shielding'],
    peerReviewTarget: 'Cleanroom Protocol SOP-01 (In-Growth Electrodes)',
    peerReviewScore: 94,
    metrics: { upvotes: 19, comments: 4, bookmarks: 5 }
  },
  {
    id: 'feed-3',
    author: 'David Handy',
    authorTitle: 'Space Agriculture & BLSS Researcher',
    authorOrg: 'Space Agriculture Research Group',
    authorRole: 'Research Contributor',
    authorAvatarColor: 'from-blue-500 to-indigo-600',
    type: 'RESEARCH_NOTE',
    title: 'Research Note: Calcium Wave Propagation in Lunar Gravity ECLSS',
    content: 'Preliminary theoretical modeling indicates that GLR-mediated Ca²⁺ waves in Brassica xylem travel ~1.2 mm/s under 1/6th g, compared to 1.8 mm/s terrestrial baseline. This slower depolarization velocity must be accounted for in threshold tripwires for automated nutrient dosing pumps.',
    timestamp: '2h ago',
    status: '🔷 Emerging',
    tags: ['Space Agriculture', 'Closed-Loop Systems', 'Bioregenerative'],
    metrics: { upvotes: 31, comments: 9, bookmarks: 12 }
  },
  {
    id: 'feed-4',
    author: 'Sarah Chen',
    authorTitle: 'Wetland Ecologist',
    authorOrg: 'Cascade Ecological Restoration Lab',
    authorRole: 'Contributor',
    authorAvatarColor: 'from-cyan-500 to-teal-600',
    type: 'EXPERIMENT_LOG',
    title: 'Log #08: Puget Sound Bio-Raft Storm Surge Influx',
    content: 'Following a 34mm rainfall event, copper cation levels in the detention pond spiked to 420 µg/L. The Typha root mats attenuated dissolved Cu²⁺ to <85 µg/L within 36 hours. Continuous ISE sensor logged uninterrupted data to the edge gateway.',
    timestamp: '5h ago',
    status: '🟢 Verified Science',
    tags: ['Wetland Systems', 'Water Quality', 'Sensor Telemetry'],
    metrics: { upvotes: 18, comments: 3, bookmarks: 4 },
    attachments: ['storm_surge_telemetry_batch4.json']
  },
  {
    id: 'feed-5',
    author: 'Prof. Amara Diallo',
    authorTitle: 'Chair of Agronomic Phytoremediation',
    authorOrg: 'Institut Polytechnique de Montréal',
    authorRole: 'Subject Matter Expert',
    authorAvatarColor: 'from-purple-500 to-pink-600',
    type: 'PEER_REVIEW',
    title: 'Review: Citric Acid Chelation Pulse Kinetics',
    content: 'Replicated the chelator timing sequence in cold-climate greenhouse trials. Confirming that 2.5 mM citric acid additions induce rapid vacuolar loading without inducing wilting, provided soil moisture remains above 65% field capacity.',
    timestamp: '8h ago',
    status: '🟢 Verified Science',
    tags: ['Peer Review', 'Soil Chemistry', 'Translocation'],
    peerReviewTarget: 'Vacuolar Chelation Protocol v1.2',
    peerReviewScore: 91,
    metrics: { upvotes: 27, comments: 5, bookmarks: 9 }
  },
  {
    id: 'feed-6',
    author: 'Liam O’Connor',
    authorTitle: 'IoT Embedded Systems Architect',
    authorOrg: 'Open Sensing Hardware Collective',
    authorRole: 'Contributor',
    authorAvatarColor: 'from-emerald-600 to-green-700',
    type: 'RESEARCH_NOTE',
    title: 'Research Note: Sub-Milliwatt TinyML Quantization for AP Spikes',
    content: 'Successfully quantized our 1D convolutional neural network to 8-bit integers (INT8) on an ARM Cortex-M4 microcontroller. Memory footprint dropped to 14.2 KB SRAM with 94.6% accuracy distinguishing true action potentials from ambient mechanical vibrations.',
    timestamp: 'Yesterday',
    status: '🟡 Experimental',
    tags: ['TinyML', 'Edge AI', 'Bioelectronics'],
    metrics: { upvotes: 35, comments: 7, bookmarks: 15 }
  }
];

export const CommunityKnowledgeFeed: React.FC = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>(INITIAL_FEED_ITEMS);
  const [activeCategory, setActiveCategory] = useState<FeedCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set(['feed-1', 'feed-3']));
  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(new Set());

  // Quick Post Form
  const [isQuickPostOpen, setIsQuickPostOpen] = useState(false);
  const [postType, setPostType] = useState<'RESEARCH_NOTE' | 'EXPERIMENT_LOG' | 'PEER_REVIEW'>('RESEARCH_NOTE');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postTags, setPostTags] = useState('Phytoremediation, Bioelectronics');
  const [postReviewTarget, setPostReviewTarget] = useState('');
  const [postScore, setPostScore] = useState<number>(90);

  const toggleUpvote = (id: string) => {
    setUpvotedIds(prev => {
      const next = new Set(prev);
      const isUpvoted = next.has(id);
      if (isUpvoted) {
        next.delete(id);
        setFeedItems(items => items.map(item => item.id === id ? { ...item, metrics: { ...item.metrics, upvotes: item.metrics.upvotes - 1 } } : item));
      } else {
        next.add(id);
        setFeedItems(items => items.map(item => item.id === id ? { ...item, metrics: { ...item.metrics, upvotes: item.metrics.upvotes + 1 } } : item));
      }
      return next;
    });
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setFeedItems(items => items.map(item => item.id === id ? { ...item, metrics: { ...item.metrics, bookmarks: item.metrics.bookmarks - 1 } } : item));
      } else {
        next.add(id);
        setFeedItems(items => items.map(item => item.id === id ? { ...item, metrics: { ...item.metrics, bookmarks: item.metrics.bookmarks + 1 } } : item));
      }
      return next;
    });
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle.trim() || !postContent.trim()) return;

    const newItem: FeedItem = {
      id: `feed-${Date.now()}`,
      author: 'Dawn',
      authorTitle: 'Platform Architect & Ecological Technologist',
      authorOrg: 'Heavy Metal Leaf Initiative',
      authorRole: 'Project Lead',
      authorAvatarColor: 'from-emerald-500 to-teal-600',
      type: postType,
      title: postTitle.trim(),
      content: postContent.trim(),
      timestamp: 'Just now',
      status: postType === 'PEER_REVIEW' ? '🟢 Verified Science' : '🟡 Experimental',
      tags: postTags.split(',').map(t => t.trim()).filter(Boolean),
      metrics: { upvotes: 1, comments: 0, bookmarks: 0 },
      peerReviewTarget: postType === 'PEER_REVIEW' ? postReviewTarget.trim() || 'General Community Assay' : undefined,
      peerReviewScore: postType === 'PEER_REVIEW' ? postScore : undefined
    };

    setFeedItems([newItem, ...feedItems]);
    setPostTitle('');
    setPostContent('');
    setPostReviewTarget('');
    setIsQuickPostOpen(false);
  };

  const filteredItems = feedItems.filter(item => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      item.title.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q));

    if (!matchesSearch) return false;

    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'RESEARCH_NOTES') return item.type === 'RESEARCH_NOTE';
    if (activeCategory === 'EXPERIMENT_LOGS') return item.type === 'EXPERIMENT_LOG';
    if (activeCategory === 'PEER_REVIEWS') return item.type === 'PEER_REVIEW';
    return true;
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const renderBadge = (type: FeedItem['type']) => {
    switch (type) {
      case 'EXPERIMENT_LOG':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-mono font-bold text-amber-300 border border-amber-500/30">
            <FlaskConical className="h-3 w-3" />
            Experiment Log
          </span>
        );
      case 'PEER_REVIEW':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="h-3 w-3" />
            Peer Review
          </span>
        );
      case 'RESEARCH_NOTE':
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-300 border border-blue-500/30">
            <FileText className="h-3 w-3" />
            Research Note
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-mono font-bold text-emerald-300 border border-emerald-500/40">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              COMMUNITY KNOWLEDGE FEED
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Live Network Stream
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
            Latest Research Notes, Logs & Peer Reviews
          </h2>
        </div>

        <button
          onClick={() => setIsQuickPostOpen(!isQuickPostOpen)}
          className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-xs font-mono font-bold text-white hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md shrink-0"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>{isQuickPostOpen ? 'Close Post Editor' : 'Post to Feed'}</span>
        </button>
      </div>

      {/* Quick Post Creator Panel */}
      {isQuickPostOpen && (
        <form onSubmit={handleCreatePost} className="rounded-3xl border border-emerald-500/40 bg-neutral-950 p-5 space-y-4 shadow-xl font-mono">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>Broadcast Contribution to Network Feed</span>
            </h3>
            <span className="text-[10px] text-neutral-400">Posting as Dawn (Project Lead)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-neutral-300 block mb-1">Contribution Type</label>
              <select
                value={postType}
                onChange={(e) => setPostType(e.target.value as any)}
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
              >
                <option value="RESEARCH_NOTE">Research Note</option>
                <option value="EXPERIMENT_LOG">Experiment Log</option>
                <option value="PEER_REVIEW">Peer Review</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs text-neutral-300 block mb-1">Title / Headline</label>
              <input
                type="text"
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="e.g. Observation on Zinc Chelation in Noccaea..."
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {postType === 'PEER_REVIEW' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-2xl border border-emerald-500/30 bg-emerald-950/20">
              <div className="sm:col-span-2">
                <label className="text-xs text-emerald-300 block mb-1">Peer Review Target Protocol / Assay</label>
                <input
                  type="text"
                  value={postReviewTarget}
                  onChange={(e) => setPostReviewTarget(e.target.value)}
                  placeholder="e.g. Cleanroom Protocol SOP-01 (In-Growth Electrodes)"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-emerald-300 block mb-1">Verification Score (0-100)</label>
                <input
                  type="number"
                  min={50}
                  max={100}
                  value={postScore}
                  onChange={(e) => setPostScore(Number(e.target.value))}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs text-neutral-300 block mb-1">Summary & Findings</label>
            <textarea
              rows={3}
              required
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Share quantitative data, sensor readings, observations, or peer critiques..."
              className="w-full rounded-xl border border-neutral-800 bg-neutral-900 p-3 text-xs text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <input
              type="text"
              value={postTags}
              onChange={(e) => setPostTags(e.target.value)}
              placeholder="Tags: Phytoremediation, Bioelectronics..."
              className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 focus:border-emerald-500 focus:outline-none"
            />

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsQuickPostOpen(false)}
                className="rounded-xl border border-neutral-700 px-3.5 py-1.5 text-xs text-neutral-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-md flex items-center gap-1.5"
              >
                <Send className="h-3 w-3" />
                <span>Publish to Feed</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'ALL', label: 'All Activity', count: feedItems.length },
            { id: 'RESEARCH_NOTES', label: 'Research Notes', count: feedItems.filter(i => i.type === 'RESEARCH_NOTE').length },
            { id: 'EXPERIMENT_LOGS', label: 'Experiment Logs', count: feedItems.filter(i => i.type === 'EXPERIMENT_LOG').length },
            { id: 'PEER_REVIEWS', label: 'Peer Reviews', count: feedItems.filter(i => i.type === 'PEER_REVIEW').length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as FeedCategory)}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-mono font-bold transition-all ${
                activeCategory === tab.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                activeCategory === tab.id ? 'bg-emerald-700 text-white' : 'bg-neutral-800 text-neutral-500'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search feed, authors, tags..."
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950 pl-9 pr-4 py-1.5 text-xs text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none font-mono"
          />
        </div>
      </div>

      {/* List-Based Feed UI */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          /* Empty State Placeholder */
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-8 text-center space-y-3 font-mono">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white">No items found in this stream</h3>
            <p className="text-xs text-neutral-400 max-w-md mx-auto">
              Be the first researcher to contribute a research note, experiment log, or peer review to this category.
            </p>
            <button
              onClick={() => setIsQuickPostOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Contribute to this Category</span>
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isUpvoted = upvotedIds.has(item.id);
            const isBookmarked = bookmarkedIds.has(item.id);

            return (
              <article
                key={item.id}
                className="group rounded-3xl border border-neutral-800 bg-neutral-950 p-5 sm:p-6 space-y-3.5 hover:border-neutral-700 transition-all shadow-lg"
              >
                {/* Header: User Avatar, Identity, Timestamp, Type Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {/* User Avatar */}
                    <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.authorAvatarColor} text-white font-mono font-bold text-xs shadow-md shadow-black/40 ring-1 ring-white/10`}>
                      {getInitials(item.author)}
                      <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-neutral-950" />
                    </div>

                    {/* Author Meta */}
                    <div className="space-y-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {item.author}
                        </span>
                        <span className="rounded bg-neutral-900 border border-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-300">
                          {item.authorRole}
                        </span>
                        <span className="text-neutral-500 text-xs hidden sm:inline">•</span>
                        <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                          {item.authorOrg}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                        <Clock className="h-3 w-3" />
                        <span>{item.timestamp}</span>
                        {item.status && (
                          <>
                            <span>•</span>
                            <span className="text-neutral-400 font-medium">{item.status}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contribution Type Badge */}
                  <div className="shrink-0">
                    {renderBadge(item.type)}
                  </div>
                </div>

                {/* Peer Review Callout Header (if applicable) */}
                {item.type === 'PEER_REVIEW' && item.peerReviewTarget && (
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span className="text-neutral-300">
                        Reviewed Protocol: <strong className="text-white">{item.peerReviewTarget}</strong>
                      </span>
                    </div>
                    {item.peerReviewScore && (
                      <span className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 text-[11px] font-bold">
                        Score: {item.peerReviewScore}/100
                      </span>
                    )}
                  </div>
                )}

                {/* Main Headline & Content */}
                <div className="space-y-1.5 font-mono">
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                {/* Attachments / Files */}
                {item.attachments && item.attachments.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                    <span className="text-[10px] uppercase font-bold text-neutral-500">Datasets/SOP:</span>
                    {item.attachments.map((file, fIdx) => (
                      <span key={fIdx} className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] text-neutral-300 hover:border-emerald-500/50 hover:text-white transition-colors cursor-pointer">
                        <FileText className="h-3 w-3 text-emerald-400" />
                        <span>{file}</span>
                        <ArrowUpRight className="h-2.5 w-2.5 text-neutral-500" />
                      </span>
                    ))}
                  </div>
                )}

                {/* Tags & Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-850">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="rounded bg-neutral-900 border border-neutral-850 px-2 py-0.5 text-[10px] font-mono text-neutral-400">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions: Upvote, Comments, Bookmark, Share */}
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <button
                      onClick={() => toggleUpvote(item.id)}
                      className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 transition-all border ${
                        isUpvoted
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-neutral-200 hover:border-neutral-700'
                      }`}
                      title="Endorse / Upvote"
                    >
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span>{item.metrics.upvotes}</span>
                    </button>

                    <button
                      className="flex items-center gap-1.5 rounded-xl bg-neutral-900 border border-neutral-800 px-2.5 py-1.5 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 transition-colors"
                      title="Discussion comments"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>{item.metrics.comments}</span>
                    </button>

                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 transition-all border ${
                        isBookmarked
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-neutral-200 hover:border-neutral-700'
                      }`}
                      title="Save to Research Notebook"
                    >
                      <Bookmark className="h-3.5 w-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`https://ais-dev-wdo4kkb4stfay6gknykrik-133006277651.us-east1.run.app#${item.id}`);
                        alert('Link copied to clipboard!');
                      }}
                      className="flex items-center gap-1.5 rounded-xl bg-neutral-900 border border-neutral-800 px-2.5 py-1.5 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 transition-colors"
                      title="Share entry"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Placeholders Card: Invite Peer Review / Logging */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
        <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/40 p-4 space-y-2 font-mono hover:border-neutral-700 transition-colors">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
            <FileText className="h-4 w-4" />
            <span>Research Notes Slot</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Record informal hypotheses, qualitative observations, or microgravity mathematical models.
          </p>
          <button
            onClick={() => {
              setPostType('RESEARCH_NOTE');
              setIsQuickPostOpen(true);
            }}
            className="text-[11px] font-bold text-blue-400 hover:underline inline-flex items-center gap-1 pt-1"
          >
            <span>+ Add Research Note</span>
          </button>
        </div>

        <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/40 p-4 space-y-2 font-mono hover:border-neutral-700 transition-colors">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <FlaskConical className="h-4 w-4" />
            <span>Experiment Log Slot</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Log bench chronosequences, Faraday chamber telemetry, or atomic absorption assay data.
          </p>
          <button
            onClick={() => {
              setPostType('EXPERIMENT_LOG');
              setIsQuickPostOpen(true);
            }}
            className="text-[11px] font-bold text-amber-400 hover:underline inline-flex items-center gap-1 pt-1"
          >
            <span>+ Log Bench Experiment</span>
          </button>
        </div>

        <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/40 p-4 space-y-2 font-mono hover:border-neutral-700 transition-colors">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            <span>Peer Review Slot</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Submit critical peer review on open protocols (e.g. SOP-01) to build community reputation.
          </p>
          <button
            onClick={() => {
              setPostType('PEER_REVIEW');
              setIsQuickPostOpen(true);
            }}
            className="text-[11px] font-bold text-emerald-400 hover:underline inline-flex items-center gap-1 pt-1"
          >
            <span>+ Submit Peer Review</span>
          </button>
        </div>
      </div>
    </div>
  );
};
