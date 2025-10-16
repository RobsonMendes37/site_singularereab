import React from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

/**
 * Botões de compartilhamento social
 */
export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`,
  };

  const buttonStyle = (color: string) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: color,
    color: 'white',
    fontSize: '18px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  });

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '15px',
      padding: '30px 0',
      borderTop: '2px solid #f0f4f8',
      borderBottom: '2px solid #f0f4f8',
      margin: '30px 0'
    }}>
      <span style={{ 
        fontSize: '16px', 
        fontWeight: '600', 
        color: 'var(--text-secondary)',
        marginRight: '10px'
      }}>
        Compartilhar:
      </span>
      
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle('#1877F2')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 15px rgba(24, 119, 242, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        }}
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle('#1DA1F2')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 15px rgba(29, 161, 242, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        }}
      >
        <i className="fab fa-twitter"></i>
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle('#0A66C2')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 15px rgba(10, 102, 194, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        }}
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle('#25D366')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 15px rgba(37, 211, 102, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

