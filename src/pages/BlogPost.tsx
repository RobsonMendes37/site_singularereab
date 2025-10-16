import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { getBlogPostBySlug, getRelatedPosts } from '../data';
import { ShareButtons } from '../components/blog/ShareButtons';
import { BlogCard } from '../components/blog/BlogCard';
import { SEO } from '../components/common/SEO';
import Breadcrumb from '../components/common/Breadcrumb';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <Container className="py-5" style={{ minHeight: '100vh', paddingTop: '150px' }}>
        <div className="text-center">
          <i className="fas fa-file-alt" style={{ fontSize: '80px', color: '#cbd5e0', marginBottom: '20px' }}></i>
          <h2>Post não encontrado</h2>
          <p className="text-muted mb-4">O artigo que você procura não existe.</p>
          <Link to="/blog" className="btn btn-primary">
            <i className="fas fa-arrow-left me-2"></i>
            Voltar para o Blog
          </Link>
        </div>
      </Container>
    );
  }

  const formattedDate = format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  const relatedPosts = getRelatedPosts(post, 3);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.description}
        keywords={post.keywords || post.tags}
        image={post.image}
        url={currentUrl}
        type="article"
        author={post.author.name}
        publishedDate={new Date(post.date).toISOString()}
        modifiedDate={post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined}
      />

      <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Blog', path: '/blog' },
          { label: post.title }
        ]}
      />

      {/* Header do Post */}
      <div style={{ 
        background: 'linear-gradient(135deg, #F8F9FF 0%, #FFFFFF 100%)',
        padding: '60px 0 40px'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">

              {/* Categoria */}
              <div style={{ marginBottom: '20px' }}>
                <span style={{
                  background: 'var(--color-primary)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {post.category}
                </span>
              </div>

              {/* Título */}
              <h1 style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: 'var(--text-primary)',
                lineHeight: '1.2',
                marginBottom: '25px'
              }}>
                {post.title}
              </h1>

              {/* Meta Info */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                marginBottom: '30px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img 
                    src={post.author.image || `https://ui-avatars.com/api/?name=${post.author.name}&background=4A90E2&color=fff`}
                    alt={post.author.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid white',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '16px', color: 'var(--text-primary)' }}>
                      {post.author.name}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                      {post.author.role}
                    </div>
                  </div>
                </div>

                <div style={{ 
                  height: '40px', 
                  width: '1px', 
                  background: '#e2e8f0' 
                }}></div>

                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  <div><i className="far fa-calendar-alt me-2"></i>{formattedDate}</div>
                  <div><i className="far fa-clock me-2"></i>{post.readTime} minutos de leitura</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Imagem Destaque */}
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              marginBottom: '50px',
              marginTop: '-30px'
            }}>
              <img 
                src={post.image}
                alt={post.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Conteúdo */}
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <article style={{
              background: 'white',
              padding: '50px',
              borderRadius: '20px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              marginBottom: '40px'
            }}>
              {/* Conteúdo Markdown */}
              <div className="blog-content" style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)'
              }}>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  components={{
                    h1: ({node: _node, children, ...props}) => <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginTop: '40px', marginBottom: '20px', color: 'var(--text-primary)' }} {...props}>{children}</h1>,
                    h2: ({node: _node, children, ...props}) => <h2 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '35px', marginBottom: '18px', color: 'var(--text-primary)' }} {...props}>{children}</h2>,
                    h3: ({node: _node, children, ...props}) => <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '30px', marginBottom: '15px', color: 'var(--text-primary)' }} {...props}>{children}</h3>,
                    p: ({node: _node, ...props}) => <p style={{ marginBottom: '20px', lineHeight: '1.8' }} {...props} />,
                    ul: ({node: _node, ...props}) => <ul style={{ marginBottom: '20px', paddingLeft: '30px' }} {...props} />,
                    ol: ({node: _node, ...props}) => <ol style={{ marginBottom: '20px', paddingLeft: '30px' }} {...props} />,
                    li: ({node: _node, ...props}) => <li style={{ marginBottom: '10px' }} {...props} />,
                    blockquote: ({node: _node, ...props}) => <blockquote style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '20px', margin: '30px 0', fontStyle: 'italic', color: 'var(--text-muted)' }} {...props} />,
                    a: ({node: _node, children, ...props}) => <a style={{ color: 'var(--color-primary)', textDecoration: 'underline' }} {...props}>{children}</a>,
                    strong: ({node: _node, ...props}) => <strong style={{ fontWeight: '700', color: 'var(--text-primary)' }} {...props} />,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '2px solid #f0f4f8' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '15px' }}>
                    Tags:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{
                        background: '#f0f4f8',
                        color: 'var(--text-secondary)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: '600'
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Compartilhar */}
              <ShareButtons url={currentUrl} title={post.title} />

              {/* Autor Bio */}
              {post.author.bio && (
                <div style={{
                  background: '#f8f9fa',
                  padding: '30px',
                  borderRadius: '15px',
                  marginTop: '40px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'start'
                }}>
                  <img 
                    src={post.author.image || `https://ui-avatars.com/api/?name=${post.author.name}&background=4A90E2&color=fff&size=150`}
                    alt={post.author.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid white',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '5px' }}>
                      {post.author.name}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--color-primary)', marginBottom: '10px', fontWeight: '600' }}>
                      {post.author.role}
                    </div>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '0', lineHeight: '1.6' }}>
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              )}
            </article>

            {/* Posts Relacionados */}
            {relatedPosts.length > 0 && (
              <div style={{ marginBottom: '60px' }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  Artigos Relacionados
                </h3>
                <Row className="g-4">
                  {relatedPosts.map((relatedPost) => (
                    <Col key={relatedPost.id} md={4}>
                      <BlogCard post={relatedPost} />
                    </Col>
                  ))}
                </Row>
              </div>
            )}

            {/* Botão Voltar */}
            <div className="text-center mb-5">
              <Link 
                to="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--bg-gradient-primary)',
                  color: 'white',
                  padding: '15px 35px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: 'var(--shadow-primary)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(74, 144, 226, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
                }}
              >
                <i className="fas fa-arrow-left"></i>
                Voltar para o Blog
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default BlogPost;

