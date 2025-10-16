import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Breadcrumb.css';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="breadcrumb-container">
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link to="/" className="breadcrumb-link">
                <i className="fas fa-home"></i>
                <span>Início</span>
              </Link>
            </li>

            {items.map((item, index) => (
              <li key={index} className="breadcrumb-item">
                <span className="breadcrumb-separator">
                  <i className="fas fa-chevron-right"></i>
                </span>

                {item.path && index < items.length - 1 ? (
                  <Link to={item.path} className="breadcrumb-link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="breadcrumb-current">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  );
};

export default Breadcrumb;

