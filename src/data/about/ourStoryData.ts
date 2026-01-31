/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DA PÁGINA "NOSSA HISTÓRIA"
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos dentro das aspas ou HTML.
 * 2. Salve o arquivo.
 */

export interface OurStoryData {
    hero: {
        titulo: string;
        subtitulo: string;
    };
    historia: {
        titulo: string;
        paragrafo1: string; // Suporta HTML básico como <strong>
        paragrafo2: string;
        paragrafo3: string;
        imagem: string;
        anoFundacao: string;
    };
    missao: {
        titulo: string;
        texto: string;
    };
    visao: {
        titulo: string;
        texto: string;
    };
    valores: {
        titulo: string;
        lista: string[];
    };
}

// Carregamento dinâmico via JSON (CMS)
let dynamicOurStory: any = null;
try {
    dynamicOurStory = require('./ourStory.json');
} catch (e) {
    console.warn('Erro ao carregar dados da História dinâmicos:', e);
}

// Dados estáticos (mantidos como backup/fallback)
const staticOurStoryData: OurStoryData = {
    hero: {
        titulo: "Nossa História",
        subtitulo: "Uma trajetória de amor e dedicação à vida"
    },
    historia: {
        titulo: "Nossa Trajetória",
        paragrafo1: `<strong>Vancleida e Victor</strong> enfrentaram uma jornada árdua, testemunhando a triste realidade dos tratamentos para crianças neuroatípicas, como o seu amado filho <strong>Ezequiel</strong>. Foi desse desafio que nasceu o sonho do <strong>Centro de Reabilitação Infantil Singulare</strong>.`,
        paragrafo2: `Nossa equipe multidisciplinar é formada por profissionais altamente qualificados nas áreas de <strong>Fisioterapia, Terapia Ocupacional, Fonoaudiologia, Psicologia e Medicina</strong>.`,
        paragrafo3: `Hoje, orgulhosamente atendemos centenas de famílias, transformando vidas e construindo histórias de superação e desenvolvimento. Cada criança que passa por nossa clínica é única, e é por isso que nosso nome carrega o significado de <strong>"singulare"</strong> - porque cada paciente merece um cuidado especial e personalizado.`,
        imagem: "site/vacleida_victor-sobrenos.jpg",
        anoFundacao: "2025"
    },
    missao: {
        titulo: "Nossa Missão",
        texto: "Proporcionar um novo olhar sendo único, singular e individualizado para reabilitação infantil acolhendo cada mãe neuro atípica com um atendimento psicológico direcionado a todos os momentos desde a gestação atípica até o fechamento do diagnóstico e o tratamento adequado."
    },
    visao: {
        titulo: "Visão",
        texto: "Ser uma clinica de referência em busca de novas técnicas e conhecimentos voltados para a reabilitação infantil promovendo o desenvolvimento motor, cognitivo e emocional das crianças, garantindo um atendimento humanizado, inovador baseado em evidências científicas."
    },
    valores: {
        titulo: "Valores",
        lista: [
            "<strong>Humanização e Acolhimento:</strong> Atendimento empático, respeitoso e individualizado para cada criança e família.",
            "<strong>Excelência Profissional:</strong> Equipe qualificada e atualização constante para oferecer terapias eficazes.",
            "<strong>Compromisso com o desenvolvimento Infantil:</strong> Foco na evolução das crianças, promovendo autonomia e qualidade de vida."
        ]
    }
};

export const ourStoryData: OurStoryData = dynamicOurStory || staticOurStoryData;
