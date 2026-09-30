export type ContributionType = 
  | 'Research Notes'
  | 'Hypotheses'
  | 'Questions'
  | 'Datasets'
  | 'Experiment Logs'
  | 'CAD Files'
  | 'Images'
  | 'Field Observations'
  | 'Sensor Data'
  | 'Literature Reviews'
  | 'Funding Opportunities'
  | 'Project Updates'
  | 'Collaboration Requests'
  | 'Lessons Learned';

export type VisibilityOption = 'Public' | 'Project Team' | 'Research Circle' | 'Private';

export type ReputationRole = 
  | 'Member'
  | 'Contributor'
  | 'Research Contributor'
  | 'Project Lead'
  | 'Subject Matter Expert'
  | 'Advisor';

export type EpistemicLifecycleStage = 
  | '🟢 Verified Science'
  | '🟡 Experimental'
  | '🔷 Emerging'
  | '🟣 Future Concept';

export interface KnowledgeComment {
  id: string;
  author: string;
  authorRole: ReputationRole;
  authorOrg: string;
  text: string;
  createdAt: string;
  upvotes: number;
}

export interface KnowledgeCard {
  id: string;
  title: string;
  author: string;
  authorRole: ReputationRole;
  authorOrg: string;
  contributionType: ContributionType;
  visibility: VisibilityOption;
  status: EpistemicLifecycleStage;
  tags: string[];
  summary: string;
  content: string;
  metrics: {
    comments: number;
    collaborators: number;
    relatedProjects: number;
    upvotes: number;
    forks: number;
  };
  forkedFrom?: {
    id: string;
    title: string;
    version: string;
  };
  version: string;
  createdAt: string;
  comments: KnowledgeComment[];
}

export interface CommunityActivityItem {
  id: string;
  author: string;
  authorRole: ReputationRole;
  action: string;
  target: string;
  timeAgo: string;
  category: 'experiment' | 'paper' | 'data' | 'funding' | 'prototype' | 'fork' | 'evolution';
  badgeColor: string;
  linkedCardId?: string;
}

export interface KnowledgeGraphNode {
  id: string;
  name: string;
  type: 'Person' | 'Project' | 'Experiment' | 'Dataset' | 'Technology' | 'Organization' | 'Funding';
  categoryColor: string;
  connectionsCount: number;
  description: string;
}

export interface KnowledgeGraphLink {
  source: string;
  target: string;
  relationship: string;
}

export interface AutoEvolutionTrigger {
  id: string;
  timestamp: string;
  title: string;
  description: string;
  sourceEvent: string;
  resultingAction: string;
  status: 'PROCESSED' | 'ACTIVE' | 'SYNTHESIZING';
  matchedEntities: string[];
}

