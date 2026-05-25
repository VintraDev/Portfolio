import Feature from '@/components/sections/Home/FeatureSection';
import Hero from '@/components/sections/Home/HeroSection';
import Journey from '@/components/sections/Home/JourneySection';
import ServicesSection from '@/components/sections/Home/ServicesSection';
import StatsSection from '@/components/sections/Home/StatsSection';
import PageTransition from '@/components/shared/PageTransition';

function Home() {
  return (
    <PageTransition>
      <Hero />
      <Feature />
      <Journey />
      <StatsSection />
      <ServicesSection />
    </PageTransition>
  );
}

export default Home;
