import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import UniverseSection from '@/components/sections/UniverseSection';
import WhyReadSection from '@/components/sections/WhyReadSection';
import AuthorSection from '@/components/sections/AuthorSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <UniverseSection />
      <WhyReadSection />
      <AuthorSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
