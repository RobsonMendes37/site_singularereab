import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/animations.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import Home from './pages/Home'; // Home carrega imediatamente

// Lazy loading para outras páginas
const OurStory = lazy(() => import('./pages/OurStory'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'));

// Componente de loading
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: 'var(--bs-primary)'
  }}>
    <div>
      <i className="fas fa-spinner fa-spin me-2"></i>
      Carregando...
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre/historia" element={<OurStory />} />
              <Route path="/tratamento/:slug" element={<TreatmentDetail />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </Suspense>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
