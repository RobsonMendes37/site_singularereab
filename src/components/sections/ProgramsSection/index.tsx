import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { programs } from '../../../utils/data';
import { Link } from 'react-router-dom';

const ProgramsSection: React.FC = () => {
  return (
    <div className="container-fluid program py-5">
      <Container className="py-5">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '700px' }}>
          <h1 className="mb-5" style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: '3.5rem',
            fontWeight: '400',
            color: 'var(--bs-primary)',
            letterSpacing: '-0.02em',
            lineHeight: '1.2'
          }}>
            Oferecemos um Programa Exclusivo Para Crianças
          </h1>
        </div>
        <Row className="g-5 justify-content-center">
          {programs.map((program, index) => (
            <Col key={program.id} md={6} lg={6} xl={4} className="wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div className="program-item rounded">
                <div className="program-img position-relative">
                  <div className="overflow-hidden img-border-radius">
                    <img 
                      src={`/src/assets/images/${program.image}`} 
                      className="img-fluid w-100" 
                      alt={program.title}
                    />
                  </div>
                  <div className="px-4 py-2 bg-primary text-white program-rate">
                    {program.price}
                  </div>
                </div>
                <div className="program-text bg-white px-4 pb-3">
                  <div className="program-text-inner">
                    <h4 className="h4">{program.title}</h4>
                    <p className="mt-3 mb-0">{program.description}</p>
                  </div>
                </div>
                <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                  <img 
                    src={`/src/assets/images/${program.teacher.image}`} 
                    className="img-fluid rounded-circle p-2 border border-primary bg-white" 
                    alt={program.teacher.name}
                    style={{ width: '70px', height: '70px' }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0 text-primary">{program.teacher.name}</h6>
                    <small>{program.teacher.role}</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                  <small className="text-white">
                    <i className="fas fa-wheelchair me-1"></i> {program.details.sits} Vagas
                  </small>
                  <small className="text-white">
                    <i className="fas fa-book me-1"></i> {program.details.lessons} Aulas
                  </small>
                  <small className="text-white">
                    <i className="fas fa-clock me-1"></i> {program.details.hours} Horas
                  </small>
                </div>
              </div>
            </Col>
          ))}
          <div className="d-inline-block text-center wow fadeIn" data-wow-delay="0.1s">
            <Link to="/programs" className="btn btn-primary px-5 py-3 text-white btn-border-radius">
              Ver Todos os Programas
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProgramsSection;
