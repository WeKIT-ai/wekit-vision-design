import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="https://videos.pexels.com/video-files/3253534/3253534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat text-white leading-[1.05] tracking-tight"
        >
          Ready to Make
          <br />
          an <span className="text-gradient-cinematic">Impact</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
        >
          Join our growing ecosystem of mentors, institutions, and organizations
          dedicated to empowering the next generation of leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/start-journey">
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 px-10 py-7 text-base font-semibold rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl group"
            >
              Get Started Today
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Button>
          </a>
          <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-7 text-base font-medium rounded-full transition-all duration-300 hover:translate-y-[-2px] backdrop-blur-sm"
            >
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
