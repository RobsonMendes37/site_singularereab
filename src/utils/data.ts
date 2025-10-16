import { Service, Program, Event, ContactInfo } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: "Terapia Ocupacional",
    description: "Desenvolvemos habilidades motoras e cognitivas através de atividades terapêuticas especializadas para crianças com necessidades especiais.",
    icon: "fas fa-gamepad"
  },
  {
    id: 2,
    title: "Fonoaudiologia",
    description: "Trabalhamos a comunicação, linguagem e fala com técnicas especializadas para promover o desenvolvimento da comunicação infantil.",
    icon: "fas fa-sort-alpha-down"
  },
  {
    id: 3,
    title: "Fisioterapia",
    description: "Nossa equipe de fisioterapeutas especializados trabalha para melhorar a mobilidade e força muscular das crianças.",
    icon: "fas fa-users"
  },
  {
    id: 4,
    title: "Psicologia Infantil",
    description: "Oferecemos suporte psicológico especializado para o desenvolvimento emocional e comportamental das crianças.",
    icon: "fas fa-user-nurse"
  }
];

export const programs: Program[] = [
  {
    id: 1,
    title: "Programa de Desenvolvimento Motor",
    description: "Focado no desenvolvimento das habilidades motoras grossas e finas através de atividades lúdicas e terapêuticas.",
    price: "R$ 150,00",
    image: "program-1.jpg",
    teacher: {
      name: "Dr. Ana Silva",
      role: "Fisioterapeuta",
      image: "program-teacher.jpg"
    },
    details: {
      sits: 8,
      lessons: 12,
      hours: 24
    }
  },
  {
    id: 2,
    title: "Terapia da Fala",
    description: "Programa especializado para desenvolvimento da comunicação e linguagem em crianças com atrasos no desenvolvimento.",
    price: "R$ 120,00",
    image: "program-2.jpg",
    teacher: {
      name: "Dra. Maria Santos",
      role: "Fonoaudióloga",
      image: "program-teacher.jpg"
    },
    details: {
      sits: 6,
      lessons: 15,
      hours: 30
    }
  },
  {
    id: 3,
    title: "Integração Sensorial",
    description: "Trabalho especializado para crianças com dificuldades de processamento sensorial e autismo.",
    price: "R$ 180,00",
    image: "program-3.jpg",
    teacher: {
      name: "Dr. Carlos Lima",
      role: "Terapeuta Ocupacional",
      image: "program-teacher.jpg"
    },
    details: {
      sits: 4,
      lessons: 20,
      hours: 40
    }
  }
];

export const events: Event[] = [
  {
    id: 1,
    title: "Workshop de Desenvolvimento Infantil",
    description: "Evento educativo para pais e cuidadores sobre técnicas de estimulação precoce e desenvolvimento infantil.",
    date: "15 Dez",
    time: "14:00 - 16:00",
    location: "São Paulo",
    image: "event-1.jpg"
  },
  {
    id: 2,
    title: "Palestra sobre Autismo",
    description: "Palestra informativa sobre sinais precoces do autismo e estratégias de intervenção precoce.",
    date: "22 Dez",
    time: "19:00 - 21:00",
    location: "São Paulo",
    image: "event-2.jpg"
  },
  {
    id: 3,
    title: "Feira de Saúde Infantil",
    description: "Evento com stands informativos sobre saúde infantil, desenvolvimento e terapias disponíveis.",
    date: "29 Dez",
    time: "09:00 - 17:00",
    location: "São Paulo",
    image: "event-3.jpg"
  }
];

// Blog posts moved to src/data/blog/blogData.ts

// Team members moved to src/data/team/teamData.ts

// Testimonials moved to src/data/testimonials/testimonialsData.ts

export const contactInfo: ContactInfo = {
  address: "Rua das Flores, 123 - Vila Madalena, São Paulo - SP",
  phone: "(11) 3456-7890",
  email: "contato@clinicasingulare.com.br",
  hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h"
};
