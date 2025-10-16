import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { BlogPost } from '../../types/blog.types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

/**
 * Card de preview do post do blog
 */
export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const formattedDate = format(new Date(post.date), "dd 'de' MMMM, yyyy", { locale: ptBR });

  return (
    <div 
      className="blog-card"
      style={{
        background: 'white',
        borderRadius: featured ? '30px' : '20px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
      }}
    >
      {/* Imagem */}
      <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
        <div style={{ 
          height: featured ? '350px' : '250px', 
          overflow: 'hidden', 
          position: 'relative' 
        }}>
          <img 
            src={post.image}
            alt={post.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)'
          }}></div>

          {/* Badge de Categoria */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'var(--color-primary)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
          }}>
            {post.category}
          </div>
        </div>
      </Link>

      {/* Conteúdo */}
      <div style={{ 
        padding: featured ? '30px' : '22px', /* Reduzido de 35px/25px para 30px/22px */
        display: 'flex', 
        flexDirection: 'column',
        flex: 1
      }}>
        {/* Autor e Data */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '16px', /* Reduzido de 20px para 16px */
          gap: '15px'
        }}>
          <img 
            src={post.author.image || `https://ui-avatars.com/api/?name=${post.author.name}&background=4A90E2&color=fff`}
            alt={post.author.name}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #f0f4f8'
            }}
          />
          <div>
            <div style={{ 
              fontSize: '15px', 
              fontWeight: '700', 
              color: 'var(--text-primary)',
              marginBottom: '4px'
            }}>
              {post.author.name}
            </div>
            <div style={{ 
              fontSize: '13px', 
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span><i className="far fa-calendar-alt me-1"></i>{formattedDate}</span>
              <span>·</span>
              <span><i className="far fa-clock me-1"></i>{post.readTime} min</span>
            </div>
          </div>
        </div>

        {/* Título */}
        <Link 
          to={`/blog/${post.slug}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3 style={{ 
            fontSize: featured ? '26px' : '20px', 
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '12px', /* Reduzido de 15px para 12px */
            lineHeight: '1.4',
            minHeight: featured ? 'auto' : '70px',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
          >
            {post.title}
          </h3>
        </Link>

        {/* Descrição */}
        <p style={{ 
          fontSize: '15px',
          lineHeight: '1.7',
          color: 'var(--text-secondary)',
          marginBottom: '15px', /* Reduzido de 20px para 15px */
          flex: 1
        }}>
          {post.description}
        </p>

        {/* Footer */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center',
          paddingTop: '15px', /* Reduzido de 20px para 15px */
          borderTop: '2px solid #f0f4f8',
          marginTop: 'auto'
        }}>
          <Link 
            to={`/blog/${post.slug}`}
            style={{
              background: 'var(--bg-gradient-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              padding: '10px 25px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: 'var(--shadow-primary)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(74, 144, 226, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
            }}
          >
            Ler Mais <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

