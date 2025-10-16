import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Treatments: React.FC = () => {
  return (
    <div className="container-fluid py-5 page-header">
      <Container className="py-5">
        <Row className="g-5 align-items-center">
          <Col lg={12} className="text-center">
            <h1 className="display-1 text-white mb-4">Nossas especialidades</h1>
            <p className="text-white lead">
              Conheça todos os tratamentos especializados que oferecemos para o desenvolvimento de sua criança.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Treatments;