export const INITIAL_KNOWLEDGE_CARDS: KnowledgeCard[] = [
  {
    id: 'kc-1',
    title: 'Root-Guided Metal Recovery Trial (Sudbury Basin Assay)',
    author: 'Dawn',
    authorRole: 'Project Lead',
    authorOrg: 'Heavy Metal Leaf Initiative',
    contributionType: 'Experiment Logs',
    visibility: 'Public',
    status: '🟡 Experimental',
    tags: ['Phytoremediation', 'Hyperaccumulators', 'Resource Recovery'],
    summary: 'Evaluating Berkheya coddii in Sudbury nickel smelter slag (2,400 ppm Ni). Subterranean apoplastic percolation achieved 21.4% Ni in dried biomass ash without plant necrosis.',
    content: 'Methods: 6-month chronosequence across 12 zero-incision PDMS root-growth pods with continuous 1 TΩ passive electrophysiology monitoring. Cation chelation facilitated with citric acid buffers. Recovered NiSO4 exhibited 99.2% purity via atomic absorption spectroscopy.',
    metrics: {
      comments: 12,
      collaborators: 4,
      relatedProjects: 2,
      upvotes: 48,
      forks: 3
    },
    version: 'v1.4',
    createdAt: '2 hours ago',
    comments: [
      {
        id: 'c-1',
        author: 'Dr. Elena Vance',
        authorRole: 'Subject Matter Expert',
        authorOrg: 'Zurich Phytotechnology Institute',
        text: 'The citric acid buffer prevents cellular damage effectively. Did you observe any membrane hyperpolarization during the initial chelator pulse?',
        createdAt: '1 hour ago',
        upvotes: 6
      },
      {
        id: 'c-2',
        author: 'Dawn',
        authorRole: 'Project Lead',
        authorOrg: 'Heavy Metal Leaf Initiative',
        text: 'Yes! We recorded a transient -35 mV repolarization wave lasting ~14 minutes before returning to steady baseline resting potential (-110 mV).',
        createdAt: '45 mins ago',
        upvotes: 4
      }
    ]
  },
  {
    id: 'kc-2',
    title: 'Closed-Loop ECLSS Bioregenerative Life Support Systems (Paper Review)',
    author: 'David Handy',
    authorRole: 'Research Contributor',
    authorOrg: 'Space Agriculture Research Group',
    contributionType: 'Literature Reviews',
    visibility: 'Public',
    status: '🔷 Emerging',
    tags: ['Space Agriculture', 'Bioregenerative Life Support Systems', 'Resource Recovery', 'Closed-Loop Systems'],
    summary: 'Comprehensive review analyzing hyperaccumulator plant filtration for greywater recycling in lunar habitat life-support systems (BLSS/ECLSS).',
    content: 'Highlights: Using Brassica juncea and Noccaea caerulescens in nutrient film microgravity racks can purify 85 liters of heavy-metal contaminated water per m² of canopy while recovering trace minerals.',
    metrics: {
      comments: 9,
      collaborators: 6,
      relatedProjects: 3,
      upvotes: 56,
      forks: 5
    },
    version: 'v1.0',
    createdAt: '4 hours ago',
    comments: [
      {
        id: 'c-3',
        author: 'Dr. Anthony Chen',
        authorRole: 'Subject Matter Expert',
        authorOrg: 'AeroBio Systems',
        text: 'Outstanding synthesis, David. The root boundary layer in microgravity is the primary diffusion bottleneck—we should couple this with laminar aeration.',
        createdAt: '3 hours ago',
        upvotes: 8
      }
    ]
  },
  {
    id: 'kc-3',
    title: 'Water-Quality Continuous Telemetry (Puget Sound Bio-Rafts)',
    author: 'Sarah Chen',
    authorRole: 'Contributor',
    authorOrg: 'Cascade Ecological Restoration Lab',
    contributionType: 'Datasets',
    visibility: 'Public',
    status: '🟢 Verified Science',
    tags: ['Water Quality', 'Wetland Systems', 'Environmental Sensing', 'Environmental Monitoring'],
    summary: '90-day time-series ion-selective electrode dataset tracking copper and zinc attenuation through floating wetland root mats.',
    content: 'Sensor Stream: 43,200 readings capturing dissolved Cu²⁺, Zn²⁺, pH, dissolved oxygen, and water conductivity across storm surge events. Attenuation rate averaged 78.4% within 72 hours of peak runoff.',
    metrics: {
      comments: 7,
      collaborators: 3,
      relatedProjects: 2,
      upvotes: 39,
      forks: 2
    },
    version: 'v2.1',
    createdAt: '6 hours ago',
    comments: [
      {
        id: 'c-4',
        author: 'Marcus K. Thorne',
        authorRole: 'Project Lead',
        authorOrg: 'Cascade Ecological Restoration Lab',
        text: 'Clean data. The correlation between dissolved oxygen drop and microbial sulfate reduction in the rhizosphere is textbook.',
        createdAt: '5 hours ago',
        upvotes: 5
      }
    ]
  },
  {
    id: 'kc-4',
    title: 'Floating Wetland Sentinel for Heavy-Metal Monitoring (Forked V2)',
    author: 'Chrislance',
    authorRole: 'Research Contributor',
    authorOrg: 'Open Hardware Collective',
    contributionType: 'CAD Files',
    visibility: 'Public',
    status: '🟡 Experimental',
    tags: ['Wetland Systems', 'Bioelectronics', 'Robotics', 'Environmental Sensing'],
    summary: 'Fork of the original Floating Wetland Sentinel, modified to integrate submerged multi-electrode arrays and solar-harvesting buoyancy pods.',
    content: 'Open CAD package: Includes 3D printable pontoon brackets in recycled PETG, watertight sensor bay enclosure with IP68 O-ring seal, and modular root-basket clip-ons for Typha latifolia.',
    metrics: {
      comments: 15,
      collaborators: 5,
      relatedProjects: 4,
      upvotes: 62,
      forks: 7
    },
    forkedFrom: {
      id: 'kc-orig-1',
      title: 'Floating Wetland Sentinel (Original v1.0)',
      version: 'v1.0'
    },
    version: 'v2.0-FORK',
    createdAt: 'Yesterday',
    comments: [
      {
        id: 'c-5',
        author: 'Liam O’Connor',
        authorRole: 'Contributor',
        authorOrg: 'Open Sensing Hardware Collective',
        text: 'The new O-ring flange holds vacuum perfectly. We flashed our TinyML LoRa node inside the payload chamber and tested transmission over 4.2 km.',
        createdAt: '18 hours ago',
        upvotes: 7
      }
    ]
  },
  {
    id: 'kc-5',
    title: 'ARPA-E & Horizon Europe Phytomining Consortium Grant',
    author: 'Ahmed Ali',
    authorRole: 'Advisor',
    authorOrg: 'Global Climate Innovation Facility',
    contributionType: 'Funding Opportunities',
    visibility: 'Public',
    status: '🟢 Verified Science',
    tags: ['Phytomining', 'Resource Recovery', 'Circular Economy', 'Climate Technology'],
    summary: 'Open solicitation for $3.5M consortium grant targeting non-smelting critical mineral recovery from mine tailings and industrial brownfields.',
    content: 'Eligibility: Interdisciplinary teams including at least 1 agronomic research institution, 1 hardware/sensor developer, and 1 community restoration partner. Submission deadline: Q4 2026.',
    metrics: {
      comments: 18,
      collaborators: 8,
      relatedProjects: 5,
      upvotes: 74,
      forks: 4
    },
    version: 'v1.0',
    createdAt: '2 days ago',
    comments: [
      {
        id: 'c-6',
        author: 'Sarah N. Mwangi',
        authorRole: 'Project Lead',
        authorOrg: 'Katanga Mineral Regeneration Consortium',
        text: 'We are assembling the application team right now. Seeking an academic co-PI on plant translocators.',
        createdAt: '1 day ago',
        upvotes: 9
      }
    ]
  }
];

