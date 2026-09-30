import { EmergingTechnology } from '../types';

export const EMERGING_TECHNOLOGIES: EmergingTechnology[] = [
  {
    id: 'plant-neural-network-mapping',
    title: 'Plant Neural Network Mapping',
    subtitle: 'Distributed Environmental Computation via Long-Distance Action Potentials',
    question: 'Can large-scale plant signaling networks function as environmental computation systems?',
    evaluationStatus: 'Literature Review',
    readinessLevel: 'TRL 1: Basic Scientific Principles Observed',
    plausibilityScore: 78,
    scientificRationale: 'Vascular plants propagate system-wide systemic calcium waves (Ca2+), reactive oxygen species (ROS), and electrical action potentials through phloem sieve tubes via glutamate-like receptors (GLR3.3/GLR3.6). These bioelectric propagation networks exhibit nonlinear temporal summation, spatial gating, and refractory periods remarkably homologous to neuromorphic neural networks.',
    coreHypothesis: 'By interfacing multi-electrode arrays with primary vascular bundles across a mature hyperaccumulator canopy, systemic voltage responses to heavy metal gradients and drought stress can be decoded as an analog distributed neural computing fabric.',
    requiredPreconditions: [
      'Simultaneous multi-site voltage recording with sub-microvolt resolution across >16 stem nodes',
      'Stable low-noise non-destructive contact without triggering wounding-induced callose occlusion',
      'Spatiotemporal filtering algorithm to decouple mechanical wind flutter from endogenous electrophysiological signals'
    ],
    keyRisksOrBarriers: [
      'Signal conduction velocity in plants (1 mm/s to 10 cm/s) is 1,000x slower than animal neurons',
      'Temperature fluctuations and daylight variations cause massive baseline DC drift (>30 mV)',
      'Signal attenuation across lignified nodes dampens high-frequency components'
    ],
    proposedExperimentalProtocol: 'Benchmarking a 32-channel graphene microelectrode grid on Brassica juncea stems inside a Faraday chamber; stimulating root zones with 50 μM Cadmium pulses and recording calcium wave propagation velocity and wavefront curvature.',
    academicPrecedents: [
      'Toyota et al. (Science 2018): Glutamate triggers long-distance, calcium-based plant defense signaling',
      'Bose (1926): The Nervous Mechanism of Plants',
      'Mousavi et al. (Nature 2013): Glutamate receptor-like genes mediate leaf-to-leaf electrical signaling'
    ],
    currentAssessmentNotes: 'Technically plausible as a low-frequency environmental anomaly detector, but computational bandwidth is limited to slow state changes rather than fast binary logic.',
    upvotes: 48
  },
  {
    id: 'root-grown-conductive-materials',
    title: 'Root-Grown Conductive Materials',
    subtitle: 'Biological Mineralization of Sub-Cellular Conductive Micro-Wires',
    question: 'Can conductive pathways be encouraged through biological mineralization processes?',
    evaluationStatus: 'Concept Evaluation',
    readinessLevel: 'TRL 2: Technology Concept Formulated',
    plausibilityScore: 84,
    scientificRationale: 'Hyperaccumulator roots transport massive ionic fluxes of Ni2+, Zn2+, and Cd2+ across the root endodermis. Under controlled redox microenvironments and the presence of bio-chelators or polyphenol-reducing agents in hydroponic media, metal ions can precipitate along cellulose microfibril channels in the apoplast, forming continuous metallic nano-wires in-situ.',
    coreHypothesis: 'Dosing root growth chambers with controlled ratios of nickel citrate and ascorbic acid will prompt extracellular catalytic reduction, forming metallic nickel pathways within dead apoplastic xylem vessels while leaving cortical symplastic cells alive.',
    requiredPreconditions: [
      'Precise spatial partitioning between living meristem cells and target mineralization zones',
      'Hydroponic redox buffer maintenance (Eh = -0.25V to +0.15V at pH 5.8)',
      'Non-toxic organic reducing agents compatible with root transpiration'
    ],
    keyRisksOrBarriers: [
      'Premature metal reduction clogging root hair pores, preventing water uptake and killing the seedling',
      'Non-continuous dendritic growth resulting in high electrical percolation resistance (>100 kΩ)',
      'Oxidation of precipitated nano-particles into non-conductive oxides'
    ],
    proposedExperimentalProtocol: 'Exposing Noccaea caerulescens root zones in 3D printed microfluidic chambers to alternating gradients of 1 mM Ni(NO3)2 and weak sodium ascorbate, tracking electrical resistance between root tips and crown over 21 days.',
    academicPrecedents: [
      'Stavrinidou et al. (Science Advances 2015): Electronic plants with synthesized conductive polymers inside rose xylem',
      'Giraldo et al. (Nature Materials 2014): Plant nanobionics approach to chloroplast electronics',
      'Bailly et al. (Biochem. J. 2008): Vacuolar nickel sequestration kinetics'
    ],
    currentAssessmentNotes: 'Highly promising. Swedish research on PEDOT:S in roses proved vascular routing is physically possible; using naturally absorbed heavy metals avoids synthetic monomer toxicity.',
    upvotes: 62
  },
  {
    id: 'mycelial-plant-logic-systems',
    title: 'Mycelial-Plant Logic Systems',
    subtitle: 'Hybrid Fungal & Plant Signaling Architectures for Distributed Sensing',
    question: 'Hybrid fungal and plant signaling architectures for distributed sensing.',
    evaluationStatus: 'Feasibility Assessment',
    readinessLevel: 'TRL 2: Laboratory Feasibility Stage',
    plausibilityScore: 71,
    scientificRationale: 'Arbuscular mycorrhizal fungi (AMF) form mutualistic hyphal networks that physically penetrate root cortical cells (forming arbuscules). Hyphae transmit bidirectional electrical pulses and calcium waves across meters of subterranean soil, effectively acting as biological fiber-optic cables and analog memristors.',
    coreHypothesis: 'A co-culture of Glomus intraradices mycorrhizae and hyperaccumulator bio-bots can form an interconnected, self-healing underground analog bus, routing environmental sensor signals between geographically separated bio-bot monitoring nodes.',
    requiredPreconditions: [
      'Co-culturing AMF strains tolerant of toxic metal concentrations (>1,000 PPM Ni/Zn)',
      'Impedance-matched bio-electronic interface between fungal hyphae and micro-electrode arrays',
      'Sterile mycorrhizal inoculation protocol for cleanroom bio-molds'
    ],
    keyRisksOrBarriers: [
      'Excessive soil metal toxicity inhibiting fungal spore germination and hyphal elongation',
      'High signal attenuation across fungal septa limiting communication distance to <1.5 meters',
      'Biological competition from parasitic soil microbes contaminating the signal mesh'
    ],
    proposedExperimentalProtocol: 'Establishing dual-chamber microfluidic rhizoboxes with a 10 cm bridging hyphal corridor; applying salt or heavy metal shock to Node A and recording spike transfer delay and voltage magnitude at Node B.',
    academicPrecedents: [
      'Adamatzky (Fungal Ecology 2022): Electrical activity of fungal mycelia for biosensing and analog computation',
      'Simard et al. (Nature 1997): Net transfer of carbon between ectomycorrhizal tree species in the field',
      'van der Heijden et al. (Ecology Letters 2015): Mycorrhizal ecology in stressed ecosystems'
    ],
    currentAssessmentNotes: 'Feasibility assessment underway. Demonstrates intriguing analog memristive switching, but establishing reproducible hyphal bridges in contaminated mine soils remains difficult.',
    upvotes: 39
  },
  {
    id: 'living-environmental-memory',
    title: 'Living Environmental Memory',
    subtitle: 'Epigenetic and Anatomical Encoding of Historical Pollutant Surges',
    question: 'Can environmental events be encoded into plant growth patterns and later read by machine vision systems?',
    evaluationStatus: 'Research Question',
    readinessLevel: 'TRL 1: Theoretical Concept Formulation',
    plausibilityScore: 68,
    scientificRationale: 'Exposure to heavy metal spikes and environmental stress triggers differential DNA methylation, modified stomatal density on developing abaxial surfaces, and distinct micro-structural density variations in xylem vessel lumen diameters (dendrochronological ring anomalies).',
    coreHypothesis: 'Transitory pollution events will record permanent, micro-anatomical timestamps in the plant’s cellular architecture that can be optically read in-situ via drone-mounted multispectral microscopes without destructive tissue harvesting.',
    requiredPreconditions: [
      'Correlation database between acute pollutant exposure (concentration × duration) and anatomical changes',
      'High-resolution non-destructive optical coherence tomography (OCT) or multispectral confocal imaging',
      'Genetic stability of target hyperaccumulator under recurrent stress cycles'
    ],
    keyRisksOrBarriers: [
      'Confounding environmental variables (drought, temperature, light intensity) masking pollutant-specific signatures',
      'Delayed growth response creating hours or days of lag before anatomical structures are physically deposited',
      'Optical opacity of thick outer bark or cuticle layers in mature woody specimens'
    ],
    proposedExperimentalProtocol: 'Growing 50 specimens of Berkheya coddii under simulated pulsed nickel spikes (48 hours on, 14 days off); scanning leaf abaxial surfaces with 4K confocal profilometry to isolate stomatal patterning shifts.',
    academicPrecedents: [
      'Boyko & Kovalchuk (Mutation Research 2011): Genome instability and epigenetic modifications in plants under stress',
      'Von Arx et al. (New Phytologist 2016): Quantitative wood anatomy and dendro-ecological memories',
      'Pandey et al. (Frontiers in Plant Science 2017): Epigenetic memories of abiotic stress'
    ],
    currentAssessmentNotes: 'Valid research question. Potential for creating living biological black-box flight recorders for environmental disaster zones.',
    upvotes: 51
  },
  {
    id: 'autonomous-phytomining-networks',
    title: 'Autonomous Phytomining Networks',
    subtitle: 'Distributed Hyperaccumulator Ecosystems Coordinated via AI Optimization',
    question: 'Distributed hyperaccumulator ecosystems coordinated through AI optimization.',
    evaluationStatus: 'Future Pilot',
    readinessLevel: 'TRL 3: Analytical & Experimental Critical Function Proof',
    plausibilityScore: 89,
    scientificRationale: 'Combining real-time soil biopotential sensing from living bio-bot nodes with satellite NDVI imaging and drone-based multispectral surveys allows predictive machine learning models to forecast peak foliar metal concentration windows down to 48-hour accuracy.',
    coreHypothesis: 'AI-guided agronomic management—triggering localized pulse irrigation of biodegradable chelators (e.g., [S,S]-EDDS) precisely when transpiration peaks—will increase seasonal nickel phytoextraction yield by 35% compared to static farm schedules.',
    requiredPreconditions: [
      'Multi-spectral drone fleet calibrated to hyperaccumulator chlorophyll fluorescence shifts',
      'Biodegradable chelator delivery drones for precision spot-application',
      'Continuous telemetry connection from grounded bio-bot sensor nodes'
    ],
    keyRisksOrBarriers: [
      'Chelator leaching into groundwater aquifers if heavy rainfall immediately follows application',
      'Sensor node battery degradation under extreme weather without robust bio-energy harvesting',
      'Regulatory constraints on autonomous drone operations over industrial brownfields'
    ],
    proposedExperimentalProtocol: 'Simulated 5-hectare pilot on Sudbury tailing plots comparing traditional static harvesting vs. AI-optimized micro-irrigation and drone-timed biomass harvesting.',
    academicPrecedents: [
      'van der Ent et al. (Environmental Science & Technology 2015): Phytomining: status, promises and challenges',
      'Bani et al. (Plant and Soil 2015): Nickel phytoextraction by Odontarrhena on ultramafic soils in the Balkans',
      'Robinson et al. (Biomass and Bioenergy 2003): The nickel phytoextraction potential of hyperaccumulating plants'
    ],
    currentAssessmentNotes: 'Highest readiness level in the pipeline (TRL 3). Scheduled for field pilot evaluation in Phase 3 of the Heavy Metal Leaf roadmap.',
    upvotes: 77
  },
  {
    id: 'xylem-chemo-resistors',
    title: 'Xylem Microfluidic Chemo-Resistors',
    subtitle: 'Continuous In-Vivo Sap Resistance Reading via Capillary Electrodes',
    question: 'Can vascular sap ion concentration changes be read as continuous analog resistance gradients?',
    evaluationStatus: 'Concept Evaluation',
    readinessLevel: 'TRL 2: Technology Concept Formulated',
    plausibilityScore: 82,
    scientificRationale: 'As hyperaccumulators pump nickel and zinc citrate complexes up xylem vessels during peak daytime transpiration, the ionic conductivity of the xylem fluid increases proportionally. Reading this via micro-capillary electrodes provides real-time pollution surge tracking.',
    coreHypothesis: 'Gold-coated microporous capillary probes cast directly into bio-molds can interface with xylem sap without introducing air embolisms, measuring dynamic ionic conductivity in real time.',
    requiredPreconditions: [
      'Hydrophobic sealing around probe entry to prevent cavitation air bubbles',
      'Low excitation AC signal (10 mV at 10 kHz) to prevent water electrolysis',
      'Temperature compensation calibration curve'
    ],
    keyRisksOrBarriers: [
      'Biofouling of capillary probe tips by cellular debris',
      'Sap flow cavitation breaking liquid continuity',
      'Diurnal water potential fluctuations confounding solute readings'
    ],
    proposedExperimentalProtocol: 'In-vitro stem perfusion of Odontarrhena bertolonii with graduated NiSO4 solutions (100 to 5,000 PPM) while logging 10 kHz AC complex impedance.',
    academicPrecedents: [
      'Coppedè et al. (Scientific Reports 2017): The bioristor: an in vivo sensor for monitoring real-time plant physiology',
      'Tyree & Sperry (Annual Review of Plant Physiology 1989): Vulnerability of xylem to cavitation and embolism'
    ],
    currentAssessmentNotes: 'Conceptually solid and builds directly on our 1 TΩ passive sensing architecture; requires cavitation mitigation validation.',
    upvotes: 34
  }
];
