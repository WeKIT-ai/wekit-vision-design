
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-8 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
          poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-purple-50/90"></div>
      </div>

      {/* Floating Video Elements */}
      <div className="absolute top-20 right-10 hidden lg:block z-10">
        <div className="relative group cursor-pointer">
          <div className="w-40 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25">
            <Play className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-bounce shadow-lg"></div>
        </div>
      </div>

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
