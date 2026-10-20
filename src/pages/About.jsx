import BeyondTheCodeSection from '@/components/sections/About/BeyondTheCodeSection';
import CTASection from '@/components/sections/About/CTASection';
import FeatureSection from '@/components/sections/About/FeatureSection';
import Hero from '@/components/sections/About/HeroSection';
import SkillSection from '@/components/sections/About/SkillSection';
import PageTransition from '@/components/shared/PageTransition';

function About() {
  return (
    <PageTransition>
      <div id="visao-geral">
        <Hero />
      </div>
      <FeatureSection />
      <div id="habilidades">
        <SkillSection />
      </div>
      <div id="alem-do-codigo">
        <BeyondTheCodeSection />
      </div>
      <CTASection />
    </PageTransition>
  );
}

export default About;
