import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingElement from '@/components/ui/floating-element';

const YomaSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-8 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
      {/* Floating elements */}
      <FloatingElement className="absolute top-10 left-10" color="bg-purple-400" size="md" speed="slow" />
      <FloatingElement className="absolute bottom-20 right-16" color="bg-blue-400" size="lg" speed="medium" delay={1} />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Meet YOMA
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-500">
                  Your AI Mentor Assistant
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the future of career guidance with our AI-powered matching system that connects you with the perfect mentors and opportunities.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
                Discover YOMA
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/3176369b-2415-4829-9170-5a436bde6704.png" 
                  alt="YOMA AI-Powered Career Matching Assistant"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 left-1/3 w-10 h-10 bg-purple-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default YomaSection;
