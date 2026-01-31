
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { teamData, homeData } from '../../../data';
import './TeamSection.css';

const TeamSection: React.FC = () => {
    return (
        <div className="container-fluid py-5 team">
            <Container>
                <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1
                        className="mb-3"
                        style={{
                            fontFamily: "'Pacifico', cursive",
                            color: "var(--bs-primary)",
                            fontSize: "3rem"
                        }}
                    >
                        {homeData.sections.team.title}
                    </h1>
                    {/* Subtítulo removido conforme solicitação */}
                </div>

                <Row className="g-3 justify-content-center">
                    {teamData.map((member) => (
                        <Col key={member.id} lg={3} md={6} xs={6}>
                            <div className="team-item position-relative overflow-hidden rounded shadow-sm team-card-wrapper">
                                <div className="team-img position-relative overflow-hidden">
                                    <img
                                        className="img-fluid w-100"
                                        src={require(`../../../assets/images/${member.foto}`)}
                                        alt={member.nome}
                                    />
                                    {/* Overlay Gradient & Text */}
                                    {/* Overlay Gradient & Text */}
                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 team-overlay-text"
                                        style={{
                                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)',
                                            zIndex: 2,
                                            paddingTop: '5rem'
                                        }}>
                                        <h5 className="mb-1" style={{ color: 'white', fontWeight: '800', fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{member.nome}</h5>
                                        <small style={{ color: 'rgba(255,255,255,0.95)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.5px' }}>{member.cargo}</small>
                                    </div>

                                    {/* Social icons removed as per request */}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default TeamSection;
