import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';

const YomaSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-8 bg-wekit-soft overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-montserrat text-foreground leading-tight">
                Meet YOMA
                <br />
                <span className="text-wekit-teal">
                  Your AI Mentor Assistant
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the future of career guidance with our AI-powered matching system that connects you with the perfect mentors and opportunities.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 transition-all duration-300 group">
                Discover YOMA
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/3176369b-2415-4829-9170-5a436bde6704.png" 
                  alt="YOMA AI-Powered Career Matching Assistant"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default YomaSection;
