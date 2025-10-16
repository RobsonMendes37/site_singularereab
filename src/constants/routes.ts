/**
 * Constantes de Rotas da Aplicação
 * Centraliza todas as URLs para facilitar manutenção
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  TREATMENTS: '/treatments',
  TREATMENT_DETAIL: '/treatments/:id',
  TEAM: '/team',
  BLOG: '/blog',
  BLOG_POST: '/blog/:slug',
  CONTACT: '/contact',
  GALLERY: '/gallery',
} as const;

export const EXTERNAL_ROUTES = {
  WHATSAPP: (phone: string, message?: string) => 
    `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`,
  GOOGLE_MAPS: (address: string) => 
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  INSTAGRAM: (username: string) => `https://www.instagram.com/${username}`,
  FACEBOOK: (username: string) => `https://www.facebook.com/${username}`,
  YOUTUBE: (channelId: string) => `https://www.youtube.com/channel/${channelId}`,
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];

