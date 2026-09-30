export interface MemberProfile {
  id: string;
  name: string;
  professionalTitle: string;
  organization: string;
  organizationType: 'University' | 'Research Lab' | 'Startup' | 'Nonprofit' | 'Government Agency' | 'Corporate Innovation';
  location: string;
  personalWebsite?: string;
  linkedInUrl?: string;
  avatarSeed: string;
  areasOfExpertise: string[];
  collaborationStatuses: string[];
  projectInterests: string[];
  bio: string;
  publishedWork?: string;
  ratingScore: number;
}

export interface ResearchTeam {
  id: string;
  name: string;
  codename: string;
  focus: string;
  description: string;
  leader: string;
  rolesRepresented: string[];
  memberIds: string[];
  activeProjectsCount: number;
  openRolesNeeded: string[];
}

export interface CollaborationRequest {
  id: string;
  authorId: string;
  authorName: string;
  authorTitle: string;
  authorOrg: string;
  type: 'Looking for Collaborators' | 'Research Question' | 'Pilot Project' | 'Grant Team' | 'Student Opportunity' | 'Funding Opportunity' | 'Technology Challenge' | 'Literature Review';
  title: string;
  description: string;
  targetInterests: string[];
  seekingRoles: string[];
  createdAt: string;
  responsesCount: number;
}

export interface OrganizationProfile {
  id: string;
  name: string;
  type: 'University' | 'Research Lab' | 'Startup' | 'Nonprofit' | 'Government Agency' | 'Corporate Innovation';
  location: string;
  focus: string;
  capabilities: string[];
  activeProjects: number;
  contactEmail: string;
}

export const EXPERTISE_AREAS = [
  'Phytoremediation',
  'Hyperaccumulator Plants',
  'Phytomining',
  'Space Agriculture',
  'Bioregenerative Life Support Systems',
  'Environmental Engineering',
  'Restoration Ecology',
  'Wetland Systems',
  'Plant Electrophysiology',
  'Bioelectronics',
  'AI & Data Science',
  'Environmental Monitoring',
  'Materials Science',
  'Circular Economy',
  'Climate Technology',
  'Carbon Removal',
  'Water Quality',
  'Soil Science',
  'Robotics',
  'Synthetic Biology'
];

export const COLLABORATION_STATUSES = [
  'Open to Collaboration',
  'Seeking Research Partners',
  'Seeking Students',
  'Seeking Mentors',
  'Seeking Funding Partners',
  'Seeking Engineering Support',
  'Seeking Scientific Advisors',
  'Available for Consulting'
];

export const PROJECT_INTERESTS_SUBSCRIPTIONS = [
  'Environmental Sensing',
  'Resource Recovery',
  'Living Materials',
  'Ecological AI',
  'Restoration Infrastructure',
  'Phytomining Systems',
  'Bioelectronics',
  'Space Agriculture',
  'Closed-Loop Systems',
  'Emerging Technologies'
];

