
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-8 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-purple-50/90"></div>
      </div>

      {/* YouTube Video Embed */}
      <div className="absolute top-20 right-10 hidden lg:block z-10">
        <div className="relative group cursor-pointer">
          <div className="w-80 h-48 rounded-xl overflow-hidden shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25">
            <iframe
              width="320"
              height="192"
              src="https://www.youtube.com/embed/fJg2UTFp4Hk?autoplay=1&mute=1&loop=1&playlist=fJg2UTFp4Hk&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Background Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-bounce shadow-lg"></div>
        </div>
      </div>

      {/* Floating Video Elements */}
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

      <div className="max-w-6xl mx-auto relative z-20">
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
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We bridge the gap between potential and opportunity through AI-driven mentorship, 
            connecting youth with the guidance they need to thrive in tomorrow's world.
          </p>
          <div className="pt-8 animate-fade-in">
            <a 
              href="https://lovable.dev/projects/37808d26-fa03-45a3-a188-a2da90bcd27e" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Partner with Us
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400/15 to-orange-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
