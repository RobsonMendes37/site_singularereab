import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ScrollReveal } from '../components/common/ScrollReveal';
import Breadcrumb from '../components/common/Breadcrumb';
import { TRATAMENTOS } from '../content';

const TreatmentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = slug ? TRATAMENTOS.find(t => t.slug === slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!treatment) {
    return (
      <Container className="py-5" style={{ minHeight: '100vh', paddingTop: '150px' }}>
        <div className="text-center">
          <i className="fas fa-heartbeat" style={{ fontSize: '80px', color: '#cbd5e0', marginBottom: '20px' }}></i>
          <h2>Tratamento não encontrado</h2>
          <p className="text-muted mb-4">O tratamento que você procura não existe.</p>
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-arrow-left me-2"></i>
            Voltar para Início
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Tratamentos', path: '/#treatments-section' },
          { label: treatment.titulo }
        ]}
      />

      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <div style={{
          background: `linear-gradient(135deg, ${treatment.cor}dd 0%, ${treatment.cor}aa 100%)`,
          padding: '60px 0',
          marginBottom: '60px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Container style={{ position: 'relative', zIndex: 2 }}>
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="text-white">

                  <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    marginBottom: '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                  }}>
                    {treatment.titulo}
                  </h1>
                  <p style={{
                    fontSize: '1.3rem',
                    opacity: 0.95,
                    maxWidth: '700px'
                  }}>
                    {treatment.descricaoCurta}
                  </p>
                </div>
              </Col>
              <Col lg={4} className="text-center">
                <div style={{
                  width: '180px',
                  height: '180px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  backdropFilter: 'blur(10px)',
                  border: '5px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                }}>
                  <i className={treatment.icone} style={{ fontSize: '80px', color: 'white' }}></i>
                </div>
              </Col>
            </Row>
          </Container>

          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            zIndex: 1
          }}></div>
        </div>
      </ScrollReveal>

      <Container style={{ paddingTop: '20px', paddingBottom: '3rem' }}>
        {/* O que é */}
        <ScrollReveal direction="up">
          <Row className="mb-5">
            <Col lg={12}>
              <div style={{
                background: 'white',
                padding: '50px',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: treatment.cor,
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <i className="fas fa-info-circle"></i>
                  O que é?
                </h2>
                <p style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.9',
                  color: 'var(--text-secondary)',
                  marginBottom: 0
                }}>
                  {treatment.descricaoCompleta}
                </p>
              </div>
            </Col>
          </Row>
        </ScrollReveal>

        {/* Como Funciona */}
        <ScrollReveal direction="up" delay={0.1}>
          <Row className="mb-5">
            <Col lg={12}>
              <div style={{
                background: 'white',
                padding: '50px',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: treatment.cor,
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <i className="fas fa-cogs"></i>
                  Como Funciona?
                </h2>
                <p style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.9',
                  color: 'var(--text-secondary)',
                  marginBottom: '30px'
                }}>
                  {treatment.comoFunciona}
                </p>

                <div style={{
                  background: `${treatment.cor}15`,
                  padding: '30px',
                  borderRadius: '15px',
                  borderLeft: `5px solid ${treatment.cor}`
                }}>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: treatment.cor,
                    marginBottom: '20px'
                  }}>
                    <i className="fas fa-check-circle me-2"></i>
                    Etapas do Tratamento:
                  </h4>
                  <ol style={{
                    fontSize: '1.05rem',
                    lineHeight: '2',
                    color: 'var(--text-secondary)',
                    paddingLeft: '25px',
                    margin: 0
                  }}>
                    {treatment.etapas.map((step, index) => (
                      <li key={index} style={{ marginBottom: '10px' }}>
                        <strong>{step.split(':')[0]}:</strong> {step.split(':')[1]}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Col>
          </Row>
        </ScrollReveal>

        {/* Benefícios */}
        <ScrollReveal direction="up" delay={0.2}>
          <Row className="mb-5">
            <Col lg={12}>
              <div style={{
                background: 'white',
                padding: '50px',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: treatment.cor,
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <i className="fas fa-star"></i>
                  Benefícios
                </h2>
                <Row className="g-4">
                  {treatment.beneficios.map((benefit, index) => (
                    <Col md={6} key={index}>
                      <div style={{
                        padding: '20px',
                        borderRadius: '15px',
                        background: `${treatment.cor}10`,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${treatment.cor}20`;
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${treatment.cor}10`;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '15px'
                        }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            background: treatment.cor,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <i className="fas fa-check" style={{ color: 'white', fontSize: '18px' }}></i>
                          </div>
                          <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                            color: 'var(--text-secondary)',
                            margin: 0
                          }}>
                            {benefit}
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </ScrollReveal>

        {/* CTA Final */}
        <ScrollReveal direction="up" delay={0.3}>
          <div style={{
            background: `linear-gradient(135deg, ${treatment.cor} 0%, ${treatment.cor}dd 100%)`,
            borderRadius: '30px',
            padding: '60px 40px',
            textAlign: 'center',
            marginBottom: '60px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '20px'
            }}>
              Agende uma Avaliação
            </h3>
            <p style={{
              fontSize: '1.2rem',
              color: 'white',
              opacity: 0.95,
              marginBottom: '30px',
              maxWidth: '700px',
              margin: '0 auto 30px'
            }}>
              Nossa equipe está pronta para ajudar no desenvolvimento do seu filho
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
                color: treatment.cor,
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
  );
};

export default TreatmentDetail;

