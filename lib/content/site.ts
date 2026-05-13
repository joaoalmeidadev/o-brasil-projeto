export const site = {
  title: 'O Brasil Não Aguenta Mais',
  description:
    'PEC 32/2019 — Redução da maioridade penal. Conheça a proposta, os defensores e participe da mobilização.',
  pec: 'PEC 32/2019',
  pecHeadline: 'Redução da Maioridade Penal',
  ticker: ['O Brasil Não Aguenta Mais', 'PEC 32/2019', 'Redução da Maioridade Penal'],
  hero: {
    eyebrow: 'Chega de soluções rasas',
    titleLine1: 'Nossa Geração',
    titleLine2: 'Precisa Responder',
    cta: 'Entenda por quê',
    attribution: {
      name: 'Flávio Bolsonaro',
      role: 'Senador (PL/RJ)',
    },
  },
  stat: {
    big: '9',
    headline: 'em cada 10 BRASILEIROS são A FAVOR',
    body: 'A PEC 32/2019 propõe alterar a Constituição Federal para reduzir a maioridade penal de jovens com idade entre 16 e 17 anos que cometem crimes graves.',
    cta: 'Quero votar a favor',
    cardTitle: 'O que dizem as pesquisas',
    cardBody:
      'Datafolha, Paraná Pesquisas e CNT/MDA convergem: a maioria absoluta da população apoia a redução da maioridade penal para crimes hediondos.',
  },
  defenders: {
    title: 'Conheça os defensores do Brasil',
    body: 'Eles estão na linha de frente para proteger o povo brasileiro no Congresso e no Senado Federal. Siga os passos dos nossos parlamentares através das redes sociais.',
    cta: 'Veja quem apoia essa causa',
  },
  news: {
    title: 'A Realidade que faz a PEC 32/2019 necessária',
    body: 'Manchetes recentes da imprensa brasileira sobre crimes graves cometidos por adolescentes — a base material que sustenta a urgência da proposta.',
  },
  pecExplained: {
    title: 'A pec explicada',
    subtitle: 'O que diz a proposta',
    body: 'A Proposta de Emenda à Constituição nº 32, de 2019, de autoria do Senador Flávio Bolsonaro, propõe alterar dispositivos da Constituição Federal para que adolescentes a partir de 16 anos respondam penalmente quando praticarem crimes hediondos — homicídio, estupro, latrocínio, tráfico de drogas, terrorismo e participação em organizações criminosas. A proposta trata de um dos temas mais sensíveis da segurança pública no país, redefinindo quem pode ser responsabilizado criminalmente em uma resposta firme aos crimes graves que hoje ficam sem resposta.',
  },
  kit: {
    title: 'Faça parte da mudança',
    body: 'Receba o kit completo de materiais antes de todo mundo. Reels, stories, cards, narrações e textos prontos para multiplicar a luta pela PEC 32/2019.',
  },
  signup: {
    titleLine1: 'O Brasil',
    titleAccent1: 'precisa',
    titleLine2: 'de você para fazer',
    titleAccent2: 'a diferença',
    body: 'Cadastre e receba material exclusivo',
    cta: 'Preencha o formulário',
    consent:
      'Concordo em receber comunicações sobre a campanha e a PEC 32/2019. Posso me descadastrar a qualquer momento.',
  },
  footer: {
    rights: '© 2026 Senador Flávio Bolsonaro',
    links: [
      { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
      { label: 'Termos de Uso', href: '/termos-de-uso' },
    ],
  },
} as const;

export type Site = typeof site;
