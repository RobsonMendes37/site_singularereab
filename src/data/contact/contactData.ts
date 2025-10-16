/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DE CONTATO
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para alterar horários: modifique o texto em "horarios"
 * 3. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: Não altere as chaves como "endereco:", "telefone:", etc.
 */

export interface ContactInfo {
  endereco: string;
  telefone: string;
  email: string;
  horarios: string;
  whatsapp?: string; // Opcional
  instagram?: string; // Opcional
  facebook?: string; // Opcional
}

export const contactData: ContactInfo = {
  endereco: "Rua das Flores, 123 - Vila Madalena, São Paulo - SP",
  telefone: "(11) 3456-7890",
  email: "contato@clinicasingulare.com.br",
  horarios: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
  whatsapp: "(11) 99999-9999",
  instagram: "https://instagram.com/clinicasingulare",
  facebook: "https://facebook.com/clinicasingulare"
};

// 💡 DICAS:
// - Para alterar endereço: modifique o texto em "endereco"
// - Para alterar telefone: modifique o texto em "telefone"
// - Para alterar email: modifique o texto em "email"
// - Para alterar horários: modifique o texto em "horarios"
// - Para adicionar WhatsApp: adicione a linha "whatsapp: '(11) 99999-9999'"
// - Para adicionar redes sociais: adicione as linhas instagram e facebook
