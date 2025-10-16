import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
// import ProgramsSection from '../components/sections/ProgramsSection';
// import EventsSection from '../components/sections/EventsSection';
import BlogSection from '../components/sections/BlogSection';
import TeamSection from '../components/sections/TeamSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import TreatmentsSection from '../components/sections/TreatmentsSection';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { SEO } from '../components/common/SEO';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Se houver hash na URL, faz scroll até a seção
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove o #
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100; // Altura do header fixo
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Pequeno delay para garantir que o DOM está pronto
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Clínica Singulare - Reabilitação Infantil em Fortaleza | Fisioterapia e Terapia Ocupacional"
        description="Centro especializado em reabilitação infantil em Fortaleza/CE. Fisioterapia pediátrica, Terapia Ocupacional, Fonoaudiologia e Psicologia Infantil. Atendimento humanizado e personalizado para crianças com necessidades especiais."
        keywords={[
          'clínica reabilitação infantil fortaleza',
          'fisioterapia pediátrica fortaleza',
          'terapia ocupacional infantil fortaleza',
          'fonoaudiologia infantil fortaleza',
          'psicologia infantil fortaleza',
          'TEA autismo fortaleza',
          'paralisia cerebral tratamento fortaleza',
          'atraso desenvolvimento infantil',
          'clínica crianças especiais fortaleza',
          'fisioterapia bebês prematuros',
          'estimulação precoce fortaleza'
        ]}
        url="https://clinicasingulare.com.br"
        type="website"
      />
      
      <HeroSection />
      
      <ScrollReveal direction="up" delay={0.1}>
        <div id="about-section">
          <AboutSection />
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <div id="services-section">
          <ServicesSection />
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <div id="treatments-section">
          <TreatmentsSection />
        </div>
      </ScrollReveal>
      
      {/* <ProgramsSection /> */}
      {/* <EventsSection /> */}
      
      <ScrollReveal direction="up" delay={0.1}>
        <div id="gallery-section">
          <GallerySection />
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <div id="team-section">
          <TeamSection />
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <div id="testimonials-section">
          <TestimonialsSection />
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <div id="blog-section">
          <BlogSection />
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <div id="contact-section">
          <ContactSection />
        </div>
      </ScrollReveal>
    </>
  );
};

export default Home;
