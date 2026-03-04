import { Button } from '@/components/ui/button';
import { ArrowRight, Brain } from 'lucide-react';

const StudentsHero = () => {
  return (
    <>
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
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
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content - Bottom Left */}
        <div className="absolute inset-0 z-20 flex items-end justify-start p-8 md:p-16 pb-32">
          <div className="text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-6 leading-tight">
              Stop Graduating Into
              <span className="block text-wekit-gold">Uncertainty</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              You're not alone if you feel unprepared for the job market. 68% of students graduate 
              without clear career direction or job-ready skills. We change that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-6 text-lg font-medium border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                See Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-wekit-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-card border border-border p-6 max-w-2xl mx-auto mb-8 shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <Brain className="mr-3 text-wekit-teal" size={32} />
              <h3 className="text-xl font-semibold font-montserrat text-foreground">Discover Your Perfect Career Path</h3>
            </div>
            <p className="text-muted-foreground mb-4">
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
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                Take Psychometric Test
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Button>
            </a>
          </div>

          <div className="bg-wekit-primary/10 border border-wekit-primary/20 p-6 max-w-2xl mx-auto mb-8">
            <p className="text-lg text-foreground">
              <strong>The Reality:</strong> Average job search takes 6+ months. 
              Our students land offers in under 3 months.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentsHero;
