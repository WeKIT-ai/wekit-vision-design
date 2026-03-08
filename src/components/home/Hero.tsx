import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      {/* Cinematic Video Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/lovable-uploads/c6564568-f266-425d-8f95-03d5389bdff0.png"
        >
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 video-overlay" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-24 md:pb-32 pt-48">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block glass px-5 py-2 text-xs tracking-[0.3em] uppercase text-white/70 mb-8 rounded-full"
            >
              AI-Powered Mentorship Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat text-white leading-[0.95] tracking-tight mb-6"
            >
              Mentoring the
              <br />
              Future.
              <br />
              <span className="text-gradient-cinematic">Powered by AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-2xl text-white/60 font-light leading-relaxed mb-10 max-w-2xl"
            >
              We bridge the gap between potential and opportunity through
              AI-driven mentorship, connecting youth with the guidance they need
              to thrive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="/mentor-waitlist">
                <Button
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90 px-10 py-7 text-base font-semibold rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl group"
                >
                  Join Our Mentor Community
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
                  Book a Consultation
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown className="text-white/40" size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-cinematic border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: '10,000+', label: 'Youth Mentored' },
              { value: '500+', label: 'Expert Mentors' },
              { value: '95%', label: 'Success Rate' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-cinematic mb-2">
                  {stat.value}
                </div>
                <p className="text-white/50 font-medium tracking-wide text-sm uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
