import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Programs: React.FC = () => {
  return (
    <div className="container-fluid py-5 page-header">
      <Container className="py-5">
        <Row className="g-5 align-items-center">
          <Col lg={12} className="text-center">
            <h1 className="display-1 text-white mb-4">Nossos Programas</h1>
            <p className="text-white lead">
              Programas especializados para o desenvolvimento integral de sua criança.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Programs;
