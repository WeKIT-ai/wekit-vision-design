
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const ProfessionalsHero = () => {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
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
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl mx-auto text-center flex items-center justify-center min-h-[80vh]">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-8">
            Break Through the
            <span className="block text-wekit-gold">Career Ceiling</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            You're talented, hardworking, and ambitious. So why does career advancement feel impossible? 
            You're not alone — 67% of professionals feel stuck despite their best efforts.
          </p>
          <div className="bg-wekit-teal/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8">
            <p className="text-lg text-white">
              <strong>The Hidden Truth:</strong> 85% of career advancement happens through relationships and guidance, 
              not just performance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <Calendar className="mr-2" size={20} />
                Accelerate My Career
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg font-medium rounded-2xl border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
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
