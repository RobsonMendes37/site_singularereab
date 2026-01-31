import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { SEO } from '../components/common/SEO';
import Breadcrumb from '../components/common/Breadcrumb';

import { ourStoryData } from '../data/about/ourStoryData';

const OurStory: React.FC = () => {
  const { hero, historia, missao, visao, valores } = ourStoryData;

  return (
    <>
      <SEO
        title={`${hero.titulo} - Clínica Singulare`}
        description="Conheça a história da Clínica Singulare, nossa missão de transformar vidas através da reabilitação infantil, nossa equipe multidisciplinar e valores que nos guiam no cuidado com crianças especiais."
        keywords={[
          'história clínica singulare',
          'missão reabilitação infantil',
          'valores clínica infantil',
          'sobre clínica singulare',
          'equipe multidisciplinar fortaleza'
        ]}
        url="https://clinicasingulare.com.br/sobre/historia"
        type="website"
      />

      <div style={{ background: '#f8f9fa' }}>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Sobre', path: '/about' },
            { label: 'Nossa História' }
          ]}
        />

        {/* Hero Section (Redesenhado - Minimalista) */}
        <ScrollReveal direction="fade">
          <div style={{
            padding: '20px 0 40px', /* Espaçamento mais limpo */
            textAlign: 'center'
          }}>
            <Container>
              <div>
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: 'var(--color-primary)', /* Azul Principal */
                  letterSpacing: '-1px'
                }}>
                  {hero.titulo}
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-secondary)', /* Cinza escuro */
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  {hero.subtitulo}
                </p>
              </div>
            </Container>
          </div>
        </ScrollReveal>

        {/* História */}
        <Container style={{ paddingTop: '10px', paddingBottom: '2rem' }}>
          <ScrollReveal direction="up">
            <Row className="align-items-center mb-4">
              {/* Coluna do Texto - Agora é a segunda (order-2) */}
              <Col lg={6} className="mb-4 mb-lg-0 order-2">
                <div style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  height: '100%'
                }}>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: 'var(--color-primary)',
                    marginBottom: '30px'
                  }}>
                    <i className="fas fa-history me-3"></i>
                    {historia.titulo}
                  </h2>

                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    marginBottom: '20px'
                  }} dangerouslySetInnerHTML={{ __html: historia.paragrafo1 }} />

                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    marginBottom: '20px'
                  }} dangerouslySetInnerHTML={{ __html: historia.paragrafo2 }} />

                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)'
                  }} dangerouslySetInnerHTML={{ __html: historia.paragrafo3 }} />
                </div>
              </Col>

              {/* Coluna da Imagem - Agora é a primeira (order-1) */}
              <Col lg={6} className="order-1 mb-4">
                <div style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  position: 'relative',
                  height: '300px'
                }}>
                  <img
                    src={require(`../assets/images/${historia.imagem}`)}
                    alt="História da Clínica Singulare"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 25%', /* Foco mais no topo, cortando a parte de baixo */
                      transform: 'scale(1.1)' /* Zoom pequeno solicitado */
                    }}
                  />
                  {/* Overlay de ano removido conforme solicitação */}
                </div>
              </Col>
            </Row>
          </ScrollReveal>

          {/* Missão, Visão e Valores */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-5 pt-5">
              <div className="text-center mb-5">
                <h2 style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '20px'
                }}>
                  Missão, Visão e Valores
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#5a6c7d',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Os pilares que guiam nosso trabalho diariamente
                </p>
              </div>

              <Row className="g-4">
                {/* Missão */}
                <Col lg={4} md={6}>
                  <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #4A90E2, #357ABD)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '25px',
                      boxShadow: '0 10px 30px rgba(74, 144, 226, 0.3)'
                    }}>
                      <i className="fas fa-bullseye" style={{ fontSize: '35px', color: 'white' }}></i>
                    </div>

                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '20px'
                    }}>
                      {missao.titulo}
                    </h3>

                    <p style={{
                      fontSize: '1.05rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {missao.texto}
                    </p>
                  </div>
                </Col>

                {/* Visão */}
                <Col lg={4} md={6}>
                  <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #9B59B6, #8E44AD)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '25px',
                      boxShadow: '0 10px 30px rgba(155, 89, 182, 0.3)'
                    }}>
                      <i className="fas fa-eye" style={{ fontSize: '35px', color: 'white' }}></i>
                    </div>

                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '20px'
                    }}>
                      {visao.titulo}
                    </h3>

                    <p style={{
                      fontSize: '1.05rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {visao.texto}
                    </p>
                  </div>
                </Col>

                {/* Valores */}
                <Col lg={4} md={12}>
                  <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #FF6B9D, #C73866)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '25px',
                      boxShadow: '0 10px 30px rgba(255, 107, 157, 0.3)'
                    }}>
                      <i className="fas fa-heart" style={{ fontSize: '35px', color: 'white' }}></i>
                    </div>

                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '20px'
                    }}>
                      {valores.titulo}
                    </h3>

                    <ul style={{
                      fontSize: '1.05rem',
                      lineHeight: '2',
                      color: 'var(--text-secondary)',
                      paddingLeft: '25px',
                      margin: 0
                    }}>
                      {valores.lista.map((valor, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: valor }} />
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </ScrollReveal>

          {/* CTA Final */}
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              borderRadius: '30px',
              padding: '60px 40px',
              textAlign: 'center',
              marginTop: '80px',
              marginBottom: '60px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }}>
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '20px'
              }}>
                Faça Parte da Nossa História
              </h3>
              <p style={{
                fontSize: '1.2rem',
                color: 'white',
                opacity: 0.95,
                marginBottom: '30px',
                maxWidth: '700px',
                margin: '0 auto 30px'
              }}>
                Agende uma avaliação e descubra como podemos ajudar no desenvolvimento do seu filho
              </p>
              <a
                href="https://wa.me/558596242225?text=Olá! Vim através do site e gostaria de verificar os horários disponíveis para consulta."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'white',
                  color: 'var(--color-primary)',
                  padding: '18px 45px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '1.5rem' }}></i>
                Agendar Consulta pelo WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </div>
    </>
  );
};

export default OurStory;

