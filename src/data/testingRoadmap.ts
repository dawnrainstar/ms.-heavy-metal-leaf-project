export interface RoadmapTest {
  id: string;
  name: string;
  description?: string;
  isCompleted: boolean;
}

export interface RoadmapPhase {
  id: string;
  phaseNumber: number;
  title: string;
  codename: string;
  status: 'ACTIVE' | 'NEXT' | 'PIPELINE';
  statusLabel: string;
  objective: string;
  tests: RoadmapTest[];
  emergingTechnologies?: string[];
  successCriteria: string[];
  deliverables?: string[];
  technologyLevel: Array<'Experimental' | 'Emerging' | 'Foundation' | 'Verified'>;
  linkedTab: string;
  linkedTabLabel: string;
  progressPercent: number;
}

export const TESTING_ROADMAP: RoadmapPhase[] = [
  {
    id: 'phase-0',
    phaseNumber: 0,
    title: 'FOUNDATION SCIENCE',
    codename: 'Phase 0: Baseline Empirical Biology',
    status: 'ACTIVE',
    statusLabel: 'Status: ACTIVE',
    objective: 'Understand natural plant behavior before introducing technological complexity.',
    tests: [
      { id: 'p0-t1', name: 'Soil moisture vs leaf angle tracking', isCompleted: true },
      { id: 'p0-t2', name: 'Plant growth rate measurements', isCompleted: true },
      { id: 'p0-t3', name: 'Root architecture observation', isCompleted: true },
      { id: 'p0-t4', name: 'Soil chemistry monitoring', isCompleted: true },
      { id: 'p0-t5', name: 'Hyperaccumulator performance comparisons', isCompleted: true },
      { id: 'p0-t6', name: 'Baseline electrophysiology recordings', isCompleted: true }
    ],
    successCriteria: [
      'Repeatable measurements',
      'Strong environmental correlations',
      'Stable plant health',
      'Reliable data collection methods'
    ],
    deliverables: [
      'Datasets (Moisture, leaf angle, rhizosphere chemistry)',
      'Correlation models (Volkov baseline curves)',
      'Monitoring protocols (SOP-01 Faraday recording)'
    ],
    technologyLevel: ['Foundation', 'Verified'],
    linkedTab: 'verified-science',
    linkedTabLabel: 'Verified Science Archive',
    progressPercent: 100
  },
  {
    id: 'phase-1',
    phaseNumber: 1,
    title: 'ENVIRONMENTAL INTELLIGENCE',
    codename: 'Phase 1: Plants as Living Monitoring Platforms',
    status: 'NEXT',
    statusLabel: 'Status: NEXT',
    objective: 'Transform plants into living environmental monitoring platforms.',
    tests: [
      { id: 'p1-t1', name: 'Soil moisture sensing', isCompleted: true },
      { id: 'p1-t2', name: 'Heavy metal concentration monitoring', isCompleted: true },
      { id: 'p1-t3', name: 'Water quality sensing', isCompleted: false },
      { id: 'p1-t4', name: 'Air quality monitoring', isCompleted: false },
      { id: 'p1-t5', name: 'Temperature and humidity integration', isCompleted: true },
      { id: 'p1-t6', name: 'Machine vision plant health assessment', isCompleted: false }
    ],
    emergingTechnologies: [
      'Low-power IoT networks',
      'TinyML edge AI',
      'Computer vision monitoring',
      'Environmental digital twins'
    ],
    successCriteria: [
      'Reliable environmental detection',
      'Automated monitoring',
      'Remote data access'
    ],
    deliverables: [
      'IoT edge sensing telemetry pipeline',
      'Multimodal environmental dashboard',
      'Digital twin calibration protocol'
    ],
    technologyLevel: ['Experimental', 'Emerging'],
    linkedTab: 'ai-assistant',
    linkedTabLabel: 'AI Environmental Intelligence',
    progressPercent: 50
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    title: 'PLANT ELECTRONICS',
    codename: 'Phase 2: Safe Bio-Electronic Communication',
    status: 'PIPELINE',
    statusLabel: 'Status: SCHEDULED',
    objective: 'Develop safe communication systems between living plants and electronic hardware.',
    tests: [
      { id: 'p2-t1', name: 'Biopotential measurements', isCompleted: true },
      { id: 'p2-t2', name: 'Non-invasive electrodes', isCompleted: true },
      { id: 'p2-t3', name: 'Implant-free sensing', isCompleted: false },
      { id: 'p2-t4', name: 'Plant signal classification', isCompleted: false },
      { id: 'p2-t5', name: 'Stress-response detection', isCompleted: false }
    ],
    emergingTechnologies: [
      'Flexible printed electronics',
      'Bio-compatible sensors',
      'Graphene electrodes',
      'Organic electronics'
    ],
    successCriteria: [
      'Detect useful biological signals',
      'Preserve plant health (<2 nA current draw)',
      'Long-term stability in rhizosphere'
    ],
    deliverables: [
      'Passive 1 TΩ instrumentation schematic',
      'Noise rejection & Faraday shielding spec',
      'Action potential classification library'
    ],
    technologyLevel: ['Experimental'],
    linkedTab: 'active-experiments',
    linkedTabLabel: 'Bioelectronics Lab',
    progressPercent: 40
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    title: 'GUIDED GROWTH ENGINEERING',
    codename: 'Phase 3: Structural Tissue Guidance',
    status: 'PIPELINE',
    statusLabel: 'Status: PROTOTYPE',
    objective: 'Determine whether living plant tissue can be shaped into useful structures.',
    tests: [
      { id: 'p3-t1', name: 'Xylem guidance molds', isCompleted: true },
      { id: 'p3-t2', name: 'Root guidance channels', isCompleted: true },
      { id: 'p3-t3', name: 'Structural support frameworks', isCompleted: false },
      { id: 'p3-t4', name: 'Geometric growth experiments', isCompleted: false }
    ],
    emergingTechnologies: [
      'Generative CAD',
      'AI morphology optimization',
      'Parametric growth design',
      'Biofabrication workflows'
    ],
    successCriteria: [
      'Predictable growth pathways',
      'No major growth inhibition',
      'Repeatable geometries'
    ],
    deliverables: [
      'PDMS micro-mold CAD blueprints',
      'Root-channel contact impedance data',
      'Zero-incision in-growth protocol'
    ],
    technologyLevel: ['Experimental', 'Emerging'],
    linkedTab: 'active-experiments',
    linkedTabLabel: 'Guided-Growth Molds Lab',
    progressPercent: 50
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    title: 'LIVING MATERIALS',
    codename: 'Phase 4: Biological Manufacturing Alternatives',
    status: 'PIPELINE',
    statusLabel: 'Status: CONCEPT EVALUATION',
    objective: 'Explore biological materials as alternatives to conventional manufacturing.',
    tests: [
      { id: 'p4-t1', name: 'Plant fiber composites', isCompleted: false },
      { id: 'p4-t2', name: 'Mycelium composites', isCompleted: false },
      { id: 'p4-t3', name: 'Biochar structures', isCompleted: false },
      { id: 'p4-t4', name: 'Mineralized tissues', isCompleted: false },
      { id: 'p4-t5', name: 'Conductive biomaterials', isCompleted: false }
    ],
    emergingTechnologies: [
      'Engineered biomaterials',
      'Self-healing composites',
      'Carbon-sequestering materials',
      'Living construction materials'
    ],
    successCriteria: [
      'Structural integrity',
      'Environmental durability',
      'Low ecological impact'
    ],
    deliverables: [
      'Tensile & compressive strength benchmarks',
      'Biodegradability & life-cycle assessment',
      'Conductive percolation threshold models'
    ],
    technologyLevel: ['Emerging'],
    linkedTab: 'future-concepts',
    linkedTabLabel: 'Living Materials & Future Systems',
    progressPercent: 10
  },
  {
    id: 'phase-5',
    phaseNumber: 5,
    title: 'HYPERACCUMULATOR PHYTOMINING',
    codename: 'Phase 5: Resource Recovery & Ecosystem Regeneration',
    status: 'PIPELINE',
    statusLabel: 'Status: PILOT DESIGN',
    objective: 'Recover valuable metals while restoring ecosystems.',
    tests: [
      { id: 'p5-t1', name: 'Nickel accumulation', isCompleted: true },
      { id: 'p5-t2', name: 'Zinc accumulation', isCompleted: true },
      { id: 'p5-t3', name: 'Cadmium extraction', isCompleted: false },
      { id: 'p5-t4', name: 'Biomass processing', isCompleted: false },
      { id: 'p5-t5', name: 'Metal recovery workflows', isCompleted: false }
    ],
    emergingTechnologies: [
      'AI harvest optimization',
      'Autonomous field monitoring',
      'Precision phytomining',
      'Biomining integration'
    ],
    successCriteria: [
      'Demonstrated metal recovery',
      'Economic feasibility',
      'Ecological benefits'
    ],
    deliverables: [
      'NiSO4 bio-ore purity certification (>99%)',
      'Field restoration kinetic models',
      'Commercial phytomining techno-economic model'
    ],
    technologyLevel: ['Foundation', 'Emerging'],
    linkedTab: 'field-sites',
    linkedTabLabel: 'Phytomining & Field Sites',
    progressPercent: 40
  }
];
