export type WorkExperience = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tags?: string[];
};

export const experience: WorkExperience[] = [
  {
    role: 'Propulsion and Thermofluids Intern',
    company: 'Gulfstream Aerospace Corporation',
    location: 'Savannah, GA',
    start: 'January 2026',
    end: 'May 2026',
    bullets: [
      'Evaluated high-fidelity finite-difference electromagnetic models simulating lightning-strike effects on fuel autoignition probabilities against test data — resulted in over $100,000 in long-term licensing savings.',
      'Developed a contrail prediction model based on elevation, humidity, and temperature data, enabling customers to target low-contrail-probability flight times and providing additional ESG data for corporate fleets.',
      'Supported aeroperformance optimization of the Rolls-Royce Pearl 700 engine via data processing and simulation.',
      'Used Amesim to model and conduct 1D thermofluid analysis and simulate system control logic on fuel-delivery and ECS systems for FAA G400 certification; successfully designed logic to operate within required conditions.',
    ],
    tags: ['Simcenter Amesim', 'Mathematical Modelling', 'Thermofluids', 'ANSYS', 'CST', 'Aeroperformance'],
  },
  {
    role: 'Propulsion Testing & Ignition Responsible Engineer',
    company: 'GT Supersonics',
    location: 'Atlanta, GA',
    start: 'May 2025',
    end: 'Present',
    bullets: [
      'Led structural and CAD design of the EXACT test stand (FOS = 3, rated for 400 lbf); integrated modular rail, electronic, and fluid systems for rapid assembly and accurate thrust measurement (<5% error).',
      'Developing a 4-ft extension of the EXACT test stand for afterburner and fuselage-engine configuration testing.',
      'Established test safety protocols and procedures; directed mission control operations during static fire tests.',
      'Designed a glowplug torch igniter chamber and M10-to-NPT fitting; designed a 30 A electrical system and modeled ignition conditions using thermodynamic analysis.',
    ],
    tags: ['SolidWorks', 'CAD', 'Electrical Systems', 'Test Engineering', 'Mathematical Modelling'],
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'Ben T. Zinn Combustion Laboratory',
    location: 'Atlanta, GA',
    start: 'December 2024',
    end: 'Present',
    bullets: [
      'Designed and machined a high-pressure feed system for a methane combustor; integrating fiber-optic diagnostics (in collaboration with GE) to measure combustion stability and determine product species concentration.',
      'Conducted 20+ tests on novel fiber-optic diagnostic and mounting methods for high-pressure combustion.',
      'Learned and performed doctorate-level signal-processing workflows for pressure and mass-fraction data.',
    ],
    tags: ['Laser Cutters', 'Lathe', 'High-Pressure Systems', 'Signal Processing'],
  },
];

export type Education = {
  school: string;
  degree: string;
  location?: string;
  start: string;
  end: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'B.S./M.S. in Aerospace Engineering',
    location: 'Atlanta, GA',
    start: '2024',
    end: '2027/28',
    detail: 'Minor in Computing and Intelligence. GPA: 3.89 / 4.0.',
  },
];
