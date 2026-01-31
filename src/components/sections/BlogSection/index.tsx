import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { blogPostsData, homeData } from '../../../data';
import { BlogCard } from '../../blog/BlogCard';
import { Link } from 'react-router-dom';
import { useCarousel } from '../../../hooks/useCarousel';
import { useBreakpoints } from '../../../hooks/useWindowSize';

const BlogSection: React.FC = () => {
  const { blog } = homeData.sections;
  // Pega os 3 posts publicados mais recentes
  const recentPosts = blogPostsData
    .filter(post => post.published)
    .slice(0, 3);

  // Detecta o tamanho da tela para ajustar itens por página
  const { isMobile } = useBreakpoints();
  const itemsPerPage = isMobile ? 1 : 3;

  const { currentIndex, totalPages, goToNext, goToPrevious, goToSlide, visibleRange } = useCarousel({
    totalItems: recentPosts.length,
    itemsPerPage,
  });

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
            {blog.title}
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            {blog.description}
          </p>
        </div>

        {/* Carrossel de Blog */}
        <div className="blog-carousel wow fadeIn" data-wow-delay="0.3s">
          <div
            className="position-relative"
            onTouchStart={(e) => {
              const touchDown = e.touches[0].clientX;
              (e.currentTarget as any).touchStart = touchDown;
            }}
            onTouchMove={(e) => {
              const touchDown = (e.currentTarget as any).touchStart;
              if (touchDown === null) return;
              const currentTouch = e.touches[0].clientX;
              const diff = touchDown - currentTouch;
              (e.currentTarget as any).touchDiff = diff;
            }}
            onTouchEnd={(e) => {
              const diff = (e.currentTarget as any).touchDiff;
              if (diff > 50) {
                goToNext();
              } else if (diff < -50) {
                goToPrevious();
              }
              (e.currentTarget as any).touchStart = null;
              (e.currentTarget as any).touchDiff = null;
            }}
          >
            {/* Carrossel Container */}
            <Row className="g-4 justify-content-center">
              {visiblePosts.map((post) => (
                <Col key={post.id} lg={4} md={6} xs={12}>
                  <BlogCard post={post} />
                </Col>
              ))}
            </Row>
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
            {blog.cta}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
