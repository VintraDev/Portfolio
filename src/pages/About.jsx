import BeyondTheCodeSection from '@/components/sections/About/BeyondTheCodeSection';
import CTASection from '@/components/sections/About/CTASection';
import FeatureSection from '@/components/sections/About/FeatureSection';
import Hero from '@/components/sections/About/HeroSection';
import SkillSection from '@/components/sections/About/SkillSection';
import PageTransition from '@/components/shared/PageTransition';

function About() {
  return (
    <PageTransition>
      <Hero />
      <FeatureSection />
      <SkillSection />
      <BeyondTheCodeSection />
      <CTASection />
    </PageTransition>
  );
}

export default About;
