export const site = {
  title: 'O Brasil Não Aguenta Mais',
  description:
    'PEC 32/2019 — Redução da maioridade penal. Conheça a proposta, os defensores e participe da mobilização.',
  pec: 'PEC 32/2019',
  pecHeadline: 'Redução da Maioridade Penal',
  ticker: ['PEC 32/2019', 'Redução da Maioridade Penal', 'O Brasil Não Aguenta Mais'],
  hero: {
    eyebrow: 'Chega de soluções rasas',
    title: ['Nossa', 'Geração', 'Precisa', 'Responder'] as const,
    titleAccentLineIndex: 2,
    cta: 'Entenda por quê',
    attribution: {
      name: 'Flávio Bolsonaro',
      role: 'Senador (PL/RJ)',
    },
  },
  stat: {
    big: '9',
    headline: 'EM CADA 10 BRASILEIROS SÃO A FAVOR',
    body: 'A PEC 32/2019 propõe alterar a Constituição Federal para reduzir a maioridade penal de jovens com idade entre 16 e 17 anos que cometem crimes graves.',
    cta: 'Quero votar a favor',
    cardTitle: 'O QUE DIZEM AS PESQUISAS',
    cardBody:
      'Datafolha, Paraná Pesquisas e CNT/MDA convergem: a maioria absoluta da população apoia a redução da maioridade penal para crimes hediondos.',
  },
  defenders: {
    title: 'Conheça os defensores do Brasil',
    body: 'Eles estão na linha de frente para proteger o povo brasileiro no Congresso e no Senado Federal. Siga os passos dos nossos parlamentares através das redes sociais.',
    cta: 'Veja mais',
  },
  news: {
    title: 'A Realidade que faz a PEC 32/2019 necessária',
    body: 'Manchetes recentes da imprensa brasileira sobre crimes graves cometidos por adolescentes — a base material que sustenta a urgência da proposta.',
  },
  pecExplained: {
    title: 'A PEC Explicada',
    subtitle: 'O que diz a proposta',
    body: 'A Proposta de Emenda à Constituição n.º 32/2019 altera os artigos da Constituição Federal para que adolescentes a partir de 16 anos sejam responsabilizados penalmente em casos de crime hediondo — crimes considerados extremamente graves, como homicídio, estupro, tortura, tráfico de drogas, terrorismo e participação em organizações criminosas. A proposta trata de um dos temas mais sensíveis da segurança pública no país. Ao mudar a Constituição, ela redefine quem pode ser responsabilizado criminalmente — uma resposta firme aos crimes graves que hoje ficam sem resposta.',
  },
  kit: {
    title: ['Faça', 'parte da', 'mudança'] as const,
    titleAccentLineIndex: 2,
    body: 'Receba o kit completo de materiais antes de todo mundo. Reels, stories, cards, narrações e textos prontos para multiplicar a luta pela PEC 32/2019.',
  },
  signup: {
    title: ['O Brasil', 'precisa', 'de você', 'para fazer', 'a', 'diferença'] as const,
    accentSegments: [2, 5] as const,
    body: 'Cadastre e receba material exclusivo',
    cta: 'Preencha o formulário',
    consent:
      'Concordo em receber comunicações sobre a campanha e a PEC 32/2019. Posso me descadastrar a qualquer momento.',
  },
  footer: {
    brand: 'Flávio Bolsonaro',
    rights: '© 2026 Senador Flávio Bolsonaro',
    links: [
      { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
      { label: 'Termos de Uso', href: '/termos-de-uso' },
    ],
  },
} as const;

export type Site = typeof site;
