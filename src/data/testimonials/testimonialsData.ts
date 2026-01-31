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
    profissao: "Mãe do Matheus, 3 anos",
    depoimento: "Meu filho falou a primeira palavra aqui na clínica! Foi uma emoção que nunca vou esquecer. Gratidão eterna a essa equipe.",
    avaliacao: 5,
    foto: "testimonials/testimonial-1.jpg"
  },
  {
    id: 2,
    nome: "Alessandro Costa",
    profissao: "Pai da Sofia, 4 anos",
    depoimento: "Fomos muito bem recebidos desde o primeiro dia. As terapeutas são super atenciosas e a Sofia adora vir brincar aqui.",
    avaliacao: 5,
    foto: "testimonials/testimonial-2.jpg"
  },
  {
    id: 3,
    nome: "Juliana Ferreira",
    profissao: "Mãe do Lucas, 2 anos",
    depoimento: "A estrutura é linda e muito limpa. Sinto segurança em deixar meu filho com as profissionais. O atendimento é nota 10.",
    avaliacao: 5,
    foto: "testimonials/testimonial-3.jpg"
  },
  {
    id: 4,
    nome: "Carlos Mendes",
    profissao: "Pai do Gabriel, 5 anos",
    depoimento: "Já percebemos melhora na concentração dele na escola em poucos meses de atendimento. Recomendo muito!",
    avaliacao: 5,
    foto: "testimonials/testimonial-1.jpg"
  },
  {
    id: 5,
    nome: "Fernanda Alves",
    profissao: "Mãe da Isabela, 3 anos",
    depoimento: "Ambiente muito acolhedor e colorido. Minha filha se sente em casa e sempre sai sorrindo das sessões.",
    avaliacao: 5,
    foto: "testimonials/testimonial-2.jpg"
  }
];

// 💡 DICAS:
// - Para adicionar novo depoimento: copie um bloco { } e altere as informações
// - Para trocar foto: coloque o arquivo em src/assets/images/ e altere o nome
// - Para alterar avaliação: use número de 1 a 5 (5 = 5 estrelas)
// - Para remover depoimento: delete o bloco { } inteiro
