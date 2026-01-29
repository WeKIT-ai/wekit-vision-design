import { Button } from '@/components/ui/button';
import { ArrowRight, Brain } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingElement from '@/components/ui/floating-element';

const StudentsHero = () => {
  return (
    <>
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-black">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/5q4nPGPD9uE?autoplay=1&mute=1&loop=1&playlist=5q4nPGPD9uE&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Students Hero Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 animate-fade-in"></div>
        </div>

        {/* Floating elements */}
        <FloatingElement className="absolute top-1/4 left-1/4 z-10" color="bg-green-400" size="lg" speed="slow" />
        <FloatingElement className="absolute top-1/3 right-1/4 z-10" color="bg-red-400" size="md" speed="medium" delay={1} />
        <FloatingElement className="absolute bottom-1/3 left-1/5 z-10" color="bg-yellow-400" size="sm" speed="fast" delay={2} />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <AnimatedSection animation="zoom-in" duration={600}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
                Stop Graduating Into
                <span className="block text-red-400 animate-pulse">Uncertainty</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl text-white/90 mb-8 drop-shadow-lg">
                You're not alone if you feel unprepared for the job market. 68% of students graduate 
                without clear career direction or job-ready skills. We change that.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-green-500/25 hover:shadow-xl group"
                >
                  Start Your Success Story
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  See Success Stories
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
        {/* Floating elements */}
        <FloatingElement className="absolute top-20 right-10" color="bg-blue-300" size="md" speed="slow" />
        <FloatingElement className="absolute bottom-32 left-20" color="bg-red-300" size="sm" speed="medium" delay={1} />

        <div className="max-w-7xl mx-auto text-center">
          {/* Psychometric Testing CTA */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 max-w-2xl mx-auto mb-8 hover:shadow-lg hover:border-blue-400 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <Brain className="mr-3 text-blue-600 animate-pulse" size={32} />
                <h3 className="text-xl font-bold text-blue-800">Discover Your Perfect Career Path</h3>
              </div>
              <p className="text-blue-700 mb-4">
                Take our advanced psychometric assessment to uncover careers that truly match your personality, 
                skills, and interests. Get personalized insights that guide you to your ideal profession.
              </p>
              <a 
                href="https://purpose-pathway-pilot.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
                >
                  Take Psychometric Test
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                </Button>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-red-100 border border-red-300 rounded-lg p-6 max-w-2xl mx-auto mb-8 hover:shadow-lg hover:border-red-400 transition-all duration-300 hover:-translate-y-1">
              <p className="text-lg text-red-800">
                <strong>The Reality:</strong> Average job search takes 6+ months. 
                Our students land offers in under 3 months.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default StudentsHero;
