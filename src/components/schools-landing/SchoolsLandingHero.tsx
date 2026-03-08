import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/schools-hero-bg.jpg';

const DISCOVERY_URL = 'https://forms.zoho.in/wekitmentoring/form/WeKITActualLifeSkillsLabSchoolDiscoveryInput2';

const SchoolsLandingHero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20 md:pb-28 pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block border border-white/30 px-4 py-1.5 text-sm tracking-widest uppercase text-white/80 mb-6"
          >
            Grades 8–12 Framework
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat text-white leading-[1.05] tracking-tight mb-6"
          >
            The WeKIT Future
            <br />
            Readiness System
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-3 max-w-2xl"
          >
            AI-Powered Mentorship and Career Discovery for Schools.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-white/60 font-light leading-relaxed mb-10 max-w-2xl"
          >
            A plug-and-play mentorship and career development infrastructure guiding students from self-discovery to real-world pathways.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold tracking-wide transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group"
              >
                Request a School Partnership Discovery
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Button>
            </a>
            <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base font-medium transition-all duration-300 hover:translate-y-[-2px]"
              >
                Start the School Discovery Process
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-white/50" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SchoolsLandingHero;
