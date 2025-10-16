/**
 * Tipos TypeScript para o Blog
 */

export interface BlogAuthor {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  email?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
}

export interface BlogPost {
  id: number | string;
  slug: string; // URL amigável (ex: "sinais-atraso-desenvolvimento")
  title: string;
  description: string;
  content: string; // Conteúdo completo (pode ser Markdown ou HTML)
  
  // Meta informações
  date: string;
  updatedAt?: string;
  readTime: number; // Tempo de leitura em minutos
  
  // Autor
  author: BlogAuthor;
  
  // Categorização
  category: string; // Nome da categoria
  tags?: string[];
  
  // Mídia
  image: string; // Imagem de destaque
  images?: string[]; // Galeria de imagens
  
  // Engagement
  views?: number;
  likes?: number;
  comments?: number;
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  
  // Status
  published?: boolean;
  featured?: boolean; // Post em destaque na home
}

export interface BlogComment {
  id: number;
  author: string;
  email: string;
  content: string;
  date: string;
  approved: boolean;
  replies?: BlogComment[];
}

export interface BlogSearchFilters {
  query?: string;
  category?: string;
  tag?: string;
  author?: string;
  dateFrom?: string;
  dateTo?: string;
}

