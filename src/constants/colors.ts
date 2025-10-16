/**
 * Sistema de Cores da Clínica Singulare
 * Design tokens para manter consistência visual
 */

export const COLORS = {
  // Cores Primárias - Identidade Visual 2025
  primary: {
    main: '#143557',        // Azul marinho - Cor principal
    light: '#1a4c7a',       // Azul marinho claro
    dark: '#0d2438',        // Azul marinho escuro
    contrast: '#FFFFFF',
  },

  // Cores Secundárias
  secondary: {
    main: '#12B2C9',        // Azul turquesa
    light: '#4ec5d6',       // Azul turquesa claro
    dark: '#0e8fa3',        // Azul turquesa escuro
    contrast: '#FFFFFF',
  },

  // Cores de Destaque
  accent: {
    pink: '#B577AF',        // Rosa médio
    pinkLight: '#BEA7D1',   // Lilás claro
    yellow: '#F39C12',
    yellowLight: '#F1C40F',
    blue: '#12B2C9',        // Azul turquesa
    blueLight: '#4ec5d6',   // Azul turquesa claro
  },

  // Cores de Status
  success: {
    main: '#1ABC9C',
    light: '#48C9B0',
    dark: '#16A085',
  },

  warning: {
    main: '#F39C12',
    light: '#F8C471',
    dark: '#D68910',
  },

  danger: {
    main: '#E74C3C',
    light: '#EC7063',
    dark: '#C0392B',
  },

  info: {
    main: '#3498DB',
    light: '#5DADE2',
    dark: '#2980B9',
  },

  // Tons de Cinza
  gray: {
    50: '#F8F9FA',
    100: '#F0F4F8',
    200: '#E8F4F8',
    300: '#E0E8F0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#5a6c7d',
    800: '#4a5568',
    900: '#2d3748',
  },

  // Cores de Texto
  text: {
    primary: '#1a202c',
    secondary: '#2d3748',
    tertiary: '#4a5568',
    muted: '#718096',
    disabled: '#a0aec0',
  },

  // Backgrounds
  background: {
    default: '#FFFFFF',
    paper: '#F8F9FA',
    light: '#F0F4F8',
    gradient: {
      gradient1: 'linear-gradient(135deg, #143557 0%, #12B2C9 100%)', // Azul marinho → Turquesa
      gradient2: 'linear-gradient(135deg, #12B2C9 0%, #B577AF 100%)', // Turquesa → Rosa
      gradient3: 'linear-gradient(135deg, #12B2C9 0%, #BEA7D1 100%)', // Turquesa → Lilás
      primary: 'linear-gradient(135deg, #143557 0%, #12B2C9 100%)',
      blue: 'linear-gradient(135deg, #F8F9FF 0%, #FFFFFF 50%, #e6f7fa 100%)',
      pink: 'linear-gradient(135deg, #B577AF 0%, #BEA7D1 100%)',
      purple: 'linear-gradient(135deg, #B577AF 0%, #BEA7D1 100%)',
    },
  },

  // Bordas
  border: {
    light: '#f0f4f8',
    main: '#e2e8f0',
    dark: '#cbd5e0',
  },

  // Cores para elementos decorativos
  childish: {
    star: '#F59E0B',
    heart: '#BEA7D1',       // Lilás claro
    green: '#1ABC9C',
    orange: '#F39C12',
    purple: '#B577AF',      // Rosa médio
    blue: '#12B2C9',        // Azul turquesa
    pink: '#B577AF',        // Rosa médio
  },
} as const;

export type ColorToken = typeof COLORS;

