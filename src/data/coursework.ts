export type CourseGroup = {
  title: string;
  courses: { code: string; name: string }[];
};

export const coursework: CourseGroup[] = [
  {
    title: 'Thermofluids and Propulsion',
    courses: [
      { code: 'AE 4453', name: 'Advanced Aircraft Propulsion' },
      { code: 'AE 4451', name: 'Jet and Rocket Propulsion' },
      { code: 'AE 3030', name: 'Aerodynamics' },
      { code: 'AE 2010', name: 'Thermofluids Analysis' },
    ],
  },
  {
    title: 'Computer Science and AI',
    courses: [
      { code: 'CS 3600', name: 'Intro to AI' },
      { code: 'CS 2110', name: 'Computer Organization and Programming' },
      { code: 'CS 1332', name: 'Data Structure and Algorithims' },
      { code: 'CS 1371', name: 'Computing for Engineers' },
    ],
  },
];
