import React from 'react';
import { config } from '../../config';
import './WhatsAppFloat.css';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={config.contact.whatsappLinkWithMessage}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;

