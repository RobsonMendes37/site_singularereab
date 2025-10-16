import { Service, Program, Event, TeamMember, Testimonial, ContactInfo } from '../types';
import { BlogPost } from '../types/blog.types';

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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Sinais de Atraso no Desenvolvimento: Quando Procurar Ajuda?",
    description: "Identifique os marcos importantes do desenvolvimento infantil e saiba quando é hora de buscar avaliação profissional. Entenda os sinais de alerta em cada fase.",
    date: "20 Out 2025",
    comments: 24,
    author: {
      name: "Dra. Ana Carolina Silva",
      role: "Fisioterapeuta Pediátrica",
      image: "program-teacher.jpg"
    },
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Terapia Ocupacional: Como Ajuda no Desenvolvimento Infantil",
    description: "Descubra como a terapia ocupacional trabalha habilidades motoras, sensoriais e cognitivas, promovendo independência e qualidade de vida para crianças.",
    date: "15 Out 2025",
    comments: 18,
    author: {
      name: "Dra. Mariana Oliveira",
      role: "Terapeuta Ocupacional",
      image: "program-teacher.jpg"
    },
    image: "https://images.unsplash.com/photo-1587616211892-e9b1ea5c24b4?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Autismo: Estratégias Para o Dia a Dia em Casa",
    description: "Dicas práticas e comprovadas para criar rotinas eficazes, melhorar a comunicação e promover a autonomia de crianças autistas no ambiente familiar.",
    date: "10 Out 2025",
    comments: 32,
    author: {
      name: "Dra. Juliana Costa",
      role: "Psicóloga Infantil",
      image: "program-teacher.jpg"
    },
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Fonoaudiologia: Desenvolvimento da Fala e Linguagem",
    description: "Entenda como a fonoaudiologia atua no desenvolvimento da comunicação, linguagem oral e escrita, deglutição e funções orofaciais.",
    date: "05 Out 2025",
    comments: 15,
    author: {
      name: "Dr. Rafael Martins",
      role: "Fonoaudiólogo",
      image: "program-teacher.jpg"
    },
    image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Síndrome de Down: Potencial e Possibilidades",
    description: "Conheça as capacidades e potencialidades das crianças com Síndrome de Down e como a intervenção precoce pode maximizar seu desenvolvimento.",
    date: "28 Set 2025",
    comments: 21,
    author: {
      name: "Dr. Pedro Santos",
      role: "Médico Pediatra",
      image: "program-teacher.jpg"
    },
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "TDAH Infantil: Identificação e Tratamento",
    description: "Saiba como identificar o Transtorno de Déficit de Atenção e Hiperatividade e conheça as abordagens terapêuticas mais eficazes.",
    date: "22 Set 2025",
    comments: 27,
    author: {
      name: "Dra. Camila Rodrigues",
      role: "Psicopedagoga",
      image: "program-teacher.jpg"
    },
    image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600&h=400&fit=crop"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dra. Ana Silva",
    role: "Fisioterapeuta",
    image: "team-1.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Dr. Carlos Lima",
    role: "Terapeuta Ocupacional",
    image: "team-2.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Dra. Maria Santos",
    role: "Fonoaudióloga",
    image: "team-3.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Dr. João Oliveira",
    role: "Psicólogo",
    image: "team-4.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Oliveira",
    profession: "Mãe do Matheus, 6 anos",
    content: "Quando descobrimos que nosso filho tinha autismo, ficamos perdidos. A Clínica Singulare nos acolheu de uma forma incrível! Hoje, após 2 anos de tratamento, o Matheus já consegue se comunicar melhor, brincar com outras crianças e sua autonomia aumentou significativamente. A equipe multidisciplinar trabalha de forma integrada e isso faz toda a diferença. Somos eternamente gratos!",
    rating: 5,
    image: "testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Alessandro Costa",
    profession: "Pai da Sofia, 4 anos",
    content: "Minha filha tinha grandes dificuldades na fala e isso afetava sua autoestima. Na Clínica Singulare, encontramos profissionais dedicados que usam técnicas modernas e eficazes. Em 8 meses de fonoaudiologia, a evolução foi impressionante! Hoje ela conversa, canta e se expressa com confiança. O ambiente acolhedor e lúdico faz com que ela ame vir para as sessões. Recomendo de coração!",
    rating: 5,
    image: "testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Juliana Ferreira",
    profession: "Mãe do Lucas, 5 anos",
    content: "O Lucas nasceu com paralisia cerebral e os médicos disseram que ele teria muitas limitações. Mas na Clínica Singulare, encontramos esperança e um tratamento excepcional! A fisioterapia e a terapia ocupacional transformaram a vida dele. Hoje ele já consegue andar com apoio, segurar objetos e está muito mais independente. A dedicação dos profissionais é algo que nos emociona todos os dias. Obrigada por cuidarem do nosso filho com tanto amor!",
    rating: 5,
    image: "testimonial-3.jpg"
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Pai do Gabriel, 7 anos",
    content: "Como pai de uma criança com TDAH, eu estava desesperado vendo as dificuldades do meu filho na escola. A Clínica Singulare nos ofereceu um plano de tratamento personalizado com psicologia, psicopedagogia e terapia ocupacional. Em 1 ano, o Gabriel melhorou muito sua concentração, está com notas melhores e mais importante, está feliz! A estrutura da clínica é maravilhosa e os profissionais são altamente qualificados. Investimento que vale cada centavo!",
    rating: 5,
    image: "testimonial-1.jpg"
  },
  {
    id: 5,
    name: "Fernanda Alves",
    profession: "Mãe da Isabela, 3 anos",
    content: "A Isabela tinha atraso no desenvolvimento motor e não conseguia sentar sozinha com 2 anos. Chegamos na Clínica Singulare angustiados e fomos recebidos com muito carinho e profissionalismo. O trabalho da fisioterapeuta é sensacional! Hoje, com 3 anos, minha filha já anda, corre e brinca como qualquer criança da idade dela. É emocionante ver essa transformação! A clínica mudou nossas vidas e só tenho gratidão.",
    rating: 5,
    image: "testimonial-2.jpg"
  },
  {
    id: 6,
    name: "Roberto Santos",
    profession: "Pai do Miguel, 8 anos",
    content: "O Miguel foi diagnosticado com síndrome de Down e desde bebê fazemos acompanhamento na Clínica Singulare. O trabalho integrado entre fisioterapia, fonoaudiologia e terapia ocupacional é fundamental para o desenvolvimento dele. Hoje ele está alfabetizado, se comunica super bem e é muito independente nas atividades diárias. A equipe é como uma família para nós! A estrutura da clínica é excelente e o ambiente é super acolhedor. Recomendo com toda certeza!",
    rating: 5,
    image: "testimonial-3.jpg"
  },
  {
    id: 7,
    name: "Fernanda Lima",
    profession: "Mãe da Alice, 5 anos",
    content: "Ambiente acolhedor e profissionais extremamente competentes. A Alice se sente segura e feliz aqui. Gratidão por todo o cuidado e carinho!",
    rating: 5,
    image: "testimonial-1.jpg"
  },
  {
    id: 8,
    name: "Paulo Mendes",
    profession: "Pai do Henrique, 6 anos",
    content: "A evolução do meu filho tem sido surpreendente! A equipe é muito dedicada e sempre nos mantém informados sobre cada progresso. Excelente trabalho!",
    rating: 5,
    image: "testimonial-2.jpg"
  },
  {
    id: 9,
    name: "Camila Rodrigues",
    profession: "Mãe da Beatriz, 4 anos",
    content: "Melhor escolha que fizemos! Os profissionais são altamente capacitados e realmente se importam com o bem-estar das crianças. Muito obrigada!",
    rating: 5,
    image: "testimonial-3.jpg"
  }
];

export const contactInfo: ContactInfo = {
  address: "Rua das Flores, 123 - Vila Madalena, São Paulo - SP",
  phone: "(11) 3456-7890",
  email: "contato@clinicasingulare.com.br",
  hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h"
};
