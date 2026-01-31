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

// Carregamento dinâmico via JSON (CMS)
let dynamicContact: ContactInfo | null = null;
try {
  dynamicContact = require('./contact.json');
} catch (e) {
  console.warn('Erro ao carregar dados de contato dinâmicos:', e);
}

// Dados estáticos (mantidos como backup/fallback)
const staticContact: ContactInfo = {
  endereco: "Av. Dom Luís, 1233 - Meireles, Fortaleza - CE, 60160-230",
  telefone: "(85) 9624-2225",
  email: "contato@clinicasingulare.com.br",
  horarios: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
  whatsapp: "(85) 9624-2225",
  instagram: "https://instagram.com/clinicasingulare",
  facebook: "https://facebook.com/clinicasingulare"
};

export const contactData: ContactInfo = dynamicContact || staticContact;

// 💡 DICAS:
// - Para alterar endereço: modifique o texto em "endereco"
// - Para alterar telefone: modifique o texto em "telefone"
// - Para alterar email: modifique o texto em "email"
// - Para alterar horários: modifique o texto em "horarios"
// - Para adicionar WhatsApp: adicione a linha "whatsapp: '(11) 99999-9999'"
// - Para adicionar redes sociais: adicione as linhas instagram e facebook
