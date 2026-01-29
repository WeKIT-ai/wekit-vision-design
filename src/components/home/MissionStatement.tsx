import AnimatedSection from '@/components/ui/animated-section';
import FloatingElement from '@/components/ui/floating-element';

const MissionStatement = () => {
  return (
    <section className="relative py-32 px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Mountain landscape representing growth and achievement"
          className="w-full h-full object-cover opacity-20 transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80"></div>
        {/* Animated overlay elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating elements */}
      <FloatingElement className="absolute top-20 right-20 z-10" color="bg-blue-400" size="md" speed="slow" />
      <FloatingElement className="absolute bottom-24 left-16 z-10" color="bg-purple-400" size="lg" speed="medium" delay={1} />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <AnimatedSection animation="zoom-in">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight hover:text-blue-600 transition-colors duration-500">
            Building Bridges
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">to Success</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={150}>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            At WeKIT International, we believe every young person deserves access to quality mentorship and guidance. 
            Our AI-powered platform connects students and young professionals with mentors, educational 
            institutions, and opportunities that align with their goals and aspirations.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <p className="text-lg text-gray-500 italic">
            "Wot Kareer Is iT?" - Your journey to career clarity starts here
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MissionStatement;
