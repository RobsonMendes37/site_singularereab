/**
 * Sistema de Tipografia Padronizado - Clínica Singulare
 * 
 * Este arquivo centraliza todos os estilos de texto do site
 * para garantir consistência visual em todas as páginas
 */

// ============================================
// CONFIGURAÇÃO DE FONTES
// ============================================

export const fontFamilies = {
  primary: "'Nunito', sans-serif",    // Fonte principal (similar à Candara)
  secondary: "'Nunito', sans-serif",  // Fonte secundária
  heading: "'Pacifico', cursive",     // Fonte para títulos (similar à Aloha March)
  body: "'Nunito', sans-serif",       // Fonte para corpo de texto
};

// ============================================
// TAMANHOS DE FONTE (em rem)
// ============================================

export const fontSizes = {
  // Títulos Principais (H1)
  h1: {
    desktop: '3.5rem',    // 56px
    tablet: '2.8rem',     // 44px
    mobile: '2.2rem',     // 35px
  },
  
  // Títulos Secundários (H2)
  h2: {
    desktop: '2.5rem',    // 40px
    tablet: '2rem',       // 32px
    mobile: '1.75rem',    // 28px
  },
  
  // Títulos Terciários (H3)
  h3: {
    desktop: '1.75rem',   // 28px
    tablet: '1.5rem',     // 24px
    mobile: '1.375rem',   // 22px
  },
  
  // Títulos Quaternários (H4)
  h4: {
    desktop: '1.375rem',  // 22px
    tablet: '1.25rem',    // 20px
    mobile: '1.125rem',   // 18px
  },
  
  // Títulos Pequenos (H5)
  h5: {
    desktop: '1.125rem',  // 18px
    tablet: '1rem',       // 16px
    mobile: '0.938rem',   // 15px
  },
  
  // Corpo de Texto
  body: {
    large: '1.125rem',    // 18px - Texto destaque
    regular: '1rem',      // 16px - Texto normal
    small: '0.875rem',    // 14px - Texto pequeno
    tiny: '0.75rem',      // 12px - Texto muito pequeno
  },
  
  // Botões
  button: {
    large: '1.125rem',    // 18px
    regular: '1rem',      // 16px
    small: '0.875rem',    // 14px
  },
};

// ============================================
// PESOS DE FONTE
// ============================================

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

// ============================================
// ALTURA DE LINHA (Line Height)
// ============================================

export const lineHeights = {
  tight: 1.2,      // Títulos curtos
  snug: 1.4,       // Títulos médios
  normal: 1.6,     // Corpo de texto
  relaxed: 1.8,    // Texto longo, artigos
  loose: 2.0,      // Espaçamento extra
};

// ============================================
// ESPAÇAMENTO DE LETRAS (Letter Spacing)
// ============================================

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// ============================================
// CORES DE TEXTO
// ============================================

export const textColors = {
  // Cores principais
  primary: '#87CEEB',        // Azul claro (cor principal da clínica)
  secondary: '#6B46C1',      // Roxo
  
  // Cores de texto
  heading: '#1a202c',        // Quase preto para títulos
  body: '#2d3748',           // Cinza escuro para corpo
  muted: '#718096',          // Cinza médio para texto secundário
  light: '#a0aec0',          // Cinza claro
  white: '#ffffff',          // Branco
  
  // Cores de ação
  success: '#25D366',        // Verde (WhatsApp)
  warning: '#F59E0B',        // Amarelo/Laranja
  error: '#E53E3E',          // Vermelho
  info: '#4285F4',           // Azul (Google)
};

// ============================================
// ESTILOS PRÉ-DEFINIDOS
// ============================================

export const textStyles = {
  // Títulos de Página (Hero)
  pageTitle: {
    fontSize: fontSizes.h1.desktop,
    fontWeight: fontWeights.extraBold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacings.tight,
    color: textColors.heading,
    fontFamily: fontFamilies.heading,
  },
  
  // Títulos de Seção
  sectionTitle: {
    fontSize: fontSizes.h2.desktop,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacings.tight,
    color: textColors.primary,
    fontFamily: fontFamilies.heading,
  },
  
  // Sub-títulos
  subtitle: {
    fontSize: fontSizes.h3.desktop,
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacings.normal,
    color: textColors.heading,
    fontFamily: fontFamilies.heading,
  },
  
  // Corpo de texto padrão
  bodyText: {
    fontSize: fontSizes.body.regular,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacings.normal,
    color: textColors.body,
    fontFamily: fontFamilies.body,
  },
  
  // Texto destacado
  highlighted: {
    fontSize: fontSizes.body.large,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.normal,
    color: textColors.heading,
    fontFamily: fontFamilies.body,
  },
  
  // Texto pequeno (legendas, etc)
  caption: {
    fontSize: fontSizes.body.small,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.wide,
    color: textColors.muted,
    fontFamily: fontFamilies.body,
  },
  
  // Texto de botão
  button: {
    fontSize: fontSizes.button.regular,
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacings.wide,
    textTransform: 'uppercase' as const,
    fontFamily: fontFamilies.primary,
  },
};

// ============================================
// UTILITÁRIOS
// ============================================

/**
 * Converte estilos de texto em string CSS inline
 */
export const getTextStyle = (styleName: keyof typeof textStyles) => {
  return textStyles[styleName];
};

/**
 * Cria um objeto de estilo responsivo
 */
export const createResponsiveText = (
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  weight: keyof typeof fontWeights = 'bold'
) => ({
  fontSize: fontSizes[size].desktop,
  fontWeight: fontWeights[weight],
  lineHeight: lineHeights.snug,
  fontFamily: fontFamilies.heading,
  
  '@media (max-width: 992px)': {
    fontSize: fontSizes[size].tablet,
  },
  
  '@media (max-width: 576px)': {
    fontSize: fontSizes[size].mobile,
  },
});

/**
 * Aplica truncamento de texto
 */
export const truncateText = (lines: number = 1) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical' as const,
});

// ============================================
// EXEMPLOS DE USO
// ============================================

/*
// Exemplo 1: Usar estilo pré-definido
<h1 style={textStyles.pageTitle}>Título da Página</h1>

// Exemplo 2: Combinar propriedades
<p style={{
  ...textStyles.bodyText,
  color: textColors.muted,
}}>Texto do parágrafo</p>

// Exemplo 3: Usar função utilitária
<div style={getTextStyle('sectionTitle')}>Título da Seção</div>

// Exemplo 4: Texto responsivo
<h2 style={createResponsiveText('h2', 'bold')}>Título Responsivo</h2>

// Exemplo 5: Truncamento
<p style={truncateText(3)}>Texto longo que será cortado...</p>
*/

export default {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  textColors,
  textStyles,
  getTextStyle,
  createResponsiveText,
  truncateText,
};

