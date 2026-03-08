import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Compass, Lightbulb, Cpu, Users, Route, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  { icon: Compass, title: 'Career Discovery Assessment', desc: 'AI-powered psychometric profiling that maps student strengths, values, and interests to career pathways.' },
  { icon: Lightbulb, title: 'Purpose Architecture Lab', desc: 'A structured mentorship program helping youth discover purpose, design career paths, and build real-world skills.' },
  { icon: Cpu, title: 'Future Skills Learning Paths', desc: 'Curated learning journeys in AI literacy, digital productivity, sustainability, and emerging technologies.' },
  { icon: Users, title: 'Mentorship Access', desc: 'One-on-one and group mentorship with verified industry professionals and alumni.' },
  { icon: Route, title: 'Career Navigation for Young Professionals', desc: 'Purpose-led career design, personal branding, and strategic career planning for early-career professionals.' },
];

const YouthAndFamilies = () => {
  return (
    <section id="youth" className="py-24 md:py-32 px-6 md:px-12 bg-wekit-soft">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up">
          <span className="inline-block border border-secondary/30 px-4 py-1.5 text-xs tracking-widest uppercase text-secondary font-semibold mb-6">
            Section 2
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight mb-4">
            Youth & Families
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-14">
            Programs supporting students and young professionals in discovering purpose, building skills, and navigating career pathways.
          </p>
        </AnimatedSection>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={90} animation="fade-up">
          {programs.map((p) => (
            <div key={p.title} className="bg-card border border-border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg group">
              <div className="w-11 h-11 border border-secondary/30 flex items-center justify-center mb-5 group-hover:border-secondary group-hover:bg-secondary/5 transition-colors duration-300">
                <p.icon className="text-secondary" size={20} />
              </div>
              <h3 className="text-lg font-semibold font-montserrat text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </StaggeredChildren>

        <AnimatedSection animation="fade-up" delay={300} className="mt-10">
          <Link to="/students" className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all duration-300">
            Explore Student Programs <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default YouthAndFamilies;
