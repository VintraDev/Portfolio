import HeroSection from '@/components/sections/Services/HeroSection';
import ProcessSection from '@/components/sections/Services/ProcessSection';
import CTASection from '@/components/sections/Works/CTASection';
import PageTransition from '@/components/shared/PageTransition';

function Services() {
  return (
    <PageTransition>
      <div id="servicos">
        <HeroSection />
      </div>
      <div id="processo">
        <ProcessSection />
      </div>
      <div id="contato">
        <CTASection />
      </div>
    </PageTransition>
  );
}

export default Services;
