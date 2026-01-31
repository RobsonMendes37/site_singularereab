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
      mapUrl: "https://maps.google.com",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2158791842847!2d-38.5015832!3d-3.7303982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748890e76f9f1%3A0x8c0a6d7b9a8f9c8d!2sAv.%20Dom%20Lu%C3%ADs%2C%201233%20-%20Meireles%2C%20Fortaleza%20-%20CE%2C%2060160-230!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
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
    phone: "(85) 9624-2225",
    email: "contato@clinicasingulare.com.br",
    whatsapp: "(85) 9624-2225",
    phoneLink: "tel:+558596242225",
    emailLink: "mailto:contato@clinicasingulare.com.br",
    whatsappLink: "https://wa.me/558596242225",
    whatsappLinkWithMessage: "https://wa.me/558596242225?text=Olá! Vim através do site e gostaria de verificar os horários disponíveis para consulta."
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
