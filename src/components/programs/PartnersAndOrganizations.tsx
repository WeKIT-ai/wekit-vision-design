import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Building2, Heart, Monitor, Landmark, Briefcase, Users, Plug, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnerTypes = [
  { icon: Building2, label: 'Corporates' },
  { icon: Heart, label: 'NGOs & Foundations' },
  { icon: Monitor, label: 'EdTech Platforms' },
  { icon: Landmark, label: 'Government & Policy' },
];

const highlights = [
  { icon: Briefcase, title: 'CSR Impact Programs', desc: 'Deliver measurable youth skilling and career readiness outcomes through structured CSR partnerships.' },
  { icon: Users, title: 'Talent Pipeline Initiatives', desc: 'Build early talent pipelines by connecting students with industry through mentorship and project exposure.' },
  { icon: Plug, title: 'Mentorship Infrastructure Integration', desc: 'White-label or integrate WeKIT\'s mentoring and career discovery tools into your existing ecosystem.' },
];

const PartnersAndOrganizations = () => {
  return (
    <section id="partners" className="py-28 md:py-36 px-6 md:px-12 bg-wekit-soft">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="mb-16">
          <span className="inline-block border border-secondary/30 px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-secondary font-semibold mb-6">
            Partners & Organizations
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-tight mb-4">
            Partners &
            <br />Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Collaborate with WeKIT to create scalable mentoring and career readiness ecosystems.
          </p>
        </AnimatedSection>

        {/* Partner types */}
        <StaggeredChildren className="flex flex-wrap gap-4 mb-16" staggerDelay={80} animation="fade-up">
          {partnerTypes.map((pt) => (
            <motion.div
              key={pt.label}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 bg-card border border-border px-6 py-4 transition-shadow duration-300 hover:shadow-md hover:border-secondary/40"
            >
              <pt.icon className="text-secondary" size={20} />
              <span className="text-sm font-medium text-foreground">{pt.label}</span>
            </motion.div>
          ))}
        </StaggeredChildren>

        {/* Highlights */}
        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={100} animation="fade-up">
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-card border border-border p-8 transition-shadow duration-500 hover:shadow-xl group"
            >
              <div className="w-12 h-12 border border-secondary/30 flex items-center justify-center mb-5 group-hover:border-secondary group-hover:bg-secondary/5 transition-colors duration-300">
                <h.icon className="text-secondary" size={22} />
              </div>
              <h3 className="text-lg font-semibold font-montserrat text-foreground mb-3">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </StaggeredChildren>

        <AnimatedSection animation="fade-up" delay={300} className="mt-12">
          <Link to="/enterprise" className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all duration-300">
            Explore Enterprise Solutions <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PartnersAndOrganizations;
