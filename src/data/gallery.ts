export type GalleryItem = {
  id: string;
  /** Path relative to /public. Spaces are fine — they'll be URL-encoded at render time. */
  src: string;
  /** Alt text for screen readers and SEO. Describe what's in the image. */
  alt: string;
  /** Short label shown above the description in mono. */
  caption: string;
  /** Optional longer body text shown below the caption. */
  description?: string;
};

export const gallery: GalleryItem[] = [
  {
    id: 'gulfstream-logo',
    src: '/Gulfstream logo.jpeg',
    alt: 'Aaron Wong standing in front of the Gulfstream sign in Savannah, GA',
    caption: 'Gulfstream — Savannah, GA',
    description:
      'Day one in front of the Gulfstream sign, just before starting my Propulsion and Thermofluids internship.',
  },
  {
    id: 'exact-test-stand',
    src: '/EXACT Test Stand.jpeg',
    alt: 'EXACT propulsion test stand designed at GT Supersonics',
    caption: 'EXACT Propulsion Test Stand',
    description:
      'The propulsion test stand I led the structural and CAD design for at GT Supersonics. Picture taken during second test of this engine',
  },
  {
    id: 'gulfstream-friends',
    src: '/Gulfstream friends.jpeg',
    alt: 'Aaron Wong with his fellow interns at Gulfstream',
    caption: 'Intern crew — Gulfstream',
    description:
      'With the rest of the Gulfstream intern class at Starland Yard in Savannah, GA. The people I learned the most from this summer!',
  },
];
