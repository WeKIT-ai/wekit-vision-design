
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProfessionalsCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary-foreground mb-8">
          Stop Waiting for Your Career to "Just Happen"
        </h2>
        <p className="text-lg text-primary-foreground/70 mb-8">
          Join professionals who took control of their career trajectory and 
          achieved the success they deserved through strategic mentorship.
        </p>
        <a href="/mentor-waitlist">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            Start Your Career Acceleration
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ProfessionalsCTA;
