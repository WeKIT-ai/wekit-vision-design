import { motion } from 'framer-motion';
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
    <section id="partners" className="py-28 md:py-36 px-6 md:px-12 section-darker">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-secondary font-semibold mb-6">
            Partners & Organizations
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-tight mb-4">
            Partners &
            <br />Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light">
            Collaborate with WeKIT to create scalable mentoring and career readiness ecosystems.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-16">
          {partnerTypes.map((pt, i) => (
            <motion.div
              key={pt.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 glass rounded-xl px-6 py-4 transition-all duration-300 hover:bg-white/10 hover:border-secondary/40"
            >
              <pt.icon className="text-secondary" size={20} />
              <span className="text-sm font-medium text-foreground">{pt.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 group"
            >
              <div className="w-12 h-12 rounded-xl border border-secondary/30 flex items-center justify-center mb-5 group-hover:border-secondary group-hover:bg-secondary/10 transition-colors duration-300">
                <h.icon className="text-secondary" size={22} />
              </div>
              <h3 className="text-lg font-semibold font-montserrat text-foreground mb-3">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Link to="/enterprise" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-300">
            Explore Enterprise Solutions <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersAndOrganizations;
