import { motion } from 'framer-motion';
import { ClipboardCheck, Brain, Users, GraduationCap, Cpu, Backpack, FolderOpen, Briefcase } from 'lucide-react';

const nodes = [
  { icon: ClipboardCheck, label: 'Assessment' },
  { icon: Brain, label: 'AI Career Map' },
  { icon: Users, label: 'Mentor Matching' },
  { icon: GraduationCap, label: 'College Discovery' },
  { icon: Cpu, label: 'Skills Courses' },
  { icon: Backpack, label: 'Experiential Learning' },
  { icon: FolderOpen, label: 'Real World Projects' },
  { icon: Briefcase, label: 'Jobs & Entrepreneurship' },
];

const EcosystemJourney = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 section-darker overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
            The Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight mb-4">
            From Self-Discovery to Career Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Every student's journey through the WeKIT ecosystem follows a structured, AI-guided pathway.
          </p>
        </motion.div>

        {/* Desktop horizontal journey */}
        <div className="hidden lg:block relative">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute top-14 left-[4%] right-[4%] h-px bg-gradient-to-r from-accent/40 via-white/10 to-accent/40 origin-left"
          />

          <div className="grid grid-cols-8 gap-3">
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, borderColor: 'hsl(41, 55%, 55%)' }}
                  className="w-[72px] h-[72px] rounded-2xl glass flex items-center justify-center mb-4 transition-all duration-300 hover:bg-accent/10"
                >
                  <node.icon className="text-accent" size={26} />
                </motion.div>
                <span className="text-xs font-medium text-muted-foreground leading-tight">{node.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="lg:hidden grid grid-cols-2 gap-4">
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 glass rounded-xl p-4"
            >
              <div className="w-11 h-11 rounded-lg border border-accent/30 flex items-center justify-center shrink-0">
                <node.icon className="text-accent" size={18} />
              </div>
              <span className="text-sm font-medium text-foreground/80">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemJourney;
