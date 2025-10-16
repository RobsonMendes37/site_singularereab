/**
 * Dados completos do Blog
 * Com conteúdo expandido em Markdown
 */

import { BlogPost } from '../types/blog.types';

export const blogCategories = [
  { id: '1', name: 'Desenvolvimento Infantil', slug: 'desenvolvimento', icon: 'fas fa-child', color: '#4A90E2' },
  { id: '2', name: 'Tratamentos', slug: 'tratamentos', icon: 'fas fa-heartbeat', color: '#9B59B6' },
  { id: '3', name: 'Dicas para Pais', slug: 'dicas-pais', icon: 'fas fa-hand-holding-heart', color: '#FF6B9D' },
  { id: '4', name: 'Casos de Sucesso', slug: 'casos-sucesso', icon: 'fas fa-star', color: '#F39C12' },
  { id: '5', name: 'Notícias', slug: 'noticias', icon: 'fas fa-newspaper', color: '#1ABC9C' },
];

export const fullBlogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'sinais-atraso-desenvolvimento',
    title: 'Marcos do Desenvolvimento Infantil: Identificando Sinais de Alerta',
    description: 'Conheça os principais marcos do desenvolvimento infantil por faixa etária e aprenda a identificar sinais que indicam a necessidade de avaliação profissional especializada.',
    content: `
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

### 1 a 2 anos
- **Motor:** Anda sozinho, sobe escadas
- **Cognitivo:** Imita ações, aponta objetos
- **Comunicação:** Vocabulário de 20-50 palavras

### 2 a 3 anos
- **Motor:** Corre, chuta bola, pula
- **Social:** Brinca ao lado de outras crianças
- **Comunicação:** Frases de 2-3 palavras

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

4. **1-2 anos:**
   - Não anda aos 18 meses
   - Não fala nenhuma palavra aos 16 meses
   - Perde habilidades já adquiridas

5. **2-3 anos:**
   - Não fala frases simples
   - Não brinca de faz-de-conta
   - Não interage com outras crianças

## 💡 Conduta Recomendada

Ao identificar sinais de alerta no desenvolvimento:

1. **Intervenção Precoce** - A neuroplasticidade cerebral é maior nos primeiros anos de vida, tornando a intervenção precoce fundamental para melhores prognósticos
2. **Registro Sistemático** - Documente comportamentos observados, frequência e contextos de ocorrência
3. **Avaliação Pediátrica** - Consulte o pediatra para triagem inicial e encaminhamentos necessários
4. **Equipe Multidisciplinar** - Busque avaliação especializada com fisioterapeuta, fonoaudiólogo e terapeuta ocupacional

## 🏥 Abordagem Multidisciplinar na Clínica Singulare

Nossa equipe realiza avaliações baseadas em protocolos validados cientificamente:

- **Avaliação Funcional Completa** - Análise detalhada de todas as áreas do desenvolvimento
- **Plano Terapêutico Individualizado** - Objetivos específicos baseados nas necessidades de cada criança
- **Orientação Parental** - Capacitação da família para continuidade do trabalho em casa
- **Reavaliações Periódicas** - Monitoramento contínuo da evolução terapêutica

## 📞 Agende uma Avaliação

A identificação precoce de atrasos no desenvolvimento e a intervenção oportuna são determinantes para o prognóstico funcional. Nossa equipe está preparada para realizar uma avaliação completa e estabelecer o melhor plano terapêutico.

**Referências:** Baseado nas diretrizes da Sociedade Brasileira de Pediatria e protocolos internacionais de desenvolvimento infantil.
    `,
    date: '2025-10-20',
    readTime: 8,
    category: 'Desenvolvimento Infantil',
    tags: ['desenvolvimento', 'atraso', 'pediatria', 'marcos', 'avaliação'],
    author: {
      name: 'Dra. Ana Carolina Silva',
      role: 'Fisioterapeuta Pediátrica',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      bio: 'Especialista em Fisioterapia Pediátrica com mais de 10 anos de experiência em reabilitação infantil.'
    },
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=600&fit=crop',
    views: 2450,
    likes: 189,
    comments: 24,
    published: true,
    featured: true,
    keywords: ['desenvolvimento infantil', 'atraso desenvolvimento', 'marcos desenvolvimento', 'pediatria']
  },
  {
    id: 2,
    slug: 'terapia-ocupacional-desenvolvimento',
    title: 'O Papel da Terapia Ocupacional no Desenvolvimento Infantil',
    description: 'Entenda como a terapia ocupacional atua no desenvolvimento de habilidades motoras, sensoriais e cognitivas, promovendo autonomia e qualidade de vida na infância.',
    content: `
# O Papel da Terapia Ocupacional no Desenvolvimento Infantil

A Terapia Ocupacional (TO) é uma profissão da área da saúde reconhecida pelo COFFITO (Conselho Federal de Fisioterapia e Terapia Ocupacional) que atua na promoção da funcionalidade, autonomia e qualidade de vida. No contexto pediátrico, a TO trabalha com crianças que apresentam dificuldades no desempenho de atividades esperadas para sua faixa etária.

## 🎯 O Que é Terapia Ocupacional?

A TO trabalha para desenvolver, recuperar ou manter as habilidades necessárias para as atividades do dia a dia (ocupações). Para crianças, isso inclui:

- 🎮 Brincar
- ✏️ Escrever e desenhar
- 🍴 Comer sozinho
- 👕 Vestir-se
- 🎒 Atividades escolares
- 🤝 Interações sociais

## 🔍 Áreas de Atuação

### 1. Integração Sensorial
Ajuda crianças que têm dificuldade em processar informações sensoriais (tato, sons, luz, movimento).

**Sinais de problemas sensoriais:**
- Hipersensibilidade a texturas, sons ou luzes
- Busca excessiva por estímulos (gira, pula muito)
- Dificuldade com equilíbrio e coordenação

### 2. Coordenação Motora Fina
Desenvolve habilidades para segurar lápis, recortar, abotoar, amarrar cadarços.

### 3. Coordenação Motora Grossa
Trabalha equilíbrio, força, coordenação bilateral (usar dois lados do corpo juntos).

### 4. Habilidades Cognitivas
Atenção, memória, planejamento motor, resolução de problemas.

### 5. Autonomia nas AVDs
Atividades de Vida Diária: comer, vestir, higiene pessoal.

## 👶 Quem Precisa de TO?

A terapia ocupacional beneficia crianças com:

- ✅ TEA (Transtorno do Espectro Autista)
- ✅ TDAH
- ✅ Síndrome de Down
- ✅ Paralisia Cerebral
- ✅ Atrasos no desenvolvimento
- ✅ Dificuldades de aprendizagem
- ✅ Problemas sensoriais
- ✅ Transtorno de Coordenação do Desenvolvimento

## 🎨 Como Funciona a Terapia?

As sessões são lúdicas e personalizadas:

1. **Avaliação inicial:** Identificação das dificuldades
2. **Objetivos:** Definidos em conjunto com a família
3. **Intervenção:** Atividades terapêuticas através do brincar
4. **Reavaliação:** Acompanhamento dos progressos

### Exemplo de Atividades:

- 🧩 Quebra-cabeças e jogos de encaixe
- 🎨 Pintura e massinha
- 🏃 Circuitos motores
- 🎯 Jogos de pontaria
- 🧱 Construção com blocos

## 📈 Resultados Esperados

Com a TO, a criança desenvolve:

- ✨ Maior independência
- 🎯 Melhor desempenho escolar
- 🤸 Coordenação motora
- 😊 Autoestima e confiança
- 🤝 Habilidades sociais
- 🧠 Atenção e concentração

## 🏥 Terapia Ocupacional na Clínica Singulare

Nossa abordagem terapêutica é fundamentada em evidências científicas e trabalho colaborativo:

**Equipe Multidisciplinar:**
- Fisioterapeutas - Desenvolvimento motor grosso
- Fonoaudiólogos - Comunicação e linguagem
- Psicólogos - Aspectos comportamentais e emocionais
- Terapeutas Ocupacionais - Funcionalidade e autonomia

**Metodologias Utilizadas:**
- Integração Sensorial de Ayres
- Modelo Canadense de Desempenho Ocupacional (COPM)
- Abordagem DIR/Floortime
- Treino de Atividades de Vida Diária (AVDs)

## 📞 Agende uma Avaliação

A intervenção precoce potencializa os resultados terapêuticos. Nossa equipe está preparada para realizar avaliação ocupacional completa e estabelecer objetivos funcionais individualizados.

**Referências:** Baseado nas diretrizes do COFFITO e protocolos internacionais de Terapia Ocupacional Pediátrica.
    `,
    date: '2025-10-15',
    readTime: 7,
    category: 'Tratamentos',
    tags: ['terapia ocupacional', 'TO', 'integração sensorial', 'coordenação motora'],
    author: {
      name: 'Dra. Mariana Oliveira',
      role: 'Terapeuta Ocupacional',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Terapeuta Ocupacional especializada em Integração Sensorial e Desenvolvimento Infantil.'
    },
    image: 'https://images.unsplash.com/photo-1587616211892-e9b1ea5c24b4?w=1200&h=600&fit=crop',
    views: 1890,
    likes: 145,
    comments: 18,
    published: true,
    featured: true,
    keywords: ['terapia ocupacional', 'TO pediátrica', 'integração sensorial', 'coordenação motora']
  },
  {
    id: 3,
    slug: 'autismo-estrategias-dia-a-dia',
    title: 'TEA: Estratégias Práticas para o Cotidiano Familiar',
    description: 'Orientações baseadas em evidências para estabelecer rotinas estruturadas, facilitar a comunicação e desenvolver autonomia em crianças com Transtorno do Espectro Autista.',
    content: `
# TEA: Estratégias Práticas para o Cotidiano Familiar

O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento caracterizada por dificuldades na comunicação social e presença de comportamentos repetitivos e interesses restritos. Cada indivíduo com TEA apresenta um perfil único de habilidades e desafios. Este artigo apresenta estratégias baseadas em evidências científicas para apoiar o desenvolvimento da criança no ambiente familiar.

## 🏠 1. Estruturação de Rotinas

Estudos demonstram que crianças com TEA apresentam melhor regulação comportamental em ambientes previsíveis e estruturados.

### Como Implementar:

**📅 Quadro de Rotina Visual**
- Use fotos ou desenhos das atividades
- Ordem sequencial clara
- Deixe em local visível

**Exemplo de Rotina:**
1. 🌅 Acordar → Escovar dentes → Café
2. 🎒 Escola/Terapias
3. 🍽️ Almoço → Descanso
4. 🎮 Atividade livre → Lanche
5. 🛁 Banho → Jantar → Dormir

**Dica:** Avise com antecedência mudanças na rotina!

## 💬 2. Comunicação Eficaz

### Técnicas que Funcionam:

**🗣️ Linguagem Clara e Simples**
- Frases curtas e diretas
- Uma instrução por vez
- Tom de voz calmo

**❌ Evite:**
"Vamos nos aprontar para ir ao parque depois que você comer e guardar os brinquedos"

**✅ Prefira:**
1. "Coma o lanche"
2. "Guarde os brinquedos"
3. "Vamos ao parque"

### 📱 Comunicação Alternativa

Para crianças não-verbais ou com fala limitada:

- 🖼️ PECS (Picture Exchange Communication System)
- 📲 Aplicativos de comunicação (Proloquo2Go, Let me talk)
- 🤟 Língua de Sinais adaptada
- ✋ Gestos funcionais

## 🎯 3. Ensine Habilidades de Forma Estruturada

### Análise de Tarefas:

Quebre atividades complexas em passos simples.

**Exemplo: Escovar os dentes**
1. Pegar escova e pasta
2. Abrir pasta
3. Colocar pasta na escova
4. Molhar escova
5. Escovar dentes de cima
6. Escovar dentes de baixo
7. Cuspir
8. Enxaguar boca
9. Guardar escova

**Reforce cada passo completado!** ⭐

## 🎮 4. Use Interesses Especiais a Seu Favor

Se a criança ama dinossauros, use isso!

- 📚 Livros sobre dinossauros
- 🎲 Jogos com tema de dinossauros
- ✏️ Desenhar dinossauros
- 🔢 Contar dinossauros (matemática)

**Interesses = Motivação = Aprendizado**

## 😰 5. Gerenciamento de Crises

### Antes da Crise:
- 👀 Identifique gatilhos (sons, multidão, mudanças)
- 🆘 Tenha um "plano de fuga"
- 🧘 Ensine estratégias de autorregulação

### Durante a Crise:
- 😌 Mantenha a calma
- 🔇 Reduza estímulos
- 🤗 Ofereça espaço seguro
- ⏰ Aguarde a criança se acalmar

### Depois da Crise:
- 💙 Acolha sem julgamentos
- 🗣️ Converse quando estiver calma
- 📝 Anote o que aconteceu (gatilhos)

## 🧩 6. Estimule a Interação Social

### Atividades Recomendadas:

- 🎭 Brincadeiras de faz-de-conta simples
- 🎲 Jogos de turnos (um de cada vez)
- 🎵 Músicas com gestos
- 🤝 Atividades em dupla (jogar bola, montar puzzle)

**Dica:** Comece com um adulto, depois introduza pares gradualmente.

## 🏆 7. Reforce Comportamentos Positivos

### Sistema de Recompensas:

- ⭐ Quadro de estrelas
- 🎁 Token economy (fichas trocadas por prêmios)
- 👏 Elogios específicos
- 🎮 Tempo extra de atividade favorita

**Reforce imediatamente!** A criança precisa conectar ação → consequência.

## 🆘 8. Cuide de Você Também!

Pais precisam estar bem para cuidar bem:

- 🧘 Pratique autocuidado
- 🤝 Busque apoio (grupos, terapia)
- 📚 Eduque-se sobre TEA
- ⏰ Reserve tempo para si

## 🏥 Abordagem Multidisciplinar na Clínica Singulare

O tratamento do TEA requer intervenção integrada e baseada em evidências científicas.

**Nossa Equipe Oferece:**
- **Avaliação Diagnóstica** - Protocolos padronizados (CARS, M-CHAT, ADI-R)
- **Plano Terapêutico Individualizado** - Baseado no perfil funcional da criança
- **Orientação Parental** - Capacitação para generalização de habilidades
- **Monitoramento Contínuo** - Reavaliações periódicas e ajustes terapêuticos

**Metodologias Utilizadas:**
- Análise do Comportamento Aplicada (ABA)
- Modelo Denver de Intervenção Precoce (ESDM)
- Integração Sensorial
- Comunicação Alternativa e Aumentativa (CAA)

## 📞 Agende uma Avaliação

A intervenção precoce e intensiva é fundamental para o desenvolvimento de habilidades funcionais em crianças com TEA. Nossa equipe multidisciplinar está preparada para oferecer suporte especializado à sua família.

**Referências:** Baseado nas diretrizes da Sociedade Brasileira de Pediatria e protocolos internacionais para intervenção em TEA (CDC, NICE Guidelines).
    `,
    date: '2025-10-10',
    readTime: 10,
    category: 'Dicas para Pais',
    tags: ['autismo', 'TEA', 'dicas', 'rotina', 'comportamento'],
    author: {
      name: 'Dra. Juliana Costa',
      role: 'Psicóloga Infantil',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      bio: 'Psicóloga especializada em TEA e Análise do Comportamento Aplicada (ABA).'
    },
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=1200&h=600&fit=crop',
    views: 3120,
    likes: 278,
    comments: 32,
    published: true,
    featured: true,
    keywords: ['autismo', 'TEA', 'estratégias autismo', 'rotina autista', 'dicas pais']
  }
];

// Função helper para buscar posts
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return fullBlogPosts.find(post => post.slug === slug);
};

// Função para filtrar posts
export const filterBlogPosts = (filters: {
  category?: string;
  tag?: string;
  search?: string;
}): BlogPost[] => {
  let filtered = [...fullBlogPosts];

  if (filters.category) {
    filtered = filtered.filter(post => post.category === filters.category);
  }

  if (filters.tag) {
    filtered = filtered.filter(post => post.tags?.includes(filters.tag!));
  }

  if (filters.search) {
    const search = filters.search.toLowerCase();
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search) ||
      post.content.toLowerCase().includes(search)
    );
  }

  return filtered;
};

// Posts relacionados
export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return fullBlogPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit);
};

