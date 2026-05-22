import Feature from '@/components/sections/Home/FeatureSection';
import Hero from '@/components/sections/Home/HeroSection';
import Journey from '@/components/sections/Home/JourneySection';
import ServicesSection from '@/components/sections/Home/ServicesSection';
import StatsSection from '@/components/sections/Home/StatsSection';

function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Journey />
      <StatsSection />
      <ServicesSection />
    </>
  );
}

export default Home;
