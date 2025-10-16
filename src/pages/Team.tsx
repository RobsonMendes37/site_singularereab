import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Team: React.FC = () => {
  return (
    <div className="container-fluid py-5 page-header">
      <Container className="py-5">
        <Row className="g-5 align-items-center">
          <Col lg={12} className="text-center">
            <h1 className="display-1 text-white mb-4">Conheça Nossa Equipe</h1>
            <p className="text-white lead">
              Conheça os profissionais especializados que cuidam do seu filho.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
