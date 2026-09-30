export type EpistemicStatus = 
  | 'PROVEN_FACT'     // Peer-reviewed published science (Jaffré 1976, Assunção 2003, etc.)
  | 'ACTIVE_TEST'     // Currently benchmarked in lab chamber with empirical data
  | 'EMERGING_TECH'   // Scientifically plausible technology under evaluation in pipeline
  | 'THEORETICAL'     // Speculative future designs & mathematical models (e.g. 80% percolation matrix)
  | 'MYTHIC_VISION';  // Project vision, living interface identity, art & future civilization concepts

export interface EmergingTechnology {
  id: string;
  title: string;
  subtitle: string;
  question: string;
  evaluationStatus: 'Literature Review' | 'Concept Evaluation' | 'Feasibility Assessment' | 'Research Question' | 'Future Pilot';
  readinessLevel: string; // e.g. "TRL 1-2: Basic Principles"
  plausibilityScore: number; // 0 to 100%
  scientificRationale: string;
  coreHypothesis: string;
  requiredPreconditions: string[];
  keyRisksOrBarriers: string[];
  proposedExperimentalProtocol: string;
  academicPrecedents: string[];
  currentAssessmentNotes: string;
  upvotes: number;
}

export interface HyperaccumulatorSpecies {
  id: string;
  scientificName: string;
  commonName: string;
  targetMetals: string[];
  maxNaturalConcentrationPPM: number;
  maxNaturalDryWeightPercent: number;
  primaryTissue: string;
  chelationMechanism: string;
  molecularTransporters: string[];
  biomassPerYear: string; // e.g. "15-22 t/ha/yr"
  nativeHabitat: string;
  academicCitation: string;
  botanicalFamily: string;
  sapColor: string;
  bioBotAdvantage: string;
  conductivityPotential: 'Moderate' | 'High' | 'Ultra-High';
  epistemicStatus: EpistemicStatus;
  epistemicProof: string;
}

export interface BioMoldLayer {
  id: string;
  name: string;
  color: string;
  description: string;
  visible: boolean;
  material: string;
}

export interface SensorItem {
  id: string;
  name: string;
  category: 'Electrode' | 'Capacitive Wick' | 'Microfluidics' | 'Power Harvester';
  material: string;
  moldPlacement: string;
  inGrowthMechanism: string;
  x: number; // percentage in viewer
  y: number;
  status: 'Ready' | 'Encapsulated' | 'Active';
}

export interface GrowthTimelineStage {
  day: number;
  stageName: string;
  plantState: string;
  moldInteraction: string;
  electricalContinuity: number; // 0 to 100%
  livingViability: number; // 0 to 100%
}

export interface FeasibilityModelResult {
  metalPercent: number;
  symplasticCorePercent: number;
  apoplasticMatrixPercent: number;
  tissueViability: number; // 0 - 100%
  conductivitySm: number; // S/m (Siemens per meter)
  percolationThresholdReached: boolean;
  transpirationRetention: number; // % of normal transpiration
  flexuralModulusGPa: number;
  classification: 'Natural Metallophyte' | 'Chelated Hybrid' | 'Percolation Bio-Bot' | 'Toxicity Threshold' | 'Cellular Plasmolysis';
  explanation: string;
  epistemicStatus: EpistemicStatus;
}

export interface ResearchChannel {
  id: string;
  slug: string;
  title: string;
  description: string;
  focusArea: string;
  pinnedTopic: string;
  activeResearchers: number;
}

export interface ResearchMessage {
  id: string;
  channelId: string;
  author: string;
  affiliation: string;
  specialty: string;
  avatarSeed: string;
  timestamp: string;
  text: string;
  badge?: string;
  upvotes: number;
  citations?: string[];
  isGemini?: boolean;
  epistemicStatus: EpistemicStatus;
}

export interface ResearchHypothesis {
  id: string;
  title: string;
  author: string;
  specialty: string;
  date: string;
  status: 'Empirical Verified' | 'In Testing' | 'Peer Review Needed' | 'Theoretical';
  epistemicStatus: EpistemicStatus;
  epistemicNotes: string;
  votes: number;
  summary: string;
  mechanism: string;
  targetMetals: string[];
  peerReviews: {
    reviewer: string;
    specialty: string;
    comment: string;
    endorse: boolean;
  }[];
}

export interface RemediationSiteCase {
  id: string;
  name: string;
  region: string;
  primaryMetal: 'Nickel' | 'Zinc' | 'Cadmium' | 'Copper' | 'Cobalt' | 'Arsenic' | 'Lead';
  initialPPM: number;
  targetRegulatoryPPM: number;
  areaHectares: number;
  soilDepthMeters: number;
  recommendedSpeciesId: string;
  historicalContaminantSource: string;
  metalMarketValuePerKg: number;
}

export interface CollaboratorSpecialty {
  id: string;
  title: string;
  iconName: string;
  keyChallenge: string;
  whyNeeded: string;
  suggestedFocus: string;
}

export interface ElectricalSafetyFact {
  id: string;
  title: string;
  category: 'Voltage Protection' | 'Faraday Shielding' | 'Passive Sensing' | 'Surge Clamping';
  specification: string;
  howItWorks: string;
  epistemicStatus: EpistemicStatus;
  citationOrStandard: string;
}
