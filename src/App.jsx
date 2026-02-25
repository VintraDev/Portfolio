import Hero from './components/sections/Home/Hero'
import Feature from './components/sections/Home/Feature'
import StatsSection from './components/sections/Home/StatsSection';
import ServicesSection from './components/sections/Home/ServicesSection';
import Journey from './components/sections/Home/Journey';
import Footer from './components/shared/Footer';

function App() {

  return (
    <>
      <Hero />
      <Feature />
      <Journey />
      <StatsSection />
      <ServicesSection />
      <Footer />
    </>
  )
}

export default App
