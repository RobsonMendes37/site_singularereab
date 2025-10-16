import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Hook para navegação com scroll suave para seções
 * 
 * @example
 * const scrollTo = useScrollToSection();
 * <button onClick={() => scrollTo('about-section')}>Ir para Sobre</button>
 */
export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = useCallback((sectionId: string) => {
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
  }, []);

  const navigateToSection = useCallback((sectionId: string) => {
    if (isHomePage) {
      // Já está na home, apenas faz scroll
      scrollToSection(sectionId);
    } else {
      // Navega para home e depois faz scroll
      navigate('/');
      // Aguarda a navegação completar antes de fazer scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [isHomePage, navigate, scrollToSection]);

  return navigateToSection;
};

