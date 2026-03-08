import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Target, Flame, ShieldCheck, Star } from 'lucide-react';

const impacts = [
  { icon: Target, title: 'Stronger Career Clarity', desc: 'Students develop a concrete understanding of career pathways aligned with their strengths and values.' },
  { icon: Flame, title: 'Higher Student Engagement', desc: 'Improved engagement as students connect academics to real-world career outcomes.' },
  { icon: ShieldCheck, title: 'Improved Parent Trust', desc: 'Transparent dashboards show parents measurable career development progress.' },
  { icon: Star, title: 'Enhanced University & Career Readiness', desc: 'Students graduate with verified portfolios, mentorship experience, and career clarity.' },
  { icon: Target, title: 'School Differentiation', desc: 'Position your institution as a future-ready, innovative leader in career education.' },
];

const InstitutionalImpact = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat leading-tight">
            Institutional Impact
          </h2>
        </AnimatedSection>

        <StaggeredChildren
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          staggerDelay={120}
          animation="fade-up"
        >
          {impacts.map((item) => (
            <div 
              key={item.title}
              className="border border-white/10 p-8 md:p-10 transition-all duration-500 hover:border-accent/50 hover:bg-white/5 group"
            >
              <div className="w-12 h-12 border border-accent/40 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                <item.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">{item.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default InstitutionalImpact;
