export type Defender = {
  id: string;
  name: string;
  role: string;
  party: string;
  photo: string;
  /** offset Y custom (ex: "-12%") aplicado via transform translateY na foto do card */
  photoOffsetY?: string;
  socials?: {
    instagram?: string;
    twitter?: string;
  };
};

export const defenders: Defender[] = [
  {
    id: 'flavio-bolsonaro',
    name: 'Flávio Bolsonaro',
    role: 'Senador',
    party: 'PL/RJ',
    photo: '/images/defenders/flavio-portrait.png',
    socials: {
      instagram: 'https://instagram.com/flaviobolsonaro',
      twitter: 'https://x.com/FlavioBolsonaro',
    },
  },
  {
    id: 'carlos-jordy',
    name: 'Carlos Jordy',
    role: 'Deputado Federal',
    party: 'PL/RJ',
    photo: '/images/defenders/carlos-jordy.png',
    socials: {
      instagram: 'https://instagram.com/carlosjordy',
    },
  },
  {
    id: 'nikolas-ferreira',
    name: 'Nikolas Ferreira',
    role: 'Deputado Federal',
    party: 'PL/MG',
    photo: '/images/defenders/nikolas-ferreira.png',
    photoOffsetY: '-12%',
    socials: {
      instagram: 'https://instagram.com/nikolasferreiradm',
    },
  },
];
