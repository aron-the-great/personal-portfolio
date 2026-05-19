export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C++', 'C', 'Matlab'],
  },
  {
    title: 'Design and Simulations',
    skills: ['Solidworks', 'CATIA', 'Autodesk Inventor', 'Fusion', 'ANSYS', 'Dassault Systemes CST', 'Siemens Amesim'],
  },
  {
    title: 'Machine Shop',
    skills: ['Laser Cutters', '3D Printers', 'Soldering', 'Waterjets', 'Lathe', 'Mills'],
  },
  {
    title: 'Mathematics',
    skills: ['Advanced Calculus', 'Mathematical Modelling', 'Probability and Statistics', 'Numerical Methods', 'Discrete Math & Optimization', 'Combinatorics'],
  },
];
