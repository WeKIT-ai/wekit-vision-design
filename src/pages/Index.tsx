
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import SystemCheck from '@/components/SystemCheck';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import EarlyAccessCTA from '@/components/home/EarlyAccessCTA';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index = () => {
  console.log('Index page rendered - system is responsive to changes');

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      
      {/* System Status Check - Temporary for debugging */}
      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SystemCheck />
        </div>
      </section>

      <TestimonialsSection />
      <EarlyAccessCTA />
      <NewsletterSection />
    </div>
  );
};

export default Index;
