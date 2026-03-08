
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <>
      {/* Hero Section with Image Background */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/c6564568-f266-425d-8f95-03d5389bdff0.png"
            alt="Your future is waiting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content - Bottom Left */}
        <div className="absolute inset-0 z-20 flex items-end justify-start p-8 md:p-16 pb-32">
          <div className="text-left max-w-2xl">
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-montserrat text-white leading-[1.05] tracking-tight">
                Mentoring the Future
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-montserrat text-wekit-gold leading-[1.05] tracking-tight">
                Powered by AI
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-montserrat text-white/90 leading-[1.05] tracking-tight">
                Driven by Purpose
              </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg font-semibold">
              WeKIT = Wot Kareer Is iT?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/mentor-waitlist">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  Join Our Mentor Community
                  <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                </Button>
              </a>
              <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 group border-2 border-white"
                >
                  <Calendar className="mr-3" size={20} />
                  Book a Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Text Content Section */}
      <section className="relative py-24 px-6 md:px-8 bg-wekit-soft min-h-screen flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-12">
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-[1.1] tracking-tight">
              Mentoring the Future.
              <br />
              <span className="text-wekit-teal">
                Powered by AI.
              </span>
              <br />
              <span className="text-foreground/80">
                Driven by Purpose.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We bridge the gap between potential and opportunity through AI-driven mentorship, 
              connecting youth with the guidance they need to thrive in tomorrow's world.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-wekit-teal">
                  10,000+
                </div>
                <p className="text-muted-foreground font-medium">Youth Mentored</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-wekit-teal">
                  500+
                </div>
                <p className="text-muted-foreground font-medium">Expert Mentors</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-wekit-teal">
                  95%
                </div>
                <p className="text-muted-foreground font-medium">Success Rate</p>
              </div>
            </div>
            
            {/* Button Container */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/start-journey">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  Start Here
                  <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                </Button>
              </a>
              <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-6 text-lg font-medium transition-all duration-300 group"
                >
                  <Calendar className="mr-3" size={20} />
                  Book a Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
