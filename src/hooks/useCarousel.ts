import { useState, useCallback, useEffect } from 'react';

interface UseCarouselProps {
  totalItems: number;
  itemsPerPage: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

interface UseCarouselReturn {
  currentIndex: number;
  totalPages: number;
  goToNext: () => void;
  goToPrevious: () => void;
  goToSlide: (index: number) => void;
  visibleRange: {
    start: number;
    end: number;
  };
}

/**
 * Hook personalizado para gerenciar carrosséis
 * Facilita a navegação e controle de slides
 * 
 * @example
 * const { currentIndex, goToNext, goToPrevious, visibleRange } = useCarousel({
 *   totalItems: testimonials.length,
 *   itemsPerPage: 2,
 *   autoPlay: true,
 *   autoPlayInterval: 5000
 * });
 */
export const useCarousel = ({
  totalItems,
  itemsPerPage,
  autoPlay = false,
  autoPlayInterval = 5000,
}: UseCarouselProps): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalPages) {
      setCurrentIndex(index);
    }
  }, [totalPages]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext]);

  // Calcula o range visível
  const visibleRange = {
    start: currentIndex * itemsPerPage,
    end: Math.min((currentIndex + 1) * itemsPerPage, totalItems),
  };

  return {
    currentIndex,
    totalPages,
    goToNext,
    goToPrevious,
    goToSlide,
    visibleRange,
  };
};

