/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DOS DEPOIMENTOS
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para adicionar novo depoimento: copie um bloco { } e cole no final
 * 3. Para remover depoimento: delete o bloco { } inteiro
 * 4. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: Não altere as chaves como "id:", "nome:", etc.
 */

export interface Testimonial {
  id: number;
  nome: string;
  profissao: string;
  depoimento: string;
  avaliacao: number; // De 1 a 5
  foto: string; // Nome do arquivo na pasta src/assets/images/
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    nome: "Mariana Oliveira",
    profissao: "Mãe do Matheus, 6 anos",
    depoimento: "Quando descobrimos que nosso filho tinha autismo, ficamos perdidos. A Clínica Singulare nos acolheu de uma forma incrível! Hoje, após 2 anos de tratamento, o Matheus já consegue se comunicar melhor, brincar com outras crianças e sua autonomia aumentou significativamente. A equipe multidisciplinar trabalha de forma integrada e isso faz toda a diferença. Somos eternamente gratos!",
    avaliacao: 5,
    foto: "testimonial-1.jpg"
  },
  {
    id: 2,
    nome: "Alessandro Costa",
    profissao: "Pai da Sofia, 4 anos",
    depoimento: "Minha filha tinha grandes dificuldades na fala e isso afetava sua autoestima. Na Clínica Singulare, encontramos profissionais dedicados que usam técnicas modernas e eficazes. Em 8 meses de fonoaudiologia, a evolução foi impressionante! Hoje ela conversa, canta e se expressa com confiança. O ambiente acolhedor e lúdico faz com que ela ame vir para as sessões. Recomendo de coração!",
    avaliacao: 5,
    foto: "testimonial-2.jpg"
  },
  {
    id: 3,
    nome: "Juliana Ferreira",
    profissao: "Mãe do Lucas, 5 anos",
    depoimento: "O Lucas nasceu com paralisia cerebral e os médicos disseram que ele teria muitas limitações. Mas na Clínica Singulare, encontramos esperança e um tratamento excepcional! A fisioterapia e a terapia ocupacional transformaram a vida dele. Hoje ele já consegue andar com apoio, segurar objetos e está muito mais independente. A dedicação dos profissionais é algo que nos emociona todos os dias. Obrigada por cuidarem do nosso filho com tanto amor!",
    avaliacao: 5,
    foto: "testimonial-3.jpg"
  },
  {
    id: 4,
    nome: "Carlos Mendes",
    profissao: "Pai do Gabriel, 7 anos",
    depoimento: "Como pai de uma criança com TDAH, eu estava desesperado vendo as dificuldades do meu filho na escola. A Clínica Singulare nos ofereceu um plano de tratamento personalizado com psicologia, psicopedagogia e terapia ocupacional. Em 1 ano, o Gabriel melhorou muito sua concentração, está com notas melhores e mais importante, está feliz! A estrutura da clínica é maravilhosa e os profissionais são altamente qualificados. Investimento que vale cada centavo!",
    avaliacao: 5,
    foto: "testimonial-1.jpg"
  },
  {
    id: 5,
    nome: "Fernanda Alves",
    profissao: "Mãe da Isabela, 3 anos",
    depoimento: "A Isabela tinha atraso no desenvolvimento motor e não conseguia sentar sozinha com 2 anos. Chegamos na Clínica Singulare angustiados e fomos recebidos com muito carinho e profissionalismo. O trabalho da fisioterapeuta é sensacional! Hoje, com 3 anos, minha filha já anda, corre e brinca como qualquer criança da idade dela. É emocionante ver essa transformação! A clínica mudou nossas vidas e só tenho gratidão.",
    avaliacao: 5,
    foto: "testimonial-2.jpg"
  },
  {
    id: 6,
    nome: "Roberto Santos",
    profissao: "Pai do Miguel, 8 anos",
    depoimento: "O Miguel foi diagnosticado com síndrome de Down e desde bebê fazemos acompanhamento na Clínica Singulare. O trabalho integrado entre fisioterapia, fonoaudiologia e terapia ocupacional é fundamental para o desenvolvimento dele. Hoje ele está alfabetizado, se comunica super bem e é muito independente nas atividades diárias. A equipe é como uma família para nós! A estrutura da clínica é excelente e o ambiente é super acolhedor. Recomendo com toda certeza!",
    avaliacao: 5,
    foto: "testimonial-3.jpg"
  },
  {
    id: 7,
    nome: "Fernanda Lima",
    profissao: "Mãe da Alice, 5 anos",
    depoimento: "Ambiente acolhedor e profissionais extremamente competentes. A Alice se sente segura e feliz aqui. Gratidão por todo o cuidado e carinho!",
    avaliacao: 5,
    foto: "testimonial-1.jpg"
  },
  {
    id: 8,
    nome: "Paulo Mendes",
    profissao: "Pai do Henrique, 6 anos",
    depoimento: "A evolução do meu filho tem sido surpreendente! A equipe é muito dedicada e sempre nos mantém informados sobre cada progresso. Excelente trabalho!",
    avaliacao: 5,
    foto: "testimonial-2.jpg"
  },
  {
    id: 9,
    nome: "Camila Rodrigues",
    profissao: "Mãe da Beatriz, 4 anos",
    depoimento: "Melhor escolha que fizemos! Os profissionais são altamente capacitados e realmente se importam com o bem-estar das crianças. Muito obrigada!",
    avaliacao: 5,
    foto: "testimonial-3.jpg"
  }
];

// 💡 DICAS:
// - Para adicionar novo depoimento: copie um bloco { } e altere as informações
// - Para trocar foto: coloque o arquivo em src/assets/images/ e altere o nome
// - Para alterar avaliação: use número de 1 a 5 (5 = 5 estrelas)
// - Para remover depoimento: delete o bloco { } inteiro
