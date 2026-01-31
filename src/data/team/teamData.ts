/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DA EQUIPE
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para adicionar novo membro: copie um bloco { } e cole no final
 * 3. Para remover membro: delete o bloco { } inteiro
 * 4. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: Não altere as chaves como "id:", "nome:", etc.
 */

import { loadCollection } from '../../utils/cmsLoader';

export interface TeamMember {
  id: number;
  nome: string;
  cargo: string;
  foto: string; // Nome do arquivo na pasta src/assets/images/
  descricao: string;
  especialidades: string[];
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  // Campos legados para compatibilidade com dados antigos
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

// Carregamento dinâmico via JSON (CMS)
let dynamicTeam: TeamMember[] = [];
try {
  const context = (require as any).context('./members', false, /\.json$/);
  dynamicTeam = loadCollection<TeamMember>(context);
} catch (e) {
  console.warn('Erro ao carregar equipe dinâmica:', e);
}

// Dados estáticos (mantidos como backup/fallback)
const staticTeam: TeamMember[] = [
  {
    id: 1,
    nome: "",
    cargo: "",
    foto: "team/_RFM8531.jpg",
    descricao: "Especialista em Fisioterapia Pediátrica com mais de 10 anos de experiência em reabilitação infantil. Formada pela USP com especialização em Neurologia Pediátrica.",
    especialidades: [
      "Fisioterapia Neurológica",
      "Desenvolvimento Motor",
      "Paralisia Cerebral",
      "Atrasos Motores"
    ],
    facebook: "https://facebook.com/exemplo",
    instagram: "https://instagram.com/exemplo",
    linkedin: "https://linkedin.com/in/exemplo"
  },
  {
    id: 2,
    nome: "",
    cargo: "",
    foto: "team/_RFM8537.jpg",
    descricao: "Terapeuta Ocupacional especializado em Integração Sensorial e Autismo. Pós-graduado em Neuropsicologia e Reabilitação Cognitiva.",
    especialidades: [
      "Integração Sensorial",
      "Transtorno do Espectro Autista",
      "Atividades de Vida Diária",
      "Coordenação Motora Fina"
    ],
    facebook: "https://facebook.com/exemplo",
    instagram: "https://instagram.com/exemplo",
    linkedin: "https://linkedin.com/in/exemplo"
  },
  {
    id: 3,
    nome: "",
    cargo: "",
    foto: "team/_RFM8543.jpg",
    descricao: "Fonoaudióloga com expertise em Linguagem e Comunicação Infantil. Especialista em Motricidade Orofacial e Disfagia Pediátrica.",
    especialidades: [
      "Atrasos de Linguagem",
      "Distúrbios de Fala",
      "Dificuldades de Alimentação",
      "Comunicação Alternativa"
    ],
    facebook: "https://facebook.com/exemplo",
    instagram: "https://instagram.com/exemplo",
    linkedin: "https://linkedin.com/in/exemplo"
  },
  {
    id: 4,
    nome: "",
    cargo: " ",
    foto: "team/_RFM8554.jpg",
    descricao: "Psicóloga Clínica com foco em Desenvolvimento Infantil e Análise do Comportamento Aplicada (ABA). Especialista em intervenções comportamentais.",
    especialidades: [
      "Psicologia Infantil",
      "Terapia ABA",
      "Desenvolvimento Socioemocional",
      "Orientação Parental"
    ],
    facebook: "https://facebook.com/exemplo",
    instagram: "https://instagram.com/exemplo",
    linkedin: "https://linkedin.com/in/exemplo"
  },
  {
    id: 5,
    nome: "",
    cargo: "",
    foto: "team/_RFM8557.jpg",
    descricao: "Breve descrição do profissional.",
    especialidades: ["Especialidade 1", "Especialidade 2"],
    facebook: "",
    instagram: "",
    linkedin: ""
  },
  {
    id: 6,
    nome: "",
    cargo: "",
    foto: "team/_RFM8564.jpg",
    descricao: "Breve descrição do profissional.",
    especialidades: ["Especialidade 1", "Especialidade 2"],
    facebook: "",
    instagram: "",
    linkedin: ""
  },
  {
    id: 7,
    nome: "",
    cargo: "",
    foto: "team/_RFM8576.jpg",
    descricao: "Breve descrição do profissional.",
    especialidades: ["Especialidade 1", "Especialidade 2"],
    facebook: "",
    instagram: "",
    linkedin: ""
  }
];

// Exporta a equipe dinâmica se houver dados (CMS), caso contrário usa os estáticos
export const teamData: TeamMember[] = dynamicTeam.length > 0 ? dynamicTeam : staticTeam;


// 💡 DICAS:
// - Para adicionar novo membro: copie um bloco { } e altere as informações
// - Para trocar foto: coloque o arquivo em src/assets/images/ e altere o nome
// - Para adicionar especialidade: adicione nova linha no array "especialidades"
// - Para remover redes sociais: delete as linhas facebook, instagram, linkedin
// - Para remover membro: delete o bloco { } inteiro