export const INITIAL_COMMUNITY_ACTIVITIES: CommunityActivityItem[] = [
  {
    id: 'act-1',
    author: 'Dawn',
    authorRole: 'Project Lead',
    action: 'added a new phytomining experiment',
    target: 'Root-Guided Metal Recovery Trial (Sudbury Basin Assay)',
    timeAgo: 'Just now',
    category: 'experiment',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    linkedCardId: 'kc-1'
  },
  {
    id: 'act-2',
    author: 'David Handy',
    authorRole: 'Research Contributor',
    action: 'shared a paper on bioregenerative life support systems',
    target: 'Closed-Loop ECLSS Bioregenerative Systems Review',
    timeAgo: '15 mins ago',
    category: 'paper',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    linkedCardId: 'kc-2'
  },
  {
    id: 'act-3',
    author: 'Sarah Chen',
    authorRole: 'Contributor',
    action: 'uploaded water-quality monitoring data',
    target: 'Puget Sound 90-Day Attenuation Stream (43k datapoints)',
    timeAgo: '42 mins ago',
    category: 'data',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    linkedCardId: 'kc-3'
  },
  {
    id: 'act-4',
    author: 'Ahmed Ali',
    authorRole: 'Advisor',
    action: 'posted a funding opportunity',
    target: '$3.5M ARPA-E / Horizon Europe Critical Minerals Consortium',
    timeAgo: '1 hour ago',
    category: 'funding',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    linkedCardId: 'kc-5'
  },
  {
    id: 'act-5',
    author: 'Chrislance',
    authorRole: 'Research Contributor',
    action: 'released a new prototype design',
    target: 'Floating Wetland Sentinel v2.0 (CAD & 3D STL Enclosure)',
    timeAgo: '2 hours ago',
    category: 'prototype',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    linkedCardId: 'kc-4'
  }
];

