import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { SECOES } from '../../../content';
import './HeroSection.css';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastManualChange, setLastManualChange] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 🎯 DADOS CENTRALIZADOS - Agora vem de content.ts
  const slides: HeroSlide[] = SECOES.hero.slides.map((slide, index) => ({
    id: index + 1,
    title: slide.titulo,
    subtitle: slide.subtitulo,
    backgroundImage: slide.imagemFundo
  }));

  // Auto-play com pausa após clique manual
  useEffect(() => {
    const startAutoPlay = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      timerRef.current = setInterval(() => {
        const timeSinceLastManualChange = Date.now() - lastManualChange;
        
        // Só troca automaticamente se passaram 10 segundos desde o último clique manual
        if (timeSinceLastManualChange >= 10000 || lastManualChange === 0) {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }
      }, 10000);
    };

    startAutoPlay();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [slides.length, lastManualChange]);

  const handleManualChange = (newIndex: number) => {
    setCurrentSlide(newIndex);
    setLastManualChange(Date.now());
  };

  const goToPrevious = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    handleManualChange(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    handleManualChange(newIndex);
  };

  const goToSlide = (index: number) => {
    handleManualChange(index);
  };

  return (
    <div 
      className={`container-fluid hero-section hero-slide-${currentSlide} position-relative wow fadeIn`}
      data-wow-delay="0.1s"
      style={{
        backgroundImage: `url(${require(`../../../assets/images/${slides[currentSlide].backgroundImage}`)})`,
      }}
    >
      <Container className=" hero-section-container">
        <Row className="g-5">
          <Col lg={7} md={12}>
            <motion.h1
              className="mb-3 hero-title"
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.h2
              className="mb-3 text-white hero-subtitle"
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
          </Col>
        </Row>
      </Container>

      {/* Setas de Navegação */}
      <button
        className="hero-nav hero-nav-prev"
        onClick={goToPrevious}
        aria-label="Slide anterior"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <button
        className="hero-nav hero-nav-next"
        onClick={goToNext}
        aria-label="Próximo slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Indicadores (Dots) */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

