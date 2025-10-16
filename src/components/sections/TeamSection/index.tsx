import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { teamData } from '../../../data';
import './TeamSection.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  specialty: string;
}

// 🎯 DADOS CENTRALIZADOS - Agora vem de data/team/teamData.ts

const TeamSection: React.FC = () => {
  // Sem carrossel - mostra todos os membros sempre

  return (
    <div className="container-fluid team py-1 bg-light">
      <Container>
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '700px' }}>
          <h1 className="mb-5" style={{ 
            fontFamily: "'Pacifico', cursive",
            fontSize: '3.5rem',
            fontWeight: '400',
            color: 'var(--bs-primary)',
            letterSpacing: '-0.02em',
            lineHeight: '1.2'
          }}>
            Nossa Equipe
          </h1>
        </div>

        <div className="team-grid wow fadeIn" data-wow-delay="0.3s">
          <Row className="g-2 justify-content-center">
            {teamData.map((member) => (
              <Col key={member.id} xs={6} sm={6} md={4} lg={3} xl={3}>
                {/* Container externo com borda gradiente */}
                <div 
                  className="team-card-wrapper"
                  style={{
                    background: 'linear-gradient(135deg, var(--bs-primary), var(--bs-secondary))',
                    borderRadius: '30px 30px 30px 0', // Canto inferior direito reto
                    padding: '4px',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-15px) rotate(-2deg)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)';
                    const inner = e.currentTarget.querySelector('.team-card-inner') as HTMLElement;
                    if (inner) inner.style.transform = 'rotate(2deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                    const inner = e.currentTarget.querySelector('.team-card-inner') as HTMLElement;
                    if (inner) inner.style.transform = 'rotate(0deg)';
                  }}
                >
                  {/* Card interno */}
                  <div 
                    className="team-card-inner"
                    style={{
                      background: 'white',
                      borderRadius: '27px 27px 27px 0',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      transition: 'all 0.4s ease'
                    }}
                  >
                    {/* Imagem do profissional */}
                    <div 
                      className="team-image"
                      style={{
                        width: '100%',
                        height: '320px',
                        backgroundImage: `url(${member.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                      }}
                    >
                      {/* Overlay gradiente mais forte na parte inferior */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.75) 100%)'
                      }}></div>

                      {/* Informações sobre a foto - na parte inferior */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '20px 15px',
                        zIndex: 2
                      }}>
                        <h5 className="mb-1" style={{ 
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: '800',
                          fontSize: '17px',
                          color: 'white',
                          lineHeight: '1.2',
                          textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
                        }}>
                          {member.name}
                        </h5>
                        <p className="mb-1" style={{ 
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: '13px', 
                          fontWeight: '700',
                          color: 'rgba(135, 206, 235, 1)',
                          letterSpacing: '0.3px',
                          textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                          textTransform: 'uppercase'
                        }}>
                          {member.role}
                        </p>
                        <p className="mb-0" style={{ 
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'rgba(255,255,255,0.9)',
                          letterSpacing: '0.2px',
                          textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
                        }}>
                          {member.specialty}
                        </p>
                      </div>

                      {/* Detalhe decorativo no canto */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.15) 50%)',
                        borderRadius: '0 0 27px 0'
                      }}></div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default TeamSection;
