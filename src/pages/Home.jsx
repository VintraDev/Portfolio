import { lazy, Suspense } from 'react';
import Hero from '@/components/sections/Home/HeroSection';
import PageTransition from '@/components/shared/PageTransition';

// Mantém o JavaScript crítico limitado ao hero; o restante é baixado em chunks
// separados logo após a primeira renderização.
const Feature = lazy(() => import('@/components/sections/Home/FeatureSection'));
const Journey = lazy(() => import('@/components/sections/Home/JourneySection'));
const StatsSection = lazy(
  () => import('@/components/sections/Home/StatsSection'),
);
const ServicesSection = lazy(
  () => import('@/components/sections/Home/ServicesSection'),
);

function Home() {
  return (
    <PageTransition>
      <div id="inicio">
        <Hero />
      </div>
      <Suspense fallback={null}>
        <div id="destaques">
          <Feature />
        </div>
        <div id="trajetoria">
          <Journey />
        </div>
        <div id="metricas">
          <StatsSection />
        </div>
        <div id="servicos">
          <ServicesSection />
        </div>
      </Suspense>
    </PageTransition>
  );
}

export default Home;
