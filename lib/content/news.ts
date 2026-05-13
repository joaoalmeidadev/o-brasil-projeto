export type NewsCard = {
  id: string;
  date: string;
  headline: string;
  source: string;
  url?: string;
};

export const news: NewsCard[] = [
  {
    id: 'sp-zona-leste-2026-05',
    date: '01 — MAI/2026',
    headline:
      'Polícia investiga grupo de crianças de 7 e 8 anos na Zona Leste de SP. Três adolescentes são apreendidos.',
    source: 'Folha de S.Paulo',
  },
  {
    id: 'rio-latrocinio-2026-05',
    date: '01 — MAI/2026',
    headline:
      'Adolescente de 16 anos é apreendido por participação em latrocínio na Zona Sul do Rio.',
    source: 'O Globo',
  },
  {
    id: 'mg-roubo-cargas-2026-04',
    date: '28 — ABR/2026',
    headline:
      'Quadrilha de menores é desmantelada em operação contra roubo de cargas em Belo Horizonte.',
    source: 'Estado de Minas',
  },
  {
    id: 'df-violencia-2026-04',
    date: '22 — ABR/2026',
    headline: 'Em uma semana, três adolescentes são apreendidos por homicídio no Distrito Federal.',
    source: 'Correio Braziliense',
  },
];
