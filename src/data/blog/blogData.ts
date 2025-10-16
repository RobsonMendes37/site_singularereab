/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DO BLOG
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para adicionar novo post: copie um bloco { } e cole no final
 * 3. Para remover post: delete o bloco { } inteiro
 * 4. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: 
 * - NÃO altere o "slug" (usado na URL)
 * - NÃO altere as chaves como "id:", "titulo:", etc.
 */

export interface BlogPost {
  id: number;
  slug: string; // NÃO ALTERAR - usado na URL
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  tempoLeitura: number; // em minutos
  imagem: string; // URL da imagem ou nome do arquivo
  autor: {
    nome: string;
    cargo: string;
    foto: string;
  };
}

export const blogPostsData: BlogPost[] = [
  {
    id: 1,
    slug: "sinais-atraso-desenvolvimento", // NÃO ALTERAR
    titulo: "Marcos do Desenvolvimento Infantil: Identificando Sinais de Alerta",
    resumo: "Conheça os principais marcos do desenvolvimento infantil por faixa etária e aprenda a identificar sinais que indicam a necessidade de avaliação profissional especializada.",
    categoria: "Desenvolvimento Infantil",
    data: "15 Jan 2025",
    tempoLeitura: 8,
    imagem: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    autor: {
      nome: "Dra. Ana Carolina Silva",
      cargo: "Fisioterapeuta Pediátrica",
      foto: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  },
  {
    id: 2,
    slug: "importancia-terapia-ocupacional", // NÃO ALTERAR
    titulo: "A Importância da Terapia Ocupacional no Desenvolvimento Infantil",
    resumo: "Entenda como a Terapia Ocupacional pode auxiliar crianças com dificuldades nas atividades do dia a dia, coordenação motora e integração sensorial.",
    categoria: "Tratamentos",
    data: "20 Jan 2025",
    tempoLeitura: 6,
    imagem: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    autor: {
      nome: "Dr. Carlos Eduardo Santos",
      cargo: "Terapeuta Ocupacional",
      foto: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  },
  {
    id: 3,
    slug: "dicas-estimulacao-linguagem", // NÃO ALTERAR
    titulo: "10 Dicas para Estimular a Linguagem do Seu Filho em Casa",
    resumo: "Aprenda estratégias práticas e eficazes para estimular o desenvolvimento da linguagem e comunicação das crianças no ambiente familiar.",
    categoria: "Dicas para Pais",
    data: "25 Jan 2025",
    tempoLeitura: 5,
    imagem: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    autor: {
      nome: "Dra. Maria Fernanda Lima",
      cargo: "Fonoaudióloga",
      foto: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  }
];

// 💡 DICAS:
// - Para adicionar novo post: copie um bloco { } e altere as informações
// - NÃO altere o "slug" - ele é usado na URL da página
// - Para trocar imagem: use URL completa ou nome do arquivo em src/assets/images/
// - Para alterar data: use formato "DD MMM YYYY" (ex: "15 Jan 2025")
// - Para alterar tempo de leitura: use número em minutos
// - Para remover post: delete o bloco { } inteiro
