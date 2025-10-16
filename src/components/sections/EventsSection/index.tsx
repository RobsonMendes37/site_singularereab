import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { events } from '../../../utils/data';

const EventsSection: React.FC = () => {
  return (
    <div className="container-fluid events py-5 bg-light">
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
            Nossos Próximos Eventos
          </h1>
        </div>
        <Row className="g-5 justify-content-center">
          {events.map((event, index) => (
            <Col key={event.id} md={6} lg={6} xl={4} className="wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div className="events-item bg-primary rounded">
                <div className="events-inner position-relative">
                  <div className="events-img overflow-hidden rounded-circle position-relative">
                    <img 
                      src={`/src/assets/images/${event.image}`} 
                      className="img-fluid w-100 rounded-circle" 
                      alt={event.title}
                    />
                    <div className="event-overlay">
                      <a href={`/src/assets/images/${event.image}`} data-lightbox={`event-${event.id}`}>
                        <i className="fas fa-search-plus text-white fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                    {event.date}
                  </div>
                  <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                    <small className="text-white">
                      <i className="fas fa-calendar me-1 text-primary"></i> {event.time}
                    </small>
                    <small className="text-white">
                      <i className="fas fa-map-marker-alt me-1 text-primary"></i> {event.location}
                    </small>
                  </div>
                </div>
                <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                  <h4 className="h4">{event.title}</h4>
                  <p className="mb-0 mt-3">{event.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EventsSection;
