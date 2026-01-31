
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { galleryData } from '../data/gallery/galleryData';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { allImages } = galleryData;

  return (
    <main style={{ paddingTop: '20px', paddingBottom: '20px', background: '#f8f9fa' }}>
      <Container>
        {/* Cabeçalho da Página */}
        <ScrollReveal direction="down">
          <div className="text-center mb-5">
            <h1 style={{
              color: 'var(--color-primary)',
              fontWeight: '800',
              fontSize: '3rem',
              marginBottom: '15px'
            }}>
              Nossa Estrutura
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Conheça cada detalhe do nosso espaço, planejado para oferecer conforto,
              segurança e o melhor ambiente para o desenvolvimento do seu filho.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Fotos */}
        <Row className="g-4">
          {allImages.map((img, index) => (
            <Col key={img.id} xs={12} md={6} lg={4} className="gallery-item">
              <ScrollReveal direction="up" delay={index * 0.1}>
                <div style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  height: '300px',
                  position: 'relative',
                  backgroundColor: 'white'
                }}>
                  <img
                    src={img.src.startsWith('/') || img.src.startsWith('http')
                      ? img.src
                      : `/assets/images/${img.src.includes('/')
                        ? img.src
                        : 'gallery/' + img.src}`}
                    alt={img.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              </ScrollReveal>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-secondary px-5 py-3 rounded-pill fw-bold">
            <i className="fas fa-arrow-left me-2"></i> Voltar para Início
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default Gallery;