export const INITIAL_KNOWLEDGE_GRAPH_NODES: KnowledgeGraphNode[] = [
  // People
  { id: 'p-dawn', name: 'Dawn', type: 'Person', categoryColor: '#10b981', connectionsCount: 8, description: 'Platform Founder, Lead Phytotechnology Researcher' },
  { id: 'p-david', name: 'David Handy', type: 'Person', categoryColor: '#10b981', connectionsCount: 6, description: 'Space Biology & Bioregenerative Life Support' },
  { id: 'p-sarah', name: 'Sarah Chen', type: 'Person', categoryColor: '#10b981', connectionsCount: 5, description: 'Wetland Ecologist, Water Quality Monitoring' },
  { id: 'p-chris', name: 'Chrislance', type: 'Person', categoryColor: '#10b981', connectionsCount: 7, description: 'Hardware Prototyping & CAD Engineer' },
  { id: 'p-elena', name: 'Dr. Elena Vance', type: 'Person', categoryColor: '#10b981', connectionsCount: 9, description: 'Lead Plant Electrophysiologist, 1 TΩ passive AFE' },

  // Projects
  { id: 'proj-wetland', name: 'Floating Wetland Sentinel', type: 'Project', categoryColor: '#06b6d4', connectionsCount: 8, description: 'Automated vegetative monitoring rafts for industrial tailing retention ponds' },
  { id: 'proj-sudbury', name: 'Sudbury Nickel Phytomining', type: 'Project', categoryColor: '#06b6d4', connectionsCount: 7, description: 'Field recovery of battery-grade nickel sulfate from ultramafic mine waste' },
  { id: 'proj-eclss', name: 'Space Agriculture ECLSS Pod', type: 'Project', categoryColor: '#06b6d4', connectionsCount: 6, description: 'Microgravity-compatible closed-loop greywater purification pod' },

  // Experiments
  { id: 'exp-root', name: 'Root-Guided Metal Recovery Assay', type: 'Experiment', categoryColor: '#f59e0b', connectionsCount: 5, description: 'PDMS micro-mold in-growth testing with 1 TΩ biopotential acquisition' },
  { id: 'exp-impedance', name: 'Zero-Incision Contact Impedance Test', type: 'Experiment', categoryColor: '#f59e0b', connectionsCount: 4, description: 'Pectin-sealed electrode contact impedance dropping to 4.8 kΩ' },

  // Datasets
  { id: 'data-water', name: 'Puget Sound 90-Day Attenuation Stream', type: 'Dataset', categoryColor: '#3b82f6', connectionsCount: 4, description: '43,200 time-series cation and pH telemetry datapoints' },
  { id: 'data-volkov', name: 'Brassica Action Potential Waveforms', type: 'Dataset', categoryColor: '#3b82f6', connectionsCount: 5, description: 'Action potential kinetics under osmotic and heavy metal shock' },

  // Technologies
  { id: 'tech-ina128', name: '1 TΩ TI INA128 Passive Front-End', type: 'Technology', categoryColor: '#8b5cf6', connectionsCount: 6, description: 'Passive bioelectric listening circuit drawing <2 nA current' },
  { id: 'tech-faraday', name: 'Grounded Faraday Cage Shielding', type: 'Technology', categoryColor: '#8b5cf6', connectionsCount: 5, description: 'Complete deflection of external 50/60 Hz and RF electrical fields' },
  { id: 'tech-bioore', name: 'Hydrometallurgical Bio-Ore Refining', type: 'Technology', categoryColor: '#8b5cf6', connectionsCount: 6, description: '>99% high-purity NiSO4 precipitation without smelter emissions' },

  // Organizations
  { id: 'org-hml', name: 'Heavy Metal Leaf Initiative', type: 'Organization', categoryColor: '#ec4899', connectionsCount: 8, description: 'Open Ecological Intelligence Core & Research Network' },
  { id: 'org-zurich', name: 'Zurich Phytotechnology Institute', type: 'Organization', categoryColor: '#ec4899', connectionsCount: 6, description: 'Academic research laboratory in plant electrophysiology' },

  // Funding
  { id: 'fund-arpae', name: '$3.5M ARPA-E Critical Minerals Grant', type: 'Funding', categoryColor: '#eab308', connectionsCount: 5, description: 'Federal funding award for non-smelting battery mineral recovery' }
];

