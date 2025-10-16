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

// ═══════════════════════════════════════════════════════════════════════════
// 👥 EQUIPE
// ═══════════════════════════════════════════════════════════════════════════

export const EQUIPE = [
  {
    id: 1,
    nome: 'Dra. Ana Carolina Silva',
    cargo: 'Fisioterapeuta Pediátrica',
    foto: 'team-1.jpg',  // Nome do arquivo da foto (coloque na pasta public/img/)
    descricao: 'Especialista em Fisioterapia Pediátrica com mais de 10 anos de experiência em reabilitação infantil. Formada pela USP com especialização em Neurologia Pediátrica.',
    especialidades: [
      'Fisioterapia Neurológica',
      'Desenvolvimento Motor',
      'Paralisia Cerebral',
      'Atrasos Motores'
    ],
    facebook: 'https://facebook.com/exemplo',
    instagram: 'https://instagram.com/exemplo',
    linkedin: 'https://linkedin.com/in/exemplo'
  },
  {
    id: 2,
    nome: 'Dr. Carlos Eduardo Santos',
    cargo: 'Terapeuta Ocupacional',
    foto: 'team-2.jpg',
    descricao: 'Terapeuta Ocupacional especializado em Integração Sensorial e Autismo. Pós-graduado em Neuropsicologia e Reabilitação Cognitiva.',
    especialidades: [
      'Integração Sensorial',
      'Transtorno do Espectro Autista',
      'Atividades de Vida Diária',
      'Coordenação Motora Fina'
    ],
    facebook: 'https://facebook.com/exemplo',
    instagram: 'https://instagram.com/exemplo',
    linkedin: 'https://linkedin.com/in/exemplo'
  },
  {
    id: 3,
    nome: 'Dra. Maria Fernanda Lima',
    cargo: 'Fonoaudióloga',
    foto: 'team-3.jpg',
    descricao: 'Fonoaudióloga com expertise em Linguagem e Comunicação Infantil. Especialista em Motricidade Orofacial e Disfagia Pediátrica.',
    especialidades: [
      'Atrasos de Linguagem',
      'Distúrbios de Fala',
      'Dificuldades de Alimentação',
      'Comunicação Alternativa'
    ],
    facebook: 'https://facebook.com/exemplo',
    instagram: 'https://instagram.com/exemplo',
    linkedin: 'https://linkedin.com/in/exemplo'
  },
  {
    id: 4,
    nome: 'Dra. Juliana Oliveira',
    cargo: 'Psicóloga Infantil',
    foto: 'team-4.jpg',
    descricao: 'Psicóloga Clínica com foco em Desenvolvimento Infantil e Análise do Comportamento Aplicada (ABA). Especialista em intervenções comportamentais.',
    especialidades: [
      'Psicologia Infantil',
      'Terapia ABA',
      'Desenvolvimento Socioemocional',
      'Orientação Parental'
    ],
    facebook: 'https://facebook.com/exemplo',
    instagram: 'https://instagram.com/exemplo',
    linkedin: 'https://linkedin.com/in/exemplo'
  }
];

// 💡 COMO ADICIONAR NOVO MEMBRO DA EQUIPE:
// Copie todo o bloco de { } acima, cole abaixo do último e altere as informações.
// Não esqueça de adicionar uma vírgula depois do } anterior!

// ═══════════════════════════════════════════════════════════════════════════
// 💊 TRATAMENTOS
// ═══════════════════════════════════════════════════════════════════════════

