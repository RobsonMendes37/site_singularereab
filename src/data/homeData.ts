
// Carregamento dinâmico via JSON (CMS)
let dynamicHome: any = null;
try {
    dynamicHome = require('./home.json');
} catch (e) {
    console.warn('Erro ao carregar dados da Home dinâmicos:', e);
}

// Dados estáticos (mantidos como backup/fallback)
const staticHomeData = {
    seo: {
        title: "Clínica Singulare - Reabilitação Infantil em Fortaleza | Fisioterapia e Terapia Ocupacional",
        description: "Centro especializado em reabilitação infantil em Fortaleza/CE. Fisioterapia pediátrica, Terapia Ocupacional, Fonoaudiologia e Psicologia Infantil. Atendimento humanizado e personalizado para crianças com necessidades especiais.",
        keywords: [
            'clínica reabilitação infantil fortaleza',
            'fisioterapia pediátrica fortaleza'
        ]
    },
    sections: {
        hero: { id: "home-top" },
        treatments: { title: "Tratamentos" },
        gallery: {
            title: "Conheça Nossa Estrutura",
            description: "Ambientes cuidadosamente planejados...",
            badge: "NOSSA ESTRUTURA"
        },
        team: { title: "Nossa Equipe" },
        testimonials: { title: "Depoimentos" },
        blog: {
            title: "Blog & Notícias",
            description: "Artigos e informações especializadas",
            cta: "Ver Todos os Artigos"
        },
        contact: {
            title: "Venha nos Visitar!",
            cta: "Ainda com dúvidas? Entre em contato",
            subtitle: "Agende via WhatsApp"
        },
        footer: {
            scheduleTitle: "Horário de Atendimento",
            locationTitle: "Localização",
            copySuffix: ", Todos os direitos reservados.",
            devNote: "Desenvolvido com ❤️ para ajudar crianças especiais"
        }
    }
};

export const homeData = dynamicHome || staticHomeData;
