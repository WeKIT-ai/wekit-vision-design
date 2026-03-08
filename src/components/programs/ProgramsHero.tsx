import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/schools-hero-bg.jpg';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { GraduationCap, Users, Briefcase, Rocket, Building2 } from 'lucide-react';

const ecosystemCards = [
  { icon: GraduationCap, title: 'Educational Institutions', desc: 'Schools, colleges, and learning institutions', anchor: '#institutions' },
  { icon: Users, title: 'Youth & Families', desc: 'Students and young professionals', anchor: '#youth' },
  { icon: Briefcase, title: 'Mentors & Professionals', desc: 'Industry mentors and career guides', anchor: '#mentors' },
  { icon: Rocket, title: 'Entrepreneurship', desc: 'Founders and purpose-driven innovators', anchor: '#entrepreneurship' },
  { icon: Building2, title: 'Partners & Organizations', desc: 'Corporates, NGOs, and government', anchor: '#partners' },
];

const ProgramsHero = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20 md:pb-28 pt-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block border border-white/30 px-4 py-1.5 text-sm tracking-widest uppercase text-white/80 mb-6"
            >
              WeKIT Ecosystem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat text-white leading-[1.05] tracking-tight mb-6"
            >
              Programs & Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-3 max-w-3xl"
            >
              AI-powered mentorship, career discovery, and real-world pathways for students, professionals, and institutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl"
            >
              WeKIT connects learners, mentors, educators, and industry through a unified ecosystem that guides individuals from self-discovery to meaningful careers and entrepreneurship.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown className="text-white/50" size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* Ecosystem Cards */}
      <section className="py-20 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-foreground">
              One Platform. Five Ecosystems.
            </h2>
          </AnimatedSection>
          <StaggeredChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5" staggerDelay={80} animation="fade-up">
            {ecosystemCards.map((c) => (
              <a
                key={c.title}
                href={c.anchor}
                className="bg-card border border-border p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-secondary/40 group"
              >
                <div className="w-12 h-12 mx-auto border border-secondary/30 flex items-center justify-center mb-4 group-hover:border-secondary group-hover:bg-secondary/5 transition-colors duration-300">
                  <c.icon className="text-secondary" size={22} />
                </div>
                <h3 className="text-sm font-semibold font-montserrat text-foreground mb-1">{c.title}</h3>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </a>
            ))}
          </StaggeredChildren>
        </div>
      </section>
    </>
  );
};

export default ProgramsHero;
