import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { treatmentsData } from '../../../data';
import { COLORS } from '../../../constants/colors';
import OptimizedImage from '../../common/OptimizedImage';
import './TreatmentsSection.css';

const TreatmentsSection: React.FC = () => {
  return (
    <div className="container-fluid treatments py-5 bg-light">
      <Container className="py-1">
        <div className="text-center mx-auto wow fadeIn mb-5" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: '3.5rem',
            fontWeight: '400',
            color: 'var(--bs-primary)',
            marginBottom: '20px',
            letterSpacing: '-0.02em',
            lineHeight: '1.2'
          }}>
             Tratamentos
          </h1>
        </div>

        <Row className="justify-content-center">
          {treatmentsData.map((treatment, index) => {
            // Importa imagem local dinamicamente
            const imageSrc = treatment.imagem.startsWith('http') 
              ? treatment.imagem 
              : require(`../../../assets/images/${treatment.imagem}`);
            
            return (
            <Col key={treatment.id} lg={2} md={3} sm={4} xs={6} className="mb-1 wow fadeIn" data-wow-delay={`${0.1 + index * 0.05}s`}>
              <Link to={`/tratamento/${treatment.slug}`} style={{ textDecoration: 'none' }}>
                <div 
                  className="treatment-card-wrapper"
                  style={{
                    position: 'relative',
                    height: '100%'
                  }}
                >
                  {/* Card Principal */}
                  <div
                    className="treatment-card"
                    style={{
                      position: 'relative',
                      height: '240px',
                      backgroundColor: 'white',
                      borderRadius: '25px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 30px rgba(107, 70, 193, 0.12)',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      cursor: 'pointer',
                      border: '2px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                      e.currentTarget.style.boxShadow = `0 20px 50px ${treatment.cor}40`;
                      e.currentTarget.style.borderColor = treatment.cor;
                      
                      // Anima o overlay
                      const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement;
                      if (overlay) {
                        overlay.style.opacity = '1';
                      }
                      
                      // Anima o ícone
                      const icon = e.currentTarget.querySelector('.card-icon') as HTMLElement;
                      if (icon) {
                        icon.style.transform = 'scale(1.1) rotate(5deg)';
                      }
                      
                      // Anima o título
                      const title = e.currentTarget.parentElement?.querySelector('.treatment-title') as HTMLElement;
                      if (title) {
                        title.style.color = treatment.cor;
                        title.style.transform = 'translateY(-3px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(107, 70, 193, 0.12)';
                      e.currentTarget.style.borderColor = 'transparent';
                      
                      const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement;
                      if (overlay) {
                        overlay.style.opacity = '0';
                      }
                      
                      const icon = e.currentTarget.querySelector('.card-icon') as HTMLElement;
                      if (icon) {
                        icon.style.transform = 'scale(1) rotate(0deg)';
                      }
                      
                      const title = e.currentTarget.parentElement?.querySelector('.treatment-title') as HTMLElement;
                      if (title) {
                        title.style.color = COLORS.primary.main;
                        title.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    {/* Imagem de Fundo com Lazy Loading */}
                    <OptimizedImage
                      src={imageSrc}
                      alt={treatment.titulo}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                    />
                    
                    {/* Gradiente Overlay */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${treatment.cor}15 0%, ${treatment.cor}35 100%)`,
                        zIndex: 1
                      }}
                    />
                    
                    {/* Overlay Interativo */}
                    <div 
                      className="card-overlay"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${treatment.cor}F0 0%, ${treatment.cor}E0 100%)`,
                        opacity: '0',
                        transition: 'opacity 0.4s ease',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {/* Ícone Grande no Hover */}
                      <i 
                        className={treatment.icone}
                        style={{
                          fontSize: '64px',
                          color: 'white',
                          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                        }}
                      />
                    </div>
                    
                    {/* Badge com Ícone no Canto */}
                    <div 
                      className="card-icon"
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        width: '50px',
                        height: '50px',
                        background: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                        zIndex: 3,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i 
                        className={treatment.icone}
                        style={{
                          fontSize: '24px',
                          color: treatment.cor
                        }}
                      />
                    </div>
                    
                    {/* Efeito de Brilho no Canto */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-50%',
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                        opacity: '0.5',
                        zIndex: 1
                      }}
                    />
                  </div>
                  
                  {/* Título do tratamento - ABAIXO do card */}
                  <h6 className="treatment-title" style={{ 
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '15px', 
                    fontWeight: '700',
                    lineHeight: '1.4',
                    color: COLORS.primary.main,
                    marginTop: '1px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    minHeight: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {treatment.titulo}
                  </h6>
                </div>
              </Link>
            </Col>
          );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TreatmentsSection;
