/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DOS PROGRAMAS
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para adicionar novo programa: copie um bloco { } e cole no final
 * 3. Para remover programa: delete o bloco { } inteiro
 * 4. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: Não altere as chaves como "id:", "titulo:", etc.
 */

export interface Program {
  id: number;
  titulo: string;
  descricao: string;
  preco: string; // Formato: "R$ XXX,XX"
  imagem: string; // Nome do arquivo na pasta src/assets/images/
  professor: {
    nome: string;
    cargo: string;
    foto: string; // Nome do arquivo na pasta src/assets/images/
  };
  detalhes: {
    vagas: number; // Número de vagas disponíveis
    aulas: number; // Número total de aulas
    horas: number; // Número total de horas
  };
}

export const programsData: Program[] = [
  {
    id: 1,
    titulo: "Programa de Desenvolvimento Motor",
    descricao: "Focado no desenvolvimento das habilidades motoras grossas e finas através de atividades lúdicas e terapêuticas.",
    preco: "R$ 150,00",
    imagem: "program-1.jpg",
    professor: {
      nome: "Dr. Ana Silva",
      cargo: "Fisioterapeuta",
      foto: "program-teacher.jpg"
    },
    detalhes: {
      vagas: 8,
      aulas: 12,
      horas: 24
    }
  },
  {
    id: 2,
    titulo: "Terapia da Fala",
    descricao: "Programa especializado para desenvolvimento da comunicação e linguagem em crianças com atrasos no desenvolvimento.",
    preco: "R$ 120,00",
    imagem: "program-2.jpg",
    professor: {
      nome: "Dra. Maria Santos",
      cargo: "Fonoaudióloga",
      foto: "program-teacher.jpg"
    },
    detalhes: {
      vagas: 6,
      aulas: 15,
      horas: 30
    }
  },
  {
    id: 3,
    titulo: "Integração Sensorial",
    descricao: "Trabalho especializado para crianças com dificuldades de processamento sensorial e autismo.",
    preco: "R$ 180,00",
    imagem: "program-3.jpg",
    professor: {
      nome: "Dr. Carlos Lima",
      cargo: "Terapeuta Ocupacional",
      foto: "program-teacher.jpg"
    },
    detalhes: {
      vagas: 4,
      aulas: 20,
      horas: 40
    }
  }
];

// 💡 DICAS:
// - Para adicionar novo programa: copie um bloco { } e altere as informações
// - Para trocar imagem: coloque o arquivo em src/assets/images/ e altere o nome
// - Para alterar preço: use formato "R$ XXX,XX"
// - Para alterar detalhes: modifique vagas, aulas e horas
// - Para trocar professor: altere nome, cargo e foto
// - Para remover programa: delete o bloco { } inteiro
