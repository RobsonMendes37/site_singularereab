import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../../config';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para adicionar efeito
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Função para fazer scroll suave até uma seção
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  /**
   * Handler para navegação - scroll se estiver na home, navega se não estiver
   */
  const handleNavClick = (e: React.MouseEvent, sectionId: string, _fallbackRoute: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // Se já estiver na home, apenas faz scroll
      scrollToSection(sectionId);
    } else {
      // Se não estiver na home, navega para home com hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <>
      <div className={`header-container ${scrolled ? 'scrolled' : ''}`}>
        <Container>
          <Navbar expand="xl" className="header-navbar navbar-light">
            {/* Logo Horizontal */}
            <Navbar.Brand 
              as={Link} 
              to="/"
              className="header-logo-link"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (!isHomePage) {
                  window.location.href = '/';
                }
              }}
            >
              <img 
                src={`${process.env.PUBLIC_URL}/LOGO HORIZONTAL copia.png`}
                alt="Clínica Singulare"
                className="header-logo-img"
              />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="navbarCollapse" className="header-navbar-toggler" />
            
            <Navbar.Collapse id="navbarCollapse">
              {/* Links das Páginas - À Esquerda */}
              <Nav className="me-auto">
                <Nav.Link 
                  href="#home"
                  className="header-nav-link"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (!isHomePage) {
                      window.location.href = '/';
                    }
                  }}
                >
                  Início
                </Nav.Link>

                <Nav.Link 
                  href="#about"
                  className="header-nav-link"
                  onClick={(e: React.MouseEvent) => handleNavClick(e, 'about-section', '/about')}
                >
                  Sobre
                </Nav.Link>

                <Nav.Link 
                  href="#treatments"
                  className="header-nav-link"
                  onClick={(e: React.MouseEvent) => handleNavClick(e, 'treatments-section', '/treatments')}
                >
                  Tratamentos
                </Nav.Link>

                <Nav.Link 
                  href="#gallery"
                  className="header-nav-link"
                  onClick={(e: React.MouseEvent) => handleNavClick(e, 'gallery-section', '/gallery')}
                >
                  Estrutura
                </Nav.Link>

                <Nav.Link 
                  href="#team"
                  className="header-nav-link"
                  onClick={(e: React.MouseEvent) => handleNavClick(e, 'team-section', '/team')}
                >
                  Equipe
                </Nav.Link>

                <Nav.Link 
                  href="#testimonials"
                  className="header-nav-link"
                  onClick={(e: React.MouseEvent) => handleNavClick(e, 'testimonials-section', '/testimonials')}
                >
                  Depoimentos
                </Nav.Link>

                <NavDropdown title="Ver Mais" id="nav-dropdown" className="header-dropdown">
                  <NavDropdown.Item as={Link} to="/blog">
                    <i className="fas fa-newspaper me-2"></i>
                    Blog
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sobre/historia">
                    <i className="fas fa-history me-2"></i>
                    Nossa História
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#missao" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/sobre/historia#missao';
                  }}>
                    <i className="fas fa-bullseye me-2"></i>
                    Missão e Valores
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link 
                  href="#contact"
                  className="header-nav-link"
                  onClick={(e: React.MouseEvent) => handleNavClick(e, 'contact-section', '/contact')}
                >
                  Contato
                </Nav.Link>
              </Nav>

              {/* Redes Sociais - À Direita (Desktop) */}
              <div className="header-social-desktop d-none d-xl-flex">
                <a 
                  href={config.social.facebook.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="header-social-icon"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href={config.social.instagram.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="header-social-icon"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href={config.social.linkedin.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="header-social-icon"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

              {/* Redes Sociais - Mobile */}
              <div className="header-social-mobile d-flex d-xl-none">
                <a 
                  href={config.social.facebook.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="header-social-icon"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href={config.social.instagram.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="header-social-icon"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href={config.social.linkedin.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="header-social-icon"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
};

export default Header;
