import teamImage from '@/assets/team-section.png';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';

const TeamSection = () => {
  return (
    <section className="py-20 px-6 md:px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        <AnimatedSection animation="zoom-in" duration={800}>
          <img 
            src={teamImage} 
            alt="Meet the WeKIT Team - Leadership, Partners, and Advisors" 
            className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
          />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={200} className="text-center">
          <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-lg font-medium rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              <Calendar className="mr-3 transition-transform duration-300 group-hover:rotate-12" size={20} />
              Book a Session with Our Founder
            </Button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TeamSection;
