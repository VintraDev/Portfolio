import Hero from './components/sections/Home/HeroSection'
import Feature from './components/sections/Home/FeatureSection'
import StatsSection from './components/sections/Home/StatsSection';
import ServicesSection from './components/sections/Home/ServicesSection';
import Journey from './components/sections/Home/JourneySection';
import Footer from './components/shared/Footer';

function App() {

  return (
    <>
      <Hero />
      <Feature />
      <Journey />
      <StatsSection />
      <ServicesSection />
    </>
  )
}

export default App
