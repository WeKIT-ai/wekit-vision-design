import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      {/* Cinematic Video Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/c6564568-f266-425d-8f95-03d5389bdff0.png"
            alt="Your future is waiting"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />
        </div>

        <div className="absolute inset-0 z-20 flex items-end justify-start p-8 md:p-16 lg:p-24 pb-32">
          <div className="text-left max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block glass rounded-full px-5 py-2 text-xs tracking-[0.3em] uppercase text-white/60 mb-8"
            >
              AI-Powered Mentorship Platform
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold font-montserrat text-white leading-[0.95] tracking-tight mb-6"
            >
              Mentoring the Future
              <br />
              <span className="text-gradient">Powered by AI</span>
              <br />
              <span className="text-white/80">Driven by Purpose</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-white/60 mb-3 font-light"
            >
              WeKIT = Wot Kareer Is iT?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <a href="/mentor-waitlist">
                <Button size="xl" variant="accent" className="group">
                  Join Our Mentor Community
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Button>
              </a>
              <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
                <Button size="xl" variant="glass" className="group">
                  <Calendar className="mr-2" size={18} />
                  Book a Consultation
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6 md:px-8 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground leading-[1.05] tracking-tight">
              Mentoring the Future.
              <br />
              <span className="text-secondary">Powered by AI.</span>
              <br />
              <span className="text-muted-foreground">Driven by Purpose.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              We bridge the gap between potential and opportunity through AI-driven mentorship, 
              connecting youth with the guidance they need to thrive in tomorrow's world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
              {[
                { value: '10,000+', label: 'Youth Mentored' },
                { value: '500+', label: 'Expert Mentors' },
                { value: '95%', label: 'Success Rate' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center space-y-2 glass rounded-2xl p-8"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/start-journey">
                <Button size="xl" variant="default" className="group">
                  Start Here
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Button>
              </a>
              <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
                <Button size="xl" variant="outline" className="group">
                  <Calendar className="mr-2" size={18} />
                  Book a Consultation
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
