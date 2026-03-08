import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const YomaSection = () => {
  return (
    <section className="relative py-28 px-6 md:px-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block glass rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-white/60">
              AI Assistant
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-[1.05] tracking-tight">
              Meet YOMA
              <br />
              <span className="text-secondary">Your AI Mentor</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Experience the future of career guidance with our AI-powered matching system that connects you with the perfect mentors and opportunities.
            </p>
            <Button variant="accent" size="lg" className="group">
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
            <div className="relative overflow-hidden rounded-3xl group">
              <img 
                src="/lovable-uploads/3176369b-2415-4829-9170-5a436bde6704.png" 
                alt="YOMA AI-Powered Career Matching Assistant"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YomaSection;
