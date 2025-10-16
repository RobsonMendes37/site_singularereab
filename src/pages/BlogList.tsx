import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { blogPostsData, filterBlogPosts } from '../data';
import { BlogCard } from '../components/blog/BlogCard';
import { BlogFilters } from '../components/blog/BlogFilters';
import { BlogPost as BlogPostType } from '../types/blog.types';
import { SEO } from '../components/common/SEO';
import Breadcrumb from '../components/common/Breadcrumb';

const BlogList: React.FC = () => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simula uma chamada de API
    setTimeout(() => {
      const published = blogPostsData.filter(post => post.published);
      setFilteredPosts(published);
      setLoading(false);
    }, 500);
  }, []);

  const handleFilterChange = (filters: { category?: string; search?: string }) => {
    const filtered = filterBlogPosts(filters);
    setFilteredPosts(filtered.filter(post => post.published));
  };

  if (loading) {
    return (
      <Container className="py-5 text-center" style={{ minHeight: '100vh', paddingTop: '150px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="Blog - Clínica Singulare"
        description="Artigos e dicas sobre desenvolvimento e reabilitação infantil. Informações sobre fisioterapia, terapia ocupacional, fonoaudiologia e muito mais."
        keywords={['blog reabilitação infantil', 'artigos fisioterapia pediátrica', 'dicas pais', 'desenvolvimento infantil', 'TEA', 'autismo']}
      />

      <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Blog' }
          ]}
        />

        <Container style={{ paddingTop: '20px', paddingBottom: '3rem' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 style={{ 
            fontSize: '3.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}>
            Nosso Blog
          </h1>
          <p className="lead text-muted" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Fique por dentro das últimas novidades e informações sobre desenvolvimento e reabilitação infantil.
          </p>
        </div>

        {/* Filtros */}
        <BlogFilters onFilterChange={handleFilterChange} />
        
        {/* Contador de resultados */}
        <div style={{ marginBottom: '20px', color: 'var(--text-muted)', fontSize: '15px' }}>
          <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
        </div>
        
        {/* Grid de Posts */}
        <Row className="g-4 mb-5">
          {filteredPosts.map((post) => (
            <Col key={post.id} lg={4} md={6}>
              <BlogCard post={post} />
            </Col>
          ))}
        </Row>

        {/* Mensagem se não houver posts */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-5">
            <i className="fas fa-newspaper" style={{ fontSize: '80px', color: '#cbd5e0', marginBottom: '20px' }}></i>
            <h3 className="text-muted">Nenhum post disponível no momento</h3>
            <p className="text-muted">Em breve teremos novos artigos para você!</p>
          </div>
        )}
        </Container>
      </div>
    </>
  );
};

export default BlogList;
