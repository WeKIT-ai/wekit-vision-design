import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-36 px-6 md:px-8 overflow-hidden">
      {/* Cinematic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-[1.05] tracking-tight"
        >
          Ready to Make
          <br />
          <span className="text-gradient">an Impact?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed font-light"
        >
          Join our growing ecosystem of mentors, institutions, and organizations 
          dedicated to empowering the next generation of leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-4 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/start-journey">
            <Button size="xl" variant="accent" className="group">
              Get Started Today
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Button>
          </a>
          <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
            <Button size="xl" variant="outline" className="group">
              <Calendar className="mr-2" size={18} />
              Schedule a Call
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
