export type Defender = {
  id: string;
  name: string;
  role: string;
  party: string;
  photo: string;
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
    photo: '/images/defenders/flavio-bolsonaro.jpg',
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
    photo: '/images/defenders/carlos-jordy.jpg',
    socials: {
      instagram: 'https://instagram.com/carlosjordy',
    },
  },
  {
    id: 'nikolas-ferreira',
    name: 'Nikolas Ferreira',
    role: 'Deputado Federal',
    party: 'PL/MG',
    photo: '/images/defenders/nikolas-ferreira.jpg',
    socials: {
      instagram: 'https://instagram.com/nikolasferreiradm',
    },
  },
];
