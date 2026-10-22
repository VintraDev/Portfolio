import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/shared/Layout';
import Home from '@/pages/Home';

// Home é a única rota necessária para a primeira pintura. As demais páginas
// são carregadas apenas quando o visitante navega até elas.
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Resume = lazy(() => import('@/pages/Resume'));
const Services = lazy(() => import('@/pages/Services'));
const Works = lazy(() => import('@/pages/Works'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="works" element={<Works />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
);
