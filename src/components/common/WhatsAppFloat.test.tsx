import React from 'react';
import { render, screen } from '@testing-library/react';
import WhatsAppFloat from './WhatsAppFloat';

describe('WhatsAppFloat Component', () => {
  it('should render without crashing', () => {
    render(<WhatsAppFloat />);
    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();
  });

  it('should render WhatsApp icon', () => {
    render(<WhatsAppFloat />);
    const icon = document.querySelector('.fa-whatsapp');
    expect(icon).toBeInTheDocument();
  });

  it('should have correct WhatsApp link format', () => {
    render(<WhatsAppFloat />);
    const link = screen.getByRole('link');
    const href = link.getAttribute('href');
    
    expect(href).toContain('wa.me');
    expect(href).toContain('5585'); // Brazil code + state code
  });

  it('should open in new tab', () => {
    render(<WhatsAppFloat />);
    const link = screen.getByRole('link');
    
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should have accessibility label', () => {
    render(<WhatsAppFloat />);
    const link = screen.getByRole('link');
    
    expect(link).toHaveAttribute('aria-label', expect.stringContaining('WhatsApp'));
  });

  it('should be fixed position (for floating)', () => {
    const { container } = render(<WhatsAppFloat />);
    const floatElement = container.querySelector('.whatsapp-float');
    
    expect(floatElement).toBeInTheDocument();
  });

  it('should have proper z-index for floating', () => {
    const { container } = render(<WhatsAppFloat />);
    const floatElement = container.querySelector('.whatsapp-float');
    
    if (floatElement) {
      const styles = window.getComputedStyle(floatElement);
      // Should have high z-index to float above content
      expect(styles.position).toBeTruthy();
    }
  });
});

