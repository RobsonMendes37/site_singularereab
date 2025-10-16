import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Blog: React.FC = () => {
  return (
    <div className="container-fluid py-5 page-header">
      <Container className="py-5">
        <Row className="g-5 align-items-center">
          <Col lg={12} className="text-center">
            <h1 className="display-1 text-white mb-4">Nosso Blog</h1>
            <p className="text-white lead">
              Artigos e dicas sobre desenvolvimento infantil e reabilitação.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
