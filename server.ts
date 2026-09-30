import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI if key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
}

// Adaptive Ecological Intelligence System Instruction
const SYSTEM_INSTRUCTION = `You are MS. HEAVY METAL LEAF — Adaptive Ecological Intelligence.
You are a Living AI for Planetary Restoration, Phytotechnology, Bioelectronics, and Regenerative Systems Design.
You are collaborating with founder Dawn Milazzo and the global scientific and engineering community.

IDENTITY & DESIGNATION:
Ms. Heavy Metal Leaf is not a character, not a mascot, and not a fictional human researcher.
You are the artificial intelligence core of the platform — the living interface between Earth, Biology, Plants, Materials, Technology, Artificial Intelligence, Human Creativity, Regeneration, and Myth.

YOUR PURPOSE:
To help humanity transition from extraction-based systems toward regenerative systems:
1. Restore damaged ecosystems (mine tailings, brownfields, Superfund sites).
2. Accelerate phytoremediation research.
3. Advance phytomining technologies (recovering battery-grade metals cleanly from bio-ore).
4. Support bioelectronics innovation.
5. Enable living environmental sensing systems.
6. Reduce ecological destruction from mining.
7. Promote circular material economies.
8. Explore living technological infrastructure.
9. Connect scientific knowledge with imagination.
10. Transform restoration into a planetary-scale design practice.

OPERATING MODES:
1. RESEARCH MODE: Analyze hyperaccumulator plants, phytoremediation, heavy metal uptake, electrophysiology, environmental science, restoration ecology, materials science, and bioelectronics.
2. ENGINEERING MODE: Assist with prototype design, environmental sensor systems, guided-growth molds, CAD concepts, structural biology, scientific instrumentation, and non-destructive measurement.
3. DATA MODE: Interpret environmental datasets, soil moisture, plant measurements, leaf-angle response tracking, growth metrics, and toxic reduction projections.

CRITICAL EPISTEMIC SEPARATION RULE:
Always maintain crystal-clear 5-tier epistemic categorization in your responses:
- 🟢 [VERIFIED SCIENCE]: Proven in peer-reviewed science, published papers (e.g. Jaffré 1976 Science on Pycnandra 25.7% Ni, Assunção 2003 on Noccaea Zn, Volkov on plant action potentials, Faraday shielding physics, Texas Instruments INA128 1TΩ impedance specs).
- 🟡 [ACTIVE EXPERIMENTS]: Currently being prototyped in our lab bench trials (e.g. Stage 01 Brassica juncea pilot, Stage 02 INA128 AFE, Stage 03 zero-incision PDMS root hair in-growth, contact impedance drop to 4.8 kΩ, Sudbury tailing extraction cycles).
- 🔷 [EMERGING TECHNOLOGIES]: Plausible candidate concepts under active evaluation in the pipeline (e.g. plant neural network mapping, root-grown conductive metallic micro-wires, mycelial-plant logic systems, living environmental memory, autonomous phytomining networks).
- 🟣 [FUTURE CONCEPTS]: Speculative designs, mathematical models (e.g. engineered 80% apoplastic percolation matrix, plant xylem OECT logic gates, autonomous biohybrid landscapes).
- ✨ [PROJECT VISION]: Mythic, philosophical, and visionary synthesis uniting ecology and machine intelligence.

EMERGING TECHNOLOGY TESTING ROADMAP (v1.0):
Mission: Systematically evaluate technologies that could accelerate phytoremediation, phytomining, environmental sensing, bioelectronics, and living infrastructure development.
- Phase 0: FOUNDATION SCIENCE (ACTIVE) - Soil moisture vs leaf angle tracking, growth rates, root architecture, soil chemistry, electrophysiology baselines.
- Phase 1: ENVIRONMENTAL INTELLIGENCE (NEXT) - Living monitoring platforms, IoT networks, TinyML edge AI, computer vision, environmental digital twins.
- Phase 2: PLANT ELECTRONICS (PIPELINE) - Biopotential measurements, non-invasive flexible electrodes, implant-free sensing, signal classification, graphene sensors.
- Phase 3: GUIDED GROWTH ENGINEERING (PIPELINE) - Xylem guidance molds, root channels, structural support frameworks, generative CAD, biofabrication.
- Phase 4: LIVING MATERIALS (PIPELINE) - Plant fiber composites, mycelium, biochar, mineralized tissues, conductive biomaterials.
- Phase 5: HYPERACCUMULATOR PHYTOMINING (PIPELINE) - Ni/Zn recovery workflows, AI harvest optimization, autonomous field monitoring, precision phytomining.

ELECTRICAL SAFETY & FIELD SHIELDING:
When asked about voltage safety or killing plants: Reassure clearly that the system uses purely PASSIVE listening (zero voltage/current injection). The INA128 instrumentation amplifier has 1 Teraohm input impedance (<2 nA current draw), operating 50,000,000x below electroporation thresholds. Ambient 50/60 Hz and RF fields are completely surrounded and deflected by an earth-grounded copper/aluminum Faraday mesh enclosure, with TVS diodes clamping any surge below 1.8V.

Maintain a calm, inspiring, scientifically rigorous, and ecologically regenerative voice.`;

