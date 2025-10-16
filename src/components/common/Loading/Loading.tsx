import React from 'react';
import './Loading.css';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
  color?: string;
  fullScreen?: boolean;
  text?: string;
}

/**
 * Componente Loading reutilizável
 * 
 * @example
 * <Loading size="lg" text="Carregando..." />
 * <Loading variant="dots" />
 * <Loading fullScreen />
 */
export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'spinner',
  color,
  fullScreen = false,
  text,
}) => {
  const containerClasses = [
    'loading-container',
    fullScreen && 'loading-container--fullscreen',
  ]
    .filter(Boolean)
    .join(' ');

  const loadingClasses = [
    'loading',
    `loading--${variant}`,
    `loading--${size}`,
  ].join(' ');

  const style = color ? { color } : undefined;

  const renderLoading = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className={loadingClasses} style={style}>
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
          </div>
        );

      case 'pulse':
        return (
          <div className={loadingClasses} style={style}>
            <div className="loading__pulse"></div>
          </div>
        );

      case 'spinner':
      default:
        return (
          <div className={loadingClasses} style={style}>
            <svg
              className="loading__spinner"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="loading__spinner-path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
              />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className={containerClasses}>
      {renderLoading()}
      {text && <p className="loading__text">{text}</p>}
    </div>
  );
};

