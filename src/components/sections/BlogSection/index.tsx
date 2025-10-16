import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { blogPostsData } from '../../../data';
import { BlogCard } from '../../blog/BlogCard';
import { Link } from 'react-router-dom';
import { useCarousel } from '../../../hooks/useCarousel';
import { useBreakpoints } from '../../../hooks/useWindowSize';

const BlogSection: React.FC = () => {
  // Pega os 3 posts publicados mais recentes
  const recentPosts = blogPostsData
    .filter(post => post.published)
    .slice(0, 3);

  // Detecta o tamanho da tela para ajustar itens por página
  const { isMobile } = useBreakpoints();
  const itemsPerPage = isMobile ? 1 : 3; // Desktop mostra todos 3, mobile 1 por vez

  // Usa o hook personalizado para gerenciar o carrossel (apenas no mobile)
  const { currentIndex, totalPages, goToNext, goToPrevious, goToSlide, visibleRange } = useCarousel({
    totalItems: recentPosts.length,
    itemsPerPage,
  });

  // No desktop mostra todos, no mobile usa o carrossel
  const visiblePosts = isMobile ? recentPosts.slice(visibleRange.start, visibleRange.end) : recentPosts;

  return (
    <div className="container-fluid blog bg-light px-0">
      <Container fluid className="py-5 px-3 px-md-4">
        <div className="mx-auto text-center wow fadeIn mb-5" data-wow-delay="0.1s">
        <h1 className="display-4 fw-normal mb-4" style={{ 
            fontFamily: "'Pacifico', cursive",
            color: 'var(--bs-primary)',
            letterSpacing: '-0.02em',
            lineHeight: '1.2'
          }}>
            Blog & Notícias
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Artigos e informações especializadas sobre desenvolvimento e reabilitação infantil
          </p>
        </div>
        
        {/* Carrossel de Blog */}
        <div className="blog-carousel wow fadeIn" data-wow-delay="0.3s">
          <div className="position-relative">
            {/* Carrossel Container */}
            <Row className="g-4 justify-content-center">
              {visiblePosts.map((post) => (
                <Col key={post.id} lg={4} md={6} xs={12}>
                  <BlogCard post={post} />
                </Col>
              ))}
            </Row>

            {/* Navigation Arrows - Apenas no Mobile */}
            {isMobile && totalPages > 1 && (
            <button 
              className="blog-nav blog-nav-prev position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center rounded-circle border-0 text-white shadow"
              onClick={goToPrevious}
              aria-label="Artigos anteriores"
              style={{
                left: isMobile ? '10px' : '-60px',
                background: 'var(--bs-primary)',
                width: '50px',
                height: '50px',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bs-secondary)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bs-primary)';
                e.currentTarget.style.transform = 'translateY(-50%)';
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            )}
            
            {isMobile && totalPages > 1 && (
              <button 
              className="blog-nav blog-nav-next position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center rounded-circle border-0 text-white shadow"
              onClick={goToNext}
              aria-label="Próximos artigos"
              style={{
                right: isMobile ? '10px' : '-60px',
                background: 'var(--bs-primary)',
                width: '50px',
                height: '50px',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bs-secondary)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bs-primary)';
                e.currentTarget.style.transform = 'translateY(-50%)';
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            )}
          </div>

          {/* Dots Navigation - Apenas no Mobile */}
          {isMobile && totalPages > 1 && (
            <div className="blog-dots d-flex justify-content-center mt-4 gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`blog-dot border-0 rounded-2 ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
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

        {/* Botão Ver Todos */}
        <div className="text-center mt-5">
          <Link 
            to="/blog" 
            className="btn btn-lg rounded-pill px-5 py-3 fw-bold border-0 shadow"
            style={{
              background: 'linear-gradient(135deg, var(--bs-primary), var(--bs-secondary))',
              color: 'white',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            }}
          >
            <i className="fas fa-newspaper me-2"></i>
            Ver Todos os Artigos
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
