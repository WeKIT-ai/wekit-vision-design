import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Lightbulb, Users, TrendingUp, GraduationCap } from 'lucide-react';

const programs = [
  { icon: Lightbulb, title: 'Founder Discovery Lab', desc: 'Structured exploration program helping aspiring founders identify problems worth solving and validate ideas.' },
  { icon: Users, title: 'Startup Mentorship Network', desc: 'Connect with experienced founders, investors, and operators who guide you through early-stage challenges.' },
  { icon: TrendingUp, title: 'Angel Readiness Program', desc: 'Prepare for investment with pitch training, financial modeling, and investor relationship building.' },
  { icon: GraduationCap, title: 'Student Entrepreneurship Labs', desc: 'Campus-based innovation labs that help students build real ventures while still in school.' },
];

const Entrepreneurship = () => {
  return (
    <section id="entrepreneurship" className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up">
          <span className="inline-block border border-white/20 px-4 py-1.5 text-xs tracking-widest uppercase text-white/70 font-semibold mb-6">
            Section 4
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat leading-tight mb-4">
            Entrepreneurship
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/70 max-w-3xl leading-relaxed mb-14">
            Programs supporting aspiring founders and purpose-driven innovators in building ventures that matter.
          </p>
        </AnimatedSection>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={100} animation="fade-up">
          {programs.map((p) => (
            <div key={p.title} className="border border-white/10 p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:bg-white/5 group">
              <div className="w-11 h-11 border border-accent/40 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                <p.icon className="text-accent" size={20} />
              </div>
              <h3 className="text-lg font-semibold font-montserrat mb-3">{p.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default Entrepreneurship;
