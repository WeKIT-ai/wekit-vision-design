import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Building2, Users, Heart, Handshake, 
  Globe, Monitor, Landmark, ArrowRight, Sparkles 
} from 'lucide-react';

const valueProps = [
  'Career Clarity Not Confusion',
  'Career Pathways Mapped to Future Skills',
  'AI-Matched Mentors from Industry',
  'Ongoing Guidance & Skill Mapping',
];

const ecosystemSegments = [
  { icon: GraduationCap, label: 'Schools & Colleges', link: '/schools' },
  { icon: Building2, label: 'Corporates', link: '/programs#partners' },
  { icon: Users, label: 'Mentors', link: '/mentorship' },
  { icon: Heart, label: 'Parents & Guardians', link: '/parents' },
  { icon: Handshake, label: 'CSR Teams', link: '/programs#csr' },
  { icon: Globe, label: 'NGOs', link: '/ngos' },
  { icon: Monitor, label: 'EdTech Platforms', link: '/programs#partners' },
  { icon: Landmark, label: 'Governments', link: '/programs#partners' },
];

const EcosystemOverview = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-foreground overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top: Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm tracking-widest uppercase text-primary mb-8">
            <Sparkles size={14} />
            Industry Ready Career Clarity System
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-primary-foreground leading-tight mb-10">
            An AI-Native Career
            <br />
            <span className="text-wekit-teal">Development Ecosystem</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {valueProps.map((prop, i) => (
              <motion.div
                key={prop}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 text-left"
              >
                <div className="w-2 h-2 bg-wekit-teal rounded-full shrink-0" />
                <span className="text-primary-foreground/80 text-sm md:text-base font-medium">{prop}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom: Ecosystem Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-center text-primary-foreground/50 text-sm uppercase tracking-widest mb-8">
            WeKIT Networked & AI Connected
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {ecosystemSegments.map((seg, i) => (
              <motion.div
                key={seg.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <Link
                  to={seg.link}
                  className="group flex items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 hover:border-wekit-teal/40 hover:bg-wekit-teal/5 px-4 py-4 md:px-5 md:py-5 transition-all duration-300"
                >
                  <seg.icon className="text-wekit-teal shrink-0" size={20} />
                  <span className="text-primary-foreground/80 text-sm font-medium group-hover:text-primary-foreground transition-colors">
                    {seg.label}
                  </span>
                  <ArrowRight className="ml-auto text-wekit-teal opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemOverview;
