/**
 * ════════════════════════════════════════════════════════════════════════════
 * 📋 CONFIGURAÇÃO GLOBAL DO PROJETO
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * TODAS as variáveis globais do site estão centralizadas aqui.
 * Para alterar qualquer informação (telefone, email, redes sociais, etc.),
 * basta editar este arquivo e a mudança será refletida em TODO o site!
 * 
 * ⚠️  IMPORTANTE: Mantenha este arquivo atualizado e versionado.
 */

export const config = {
  // ═══════════════════════════════════════════════════════════════════════════
  // 🏥 INFORMAÇÕES DA CLÍNICA
  // ═══════════════════════════════════════════════════════════════════════════
  clinic: {
    name: 'Clínica Singulare',
    tagline: 'Cuidado especializado para o desenvolvimento infantil',
    description: 'Especializada em reabilitação infantil, oferecemos tratamentos personalizados para o desenvolvimento integral de crianças com necessidades especiais.',
    
    // Endereço completo
    address: {
      street: 'Av. Dom Luís, 1233',
      complement: 'Sala 1108/1109',
      neighborhood: 'Meireles',
      city: 'Fortaleza',
      state: 'CE',
      cep: '60160-230',
      // Endereço formatado para exibição
      full: 'Av. Dom Luís, 1233 - Sala 1108/1109 - Meireles, Fortaleza - CE, 60160-230',
      // Link Google Maps
      mapUrl: 'https://maps.google.com/?q=Av.+Dom+Luís,+1233+-+Meireles,+Fortaleza+-+CE'
    },

    // Horários de funcionamento
    hours: {
      weekdays: 'Segunda a Sexta: 08:00 - 18:00',
      saturday: 'Sábado: 08:00 - 12:00',
      sunday: 'Domingo: Fechado',
      // Horário formatado simples
      simple: 'Seg-Sex: 8h às 18h | Sáb: 8h às 12h'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 📞 CONTATOS
  // ═══════════════════════════════════════════════════════════════════════════
  contact: {
    // Telefone formatado para exibição
    phone: '(85) 99644-2225',
    // Telefone sem formatação (para links tel:)
    phoneRaw: '5585996442225',
    // Link direto para ligar
    phoneLink: 'tel:+5585996442225',
    
    // WhatsApp
    whatsapp: '5585996442225',
    whatsappFormatted: '(85) 99644-2225',
    whatsappLink: 'https://wa.me/5585996442225',
    whatsappMessage: 'Olá! Gostaria de agendar uma consulta.',
    whatsappLinkWithMessage: 'https://wa.me/5585996442225?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.',
    
    // Email
    email: 'clinicasingularereab@gmail.com',
    emailLink: 'mailto:clinicasingularereab@gmail.com',
    emailSupport: 'clinicasingularereab@gmail.com',
    emailCommercial: 'clinicasingularereab@gmail.com',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🌐 REDES SOCIAIS
  // ═══════════════════════════════════════════════════════════════════════════
  social: {
    // Instagram
    instagram: {
      username: '@singularereab',
      url: 'https://www.instagram.com/singularereab/',
      display: 'Instagram'
    },
    
    // Facebook
    facebook: {
      username: 'clinicasingulare',
      url: 'https://www.facebook.com/clinicasingulare',
      display: 'Facebook'
    },
    
    // LinkedIn
    linkedin: {
      company: 'clinicasingulare',
      url: 'https://www.linkedin.com/company/clinicasingulare',
      display: 'LinkedIn'
    },
    
    // YouTube (opcional)
    youtube: {
      channel: 'UCxxx', // Substituir pelo ID real do canal
      url: 'https://www.youtube.com/channel/UCxxx',
      display: 'YouTube'
    },
    
    // Twitter/X (opcional)
    twitter: {
      username: '@clinicasingulare',
      url: 'https://twitter.com/clinicasingulare',
      display: 'Twitter'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🔍 SEO E METADATA
  // ═══════════════════════════════════════════════════════════════════════════
  seo: {
    siteName: 'Clínica Singulare',
    siteUrl: 'https://clinicasingulare.com.br',
    
    // Títulos padrão
    defaultTitle: 'Clínica Singulare - Reabilitação Infantil em Fortaleza',
    titleTemplate: '%s | Clínica Singulare',
    
    // Descrições
    description: 'Especializada em reabilitação infantil, oferecemos tratamentos personalizados para o desenvolvimento integral de crianças com necessidades especiais.',
    shortDescription: 'Clínica especializada em reabilitação infantil em Fortaleza - CE',
    
    // Keywords principais
    keywords: [
      'reabilitação infantil',
      'fisioterapia pediátrica',
      'terapia ocupacional infantil',
      'fonoaudiologia infantil',
      'psicologia infantil',
      'desenvolvimento infantil',
      'fortaleza',
      'ceará'
    ].join(', '),
    
    // Imagem padrão para compartilhamento
    image: '/LOGO HORIZONTAL copia.png',
    imageAlt: 'Logo Clínica Singulare',
    
    // Idioma
    language: 'pt-BR',
    locale: 'pt_BR',
    
    // Autor
    author: 'Clínica Singulare',
    
    // Tipo de organização
    type: 'website',
    organizationType: 'MedicalClinic'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 📊 ANALYTICS E TRACKING
  // ═══════════════════════════════════════════════════════════════════════════
  analytics: {
    // Google Analytics 4
    googleAnalyticsId: process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX',
    
    // Google Tag Manager (opcional)
    googleTagManagerId: process.env.REACT_APP_GTM_ID || '',
    
    // Facebook Pixel (opcional)
    facebookPixelId: process.env.REACT_APP_FB_PIXEL_ID || '',
    
    // Hotjar (opcional)
    hotjarId: process.env.REACT_APP_HOTJAR_ID || '',
    
    // Microsoft Clarity (opcional)
    clarityId: process.env.REACT_APP_CLARITY_ID || ''
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🔐 SERVIÇOS EXTERNOS
  // ═══════════════════════════════════════════════════════════════════════════
  services: {
    // Sentry (Error Tracking)
    sentryDsn: process.env.REACT_APP_SENTRY_DSN || '',
    
    // Google Search Console
    googleSiteVerification: process.env.REACT_APP_GOOGLE_VERIFICATION || '',
    
    // Google My Business
    googleMyBusinessId: '',
    
    // ReCaptcha (para formulários)
    recaptchaSiteKey: process.env.REACT_APP_RECAPTCHA_KEY || ''
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🌐 API E BACKEND
  // ═══════════════════════════════════════════════════════════════════════════
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001',
    timeout: 30000, // 30 segundos
    
    // Endpoints principais
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
    
    // Logos
    logos: {
      main: '/LOGO HORIZONTAL copia.png',
      icon: '/ICONE.png',
      favicon: '/favicon.ico'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ⚙️ CONFIGURAÇÕES GERAIS
  // ═══════════════════════════════════════════════════════════════════════════
  app: {
    // Ambiente
    environment: process.env.NODE_ENV || 'development',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    
    // Versão do app
    version: '1.0.0',
    
    // Configurações de cache
    cacheEnabled: true,
    cacheDuration: 3600000, // 1 hora em ms
    
    // Configurações de performance
    lazyLoadImages: true,
    enableAnimations: true,
    
    // Configurações de formulários
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedFileTypes: ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
  }
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// 🛠️ FUNÇÕES AUXILIARES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Retorna o link do WhatsApp com mensagem personalizada
 */
export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || config.contact.whatsappMessage;
  return `${config.contact.whatsappLink}?text=${encodeURIComponent(message)}`;
};

/**
 * Retorna o link de email com assunto
 */
export const getEmailLink = (subject?: string, body?: string): string => {
  let link = config.contact.emailLink;
  if (subject) link += `?subject=${encodeURIComponent(subject)}`;
  if (body) link += `&body=${encodeURIComponent(body)}`;
  return link;
};

/**
 * Retorna o endereço formatado para SEO
 */
export const getFormattedAddress = (): string => {
  const { street, complement, neighborhood, city, state, cep } = config.clinic.address;
  return `${street}, ${complement} - ${neighborhood}, ${city} - ${state}, ${cep}`;
};

/**
 * Retorna todas as redes sociais em formato de array
 * Filtra apenas as redes sociais com URLs válidas (sem placeholders)
 */
export const getSocialLinks = () => {
  const links = [
    { name: 'Instagram', url: config.social.instagram.url, icon: 'fab fa-instagram' },
    { name: 'Facebook', url: config.social.facebook.url, icon: 'fab fa-facebook-f' },
    { name: 'LinkedIn', url: config.social.linkedin.url, icon: 'fab fa-linkedin-in' },
    { name: 'YouTube', url: config.social.youtube.url, icon: 'fab fa-youtube' },
  ];
  
  // Filtra URLs que contêm placeholders como 'UCxxx'
  return links.filter(social => !social.url.includes('UCxxx'));
};

// Exportar tipo para TypeScript
export type Config = typeof config;

// Exportar como default também
export default config;
