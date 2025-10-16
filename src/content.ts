/**
 * ════════════════════════════════════════════════════════════════════════════
 * 📝 ARQUIVO DE CONTEÚDO DO SITE - FÁCIL DE EDITAR
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 🎯 ATENÇÃO: Este arquivo contém TODO O CONTEÚDO editável do site!
 * 
 * ✅ PODE EDITAR:
 *    - Textos
 *    - Títulos
 *    - Descrições
 *    - Links de vídeos
 *    - Nomes de profissionais
 *    - Informações de tratamentos
 *    - Posts do blog
 * 
 * ❌ NÃO MEXER:
 *    - Palavras entre aspas especiais como "id:", "slug:", etc.
 *    - Vírgulas e chaves { }
 *    - Colchetes [ ]
 * 
 * 💡 COMO EDITAR:
 *    1. Procure a seção que deseja alterar (ex: "VÍDEOS", "EQUIPE", etc)
 *    2. Altere o texto entre aspas "assim"
 *    3. Salve o arquivo (Ctrl+S)
 *    4. Pronto! O site será atualizado automaticamente
 * 
 * ════════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════
// 🎬 VÍDEOS DO SITE
// ═══════════════════════════════════════════════════════════════════════════

export const VIDEOS = {
  // Vídeo da página "Nossa História" (seção Sobre)
  sobreNossaHistoria: {
    url: 'https://www.youtube.com/embed/VIDEO_ID_AQUI',
    titulo: 'Nossa História - Clínica Singulare',
    descricao: 'Conheça a história e missão da Clínica Singulare'
  },

  // Vídeo da página "Estrutura" (galeria/facilities)
  estrutura: {
    url: 'https://www.youtube.com/embed/VIDEO_ID_AQUI',
    titulo: 'Conheça Nossa Estrutura',
    descricao: 'Tour virtual pela nossa clínica e espaços terapêuticos'
  },

  // Vídeo adicional (se precisar)
  institucional: {
    url: 'https://www.youtube.com/embed/VIDEO_ID_AQUI',
    titulo: 'Vídeo Institucional',
    descricao: 'Apresentação da Clínica Singulare'
  }
};

// 💡 COMO TROCAR O VÍDEO:
// 1. Vá no YouTube e copie o link do vídeo (ex: https://www.youtube.com/watch?v=ABC123)
// 2. Pegue apenas o código depois de "v=" (ex: ABC123)
// 3. Cole no lugar de "VIDEO_ID_AQUI"
// Exemplo: url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'

// Team members moved to src/data/team/teamData.ts

// Treatments moved to src/data/treatments/treatmentsData.ts

// Blog posts moved to src/data/blog/blogData.ts

// ═══════════════════════════════════════════════════════════════════════════
// 📝 CONTEÚDO COMPLETO DOS POSTS (para a página individual)
// ═══════════════════════════════════════════════════════════════════════════
// IMPORTANTE: O 'slug' aqui deve ser IGUAL ao 'slug' em POSTS_BLOG

export const CONTEUDO_POSTS = {
  'sinais-atraso-desenvolvimento': `
# Marcos do Desenvolvimento Infantil: Identificando Sinais de Alerta

O desenvolvimento infantil é um processo complexo que envolve aquisições motoras, cognitivas, linguísticas e socioemocionais. Embora cada criança tenha seu próprio ritmo de desenvolvimento, existem marcos esperados para cada faixa etária que servem como referência para identificar possíveis atrasos que necessitem de intervenção precoce.

## 📊 Marcos do Desenvolvimento por Idade

### 0 a 3 meses
- **Motor:** Sustenta a cabeça quando segurado
- **Social:** Sorri em resposta a estímulos
- **Comunicação:** Emite sons e balbucia

### 4 a 6 meses
- **Motor:** Rola, senta com apoio
- **Cognitivo:** Reconhece rostos familiares
- **Comunicação:** Ri e vocaliza ativamente

### 7 a 12 meses
- **Motor:** Senta sem apoio, engatinha, pode dar os primeiros passos
- **Social:** Brinca de esconde-esconde, acena "tchau"
- **Comunicação:** Fala primeiras palavras ("mamá", "papá")

## 🚨 Sinais de Alerta

### Quando procurar ajuda IMEDIATA:

1. **0-3 meses:**
   - Não reage a sons altos
   - Não acompanha objetos com os olhos
   - Corpo muito rígido ou muito mole

2. **4-6 meses:**
   - Não sorri ou interage
   - Não leva objetos à boca
   - Não sustenta a cabeça

3. **7-12 meses:**
   - Não senta sem apoio aos 9 meses
   - Não balbucia aos 12 meses
   - Não demonstra interesse em brinquedos

## 💡 Quando Buscar Ajuda

Se você observar algum destes sinais, procure uma avaliação profissional. A intervenção precoce é fundamental para melhores resultados!

**Agende uma avaliação:** Entre em contato conosco e nossa equipe multidisciplinar está pronta para ajudar.
  `,

  'importancia-terapia-ocupacional': `
# A Importância da Terapia Ocupacional no Desenvolvimento Infantil

A Terapia Ocupacional é fundamental para crianças que apresentam dificuldades nas atividades diárias...

(AQUI VOCÊ ADICIONA TODO O CONTEÚDO DO POST EM MARKDOWN)
  `,

  'dicas-estimulacao-linguagem': `
# 10 Dicas para Estimular a Linguagem do Seu Filho em Casa

Estimular a linguagem em casa é fundamental para o desenvolvimento da comunicação...

(AQUI VOCÊ ADICIONA TODO O CONTEÚDO DO POST EM MARKDOWN)
  `
};

// 💡 COMO EDITAR O CONTEÚDO DE UM POST:
// 1. Encontre o slug do post (ex: 'sinais-atraso-desenvolvimento')
// 2. Edite o texto entre as ` ` (crases)
// 3. Use ## para títulos, ### para subtítulos
// 4. Use - para listas
// 5. Use **texto** para negrito

// ═══════════════════════════════════════════════════════════════════════════
// 🏠 TEXTOS DAS SEÇÕES DA HOME
// ═══════════════════════════════════════════════════════════════════════════

export const SECOES = {
  // ─────────────────────────────────────────────────────────────────────────
  // HERO SECTION (Carrossel Principal)
  // ─────────────────────────────────────────────────────────────────────────
  hero: {
    slides: [
      {
        titulo: 'Seu Filho Merece o Melhor Cuidado',
        subtitulo: 'Tratamentos Especializados que Transformam o Desenvolvimento das Crianças',
        imagemFundo: 'hero-img.jpg'  // Imagem na pasta public/img/
      },
      {
        titulo: 'Cada Conquista é uma Vitória',
        subtitulo: 'Acompanhamos Cada Passo do Crescimento do Seu Filho com Dedicação e Amor',
        imagemFundo: 'hero-img.jpg'
      },
      {
        titulo: 'Construindo um Futuro Brilhante',
        subtitulo: 'Equipe Multidisciplinar Comprometida com o Desenvolvimento Integral do Seu Filho',
        imagemFundo: 'hero-img.jpg'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SOBRE NÓS (About Section)
  // ─────────────────────────────────────────────────────────────────────────
  sobre: {
    titulo: 'Sobre nós',
    texto: 'Vancleid e Victor enfrentaram uma árdua jornada, testemunhando a triste realidade da falta de estrutura e tratamentos de excelência para crianças neuroatípicas, como o seu amado filho Ezequiel. Foi desse desafio que nasceu o sonho do Centro de Reabilitação infantil Singulare.',
    textoBotao: 'Conheça Nossa História',
    linkBotao: '/sobre/historia'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SERVIÇOS (Services Section)
  // ─────────────────────────────────────────────────────────────────────────
  servicos: {
    titulo: 'Construímos um Futuro Brilhante Para Suas Crianças',
    descricao: 'Somos uma clínica de referência em reabilitação de crianças com necessidades especiais e específicas. Nosso objetivo é torná-las capazes de desenvolver o máximo de seu potencial, promovendo mais autonomia nas tarefas diárias, gerando uma maior autoestima através de atendimento lúdico, encantamento e muito amor.',
    beneficios: [
      { icone: 'fas fa-user-md', texto: 'Equipe Qualificada', cor: '#007bff' },
      { icone: 'fas fa-heart', texto: 'Atendimento Personalizado', cor: '#dc3545' },
      { icone: 'fas fa-trophy', texto: 'Resultados Comprovados', cor: '#28a745' },
      { icone: 'fas fa-building', texto: 'Estrutura Moderna', cor: '#17a2b8' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GALERIA/ESTRUTURA (Gallery Section)
  // ─────────────────────────────────────────────────────────────────────────
  estrutura: {
    titulo: 'Conheça Nossa Estrutura',
    descricao: 'Ambientes cuidadosamente planejados e equipamentos de última geração para proporcionar o melhor tratamento e desenvolvimento para cada criança'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // TRATAMENTOS (Treatments Section)
  // ─────────────────────────────────────────────────────────────────────────
  tratamentos: {
    titulo: 'Nossos Tratamentos',
    subtitulo: 'Tratamentos Especializados',
    descricao: 'Oferecemos uma ampla gama de tratamentos especializados para crianças com necessidades especiais'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DEPOIMENTOS (Testimonials Section)
  // ─────────────────────────────────────────────────────────────────────────
  depoimentos: {
    titulo: 'O Que Dizem Nossos Pacientes',
    subtitulo: 'Depoimentos',
    descricao: 'Veja o que os pais e responsáveis dizem sobre nossa clínica'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // EQUIPE (Team Section)
  // ─────────────────────────────────────────────────────────────────────────
  equipeSecao: {
    titulo: 'Nossa Equipe',
    subtitulo: 'Conheça Nossa Equipe',
    descricao: 'Profissionais qualificados e dedicados ao desenvolvimento das crianças'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CONTATO (Contact Section)
  // ─────────────────────────────────────────────────────────────────────────
  contato: {
    titulo: 'Entre em Contato',
    subtitulo: 'Fale Conosco',
    descricao: 'Estamos prontos para atender você e sua família'
  }
};

// 💡 COMO EDITAR OS TEXTOS DAS SEÇÕES:
// 1. Encontre a seção que deseja alterar (ex: SECOES.hero.slides)
// 2. Altere o texto entre aspas "assim"
// 3. Para adicionar um novo slide no Hero, copie um bloco { } e cole
// 4. Salve (Ctrl+S) → Pronto!

// Testimonials moved to src/data/testimonials/testimonialsData.ts

// ════════════════════════════════════════════════════════════════════════════
// ✅ FIM DO ARQUIVO DE CONTEÚDO
// ════════════════════════════════════════════════════════════════════════════

