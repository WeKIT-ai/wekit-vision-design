
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProfessionalsCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 hover:text-purple-600 transition-colors duration-300">
          Stop Waiting for Your Career to "Just Happen"
        </h2>
        <p className="text-lg text-gray-600 mb-8 animate-[slideUp_0.8s_ease-out_0.2s_both]">
          Join professionals who took control of their career trajectory and 
          achieved the success they deserved through strategic mentorship.
        </p>
        <Button 
          size="lg" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 animate-pulse hover:animate-none"
        >
          Start Your Career Acceleration
          <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
        </Button>
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-purple-300 rounded-full animate-[float_4s_ease-in-out_infinite] opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-blue-300 rounded-full animate-[float_5s_ease-in-out_infinite_1s] opacity-40"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-red-300 rounded-full animate-[float_6s_ease-in-out_infinite_2s] opacity-25"></div>
    </section>
  );
};

export default ProfessionalsCTA;
