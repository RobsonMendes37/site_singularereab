import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { SEO } from '../components/common/SEO';
import Breadcrumb from '../components/common/Breadcrumb';

const OurStory: React.FC = () => {
  return (
    <>
      <SEO
        title="Nossa História - Clínica Singulare"
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

      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <div style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          padding: '60px 0',
          marginBottom: '60px'
        }}>
          <Container>
            <div className="text-center text-white">
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                marginBottom: '0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}>
                Nossa História
              </h1>
            </div>
          </Container>
        </div>
      </ScrollReveal>

      {/* História */}
      <Container style={{ paddingTop: '20px', paddingBottom: '3rem' }}>
        <ScrollReveal direction="up">
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                height: '100%'
              }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  marginBottom: '30px'
                }}>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: 'white',
                    margin: 0
                  }}>
                    <i className="fas fa-history me-3"></i>
                    Nossa Trajetória
                  </h2>
                </div>

                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px'
                }}>
                  A <strong>Clínica Singulare</strong> nasceu do sonho de profissionais apaixonados pela reabilitação infantil. 
                  Fundada em <strong>2015</strong>, iniciamos nossa jornada com o compromisso de oferecer cuidado humanizado 
                  e tratamentos de excelência para crianças com necessidades especiais.
                </p>

                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px'
                }}>
                  Ao longo dos anos, crescemos e nos consolidamos como referência em <strong>reabilitação infantil em Fortaleza</strong>. 
                  Nossa equipe multidisciplinar é formada por profissionais altamente qualificados nas áreas de 
                  <strong> Fisioterapia, Terapia Ocupacional, Fonoaudiologia, Psicologia e Medicina</strong>.
                </p>

                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)'
                }}>
                  Hoje, orgulhosamente atendemos centenas de famílias, transformando vidas e construindo histórias 
                  de superação e desenvolvimento. Cada criança que passa por nossa clínica é única, e é por isso 
                  que nosso nome carrega o significado de <strong>"singular"</strong> - porque cada paciente merece 
                  um cuidado especial e personalizado.
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                position: 'relative',
                height: '500px'
              }}>
                <img 
                  src={require('../assets/images/about.jpg')}
                  alt="História da Clínica Singulare"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '20px 30px',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                  <h3 style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'var(--color-primary)',
                    margin: 0
                  }}>
                    2015
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    fontWeight: '600'
                  }}>
                    Ano de Fundação
                  </p>
                </div>
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
                    Missão
                  </h3>

                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    Promover o desenvolvimento integral de crianças com necessidades especiais através de tratamentos 
                    humanizados, individualizados e baseados em evidências científicas, sempre respeitando a singularidade 
                    de cada paciente e família.
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
                    Visão
                  </h3>

                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    Ser reconhecida como a principal referência em reabilitação infantil no Ceará, expandindo nosso 
                    impacto positivo e tornando acessível um atendimento de excelência para todas as famílias que 
                    necessitam de nossos serviços.
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
                    Valores
                  </h3>

                  <ul style={{
                    fontSize: '1.05rem',
                    lineHeight: '2',
                    color: 'var(--text-secondary)',
                    paddingLeft: '25px',
                    margin: 0
                  }}>
                    <li><strong>Humanização:</strong> Cuidado com amor e empatia</li>
                    <li><strong>Excelência:</strong> Busca constante pela qualidade</li>
                    <li><strong>Ética:</strong> Transparência e respeito sempre</li>
                    <li><strong>Comprometimento:</strong> Dedicação total às famílias</li>
                    <li><strong>Inovação:</strong> Atualização e melhoria contínua</li>
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
              href="https://wa.me/5585996442225" 
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

