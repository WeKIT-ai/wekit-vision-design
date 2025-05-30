
import { Heart } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-8 animate-fade-in">
          <Heart className="w-4 h-4 mr-2 text-red-500" />
          Empowering Youth Through AI-Driven Mentorship
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WeKIT</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're on a mission to bridge the gap between potential and opportunity, 
          connecting young minds with the guidance they need to thrive in an AI-powered world.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
