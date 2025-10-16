import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GallerySection.css';
// Importar vídeo local
import videoEstrutura from '../../../assets/videos/estrutura.mp4';

const GallerySection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // 🎯 DADOS CENTRALIZADOS - Agora vem de data/about/aboutData.ts
  const titulo = "Conheça Nossa Estrutura";
  const descricao = "Ambientes cuidadosamente planejados e equipamentos de última geração para proporcionar o melhor tratamento e desenvolvimento para cada criança";
  
  // 🎥 VÍDEO LOCAL - Usando vídeo em assets/videos/estrutura.mp4
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <>
      <div className="container-fluid gallery py-1 gallery-section-wrapper" style={{
        background: 'linear-gradient(135deg, #F8F9FF 0%, #FFFFFF 50%, #FFF8F9 100%)'
      }}>
        <Container className="py-5 gallery-container">
          {/* Título da Seção */}
          <div className="mx-auto text-center wow fadeIn " data-wow-delay="0.1s" style={{ maxWidth: '900px' }}>
            <h1 className="gallery-title" style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: '3.5rem',
              fontWeight: '400',
              color: 'var(--bs-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              {titulo}
            </h1>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '1.2rem',
              color: '#5a6c7d',
              lineHeight: '1.8',
              fontWeight: '400'
            }}>
              {descricao}
            </p>
          </div>

          {/* Seção de Vídeo*/}
          <div className="wow fadeIn " data-wow-delay="0.2s" style={{ position: 'relative', padding: '30px 0' }}>
            <Row className="align-items-center">
              <Col lg={12}>
                <div style={{ position: 'relative' }}>
                  {/* Formas Decorativas de Fundo */}
                  {/* Círculo Grande Roxo */}
                  <div style={{
                    position: 'absolute',
                    top: '-100px',
                    left: '-80px',
                    width: '300px',
                    height: '300px',
                    background: 'linear-gradient(135deg, #9B59B6, #8E44AD)',
                    borderRadius: '50%',
                    opacity: '0.08',
                    zIndex: 0
                  }}></div>

                  {/* Quadrado Azul */}
                  <div style={{
                    position: 'absolute',
                    top: '50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'linear-gradient(135deg, #4A90E2, #357ABD)',
                    borderRadius: '40px',
                    opacity: '0.08',
                    transform: 'rotate(15deg)',
                    zIndex: 0
                  }}></div>

                  {/* Triângulo Rosa */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-80px',
                    left: '10%',
                    width: '0',
                    height: '0',
                    borderLeft: '100px solid transparent',
                    borderRight: '100px solid transparent',
                    borderBottom: '170px solid rgba(255, 107, 157, 0.08)',
                    zIndex: 0
                  }}></div>

                  {/* Círculo Médio Amarelo */}
                  <div style={{
                    position: 'absolute',
                    bottom: '100px',
                    right: '15%',
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, #F39C12, #F1C40F)',
                    borderRadius: '50%',
                    opacity: '0.08',
                    zIndex: 0
                  }}></div>

                  {/* Estrela Verde (feita com ícone) */}
                  <div style={{
                    position: 'absolute',
                    top: '200px',
                    left: '5%',
                    fontSize: '80px',
                    color: '#1ABC9C',
                    opacity: '0.08',
                    zIndex: 0
                  }}>
                    ★
                  </div>

                  {/* Coração Rosa */}
                  <div style={{
                    position: 'absolute',
                    top: '150px',
                    right: '8%',
                    fontSize: '70px',
                    color: '#FF6B9D',
                    opacity: '0.08',
                    zIndex: 0
                  }}>
                    ♥
                  </div>

                  {/* Container do Vídeo - USANDO VÍDEO LOCAL */}
                  <div style={{
                    position: 'relative',
                    maxWidth: '400px',
                    margin: '0 auto',
                    zIndex: 1
                  }}>
                    <div style={{
                      position: 'relative',
                      borderRadius: '30px',
                      overflow: 'hidden',
                      boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
                      border: '8px solid white',
                      background: 'white'
                    }}>
                      {/* Vídeo Local ou Thumbnail */}
                      <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0 }}>
                        {/* Vídeo Local HTML5 */}
                        <video
                          ref={videoRef}
                          id="gallery-video"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          controls={isVideoPlaying}
                          playsInline
                        >
                          <source src={videoEstrutura} type="video/mp4" />
                          Seu navegador não suporta vídeos HTML5.
                        </video>

                        {/* Thumbnail quando vídeo não está tocando */}
                        {!isVideoPlaying && (
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {/* Overlay escuro */}
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.7), rgba(155, 89, 182, 0.7))'
                            }}></div>

                            {/* Botão Play */}
                            <button
                              onClick={handlePlayVideo}
                              style={{
                                position: 'relative',
                                zIndex: 2,
                                width: '100px',
                                height: '100px',
                                background: 'rgba(255, 255, 255, 0.95)',
                                border: 'none',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.15)';
                                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
                              }}
                            >
                              <i className="fas fa-play" style={{ 
                                fontSize: '32px', 
                                color: '#4A90E2',
                                marginLeft: '6px'
                              }}></i>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Badge flutuante */}
                    <div className="gallery-badge-button" style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #FF6B9D, #FF8FB3)',
                      color: 'white',
                      padding: '12px 35px',
                      borderRadius: '30px',
                      fontSize: '14px',
                      fontWeight: '700',
                      boxShadow: '0 8px 25px rgba(255, 107, 157, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      zIndex: 3,
                      whiteSpace: 'nowrap'
                    }}>
                      <i className="fas fa-building"></i>
                      NOSSA ESTRUTURA
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GallerySection;
