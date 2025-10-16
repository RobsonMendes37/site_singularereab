import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { servicesData } from '../../../data';
import './ServicesSection.css';
import aboutImage from '../../../assets/images/about2.jpeg';

const ServicesSection: React.FC = () => {
  // 🎯 DADOS CENTRALIZADOS - Agora vem de content.ts
  const { titulo, descricao, beneficios } = SECOES.servicos;
  
  // Mapear benefícios do content.ts para o formato usado no componente
  const benefits = beneficios.map(b => ({
    icon: b.icone,
    text: b.texto,
    color: b.cor
  }));

  return (
    <div className="container-fluid service py-5" style={{ 
      background: 'linear-gradient(135deg, #F0F4FF 0%, #FFFFFF 100%)' 
    }}>
      <Container >
        <Row className="g-5 align-items-center">
          {/* Coluna da Esquerda - Texto e Informações */}
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <div>
              {/* Título Principal */}
              <h1 style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: '3.5rem',
                fontWeight: '400',
                color: 'var(--bs-primary)',
                lineHeight: '1.2',
                marginBottom: '25px',
                letterSpacing: '-0.02em'
              }}>
                {titulo}
              </h1>

              {/* Descrição */}
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '1.1rem',
                color: '#5a6c7d',
                lineHeight: '1.8',
                marginBottom: '35px',
                textAlign: 'justify'
              }}>
                {descricao}
              </p>

              {/* Grid de Benefícios */}
              <Row className="g-3 mb-4">
                {benefits.map((benefit, index) => (
                  <Col key={index} xs={6} sm={6} md={4}>
                    <div 
                      className="benefit-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 15px',
                        background: 'white',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: '2px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
                        e.currentTarget.style.borderColor = benefit.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
                        e.currentTarget.style.borderColor = 'transparent';
                      }}
                    >
                      <i 
                        className={benefit.icon}
                        style={{ 
                          fontSize: '22px', 
                          color: benefit.color
                        }}
                      ></i>
                      <span style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#2c3e50',
                        lineHeight: '1.3'
                      }}>
                        {benefit.text}
                      </span>
                    </div>
                  </Col>
                ))}
              </Row>

            </div>
          </Col>

          {/* Coluna da Direita - Imagem de Criança Feliz */}
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.3s">
            <div style={{ position: 'relative' }}>
              {/* Formas decorativas de fundo */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, #FFE5E5, #FFF0F0)',
                borderRadius: '50% 50% 0 50%',
                zIndex: 0,
                opacity: '0.6'
              }}></div>

              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, #E5F3FF, #F0F8FF)',
                borderRadius: '50%',
                zIndex: 0,
                opacity: '0.6'
              }}></div>

              {/* Círculos decorativos pequenos */}
              <div style={{
                position: 'absolute',
                top: '50px',
                left: '30px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #FFF9E5, #FFFEF0)',
                borderRadius: '50%',
                zIndex: 0,
                opacity: '0.5'
              }}></div>

              {/* Container da imagem */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '40px 40px 40px 0',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                border: '8px solid white',
                background: '#f0f4ff'
              }}>
                <img 
                  src={aboutImage}
                  alt="Terapeuta com criança na Clínica Singulare"
                  className="services-main-image"
                  style={{
                    width: '100%',
                    height: '600px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    console.error('Erro ao carregar imagem:', aboutImage);
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Badge flutuante */}
                <div style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '15px 25px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #87CEEB, #6BB6D9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="fas fa-smile" style={{ fontSize: '24px', color: 'white' }}></i>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: '800',
                        color: '#2c3e50',
                        lineHeight: '1'
                      }}>
                        100%
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#5a6c7d',
                        fontWeight: '600'
                      }}>
                        Famílias Satisfeitas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;
