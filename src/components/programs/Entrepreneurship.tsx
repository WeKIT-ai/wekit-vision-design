import { motion } from 'framer-motion';
import { Lightbulb, Users, TrendingUp, GraduationCap } from 'lucide-react';

const programs = [
  { icon: Lightbulb, title: 'Founder Discovery Lab', desc: 'Structured exploration program helping aspiring founders identify problems worth solving and validate ideas.' },
  { icon: Users, title: 'Startup Mentorship Network', desc: 'Connect with experienced founders, investors, and operators who guide you through early-stage challenges.' },
  { icon: TrendingUp, title: 'Angel Readiness Program', desc: 'Prepare for investment with pitch training, financial modeling, and investor relationship building.' },
  { icon: GraduationCap, title: 'Student Entrepreneurship Labs', desc: 'Campus-based innovation labs that help students build real ventures while still in school.' },
];

const Entrepreneurship = () => {
  return (
    <section id="entrepreneurship" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="https://videos.pexels.com/video-files/3253766/3253766-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
            Entrepreneurship
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-tight mb-4">
            Entrepreneurship
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light">
            Programs supporting aspiring founders and purpose-driven innovators in building ventures that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-strong rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-accent/50 group"
            >
              <div className="w-12 h-12 rounded-xl border border-accent/40 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                <p.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Entrepreneurship;
