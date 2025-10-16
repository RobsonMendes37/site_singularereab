/**
 * ════════════════════════════════════════════════════════════════════════════
 * 📋 ARQUIVO DE EXEMPLO - config.example.ts
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * Este é um arquivo de EXEMPLO da configuração do projeto.
 * 
 * COMO USAR:
 * 1. Copie este arquivo para config.ts:
 *    cp src/config.example.ts src/config.ts
 * 
 * 2. Edite src/config.ts e substitua os valores pelos reais
 * 
 * 3. NUNCA commite dados sensíveis (API keys, tokens, etc)
 *    Use variáveis de ambiente no .env para dados sensíveis
 */

export const config = {
  // ═══════════════════════════════════════════════════════════════════════════
  // 🏥 INFORMAÇÕES DA CLÍNICA
  // ═══════════════════════════════════════════════════════════════════════════
  clinic: {
    name: 'Nome da Clínica',
    tagline: 'Slogan/tagline da clínica',
    description: 'Descrição completa da clínica para SEO (150-160 caracteres)',
    
    address: {
      street: 'Rua Exemplo, 123',
      complement: 'Sala 101',
      neighborhood: 'Bairro',
      city: 'Cidade',
      state: 'UF',
      cep: '00000-000',
      full: 'Rua Exemplo, 123 - Sala 101 - Bairro, Cidade - UF, 00000-000',
      mapUrl: 'https://maps.google.com/?q=SEU+ENDERECO+AQUI'
    },

    hours: {
      weekdays: 'Segunda a Sexta: 08:00 - 18:00',
      saturday: 'Sábado: 08:00 - 12:00',
      sunday: 'Domingo: Fechado',
      simple: 'Seg-Sex: 8h às 18h | Sáb: 8h às 12h'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 📞 CONTATOS
  // ═══════════════════════════════════════════════════════════════════════════
  contact: {
    phone: '(00) 00000-0000',
    phoneRaw: '5500000000000',
    phoneLink: 'tel:+5500000000000',
    
    whatsapp: '5500000000000',
    whatsappFormatted: '(00) 00000-0000',
    whatsappLink: 'https://wa.me/5500000000000',
    whatsappMessage: 'Olá! Gostaria de agendar uma consulta.',
    whatsappLinkWithMessage: 'https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.',
    
    email: 'contato@suaclinica.com.br',
    emailLink: 'mailto:contato@suaclinica.com.br',
    emailSupport: 'suporte@suaclinica.com.br',
    emailCommercial: 'comercial@suaclinica.com.br',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🌐 REDES SOCIAIS
  // ═══════════════════════════════════════════════════════════════════════════
  social: {
    instagram: {
      username: '@suaclinica',
      url: 'https://www.instagram.com/suaclinica',
      display: 'Instagram'
    },
    
    facebook: {
      username: 'suaclinica',
      url: 'https://www.facebook.com/suaclinica',
      display: 'Facebook'
    },
    
    linkedin: {
      company: 'suaclinica',
      url: 'https://www.linkedin.com/company/suaclinica',
      display: 'LinkedIn'
    },
    
    youtube: {
      channel: 'UCxxx',
      url: 'https://www.youtube.com/channel/UCxxx',
      display: 'YouTube'
    },
    
    twitter: {
      username: '@suaclinica',
      url: 'https://twitter.com/suaclinica',
      display: 'Twitter'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🔍 SEO E METADATA
  // ═══════════════════════════════════════════════════════════════════════════
  seo: {
    siteName: 'Sua Clínica',
    siteUrl: 'https://suaclinica.com.br',
    
    defaultTitle: 'Sua Clínica - Especialidade',
    titleTemplate: '%s | Sua Clínica',
    
    description: 'Descrição da clínica para aparecer no Google (150-160 caracteres)',
    shortDescription: 'Descrição curta da clínica',
    
    keywords: [
      'palavra-chave-1',
      'palavra-chave-2',
      'palavra-chave-3',
      'sua-cidade',
      'seu-estado'
    ].join(', '),
    
    image: '/logo.png',
    imageAlt: 'Logo da Clínica',
    
    language: 'pt-BR',
    locale: 'pt_BR',
    
    author: 'Sua Clínica',
    
    type: 'website',
    organizationType: 'MedicalClinic'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 📊 ANALYTICS E TRACKING
  // ═══════════════════════════════════════════════════════════════════════════
  analytics: {
    googleAnalyticsId: process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX',
    googleTagManagerId: process.env.REACT_APP_GTM_ID || '',
    facebookPixelId: process.env.REACT_APP_FB_PIXEL_ID || '',
    hotjarId: process.env.REACT_APP_HOTJAR_ID || '',
    clarityId: process.env.REACT_APP_CLARITY_ID || ''
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🔐 SERVIÇOS EXTERNOS
  // ═══════════════════════════════════════════════════════════════════════════
  services: {
    sentryDsn: process.env.REACT_APP_SENTRY_DSN || '',
    googleSiteVerification: process.env.REACT_APP_GOOGLE_VERIFICATION || '',
    googleMyBusinessId: '',
    recaptchaSiteKey: process.env.REACT_APP_RECAPTCHA_KEY || ''
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🌐 API E BACKEND
  // ═══════════════════════════════════════════════════════════════════════════
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001',
    timeout: 30000,
    
    endpoints: {
      contact: '/api/contact',
      appointment: '/api/appointment',
      newsletter: '/api/newsletter'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎨 IDENTIDADE VISUAL
  // ═══════════════════════════════════════════════════════════════════════════
  branding: {
    colors: {
      primary: '#007bff',
      secondary: '#ff4880',
      accent: '#17a2b8',
      success: '#28a745',
      warning: '#ffc107',
      danger: '#dc3545',
      dark: '#343a40',
      light: '#f8f9fa'
    },
    
    logos: {
      main: '/logo.png',
      icon: '/icon.png',
      favicon: '/favicon.ico'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ⚙️ CONFIGURAÇÕES GERAIS
  // ═══════════════════════════════════════════════════════════════════════════
  app: {
    environment: process.env.NODE_ENV || 'development',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    
    version: '1.0.0',
    
    cacheEnabled: true,
    cacheDuration: 3600000,
    
    lazyLoadImages: true,
    enableAnimations: true,
    
    maxFileSize: 5 * 1024 * 1024,
    allowedFileTypes: ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
  }
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// 🛠️ FUNÇÕES AUXILIARES
// ═══════════════════════════════════════════════════════════════════════════

export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || config.contact.whatsappMessage;
  return `${config.contact.whatsappLink}?text=${encodeURIComponent(message)}`;
};

export const getEmailLink = (subject?: string, body?: string): string => {
  let link = config.contact.emailLink;
  if (subject) link += `?subject=${encodeURIComponent(subject)}`;
  if (body) link += `&body=${encodeURIComponent(body)}`;
  return link;
};

export const getFormattedAddress = (): string => {
  const { street, complement, neighborhood, city, state, cep } = config.clinic.address;
  return `${street}, ${complement} - ${neighborhood}, ${city} - ${state}, ${cep}`;
};

export const getSocialLinks = () => {
  const links = [
    { name: 'Instagram', url: config.social.instagram.url, icon: 'fab fa-instagram' },
    { name: 'Facebook', url: config.social.facebook.url, icon: 'fab fa-facebook-f' },
    { name: 'LinkedIn', url: config.social.linkedin.url, icon: 'fab fa-linkedin-in' },
    { name: 'YouTube', url: config.social.youtube.url, icon: 'fab fa-youtube' },
  ];
  
  return links.filter(social => !social.url.includes('UCxxx'));
};

export type Config = typeof config;

export default config;
