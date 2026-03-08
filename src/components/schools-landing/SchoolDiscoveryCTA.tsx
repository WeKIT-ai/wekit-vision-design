import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import ctaBg from '@/assets/schools-cta-bg.jpg';

const DISCOVERY_URL = 'https://forms.zoho.in/wekitmentoring/form/WeKITActualLifeSkillsLabSchoolDiscoveryInput2';

const steps = [
  { num: '01', title: 'Submit the School Discovery Form', desc: 'Share your institution\'s details and goals.' },
  { num: '02', title: 'Receive a Customized Program Overview', desc: 'We tailor the WeKIT system to your needs.' },
  { num: '03', title: 'Schedule a Partnership Discussion', desc: 'Explore implementation with our team.' },
];

const SchoolDiscoveryCTA = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white leading-tight mb-6">
            Bring AI-Powered Mentorship and
            <br />
            Career Discovery to Your Students
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-14">
            Schools interested in implementing the WeKIT Future Readiness System can begin with a short School Discovery Form. This helps our team understand your institution's needs before scheduling a partnership discussion.
          </p>
        </AnimatedSection>

        {/* 3 Steps */}
        <StaggeredChildren 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
          staggerDelay={120}
          animation="fade-up"
        >
          {steps.map((s) => (
            <div key={s.num} className="border border-white/15 p-8 text-left backdrop-blur-sm bg-white/5">
              <span className="text-3xl font-bold text-accent font-montserrat">{s.num}</span>
              <h4 className="text-base font-semibold text-white mt-3 mb-2">{s.title}</h4>
              <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </StaggeredChildren>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold tracking-wide transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group"
              >
                Request a School Partnership Discovery
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Button>
            </a>
            <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base font-medium transition-all duration-300 hover:translate-y-[-2px]"
              >
                Start the School Discovery Process
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SchoolDiscoveryCTA;
