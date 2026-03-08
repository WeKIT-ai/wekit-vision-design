import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Shield, Compass, Users, Coins, Heart, ArrowRight } from 'lucide-react';

const programs = [
  { icon: Shield, title: 'Future-Proof Parenting', desc: 'Equip your family with tools for navigating career uncertainty and building resilience.' },
  { icon: Compass, title: 'Purpose-Driven Family Leadership', desc: 'Guide your children toward purpose-aligned career decisions with confidence.' },
  { icon: Users, title: 'Raising Leaders of Character', desc: 'Develop leadership, ethics, and emotional intelligence in your children.' },
  { icon: Coins, title: 'Financial Wisdom for Families', desc: 'Build financial literacy and entrepreneurial thinking as a family.' },
  { icon: Heart, title: 'The Mentored Family', desc: 'Access structured family mentorship connecting parents and children with experienced guides.' },
];

const ParentsFamilies = () => {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-wekit-soft">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up">
          <span className="inline-block border border-secondary/30 px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-secondary font-semibold mb-6">
            Families
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-tight mb-4">
            Empowering Families
            <br />for the Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16">
            Programs that equip parents and families to guide the next generation toward purposeful careers and meaningful lives.
          </p>
        </AnimatedSection>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={100} animation="fade-up">
          {programs.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-card border border-border p-8 transition-shadow duration-500 hover:shadow-xl group"
            >
              <div className="w-12 h-12 border border-secondary/30 flex items-center justify-center mb-5 group-hover:border-secondary group-hover:bg-secondary/5 transition-colors duration-300">
                <p.icon className="text-secondary" size={22} />
              </div>
              <h3 className="text-lg font-semibold font-montserrat text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </StaggeredChildren>

        <AnimatedSection animation="fade-up" delay={200}>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group">
            Request Parent Access Code
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ParentsFamilies;
