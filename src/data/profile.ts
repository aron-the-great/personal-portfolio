export type Profile = {
  name: string;
  shortName?: string;
  headline: string;
  location?: string;
  bio: string[];
  email?: string;
  linkedin?: string;
  github?: string;
  resumeUrl: string;
  /**
   * Phrases the hero typewriter cycles through.
   * First phrase shows on initial load and as the static fallback for reduced-motion users.
   * Keep entries short — they read after "Hi, I'm ".
   */
  typewriter?: string[];
};

export const profile: Profile = {
  name: 'Aaron Wong',
  shortName: 'AW',
  headline: 'Building and testing the engines behind the next supersonic generation',
  location: 'NYC Metro Area',
  bio: [
    'I’m an Aerospace Engineering student at Georgia Tech specializing in propulsion systems, with a core focus on supersonic aviation engines and rocket propulsion. I am particularly fascinated by the intersection of hardware and software, specifically how machine learning and artificial intelligence can be used to accelerate high-fidelity thermal and fluid analysis.',
    'My favorite work lies in the mathematical modeling of propulsion systems, computational thermofluids, and physical test engineering.',
    'I am currently seeking Aerospace Engineering internships for Spring 2027 / Summer 2027, specifically within propulsion, thermal, or fluids engineering teams. Outside of engineering, you can find me reading about politics and economics, practicing handstands, or playing mahjong and card games.',
  ],
  email: 'aaronhw322@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aaron-h-wong/',
  resumeUrl: '/resume.pdf',
  typewriter: [
    'Aaron Wong',
    'a Propulsion Researcher',
    'an Aerospace Engineer',
    'a Thermofluids Modeler',
  ],
};
