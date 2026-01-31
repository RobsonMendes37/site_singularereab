import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { config, homeData, footerQuickLinks } from '../../data';
import './Footer.css';

const Footer: React.FC = () => {
  // 🎯 DADOS CENTRALIZADOS - Agora vem de config.ts e homeData.ts
  const { contact, clinic, social } = config;
  const { footer } = homeData.sections;

  return (
    <>
      {/* Footer */}
      <div className="container-fluid footer py-4 wow fadeIn" data-wow-delay="0.1s">
        <Container className="py-3">
          <Row className="g-4">
            {/* Logo e Descrição */}
            <Col md={6} lg={3}>
              <div className="footer-item">
                <img
                  src={`${process.env.PUBLIC_URL}/LOGO HORIZONTAL copia.png`}
                  alt="Clínica Singulare"
                  style={{ width: '100%', maxWidth: '240px', marginBottom: '15px' }}
                />
                <p className="footer-description mb-3">
                  {clinic.description}
                </p>
              </div>
            </Col>

            {/* Links Rápidos */}
            <Col md={6} lg={3}>
              <div className="footer-item">
                <h4 className="footer-section-title">Links Rápidos</h4>
                <div className="d-flex flex-column align-items-start">
                  {footerQuickLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="footer-link">
                      <i className="fa fa-angle-right me-2"></i>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="footer-item">
                <h4 className="footer-section-title">
                  {footer.scheduleTitle}
                </h4>
                <div className="footer-schedule-box d-flex flex-column p-3 ps-4 border">
                  <p>{clinic.hours.weekdays}</p>
                  <p>{clinic.hours.saturday}</p>
                  <p>{clinic.hours.sunday}</p>
                </div>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="footer-item">
                <h4 className="footer-section-title">
                  {footer.locationTitle}
                </h4>
                <div className="d-flex flex-column align-items-start">
                  <span className="footer-contact-item">
                    <i className="fa fa-map-marker-alt footer-contact-icon"></i>
                    {clinic.address.full}
                  </span>
                  <a href={contact.phoneLink} className="footer-contact-item">
                    <i className="fa fa-phone-alt footer-contact-icon"></i>
                    {contact.phone}
                  </a>
                  <a href={contact.emailLink} className="footer-contact-item">
                    <i className="fas fa-envelope footer-contact-icon"></i>
                    {contact.email}
                  </a>
                  <span className="footer-contact-item mb-3">
                    <i className="fa fa-clock footer-contact-icon"></i>
                    {clinic.hours.simple}
                  </span>
                  <div className="d-flex gap-3">
                    <a
                      href={social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-icon"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href={contact.whatsappLinkWithMessage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-icon"
                      aria-label="WhatsApp"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a
                      href={social.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-icon"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright bg-dark py-4">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <span className="text-light">
                <span>
                  <i className="fas fa-copyright text-light me-2"></i>
                  {clinic.name}
                </span>
                {footer.copySuffix}
              </span>
            </Col>
            <Col md={6} className="my-auto text-center text-md-end text-white">
              {footer.devNote}
            </Col>
          </Row>
        </Container>
      </div>

      {/* Voltar ao Topo */}
      <button
        className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Footer;
