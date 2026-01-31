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
import { loadCollection } from '../../utils/cmsLoader';

// Carregamento dinâmico dos posts via JSON (CMS)
let dynamicBlogPosts: BlogPost[] = [];
try {
  const context = (require as any).context('./posts', false, /\.json$/);
  dynamicBlogPosts = loadCollection<BlogPost>(context);
} catch (e) {
  console.warn('Erro ao carregar posts dinâmicos:', e);
}

// Dados estáticos (mantidos como backup/fallback)
const staticBlogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "sinais-atraso-desenvolvimento", // NÃO ALTERAR
    title: "Marcos do Desenvolvimento Infantil: Identificando Sinais de Alerta",
    description: "Conheça os principais marcos do desenvolvimento infantil por faixa etária e aprenda a identificar sinais que indicam a necessidade de avaliação profissional especializada.",
    content: `
O desenvolvimento de cada criança é uma jornada única, mas existem balizas importantes – os chamados "marcos do desenvolvimento" – que nos ajudam a saber se tudo está caminha bem.

Como pais, é natural ter dúvidas. "Será que meu bebê já deveria estar sentando?" ou "Com que idade ele vai começar a falar?". Abaixo, preparamos um guia simples para te orientar.

### 1. De 0 a 3 meses: O Despertar
Nesta fase, o bebê começa a interagir com o mundo.
*   **Olhar:** Ele fixa o olhar em você e acompanha objetos coloridos.
*   **Sorriso:** Aquele sorriso "social" começa a aparecer em resposta às suas brincadeiras.
*   **Controle:** De bruços, ele já tenta levantar a cabecinha.

### 2. De 3 a 6 meses: A Descoberta
O bebê fica mais ativo e curioso.
*   **Mãos:** Ele leva tudo à boca (é a forma dele de explorar!).
*   **Movimento:** Começa a rolar de um lado para o outro.
*   **Som:** Os balbucios ("agu", "da-da") ficam mais frequentes.

### 3. De 6 a 12 meses: A Independência
Uma fase de grandes saltos motores.
*   **Sentar:** Ele senta sem apoio, ganhando equilíbrio.
*   **Deslocamento:** Começa a engatinhar ou se arrastar pela casa.
*   **Comunicação:** Aponta para o que quer e pode soltar as primeiras palavras com significado, como "mama" ou "papa".

### Quando devo me preocupar?
Se você notar que seu filho **não está atingindo esses marcos** ou, mais importante, se ele **perder habilidades que já tinha**, não hesite.

> "A intervenção precoce é a chave. O cérebro da criança tem uma capacidade incrível de adaptação nos primeiros anos."

Na Singulare, tratamos cada sinal com seriedade e carinho. Uma avaliação especializada pode tirar suas dúvidas e, se necessário, iniciar o estímulo certo na hora certa.
    `,
    category: "Desenvolvimento Infantil",
    date: "2024-11-15",
    readTime: 8,
    image: "blog/blog-1.jpg",
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
    content: `
 Muitos pais perguntam: *"Mas criança precisa de terapia ocupacional? O que ela 'ocupa'?"*
 A resposta é simples: a ocupação da criança é **brincar e aprender**. A Terapia Ocupacional (TO) existe para garantir que ela consiga fazer isso com autonomia e alegria.
 
 ### O trabalho "invisível" da TO
 O terapeuta ocupacional é como um detetive que investiga por que certas tarefas simples parecem difíceis para seu filho.
 
 #### 1. Integração Sensorial
 Seu filho tapa os ouvidos com barulho? Não gosta de sujar a mão? Ou vive trombando nas coisas?
 Isso pode ser uma questão sensorial. A TO ajuda o cérebro da criança a organizar essas sensações, tornando o mundo menos caótico para ela.
 
 #### 2. Coordenação Fina (Mãos Hábeis)
 Para escrever, abotoar uma camisa ou usar talheres, precisamos de movimentos precisos. Trabalhamos isso de forma lúdica, fortalecendo a musculatura e a coordenação das mãos.
 
 #### 3. Autonomia no Dia a Dia
 O objetivo final é la independência. Queremos ver seu filho:
 *   Comendo sozinho.
 *   Vestindo a própria roupa.
 *   Escovando os dentes.
 
 ### Sinais de que a TO pode ajudar
 *   Dificuldade em segurar o lápis (letra muito fraca ou forte demais).
 *   Aversão a certas texturas de roupas ou alimentos (seletividade).
 *   Desajeitado motoramente (cai muito, derruba coisas).
 
 Na Singulare, transformamos esses desafios em conquistas através da brincadeira. Cada pequena vitória do seu filho é celebrada por nós!
     `,
    category: "Tratamentos",
    date: "2024-12-10",
    readTime: 6,
    image: "blog/blog-2.jpg",
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
    content: `
 Você sabia que a estimulação da fala começa muito antes do "mamãe" ou "papai"? A comunicação nasce da conexão entre vocês no dia a dia.
 Separamos dicas práticas para você transformar a rotina em um laboratório de palavras!
 
 ### 1. Narre a Vida
 Vire um narrador. Vai dar banho? "Olha a água morna... vamos lavar o pé... agora o sabonete cheiroso". Isso enche o "banco de dados" de palavras do seu filho.
 
 ### 2. O Poder da Pausa
 Faça uma pergunta e **espere**. Conte até 10 mentalmente. A criança precisa de tempo para processar e responder, seja com um sorriso, um olhar ou um som. Não preencha o silêncio imediatamente.
 
 ### 3. Livros são Portais
 Leia todos os dias. Aponte para as figuras. "Cadê o gato? Olha o gato aqui!". Livros trazem palavras, cores e conceitos novos.
 
 ### 4. Sons Divertidos (Onomatopeias)
 Bichos e barulhos são ótimos!
 *   "O carro faz Vruuuuum!"
 *   "A vaca faz Muuuu!"
 É divertido e fácil de imitar.
 
 ### 5. Cante com o Corpo
 Músicas com gestos ("Dona Aranha", "A Roda do Ônibus") conectam movimento e som, facilitando a memorização.
 
 ### 6. Evite corrigir, apenas modele
 Se ele disser "opato" (sapato), evite dizer "Não é opato". Apenas responda naturalmente: "Isso! O **sapato** azul!". Assim, você ensina o certo sem frustrar a tentativa dele.
 
 > **Dica de Ouro:** A comunicação deve ser leve e prazerosa. Se você sente que seu filho está demorando muito para falar ou não reage aos sons, conte com nossa equipe de fonoaudiologia para uma avaliação.
     `,
    category: "Dicas para Pais",
    date: "2025-01-24",
    readTime: 5,
    image: "blog/blog-3.jpg",
    author: {
      name: "Dra. Maria Fernanda Lima",
      role: "Fonoaudióloga",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    published: true,
    featured: true
  }
];

// Exporta os posts dinâmicos se existirem, caso contrário usa os estáticos
export const blogPostsData: BlogPost[] = dynamicBlogPosts.length > 0 ? dynamicBlogPosts : staticBlogPosts;

// 💡 DICAS:
// - Para adicionar novo post: copie um bloco { } e altere as informações
// - NÃO altere o "slug" - ele é usado na URL da página
// - Para trocar imagem: use URL completa ou nome do arquivo em src/assets/images/

// Categorias do blog
export const blogCategories = [
  { id: '1', name: 'Desenvolvimento Infantil', slug: 'desenvolvimento', icon: 'fas fa-child', color: '#4A90E2' },
  { id: '2', name: 'Tratamentos', slug: 'tratamentos', icon: 'fas fa-heartbeat', color: '#9B59B6' },
  { id: '3', name: 'Dicas para Pais', slug: 'dicas-pais', icon: 'fas fa-hand-holding-heart', color: '#FF6B9D' },
  { id: '4', name: 'Casos de Sucesso', slug: 'casos-sucesso', icon: 'fas fa-star', color: '#F39C12' },
  { id: '5', name: 'Notícias', slug: 'noticias', icon: 'fas fa-newspaper', color: '#1ABC9C' },
];

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
