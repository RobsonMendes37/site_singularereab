/**
 * @deprecated Este arquivo está OBSOLETO e não deve mais ser usado!
 * 
 * ⚠️ ATENÇÃO: Use TRATAMENTOS de '../content.ts' em vez deste arquivo.
 * 
 * Este arquivo foi mantido temporariamente para referência, mas TODOS os componentes
 * já foram migrados para usar os dados centralizados em src/content.ts.
 * 
 * Não adicione novos tratamentos aqui! Use o arquivo content.ts.
 */

export interface Treatment {
  id: number;
  slug: string;
  title: string;
  icon: string;
  color: string;
  shortDescription: string;
  fullDescription: string;
  howItWorks: string;
  steps: string[];
  benefits: string[];
  image: string;
}

export const treatments: Treatment[] = [
  {
    id: 1,
    slug: 'fisioterapia-pediatrica',
    title: 'Fisioterapia Pediátrica',
    icon: 'fas fa-child',
    color: '#4A90E2',
    shortDescription: 'Promovendo o desenvolvimento motor e funcional das crianças',
    fullDescription: 'A Fisioterapia Pediátrica é uma especialidade que atua na prevenção, avaliação e tratamento de alterações no desenvolvimento motor de bebês, crianças e adolescentes. Trabalhamos com técnicas específicas para cada faixa etária, respeitando as características individuais de cada criança e promovendo o máximo de independência funcional possível.',
    howItWorks: 'O tratamento fisioterapêutico é realizado através de atividades lúdicas e exercícios específicos que estimulam o desenvolvimento motor. Cada sessão é planejada individualmente, considerando as necessidades, objetivos e potencialidades da criança. Utilizamos recursos como bolas terapêuticas, rolos, espelhos, brinquedos e equipamentos especializados.',
    steps: [
      'Avaliação: Análise completa do desenvolvimento motor e funcional',
      'Planejamento: Definição de objetivos terapêuticos junto à família',
      'Intervenção: Sessões individualizadas com atividades lúdicas',
      'Reavaliação: Acompanhamento contínuo dos progressos',
      'Orientação: Instruções para atividades em casa'
    ],
    benefits: [
      'Melhora do tônus muscular e força',
      'Desenvolvimento do equilíbrio e coordenação',
      'Ganho de independência nas atividades diárias',
      'Prevenção de deformidades e contraturas',
      'Melhora da postura e alinhamento corporal',
      'Estimulação do desenvolvimento motor global'
    ],
    image: 'https://images.unsplash.com/photo-1551601651-bc60f254d532?w=800'
  },
  {
    id: 2,
    slug: 'terapia-ocupacional',
    title: 'Terapia Ocupacional',
    icon: 'fas fa-puzzle-piece',
    color: '#9B59B6',
    shortDescription: 'Desenvolvendo habilidades para as atividades do dia a dia',
    fullDescription: 'A Terapia Ocupacional promove o desenvolvimento das habilidades necessárias para a realização das atividades cotidianas, escolares e de lazer. Trabalhamos aspectos como coordenação motora fina, integração sensorial, autonomia nas atividades de vida diária (alimentação, vestuário, higiene) e habilidades cognitivas.',
    howItWorks: 'As sessões são realizadas de forma lúdica e significativa para a criança, utilizando atividades e brincadeiras que estimulam as áreas que precisam ser desenvolvidas. Podem incluir jogos, atividades de artes, brincadeiras sensoriais, treino de atividades funcionais e uso de tecnologias assistivas quando necessário.',
    steps: [
      'Avaliação: Análise das habilidades funcionais e sensoriais',
      'Objetivos: Definição de metas terapêuticas personalizadas',
      'Terapia: Intervenções através de atividades significativas',
      'Adaptações: Orientações sobre recursos e adaptações',
      'Acompanhamento: Monitoramento contínuo e ajustes'
    ],
    benefits: [
      'Melhora da coordenação motora fina',
      'Desenvolvimento de habilidades de autocuidado',
      'Melhor processamento sensorial',
      'Aumento da atenção e concentração',
      'Maior independência nas atividades escolares',
      'Desenvolvimento de habilidades sociais'
    ],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800'
  },
  {
    id: 3,
    slug: 'fonoaudiologia',
    title: 'Fonoaudiologia',
    icon: 'fas fa-comments',
    color: '#FF6B9D',
    shortDescription: 'Estimulando a comunicação e linguagem',
    fullDescription: 'A Fonoaudiologia atua na prevenção, avaliação, diagnóstico e tratamento dos distúrbios da comunicação humana. Trabalhamos com atrasos de linguagem, dificuldades de fala, gagueira, alterações de voz, dificuldades de alimentação e deglutição, além de estimulação precoce da linguagem em bebês e crianças pequenas.',
    howItWorks: 'O tratamento fonoaudiológico é realizado através de atividades lúdicas e exercícios específicos que estimulam a comunicação oral e escrita. Utilizamos jogos, brincadeiras, músicas, livros e recursos tecnológicos para tornar as sessões atrativas e eficazes. Também orientamos a família sobre como estimular a comunicação no dia a dia.',
    steps: [
      'Avaliação: Análise completa da comunicação e linguagem',
      'Diagnóstico: Identificação das dificuldades específicas',
      'Planejamento: Definição da abordagem terapêutica',
      'Intervenção: Sessões focadas nos objetivos definidos',
      'Orientação Familiar: Estratégias para uso em casa'
    ],
    benefits: [
      'Melhora da articulação e pronúncia das palavras',
      'Ampliação do vocabulário',
      'Desenvolvimento da linguagem expressiva e receptiva',
      'Melhora da fluência da fala',
      'Estimulação da comunicação social',
      'Adequação da deglutição e mastigação'
    ],
    image: 'https://images.unsplash.com/photo-1587616211892-e9b1ea5c24b4?w=800'
  },
  {
    id: 4,
    slug: 'psicologia-infantil',
    title: 'Psicologia Infantil',
    icon: 'fas fa-brain',
    color: '#1ABC9C',
    shortDescription: 'Cuidando da saúde emocional e comportamental',
    fullDescription: 'A Psicologia Infantil cuida da saúde mental e emocional de crianças e adolescentes, auxiliando no desenvolvimento de habilidades socioemocionais, manejo de comportamentos desafiadores, ansiedade, medos, dificuldades escolares e questões relacionadas ao desenvolvimento. Oferecemos um espaço seguro e acolhedor para a criança se expressar.',
    howItWorks: 'A psicoterapia infantil utiliza o brincar como principal ferramenta terapêutica. Através de jogos, desenhos, histórias e brincadeiras, a criança expressa seus sentimentos, medos e conflitos. O psicólogo também trabalha em parceria com a família, oferecendo orientação parental e estratégias para lidar com as dificuldades no dia a dia.',
    steps: [
      'Acolhimento: Primeira consulta com criança e família',
      'Avaliação: Compreensão das questões emocionais e comportamentais',
      'Plano Terapêutico: Definição dos objetivos e abordagem',
      'Psicoterapia: Sessões individuais com a criança',
      'Orientação Parental: Encontros com os pais para suporte'
    ],
    benefits: [
      'Melhora da autoestima e autoconfiança',
      'Desenvolvimento de habilidades sociais',
      'Regulação emocional adequada',
      'Redução de comportamentos desafiadores',
      'Melhora no rendimento escolar',
      'Fortalecimento do vínculo familiar'
    ],
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800'
  },
  {
    id: 5,
    slug: 'psicopedagogia',
    title: 'Psicopedagogia',
    icon: 'fas fa-book-reader',
    color: '#F39C12',
    shortDescription: 'Auxiliando no processo de aprendizagem',
    fullDescription: 'A Psicopedagogia atua na prevenção e intervenção das dificuldades de aprendizagem. Trabalhamos com crianças que apresentam desafios no processo de alfabetização, leitura, escrita, matemática e outras áreas do conhecimento. Também atuamos com distúrbios como dislexia, discalculia e TDAH no contexto escolar.',
    howItWorks: 'O trabalho psicopedagógico envolve uma avaliação detalhada do processo de aprendizagem da criança, identificando suas potencialidades e dificuldades. A intervenção é feita através de atividades e estratégias específicas que facilitam a aprendizagem, sempre respeitando o ritmo e o estilo de aprender de cada criança.',
    steps: [
      'Avaliação: Análise do processo de aprendizagem',
      'Diagnóstico: Identificação das dificuldades específicas',
      'Intervenção: Atividades focadas nas áreas defasadas',
      'Orientação Escolar: Parceria com a escola da criança',
      'Acompanhamento: Monitoramento do progresso acadêmico'
    ],
    benefits: [
      'Melhora no desempenho escolar',
      'Desenvolvimento de estratégias de estudo',
      'Aumento da motivação para aprender',
      'Fortalecimento da atenção e concentração',
      'Melhora da autoestima acadêmica',
      'Desenvolvimento do raciocínio lógico'
    ],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800'
  },
  
  
  
  
  {
    id: 10,
    slug: 'metodo-aba',
    title: 'Método ABA',
    icon: 'fas fa-clipboard-check',
    color: '#8E44AD',
    shortDescription: 'Análise do Comportamento Aplicada ao autismo',
    fullDescription: 'O Método ABA (Applied Behavior Analysis) é uma abordagem científica que utiliza princípios da análise do comportamento para ensinar novas habilidades e reduzir comportamentos inadequados. É reconhecido mundialmente como o tratamento mais eficaz para crianças com Transtorno do Espectro Autista (TEA).',
    howItWorks: 'O tratamento ABA é intensivo e individualizado. Através de tentativas discretas, reforço positivo e análise de dados, ensinamos habilidades acadêmicas, sociais, de comunicação e autocuidado. Cada comportamento é analisado e trabalhado sistematicamente, com metas específicas e mensuráveis.',
    steps: [
      'Avaliação: Análise funcional do comportamento',
      'Programa: Elaboração de plano de ensino individualizado',
      'Intervenção: Sessões estruturadas com técnicas ABA',
      'Registro: Coleta de dados sobre os progressos',
      'Supervisão: Acompanhamento por analista do comportamento'
    ],
    benefits: [
      'Desenvolvimento de habilidades de comunicação',
      'Redução de comportamentos desafiadores',
      'Aumento da autonomia e independência',
      'Melhora das habilidades sociais',
      'Desenvolvimento de repertório acadêmico',
      'Generalização das habilidades aprendidas'
    ],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800'
  }
];

