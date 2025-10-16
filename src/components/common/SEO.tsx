import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

/**
 * Componente para gerenciar meta tags e SEO
 */
export const SEO: React.FC<SEOProps> = ({
  title = 'Clínica Singulare - Reabilitação Infantil',
  description = 'Centro especializado em reabilitação infantil em Fortaleza. Fisioterapia, Terapia Ocupacional, Fonoaudiologia e Psicologia para crianças.',
  keywords = ['reabilitação infantil', 'fisioterapia pediátrica', 'terapia ocupacional', 'fonoaudiologia', 'clínica infantil fortaleza'],
  image = 'https://clinicasingulare.com.br/og-image.jpg',
  url = 'https://clinicasingulare.com.br',
  type = 'website',
  author,
  publishedDate,
  modifiedDate,
}) => {
  const siteTitle = title.includes('Clínica Singulare') ? title : `${title} | Clínica Singulare`;
  
  return (
    <Helmet>
      {/* Meta Tags Básicas */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Clínica Singulare" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article-specific meta tags */}
      {type === 'article' && (
        <>
          {author && <meta name="author" content={author} />}
          {publishedDate && <meta property="article:published_time" content={publishedDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          <meta property="article:section" content="Saúde Infantil" />
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data - Local Business (Medical Clinic) */}
      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Clínica Singulare",
            "image": image,
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua das Flores, 123 - Vila Madalena",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "postalCode": "05433-000",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -23.5505,
              "longitude": -46.6333
            },
            "telephone": "(11) 3456-7890",
            "email": "contato@clinicasingulare.com.br",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "12:00"
              }
            ],
            "priceRange": "$$",
            "medicalSpecialty": [
              "Pediatrics",
              "Physical Therapy",
              "Occupational Therapy",
              "Speech Therapy",
              "Child Psychology"
            ],
            "url": url,
            "sameAs": [
              "https://www.facebook.com/clinicasingulare",
              "https://www.instagram.com/clinicasingulare",
              "https://www.linkedin.com/company/clinicasingulare"
            ],
            "hasMap": "https://goo.gl/maps/EXEMPLO",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })}
        </script>
      )}

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Clínica Singulare",
          "url": "https://clinicasingulare.com.br",
          "logo": "https://clinicasingulare.com.br/logo.png",
          "description": "Centro especializado em reabilitação infantil",
          "sameAs": [
            "https://www.facebook.com/clinicasingulare",
            "https://www.instagram.com/clinicasingulare",
            "https://www.linkedin.com/company/clinicasingulare"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "(11) 3456-7890",
            "contactType": "customer service",
            "areaServed": "BR",
            "availableLanguage": "Portuguese"
          }
        })}
      </script>

      {/* Breadcrumb Schema for articles */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://clinicasingulare.com.br"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://clinicasingulare.com.br/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": title
              }
            ]
          })}
        </script>
      )}

      {/* Article Schema */}
      {type === 'article' && author && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "image": image,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Clínica Singulare",
              "logo": {
                "@type": "ImageObject",
                "url": "https://clinicasingulare.com.br/logo.png"
              }
            },
            "datePublished": publishedDate,
            "dateModified": modifiedDate || publishedDate,
            "description": description,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

