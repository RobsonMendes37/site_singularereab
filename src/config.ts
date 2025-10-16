/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 CONFIGURAÇÕES GERAIS DO SITE
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os valores entre aspas "assim"
 * 2. Salve o arquivo (Ctrl+S)
 * 3. Pronto! Site atualizado
 */

export const config = {
  // Informações da clínica
  clinic: {
    name: "Clínica Singulare",
    description: "Especializada em reabilitação e desenvolvimento infantil com equipe multidisciplinar qualificada e equipamentos de última geração.",
    address: {
      street: "Av. Dom Luís, 1233",
      complement: "Meireles",
      neighborhood: "Meireles",
      city: "Fortaleza",
      state: "CE",
      cep: "60160-230",
      full: "Av. Dom Luís, 1233 - Meireles, Fortaleza - CE, 60160-230",
      mapUrl: "https://maps.google.com"
    },
    hours: {
      weekdays: "Segunda a Sexta: 8h às 18h",
      saturday: "Sábado: 8h às 12h",
      sunday: "Domingo: Fechado",
      simple: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h"
    }
  },

  // Informações de contato
  contact: {
    phone: "(85) 99999-9999",
    email: "contato@clinicasingulare.com.br",
    whatsapp: "(85) 99999-9999",
    phoneLink: "tel:+5585999999999",
    emailLink: "mailto:contato@clinicasingulare.com.br",
    whatsappLink: "https://wa.me/5585999999999",
    whatsappLinkWithMessage: "https://wa.me/5585999999999?text=Olá! Gostaria de agendar uma consulta."
  },

  // Redes sociais
  social: {
    facebook: {
      url: "https://facebook.com/clinicasingulare"
    },
    instagram: {
      url: "https://instagram.com/clinicasingulare"
    },
    linkedin: {
      url: "https://linkedin.com/company/clinicasingulare"
    },
    youtube: {
      url: "https://youtube.com/clinicasingulare"
    }
  },

  // Configurações do site
  site: {
    title: "Clínica Singulare - Reabilitação Infantil",
    description: "Especializada em reabilitação e desenvolvimento infantil com equipe multidisciplinar qualificada.",
    keywords: "reabilitação infantil, fisioterapia pediátrica, terapia ocupacional, fonoaudiologia, psicologia infantil",
    url: "https://clinicasingulare.com.br"
  }
};
