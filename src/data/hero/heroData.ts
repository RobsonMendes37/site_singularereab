/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DA SEÇÃO HERO (Carrossel Principal)
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para adicionar novo slide, copie um bloco { } e cole no final
 * 3. Para remover slide, delete o bloco { } inteiro
 * 4. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: Não altere as chaves como "titulo:", "subtitulo:", etc.
 */

export interface HeroSlide {
  id: number;
  titulo: string;
  subtitulo: string;
  imagemFundo: string; // Nome do arquivo na pasta src/assets/images/
  botaoTexto?: string; // Opcional
  botaoLink?: string;  // Opcional
}

// Carregamento dinâmico via JSON (CMS)
let dynamicHero: any = null;
try {
  dynamicHero = require('./hero.json');
} catch (e) {
  console.warn('Erro ao carregar dados do Hero dinâmicos:', e);
}

// Dados estáticos (mantidos como backup/fallback)
const staticHeroSlides: HeroSlide[] = [
  {
    id: 1,
    titulo: "Reabilitação Infantil",
    subtitulo: "Cuidado e Amor para o Desenvolvimento do Seu Filho",
    imagemFundo: "site/hero2.jpeg",
    botaoTexto: "Saiba Mais",
    botaoLink: "/sobre/historia"
  },
  {
    id: 2,
    titulo: "Amor que Transforma Vidas",
    subtitulo: "Terapias que Acolhem e Desenvolvem Potenciais",
    imagemFundo: "site/familia.jpg",
    botaoTexto: "Nossos Tratamentos",
    botaoLink: "/tratamentos"
  },
  {
    id: 3,
    titulo: "Autonomia e Superação",
    subtitulo: "Uma Equipe Dedicada ao Futuro da Sua Criança",
    imagemFundo: "site/hero-img.jpg", /* Note: Keeping same image as placeholder, user can change */
    botaoTexto: "Fale Conosco",
    botaoLink: "/contato"
  }
];

export const heroSlides: HeroSlide[] = (dynamicHero && dynamicHero.slides) || staticHeroSlides;

// 💡 DICAS:
// - Para adicionar novo slide: copie um bloco { } e altere as informações
// - Para trocar imagem: altere o nome do arquivo em "imagemFundo"
// - Para remover botão: delete as linhas "botaoTexto" e "botaoLink"
