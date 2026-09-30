import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Sparkles, 
  Bot, 
  Compass, 
  Briefcase, 
  Building2, 
  Award, 
  ExternalLink, 
  Check, 
  Copy, 
  Plus, 
  ArrowRight, 
  CheckCircle2, 
  CheckSquare, 
  Square, 
  MessageSquare, 
  Rocket, 
  Send, 
  GraduationCap, 
  Globe2, 
  Leaf, 
  Cpu, 
  Zap, 
  Linkedin, 
  Link as LinkIcon, 
  ShieldCheck, 
  Layers, 
  Coins, 
  FileText, 
  HeartHandshake,
  Target,
  Network
} from 'lucide-react';
import { 
  MemberProfile, 
  ResearchTeam, 
  CollaborationRequest, 
  OrganizationProfile, 
  EXPERTISE_AREAS, 
  COLLABORATION_STATUSES, 
  PROJECT_INTERESTS_SUBSCRIPTIONS, 
  INITIAL_MEMBERS, 
  INITIAL_RESEARCH_TEAMS, 
  INITIAL_COLLAB_REQUESTS, 
  INITIAL_ORGANIZATIONS,
  calculateMatchScore
} from '../data/networkMembers';
import { CommunityKnowledgeNetwork } from './CommunityKnowledgeNetwork';

