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

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    titulo: "Seu Filho Merece o Melhor Cuidado",
    subtitulo: "Tratamentos Especializados que Transformam o Desenvolvimento das Crianças",
    imagemFundo: "hero-img.jpg",
    botaoTexto: "Conheça Nossos Tratamentos",
    botaoLink: "/tratamentos"
  },
  {
    id: 2,
    titulo: "Cada Conquista é uma Vitória",
    subtitulo: "Acompanhamos Cada Passo do Crescimento do Seu Filho com Dedicação e Amor",
    imagemFundo: "hero2.jpeg",
    botaoTexto: "Nossa História",
    botaoLink: "/sobre/historia"
  },
  {
    id: 3,
    titulo: "Construindo um Futuro Brilhante",
    subtitulo: "Equipe Multidisciplinar Comprometida com o Desenvolvimento Integral do Seu Filho",
    imagemFundo: "hero-img.jpg",
    botaoTexto: "Agende uma Consulta",
    botaoLink: "/contato"
  }
];

// 💡 DICAS:
// - Para adicionar novo slide: copie um bloco { } e altere as informações
// - Para trocar imagem: altere o nome do arquivo em "imagemFundo"
// - Para remover botão: delete as linhas "botaoTexto" e "botaoLink"
