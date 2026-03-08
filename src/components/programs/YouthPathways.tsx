import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, GraduationCap, Users, Cpu, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  { icon: Brain, title: 'AI Career Discovery', desc: 'AI-powered psychometric profiling that maps student strengths, values, and interests to career pathways.' },
  { icon: GraduationCap, title: 'College Discovery Community', desc: 'Students explore peer-reviewed college insights and connect with alumni for real-world guidance.', link: 'https://wekit-college-dicovery.lovable.app', linkLabel: 'Explore College Discovery' },
  { icon: Users, title: 'Mentor Network', desc: 'One-on-one and group mentorship with verified industry professionals and alumni.' },
  { icon: Cpu, title: 'Future Skills Courses', desc: 'Curated learning journeys in AI literacy, digital productivity, sustainability, and emerging technologies.' },
];

const YouthPathways = () => {
  return (
    <section id="youth" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="https://videos.pexels.com/video-files/3195440/3195440-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
            Youth & Families
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-white leading-tight mb-4">
            Discover Your
            <br />Future Pathway
          </h2>
          <p className="text-lg text-white/50 max-w-2xl font-light">
            Explore careers, colleges, and mentors through AI-guided discovery designed for students and young professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-strong rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-accent/40 group"
            >
              <div className="w-12 h-12 rounded-xl border border-accent/40 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                <p.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">{p.desc}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all duration-300">
                  {p.linkLabel} <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/students" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-300">
            Explore All Student Programs <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default YouthPathways;
