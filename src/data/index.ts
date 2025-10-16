/**
 * ════════════════════════════════════════════════════════════════════════════
 * 📁 ÍNDICE CENTRALIZADO DE DADOS
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * Este arquivo centraliza todos os imports de dados do site.
 * Use este arquivo para importar dados em qualquer componente.
 * 
 * 📝 COMO USAR:
 * import { heroSlides, teamData, treatmentsData } from '../data';
 */

// Hero Section
export { heroSlides } from './hero/heroData';
export type { HeroSlide } from './hero/heroData';

// About Section
export { aboutData } from './about/aboutData';
export type { AboutData } from './about/aboutData';

// Services Section
export { servicesData } from './services/servicesData';
export type { Service } from './services/servicesData';

// Treatments
export { treatmentsData } from './treatments/treatmentsData';
export type { Treatment } from './treatments/treatmentsData';

// Team
export { teamData } from './team/teamData';
export type { TeamMember } from './team/teamData';

// Testimonials
export { testimonialsData } from './testimonials/testimonialsData';
export type { Testimonial } from './testimonials/testimonialsData';

// Blog
export { blogPostsData } from './blog/blogData';
export type { BlogPost } from './blog/blogData';

// Events
export { eventsData } from './events/eventsData';
export type { Event } from './events/eventsData';

// Programs
export { programsData } from './programs/programsData';
export type { Program } from './programs/programsData';

// Contact
export { contactData } from './contact/contactData';
export type { ContactInfo } from './contact/contactData';
