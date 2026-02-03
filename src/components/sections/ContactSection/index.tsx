import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { contactData, homeData, config } from '../../../data';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  // 🎯 DADOS CENTRALIZADOS
  const { endereco, telefone, email, whatsapp } = contactData;
  const { contact } = homeData.sections;
  const { clinic } = config;

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
            {contact.title}
          </h1>
        </div>

        <Row className="g-4">
          {/* Card com Google Maps - 70% */}
          <Col lg={8}>
            <div className="contact-map-card bg-white h-100">
              {/* Google Maps Embed */}
              <div className="contact-map-container">
                <iframe
                  src={clinic.address.embedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localização da ${clinic.name}`}
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
                <div className="d-flex gap-2 mb-4">
                  <button
                    onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(endereco)}`, '_blank')}
                    className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-bold"
                  >
                    <i className="fas fa-directions me-2"></i>
                    {contact.mapLabels?.routes || 'Rotas'}
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(endereco);
                      const btn = document.getElementById('btn-copy-addr');
                      if (btn) {
                        const originalText = btn.innerHTML;
                        btn.innerHTML = `<i class="fas fa-check me-2"></i>${contact.mapLabels?.copied || 'Copiado!'}`;
                        setTimeout(() => {
                          btn.innerHTML = originalText;
                        }, 2000);
                      }
                    }}
                    id="btn-copy-addr"
                    className="btn btn-outline-secondary btn-sm rounded-pill px-3 fw-bold"
                  >
                    <i className="fas fa-copy me-2"></i>
                    {contact.mapLabels?.copy || 'Copiar'}
                  </button>
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
                  href={clinic.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-link"
                >
                  {contact.mapLabels?.viewLarger || 'Ver mapa ampliado'}
                </a>
              </div>
            </div>
          </Col>

          {/* Card de Contato - 30% */}
          <Col lg={4}>
            <div className="contact-info-card h-100 d-flex flex-column justify-content-center p-4">
              {/* Botão WhatsApp Destaque */}
              {/* Botão WhatsApp Destaque */}
              <a
                href={whatsapp ? `https://wa.me/55${whatsapp.replace(/\D/g, '')}?text=Olá! Vim através do site Singulare e gostaria de mais informações.` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-main"
              >
                <i className="fab fa-whatsapp icon"></i>
                <span className="text">{contact.subtitle}</span>
              </a>

              {/* Linha Divisória Decorativa */}
              <div className="contact-divider"></div>

              {/* Texto */}
              <p className="contact-call-to-action text-center text-white   ">
                {contact.cta}
              </p>

              {/* Botões de Contato */}
              <div className="contact-options">
                {/* WhatsApp */}
                <a
                  href={whatsapp ? `https://wa.me/55${whatsapp.replace(/\D/g, '')}?text=Olá! Vim através do site Singulare e gostaria de mais informações.` : '#'}
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

