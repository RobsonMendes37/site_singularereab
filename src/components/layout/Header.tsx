import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { config, mainNavigation, moreLinks } from '../../data';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && expanded) {
        setExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expanded]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setExpanded(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string, _fallbackRoute: string) => {
    e.preventDefault();
    setExpanded(false);
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <div className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar
          expand="xl"
          className="header-navbar navbar-light"
          expanded={expanded}
          onToggle={(expanded) => setExpanded(!!expanded)}
        >
          <Navbar.Brand
            as={Link}
            to="/"
            className="header-logo-link"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (!isHomePage) window.location.href = '/';
              setExpanded(false);
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/LOGO HORIZONTAL copia.png`}
              alt="Clínica Singulare"
              className="header-logo-img"
            />
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <div className="header-social-vertical d-flex flex-column me-3 d-xl-none gap-1">
              <a href={config.social.facebook.url} target="_blank" rel="noopener noreferrer" className="header-social-icon-sm" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={config.social.instagram.url} target="_blank" rel="noopener noreferrer" className="header-social-icon-sm" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={config.social.linkedin.url} target="_blank" rel="noopener noreferrer" className="header-social-icon-sm" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <Navbar.Toggle aria-controls="navbarCollapse" className="header-navbar-toggler" onClick={() => setExpanded(!expanded)} />
          </div>

          <Navbar.Collapse id="navbarCollapse" className="mobile-drawer" ref={menuRef}>
            <Nav className="me-auto mobile-nav-content">
              {mainNavigation.map((item) => (
                <Nav.Link
                  key={item.path}
                  href={`#${item.path}`}
                  className="header-nav-link"
                  onClick={(e: React.MouseEvent) => {
                    if (item.path === 'home-top') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setExpanded(false);
                      if (!isHomePage) window.location.href = '/';
                    } else {
                      handleNavClick(e, item.path, `/${item.path.replace('-section', '')}`);
                    }
                  }}
                >
                  <i className={`${item.icon} me-2 d-xl-none`}></i>
                  {item.label}
                </Nav.Link>
              ))}

              <NavDropdown title="Ver Mais" id="nav-dropdown" className="header-dropdown">
                {moreLinks.map((item) => {
                  const isExternal = item.path.startsWith('http');
                  const isHash = item.path.includes('#');

                  if (isExternal || isHash) {
                    return (
                      <NavDropdown.Item
                        key={item.path}
                        href={item.path}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        onClick={() => setExpanded(false)}
                      >
                        <i className={`${item.icon} me-2`}></i>
                        {item.label}
                      </NavDropdown.Item>
                    );
                  }

                  return (
                    <NavDropdown.Item
                      key={item.path}
                      as={Link}
                      to={item.path}
                      onClick={() => setExpanded(false)}
                    >
                      <i className={`${item.icon} me-2`}></i>
                      {item.label}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>

              <Nav.Link
                href="#contact"
                className="header-nav-link"
                onClick={(e: React.MouseEvent) => handleNavClick(e, 'contact-section', '/contact')}
              >
                <i className="fas fa-envelope me-2 d-xl-none"></i>
                Contato
              </Nav.Link>
            </Nav>

            <div className="header-social-desktop d-none d-xl-flex">
              <a href={config.social.facebook.url} target="_blank" rel="noopener noreferrer" className="header-social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={config.social.instagram.url} target="_blank" rel="noopener noreferrer" className="header-social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={config.social.linkedin.url} target="_blank" rel="noopener noreferrer" className="header-social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
