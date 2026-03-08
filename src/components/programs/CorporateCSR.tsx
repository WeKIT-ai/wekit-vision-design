import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Heart, Mountain, Users, BarChart3 } from 'lucide-react';

const cards = [
  { icon: Heart, title: 'CSR Youth Mentorship Programs', desc: 'Deliver measurable youth skilling and career readiness outcomes through structured CSR partnerships.' },
  { icon: Mountain, title: 'Corporate Leadership Expeditions', desc: 'Team leadership retreats and outdoor challenges delivered with TrueNature.' },
  { icon: Users, title: 'Future Talent Pipeline Programs', desc: 'Build early talent pipelines by connecting students with industry through mentorship and project exposure.' },
  { icon: BarChart3, title: 'Impact Analytics Dashboards', desc: 'Real-time measurement of mentorship outcomes, student engagement, and career readiness metrics.' },
];

const CorporateCSR = () => {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="mb-16">
          <span className="inline-block border border-white/20 px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-white/60 mb-6">
            Enterprise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat leading-tight mb-4">
            Corporate Impact
            <br />Programs
          </h2>
          <p className="text-lg text-primary-foreground/60 max-w-2xl">
            Partner with WeKIT to create scalable mentoring ecosystems that drive measurable social impact and talent development.
          </p>
        </AnimatedSection>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={100} animation="fade-up">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6, scale: 1.02 }}
              className="border border-white/10 bg-white/5 backdrop-blur-sm p-10 transition-shadow duration-500 hover:shadow-2xl hover:border-accent/40 group"
            >
              <div className="w-12 h-12 border border-accent/40 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                <card.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">{card.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default CorporateCSR;
