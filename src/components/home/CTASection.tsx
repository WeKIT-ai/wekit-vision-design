import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingElement from '@/components/ui/floating-element';

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Ocean waves representing endless possibilities"
          className="w-full h-full object-cover opacity-30 transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        {/* Animated wave elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/20 to-transparent animate-pulse"></div>
      </div>

      {/* Floating elements */}
      <FloatingElement className="absolute top-20 left-10 z-10" color="bg-white" size="md" speed="slow" />
      <FloatingElement className="absolute top-1/3 right-20 z-10" color="bg-blue-300" size="lg" speed="medium" delay={1} />
      <FloatingElement className="absolute bottom-1/4 left-1/4 z-10" color="bg-purple-300" size="sm" speed="fast" delay={2} />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <AnimatedSection animation="zoom-in">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Ready to Make
            <br />
            <span className="font-medium">an Impact?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={150}>
          <p className="text-xl text-blue-100 font-light leading-relaxed">
            Join our growing ecosystem of mentors, institutions, and organizations 
            dedicated to empowering the next generation of leaders.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/start-journey">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-12 py-6 text-lg font-medium rounded-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              >
                Get Started Today
                <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Button>
            </a>
            <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-12 py-6 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group border-2 border-white"
              >
                <Calendar className="mr-3 transition-transform duration-300 group-hover:rotate-12" size={20} />
                Schedule a Call
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
