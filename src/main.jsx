import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/shared/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Works from './pages/Works.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Footer from './components/shared/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='pages/About' element={<About />} />
        <Route path='pages/Works' element={<Works />} />
        <Route path='pages/Services' element={<Services />} />
        <Route path='pages/Gallery' element={<Gallery />} />
        <Route path='pages/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
