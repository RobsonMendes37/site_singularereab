import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <div className="container-fluid py-5 page-header">
      <Container className="py-5">
        <Row className="g-5 align-items-center">
          <Col lg={12} className="text-center">
            <h1 className="display-1 text-white mb-4">Entre em Contato</h1>
            <p className="text-white lead">
              Estamos aqui para ajudar. Entre em contato conosco.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
