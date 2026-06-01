import { ServiceItem, ApplicationItem } from './types';

export const HERO_CONTENT = {
  headline: "Infrared Inspections for Safer, Smarter Facility Operations",
  subheadline: "NFPA-compliant thermal imaging for electrical systems, mechanical equipment, roofing, moisture detection, and building envelopes—serving clients in Dallas–Fort Worth, across Texas, and nationwide.",
  ctas: {
    primary: "Request an Infrared Facilities Survey",
    secondary: "Contact Us Today"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "electrical-infrared",
    title: "Electrical Infrared Inspections",
    shortDesc: "Thorough visual and thermographic diagnostics of switchgear, transformers, breaker panels, and motor controls.",
    longDesc: "Perform high-resolution thermal imaging on live electrical equipment operating under normal load. We detect loose connections, imbalanced circuits, corroded components, and overloaded breakers before they result in costly emergency outages or tragic fires, complying 100% with the strict requirements of NFPA 70B.",
    icon: "Zap",
    category: "electrical",
    complianceLink: "NFPA 70B Chapter 11"
  },
  {
    id: "mechanical-systems",
    title: "Mechanical Systems Thermography",
    shortDesc: "Thermal audits and friction-fault identification across motors, bearings, gearboxes, and belt drives.",
    longDesc: "Evaluate active bearings, couplings, compressor components, and conveyor motor systems. Pinpointing abnormal friction and temperature elevations enables your maintenance crew to schedule targeted interventions, preventing catastrophic mechanical freeze-ups and production downtime.",
    icon: "Settings",
    category: "mechanical"
  },
  {
    id: "roof-moisture",
    title: "Roof & Moisture Intrusion Surveys",
    shortDesc: "Non-destructive thermographic scans of flat commercial roofing systems to locate trapped water.",
    longDesc: "Identify sub-surface insulation moisture traps beneath flat roofing membranes using natural daytime solar-heating load cycles. Pinpointing exactly where moisture is trapped allows for smart, localized repairs instead of extremely expensive, premature full roof replacements.",
    icon: "CloudRain",
    category: "structural"
  },
  {
    id: "drone-aerial",
    title: "Drone / Aerial Infrared Imaging",
    shortDesc: "Part 107 certified drone thermal scans for extensive roofs, solar farms, and high-voltage transmission grids.",
    longDesc: "Deploy high-resolution radiometric dual-vision drone thermal sensors to cover hundreds of thousands of square feet of facility roofs, solar photovoltaic arrays, or overhead distribution cables safely and cost-effectively, delivering rapid visual and thermal alignment.",
    icon: "Orbit",
    category: "specialized"
  },
  {
    id: "arc-flash",
    title: "Arc Flash Studies",
    shortDesc: "Engineering hazard analysis, fault calculations, and boundary labeling to guarantee OSHA & NFPA 70E safety.",
    longDesc: "Perform full engineering studies of your power distribution grid to calculate potential arc energy levels. We provide clear hazard risk category labels, determine appropriate Personal Protective Equipment (PPE) boundaries, and keep your personnel safe in alignment with OSHA regulations and NFPA 70E standard protocols.",
    icon: "ShieldCheck",
    category: "electrical",
    complianceLink: "NFPA 70E & OSHA 1910"
  },
  {
    id: "building-envelope",
    title: "Building Envelope Analysis",
    shortDesc: "Exterior envelope testing targeting severe air infiltration, missing insulation, and thermal bridges.",
    longDesc: "Scan your complete structural envelope during high indoor-to-outdoor temperature differences. This identifies missing or failed insulation layers, heat-loss air bypasses, and structural concrete/steel thermal bridges to dramatically reduce waste and lower company HVAC bills.",
    icon: "Building",
    category: "structural"
  }
];

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: "data-centers",
    name: "Data Centers & Critical IT",
    description: "Ensure continuous, 100% vital system uptime by scanning active heavy UPS systems, power distribution units (PDUs), battery racks, and primary cooling airflow loops with zero risk of disturbance.",
    benefits: [
      "Prevent expensive client website or data outages",
      "Identify hot/cold aisle cooling airflow short-circuits",
      "Examine critical transfer switch contact integrity passive"
    ],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    industryType: "Critical Infrastructure"
  },
  {
    id: "industrial-plants",
    name: "Industrial Facilities & Refineries",
    description: "Avoid expensive halts in heavy manufacturing units and chemical production zones by continuously monitoring substation busway joints, large motor bearings, steam traps, and process vessels.",
    benefits: [
      "Eliminate sudden unscheduled assembly line stop events",
      "Observe thermal profiles of rotating heavy mechanical parts",
      "Pass rigorous annual insurance risk inspections with ease"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    industryType: "Industrial"
  },
  {
    id: "hospitals",
    name: "Hospitals & Healthcare Systems",
    description: "Hospitals prioritize uninterrupted life-safety utilities. Passive infrared scanning maps emergency generator circuits, double-throw transfer panels, and main clinical breakers with zero operational downtime.",
    benefits: [
      "Completely non-invasive testing with zero patient risk",
      "Satisfy rigid Joint Commission safety inspection audits",
      "Ensure back-up power feeds are calibrated and balanced"
    ],
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
    industryType: "Healthcare"
  },
  {
    id: "government-buildings",
    name: "Government & Municipalities",
    description: "Manage city, state, or federal facilities on budget. Annual thermography identifies early water infiltration on flat roofs, optimizes exterior insulation efficiency, and certifies electrical panel safety.",
    benefits: [
      "Reduce city office carbon emissions and utility costs",
      "Validate public facility compliance with OSHA standards",
      "Prolong the service lifecycle of public HVAC infrastructure"
    ],
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800",
    industryType: "Government"
  },
  {
    id: "property-management",
    name: "Property & Facility Management",
    description: "Deliver optimal safety and tenant satisfaction. Annual infrared mapping checks multi-family electrical risers, commercial central boiler loops, elevate control rooms, and flat roofs for hidden leaks.",
    benefits: [
      "Guarantee complete tenant safety and prevent building fire risks",
      "Secure discounted multi-property commercial insurance packages",
      "Validate building structural envelope insulation continuity"
    ],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    industryType: "Commercial Real Estate"
  }
];

