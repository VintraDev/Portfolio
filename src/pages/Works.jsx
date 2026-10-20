import CTASection from '@/components/sections/Works/CTASection';
import HeroSection from '@/components/sections/Works/HeroSection';
import PageTransition from '@/components/shared/PageTransition';

function Works() {
  return (
    <PageTransition>
      <div id="trabalhos">
        <HeroSection />
      </div>
      <div id="contato">
        <CTASection />
      </div>
    </PageTransition>
  );
}

export default Works;
