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
            src={post.image.startsWith('http') ? post.image : require(`../../assets/images/${post.image}`)}
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
        padding: featured ? '30px' : '15px', /* Mais compacto (era 22px) */
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        {/* Autor e Data */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px', /* Reduzido de 16px */
          gap: '10px'
        }}>
          <img
            src={post.author.image || `https://ui-avatars.com/api/?name=${post.author.name}&background=4A90E2&color=fff`}
            alt={post.author.name}
            style={{
              width: '40px', /* Menor (era 50px) */
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #f0f4f8'
            }}
          />
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '2px'
            }}>
              {post.author.name}
            </div>
            <div style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span><i className="far fa-calendar-alt me-1"></i>{formattedDate}</span>
            </div>
          </div>
        </div>

        {/* Título */}
        <Link
          to={`/blog/${post.slug}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3 style={{
            fontSize: featured ? '24px' : '18px', /* Menor */
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '8px',
            lineHeight: '1.3',
            minHeight: featured ? 'auto' : 'auto', /* Remove min-height fixo que gera buracos */
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
          fontSize: '14px',
          lineHeight: '1.5',
          color: 'var(--text-secondary)',
          marginBottom: '12px',
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: '3', /* Limita a 3 linhas */
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {post.description}
        </p>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start', /* Alinhado a esquerda para fluir melhor */
          alignItems: 'center',
          marginTop: 'auto'
        }}>
          <Link
            to={`/blog/${post.slug}`}
            style={{
              background: 'transparent', /* Botão "ghost" mais limpo */
              color: 'var(--color-primary)',
              border: '2px solid var(--color-primary)',
              borderRadius: '20px',
              padding: '6px 20px', /* Menor padding */
              fontSize: '13px',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-primary)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
          >
            Ler Artigo <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

