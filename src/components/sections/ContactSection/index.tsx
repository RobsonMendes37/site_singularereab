import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { contactData } from '../../../data';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  // 🎯 DADOS CENTRALIZADOS - Agora vem de data/contact/contactData.ts
  const { endereco, telefone, email, whatsapp } = contactData;

  return (
    <div className="container-fluid contact py-4">
      <Container className="py-2">
        {/* Título Venha nos Visitar */}
        <div className="text-center mb-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 className="contact-section-title" style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: '3.5rem',
            fontWeight: '400',
            color: 'var(--bs-primary)',
            letterSpacing: '-0.02em',
            lineHeight: '1.2'
          }}>
            Venha nos Visitar!
          </h1>
        </div>

        <Row className="g-4">
          {/* Card com Google Maps - 70% */}
          <Col lg={8}>
            <div className="contact-map-card bg-white h-100">
              {/* Google Maps Embed */}
              <div className="contact-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2158791842847!2d-38.5015832!3d-3.7303982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748890e76f9f1%3A0x8c0a6d7b9a8f9c8d!2sAv.%20Dom%20Lu%C3%ADs%2C%201233%20-%20Meireles%2C%20Fortaleza%20-%20CE%2C%2060160-230!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica Singulare"
                ></iframe>
              </div>

              {/* Informações do Endereço - Card inferior */}
              <div className="p-4 bg-white">
                <div className="mb-3">
                  <h5 className="contact-address-title">
                    <i className="fas fa-map-marker-alt me-2 icon"></i>
                    Clínica Singulare
                  </h5>
                  <p className="contact-address-text mb-3">
                    {endereco}
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="contact-rating-badge">
                    <span className="contact-rating-score">5.0</span>
                    <div>
                      <i className="fas fa-star star-icon"></i>
                      <i className="fas fa-star star-icon"></i>
                      <i className="fas fa-star star-icon"></i>
                      <i className="fas fa-star star-icon"></i>
                      <i className="fas fa-star star-icon"></i>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-link"
                >
                  Ver mapa ampliado
                </a>
              </div>
            </div>
          </Col>

          {/* Card de Contato - 30% */}
          <Col lg={4}>
            <div className="contact-info-card h-100 d-flex flex-column justify-content-center p-4">
              {/* Botão WhatsApp Destaque */}
              <a
                href={whatsapp ? `https://wa.me/55${whatsapp.replace(/\D/g, '')}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-main"
              >
                <i className="fab fa-whatsapp icon"></i>
                <span className="text">Agende via WhatsApp</span>
              </a>

              {/* Linha Divisória Decorativa */}
              <div className="contact-divider"></div>

              {/* Texto */}
              <p className="contact-call-to-action text-center text-white   ">
                Ainda com dúvidas?
                Entre em contato
              </p>

              {/* Botões de Contato */}
              <div className="contact-options">
                {/* WhatsApp */}
                <a
                  href={whatsapp ? `https://wa.me/55${whatsapp.replace(/\D/g, '')}` : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button contact-button-whatsapp"
                >
                  <i className="fab fa-whatsapp icon"></i>
                  <span className="text">{whatsapp || telefone}</span>
                </a>

                {/* Telefone */}
                <a
                  href={`tel:+55${telefone.replace(/\D/g, '')}`}
                  className="contact-button contact-button-phone"
                >
                  <i className="fas fa-phone icon"></i>
                  <span className="text">{telefone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  className="contact-button contact-button-email"
                >
                  <i className="fas fa-envelope icon"></i>
                  <span className="text">{email}</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;

