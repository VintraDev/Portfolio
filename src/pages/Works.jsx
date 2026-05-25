import CTASection from '@/components/sections/Works/CTASection';
import HeroSection from '@/components/sections/Works/HeroSection';
import PageTransition from '@/components/shared/PageTransition';

function Works() {
  return (
    <PageTransition>
      <HeroSection />
      <CTASection />
    </PageTransition>
  );
}

export default Works;
