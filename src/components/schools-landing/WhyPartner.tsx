import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Plug, Brain, Users, BookOpen, Eye, BarChart3 } from 'lucide-react';

const reasons = [
  { icon: Plug, title: 'Plug-and-Play Mentorship Infrastructure', desc: 'Seamlessly integrate structured mentorship without disrupting your existing timetable or operations.' },
  { icon: Brain, title: 'AI-Powered Career Discovery Dashboards', desc: 'Give every student a personalized career map powered by psychometrics, strengths, and AI matching.' },
  { icon: Users, title: 'Industry Mentorship Networks', desc: 'Connect students with verified professionals and alumni who guide them through real career decisions.' },
  { icon: BookOpen, title: 'Experiential Learning Aligned with NEP', desc: 'Deliver bagless day and experiential learning modules mapped to CBSE, ICSE, and Cambridge outcomes.' },
  { icon: Eye, title: 'Parent Transparency Dashboards', desc: 'Build parent confidence with real-time visibility into their child\'s career development progress.' },
  { icon: BarChart3, title: 'Measurable Student Development Outcomes', desc: 'Track and report on career readiness, engagement, and skill growth with data-driven insights.' },
];

const WhyPartner = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-wekit-soft">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight">
            Why Schools Partner With WeKIT
          </h2>
        </AnimatedSection>

        <StaggeredChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={100}
          animation="fade-up"
        >
          {reasons.map((r) => (
            <div 
              key={r.title} 
              className="bg-card border border-border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg group"
            >
              <div className="w-12 h-12 border border-secondary/30 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:border-secondary group-hover:bg-secondary/5">
                <r.icon className="text-secondary" size={22} />
              </div>
              <h3 className="text-lg font-semibold font-montserrat text-foreground mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default WhyPartner;
