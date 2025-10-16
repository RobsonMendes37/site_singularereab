import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

/**
 * Componente Button reutilizável
 * 
 * @example
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Agendar Consulta
 * </Button>
 * 
 * <Button variant="outline" icon={<FaWhatsapp />} iconPosition="left">
 *   WhatsApp
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const classes = [
    'btn-custom',
    `btn-custom--${variant}`,
    `btn-custom--${size}`,
    fullWidth && 'btn-custom--full-width',
    loading && 'btn-custom--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="btn-custom__spinner">
          <svg
            className="spinner"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="spinner-path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            />
          </svg>
        </span>
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className="btn-custom__icon btn-custom__icon--left">{icon}</span>
      )}
      
      <span className="btn-custom__content">{children}</span>
      
      {!loading && icon && iconPosition === 'right' && (
        <span className="btn-custom__icon btn-custom__icon--right">{icon}</span>
      )}
    </button>
  );
};

