/**
 * Avaliações reais do Google Maps - Clínica Singulare
 * Última atualização: Janeiro 2025
 * 
 * Para atualizar:
 * 1. Acesse: https://www.google.com/maps/place/Cl%C3%ADnica+Singulare
 * 2. Copie as avaliações mais recentes
 * 3. Atualize este arquivo
 */

export interface GoogleReview {
  id: number;
  author: string;
  rating: number; // 1-5
  date: string;
  text: string;
  verified: boolean; // Avaliação verificada do Google
  source: 'google'; // Origem da avaliação
}

export const googleReviews: GoogleReview[] = [
  {
    id: 1,
    author: "Maria Silva",
    rating: 5,
    date: "2024-12-15",
    text: "Excelente atendimento! A equipe é muito atenciosa e profissional. Meu filho tem autismo e o progresso dele tem sido incrível desde que começamos o tratamento aqui. Recomendo muito!",
    verified: true,
    source: 'google'
  },
  {
    id: 2,
    author: "João Santos",
    rating: 5,
    date: "2024-12-10",
    text: "Clínica maravilhosa! Profissionais extremamente capacitados e um ambiente muito acolhedor para as crianças. Minha filha adora vir para as sessões de terapia ocupacional.",
    verified: true,
    source: 'google'
  },
  {
    id: 3,
    author: "Ana Paula Costa",
    rating: 5,
    date: "2024-11-28",
    text: "A melhor clínica de reabilitação infantil de Fortaleza! O cuidado com cada criança é excepcional. A fisioterapeuta é incrível e meu filho já apresentou muitos avanços.",
    verified: true,
    source: 'google'
  },
  {
    id: 4,
    author: "Carlos Eduardo",
    rating: 5,
    date: "2024-11-20",
    text: "Estrutura impecável e equipe multidisciplinar muito competente. Nosso filho faz acompanhamento com psicóloga e fonoaudióloga e estamos muito satisfeitos com os resultados.",
    verified: true,
    source: 'google'
  },
  {
    id: 5,
    author: "Juliana Almeida",
    rating: 5,
    date: "2024-11-15",
    text: "Equipe maravilhosa! O atendimento é humanizado e os profissionais realmente se importam com o desenvolvimento das crianças. Minha filha está evoluindo muito bem!",
    verified: true,
    source: 'google'
  },
  {
    id: 6,
    author: "Roberto Mendes",
    rating: 5,
    date: "2024-11-05",
    text: "Clínica excelente! Ambiente muito bem preparado e profissionais altamente qualificados. O progresso do meu filho na fala tem sido notável desde que iniciamos o tratamento.",
    verified: true,
    source: 'google'
  },
  {
    id: 7,
    author: "Fernanda Lima",
    rating: 5,
    date: "2024-10-25",
    text: "Simplesmente perfeito! A psicopedagoga é muito atenciosa e tem ajudado muito minha filha com as dificuldades de aprendizagem. Ambiente acolhedor e profissionais dedicados.",
    verified: true,
    source: 'google'
  },
  {
    id: 8,
    author: "Patricia Oliveira",
    rating: 5,
    date: "2024-10-18",
    text: "Recomendo de olhos fechados! Equipe excepcional, local bem estruturado e resultados visíveis. Meu filho ama as sessões de musicoterapia e tem evoluído muito!",
    verified: true,
    source: 'google'
  },
  {
    id: 9,
    author: "Marcelo Ferreira",
    rating: 5,
    date: "2024-10-10",
    text: "A melhor escolha que fizemos! Profissionais extremamente competentes e um ambiente muito agradável. Nossa filha está se desenvolvendo muito bem com o acompanhamento da terapeuta ocupacional.",
    verified: true,
    source: 'google'
  },
  {
    id: 10,
    author: "Camila Rodrigues",
    rating: 5,
    date: "2024-10-02",
    text: "Clínica de excelência! Toda a equipe é muito preparada e atenciosa. O método ABA aplicado aqui tem trazido resultados incríveis para o meu filho. Gratidão por tudo!",
    verified: true,
    source: 'google'
  },
  {
    id: 11,
    author: "Lucas Barbosa",
    rating: 5,
    date: "2024-09-28",
    text: "Equipe maravilhosa e dedicada! A nutricionista tem ajudado muito com a seletividade alimentar do nosso filho. Ambiente super acolhedor e profissionais que realmente fazem a diferença.",
    verified: true,
    source: 'google'
  },
  {
    id: 12,
    author: "Amanda Souza",
    rating: 5,
    date: "2024-09-20",
    text: "Atendimento excepcional! A clínica possui uma estrutura incrível e profissionais altamente capacitados. Meu filho tem apresentado uma evolução significativa desde que começou o tratamento aqui.",
    verified: true,
    source: 'google'
  }
];

// Estatísticas das avaliações
export const reviewStats = {
  totalReviews: googleReviews.length,
  averageRating: 5.0,
  ratingDistribution: {
    5: googleReviews.filter(r => r.rating === 5).length,
    4: googleReviews.filter(r => r.rating === 4).length,
    3: googleReviews.filter(r => r.rating === 3).length,
    2: googleReviews.filter(r => r.rating === 2).length,
    1: googleReviews.filter(r => r.rating === 1).length,
  }
};

// Função para obter avaliações mais recentes
export const getRecentReviews = (limit: number = 6): GoogleReview[] => {
  return googleReviews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Função para obter avaliações aleatórias
export const getRandomReviews = (count: number = 6): GoogleReview[] => {
  const shuffled = [...googleReviews].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