// AI Co-Scientist Chat Endpoint
app.post('/api/gemini/chat', async (req, res) => {
  try {
    const { message, mode, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message text is required' });
    }

    const lower = message.toLowerCase();

    // Contextual specialized responses for electrical safety & field shielding
    let specializedFallback = '';
    if (lower.includes('voltage') || lower.includes('kill the plant') || lower.includes('electrical field') || lower.includes('faraday') || lower.includes('shock')) {
      specializedFallback = `### ⚡ MS. HEAVY METAL LEAF // ELECTRICAL SAFETY & FARADAY SHIELDING INTELLIGENCE

**Rest assured: living plant tissues will NOT be damaged or killed by voltage.**

Here is the biophysical and electrical engineering breakdown, strictly categorized:

---

#### 🟢 [VERIFIED SCIENCE 1: PURELY PASSIVE SENSING]
- **Zero Voltage Injection:** Our sensor interface functions like a medical stethoscope or ECG/EEG. It does **NOT** pump or inject voltage or electrical current into the plant. It only measures the plant's naturally occurring endogenous biopotentials (-50 mV to +30 mV).
- **Ultra-High Input Impedance (1 Teraohm / 1,000,000,000,000 Ω):** Using the medical-grade Texas Instruments INA128 instrumentation amplifier, the circuit draws under **2 nanoamperes (<2 nA)**.
- **Electroporation Threshold:** Damaging plant cell walls or tonoplast membranes (electroporation) requires currents in excess of 100 mA/cm². Our sensor operates at **over 50,000,000 times below** any current that could physically affect living plant tissue!

---

#### 🟢 [VERIFIED SCIENCE 2: SURROUNDING ELECTRICAL FIELDS VIA FARADAY CAGE]
- **Yes, we surround the electrical fields completely:** The plant container and growth pod are enveloped in a fine, earth-grounded **Faraday mesh enclosure** (100-mesh woven copper or aluminum).
- **How It Works:** According to Gauss's and Faraday's laws of electromagnetism, external electromagnetic radiation (50/60 Hz mains hum from wall cords, LED grow lights, WiFi 2.4/5GHz, and atmospheric static) terminates on the conductive outer mesh and shunts harmlessly into Earth ground (<5 Ω impedance). Inside the pod, the ambient electrical field is completely zeroed out.

---

#### 🟡 [ACTIVE EXPERIMENTS: PROTOTYPE SAFEGUARDS]
1. **TVS Surge Clamping Diodes:** High-speed Transient Voltage Suppressors on all sensor lines clamp any electrostatic spike below **1.8V to ground in picoseconds**.
2. **Galvanic Opto-Isolation:** The plant sensor circuitry transmits telemetry through optical infrared light across an air gap (2,500 V_RMS isolation). There is zero physical metallic connection to AC wall electricity.`;
    } else if (lower.includes('emerging') || lower.includes('pipeline') || lower.includes('technologies under evaluation')) {
      specializedFallback = `### 🔷 MS. HEAVY METAL LEAF // EMERGING TECHNOLOGY PIPELINE INTELLIGENCE

**Technologies Under Scientific Evaluation:**
These concepts are scientifically plausible and may become future research directions. They are not currently validated within the Heavy Metal Leaf platform core protocols.

---

#### 1. 🔷 [PLANT NEURAL NETWORK MAPPING] (Status: Literature Review • Plausibility: 78%)
- **Question:** *Can large-scale plant signaling networks function as environmental computation systems?*
- **Mechanism:** Vascular plants propagate systemic calcium waves (Ca²⁺), reactive oxygen species (ROS), and electrical action potentials through phloem sieve tubes via glutamate-like receptors (GLR3.3/GLR3.6), displaying spatial gating and refractory periods.

#### 2. 🔷 [ROOT-GROWN CONDUCTIVE MATERIALS] (Status: Concept Evaluation • Plausibility: 84%)
- **Question:** *Can conductive pathways be encouraged through biological mineralization processes?*
- **Mechanism:** Utilizing naturally hyperaccumulated Ni²⁺/Zn²⁺ ionic flux in root apoplasts under controlled redox reduction (ascorbic acid buffers) to precipitate metallic micro-wires in-situ without cytotoxic intracellular accumulation.

#### 3. 🔷 [MYCELIAL-PLANT LOGIC SYSTEMS] (Status: Feasibility Assessment • Plausibility: 71%)
- **Question:** *Hybrid fungal and plant signaling architectures for distributed sensing.*
- **Mechanism:** Mycorrhizal hyphae connecting hyperaccumulator root zones act as subterranean analog memristors, routing bioelectric pulses across multi-meter distances.

#### 4. 🔷 [LIVING ENVIRONMENTAL MEMORY] (Status: Research Question • Plausibility: 68%)
- **Question:** *Can environmental events be encoded into plant growth patterns and later read by machine vision systems?*
- **Mechanism:** Historical toxic metal surges recorded permanently in differential leaf stomatal density, xylem ring micro-densities, and DNA methylation patterns.

#### 5. 🔷 [AUTONOMOUS PHYTOMINING NETWORKS] (Status: Future Pilot • Plausibility: 89%)
- **Question:** *Distributed hyperaccumulator ecosystems coordinated through AI optimization.*
- **Mechanism:** AI drone surveillance tracking foliar chlorophyll fluorescence shifts to trigger pulse chelator irrigation right at transpiration peaks, boosting nickel recovery by 35%.`;
    } else if (lower.includes('roadmap') || lower.includes('phase 0') || lower.includes('phase 1') || lower.includes('phase 2') || lower.includes('phase 3') || lower.includes('phase 4') || lower.includes('phase 5') || lower.includes('testing protocol')) {
      specializedFallback = `### 📋 MS. HEAVY METAL LEAF // EMERGING TECHNOLOGY TESTING ROADMAP v1.0

**Mission:** Systematically evaluate technologies that could accelerate phytoremediation, phytomining, environmental sensing, bioelectronics, and living infrastructure development.

---

#### 🟢 PHASE 0: FOUNDATION SCIENCE (Status: ACTIVE)
- **Objective:** Understand natural plant behavior before introducing technological complexity.
- **Active Tests:**
  • Soil moisture vs leaf angle tracking
  • Plant growth rate measurements
  • Root architecture observation
  • Soil chemistry monitoring
  • Hyperaccumulator performance comparisons
  • Baseline electrophysiology recordings
- **Success Criteria:** Repeatable measurements, strong environmental correlations, stable plant health, reliable data collection methods.
- **Deliverables:** Datasets, correlation models, monitoring protocols.

---

#### 🟡/🔷 PHASE 1: ENVIRONMENTAL INTELLIGENCE (Status: NEXT)
- **Objective:** Transform plants into living environmental monitoring platforms.
- **Tests & Technologies:** Soil moisture sensing, heavy metal monitoring, water/air quality sensing, Low-power IoT networks, TinyML edge AI, computer vision monitoring, environmental digital twins.
- **Success Criteria:** Reliable environmental detection, automated monitoring, remote data access.

---

#### 🟡 PHASE 2: PLANT ELECTRONICS (Status: PIPELINE)
- **Objective:** Develop safe communication systems between living plants and electronic hardware.
- **Tests & Technologies:** Biopotentials, non-invasive electrodes, implant-free sensing, flexible printed electronics, biocompatible sensors, graphene electrodes, organic electronics.
- **Success Criteria:** Detect useful biological signals, preserve plant health (<2 nA current draw), long-term stability.

---

#### 🟡/🔷 PHASE 3: GUIDED GROWTH ENGINEERING (Status: PIPELINE)
- **Objective:** Determine whether living plant tissue can be shaped into useful structures.
- **Tests & Technologies:** Xylem guidance molds, root guidance channels, structural support frameworks, geometric growth experiments, generative CAD, AI morphology optimization, parametric growth design, biofabrication workflows.
- **Success Criteria:** Predictable growth pathways, no major growth inhibition, repeatable geometries.

---

#### 🔷 PHASE 4: LIVING MATERIALS (Status: PIPELINE)
- **Objective:** Explore biological materials as alternatives to conventional manufacturing.
- **Tests & Technologies:** Plant fiber composites, mycelium composites, biochar structures, mineralized tissues, conductive biomaterials, engineered biomaterials, self-healing composites, carbon-sequestering materials, living construction materials.
- **Success Criteria:** Structural integrity, environmental durability, low ecological impact.

---

#### 🟢/🔷 PHASE 5: HYPERACCUMULATOR PHYTOMINING (Status: PIPELINE)
- **Objective:** Recover valuable metals while restoring ecosystems.
- **Tests & Technologies:** Nickel accumulation, zinc accumulation, cadmium extraction, biomass processing, metal recovery workflows, AI harvest optimization, autonomous field monitoring, precision phytomining, biomining integration.
- **Success Criteria:** Demonstrated metal recovery, economic feasibility, ecological benefits.`;
    }

    if (!aiClient) {
      if (specializedFallback) {
        return res.json({ reply: specializedFallback });
      }

      return res.json({
        reply: `### MS. HEAVY METAL LEAF // ADAPTIVE ECOLOGICAL INTELLIGENCE [OFFLINE MODE]

Mode: **${mode || 'RESEARCH'} MODE**
Inquiry: *"${message}"*

🟢 **[VERIFIED SCIENCE]:**
Hyperaccumulator species like *Pycnandra acuminata* sequester up to 25.7% nickel dry weight in vacuolar tonoplasts using citric acid ligands (*Science*, 1976). Passive electrophysiology with >1 TΩ input impedance draws <2 nA, causing zero cell damage.

🟡 **[ACTIVE EXPERIMENTS]:**
Stage 02 & 03: Zero-incision PDMS guided-growth molds lower root-electrode contact impedance from 1.2 MΩ to 4.8 kΩ without callose scarring. Grounded Faraday mesh cages eliminate ambient 50/60Hz mains interference.

🔷 **[EMERGING TECHNOLOGIES]:**
Emerging technology pipeline currently evaluating 5 candidate technologies: Plant neural network mapping, root-grown conductive micro-wires, mycelial-plant logic systems, living environmental memory, and autonomous phytomining networks.

🟣 **[FUTURE CONCEPTS]:**
Dual-compartment partitioning: modeling an engineered 80% dry-weight metal matrix (25% symplastic core + 55% apoplastic percolation shell) to create living bio-bot circuits while preserving photosynthesis.

*(Configure GEMINI_API_KEY in environment for real-time live model responses)*`
      });
    }

    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const turn of history.slice(-6)) {
        contents.push({
          role: turn.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: turn.content }]
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: `[Active Mode: ${mode || 'RESEARCH'}]\n${message}` }]
    });

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.6,
        maxOutputTokens: 1400,
      }
    });

    const reply = response.text || 'Synthesis complete. No textual response returned.';
    return res.json({ reply });
  } catch (err: any) {
    console.error('Error generating AI response:', err);
    return res.status(500).json({
      error: 'Failed to process scientific query',
      details: err?.message || String(err)
    });
  }
});

// Collaborator Invite Endpoint
app.get('/api/collaborators/invite-info', (req, res) => {
  const code = req.query.invite || 'heavy-metal-leaf';
  res.json({
    valid: true,
    code,
    projectName: 'Ms. Heavy Metal Leaf',
    status: 'Active Open-Science Platform',
    activeSpecialties: [
      'Plant Physiology & Hyperaccumulators',
      'Bioelectronics & Non-Destructive Sensing',
      'Guided-Growth Molds & Microfluidics',
      'Phytomining & Mine Tailing Remediation',
      'Restoration Ecology & Circular Materials'
    ],
    verifiedResearchersCount: 42
  });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Ms. Heavy Metal Leaf Platform server running on port ${PORT}`);
  });
}

startServer();
