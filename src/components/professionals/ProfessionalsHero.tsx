
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProfessionalsHero = () => {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3000ms] ease-out"
          src="https://www.youtube.com/embed/8t34Mhbl-Uk?autoplay=1&mute=1&loop=1&playlist=8t34Mhbl-Uk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
          title="Professional Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}
        ></iframe>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70 z-10 animate-fade-in"></div>
        
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-20 animate-[slideDown_1s_ease-out]"></div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-[float_3s_ease-in-out_infinite] opacity-70 z-25"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-[float_4s_ease-in-out_infinite_1s] opacity-60 z-25"></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-red-400 rounded-full animate-[float_5s_ease-in-out_infinite_2s] opacity-50 z-25"></div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl mx-auto text-center flex items-center justify-center min-h-[80vh]">
        <div className="space-y-8 animate-[slideUp_1s_ease-out]">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl animate-[zoomIn_1.2s_ease-out] hover:animate-pulse transition-all duration-300">
            Break Through the
            <span className="block text-red-400 drop-shadow-2xl animate-[slideLeft_1.5s_ease-out] hover:text-red-300 transition-colors duration-300">Career Ceiling</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8 drop-shadow-lg leading-relaxed animate-[slideRight_1.8s_ease-out]">
            You're talented, hardworking, and ambitious. So why does career advancement feel impossible? 
            You're not alone – 67% of professionals feel stuck despite their best efforts.
          </p>
          <div className="bg-red-500/90 backdrop-blur-sm border border-red-400 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-2xl animate-[zoomIn_2s_ease-out] hover:bg-red-500/95 hover:scale-105 transition-all duration-300">
            <p className="text-lg text-white drop-shadow-sm">
              <strong>The Hidden Truth:</strong> 85% of career advancement happens through relationships and guidance, 
              not just performance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[slideUp_2.2s_ease-out]">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-pulse hover:animate-none"
            >
              Accelerate My Career
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              See Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsHero;
