import { motion } from 'framer-motion';

const MissionStatement = () => {
  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden bg-background">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-[1.05] tracking-tight"
        >
          Building Bridges
          <br />
          <span className="text-gradient-cinematic">to Success</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
        >
          At WeKIT International, we believe every young person deserves access to quality mentorship and guidance.
          Our AI-powered platform connects students and young professionals with mentors, educational
          institutions, and opportunities that align with their goals and aspirations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg text-muted-foreground/60 italic font-light"
        >
          "Wot Kareer Is iT?" — Your journey to career clarity starts here
        </motion.p>
      </div>
    </section>
  );
};

export default MissionStatement;
