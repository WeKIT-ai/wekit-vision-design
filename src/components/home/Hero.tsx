
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Play } from 'lucide-react';

const Hero = () => {
  return (
    <>
      {/* Hero Section with Image Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/f9e02f74-cebe-4891-a8e2-d36b5e83b5a7.png"
            alt="Your future is waiting"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Floating Video Element */}
        <div className="absolute bottom-20 right-10 hidden lg:block z-10">
          <div className="relative group">
            <div className="w-80 h-48 bg-black rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5q4nPGPD9uE?autoplay=0&mute=0&controls=1&showinfo=1&rel=0&modestbranding=1"
                title="Floating Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
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

        <div className="absolute top-1/2 left-1/4 hidden xl:block z-10">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 opacity-80">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Your Future is Waiting.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Unlock It.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
              AI-powered mentorship connecting youth with opportunities to thrive in tomorrow's world.
            </p>
            
            <div className="pt-4">
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
