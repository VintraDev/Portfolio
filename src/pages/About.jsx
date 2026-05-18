import BeyondTheCodeSection from '@/components/sections/About/BeyondTheCodeSection';
import CTASection from '@/components/sections/About/CTASection';
import FeatureSection from '@/components/sections/About/FeatureSection';
import Hero from '@/components/sections/About/HeroSection';
import SkillSection from '@/components/sections/About/SkillSection';

function About() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <SkillSection />
      <BeyondTheCodeSection />
      <CTASection />
    </>
  );
}

export default About;
