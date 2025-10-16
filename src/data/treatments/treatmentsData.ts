/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DOS TRATAMENTOS
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para adicionar novo tratamento: copie um bloco { } e cole no final
 * 3. Para remover tratamento: delete o bloco { } inteiro
 * 4. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: 
 * - NÃO altere o "slug" (usado na URL)
 * - NÃO altere as chaves como "id:", "titulo:", etc.
 */

export interface Treatment {
  id: number;
  slug: string; // NÃO ALTERAR - usado na URL
  titulo: string;
  icone: string; // Classe do FontAwesome
  cor: string;   // Cor em hexadecimal
  descricaoCurta: string;
  descricaoCompleta: string;
  comoFunciona: string;
  etapas: string[];
  beneficios: string[];
  imagem: string; // Nome do arquivo na pasta src/assets/images/
}

export const treatmentsData: Treatment[] = [
  {
    id: 1,
    slug: "fisioterapia-pediatrica", // NÃO ALTERAR
    titulo: "Fisioterapia Pediátrica",
    icone: "fas fa-child",
    cor: "#4A90E2",
    descricaoCurta: "Promovendo o desenvolvimento motor e funcional das crianças",
    descricaoCompleta: "A Fisioterapia Pediátrica é uma especialidade que atua na prevenção, avaliação e tratamento de alterações no desenvolvimento motor de bebês, crianças e adolescentes. Trabalhamos com técnicas específicas para cada faixa etária, respeitando as características individuais de cada criança e promovendo o máximo de independência funcional possível.",
    comoFunciona: "O tratamento fisioterapêutico é realizado através de atividades lúdicas e exercícios específicos que estimulam o desenvolvimento motor. Cada sessão é planejada individualmente, considerando as necessidades, objetivos e potencialidades da criança. Utilizamos recursos como bolas terapêuticas, rolos, espelhos, brinquedos e equipamentos especializados.",
    etapas: [
      "Avaliação: Análise completa do desenvolvimento motor e funcional",
      "Planejamento: Definição de objetivos terapêuticos junto à família",
      "Intervenção: Sessões individualizadas com atividades lúdicas",
      "Reavaliação: Acompanhamento contínuo dos progressos",
      "Orientação: Instruções para atividades em casa"
    ],
    beneficios: [
      "Melhora do tônus muscular e força",
      "Desenvolvimento do equilíbrio e coordenação",
      "Ganho de independência nas atividades diárias",
      "Prevenção de deformidades e contraturas",
      "Melhora da postura e alinhamento corporal",
      "Estimulação do desenvolvimento motor global"
    ],
    imagem: "fisioterapia-pediatrica.jpg"
  },
  {
    id: 2,
    slug: "terapia-ocupacional", // NÃO ALTERAR
    titulo: "Terapia Ocupacional",
    icone: "fas fa-puzzle-piece",
    cor: "#9B59B6",
    descricaoCurta: "Desenvolvendo habilidades para as atividades do dia a dia",
    descricaoCompleta: "A Terapia Ocupacional promove o desenvolvimento das habilidades necessárias para a realização das atividades cotidianas, escolares e de lazer. Trabalhamos aspectos como coordenação motora fina, integração sensorial, autonomia nas atividades de vida diária (alimentação, vestuário, higiene) e habilidades cognitivas.",
    comoFunciona: "As sessões são realizadas de forma lúdica e significativa para a criança, utilizando atividades e brincadeiras que estimulam as áreas que precisam ser desenvolvidas. Podem incluir jogos, atividades de artes, brincadeiras sensoriais, treino de atividades funcionais e uso de tecnologias assistivas quando necessário.",
    etapas: [
      "Avaliação: Análise das habilidades funcionais e sensoriais",
      "Objetivos: Definição de metas terapêuticas personalizadas",
      "Terapia: Intervenções através de atividades significativas",
      "Adaptações: Orientações sobre recursos e adaptações",
      "Acompanhamento: Monitoramento contínuo e ajustes"
    ],
    beneficios: [
      "Melhora da coordenação motora fina",
      "Desenvolvimento de habilidades de autocuidado",
      "Melhor processamento sensorial",
      "Aumento da atenção e concentração",
      "Maior independência nas atividades escolares",
      "Desenvolvimento de habilidades sociais"
    ],
    imagem: "terapia-ocupacional.jpg"
  },
  {
    id: 3,
    slug: "fonoaudiologia", // NÃO ALTERAR
    titulo: "Fonoaudiologia",
    icone: "fas fa-comments",
    cor: "#FF6B9D",
    descricaoCurta: "Estimulando a comunicação e linguagem",
    descricaoCompleta: "A Fonoaudiologia atua na prevenção, avaliação, diagnóstico e tratamento dos distúrbios da comunicação humana. Trabalhamos com atrasos de linguagem, dificuldades de fala, gagueira, alterações de voz, dificuldades de alimentação e deglutição, além de estimulação precoce da linguagem em bebês e crianças pequenas.",
    comoFunciona: "O tratamento fonoaudiológico é realizado através de atividades lúdicas e exercícios específicos que estimulam a comunicação oral e escrita. Utilizamos jogos, brincadeiras, músicas, livros e recursos tecnológicos para tornar as sessões atrativas e eficazes. Também orientamos a família sobre como estimular a comunicação no dia a dia.",
    etapas: [
      "Triagem: Avaliação inicial da comunicação e linguagem",
      "Diagnóstico: Identificação das dificuldades específicas",
      "Planejamento: Elaboração do plano terapêutico",
      "Intervenção: Sessões com atividades e exercícios direcionados",
      "Orientação: Instruções para estimulação em casa"
    ],
    beneficios: [
      "Melhora da articulação e clareza da fala",
      "Ampliação do vocabulário",
      "Desenvolvimento da linguagem receptiva e expressiva",
      "Melhora das habilidades de leitura e escrita",
      "Facilitação da comunicação e interação social",
      "Tratamento de dificuldades alimentares"
    ],
    imagem: "fonoaudiologia.jpg"
  },
  {
    id: 4,
    slug: "psicologia-infantil", // NÃO ALTERAR
    titulo: "Psicologia Infantil",
    icone: "fas fa-heart",
    cor: "#E74C3C",
    descricaoCurta: "Cuidando do desenvolvimento emocional e comportamental",
    descricaoCompleta: "A Psicologia Infantil foca no desenvolvimento emocional, social e comportamental da criança. Trabalhamos questões como ansiedade, medos, dificuldades de adaptação, problemas de comportamento, relacionamento familiar e escolar, além de orientação parental e apoio em situações de luto, separação dos pais e outras mudanças significativas.",
    comoFunciona: "O atendimento psicológico infantil é realizado principalmente através da ludoterapia, utilizando brincadeiras, desenhos, jogos e histórias como ferramentas terapêuticas. As sessões são adaptadas à idade e necessidades de cada criança, criando um ambiente seguro e acolhedor para a expressão de sentimentos e elaboração de conflitos.",
    etapas: [
      "Acolhimento: Primeiro contato com a criança e família",
      "Avaliação: Compreensão da demanda e dinâmica familiar",
      "Vínculo: Estabelecimento de relação terapêutica segura",
      "Intervenção: Sessões lúdicas e orientação aos pais",
      "Acompanhamento: Monitoramento da evolução emocional"
    ],
    beneficios: [
      "Melhora da autoestima e autoconfiança",
      "Desenvolvimento de habilidades socioemocionais",
      "Redução de ansiedade e medos",
      "Melhora no comportamento e autorregulação",
      "Fortalecimento dos vínculos familiares",
      "Maior adaptação escolar e social"
    ],
    imagem: "psicologia-infantil.jpg"
  },
  {
    id: 5,
    slug: "psicopedagogia", // NÃO ALTERAR
    titulo: "Psicopedagogia",
    icone: "fas fa-book-reader",
    cor: "#F39C12",
    descricaoCurta: "Auxiliando no processo de aprendizagem",
    descricaoCompleta: "A Psicopedagogia atua na prevenção e intervenção das dificuldades de aprendizagem. Trabalhamos com crianças que apresentam desafios no processo de alfabetização, leitura, escrita, matemática e outras áreas do conhecimento. Também atuamos com distúrbios como dislexia, discalculia e TDAH no contexto escolar.",
    comoFunciona: "O trabalho psicopedagógico envolve uma avaliação detalhada do processo de aprendizagem da criança, identificando suas potencialidades e dificuldades. A intervenção é feita através de atividades e estratégias específicas que facilitam a aprendizagem, sempre respeitando o ritmo e o estilo de aprender de cada criança.",
    etapas: [
      "Avaliação: Análise do processo de aprendizagem",
      "Diagnóstico: Identificação das dificuldades específicas",
      "Intervenção: Atividades focadas nas áreas defasadas",
      "Orientação Escolar: Parceria com a escola da criança",
      "Acompanhamento: Monitoramento do progresso acadêmico"
    ],
    beneficios: [
      "Melhora no desempenho escolar",
      "Desenvolvimento de estratégias de estudo",
      "Aumento da motivação para aprender",
      "Fortalecimento da atenção e concentração",
      "Melhora da autoestima acadêmica",
      "Desenvolvimento do raciocínio lógico"
    ],
    imagem: "Psicopedagogia.jpg"
  },
  {
    id: 6,
    slug: "metodo-aba", // NÃO ALTERAR
    titulo: "Método ABA",
    icone: "fas fa-clipboard-check",
    cor: "#8E44AD",
    descricaoCurta: "Análise do Comportamento Aplicada ao autismo",
    descricaoCompleta: "O Método ABA (Applied Behavior Analysis) é uma abordagem científica que utiliza princípios da análise do comportamento para ensinar novas habilidades e reduzir comportamentos inadequados. É reconhecido mundialmente como o tratamento mais eficaz para crianças com Transtorno do Espectro Autista (TEA).",
    comoFunciona: "O tratamento ABA é intensivo e individualizado. Através de tentativas discretas, reforço positivo e análise de dados, ensinamos habilidades acadêmicas, sociais, de comunicação e autocuidado. Cada comportamento é analisado e trabalhado sistematicamente, com metas específicas e mensuráveis.",
    etapas: [
      "Avaliação: Análise funcional do comportamento",
      "Programa: Elaboração de plano de ensino individualizado",
      "Intervenção: Sessões estruturadas com técnicas ABA",
      "Registro: Coleta de dados sobre os progressos",
      "Supervisão: Acompanhamento por analista do comportamento"
    ],
    beneficios: [
      "Desenvolvimento de habilidades de comunicação",
      "Redução de comportamentos desafiadores",
      "Aumento da autonomia e independência",
      "Melhora das habilidades sociais",
      "Desenvolvimento de repertório acadêmico",
      "Generalização das habilidades aprendidas"
    ],
    imagem: "foto-Método-ABA.jpg"
  }
];

// 💡 DICAS:
// - Para adicionar novo tratamento: copie um bloco { } e altere as informações
// - NÃO altere o "slug" - ele é usado na URL da página
// - Para trocar ícone: use classes do FontAwesome
// - Para trocar cor: use código hexadecimal
// - Para trocar imagem: coloque o arquivo em src/assets/images/ e altere o nome
