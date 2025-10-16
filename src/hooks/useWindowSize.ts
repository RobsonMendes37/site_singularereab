import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Hook para detectar o tamanho da janela
 * Útil para responsividade e ajustes dinâmicos
 * 
 * @example
 * const { width, height } = useWindowSize();
 * const isMobile = width < 768;
 */
export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Handler para atualizar o tamanho
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adiciona listener
    window.addEventListener('resize', handleResize);

    // Chama handler imediatamente
    handleResize();

    // Remove listener na limpeza
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * Hook para detectar breakpoints específicos
 * @example
 * const { isMobile, isTablet, isDesktop } = useBreakpoints();
 */
export const useBreakpoints = () => {
  const { width } = useWindowSize();

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 992,
    isDesktop: width >= 992,
    isLargeDesktop: width >= 1200,
    width,
  };
};

