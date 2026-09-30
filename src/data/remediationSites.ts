import { RemediationSiteCase } from '../types';

export const REMEDIATION_SITES: RemediationSiteCase[] = [
  {
    id: 'sudbury-tailings',
    name: 'Sudbury Smelter Tailings Basin',
    region: 'Ontario, Canada',
    primaryMetal: 'Nickel',
    initialPPM: 2450,
    targetRegulatoryPPM: 120,
    areaHectares: 250,
    soilDepthMeters: 0.45,
    recommendedSpeciesId: 'berkheya-coddii',
    historicalContaminantSource: 'Over a century of atmospheric nickel-copper smelting deposits and tailings impoundments.',
    metalMarketValuePerKg: 18.50, // Nickel ~$18.50/kg
  },
  {
    id: 'katanga-copper-belt',
    name: 'Katanga Copper-Cobalt Tailings',
    region: 'Kolwezi, DR Congo',
    primaryMetal: 'Cobalt',
    initialPPM: 1800,
    targetRegulatoryPPM: 80,
    areaHectares: 180,
    soilDepthMeters: 0.50,
    recommendedSpeciesId: 'haumaniastrum-robertii',
    historicalContaminantSource: 'Artisanal and industrial cobalt tailings heaps with heavy artisanal runoff into water tables.',
    metalMarketValuePerKg: 32.00, // Cobalt ~$32.00/kg
  },
  {
    id: 'upper-silesia-calamine',
    name: 'Upper Silesian Calamine Slag Heap',
    region: 'Bytom, Poland',
    primaryMetal: 'Zinc',
    initialPPM: 14500,
    targetRegulatoryPPM: 300,
    areaHectares: 90,
    soilDepthMeters: 0.60,
    recommendedSpeciesId: 'noccaea-caerulescens',
    historicalContaminantSource: 'Historic lead-zinc smelting waste and calamine mining spoil mounds active since the 19th century.',
    metalMarketValuePerKg: 2.85, // Zinc ~$2.85/kg
  },
  {
    id: 'silver-bow-creek',
    name: 'Silver Bow Creek Superfund Basin',
    region: 'Butte, Montana, USA',
    primaryMetal: 'Copper',
    initialPPM: 3200,
    targetRegulatoryPPM: 150,
    areaHectares: 320,
    soilDepthMeters: 0.40,
    recommendedSpeciesId: 'haumaniastrum-robertii',
    historicalContaminantSource: 'Massive open-pit copper mining (Berkeley Pit) and milling runoff covering the floodplain.',
    metalMarketValuePerKg: 9.80, // Copper ~$9.80/kg
  }
];

export const COLLABORATOR_SPECIALTIES = [
  {
    id: 'plant-physiologist',
    title: 'Plant Physiologist & Botanist',
    iconName: 'Leaf',
    keyChallenge: 'Maximizing tonoplast nickel influx while inhibiting symplastic ROS cytotoxicity.',
    whyNeeded: 'Select and optimize hyperaccumulator genetics, auxin root-growth pacing, and transpiration rates.',
    suggestedFocus: 'Root hair thigmotropism & cellular vacuole chelation dynamics'
  },
  {
    id: 'biorobotics-engineer',
    title: 'Bio-Robotics & Cyborg Systems Engineer',
    iconName: 'Cpu',
    keyChallenge: 'Designing zero-installation mold geometry that routes seedling roots across electrode channels.',
    whyNeeded: 'Convert biological vascular ion transport into actionable electrical signals and bio-actuation.',
    suggestedFocus: 'Interdigitated gold electrode arrays & OECT plant logic gates'
  },
  {
    id: 'environmental-scientist',
    title: 'Environmental Scientist & Toxicologist',
    iconName: 'ShieldAlert',
    keyChallenge: 'Establishing field soil safety thresholds and mycorrhizal root inoculants on mine tailings.',
    whyNeeded: 'Oversee field trials, regulatory EPA/EU soil compliance, and ecological containment.',
    suggestedFocus: 'Mine tailing remediation protocols & heavy metal bio-availability'
  },
  {
    id: 'materials-chemist',
    title: 'Materials Chemist & Nanotechnologist',
    iconName: 'Atom',
    keyChallenge: 'Fabricating flexible biocompatible PDMS molds and oxygen plasma surface functionalization.',
    whyNeeded: 'Engineer conductive graphene wicks and non-toxic conductive interfaces that bond with plant sap.',
    suggestedFocus: '80% apoplastic percolation threshold & biocompatible mold matrices'
  },
  {
    id: 'phytomining-specialist',
    title: 'Phytomining & Circular Metallurgist',
    iconName: 'Coins',
    keyChallenge: 'Designing low-temperature calcination and hydrometallurgical leaching for battery chemicals.',
    whyNeeded: 'Transform harvested bio-bot dry biomass into commercial battery-grade nickel and cobalt sulfates.',
    suggestedFocus: 'Clean bio-ore refining & circular economics for battery supply chains'
  },
  {
    id: 'open-hardware-maker',
    title: 'Open Hardware & IoT Developer',
    iconName: 'Wrench',
    keyChallenge: 'Building open-source automated growth chambers and open telemetry nodes.',
    whyNeeded: 'Develop replicable STL mold models and open-source lab hardware for global collaborators.',
    suggestedFocus: '3D printed casting molds & low-cost multichannel bio-impedance loggers'
  }
];