export const CollaboratorOutreachHub: React.FC = () => {
  // Primary ecosystem switch: Community Knowledge Network vs Profiles & Project Matching
  const [primaryView, setPrimaryView] = useState<'knowledge-network' | 'profiles-matching'>('knowledge-network');

  // Navigation sub-tabs for Profiles & Matching Engine
  const [activeTab, setActiveTab] = useState<'matching' | 'directory' | 'teams' | 'my-profile' | 'requests' | 'organizations' | 'assistant'>('matching');

  // Network State
  const [members, setMembers] = useState<MemberProfile[]>(INITIAL_MEMBERS);
  const [teams, setTeams] = useState<ResearchTeam[]>(INITIAL_RESEARCH_TEAMS);
  const [requests, setRequests] = useState<CollaborationRequest[]>(INITIAL_COLLAB_REQUESTS);
  const [organizations] = useState<OrganizationProfile[]>(INITIAL_ORGANIZATIONS);

  // User's own editable profile
  const [myProfile, setMyProfile] = useState<MemberProfile>({
    id: 'user-self',
    name: 'Dawn Milazzo',
    professionalTitle: 'Platform Architect & Ecological Technologist',
    organization: 'Heavy Metal Leaf Initiative',
    organizationType: 'Research Lab',
    location: 'Pacific Northwest, USA',
    personalWebsite: 'https://heavymetalleaf.org',
    linkedInUrl: 'https://linkedin.com/in/dawn-milazzo',
    avatarSeed: 'Dawn',
    areasOfExpertise: ['Phytoremediation', 'Bioelectronics', 'Hyperaccumulator Plants', 'Restoration Ecology', 'Environmental Monitoring'],
    collaborationStatuses: ['Open to Collaboration', 'Seeking Research Partners', 'Seeking Engineering Support'],
    projectInterests: ['Environmental Sensing', 'Bioelectronics', 'Restoration Infrastructure', 'Phytomining Systems'],
    bio: 'Founding architect of Ms. Heavy Metal Leaf: exploring non-invasive plant-machine interfaces, guided growth molds, and regenerative circular resource recovery.',
    ratingScore: 99
  });

  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [profileSaveSuccess, setProfileSaveSuccess] = useState<boolean>(false);

  // Directory Search & Filters
  const [dirSearch, setDirSearch] = useState<string>('');
  const [selectedExpertiseFilter, setSelectedExpertiseFilter] = useState<string>('ALL');
  const [selectedLocationFilter, setSelectedLocationFilter] = useState<string>('ALL');
  const [selectedCollabStatusFilter, setSelectedCollabStatusFilter] = useState<string>('ALL');

  // AI Matching Engine State
  const [selectedMatchProject, setSelectedMatchProject] = useState<string>('floating-wetland');
  const [customNeedRole, setCustomNeedRole] = useState<string>('Wetland Scientist, Water Quality Specialist, Embedded Systems Engineer, Data Scientist');
  const [customNeedInterests, setCustomNeedInterests] = useState<string[]>(['Wetland Systems', 'Water Quality', 'Environmental Sensing', 'AI & Data Science']);

  // AI Collaboration Assistant State
  const [assistantQuery, setAssistantQuery] = useState<string>('');
  const [assistantResponse, setAssistantResponse] = useState<{
    text: string;
    matchedMembers: { member: MemberProfile; reason: string; score: number }[];
  } | null>(null);

  // New Collaboration Request Modal
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState<boolean>(false);
  const [reqTitle, setReqTitle] = useState('');
  const [reqType, setReqType] = useState<CollaborationRequest['type']>('Looking for Collaborators');
  const [reqDesc, setReqDesc] = useState('');
  const [reqRoles, setReqRoles] = useState('');
  const [reqInterests, setReqInterests] = useState<string[]>(['Phytoremediation']);

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Preset Filters for Expert Directory
  const applyPresetFilter = (preset: string) => {
    if (preset === 'space') {
      setSelectedExpertiseFilter('Space Agriculture');
      setDirSearch('');
    } else if (preset === 'washington') {
      setDirSearch('Washington');
      setSelectedExpertiseFilter('ALL');
    } else if (preset === 'phytoremediation') {
      setSelectedExpertiseFilter('Phytoremediation');
      setDirSearch('');
    } else if (preset === 'grants') {
      setSelectedCollabStatusFilter('Seeking Funding Partners');
      setDirSearch('');
    } else if (preset === 'bioelectronics') {
      setSelectedExpertiseFilter('Bioelectronics');
      setDirSearch('');
    }
  };

  // Run AI Collaboration Assistant Query
  const handleRunAssistantQuery = (queryText: string) => {
    setAssistantQuery(queryText);
    const q = queryText.toLowerCase();

    let matched: { member: MemberProfile; reason: string; score: number }[] = [];
    let explanation = '';

    if (q.includes('phytomining') || q.includes('metal recovery') || q.includes('bio-ore')) {
      explanation = `Based on your query regarding **Phytomining & Metal Recovery**, Ms. Heavy Metal Leaf AI analyzed our researcher database and identified top specialists with active field trials and hydrometallurgical extraction publications:`;
      matched = [
        {
          member: members.find(m => m.id === 'mem-4')!,
          reason: 'Lead Soil Geochemist at Katanga Consortium; specialist in high-purity nickel/cobalt bio-ore recovery.',
          score: 96
        },
        {
          member: members.find(m => m.id === 'mem-6')!,
          reason: 'Chair of Agronomic Phytoremediation; published 12 papers on Brassicaceae metal translocation.',
          score: 89
        }
      ];
    } else if (q.includes('wetland') || q.includes('water quality') || q.includes('water restoration')) {
      explanation = `Here are the top network members with direct empirical experience in **Wetland Systems & Aquatic Phytoremediation**:`;
      matched = [
        {
          member: members.find(m => m.id === 'mem-2')!,
          reason: 'Senior Environmental Engineer in Washington; 14 years field experience deploying floating wetland bio-rafts.',
          score: 95
        },
        {
          member: members.find(m => m.id === 'mem-5')!,
          reason: 'IoT Embedded Systems Architect; specialized in water sensor nodes and edge telemetry.',
          score: 88
        }
      ];
    } else if (q.includes('sensing') || q.includes('environmental sensing') || q.includes('sensors')) {
      explanation = `Members with active projects in **Environmental Sensing & Ecological Telemetry**:`;
      matched = [
        {
          member: members.find(m => m.id === 'mem-1')!,
          reason: 'Lead Plant Electrophysiologist; designed 1 TΩ input impedance passive sensing instrumentation.',
          score: 94
        },
        {
          member: members.find(m => m.id === 'mem-5')!,
          reason: 'TinyML Architect; builds low-power LoRaWAN nodes for plant biopotential spike detection.',
          score: 92
        }
      ];
    } else if (q.includes('space') || q.includes('bioregenerative') || q.includes('closed-loop') || q.includes('life support')) {
      explanation = `Specialists advancing **Space Agriculture & Bioregenerative Life Support Systems (BLSS)**:`;
      matched = [
        {
          member: members.find(m => m.id === 'mem-3')!,
          reason: 'Astro-Botanist leading AeroBio Systems; models closed-loop ECLSS plant filtration in microgravity.',
          score: 97
        },
        {
          member: members.find(m => m.id === 'mem-1')!,
          reason: 'Electrophysiology researcher studying plant stress signaling under controlled environmental conditions.',
          score: 86
        }
      ];
    } else if (q.includes('grant') || q.includes('proposal') || q.includes('funding')) {
      explanation = `These network members currently have status **Seeking Funding Partners** or are experienced in NSF/ARPA-E co-applications:`;
      matched = [
        {
          member: members.find(m => m.id === 'mem-4')!,
          reason: 'Currently drafting an ARPA-E & Horizon Europe circular phytomining bio-ore proposal.',
          score: 95
        },
        {
          member: members.find(m => m.id === 'mem-6')!,
          reason: 'Principal investigator on federal Superfund rehabilitation grants with strong institutional backing.',
          score: 93
        },
        {
          member: members.find(m => m.id === 'mem-3')!,
          reason: 'Seeking SBIR/STTR co-investigators for bioregenerative space agriculture pods.',
          score: 88
        }
      ];
    } else {
      explanation = `Ms. Heavy Metal Leaf AI matched your inquiry across member research interests, active projects, and collaboration readiness:`;
      matched = members.slice(0, 3).map((m, idx) => ({
        member: m,
        reason: `Strong correlation with ${m.areasOfExpertise.slice(0, 2).join(' and ')}. Currently ${m.collaborationStatuses[0]}.`,
        score: 90 - idx * 4
      }));
    }

    setAssistantResponse({ text: explanation, matchedMembers: matched });
  };

  // Toggle expertise checkbox in profile
  const toggleMyExpertise = (exp: string) => {
    setMyProfile(prev => ({
      ...prev,
      areasOfExpertise: prev.areasOfExpertise.includes(exp)
        ? prev.areasOfExpertise.filter(e => e !== exp)
        : [...prev.areasOfExpertise, exp]
    }));
  };

  // Toggle collaboration status in profile
  const toggleMyCollabStatus = (status: string) => {
    setMyProfile(prev => ({
      ...prev,
      collaborationStatuses: prev.collaborationStatuses.includes(status)
        ? prev.collaborationStatuses.filter(s => s !== status)
        : [...prev.collaborationStatuses, status]
    }));
  };

  // Toggle project interest in profile
  const toggleMyProjectInterest = (interest: string) => {
    setMyProfile(prev => ({
      ...prev,
      projectInterests: prev.projectInterests.includes(interest)
        ? prev.projectInterests.filter(i => i !== interest)
        : [...prev.projectInterests, interest]
    }));
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingProfile(false);
    setProfileSaveSuccess(true);
    showToast('Member Profile successfully updated and broadcast to the network!');
    setTimeout(() => setProfileSaveSuccess(false), 3000);
  };

  const handlePostRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reqTitle.trim() || !reqDesc.trim()) return;

    const newRequest: CollaborationRequest = {
      id: `req-${Date.now()}`,
      authorId: myProfile.id,
      authorName: myProfile.name,
      authorTitle: myProfile.professionalTitle,
      authorOrg: myProfile.organization,
      type: reqType,
      title: reqTitle.trim(),
      description: reqDesc.trim(),
      targetInterests: reqInterests,
      seekingRoles: reqRoles.split(',').map(r => r.trim()).filter(Boolean),
      createdAt: 'Just now',
      responsesCount: 0
    };

    setRequests([newRequest, ...requests]);
    setIsNewRequestModalOpen(false);
    setReqTitle('');
    setReqDesc('');
    setReqRoles('');
    showToast('Collaboration Request posted to the network board!');
  };

  // Filter Directory Members
  const filteredMembers = members.filter(member => {
    const q = dirSearch.toLowerCase();
    const matchesSearch = 
      member.name.toLowerCase().includes(q) ||
      member.professionalTitle.toLowerCase().includes(q) ||
      member.organization.toLowerCase().includes(q) ||
      member.location.toLowerCase().includes(q) ||
      member.bio.toLowerCase().includes(q);

    const matchesExpertise = 
      selectedExpertiseFilter === 'ALL' || 
      member.areasOfExpertise.includes(selectedExpertiseFilter);

    const matchesStatus = 
      selectedCollabStatusFilter === 'ALL' || 
      member.collaborationStatuses.includes(selectedCollabStatusFilter);

    return matchesSearch && matchesExpertise && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-2xl border border-emerald-500/50 bg-neutral-900/95 px-5 py-3 text-xs font-mono font-bold text-emerald-300 shadow-2xl flex items-center gap-2 backdrop-blur-md">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Primary Ecosystem Switch: Community Knowledge Network vs Profiles & Project Matching */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setPrimaryView('knowledge-network')}
            className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-mono font-bold transition-all shadow-md ${
              primaryView === 'knowledge-network'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/25 ring-1 ring-emerald-400/40'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Network className="h-4 w-4 text-emerald-300" />
            <span>Community Knowledge Network & Auto-Evolution</span>
          </button>

          <button
            onClick={() => setPrimaryView('profiles-matching')}
            className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-mono font-bold transition-all shadow-md ${
              primaryView === 'profiles-matching'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/25 ring-1 ring-emerald-400/40'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Users className="h-4 w-4 text-amber-300" />
            <span>Profiles & AI Project Matching Engine</span>
          </button>
        </div>

        <span className="text-[11px] font-mono text-neutral-400 hidden xl:inline">
          {primaryView === 'knowledge-network' 
            ? 'Feed • Knowledge Cards • Fork & Build • Knowledge Graph • Auto-Evolution'
            : 'AI Matchmaker • 20 Expertise Directory • Research Teams • Requests Board'}
        </span>
      </div>

      {/* VIEW 1: COMMUNITY KNOWLEDGE NETWORK */}
      {primaryView === 'knowledge-network' && (
        <CommunityKnowledgeNetwork />
      )}

      {/* VIEW 2: PROFILES & PROJECT MATCHING ENGINE */}
      {primaryView === 'profiles-matching' && (
        <div className="space-y-8">
          {/* Hero Banner: Network Manifesto */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40 p-6 sm:p-8 shadow-2xl">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

        <div className="space-y-4 max-w-4xl relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-mono font-bold text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shadow-sm">
              <Users className="h-3.5 w-3.5 text-emerald-400" />
              HEAVY METAL LEAF RESEARCH NETWORK
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Profiles & AI Project Matching Engine
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Connect. Collaborate. Prototype. Regenerate.
          </h1>
          <p className="text-sm sm:text-base font-mono text-emerald-300 font-medium leading-relaxed max-w-3xl">
            A collaborative network connecting scientists, engineers, designers, students, innovators, entrepreneurs, and environmental organizations to develop practical regenerative technologies and living infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-neutral-300">
            <span className="text-neutral-500">Connecting:</span>
            {['Scientists', 'Engineers', 'Ecologists', 'Designers', 'Students', 'Entrepreneurs', 'Innovators', 'Research Labs'].map((tag, i) => (
              <span key={i} className="rounded-md border border-neutral-800 bg-neutral-950/80 px-2.5 py-1 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveTab('matching')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
              activeTab === 'matching'
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>AI Project Matching</span>
          </button>

          <button
            onClick={() => setActiveTab('directory')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
              activeTab === 'directory'
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Search className="h-3.5 w-3.5" />
            <span>Expert Directory ({members.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('teams')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
              activeTab === 'teams'
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>Research Teams ({teams.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('my-profile')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
              activeTab === 'my-profile'
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Award className="h-3.5 w-3.5" />
            <span>Member Profile</span>
          </button>

          <button
            onClick={() => setActiveTab('requests')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
              activeTab === 'requests'
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Collab Requests ({requests.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('organizations')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
              activeTab === 'organizations'
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Building2 className="h-3.5 w-3.5" />
            <span>Organizations ({organizations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('assistant')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
              activeTab === 'assistant'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Bot className="h-3.5 w-3.5 text-cyan-400" />
            <span>AI Collab Assistant</span>
          </button>
        </div>

        <button
          onClick={() => setIsNewRequestModalOpen(true)}
          className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-3.5 py-2 text-xs font-mono font-bold text-white hover:from-emerald-500 hover:to-teal-500 shadow-md"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Post Collab Request</span>
        </button>
      </div>

      {/* TAB 1: AI PROJECT MATCHING ENGINE */}
      {activeTab === 'matching' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-emerald-500/40 bg-neutral-900/90 p-6 sm:p-7 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-mono font-bold text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                    PROJECT MATCHING ENGINE
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    Automated Researcher & Team Synthesis
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                  Autonomous Multi-Disciplinary Matching
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-400 max-w-sm">
                Continuously analyzes research interests, expertise, published work, project needs, and technical requirements.
              </span>
            </div>

            {/* Selected Project Showcase */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-teal-500/20 text-teal-300 border border-teal-500/40 text-[10px] font-mono px-2 py-0.5 font-bold">
                    ACTIVE PROJECT MATCH SCENARIO
                  </span>
                  <h3 className="text-base font-bold text-white font-mono">
                    Project: Floating Wetland Sentinel Network
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400">
                  Target Match Readiness: 4 Roles Filled
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-neutral-300 pt-1">
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                    Project Needs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Wetland Scientist', 'Water Quality Specialist', 'Embedded Systems Engineer', 'Data Scientist'].map((need, idx) => (
                      <span key={idx} className="rounded-lg bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-neutral-200">
                        • {need}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                    Key Technological Domains:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Wetland Systems', 'Water Quality', 'Environmental Sensing', 'AI & Data Science'].map((domain, idx) => (
                      <span key={idx} className="rounded-lg bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 text-emerald-300">
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Ranked Candidate Matches */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  <Bot className="h-4 w-4 text-emerald-400" />
                  <span>AI Recommended Member Matches (Ranked by Compatibility)</span>
                </h4>
                <span className="text-xs font-mono text-neutral-400">
                  Calculated against 20 expertise metrics & collaboration status
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    name: 'Marcus K. Thorne',
                    title: 'Environmental Engineer',
                    org: 'Cascade Ecological Restoration Lab',
                    location: 'Seattle, WA',
                    matchPercent: 92,
                    roleFit: 'Wetland Scientist / Water Quality Lead',
                    overlap: ['Environmental Engineering', 'Wetland Systems', 'Water Quality', 'Restoration Ecology'],
                    badge: 'Person A'
                  },
                  {
                    name: 'Prof. Amara Diallo',
                    title: 'Wetland Ecologist & Chair of Agronomy',
                    org: 'Institut Polytechnique de Montréal',
                    location: 'Montreal, Canada',
                    matchPercent: 89,
                    roleFit: 'Wetland Ecologist',
                    overlap: ['Phytoremediation', 'Soil Science', 'Restoration Ecology'],
                    badge: 'Person B'
                  },
                  {
                    name: 'Liam O’Connor',
                    title: 'IoT Sensor Engineer & TinyML Architect',
                    org: 'Open Sensing Hardware Collective',
                    location: 'Vancouver, Canada',
                    matchPercent: 87,
                    roleFit: 'Embedded Systems Engineer',
                    overlap: ['AI & Data Science', 'Environmental Monitoring', 'Robotics'],
                    badge: 'Person C'
                  },
                  {
                    name: 'Dr. Elena Vance',
                    title: 'Environmental Data Analyst & Electrophysiologist',
                    org: 'Zurich Phytotechnology Institute',
                    location: 'Zurich, Switzerland',
                    matchPercent: 84,
                    roleFit: 'Data Scientist & Signal Analyst',
                    overlap: ['Plant Electrophysiology', 'Environmental Monitoring', 'Bioelectronics'],
                    badge: 'Person D'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 space-y-3 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-neutral-800 text-neutral-300 text-[10px] font-mono px-2 py-0.5 font-bold">
                            {item.badge}
                          </span>
                          <span className="text-xs font-mono font-bold text-white">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-sm font-mono font-extrabold text-emerald-400">
                            {item.matchPercent}% Match
                          </div>
                        </div>
                      </div>

                      <div className="space-y-0.5">
                        <div className="text-xs font-mono text-emerald-300 font-medium">
                          {item.title}
                        </div>
                        <div className="text-[11px] font-mono text-neutral-400">
                          {item.org} • {item.location}
                        </div>
                      </div>

                      <div className="rounded-lg bg-neutral-900/70 p-2.5 text-xs font-mono space-y-1">
                        <span className="text-[10px] text-neutral-400 uppercase font-bold block">
                          Role Match: <span className="text-amber-300 font-normal">{item.roleFit}</span>
                        </span>
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {item.overlap.map((ov, oIdx) => (
                            <span key={oIdx} className="rounded bg-neutral-950 border border-neutral-800 px-1.5 py-0.5 text-[10px] text-neutral-300">
                              ✓ {ov}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-neutral-850">
                      <button
                        onClick={() => showToast(`Collaboration invitation sent to ${item.name}!`)}
                        className="flex-1 rounded-xl bg-emerald-600 py-1.5 text-xs font-mono font-bold text-white hover:bg-emerald-500 transition-colors shadow-sm text-center"
                      >
                        Invite to Project Team
                      </button>
                      <button
                        onClick={() => {
                          setDirSearch(item.name.split(' ')[0]);
                          setActiveTab('directory');
                        }}
                        className="rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white"
                      >
                        Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: EXPERT DIRECTORY */}
      {activeTab === 'directory' && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                Network Roster
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                Expert Directory ({filteredMembers.length} Members)
              </h2>
            </div>

            {/* Preset Query Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
              <span className="text-neutral-500 hidden xl:inline">Filter Presets:</span>
              <button
                onClick={() => applyPresetFilter('space')}
                className="rounded-lg bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-neutral-300 hover:border-emerald-500 hover:text-white"
              >
                Space Agriculture
              </button>
              <button
                onClick={() => applyPresetFilter('washington')}
                className="rounded-lg bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-neutral-300 hover:border-emerald-500 hover:text-white"
              >
                Washington Engineers
              </button>
              <button
                onClick={() => applyPresetFilter('phytoremediation')}
                className="rounded-lg bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-neutral-300 hover:border-emerald-500 hover:text-white"
              >
                Phytoremediation
              </button>
              <button
                onClick={() => applyPresetFilter('bioelectronics')}
                className="rounded-lg bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-neutral-300 hover:border-emerald-500 hover:text-white"
              >
                Bioelectronics
              </button>
              <button
                onClick={() => {
                  setDirSearch('');
                  setSelectedExpertiseFilter('ALL');
                  setSelectedCollabStatusFilter('ALL');
                }}
                className="rounded-lg bg-neutral-800 px-2 py-1 text-neutral-400 hover:text-white"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Search and Filters Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                value={dirSearch}
                onChange={(e) => setDirSearch(e.target.value)}
                placeholder="Search name, title, organization, or location..."
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none font-mono"
              />
            </div>

            <div>
              <select
                value={selectedExpertiseFilter}
                onChange={(e) => setSelectedExpertiseFilter(e.target.value)}
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-xs text-white font-mono focus:border-emerald-500 focus:outline-none"
              >
                <option value="ALL">All Expertise Areas (20)</option>
                {EXPERTISE_AREAS.map(exp => (
                  <option key={exp} value={exp}>{exp}</option>
                ))}
              </select>
            </div>

            <div>
              <select
                value={selectedCollabStatusFilter}
                onChange={(e) => setSelectedCollabStatusFilter(e.target.value)}
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-xs text-white font-mono focus:border-emerald-500 focus:outline-none"
              >
                <option value="ALL">All Collaboration Statuses (8)</option>
                {COLLABORATION_STATUSES.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Member Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMembers.map(member => (
              <div
                key={member.id}
                className="rounded-3xl border border-neutral-800 bg-neutral-950 p-5 space-y-3.5 shadow-xl hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
                        <span>{member.name}</span>
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 font-medium">
                        {member.professionalTitle}
                      </p>
                      <p className="text-[11px] font-mono text-neutral-400">
                        {member.organization} • <span className="text-neutral-500">{member.location}</span>
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-300 font-bold border border-emerald-500/40 shrink-0">
                      Score: {member.ratingScore}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed font-mono line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Areas of Expertise */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">
                      Expertise:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {member.areasOfExpertise.map(exp => (
                        <span key={exp} className="rounded bg-neutral-900 border border-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-300">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Collaboration Status */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">
                      Status:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {member.collaborationStatuses.map(status => (
                        <span key={status} className="rounded bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-[10px] font-mono text-amber-300 font-bold">
                          ● {status}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-850 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {member.linkedInUrl && (
                      <a
                        href={member.linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg p-1.5 bg-neutral-900 text-neutral-400 hover:text-blue-400 hover:bg-neutral-850"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {member.personalWebsite && (
                      <a
                        href={member.personalWebsite}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg p-1.5 bg-neutral-900 text-neutral-400 hover:text-emerald-400 hover:bg-neutral-850"
                        title="Personal / Lab Website"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => showToast(`Sent message & project invite to ${member.name}!`)}
                    className="rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-mono font-bold text-white hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    Connect / Invite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: RESEARCH TEAMS */}
      {activeTab === 'teams' && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                Multi-Disciplinary Working Groups
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                Active Research Teams ({teams.length})
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              Form cross-disciplinary project teams across biology, hardware, and ecology
            </span>
          </div>

          <div className="space-y-4">
            {teams.map(team => (
              <div
                key={team.id}
                className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 space-y-4 shadow-xl hover:border-neutral-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-mono font-bold text-emerald-300 border border-emerald-500/40">
                      {team.codename}
                    </span>
                    <h3 className="text-lg font-bold text-white font-mono">
                      {team.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    Lead: <strong className="text-neutral-200">{team.leader}</strong> • {team.activeProjectsCount} Active Projects
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed font-mono">
                  {team.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-2 border-t border-neutral-850">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                      Disciplines & Roles Represented:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {team.rolesRepresented.map((role, idx) => (
                        <span key={idx} className="rounded-md bg-neutral-900 border border-neutral-800 px-2 py-0.5 text-[11px] text-neutral-300">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">
                      Open Roles Needed:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {team.openRolesNeeded.map((openRole, idx) => (
                        <span key={idx} className="rounded-md bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-[11px] text-amber-300 font-bold">
                          + {openRole}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    onClick={() => showToast(`Application submitted to join ${team.name}!`)}
                    className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-mono font-bold text-white hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    Join Working Group / Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: MY MEMBER PROFILE */}
      {activeTab === 'my-profile' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-7 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  Network Identity
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                  Member Profile & Collaboration Preferences
                </h2>
              </div>

              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className="rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-4 py-2 text-xs font-mono font-bold text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
              >
                {isEditingProfile ? 'Cancel Editing' : 'Edit Full Profile'}
              </button>
            </div>

            {/* Profile Form */}
            <form onSubmit={handleSaveProfile} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <label className="text-neutral-300 block mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    disabled={!isEditingProfile}
                    value={myProfile.name}
                    onChange={(e) => setMyProfile({ ...myProfile, name: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-white disabled:opacity-60 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-neutral-300 block mb-1">Professional Title *</label>
                  <input
                    type="text"
                    required
                    disabled={!isEditingProfile}
                    value={myProfile.professionalTitle}
                    onChange={(e) => setMyProfile({ ...myProfile, professionalTitle: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-white disabled:opacity-60 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-neutral-300 block mb-1">Organization *</label>
                  <input
                    type="text"
                    required
                    disabled={!isEditingProfile}
                    value={myProfile.organization}
                    onChange={(e) => setMyProfile({ ...myProfile, organization: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-white disabled:opacity-60 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-neutral-300 block mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    disabled={!isEditingProfile}
                    value={myProfile.location}
                    onChange={(e) => setMyProfile({ ...myProfile, location: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-white disabled:opacity-60 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-neutral-300 block mb-1">Personal / Lab Website</label>
                  <input
                    type="url"
                    disabled={!isEditingProfile}
                    value={myProfile.personalWebsite || ''}
                    onChange={(e) => setMyProfile({ ...myProfile, personalWebsite: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-white disabled:opacity-60 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-neutral-300 block mb-1">LinkedIn Profile</label>
                  <input
                    type="url"
                    disabled={!isEditingProfile}
                    value={myProfile.linkedInUrl || ''}
                    onChange={(e) => setMyProfile({ ...myProfile, linkedInUrl: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-white disabled:opacity-60 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Bio Statement */}
              <div>
                <label className="text-xs font-mono text-neutral-300 block mb-1">Bio Statement</label>
                <textarea
                  rows={2}
                  disabled={!isEditingProfile}
                  value={myProfile.bio}
                  onChange={(e) => setMyProfile({ ...myProfile, bio: e.target.value })}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-xs text-white disabled:opacity-60 focus:border-emerald-500 focus:outline-none font-mono"
                />
              </div>

              {/* Areas of Expertise (20 Checkboxes) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-neutral-300">
                    Areas of Expertise ({myProfile.areasOfExpertise.length} of 20 Selected):
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">
                    Used for AI project matching
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {EXPERTISE_AREAS.map(exp => {
                    const isChecked = myProfile.areasOfExpertise.includes(exp);
                    return (
                      <button
                        type="button"
                        key={exp}
                        disabled={!isEditingProfile}
                        onClick={() => toggleMyExpertise(exp)}
                        className={`rounded-xl p-2.5 text-left border transition-all flex items-center gap-2 text-xs font-mono ${
                          isChecked
                            ? 'border-emerald-500/50 bg-emerald-950/20 text-white'
                            : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                        } disabled:cursor-default`}
                      >
                        {isChecked ? (
                          <CheckSquare className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        ) : (
                          <Square className="h-3.5 w-3.5 text-neutral-600 shrink-0" />
                        )}
                        <span className="leading-tight text-[11px]">{exp}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Collaboration Status (8 Checkboxes) */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold uppercase text-neutral-300 block">
                  Collaboration Status ({myProfile.collaborationStatuses.length} of 8 Selected):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {COLLABORATION_STATUSES.map(st => {
                    const isChecked = myProfile.collaborationStatuses.includes(st);
                    return (
                      <button
                        type="button"
                        key={st}
                        disabled={!isEditingProfile}
                        onClick={() => toggleMyCollabStatus(st)}
                        className={`rounded-xl p-2.5 text-left border transition-all flex items-center gap-2 text-xs font-mono ${
                          isChecked
                            ? 'border-amber-500/50 bg-amber-950/20 text-amber-200'
                            : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                        } disabled:cursor-default`}
                      >
                        {isChecked ? (
                          <CheckSquare className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        ) : (
                          <Square className="h-3.5 w-3.5 text-neutral-600 shrink-0" />
                        )}
                        <span className="leading-tight text-[11px]">{st}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Interests Subscriptions (10 Checkboxes) */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold uppercase text-neutral-300 block">
                  Project Interests Subscriptions ({myProfile.projectInterests.length} of 10 Selected):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {PROJECT_INTERESTS_SUBSCRIPTIONS.map(pi => {
                    const isChecked = myProfile.projectInterests.includes(pi);
                    return (
                      <button
                        type="button"
                        key={pi}
                        disabled={!isEditingProfile}
                        onClick={() => toggleMyProjectInterest(pi)}
                        className={`rounded-xl p-2.5 text-left border transition-all flex items-center gap-2 text-xs font-mono ${
                          isChecked
                            ? 'border-blue-500/50 bg-blue-950/20 text-blue-200'
                            : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                        } disabled:cursor-default`}
                      >
                        {isChecked ? (
                          <CheckSquare className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                        ) : (
                          <Square className="h-3.5 w-3.5 text-neutral-600 shrink-0" />
                        )}
                        <span className="leading-tight text-[11px]">{pi}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {isEditingProfile && (
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(false)}
                    className="rounded-xl border border-neutral-700 px-4 py-2 text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-mono font-bold text-white hover:bg-emerald-500 shadow-md"
                  >
                    Save & Broadcast Profile
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* TAB 5: COLLABORATION REQUESTS BOARD */}
      {activeTab === 'requests' && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                Network Opportunities Feed
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                Collaboration Requests ({requests.length})
              </h2>
            </div>
            <button
              onClick={() => setIsNewRequestModalOpen(true)}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-mono font-bold text-white hover:bg-emerald-500 shadow-sm"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Post New Request</span>
            </button>
          </div>

          <div className="space-y-3.5">
            {requests.map(req => (
              <div
                key={req.id}
                className="rounded-3xl border border-neutral-800 bg-neutral-950 p-5 sm:p-6 space-y-3 shadow-xl hover:border-neutral-700 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold ${
                      req.type === 'Grant Team'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : req.type === 'Pilot Project'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                    }`}>
                      {req.type}
                    </span>
                    <h3 className="text-base font-bold text-white font-mono">
                      {req.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-neutral-400">
                    Posted by <strong className="text-neutral-200">{req.authorName}</strong> ({req.authorOrg}) • {req.createdAt}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed font-mono">
                  {req.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-850">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 mr-1">
                      Target Disciplines:
                    </span>
                    {req.targetInterests.map(tag => (
                      <span key={tag} className="rounded bg-neutral-900 border border-neutral-800 px-2 py-0.5 text-[10px] text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => showToast(`Response sent to ${req.authorName} regarding: "${req.title}"!`)}
                    className="rounded-xl bg-emerald-600 px-4 py-1.5 text-xs font-mono font-bold text-white hover:bg-emerald-500 shadow-sm"
                  >
                    Respond / Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: ORGANIZATIONS */}
      {activeTab === 'organizations' && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                Institutional Partners
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                Organization Profiles ({organizations.length})
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              Universities, Research Labs, Startups, Nonprofits, Government Agencies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {organizations.map(org => (
              <div
                key={org.id}
                className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 space-y-4 shadow-xl hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-300 border border-emerald-500/40">
                      {org.type}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {org.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white font-mono">
                      {org.name}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400 mt-0.5">
                      {org.focus}
                    </p>
                  </div>

                  <div className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-3 space-y-1.5 text-xs font-mono">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                      Capabilities & Resources:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {org.capabilities.map((cap, cIdx) => (
                        <span key={cIdx} className="rounded bg-neutral-950 border border-neutral-800 px-2 py-0.5 text-[10px] text-neutral-300">
                          ✓ {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-850 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">
                    {org.activeProjects} Active Research Projects
                  </span>
                  <button
                    onClick={() => showToast(`Sent partnership inquiry to ${org.contactEmail}!`)}
                    className="rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-1.5 text-xs font-mono font-bold text-neutral-200 hover:text-white hover:border-emerald-500"
                  >
                    Contact Organization
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 7: AI COLLABORATION ASSISTANT */}
      {activeTab === 'assistant' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-emerald-500/30 bg-neutral-900/90 p-6 sm:p-7 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  Natural Language Matching
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center gap-2">
                  <Bot className="h-5 w-5 text-emerald-400" />
                  <span>AI Collaboration Assistant</span>
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                Ask in plain English who to partner with across the network
              </span>
            </div>

            {/* Suggested Prompts */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase font-bold text-neutral-400">
                Suggested Match Queries:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {[
                  "Who should I talk to about phytomining?",
                  "Who has experience with wetland restoration?",
                  "Which members are interested in environmental sensing?",
                  "Find experts in bioregenerative life support systems.",
                  "Match me with researchers working on closed-loop ecological systems.",
                  "Who would strengthen this grant proposal?"
                ].map((prompt, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => handleRunAssistantQuery(prompt)}
                    className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-neutral-300 hover:border-emerald-500 hover:text-emerald-300 transition-colors text-left"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Query Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={assistantQuery}
                onChange={(e) => setAssistantQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && assistantQuery && handleRunAssistantQuery(assistantQuery)}
                placeholder="Ask e.g. Who can help design 1 TΩ bioelectronics for mine tailings?..."
                className="flex-1 rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none font-mono"
              />
              <button
                onClick={() => assistantQuery && handleRunAssistantQuery(assistantQuery)}
                className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-mono font-bold text-white hover:bg-emerald-500 transition-colors shadow-md"
              >
                Search Network
              </button>
            </div>

            {/* Response Output */}
            {assistantResponse && (
              <div className="rounded-2xl border border-emerald-500/40 bg-neutral-950 p-5 space-y-4">
                <div className="text-xs font-mono text-neutral-200 leading-relaxed">
                  {assistantResponse.text}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {assistantResponse.matchedMembers.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-4 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-white">
                          {item.member.name}
                        </span>
                        <span className="text-xs font-mono font-extrabold text-emerald-400">
                          {item.score}% Match
                        </span>
                      </div>

                      <div className="text-[11px] font-mono text-emerald-300">
                        {item.member.professionalTitle} ({item.member.organization})
                      </div>

                      <p className="text-xs font-mono text-neutral-300 leading-relaxed">
                        {item.reason}
                      </p>

                      <div className="pt-2 flex items-center justify-end">
                        <button
                          onClick={() => showToast(`Sent connection request to ${item.member.name}!`)}
                          className="rounded-lg bg-emerald-600 px-3 py-1 text-xs font-mono font-bold text-white hover:bg-emerald-500"
                        >
                          Connect with {item.member.name.split(' ')[0]}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: POST COLLABORATION REQUEST */}
      {isNewRequestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-3xl border border-emerald-500/50 bg-neutral-950 p-6 shadow-2xl space-y-4 font-mono">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <Plus className="h-4 w-4 text-emerald-400" />
                <h3 className="text-base font-bold text-white">
                  Post Collaboration Request
                </h3>
              </div>
              <button
                onClick={() => setIsNewRequestModalOpen(false)}
                className="text-neutral-400 hover:text-white text-xs"
              >
                ✕ Close
              </button>
            </div>

            <form onSubmit={handlePostRequest} className="space-y-4 text-xs">
              <div>
                <label className="text-neutral-300 block mb-1">Request Type *</label>
                <select
                  value={reqType}
                  onChange={(e) => setReqType(e.target.value as any)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Looking for Collaborators">Looking for Collaborators</option>
                  <option value="Research Question">Research Question</option>
                  <option value="Pilot Project">Pilot Project</option>
                  <option value="Grant Team">Grant Team</option>
                  <option value="Student Opportunity">Student Opportunity</option>
                  <option value="Funding Opportunity">Funding Opportunity</option>
                  <option value="Technology Challenge">Technology Challenge</option>
                  <option value="Literature Review">Literature Review</option>
                </select>
              </div>

              <div>
                <label className="text-neutral-300 block mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={reqTitle}
                  onChange={(e) => setReqTitle(e.target.value)}
                  placeholder="e.g. Seeking Plant Electrophysiologist for Faraday Chamber Trials"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-neutral-300 block mb-1">Detailed Description *</label>
                <textarea
                  rows={3}
                  required
                  value={reqDesc}
                  onChange={(e) => setReqDesc(e.target.value)}
                  placeholder="Describe the scientific challenge, target timelines, and expected deliverables..."
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 p-3 text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-neutral-300 block mb-1">Roles Needed (comma-separated)</label>
                <input
                  type="text"
                  value={reqRoles}
                  onChange={(e) => setReqRoles(e.target.value)}
                  placeholder="e.g. Materials Scientist, Embedded Engineer"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setIsNewRequestModalOpen(false)}
                  className="rounded-xl border border-neutral-700 px-4 py-2 text-neutral-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-4 py-2 font-bold text-white hover:bg-emerald-500 shadow-md"
                >
                  Publish Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        </div>
      )}
    </div>
  );
};
