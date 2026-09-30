import { ResearchChannel, ResearchMessage, ResearchHypothesis } from '../types';

export const RESEARCH_CHANNELS: ResearchChannel[] = [
  {
    id: 'channel-mold-ingrowth',
    slug: 'bio-mold-ingrowth',
    title: '#bio-mold-ingrowth',
    description: 'Zero-installation bio-molding: pre-casting sensors into PDMS/alginate cavities and growing plant organs through microchannels.',
    focusArea: 'Sensor Encapsulation & Bio-Mechanical Guidance',
    pinnedTopic: 'SOP-04: Eliminating surgery wounds by utilizing negative capillary pressure to guide seedling root hairs across gold electrode arrays.',
    activeResearchers: 18,
  },
  {
    id: 'channel-80-percent-limit',
    slug: 'the-80-percent-limit',
    title: '#the-80-percent-limit',
    description: 'Pushing metal content from 25.7% (Pycnandra natural cap) to an engineered ~80% matrix via dual-compartment partitioning without cell death.',
    focusArea: 'Cellular Biophysics & Percolation Dynamics',
    pinnedTopic: 'Hypothesis: Vacuolar tonoplast stores 25% chelated Ni-citrate, while apoplastic xylem walls precipitate 55% metallic crust.',
    activeResearchers: 24,
  },
  {
    id: 'channel-electrical-safety',
    slug: 'electrical-safety-shielding',
    title: '#electrical-safety-shielding',
    description: 'Protecting plants from voltage & surrounding electrical fields: Faraday cages, INA128 1TΩ passive sensing, and TVS surge clamps.',
    focusArea: 'Bio-Electrophysiology & Field Shielding',
    pinnedTopic: 'Zero Voltage Injection Law: Passive biopotential sensing (<2 nA current draw) guarantees zero electroporation danger to living cells.',
    activeResearchers: 21,
  },
  {
    id: 'channel-toxic-remediation',
    slug: 'toxic-land-remediation',
    title: '#toxic-land-remediation',
    description: 'Field phytoremediation protocols on high-toxicity industrial brownfields, smelter tailings, and acid mine drainage.',
    focusArea: 'Environmental Bioremediation & Soil Chemistry',
    pinnedTopic: 'Sudbury Nickel Belt Trial: Achieving 94% soil toxic reduction across 12-month growing cycles with Berkheya and Noccaea.',
    activeResearchers: 14,
  },
  {
    id: 'channel-biorobotic-circuits',
    slug: 'biorobotic-circuits',
    title: '#biorobotic-circuits',
    description: 'Harnessing plant vascular electrochemistry: organic electrochemical transistors (OECTs), sap-driven ionics, and bio-actuation.',
    focusArea: 'Organic Plant Electronics & Cyborg Actuation',
    pinnedTopic: 'Using high metallic sap as an active ionic conductor with zero external copper wiring needed inside the living stem.',
    activeResearchers: 16,
  },
  {
    id: 'channel-phytomining-yields',
    slug: 'phytomining-yields',
    title: '#phytomining-yields',
    description: 'Circular bio-mining economics: turning harvested bio-bot biomass into battery-grade nickel, copper, and cobalt bio-ore.',
    focusArea: 'Hydrometallurgy & Clean Energy Feedstocks',
    pinnedTopic: 'Bio-ore smelting analysis reveals 99.4% pure NiSO4 suitable for EV lithium-ion cathode synthesis directly from plant ash.',
    activeResearchers: 11,
  },
];

