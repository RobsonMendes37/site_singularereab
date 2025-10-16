/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DA SEÇÃO SERVIÇOS
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para adicionar novo serviço: copie um bloco { } e cole no final
 * 3. Para remover serviço: delete o bloco { } inteiro
 * 4. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: Não altere as chaves como "id:", "titulo:", etc.
 */

export interface Service {
  id: number;
  titulo: string;
  descricao: string;
  icone: string; // Classe do FontAwesome (ex: "fas fa-heart")
  cor: string;   // Cor em hexadecimal (ex: "#FF6B9D")
}

export const servicesData: Service[] = [
  {
    id: 1,
    titulo: "Equipe Qualificada",
    descricao: "Profissionais especializados e experientes em reabilitação infantil",
    icone: "fas fa-user-md",
    cor: "#007bff"
  },
  {
    id: 2,
    titulo: "Atendimento Personalizado",
    descricao: "Cada criança recebe um plano de tratamento individualizado",
    icone: "fas fa-heart",
    cor: "#dc3545"
  },
  {
    id: 3,
    titulo: "Resultados Comprovados",
    descricao: "Metodologias baseadas em evidências científicas",
    icone: "fas fa-trophy",
    cor: "#28a745"
  },
  {
    id: 4,
    titulo: "Estrutura Moderna",
    descricao: "Ambientes equipados com tecnologia de ponta",
    icone: "fas fa-building",
    cor: "#17a2b8"
  }
];

// 💡 DICAS:
// - Para adicionar novo serviço: copie um bloco { } e altere as informações
// - Para trocar ícone: use classes do FontAwesome (ex: "fas fa-star", "fas fa-check")
// - Para trocar cor: use código hexadecimal (ex: "#FF0000" para vermelho)
// - Para remover serviço: delete o bloco { } inteiro
