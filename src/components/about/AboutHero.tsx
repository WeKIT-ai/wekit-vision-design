import { Heart } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingElement from '@/components/ui/floating-element';

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-8 overflow-hidden">
      {/* Floating elements */}
      <FloatingElement className="absolute top-24 left-10" color="bg-blue-400" size="lg" speed="slow" />
      <FloatingElement className="absolute top-40 right-16" color="bg-purple-400" size="md" speed="medium" delay={1} />
      <FloatingElement className="absolute bottom-20 left-1/4" color="bg-pink-400" size="sm" speed="fast" delay={2} />
      <FloatingElement className="absolute bottom-32 right-1/4" color="bg-red-300" size="md" speed="slow" delay={0.5} />

      <div className="max-w-6xl mx-auto text-center">
        <AnimatedSection animation="zoom-in" duration={500}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-8 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-default">
            <Heart className="w-4 h-4 mr-2 text-red-500 animate-pulse" />
            WeKIT International - Wot Kareer Is iT?
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">WeKIT</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            WeKIT International Pvt Limited is on a mission to bridge the gap between potential and opportunity, 
            connecting young minds with the guidance they need to thrive in an AI-powered world.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <p className="text-lg text-gray-500 mt-4 italic">
            "Wot Kareer Is iT?" - Helping you discover your perfect career path
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutHero;
