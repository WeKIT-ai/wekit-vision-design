import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Bot, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Sparkles, label: 'AI-Powered Matching' },
  { icon: Bot, label: 'Personalized Guidance' },
  { icon: Target, label: 'Career Clarity' },
];

const YomaSection = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 bg-cinematic overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block glass px-4 py-2 rounded-full">
              <span className="text-xs tracking-[0.2em] uppercase text-white/60">AI Mentor Assistant</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-white leading-[1.05] tracking-tight">
              Meet YOMA
              <br />
              <span className="text-gradient-cinematic">Your AI Guide</span>
            </h2>

            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
              Experience the future of career guidance with our AI-powered matching system that connects you with the perfect mentors and opportunities.
            </p>

            <div className="flex flex-wrap gap-3">
              {features.map((f) => (
                <div key={f.label} className="glass px-4 py-2.5 rounded-full flex items-center gap-2">
                  <f.icon className="text-white/60" size={16} />
                  <span className="text-sm text-white/70 font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            <Button className="bg-white text-foreground hover:bg-white/90 px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl group">
              Discover YOMA
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src="/lovable-uploads/3176369b-2415-4829-9170-5a436bde6704.png"
                alt="YOMA AI-Powered Career Matching Assistant"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YomaSection;