export const INITIAL_MEMBERS: MemberProfile[] = [
  {
    id: 'mem-1',
    name: 'Dr. Elena Vance',
    professionalTitle: 'Lead Plant Electrophysiologist',
    organization: 'Zurich Phytotechnology Institute',
    organizationType: 'University',
    location: 'Zurich, Switzerland',
    personalWebsite: 'https://vance-electrophys.org',
    linkedInUrl: 'https://linkedin.com/in/elena-vance-phd',
    avatarSeed: 'Elena',
    areasOfExpertise: ['Plant Electrophysiology', 'Bioelectronics', 'Hyperaccumulator Plants', 'Environmental Monitoring'],
    collaborationStatuses: ['Open to Collaboration', 'Seeking Research Partners', 'Seeking Students'],
    projectInterests: ['Bioelectronics', 'Environmental Sensing', 'Living Materials'],
    bio: 'Pioneered 1 TΩ input impedance measurement rigs for plant action potential characterization without wounding trauma. Specializes in Faraday cage design and signal classification.',
    publishedWork: 'Volkov & Vance (2022) Action Potentials in Metallophytes; Vance (2024) Zero-Incision Micro-Electrodes in PDMS.',
    ratingScore: 98
  },
  {
    id: 'mem-2',
    name: 'Marcus K. Thorne',
    professionalTitle: 'Senior Environmental Engineer',
    organization: 'Cascade Ecological Restoration Lab',
    organizationType: 'Research Lab',
    location: 'Seattle, Washington, USA',
    personalWebsite: 'https://marcusthorne.eco',
    linkedInUrl: 'https://linkedin.com/in/marcus-thorne-env',
    avatarSeed: 'Marcus',
    areasOfExpertise: ['Environmental Engineering', 'Wetland Systems', 'Water Quality', 'Restoration Ecology', 'Phytoremediation'],
    collaborationStatuses: ['Open to Collaboration', 'Seeking Engineering Support', 'Available for Consulting'],
    projectInterests: ['Restoration Infrastructure', 'Environmental Sensing', 'Closed-Loop Systems'],
    bio: 'Field engineer with 14 years deploying floating treatment wetlands on industrial tailing lakes and urban storm runoff ponds throughout the Pacific Northwest and British Columbia.',
    publishedWork: 'Thorne et al. (2023) Heavy Metal Partitioning in Engineered Bio-Rafts.',
    ratingScore: 95
  },
  {
    id: 'mem-3',
    name: 'Dr. Anthony Chen',
    professionalTitle: 'Astro-Botanist & Space Agriculture Lead',
    organization: 'AeroBio Systems / International Space Studies',
    organizationType: 'Startup',
    location: 'Houston, Texas, USA',
    personalWebsite: 'https://aerobio.tech',
    linkedInUrl: 'https://linkedin.com/in/anthonychen-spacebio',
    avatarSeed: 'Anthony',
    areasOfExpertise: ['Space Agriculture', 'Bioregenerative Life Support Systems', 'Circular Economy', 'Synthetic Biology'],
    collaborationStatuses: ['Seeking Research Partners', 'Seeking Funding Partners', 'Seeking Scientific Advisors'],
    projectInterests: ['Space Agriculture', 'Closed-Loop Systems', 'Ecological AI', 'Emerging Technologies'],
    bio: 'Designing closed-loop bioregenerative life support systems (BLSS) using hyperaccumulator root filtration to purify greywater and extract heavy metals in microgravity environments.',
    publishedWork: 'Chen (2024) Metallophyte Bio-Filters in Lunar Base Habitat ECLSS.',
    ratingScore: 94
  },
  {
    id: 'mem-4',
    name: 'Sarah N. Mwangi',
    professionalTitle: 'Chief Soil Geochemist & Phytomining Specialist',
    organization: 'Katanga Mineral Regeneration Consortium',
    organizationType: 'Corporate Innovation',
    location: 'Lubumbashi, DR Congo / London',
    personalWebsite: 'https://katanga-regen.org',
    linkedInUrl: 'https://linkedin.com/in/sarah-mwangi-geochem',
    avatarSeed: 'Sarah',
    areasOfExpertise: ['Phytomining', 'Soil Science', 'Resource Recovery', 'Hyperaccumulator Plants', 'Circular Economy'],
    collaborationStatuses: ['Open to Collaboration', 'Seeking Research Partners', 'Seeking Engineering Support'],
    projectInterests: ['Phytomining Systems', 'Resource Recovery', 'Living Materials'],
    bio: 'Leading field trials extracting battery-grade cobalt and copper bio-ore from historical smelting slag. Proven track record in agronomic hyperaccumulation scaling.',
    publishedWork: 'Mwangi et al. (2023) Bio-Ore Leaching Kinetics in Central African Copperbelt.',
    ratingScore: 97
  },
  {
    id: 'mem-5',
    name: 'Liam O’Connor',
    professionalTitle: 'IoT Embedded Systems & TinyML Architect',
    organization: 'Open Sensing Hardware Collective',
    organizationType: 'Startup',
    location: 'Vancouver, Canada',
    personalWebsite: 'https://opensensing.cc',
    linkedInUrl: 'https://linkedin.com/in/liam-oconnor-tinyml',
    avatarSeed: 'Liam',
    areasOfExpertise: ['AI & Data Science', 'Environmental Monitoring', 'Robotics', 'Bioelectronics'],
    collaborationStatuses: ['Open to Collaboration', 'Seeking Students', 'Available for Consulting'],
    projectInterests: ['Ecological AI', 'Environmental Sensing', 'Bioelectronics'],
    bio: 'Hardware engineer building sub-milliwatt LoRaWAN sensor nodes with on-device TinyML neural networks for plant bioelectric signal classification and telemetry.',
    publishedWork: 'O’Connor (2024) Edge Impulse Inference for Plant Biopotential Spikes.',
    ratingScore: 91
  },
  {
    id: 'mem-6',
    name: 'Prof. Amara Diallo',
    professionalTitle: 'Chair of Agronomic Phytoremediation',
    organization: 'Institut Polytechnique de Montréal',
    organizationType: 'University',
    location: 'Montreal, Canada',
    personalWebsite: 'https://diallo-lab.ca',
    linkedInUrl: 'https://linkedin.com/in/amara-diallo-phytoremed',
    avatarSeed: 'Amara',
    areasOfExpertise: ['Phytoremediation', 'Soil Science', 'Restoration Ecology', 'Climate Technology', 'Carbon Removal'],
    collaborationStatuses: ['Seeking Students', 'Seeking Funding Partners', 'Seeking Scientific Advisors'],
    projectInterests: ['Restoration Infrastructure', 'Resource Recovery', 'Closed-Loop Systems'],
    bio: 'Principal investigator on federal Superfund rehabilitation grants. Evaluated over 40 Brassicaceae and Phyllanthaceae taxa across North American mine tailings.',
    publishedWork: 'Diallo et al. (2021) Cadmium and Zinc Translocation in Cold-Climate Soils.',
    ratingScore: 96
  }
];

