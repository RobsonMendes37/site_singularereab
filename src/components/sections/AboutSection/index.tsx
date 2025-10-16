import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { aboutData } from '../../../data';
import './AboutSection.css';
// Importar vídeo local
import videoAbout from '../../../assets/videos/about.mp4';

const AboutSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // 🎯 DADOS CENTRALIZADOS - Agora vem de data/about/aboutData.ts
  const { titulo, texto, textoBotao, linkBotao } = aboutData;
  
  // 🎥 VÍDEO LOCAL - Usando vídeo em assets/videos/about.mp4
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="container-fluid py-5 about bg-light">
      <Container >
        <Row className="g-5 align-items-center">
          <Col lg={6} className="wow fadeIn order-2 order-lg-1" data-wow-delay="0.1s">
            {/* Container do vídeo inline - USANDO VÍDEO LOCAL */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
              border: '5px solid white',
              background: 'white'
            }}>
              <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0 }}>
                {/* Vídeo Local HTML5 */}
                <video
                  ref={videoRef}
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
                  <source src={videoAbout} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                
                {/* Overlay com botão play - aparece quando vídeo não está tocando */}
                {!isVideoPlaying && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={handlePlayVideo}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.3)'}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, var(--bs-primary), var(--bs-secondary))',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                      transition: 'all 0.3s ease'
                    }}>
                      <i className="fas fa-play" style={{ 
                        fontSize: '30px', 
                        color: 'white',
                        marginLeft: '5px'
                      }}></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>

          <Col lg={6} className="wow fadeIn d-flex flex-column justify-content-center order-1 order-lg-2" data-wow-delay="0.3s">
            <h1 className="about-section-title" style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: '3.5rem',
              fontWeight: '400',
              color: 'var(--bs-primary)',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              {titulo}
            </h1>
            <p className="about-description">
              {texto}
            </p>
            
            <Link 
              to={linkBotao}
              className="btn text-white px-5 py-3 btn-border-radius about-history-button"
            >
              <i className="fas fa-history"></i>
              {textoBotao}
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
