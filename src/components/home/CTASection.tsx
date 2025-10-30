
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
          Ready to Make
          <br />
          <span className="font-medium">an Impact?</span>
        </h2>
        <p className="text-xl text-blue-100 font-light leading-relaxed">
          Join our growing ecosystem of mentors, institutions, and organizations 
          dedicated to empowering the next generation of leaders.
        </p>
        <div className="pt-8">
          <a href="/start-journey">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-12 py-6 text-lg font-medium rounded-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
