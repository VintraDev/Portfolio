import HeroSection from '@/components/sections/Services/HeroSection';
import ProcessSection from '@/components/sections/Services/ProcessSection';
import CTASection from '@/components/sections/Works/CTASection';
import PageTransition from '@/components/shared/PageTransition';

function Services() {
  return (
    <PageTransition>
      <HeroSection />
      <ProcessSection />
      <CTASection />
    </PageTransition>
  );
}

export default Services;
