import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { blogCategories } from '../../data';

interface BlogFiltersProps {
  onFilterChange: (filters: { category?: string; search?: string }) => void;
}

/**
 * Componente de busca e filtros para o blog
 */
export const BlogFilters: React.FC<BlogFiltersProps> = ({ onFilterChange }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onFilterChange({ category: selectedCategory, search: value });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange({ category, search });
  };

  const handleClearFilters = () => {
    setSearch('');
    setSelectedCategory('');
    onFilterChange({});
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '30px',
      marginBottom: '40px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    }}>
      <Row className="align-items-center g-3">
        {/* Busca */}
        <Col lg={6} md={12}>
          <div style={{ position: 'relative' }}>
            <i className="fas fa-search" style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
              fontSize: '16px'
            }}></i>
            <Form.Control
              type="text"
              placeholder="Buscar artigos..."
              value={search}
              onChange={handleSearch}
              style={{
                paddingLeft: '50px',
                paddingRight: '20px',
                height: '50px',
                borderRadius: '25px',
                border: '2px solid #f0f4f8',
                fontSize: '15px',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.boxShadow = '0 0 0 4px rgba(74, 144, 226, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#f0f4f8';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>
        </Col>

        {/* Categorias */}
        <Col lg={6} md={12}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'flex-end'
          }}>
            <Button
              variant={selectedCategory === '' ? 'primary' : 'outline-secondary'}
              onClick={() => handleCategoryChange('')}
              style={{
                borderRadius: '20px',
                padding: '8px 20px',
                fontSize: '14px',
                fontWeight: '600',
                border: selectedCategory === '' ? 'none' : '2px solid #e2e8f0',
                background: selectedCategory === '' ? 'var(--bg-gradient-primary)' : 'white',
                color: selectedCategory === '' ? 'white' : 'var(--text-secondary)',
                transition: 'all 0.3s ease'
              }}
            >
              Todos
            </Button>

            {blogCategories.slice(0, 4).map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.slug ? 'primary' : 'outline-secondary'}
                onClick={() => handleCategoryChange(category.slug)}
                style={{
                  borderRadius: '20px',
                  padding: '8px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: selectedCategory === category.slug ? 'none' : '2px solid #e2e8f0',
                  background: selectedCategory === category.slug ? 'var(--bg-gradient-primary)' : 'white',
                  color: selectedCategory === category.slug ? 'white' : 'var(--text-secondary)',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className={`${category.icon} me-2`}></i>
                {category.name}
              </Button>
            ))}

            {(search || selectedCategory) && (
              <Button
                variant="link"
                onClick={handleClearFilters}
                style={{
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                <i className="fas fa-times me-1"></i>
                Limpar
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