export const INITIAL_RESEARCH_TEAMS: ResearchTeam[] = [
  {
    id: 'team-phytomining',
    name: 'Phytomining Research Consortium',
    codename: 'TEAM-PHYTO',
    focus: 'Battery-Grade Bio-Ore Recovery',
    description: 'Interdisciplinary working group optimizing hyperaccumulator cropping systems (Berkheya coddii, Pycnandra acuminata) to harvest high-purity nickel and cobalt directly from mine tailings without smelter emissions.',
    leader: 'Sarah N. Mwangi (Katanga Consortium)',
    rolesRepresented: ['Plant Scientists', 'Soil Chemists', 'Environmental Engineers', 'Materials Researchers'],
    memberIds: ['mem-4', 'mem-6', 'mem-2'],
    activeProjectsCount: 3,
    openRolesNeeded: ['Pyrometallurgy Bio-Ash Specialist', 'Techno-Economic Modeler']
  },
  {
    id: 'team-bioelectronics',
    name: 'Bioelectronics & Electrophysiology Lab',
    codename: 'TEAM-BIOELEC',
    focus: 'Zero-Incision Plant-Machine Interfaces',
    description: 'Developing ultra-high input impedance (1 TΩ) analog front-ends, flexible graphene electrodes, and compliant PDMS root-growth molds for long-term passive listening to plant action potentials.',
    leader: 'Dr. Elena Vance (Zurich Institute)',
    rolesRepresented: ['Electrical Engineers', 'Plant Physiologists', 'Data Scientists', 'Hardware Developers'],
    memberIds: ['mem-1', 'mem-5'],
    activeProjectsCount: 2,
    openRolesNeeded: ['Microfluidics Channel Designer', 'TinyML Spike Classifier']
  },
  {
    id: 'team-space-ag',
    name: 'Space Agriculture & Closed-Loop Systems',
    codename: 'TEAM-ASTRO',
    focus: 'Bioregenerative Life Support (BLSS)',
    description: 'Investigating closed-loop ecological life support using hyperaccumulating crops to decontaminate habitat greywater, sequester atmospheric carbon, and produce mineralized living materials on lunar and Martian outposts.',
    leader: 'Dr. Anthony Chen (AeroBio Systems)',
    rolesRepresented: ['Space Biologists', 'Controlled Environment Agriculture Experts', 'Systems Engineers', 'Environmental Modelers'],
    memberIds: ['mem-3', 'mem-1', 'mem-2'],
    activeProjectsCount: 2,
    openRolesNeeded: ['ECLSS Air-Loop Modeler', 'Nutrient Film Hydroponics Agronomist']
  }
];

export const INITIAL_COLLAB_REQUESTS: CollaborationRequest[] = [
  {
    id: 'req-1',
    authorId: 'mem-2',
    authorName: 'Marcus K. Thorne',
    authorTitle: 'Senior Environmental Engineer',
    authorOrg: 'Cascade Ecological Restoration Lab',
    type: 'Pilot Project',
    title: 'Floating Wetland Sentinel Network (Puget Sound Tailings Pond)',
    description: 'Looking for a Wetland Ecologist, Water Quality Specialist, and IoT Sensor Engineer to co-deploy 12 vegetative bio-rafts equipped with real-time multi-cation ion-selective electrodes.',
    targetInterests: ['Wetland Systems', 'Water Quality', 'Environmental Sensing', 'Ecological AI'],
    seekingRoles: ['Wetland Scientist', 'Water Quality Specialist', 'Embedded Systems Engineer', 'Data Scientist'],
    createdAt: '2 days ago',
    responsesCount: 4
  },
  {
    id: 'req-2',
    authorId: 'mem-4',
    authorName: 'Sarah N. Mwangi',
    authorTitle: 'Chief Soil Geochemist',
    authorOrg: 'Katanga Mineral Regeneration Consortium',
    type: 'Grant Team',
    title: 'ARPA-E & Horizon Europe Co-Application: Clean Phytomining Bio-Ore',
    description: 'Assembling an international grant team to submit a $3.2M proposal on circular battery-grade nickel sulfate production from ultramafic tailings. Need academic co-PI and materials engineer.',
    targetInterests: ['Phytomining', 'Resource Recovery', 'Circular Economy', 'Materials Science'],
    seekingRoles: ['Grant Specialist', 'Materials Scientist', 'Plant Geneticist'],
    createdAt: 'Yesterday',
    responsesCount: 7
  },
  {
    id: 'req-3',
    authorId: 'mem-3',
    authorName: 'Dr. Anthony Chen',
    authorTitle: 'Astro-Botanist',
    authorOrg: 'AeroBio Systems',
    type: 'Research Question',
    title: 'Can Plant Vascular Calcium Waves Trigger Microfluidic Actuation in Microgravity?',
    description: 'Exploring whether GLR-mediated Ca²⁺ flux in Brassica xylem can be transduced into capacitive voltage gates to operate peristaltic nutrient pumps without battery drain.',
    targetInterests: ['Space Agriculture', 'Bioregenerative Life Support Systems', 'Plant Electrophysiology', 'Synthetic Biology'],
    seekingRoles: ['Plant Electrophysiologist', 'Microfluidics Engineer'],
    createdAt: '3 days ago',
    responsesCount: 5
  }
];

