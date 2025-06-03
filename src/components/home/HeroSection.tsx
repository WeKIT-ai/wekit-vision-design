
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  console.log('HeroSection rendered - system is responsive to changes');

  return (
    <section className="relative pt-32 pb-24 px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center space-y-12">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight">
            Unlock Your
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Career Potential
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            AI-powered career guidance platform that matches young talent with expert mentors 
            and personalized development pathways for meaningful career success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href="https://lovable.dev/projects/d35e1f9b-a70c-431e-a387-124d37b10d7a" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Take Free Assessment
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </a>
            <a 
              href="https://calendly.com/yvonne-roberts/wekit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-6 text-lg font-medium rounded-full transition-all duration-300"
              >
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
