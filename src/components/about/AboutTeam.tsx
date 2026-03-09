
import { Users } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';

const AboutTeam = () => {
  return (
    <section id="team" className="py-20 px-6 md:px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 bg-muted/20 text-sm font-medium text-white/80 mb-4">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </div>
          <h2 className="text-4xl font-bold font-montserrat text-white mb-4">
            Meet the People Behind <span className="text-wekit-teal">WeKIT</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our diverse team brings together expertise in education, technology, 
            and youth development to create meaningful impact.
          </p>
        </div>

        <AnimatedSection animation="zoom-in" duration={800}>
          <img 
            src="/lovable-uploads/meet-the-team.png" 
            alt="Meet the WeKIT Team - Core Leadership and Partners" 
            className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
          />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200} duration={800}>
          <img 
            src="/lovable-uploads/team-advisors-partners.png" 
            alt="WeKIT Board Advisors, Strategic Partners and Strategic Advisors" 
            className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutTeam;
