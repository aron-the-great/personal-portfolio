export type Project = {
  slug: string;
  title: string;
  /** Why this project exists — the problem it addresses, the goal, or the question being answered. */
  purpose: string;
  /** What you specifically did — the technical work, your role, the methods used. */
  contribution: string;
  /** Outcome — measurable results, savings, performance numbers, awards, downstream uses. */
  impact: string;
  tags: string[];
  /** Public source code link. Omit (or use `confidential`) if not shareable. */
  repoUrl?: string;
  /** Public demo / write-up link. Omit (or use `confidential`) if not shareable. */
  demoUrl?: string;
  /** Presentation or technical document link. */
  presentationUrl?: string;
  /**
   * Mark the project as not publicly shareable.
   * When true, repoUrl/demoUrl are hidden and a badge is shown instead.
   * Use for industry/research work under NDA, ITAR, or pre-publication restrictions.
   */
  confidential?: boolean;
  /** Override the default "Confidential" badge text. e.g. "Under NDA", "Proprietary", "Pre-publication". */
  confidentialLabel?: string;
  /**
   * Mark the project as still in progress.
   * Shows a "In Progress" badge in the card corner. Links remain usable if provided.
   */
  inProgress?: boolean;
  /** Override the default "In Progress" badge text. e.g. "WIP", "Active Development", "Coming Soon". */
  inProgressLabel?: string;
  /**
   * Mark the project as intentionally unlinked.
   * Use when there is no public repo or demo to share, but the project isn't confidential
   * (e.g. coursework, personal experiments, local-only work). Renders a neutral "Unlinked" badge.
   */
  unlinked?: boolean;
  /** Override the default "Unlinked" badge text. e.g. "Local Only", "No Public Repo". */
  unlinkedLabel?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'supersonic-combustor',
    title: 'Supersonic Combustor Design and Testing',
    purpose:
      'Help implement and characterize different flameholding mechanism for supersonic flow scramjet engines.',
    contribution:
      'Supporting instrumentation electrical routing, instrumentation testing, and engineering an integrated software interface that unifies real-time data reading, remote valve operation, and high-speed camera controls to enhance test monitoring efficiency.',
    impact:
      'Coming Soon',
    tags: ['Testing', 'Thermofluids', 'Propulsion'],
    featured: false,
    inProgress: true,
  },
  {
    slug: 'Contrail Predictor',
    title: 'Contrail Prediction Model',
    purpose:
      'Help corporate flight customers plan routes that minimize contrail formation, supplying ESG-relevant data alongside the standard flight planning workflow.',
    contribution:
      'Built a contrail prediction model driven by elevation, humidity, and temperature inputs. Began preliminary mathematical analysis on heat transfer and combined humidity for engine bypass and core exhaust mixing interactions.',
    impact:
      'Enables customers to target low-contrail-probability flight times and provided new ESG reporting data for corporate fleet operations.',
    tags: ['Mathematical Modelling', 'Thermal and Fluids analysis', 'Python', 'Matlab', 'xarray', 'NumPy'],
    featured: true,
    confidential: true,
  },
  {
    slug: 'EM Simulation',
    title: 'Lightning-Strike Autoignition EM Simulation',
    purpose:
      'Determine whether high-fidelity finite-difference electromagnetic models can replace physical lightning-strike testing for fuel autoignition risk assessment.',
    contribution:
      'Evaluated finite-difference EM model accuracy against physical test data; benchmarked correlation across multiple lightning-strike conditions and tank geometries.',
    impact:
      'Justified a shift from physical testing to simulation for several certification cases, projecting over $100,000 in long-term licensing and test savings.',
    tags: ['ANSYS', 'CST', 'EM Simulation', 'Test Correlation'],
    featured: true,
    confidential: true,
  },
  {
    slug: 'exact-test-stand',
    title: 'EXACT Propulsion Test Stand',
    purpose:
      'Provide GT Supersonics with a modular, reusable test stand capable of supporting rapid iteration on small-thrust propulsion hardware up to 400 lbf.',
    contribution:
      'Led structural and CAD design (FOS = 3); integrated modular rail, electronic, and fluid systems for fast assembly; established safety protocols and led mission-control ops during static fires.',
    impact:
      'Achieved first successful testing of new engine test stand with accurate force reading; stand is now the team\'s primary platform, with a 4-ft afterburner extension under active development.',
    tags: ['SolidWorks', 'CAD', 'Test Engineering', 'Structural Analysis'],
    repoUrl: undefined,
    presentationUrl: '/EXACT-1 PDR.pdf',
    featured: true,
  },
  {
    slug: 'portfolio-site',
    title: 'This Portfolio',
    purpose:
      'Need a fast, premium portfolio site usable as the "additional link" on aerospace engineering internship applications.',
    contribution:
      'Designed and built a Vite + React + Tailwind site with an aerospace instrumentation theme (midnight navy, safety orange, blueprint grid, JetBrains Mono data readouts); content is fully data-driven via typed files.',
    impact:
      'Sub-100ms first paint on Vercel; re-themeable in one file via CSS variables; serves as the public face of my application materials.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    featured: false,
    unlinked: true,
  },
];
