import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalHeroCTA = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="https://videos.pexels.com/video-files/3252128/3252128-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-black/70 to-background/90" />

      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat text-white leading-[1.05] tracking-tight mb-8"
        >
          Join the Future-Ready
          <br />
          <span className="text-gradient">WeKIT Ecosystem</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light"
        >
          Whether you're a student, parent, school, mentor, or organization — there's a place for you in the WeKIT ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/enterprise">
            <Button size="xl" variant="accent" className="group">
              Partner With WeKIT
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Button>
          </Link>
          <a href="#institutions">
            <Button size="xl" variant="glass" className="font-medium">
              Explore Programs
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalHeroCTA;
