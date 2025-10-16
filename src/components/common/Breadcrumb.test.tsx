import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb Component', () => {
  const renderWithRouter = (component: React.ReactElement) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  it('should render without crashing', () => {
    renderWithRouter(<Breadcrumb items={[]} />);
    expect(screen.getByLabelText(/breadcrumb/i)).toBeInTheDocument();
  });

  it('should always render home link', () => {
    renderWithRouter(<Breadcrumb items={[]} />);
    expect(screen.getByText(/início/i)).toBeInTheDocument();
  });

  it('should render single item', () => {
    renderWithRouter(
      <Breadcrumb items={[{ label: 'Test Item' }]} />
    );
    
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('should render multiple items', () => {
    renderWithRouter(
      <Breadcrumb 
        items={[
          { label: 'First', path: '/first' },
          { label: 'Second', path: '/second' },
          { label: 'Third' }
        ]} 
      />
    );
    
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('should render items with links when path is provided', () => {
    renderWithRouter(
      <Breadcrumb 
        items={[{ label: 'Test', path: '/test' }]} 
      />
    );
    
    const link = screen.getByRole('link', { name: /test/i });
    expect(link).toHaveAttribute('href', '/test');
  });

  it('should render last item as plain text (no link)', () => {
    renderWithRouter(
      <Breadcrumb 
        items={[
          { label: 'Link Item', path: '/link' },
          { label: 'Plain Item' }
        ]} 
      />
    );
    
    // First item should be a link
    expect(screen.getByRole('link', { name: /link item/i })).toBeInTheDocument();
    
    // Last item should not be a link
    const plainText = screen.getByText('Plain Item');
    expect(plainText).not.toHaveAttribute('href');
  });

  it('should render separators between items', () => {
    renderWithRouter(
      <Breadcrumb 
        items={[
          { label: 'First' },
          { label: 'Second' }
        ]} 
      />
    );
    
    // Should have chevron icons
    const icons = document.querySelectorAll('.fa-chevron-right');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('should render home icon', () => {
    renderWithRouter(<Breadcrumb items={[]} />);
    
    const homeIcon = document.querySelector('.fa-home');
    expect(homeIcon).toBeInTheDocument();
  });

  it('should handle items without path', () => {
    renderWithRouter(
      <Breadcrumb 
        items={[
          { label: 'No Path 1' },
          { label: 'No Path 2' }
        ]} 
      />
    );
    
    expect(screen.getByText('No Path 1')).toBeInTheDocument();
    expect(screen.getByText('No Path 2')).toBeInTheDocument();
  });

  it('should handle long labels', () => {
    const longLabel = 'A'.repeat(100);
    renderWithRouter(
      <Breadcrumb items={[{ label: longLabel }]} />
    );
    
    expect(screen.getByText(longLabel)).toBeInTheDocument();
  });

  it('should handle special characters in labels', () => {
    renderWithRouter(
      <Breadcrumb 
        items={[{ label: 'Test & <Special> Characters' }]} 
      />
    );
    
    expect(screen.getByText('Test & <Special> Characters')).toBeInTheDocument();
  });

  it('should handle empty label', () => {
    renderWithRouter(
      <Breadcrumb items={[{ label: '' }]} />
    );
    
    expect(screen.getByLabelText(/breadcrumb/i)).toBeInTheDocument();
  });

  it('should handle many items', () => {
    const manyItems = Array.from({ length: 10 }, (_, i) => ({
      label: `Item ${i + 1}`,
      path: `/item-${i + 1}`
    }));
    
    renderWithRouter(<Breadcrumb items={manyItems} />);
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 10')).toBeInTheDocument();
  });

  it('should render home link with correct href', () => {
    renderWithRouter(<Breadcrumb items={[]} />);
    
    const homeLink = screen.getByRole('link', { name: /início/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should handle items with hash in path', () => {
    renderWithRouter(
      <Breadcrumb 
        items={[{ label: 'Section', path: '#section' }]} 
      />
    );
    
    const link = screen.getByRole('link', { name: /section/i });
    expect(link).toHaveAttribute('href', '#section');
  });

  it('should render with correct ARIA attributes', () => {
    renderWithRouter(<Breadcrumb items={[{ label: 'Test' }]} />);
    
    const nav = screen.getByLabelText(/breadcrumb/i);
    expect(nav).toHaveAttribute('aria-label', 'breadcrumb');
  });
});