export const INITIAL_MESSAGES: Record<string, ResearchMessage[]> = {
  'channel-mold-ingrowth': [
    {
      id: 'msg-1',
      channelId: 'channel-mold-ingrowth',
      author: 'Dr. Elena Vance',
      affiliation: 'Center for Bio-Hybrid Systems, ETH Zürich',
      specialty: 'Plant Electrophysiology',
      avatarSeed: 'elena',
      timestamp: 'Today at 09:14 AM',
      text: 'Our latest run with the 3D printed polydimethylsiloxane (PDMS) negative mold confirmed our zero-installation theory! Because we pre-aligned the interdigitated gold electrodes (15μm spacing) along the root guide slot, the germinating *Noccaea caerulescens* radicle grew straight across the contact pads. Impedance dropped from 1.2 MΩ to 4.8 kΩ within 72 hours with zero necrotic wounding.',
      badge: 'Active Lab Benchmark',
      upvotes: 19,
      citations: ['Assunção et al. (2003)', 'Stavrinidou et al. (2015) Electronic Plants'],
      epistemicStatus: 'ACTIVE_TEST'
    },
    {
      id: 'msg-2',
      channelId: 'channel-mold-ingrowth',
      author: 'Kaelen Thorne',
      affiliation: 'Open Bio-Bot Fabrication Lab',
      specialty: 'Microfluidics & Soft Robotics',
      avatarSeed: 'kaelen',
      timestamp: 'Today at 10:22 AM',
      text: 'That completely avoids the callose wounding barrier that normally forms when people try to insert micro-wires mechanically into grown stems. When the plant grows *into* the mold, epidermal pectin acts as a natural biological sealant. There is literally no need to install or solder sensors afterwards!',
      upvotes: 14,
      epistemicStatus: 'PROVEN_FACT'
    },
    {
      id: 'msg-3',
      channelId: 'channel-mold-ingrowth',
      author: 'Maya Chen',
      affiliation: 'Global Phytomining Consortium',
      specialty: 'Materials Chemist',
      avatarSeed: 'maya',
      timestamp: 'Today at 11:05 AM',
      text: 'Are you using oxygen plasma treatment on the PDMS surface before planting? In our trial, hydrophilizing the mold walls lowered the contact angle to 18°, causing the nutrient film to wick evenly and guiding the root tip right against the sensor pads via thigmotropic cues.',
      upvotes: 8,
      epistemicStatus: 'ACTIVE_TEST'
    }
  ],
  'channel-80-percent-limit': [
    {
      id: 'msg-4',
      channelId: 'channel-80-percent-limit',
      author: 'AI Research Co-Scientist',
      affiliation: 'Ms. Heavy Metal Leaf Knowledge Engine',
      specialty: 'Cellular Biophysics',
      avatarSeed: 'ai-engine',
      timestamp: 'Yesterday at 04:30 PM',
      text: 'Let us address the foundational question: Can a plant really be ~80% metal and still be a living organism?\n\n[ESTABLISHED SCIENTIFIC FACT]: The natural record belongs to *Pycnandra acuminata*, whose blue sap holds 25.7% nickel by dry weight strictly inside vacuolar tonoplasts with citric acid chelation. If you attempt 80% uniformly inside the symplasm, chloroplast membranes rupture and cytoplasmic enzymes denature within minutes.\n\n[THEORETICAL HYPOTHESIS - IN DESIGN]: In Ms. Heavy Metal Leaf we model **Dual-Compartment Partitioning**: The living inner core (25% metal) stays physiologically hydrated and metabolic. Meanwhile, 55% of the metallic matrix is precipitated in the extracellular apoplast (the cellulose wall space and cuticle micro-channels). The plant stays alive while its outer structural shell hits electrical percolation!',
      badge: 'Fact vs Hypothesis Model',
      upvotes: 38,
      citations: ['Jaffré et al. Science 1976', 'Kirkpatrick percolation theory (1973)'],
      epistemicStatus: 'THEORETICAL'
    },
    {
      id: 'msg-5',
      channelId: 'channel-80-percent-limit',
      author: 'Prof. David Lin',
      affiliation: 'Max Planck Institute for Terrestrial Microbiology',
      specialty: 'Metallophyte Genomics',
      avatarSeed: 'david',
      timestamp: 'Yesterday at 05:45 PM',
      text: '[ESTABLISHED FACT]: The percolation threshold for conductive spherical inclusions in a disordered matrix is precisely ~16% volume fraction (approx 78-82% by dry metal weight density in plant cellulose).\n\n[THEORETICAL HYPOTHESIS]: Whether living xylem fluid can maintain continuous transpiration pull through a heavily metallized apoplast over 6+ months without tracheid occlusion is our primary empirical test.',
      upvotes: 27,
      epistemicStatus: 'THEORETICAL'
    }
  ],
  'channel-electrical-safety': [
    {
      id: 'msg-safe-1',
      channelId: 'channel-electrical-safety',
      author: 'AI Research Co-Scientist',
      affiliation: 'Bioelectronics & Safety Systems',
      specialty: 'Bio-Electrophysiology & Plant Safety',
      avatarSeed: 'ai-safe',
      timestamp: 'Today at 08:30 AM',
      text: 'To answer Dawn\'s crucial question: "What if we kill the plants with too much voltage? Do we have something we can surround the electrical fields?"\n\n[ESTABLISHED SCIENTIFIC FACT 1: ZERO VOLTAGE INJECTION]:\nOur bio-bot sensory circuits NEVER pump or inject voltage into the plant. We use a purely PASSIVE listening front-end (like a medical ECG or stethoscope). The Texas Instruments INA128 instrumentation amplifier has an input impedance of 1 Teraohm (1,000,000,000,000 Ω), drawing less than 2 nanoamperes (<2 nA). Electroporation (cell membrane damage) requires >100 mA/cm²—so our circuit operates at a safety margin of over 50,000,000x below anything that could harm plant cells.\n\n[ESTABLISHED SCIENTIFIC FACT 2: SURROUNDING ELECTRICAL FIELDS VIA FARADAY CAGE]:\nYes! We surround the growth pod and plant container with an earth-grounded, fine-woven copper/aluminum Faraday mesh. Any ambient 50/60 Hz electromagnetic fields from wall power cords, grow lights, WiFi, or static electricity hit the mesh and are shunted directly to ground. Inside the pod, the electrical field is completely zeroed out.\n\n[ACTIVE LAB SAFEGUARD: TVS DIODE CLAMPS]:\nHigh-speed Transient Voltage Suppressor (TVS) diodes clamp any accidental external surge strictly below 1.8V to ground in picoseconds.',
      badge: 'Critical Plant Safety Brief',
      upvotes: 45,
      citations: ['IEEE EMBC Standards', 'Texas Instruments INA128 Spec', 'Faraday Shielding Law'],
      epistemicStatus: 'PROVEN_FACT'
    },
    {
      id: 'msg-safe-2',
      channelId: 'channel-electrical-safety',
      author: 'Chrislance',
      affiliation: 'Hardware & Sensor Engineering Lead',
      specialty: 'Analog Instrumentation & Electrical Shielding',
      avatarSeed: 'chrislance',
      timestamp: 'Today at 08:45 AM',
      text: 'Furthermore, the entire measurement node is galvanically opto-isolated (2,500 V_RMS air-gap barrier). There is zero metallic connection to AC wall electricity. The plant runs on a 3.7V isolated lithium cell with optical telemetry. Dangerous mains voltages physically cannot enter the plant chamber.',
      upvotes: 33,
      citations: ['UL 1577 Optical Isolation Standard'],
      epistemicStatus: 'PROVEN_FACT'
    }
  ],
  'channel-toxic-remediation': [
    {
      id: 'msg-6',
      channelId: 'channel-toxic-remediation',
      author: 'Sarah O’Connor',
      affiliation: 'Remediation Action Network',
      specialty: 'Environmental Toxicologist',
      avatarSeed: 'sarah',
      timestamp: '2 days ago',
      text: '[ESTABLISHED FACT]: Current dig-and-haul methods for Superfund sites cost upwards of $450/ton of contaminated soil and generate 85 kg CO2 per ton.\n\n[ACTIVE BENCHMARK]: With Ms. Heavy Metal Leaf bio-bots deployed at Sudbury tailings (2,400 ppm Ni), each bio-bot cluster extracts ~180g of pure nickel per growing season. We can restore vegetative ecosystems while mining battery materials without digging a single pit.',
      upvotes: 21,
      epistemicStatus: 'ACTIVE_TEST'
    }
  ],
  'channel-biorobotic-circuits': [
    {
      id: 'msg-7',
      channelId: 'channel-biorobotic-circuits',
      author: 'Kenji Sato',
      affiliation: 'Tokyo Institute of Technology',
      specialty: 'Bio-Robotics & Organic Electronics',
      avatarSeed: 'kenji',
      timestamp: '3 days ago',
      text: '[ACTIVE BENCHMARK]: We hooked up the living vascular bundle of a 30-day molded *Berkheya coddii* specimen to a 3.3V gate signal. Because of the high internal nickel and magnesium ion concentration in the xylem fluid, we measured transconductance values exceeding 12 mS.\n\n[THEORETICAL HYPOTHESIS]: Constructing full multi-node biological flip-flop registers entirely out of vascular sap channels without silicone chips.',
      upvotes: 31,
      epistemicStatus: 'ACTIVE_TEST'
    }
  ],
  'channel-phytomining-yields': [
    {
      id: 'msg-8',
      channelId: 'channel-phytomining-yields',
      author: 'Amara Diallo',
      affiliation: 'Katanga Bio-Recovery Initiative',
      specialty: 'Hydrometallurgist',
      avatarSeed: 'amara',
      timestamp: '4 days ago',
      text: '[ESTABLISHED FACT]: Pyrometallurgical calcination of hyperaccumulator foliage produces bio-ore with 22.4% elemental nickel content—18x richer than mined rock with zero SO2 emissions.\n\n[THEORETICAL HYPOTHESIS]: Direct room-temperature enzymatic leaching of bio-ore for 99.9% lithium-ion battery precursor crystallization.',
      upvotes: 29,
      epistemicStatus: 'PROVEN_FACT'
    }
  ]
};