export const INITIAL_ORGANIZATIONS: OrganizationProfile[] = [
  {
    id: 'org-1',
    name: 'Zurich Phytotechnology Institute',
    type: 'University',
    location: 'Zurich, Switzerland',
    focus: 'Plant electrophysiology, ion-channel biophysics, and non-destructive bioelectronics.',
    capabilities: ['Faraday Cage Chamber SOPs', '1 TΩ TI INA128 Front-End CAD', 'Vacuolar Patch-Clamp Labs'],
    activeProjects: 4,
    contactEmail: 'collaborations@zurich-phyto.ch'
  },
  {
    id: 'org-2',
    name: 'Cascade Ecological Restoration Lab',
    type: 'Research Lab',
    location: 'Seattle, Washington, USA',
    focus: 'Wetland phytoremediation, mine tailing stabilization, and riparian restoration.',
    capabilities: ['Floating Wetland Bio-Rafts', 'Tailings Geochemical Core Analysis', 'Watershed Modeling'],
    activeProjects: 5,
    contactEmail: 'partners@cascade-eco.org'
  },
  {
    id: 'org-3',
    name: 'AeroBio Systems',
    type: 'Startup',
    location: 'Houston, Texas, USA',
    focus: 'Bioregenerative life support systems, space agriculture, and closed-loop nutrient cycling.',
    capabilities: ['Microgravity Plant Pod CAD', 'Automated Water Reclamation', 'Nutrient Recycling Sensors'],
    activeProjects: 2,
    contactEmail: 'contact@aerobio.tech'
  },
  {
    id: 'org-4',
    name: 'Katanga Mineral Regeneration Consortium',
    type: 'Corporate Innovation',
    location: 'Lubumbashi, DRC & London',
    focus: 'Agronomic phytomining, clean battery precursors, and copperbelt tailing recovery.',
    capabilities: ['Large-Scale Agronomic Plots', 'Ash Hydrometallurgical Extraction', 'Battery Cathode Purity Assays'],
    activeProjects: 6,
    contactEmail: 'invest@katanga-regen.org'
  }
];

// Helper to calculate AI Match score between a project/query and a member profile
export function calculateMatchScore(
  member: MemberProfile,
  requiredInterests: string[],
  requiredRoles: string[] = []
): { score: number; overlappingInterests: string[]; matchedRoles: string[] } {
  const overlappingInterests = member.areasOfExpertise.filter(e => requiredInterests.includes(e));
  
  // Calculate interest overlap score (up to 70 pts)
  const interestScore = requiredInterests.length > 0
    ? (overlappingInterests.length / requiredInterests.length) * 65
    : 40;

  // Calculate role match score (up to 30 pts)
  const matchedRoles = requiredRoles.filter(role => 
    member.professionalTitle.toLowerCase().includes(role.toLowerCase()) ||
    member.areasOfExpertise.some(e => e.toLowerCase().includes(role.toLowerCase()))
  );
  const roleScore = requiredRoles.length > 0
    ? (matchedRoles.length / requiredRoles.length) * 30
    : 20;

  // Add baseline collaboration readiness bonus (up to 10 pts)
  const collabBonus = member.collaborationStatuses.includes('Open to Collaboration') ? 8 : 4;

  const totalScore = Math.min(99, Math.round(interestScore + roleScore + collabBonus));

  return {
    score: totalScore,
    overlappingInterests,
    matchedRoles
  };
}