export const TRATAMENTOS = [
  {
    id: 1,
    slug: 'fisioterapia-pediatrica',  // NÃO ALTERAR (usado na URL)
    titulo: 'Fisioterapia Pediátrica',
    icone: 'fas fa-child',  // Ícone (não mexer)
    cor: '#4A90E2',  // Cor principal
    descricaoCurta: 'Promovendo o desenvolvimento motor e funcional das crianças',
    descricaoCompleta: 'A Fisioterapia Pediátrica é uma especialidade que atua na prevenção, avaliação e tratamento de alterações no desenvolvimento motor de bebês, crianças e adolescentes. Trabalhamos com técnicas específicas para cada faixa etária, respeitando as características individuais de cada criança e promovendo o máximo de independência funcional possível.',
    comoFunciona: 'O tratamento fisioterapêutico é realizado através de atividades lúdicas e exercícios específicos que estimulam o desenvolvimento motor. Cada sessão é planejada individualmente, considerando as necessidades, objetivos e potencialidades da criança. Utilizamos recursos como bolas terapêuticas, rolos, espelhos, brinquedos e equipamentos especializados.',
    etapas: [
      'Avaliação: Análise completa do desenvolvimento motor e funcional',
      'Planejamento: Definição de objetivos terapêuticos junto à família',
      'Intervenção: Sessões individualizadas com atividades lúdicas',
      'Reavaliação: Acompanhamento contínuo dos progressos',
      'Orientação: Instruções para atividades em casa'
    ],
    beneficios: [
      'Melhora do tônus muscular e força',
      'Desenvolvimento do equilíbrio e coordenação',
      'Ganho de independência nas atividades diárias',
      'Prevenção de deformidades e contraturas',
      'Melhora da postura e alinhamento corporal',
      'Estimulação do desenvolvimento motor global'
    ],
    imagem: 'fisioterapia-pediatrica.jpg'
  },
  {
    id: 2,
    slug: 'terapia-ocupacional',
    titulo: 'Terapia Ocupacional',
    icone: 'fas fa-puzzle-piece',
    cor: '#9B59B6',
    descricaoCurta: 'Desenvolvendo habilidades para as atividades do dia a dia',
    descricaoCompleta: 'A Terapia Ocupacional promove o desenvolvimento das habilidades necessárias para a realização das atividades cotidianas, escolares e de lazer. Trabalhamos aspectos como coordenação motora fina, integração sensorial, autonomia nas atividades de vida diária (alimentação, vestuário, higiene) e habilidades cognitivas.',
    comoFunciona: 'As sessões são realizadas de forma lúdica e significativa para a criança, utilizando atividades e brincadeiras que estimulam as áreas que precisam ser desenvolvidas. Podem incluir jogos, atividades de artes, brincadeiras sensoriais, treino de atividades funcionais e uso de tecnologias assistivas quando necessário.',
    etapas: [
      'Avaliação: Análise das habilidades funcionais e sensoriais',
      'Objetivos: Definição de metas terapêuticas personalizadas',
      'Terapia: Intervenções através de atividades significativas',
      'Adaptações: Orientações sobre recursos e adaptações',
      'Acompanhamento: Monitoramento contínuo e ajustes'
    ],
    beneficios: [
      'Melhora da coordenação motora fina',
      'Desenvolvimento de habilidades de autocuidado',
      'Melhor processamento sensorial',
      'Aumento da atenção e concentração',
      'Maior independência nas atividades escolares',
      'Desenvolvimento de habilidades sociais'
    ],
    imagem: 'terapia-ocupacional.jpg'
  },
  {
    id: 3,
    slug: 'fonoaudiologia',
    titulo: 'Fonoaudiologia',
    icone: 'fas fa-comments',
    cor: '#FF6B9D',
    descricaoCurta: 'Estimulando a comunicação e linguagem',
    descricaoCompleta: 'A Fonoaudiologia atua na prevenção, avaliação, diagnóstico e tratamento dos distúrbios da comunicação humana. Trabalhamos com atrasos de linguagem, dificuldades de fala, gagueira, alterações de voz, dificuldades de alimentação e deglutição, além de estimulação precoce da linguagem em bebês e crianças pequenas.',
    comoFunciona: 'O tratamento fonoaudiológico é realizado através de atividades lúdicas e exercícios específicos que estimulam a comunicação oral e escrita. Utilizamos jogos, brincadeiras, músicas, livros e recursos tecnológicos para tornar as sessões atrativas e eficazes. Também orientamos a família sobre como estimular a comunicação no dia a dia.',
    etapas: [
      'Triagem: Avaliação inicial da comunicação e linguagem',
      'Diagnóstico: Identificação das dificuldades específicas',
      'Planejamento: Elaboração do plano terapêutico',
      'Intervenção: Sessões com atividades e exercícios direcionados',
      'Orientação: Instruções para estimulação em casa'
    ],
    beneficios: [
      'Melhora da articulação e clareza da fala',
      'Ampliação do vocabulário',
      'Desenvolvimento da linguagem receptiva e expressiva',
      'Melhora das habilidades de leitura e escrita',
      'Facilitação da comunicação e interação social',
      'Tratamento de dificuldades alimentares'
    ],
    imagem: 'fonoaudiologia.jpg'
  },
  {
    id: 4,
    slug: 'psicologia-infantil',
    titulo: 'Psicologia Infantil',
    icone: 'fas fa-heart',
    cor: '#E74C3C',
    descricaoCurta: 'Cuidando do desenvolvimento emocional e comportamental',
    descricaoCompleta: 'A Psicologia Infantil foca no desenvolvimento emocional, social e comportamental da criança. Trabalhamos questões como ansiedade, medos, dificuldades de adaptação, problemas de comportamento, relacionamento familiar e escolar, além de orientação parental e apoio em situações de luto, separação dos pais e outras mudanças significativas.',
    comoFunciona: 'O atendimento psicológico infantil é realizado principalmente através da ludoterapia, utilizando brincadeiras, desenhos, jogos e histórias como ferramentas terapêuticas. As sessões são adaptadas à idade e necessidades de cada criança, criando um ambiente seguro e acolhedor para a expressão de sentimentos e elaboração de conflitos.',
    etapas: [
      'Acolhimento: Primeiro contato com a criança e família',
      'Avaliação: Compreensão da demanda e dinâmica familiar',
      'Vínculo: Estabelecimento de relação terapêutica segura',
      'Intervenção: Sessões lúdicas e orientação aos pais',
      'Acompanhamento: Monitoramento da evolução emocional'
    ],
    beneficios: [
      'Melhora da autoestima e autoconfiança',
      'Desenvolvimento de habilidades socioemocionais',
      'Redução de ansiedade e medos',
      'Melhora no comportamento e autorregulação',
      'Fortalecimento dos vínculos familiares',
      'Maior adaptação escolar e social'
    ],
    imagem: 'psicologia-infantil.jpg'
  },
  {
    id: 5,
    slug: 'psicopedagogia',
    titulo: 'Psicopedagogia',
    icone: 'fas fa-book-reader',
    cor: '#F39C12',
    descricaoCurta: 'Auxiliando no processo de aprendizagem',
    descricaoCompleta: 'A Psicopedagogia atua na prevenção e intervenção das dificuldades de aprendizagem. Trabalhamos com crianças que apresentam desafios no processo de alfabetização, leitura, escrita, matemática e outras áreas do conhecimento. Também atuamos com distúrbios como dislexia, discalculia e TDAH no contexto escolar.',
    comoFunciona: 'O trabalho psicopedagógico envolve uma avaliação detalhada do processo de aprendizagem da criança, identificando suas potencialidades e dificuldades. A intervenção é feita através de atividades e estratégias específicas que facilitam a aprendizagem, sempre respeitando o ritmo e o estilo de aprender de cada criança.',
    etapas: [
      'Avaliação: Análise do processo de aprendizagem',
      'Diagnóstico: Identificação das dificuldades específicas',
      'Intervenção: Atividades focadas nas áreas defasadas',
      'Orientação Escolar: Parceria com a escola da criança',
      'Acompanhamento: Monitoramento do progresso acadêmico'
    ],
    beneficios: [
      'Melhora no desempenho escolar',
      'Desenvolvimento de estratégias de estudo',
      'Aumento da motivação para aprender',
      'Fortalecimento da atenção e concentração',
      'Melhora da autoestima acadêmica',
      'Desenvolvimento do raciocínio lógico'
    ],
    imagem: 'Psicopedagogia.jpg'
  },
  {
    id: 6,
    slug: 'metodo-aba',
    titulo: 'Método ABA',
    icone: 'fas fa-clipboard-check',
    cor: '#8E44AD',
    descricaoCurta: 'Análise do Comportamento Aplicada ao autismo',
    descricaoCompleta: 'O Método ABA (Applied Behavior Analysis) é uma abordagem científica que utiliza princípios da análise do comportamento para ensinar novas habilidades e reduzir comportamentos inadequados. É reconhecido mundialmente como o tratamento mais eficaz para crianças com Transtorno do Espectro Autista (TEA).',
    comoFunciona: 'O tratamento ABA é intensivo e individualizado. Através de tentativas discretas, reforço positivo e análise de dados, ensinamos habilidades acadêmicas, sociais, de comunicação e autocuidado. Cada comportamento é analisado e trabalhado sistematicamente, com metas específicas e mensuráveis.',
    etapas: [
      'Avaliação: Análise funcional do comportamento',
      'Programa: Elaboração de plano de ensino individualizado',
      'Intervenção: Sessões estruturadas com técnicas ABA',
      'Registro: Coleta de dados sobre os progressos',
      'Supervisão: Acompanhamento por analista do comportamento'
    ],
    beneficios: [
      'Desenvolvimento de habilidades de comunicação',
      'Redução de comportamentos desafiadores',
      'Aumento da autonomia e independência',
      'Melhora das habilidades sociais',
      'Desenvolvimento de repertório acadêmico',
      'Generalização das habilidades aprendidas'
    ],
    imagem: 'foto-Método-ABA.jpg'
  }
];

