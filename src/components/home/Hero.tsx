
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Play } from 'lucide-react';

const Hero = () => {
  return (
    <>
      {/* Video Section - Full viewport height */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Bright Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full">
            <iframe
              className="w-full h-full object-cover scale-110"
              src="https://www.youtube.com/embed/YpFq8LAxJxo?autoplay=1&mute=1&loop=1&playlist=YpFq8LAxJxo&controls=0&showinfo=0&rel=0&modestbranding=1&start=0"
              title="Background Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Light overlay for brightness enhancement */}
          <div className="absolute inset-0 bg-white/10"></div>
          {/* Subtle gradient for visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20"></div>
        </div>

        {/* Floating Elements for Video Section */}
        <div className="absolute bottom-20 left-10 hidden lg:block z-10">
          <div className="relative group cursor-pointer">
            <div className="w-36 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-green-500/25">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-1/4 hidden xl:block z-10">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 opacity-80">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Video Section Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group">
              <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-white text-lg font-medium mt-4 drop-shadow-lg">
              Watch Our Story
            </p>
          </div>
        </div>
      </section>

      {/* Text Content Section */}
      <section className="relative py-24 px-6 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-12">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight animate-fade-in">
              Mentoring the Future.
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powered by AI.
              </span>
              <br />
              <span className="font-medium text-gray-700">
                Driven by Purpose.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed animate-fade-in">
              We bridge the gap between potential and opportunity through AI-driven mentorship, 
              connecting youth with the guidance they need to thrive in tomorrow's world.
            </p>
            
            {/* Statistics or Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  10,000+
                </div>
                <p className="text-gray-600 font-medium">Youth Mentored</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-gray-600 font-medium">Expert Mentors</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  95%
                </div>
                <p className="text-gray-600 font-medium">Success Rate</p>
              </div>
            </div>
            
            {/* Button Container */}
            <div className="pt-8 animate-fade-in">
              <a 
                href="https://lovable.dev/projects/37808d26-fa03-45a3-a188-a2da90bcd27e" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-full border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Partner with Us
                  <ArrowRight className="ml-3" size={20} />
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
