import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { testimonialsData } from '../../../data';
import { useCarousel } from '../../../hooks/useCarousel';
import { useBreakpoints } from '../../../hooks/useWindowSize';
import { COLORS } from '../../../constants/colors';

const TestimonialsSection: React.FC = () => {
  // 🎯 DADOS CENTRALIZADOS - Agora vem de data/testimonials/testimonialsData.ts
  // Mapeia testimonialsData para o formato que o componente espera
  const testimonials = testimonialsData.map(dep => ({
    id: dep.id,
    author: {
      name: dep.nome,
      role: dep.profissao,
      image: require(`../../../assets/images/${dep.foto}`)
    },
    text: dep.depoimento,
    rating: dep.avaliacao,
    date: new Date().toISOString(), // Data atual como placeholder
    verified: true // Todos são verificados
  }));
  
  // Detecta o tamanho da tela para ajustar itens por página
  const { isMobile } = useBreakpoints();
  const itemsPerPage = isMobile ? 1 : 3; // Desktop: 3 depoimentos, Mobile: 1

  // Usa o hook personalizado para gerenciar o carrossel
  const { currentIndex, totalPages, goToNext, goToPrevious, goToSlide, visibleRange } = useCarousel({
    totalItems: testimonials.length,
    itemsPerPage,
  });

  const visibleTestimonials = testimonials.slice(visibleRange.start, visibleRange.end);
  
  // Auto-rotate a cada 5 segundos
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastManualChangeRef = useRef<number>(Date.now());

  useEffect(() => {
    const startAutoRotate = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      timerRef.current = setInterval(() => {
        const timeSinceLastManualChange = Date.now() - lastManualChangeRef.current;
        if (timeSinceLastManualChange >= 5000) {
          goToNext();
        }
      }, 5000);
    };

    startAutoRotate();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [goToNext]);

  // Funções que resetam o timer ao navegar manualmente
  const handlePrevious = () => {
    lastManualChangeRef.current = Date.now();
    goToPrevious();
  };

  const handleNext = () => {
    lastManualChangeRef.current = Date.now();
    goToNext();
  };

  const handleGoToSlide = (index: number) => {
    lastManualChangeRef.current = Date.now();
    goToSlide(index);
  };

  return (
    <div className="container-fluid testimonial py-5" style={{
      background: 'linear-gradient(135deg, #FFF8F9 0%, #FFFFFF 50%, #F8F9FF 100%)'
    }}>
      <Container className="py-1">
        <div className="mx-auto text-center wow fadeIn mb-5" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
        <h1 className="display-4 fw-normal" style={{ 
            fontFamily: "'Pacifico', cursive",
            color: 'var(--bs-primary)',
            letterSpacing: '-0.02em',
            lineHeight: '1.2'
          }}>
            Depoimentos
        </h1>
        </div>
        
        <div className="testimonial-carousel wow fadeIn" data-wow-delay="0.3s">
          <div className="position-relative">
            {/* Carrossel Container */}
            <Row className="g-4 justify-content-center">
              {visibleTestimonials.map((testimonial, _index) => (
                <Col key={testimonial.id} lg={4} md={6} xs={12}>
                  <div 
                    className="testimonial-card bg-white position-relative"
                    style={{
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      border: `3px solid ${COLORS.border.main}`,
                      borderRadius: '20px',
                      padding: '30px',
                      transform: 'scale(1)',
                      minHeight: '320px',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                      background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FF 100%)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.15)';
                      e.currentTarget.style.borderColor = COLORS.primary.main;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                      e.currentTarget.style.borderColor = COLORS.border.main;
                    }}
                  >
                    {/* Aspas decorativas */}
                    <i 
                      className="fa fa-quote-left" 
                      style={{ 
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        fontSize: '38px', // Reduzido de 45px para 38px
                        color: COLORS.border.dark,
                        opacity: '0.4'
                      }}
                    ></i>

                    <div className="d-flex flex-column h-100" style={{ position: 'relative', zIndex: 2 }}>
                      {/* Header com nome e estrelas */}
                      <div className="mb-4 mt-2">
                        <h4 className="mb-2 fs-5 fw-bold" style={{ 
                          fontFamily: "'Nunito', sans-serif",
                          color: COLORS.text.primary
                        }}>
                          {testimonial.author.name}
                        </h4>
                        <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>
                          {testimonial.author.role}
                        </p>
                        
                        {/* Estrelas */}
                        <div className="d-flex align-items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star me-1" style={{ 
                              fontSize: '16px', 
                              color: COLORS.childish.star
                            }}></i>
                          ))}
                        </div>

                        {/* Data do depoimento + Badge Google */}
                        <div className="d-flex align-items-center gap-2">
                          <div className="small" style={{
                            color: COLORS.text.muted,
                            fontWeight: '500'
                          }}>
                            <i className="far fa-calendar-alt me-2"></i>
                            {new Date(testimonial.date).toLocaleDateString('pt-BR', { 
                              year: 'numeric', 
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          
                          {testimonial.verified && (
                            <span className="d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill text-white fw-semibold" style={{
                              background: COLORS.secondary.main,
                              fontSize: '10px'
                            }}>
                              <i className="fab fa-google"></i>
                              Google
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Conteúdo do depoimento */}
                      <div className="flex-grow-1">
                        <p 
                          className="mb-0 fs-6 fst-italic text-start fw-normal" 
                          style={{ 
                            fontFamily: "'Nunito', sans-serif",
                            lineHeight: '1.8',
                            color: COLORS.text.secondary
                          }}
                        >
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Navigation Arrows - Mostrar sempre que houver mais de 1 página */}
            {totalPages > 1 && (
              <>
                <button 
                  className="testimonial-nav testimonial-nav-prev position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center rounded-circle border-0 text-white shadow"
                  onClick={handlePrevious}
                  aria-label="Depoimentos anteriores"
                  style={{
                    left: isMobile ? '10px' : '-60px',
                    background: 'linear-gradient(135deg, var(--bs-primary), var(--bs-secondary))',
                    width: isMobile ? '45px' : '55px',
                    height: isMobile ? '45px' : '55px',
                    fontSize: isMobile ? '18px' : '22px',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--bs-secondary), var(--bs-primary))';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--bs-primary), var(--bs-secondary))';
                    e.currentTarget.style.transform = 'translateY(-50%)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
                  }}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                
                <button 
                  className="testimonial-nav testimonial-nav-next position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center rounded-circle border-0 text-white shadow"
                  onClick={handleNext}
                  aria-label="Próximos depoimentos"
                  style={{
                    right: isMobile ? '10px' : '-60px',
                    background: 'linear-gradient(135deg, var(--bs-primary), var(--bs-secondary))',
                    width: isMobile ? '45px' : '55px',
                    height: isMobile ? '45px' : '55px',
                    fontSize: isMobile ? '18px' : '22px',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--bs-secondary), var(--bs-primary))';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--bs-primary), var(--bs-secondary))';
                    e.currentTarget.style.transform = 'translateY(-50%)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
                  }}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}
          </div>

          {/* Dots Navigation */}
          {totalPages > 1 && (
            <div className="testimonial-dots d-flex justify-content-center mt-4 gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot border-0 rounded-2 ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleGoToSlide(index)}
                  aria-label={`Ir para página ${index + 1}`}
                  style={{
                    width: index === currentIndex ? '24px' : '10px',
                    height: '10px',
                    background: index === currentIndex ? 'var(--bs-secondary)' : '#ddd',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
