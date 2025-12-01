
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Play, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <>
      {/* Hero Section with Image Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/c6564568-f266-425d-8f95-03d5389bdff0.png"
            alt="Your future is waiting"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[5000ms] ease-out"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 animate-fade-in"></div>
        </div>

        {/* Floating Video Element - Moved to Left Side */}
        <div className="absolute bottom-20 left-10 hidden lg:block z-10 animate-[slideLeft_1.5s_ease-out]">
          <div className="relative group">
            <div className="w-80 h-48 bg-black rounded-xl overflow-hidden shadow-2xl hover:scale-110 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 hover:shadow-blue-500/25">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5q4nPGPD9uE?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=5q4nPGPD9uE&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0"
                title="Floating Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Floating Animation Element - Moved to Right Side */}
        <div className="absolute bottom-20 right-10 hidden lg:block z-10 animate-[slideRight_1.5s_ease-out]">
          <div className="relative group cursor-pointer">
            <div className="w-36 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl hover:scale-125 hover:-translate-y-3 hover:rotate-3 transition-all duration-500 hover:shadow-green-500/50">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce hover:animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100 hover:animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200 hover:animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-[float_3s_ease-in-out_infinite] opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-[float_4s_ease-in-out_infinite_1s] opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-yellow-400 rounded-full animate-[float_5s_ease-in-out_infinite_2s] opacity-40"></div>

        {/* WeKIT Title - Top Left */}
        <div className="absolute top-8 left-8 z-30 animate-[slideDown_1s_ease-out]">
          <h1 className="text-6xl md:text-9xl font-black text-white drop-shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            WeKIT
          </h1>
        </div>

        {/* Hero Content Overlay - Positioned to avoid covering face */}
        <div className="absolute inset-0 z-20 flex items-center justify-start pl-8 md:pl-16">
          <div className="text-left max-w-2xl animate-[slideUp_1.2s_ease-out]">
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                Mentoring the Future
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-[slideLeft_1.5s_ease-out] hover:from-purple-400 hover:to-blue-400 transition-all duration-500">
                  Powered by AI
                </span>
                <br />
                <span className="text-white/90">
                  Driven by Purpose
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-lg max-w-lg animate-[slideRight_1.8s_ease-out] hover:text-white transition-colors duration-300 font-semibold">
              WeKIT = Wot Kareer Is iT?
            </p>
          </div>
        </div>

        {/* Center Bottom Buttons - Join Mentor Community & Book Consultation */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 animate-[zoomIn_2s_ease-out] flex flex-col sm:flex-row gap-4 items-center">
          <a href="/mentor-waitlist">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-full border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
            >
              Join Our Mentor Community
              <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2" size={20} />
            </Button>
          </a>
          <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 px-12 py-6 text-lg font-medium rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 group border-2 border-white"
            >
              <Calendar className="mr-3 transition-transform duration-300 group-hover:rotate-12" size={20} />
              Book a Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Text Content Section */}
      <section className="relative py-24 px-6 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 animate-[slideDown_2s_ease-out]">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-300 rounded-full animate-[float_4s_ease-in-out_infinite] opacity-30"></div>
        <div className="absolute bottom-32 right-16 w-4 h-4 bg-purple-300 rounded-full animate-[float_5s_ease-in-out_infinite_1s] opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-pink-300 rounded-full animate-[float_6s_ease-in-out_infinite_2s] opacity-25"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-12">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight animate-[zoomIn_1.5s_ease-out] hover:text-blue-600 transition-colors duration-500">
              Mentoring the Future.
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500 animate-[slideLeft_2s_ease-out]">
                Powered by AI.
              </span>
              <br />
              <span className="font-medium text-gray-700 hover:text-purple-600 transition-colors duration-500 animate-[slideRight_2.5s_ease-out]">
                Driven by Purpose.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed animate-[slideUp_2s_ease-out] hover:text-gray-800 transition-colors duration-300">
              We bridge the gap between potential and opportunity through AI-driven mentorship, 
              connecting youth with the guidance they need to thrive in tomorrow's world.
            </p>
            
            {/* Statistics or Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
              <div className="text-center space-y-2 animate-[slideUp_1s_ease-out_0.2s_both] hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:animate-pulse">
                  10,000+
                </div>
                <p className="text-gray-600 font-medium group-hover:text-blue-600 transition-colors duration-300">Youth Mentored</p>
              </div>
              <div className="text-center space-y-2 animate-[slideUp_1s_ease-out_0.4s_both] hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent group-hover:animate-pulse">
                  500+
                </div>
                <p className="text-gray-600 font-medium group-hover:text-green-600 transition-colors duration-300">Expert Mentors</p>
              </div>
              <div className="text-center space-y-2 animate-[slideUp_1s_ease-out_0.6s_both] hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:animate-pulse">
                  95%
                </div>
                <p className="text-gray-600 font-medium group-hover:text-purple-600 transition-colors duration-300">Success Rate</p>
              </div>
            </div>
            
            {/* Button Container */}
            <div className="pt-8 animate-[zoomIn_1.5s_ease-out_1s_both] flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/start-journey">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-full border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 group animate-pulse hover:animate-none"
                >
                  Start Here
                  <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:animate-bounce" size={20} />
                </Button>
              </a>
              <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-purple-600 text-white hover:bg-purple-700 px-12 py-6 text-lg font-medium rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
                >
                  <Calendar className="mr-3 transition-transform duration-300 group-hover:rotate-12" size={20} />
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
