import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 md:px-8 overflow-hidden bg-primary">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary-foreground leading-tight">
          Ready to Make
          <br />
          an Impact?
        </h2>

        <p className="text-xl text-primary-foreground/70 leading-relaxed">
          Join our growing ecosystem of mentors, institutions, and organizations 
          dedicated to empowering the next generation of leaders.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/start-journey">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Button>
          </a>
          <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-12 py-6 text-lg font-medium rounded-2xl transition-all duration-300 group"
            >
              <Calendar className="mr-3" size={20} />
              Schedule a Call
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
