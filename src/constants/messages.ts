/**
 * Mensagens e Textos da Aplicação
 * Facilita internacionalização futura
 */

export const MESSAGES = {
  // Informações da Clínica
  clinic: {
    name: 'Clínica Singulare',
    tagline: 'Cuidado especializado para o desenvolvimento infantil',
    address: 'Av. Dom Luís, 1233 - Sala 1108/1109 - Meireles, Fortaleza - CE, 60160-230',
    phone: '(85) 99644-2225',
    phoneRaw: '5585996442225',
    email: 'contato@clinicasingulare.com.br',
    hours: {
      weekdays: 'Segunda a Sexta: 08:00 - 18:00',
      saturday: 'Sábado: 08:00 - 12:00',
      sunday: 'Domingo: Fechado',
    },
  },

  // Redes Sociais
  social: {
    instagram: '@clinicasingulare',
    facebook: 'clinicasingulare',
    youtube: 'UCxxx',
  },

  // Mensagens de Sucesso
  success: {
    contactSent: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    appointmentScheduled: 'Consulta agendada com sucesso!',
    subscribed: 'Inscrição realizada com sucesso!',
  },

  // Mensagens de Erro
  error: {
    generic: 'Ops! Algo deu errado. Tente novamente.',
    network: 'Erro de conexão. Verifique sua internet.',
    validation: 'Por favor, verifique os campos preenchidos.',
    required: 'Este campo é obrigatório.',
    invalidEmail: 'E-mail inválido.',
    invalidPhone: 'Telefone inválido.',
  },

  // Botões
  buttons: {
    learnMore: 'Saiba Mais',
    contact: 'Entre em Contato',
    schedule: 'Agendar Consulta',
    send: 'Enviar',
    cancel: 'Cancelar',
    close: 'Fechar',
    back: 'Voltar',
    next: 'Próximo',
    previous: 'Anterior',
    viewMore: 'Ver Mais',
    readMore: 'Ler Mais',
    whatsapp: 'Falar no WhatsApp',
  },

  // Validações de Formulário
  validation: {
    required: 'Campo obrigatório',
    email: 'E-mail inválido',
    phone: 'Telefone inválido',
    minLength: (min: number) => `Mínimo de ${min} caracteres`,
    maxLength: (max: number) => `Máximo de ${max} caracteres`,
  },

  // Loading States
  loading: {
    default: 'Carregando...',
    sending: 'Enviando...',
    processing: 'Processando...',
    please_wait: 'Por favor, aguarde...',
  },

  // WhatsApp Templates
  whatsapp: {
    appointmentRequest: 'Olá! Gostaria de agendar uma consulta na Clínica Singulare.',
    infoRequest: 'Olá! Gostaria de mais informações sobre os serviços da Clínica Singulare.',
    treatmentInfo: (treatment: string) => 
      `Olá! Gostaria de informações sobre o tratamento de ${treatment}.`,
  },

  // SEO Meta
  seo: {
    home: {
      title: 'Clínica Singulare - Reabilitação Infantil em Fortaleza',
      description: 'Clínica especializada em reabilitação e desenvolvimento infantil com equipe multidisciplinar. Fisioterapia, fonoaudiologia, terapia ocupacional e mais.',
    },
    about: {
      title: 'Sobre Nós - Clínica Singulare',
      description: 'Conheça a história, missão e valores da Clínica Singulare. Equipe especializada em atendimento infantil.',
    },
    treatments: {
      title: 'Tratamentos - Clínica Singulare',
      description: 'Conheça nossos tratamentos especializados: fisioterapia, fonoaudiologia, psicologia, terapia ocupacional e mais.',
    },
    contact: {
      title: 'Contato - Clínica Singulare',
      description: 'Entre em contato conosco. Agende sua consulta pelo WhatsApp ou visite nossa clínica em Meireles, Fortaleza.',
    },
  },
} as const;

export type Messages = typeof MESSAGES;