// 💡 COMO ADICIONAR NOVO TRATAMENTO:
// Copie todo o bloco { } de um tratamento, cole no final e altere as informações.

// ═══════════════════════════════════════════════════════════════════════════
// 📝 POSTS DO BLOG (RESUMIDOS - para a lista)
// ═══════════════════════════════════════════════════════════════════════════

export const POSTS_BLOG = [
  {
    id: 1,
    slug: 'sinais-atraso-desenvolvimento',  // NÃO ALTERAR (usado na URL)
    titulo: 'Marcos do Desenvolvimento Infantil: Identificando Sinais de Alerta',
    resumo: 'Conheça os principais marcos do desenvolvimento infantil por faixa etária e aprenda a identificar sinais que indicam a necessidade de avaliação profissional especializada.',
    categoria: 'Desenvolvimento Infantil',
    data: '15 Jan 2025',
    tempoLeitura: 8,  // minutos
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    autor: {
      nome: 'Dra. Ana Carolina Silva',
      cargo: 'Fisioterapeuta Pediátrica',
      foto: 'https://randomuser.me/api/portraits/women/1.jpg'
    }
  },
  {
    id: 2,
    slug: 'importancia-terapia-ocupacional',
    titulo: 'A Importância da Terapia Ocupacional no Desenvolvimento Infantil',
    resumo: 'Entenda como a Terapia Ocupacional pode auxiliar crianças com dificuldades nas atividades do dia a dia, coordenação motora e integração sensorial.',
    categoria: 'Tratamentos',
    data: '20 Jan 2025',
    tempoLeitura: 6,
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    autor: {
      nome: 'Dr. Carlos Eduardo Santos',
      cargo: 'Terapeuta Ocupacional',
      foto: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  },
  {
    id: 3,
    slug: 'dicas-estimulacao-linguagem',
    titulo: '10 Dicas para Estimular a Linguagem do Seu Filho em Casa',
    resumo: 'Aprenda estratégias práticas e eficazes para estimular o desenvolvimento da linguagem e comunicação das crianças no ambiente familiar.',
    categoria: 'Dicas para Pais',
    data: '25 Jan 2025',
    tempoLeitura: 5,
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    autor: {
      nome: 'Dra. Maria Fernanda Lima',
      cargo: 'Fonoaudióloga',
      foto: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  }
];

// 💡 COMO ADICIONAR NOVO POST:
// Copie todo o bloco { } de um post, cole no final e altere as informações.

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

// ═══════════════════════════════════════════════════════════════════════════
// 💬 DEPOIMENTOS COMPLETOS
// ═══════════════════════════════════════════════════════════════════════════

export const DEPOIMENTOS = [
  {
    id: 1,
    nome: 'Mariana Oliveira',
    profissao: 'Mãe do Matheus, 6 anos',
    depoimento: 'Quando descobrimos que nosso filho tinha autismo, ficamos perdidos. A Clínica Singulare nos acolheu de uma forma incrível! Hoje, após 2 anos de tratamento, o Matheus já consegue se comunicar melhor, brincar com outras crianças e sua autonomia aumentou significativamente. A equipe multidisciplinar trabalha de forma integrada e isso faz toda a diferença. Somos eternamente gratos!',
    avaliacao: 5,
    foto: 'testimonial-1.jpg'
  },
  {
    id: 2,
    nome: 'Alessandro Costa',
    profissao: 'Pai da Sofia, 4 anos',
    depoimento: 'Minha filha tinha grandes dificuldades na fala e isso afetava sua autoestima. Na Clínica Singulare, encontramos profissionais dedicados que usam técnicas modernas e eficazes. Em 8 meses de fonoaudiologia, a evolução foi impressionante! Hoje ela conversa, canta e se expressa com confiança. O ambiente acolhedor e lúdico faz com que ela ame vir para as sessões. Recomendo de coração!',
    avaliacao: 5,
    foto: 'testimonial-2.jpg'
  },
  {
    id: 3,
    nome: 'Juliana Ferreira',
    profissao: 'Mãe do Lucas, 5 anos',
    depoimento: 'O Lucas nasceu com paralisia cerebral e os médicos disseram que ele teria muitas limitações. Mas na Clínica Singulare, encontramos esperança e um tratamento excepcional! A fisioterapia e a terapia ocupacional transformaram a vida dele. Hoje ele já consegue andar com apoio, segurar objetos e está muito mais independente. A dedicação dos profissionais é algo que nos emociona todos os dias. Obrigada por cuidarem do nosso filho com tanto amor!',
    avaliacao: 5,
    foto: 'testimonial-3.jpg'
  },
  {
    id: 4,
    nome: 'Carlos Mendes',
    profissao: 'Pai do Gabriel, 7 anos',
    depoimento: 'Como pai de uma criança com TDAH, eu estava desesperado vendo as dificuldades do meu filho na escola. A Clínica Singulare nos ofereceu um plano de tratamento personalizado com psicologia, psicopedagogia e terapia ocupacional. Em 1 ano, o Gabriel melhorou muito sua concentração, está com notas melhores e mais importante, está feliz! A estrutura da clínica é maravilhosa e os profissionais são altamente qualificados. Investimento que vale cada centavo!',
    avaliacao: 5,
    foto: 'testimonial-1.jpg'
  },
  {
    id: 5,
    nome: 'Fernanda Alves',
    profissao: 'Mãe da Isabela, 3 anos',
    depoimento: 'A Isabela tinha atraso no desenvolvimento motor e não conseguia sentar sozinha com 2 anos. Chegamos na Clínica Singulare angustiados e fomos recebidos com muito carinho e profissionalismo. O trabalho da fisioterapeuta é sensacional! Hoje, com 3 anos, minha filha já anda, corre e brinca como qualquer criança da idade dela. É emocionante ver essa transformação! A clínica mudou nossas vidas e só tenho gratidão.',
    avaliacao: 5,
    foto: 'testimonial-2.jpg'
  },
  {
    id: 6,
    nome: 'Roberto Santos',
    profissao: 'Pai do Miguel, 8 anos',
    depoimento: 'O Miguel foi diagnosticado com síndrome de Down e desde bebê fazemos acompanhamento na Clínica Singulare. O trabalho integrado entre fisioterapia, fonoaudiologia e terapia ocupacional é fundamental para o desenvolvimento dele. Hoje ele está alfabetizado, se comunica super bem e é muito independente nas atividades diárias. A equipe é como uma família para nós! A estrutura da clínica é excelente e o ambiente é super acolhedor. Recomendo com toda certeza!',
    avaliacao: 5,
    foto: 'testimonial-3.jpg'
  },
  {
    id: 7,
    nome: 'Fernanda Lima',
    profissao: 'Mãe da Alice, 5 anos',
    depoimento: 'Ambiente acolhedor e profissionais extremamente competentes. A Alice se sente segura e feliz aqui. Gratidão por todo o cuidado e carinho!',
    avaliacao: 5,
    foto: 'testimonial-1.jpg'
  },
  {
    id: 8,
    nome: 'Paulo Mendes',
    profissao: 'Pai do Henrique, 6 anos',
    depoimento: 'A evolução do meu filho tem sido surpreendente! A equipe é muito dedicada e sempre nos mantém informados sobre cada progresso. Excelente trabalho!',
    avaliacao: 5,
    foto: 'testimonial-2.jpg'
  },
  {
    id: 9,
    nome: 'Camila Rodrigues',
    profissao: 'Mãe da Beatriz, 4 anos',
    depoimento: 'Melhor escolha que fizemos! Os profissionais são altamente capacitados e realmente se importam com o bem-estar das crianças. Muito obrigada!',
    avaliacao: 5,
    foto: 'testimonial-3.jpg'
  }
];

// 💡 COMO ADICIONAR NOVO DEPOIMENTO:
// Copie um bloco { } de depoimento, cole no final e altere as informações

// ════════════════════════════════════════════════════════════════════════════
// ✅ FIM DO ARQUIVO DE CONTEÚDO
// ════════════════════════════════════════════════════════════════════════════

