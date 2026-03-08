import { motion } from 'framer-motion';
import { Heart, Mountain, Users, BarChart3 } from 'lucide-react';

const cards = [
  { icon: Heart, title: 'CSR Youth Mentorship Programs', desc: 'Deliver measurable youth skilling and career readiness outcomes through structured CSR partnerships.' },
  { icon: Mountain, title: 'Corporate Leadership Expeditions', desc: 'Team leadership retreats and outdoor challenges delivered with TrueNature.' },
  { icon: Users, title: 'Future Talent Pipeline Programs', desc: 'Build early talent pipelines by connecting students with industry through mentorship and project exposure.' },
  { icon: BarChart3, title: 'Impact Analytics Dashboards', desc: 'Real-time measurement of mentorship outcomes, student engagement, and career readiness metrics.' },
];

const CorporateCSR = () => {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 section-darker">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
            Enterprise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-tight mb-4">
            Corporate Impact
            <br />Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light">
            Partner with WeKIT to create scalable mentoring ecosystems that drive measurable social impact and talent development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-strong rounded-2xl p-10 transition-all duration-500 hover:border-accent/40 group"
            >
              <div className="w-12 h-12 rounded-xl border border-accent/40 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                <card.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateCSR;