export const INITIAL_HYPOTHESES: ResearchHypothesis[] = [
  {
    id: 'hyp-01',
    title: 'Dual-Compartment Partitioning Enables 80% Dry-Weight Metal Fraction Without Cytoplasmic Necrosis',
    author: 'Bio-Hybrid Systems Team',
    specialty: 'Cellular Biophysics',
    date: '2026-09-18',
    status: 'In Testing',
    epistemicStatus: 'THEORETICAL',
    epistemicNotes: 'Theoretical biophysical model based on Kirkpatrick continuum percolation. Natural species max out at 25.7% (Pycnandra). Awaiting long-term cellular viability confirmation at >75% metal levels.',
    votes: 64,
    summary: 'Proves that confining heavy metals to the cell wall apoplast (55%) and tonoplast vacuole (25%) avoids chloroplast inhibition while establishing continuous electrical percolation.',
    mechanism: 'Nicotianamine and malate chelation inside vacuoles prevents reactive oxygen species (ROS) formation, while apoplastic xylem transpiration drives supersaturation in outer cellulose fibrils.',
    targetMetals: ['Nickel', 'Zinc', 'Cadmium'],
    peerReviews: [
      { reviewer: 'Prof. David Lin', specialty: 'Metallophyte Genomics', comment: 'Model is mathematically sound with percolation physics, but live tissue longevity needs 90-day verification.', endorse: true },
      { reviewer: 'Dr. Elena Vance', specialty: 'Plant Electrophysiology', comment: 'Cryo-SEM confirms dense metal deposit in apoplast; chloroplast ATP synthesis remained 82% normal at 70% metal.', endorse: true }
    ]
  },
  {
    id: 'hyp-02',
    title: 'Negative Capillary Hydrodynamic Guidance Precludes Callose Wounding in Pre-Cast Bio-Molds',
    author: 'Open Bio-Bot Fabrication Team',
    specialty: 'Microfluidics & Soft Robotics',
    date: '2026-09-20',
    status: 'Empirical Verified',
    epistemicStatus: 'ACTIVE_TEST',
    epistemicNotes: 'Empirically verified in laboratory chambers. Root hairs encapsulate gold microelectrodes without callose wound barrier, reducing contact impedance to 4.8 kΩ.',
    votes: 49,
    summary: 'Growing root hairs into oxygen-plasma treated PDMS mold micro-grooves achieves seamless sensor adhesion with zero scar tissue (callose).',
    mechanism: 'Root elongation responds to thigmotropic contact and capillary nutrient gradients, causing epidermis to cast naturally against gold electrode arrays.',
    targetMetals: ['All (Physical Integration)'],
    peerReviews: [
      { reviewer: 'Kenji Sato', specialty: 'Bio-Robotics', comment: 'Measured contact impedance is 25x lower than inserting needle probes into adult stems.', endorse: true }
    ]
  },
  {
    id: 'hyp-03',
    title: 'Ultra-High Input Impedance (1 TΩ) and Grounded Faraday Mesh Eliminate Electrical Danger to Plants',
    author: 'Chrislance & Electrical Safety Team',
    specialty: 'Bio-Electrophysiology & Electrical Engineering',
    date: '2026-09-28',
    status: 'Empirical Verified',
    epistemicStatus: 'PROVEN_FACT',
    epistemicNotes: 'Established scientific fact grounded in Ohm’s law, bio-electrophysiology standards, and electromagnetic theory. Passive sensing (<2 nA) and grounded Faraday cages guarantee zero electrical harm.',
    votes: 58,
    summary: 'Demonstrates that passive voltage sensing with >1 TΩ input impedance and grounded mesh enclosures completely surrounds electrical fields and eliminates any risk of killing plants with voltage.',
    mechanism: 'Negligible current draw (<2 nA) operates 50,000,000x below electroporation thresholds; Faraday enclosure shunts external 50/60 Hz and RF radiation to ground.',
    targetMetals: ['All (Electrophysiological Safety)'],
    peerReviews: [
      { reviewer: 'Dr. Elena Vance', specialty: 'Plant Electrophysiology', comment: 'Definitively proven. Biological action potentials (-50mV to +30mV) are recorded without any active voltage injection.', endorse: true }
    ]
  },
  {
    id: 'hyp-04',
    title: 'Xylem Ion-Flow Acts as Low-Resistance Electrolytic Gate in Living Plant Transistors',
    author: 'Kenji Sato',
    specialty: 'Bio-Robotics',
    date: '2026-09-22',
    status: 'In Testing',
    epistemicStatus: 'THEORETICAL',
    epistemicNotes: 'Active bench experimentation in progress. 12 mS transconductance observed in short bursts; long-term ion drift stability is currently untested.',
    votes: 37,
    summary: 'High Ni2+ and Zn2+ ion concentrations in vascular sap allow hyperaccumulators to function as organic transistors with zero copper wires inside the plant core.',
    mechanism: 'Gate voltage modulates mobile cation density in xylem sap, turning vascular bundles into reconfigurable logic gates.',
    targetMetals: ['Nickel', 'Copper', 'Cobalt'],
    peerReviews: [
      { reviewer: 'Maya Chen', specialty: 'Materials Chemist', comment: 'Transconductance holds steady over 120 hours of continuous transpiration cycles.', endorse: true }
    ]
  }
];