export const INITIAL_KNOWLEDGE_GRAPH_LINKS: KnowledgeGraphLink[] = [
  { source: 'p-dawn', target: 'proj-sudbury', relationship: 'Leads' },
  { source: 'p-dawn', target: 'exp-root', relationship: 'Directs' },
  { source: 'p-david', target: 'proj-eclss', relationship: 'Co-leads' },
  { source: 'p-sarah', target: 'proj-wetland', relationship: 'Contributes' },
  { source: 'p-sarah', target: 'data-water', relationship: 'Published' },
  { source: 'p-chris', target: 'proj-wetland', relationship: 'Engineered V2' },
  { source: 'p-elena', target: 'tech-ina128', relationship: 'Invented' },
  { source: 'p-elena', target: 'data-volkov', relationship: 'Curated' },
  { source: 'exp-root', target: 'tech-bioore', relationship: 'Validates' },
  { source: 'exp-root', target: 'tech-ina128', relationship: 'Monitors With' },
  { source: 'proj-wetland', target: 'tech-faraday', relationship: 'Shields With' },
  { source: 'proj-sudbury', target: 'fund-arpae', relationship: 'Applicant' },
  { source: 'org-hml', target: 'p-dawn', relationship: 'Founded By' },
  { source: 'org-zurich', target: 'p-elena', relationship: 'Affiliated' }
];

export const INITIAL_AUTO_EVOLUTION_TRIGGERS: AutoEvolutionTrigger[] = [
  {
    id: 'evo-1',
    timestamp: '10 mins ago',
    title: 'New Collaborator Auto-Profile Synthesis',
    description: 'David Handy joined the network. System parsed credentials, extracted 5 core expertise fields, and generated a specialized interest map.',
    sourceEvent: 'User Registration Event (David Handy)',
    resultingAction: 'Matched to 4 active projects: Space Agriculture ECLSS, Closed-Loop Systems, Resource Recovery, Living Materials.',
    status: 'PROCESSED',
    matchedEntities: ['David Handy', 'Space Agriculture ECLSS Pod', 'AeroBio Systems']
  },
  {
    id: 'evo-2',
    timestamp: '35 mins ago',
    title: 'Autonomous Working Group Generation',
    description: '12 active members independently flagged interests in "Plant-Based Environmental Sensing" and "Bioelectronics".',
    sourceEvent: 'Interest Frequency Threshold Exceeded (N=12)',
    resultingAction: 'Created new working space: "Plant-Based Environmental Sensing Working Group" with auto-seeded discussion board and literature repo.',
    status: 'ACTIVE',
    matchedEntities: ['Dr. Elena Vance', 'Liam O’Connor', 'Dawn', '1 TΩ TI INA128']
  },
  {
    id: 'evo-3',
    timestamp: '1 hour ago',
    title: 'Automatic Technology Pipeline Stage Progression',
    description: 'Empirical data uploaded for Sudbury Basin Assay validated nickel recovery purity >99% across 3 independent replicate harvests.',
    sourceEvent: 'Replicated Assay Data Upload (kc-1)',
    resultingAction: 'Automated recommendation: Move "Nickel Phytomining" from 🟡 Active Research to 🟢 Field Verified in Technology Pipeline.',
    status: 'PROCESSED',
    matchedEntities: ['Sudbury Nickel Phytomining', 'Berkheya coddii', 'Verified Science Archive']
  },
  {
    id: 'evo-4',
    timestamp: '2 hours ago',
    title: 'Consortium Funding Cross-Match',
    description: 'Ahmed Ali posted $3.5M ARPA-E grant solicitation. AI matched required roles with Katanga Consortium and Cascade Restoration Lab.',
    sourceEvent: 'Funding Opportunity Ingestion (kc-5)',
    resultingAction: 'Notified 3 Project Leads with 94%+ compatibility rating to assemble collaborative grant team.',
    status: 'SYNTHESIZING',
    matchedEntities: ['Ahmed Ali', 'Sarah N. Mwangi', 'Marcus K. Thorne', 'ARPA-E Grant']
  }
];
