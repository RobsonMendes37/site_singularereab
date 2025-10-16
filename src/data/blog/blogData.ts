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

import { BlogPost } from '../../types/blog.types';

export const blogPostsData: BlogPost[] = [
  {
    id: 1,
    slug: "sinais-atraso-desenvolvimento", // NÃO ALTERAR
    title: "Marcos do Desenvolvimento Infantil: Identificando Sinais de Alerta",
    description: "Conheça os principais marcos do desenvolvimento infantil por faixa etária e aprenda a identificar sinais que indicam a necessidade de avaliação profissional especializada.",
    content: "Conteúdo completo do post...", // Conteúdo completo
    category: "Desenvolvimento Infantil",
    date: "2025-01-15",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    author: {
      name: "Dra. Ana Carolina Silva",
      role: "Fisioterapeuta Pediátrica",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    published: true,
    featured: true
  },
  {
    id: 2,
    slug: "importancia-terapia-ocupacional", // NÃO ALTERAR
    title: "A Importância da Terapia Ocupacional no Desenvolvimento Infantil",
    description: "Entenda como a Terapia Ocupacional pode auxiliar crianças com dificuldades nas atividades do dia a dia, coordenação motora e integração sensorial.",
    content: "Conteúdo completo do post...", // Conteúdo completo
    category: "Tratamentos",
    date: "2025-01-20",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    author: {
      name: "Dr. Carlos Eduardo Santos",
      role: "Terapeuta Ocupacional",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    published: true,
    featured: true
  },
  {
    id: 3,
    slug: "dicas-estimulacao-linguagem", // NÃO ALTERAR
    title: "10 Dicas para Estimular a Linguagem do Seu Filho em Casa",
    description: "Aprenda estratégias práticas e eficazes para estimular o desenvolvimento da linguagem e comunicação das crianças no ambiente familiar.",
    content: "Conteúdo completo do post...", // Conteúdo completo
    category: "Dicas para Pais",
    date: "2025-01-25",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    author: {
      name: "Dra. Maria Fernanda Lima",
      role: "Fonoaudióloga",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    published: true,
    featured: true
  }
];

// 💡 DICAS:
// - Para adicionar novo post: copie um bloco { } e altere as informações
// - NÃO altere o "slug" - ele é usado na URL da página
// - Para trocar imagem: use URL completa ou nome do arquivo em src/assets/images/

// Funções auxiliares para o blog
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPostsData.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPostsData
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit);
};

export const filterBlogPosts = (filters: {
  category?: string;
  search?: string;
}): BlogPost[] => {
  let filtered = blogPostsData;

  if (filters.category) {
    filtered = filtered.filter(post => post.category === filters.category);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(searchLower) ||
      post.description.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
};
// - Para alterar data: use formato "DD MMM YYYY" (ex: "15 Jan 2025")
// - Para alterar tempo de leitura: use número em minutos
// - Para remover post: delete o bloco { } inteiro
