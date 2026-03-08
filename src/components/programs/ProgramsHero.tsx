import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Briefcase, Rocket, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      {/* Cinematic Video Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-24 md:pb-32 pt-48">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block glass rounded-full px-5 py-2 text-xs tracking-[0.3em] uppercase text-white/60 mb-8"
            >
              WeKIT Ecosystem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat text-white leading-[0.95] tracking-tight mb-8"
            >
              Mentoring the
              <br />
              <span className="text-gradient">Future of Work</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-2xl text-white/70 font-light leading-relaxed mb-4 max-w-3xl"
            >
              From discovering strengths to choosing the right college, mentors, and careers — WeKIT connects youth, families, schools, and organizations through an AI-powered mentorship ecosystem.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base md:text-lg text-white/40 font-light leading-relaxed max-w-2xl mb-10"
            >
              WeKIT connects learners, mentors, educators, and industry through a unified ecosystem that guides individuals from self-discovery to meaningful careers and entrepreneurship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#institutions">
                <Button size="xl" variant="accent" className="group">
                  Explore Programs
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Button>
              </a>
              <Link to="/enterprise">
                <Button size="xl" variant="glass" className="font-semibold">
                  Partner With WeKIT
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown className="text-white/30" size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Ecosystem Cards */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-3">
              One Platform. Five Ecosystems.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              An interconnected platform where every participant accelerates the other.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {ecosystemCards.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.anchor}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="glass rounded-2xl p-7 text-center transition-all duration-500 hover:bg-white/10 hover:border-secondary/40 group cursor-pointer"
              >
                <div className="w-14 h-14 mx-auto rounded-xl border border-secondary/30 flex items-center justify-center mb-5 group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300">
                  <c.icon className="text-secondary" size={24} />
                </div>
                <h3 className="text-sm font-semibold font-montserrat text-foreground mb-1">{c.title}</h3>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsHero;