export const ABOUT_TEXTS = {
  companyOverview: "The Castle Rock Infrared Team provides certified thermographic diagnostic solutions for mission-critical properties, industrial sites, and commercial facilities in Dallas–Fort Worth, across Texas, and nationwide.",
  mission: "To help our clients prevent catastrophic systems failures, guarantee NFPA 70B standard compliance, reduce operational hazards, and guard building health using state-of-the-art radiometric infrared technology.",
  experience: "Our field team is composed of seasoned ITC certified thermographers using advanced, calibrated thermal cameras. We deliver clear, prioritized engineering reports that stand up to the most demanding legal, OSHA, and insurance underwriting reviews.",
  complianceItems: [
    "NFPA 70B Standard for Electrical Equipment Maintenance",
    "NFPA 70E Electrical Safety in the Workplace Standards",
    "OSHA General Hazard Control & Abatement Inspections",
    "Underwriter and Risk Carrier Certification Packages"
  ],
  nationwide: "PROVEN TEXTBOOK OUTCOMES ACROSS THE NATIONWIDE GRID."
};

export const WHY_CHOOSE_US = [
  {
    title: "Level II & III Certified",
    description: "Our surveys are exclusively led by certified thermographers with decades of physical field expertise, assuring rigorous engineering standards.",
    icon: "Award"
  },
  {
    title: "NFPA 70B & 70E Compliant",
    description: "All electric inspections, fault labels, and testing sequences map 100% to modern NFPA 75, 70B, and 70E guidelines.",
    icon: "BookOpen"
  },
  {
    title: "Advanced Thermal Equipment",
    description: "Using high-resolution FLIR cameras with precise, calibrated focal planes to resolve sub-degree temperature anomalies at safe distances.",
    icon: "MapPin"
  },
  {
    title: "Actionable Prioritized Reports",
    description: "Get highly organized digital PDF logs with side-by-side visual and radiometric analysis, prioritized fault tiers, and precise thermal metrics.",
    icon: "Clock"
  }
];

export const CONTACT_INFO = {
  phones: [
    "925-518-1124",
    "800-995-8242"
  ],
  email: "tirso@castlerockinfrared.com",
  office: "Castle Rock Infrared Group, San Francisco Bay Area, California, Hawaii, Washington, Oregon, Arizona, Nevada - Nationwide Services Available"
};

export const SAMPLE_PROPOSAL_RESPONSES = [
  {
    complianceLevel: "NFPA 70B Compliant Electrical Survey",
    baseEstimate: "$1,650 - $2,550 (Saves up to 40% on preventative downtime)",
    estimatedHours: 6,
    itemsBreakdown: "Complete localized thermal scan of live switchgear, MCC, and target breaker links. Includes formal reporting, radiometric anomaly mapping, and level II thermography documentation."
  },
  {
    complianceLevel: "Multi-System Complex Facility Scan Package",
    baseEstimate: "$3,200 - $4,850 (Satisfies commercial risk carriers)",
    estimatedHours: 12,
    itemsBreakdown: "Thorough check spanning primary utility transformers, switchboards, UPS arrays, target rooftop motors, and emergency backup elements."
  },
  {
    complianceLevel: "Full Plant Enterprise Audit with Drone Scan Support",
    baseEstimate: "$5,500+ Custom Contract Proposal Profile",
    estimatedHours: 24,
    itemsBreakdown: "Total plant wide coverage. Incorporates physical electrical panels, rotating mechanical couplings, steam traps, and drone flat-roof moisture/solar imaging."
  }
];
