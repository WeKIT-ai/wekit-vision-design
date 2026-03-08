import { motion } from 'framer-motion';
import { GraduationCap, Users, Briefcase, Rocket, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ecosystemCards = [
  {
    icon: GraduationCap,
    title: 'Educational Institutions',
    desc: 'Schools, colleges, and learning institutions',
    link: '/programs#institutions',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Users,
    title: 'Youth & Families',
    desc: 'Students and young professionals',
    link: '/programs#youth',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Briefcase,
    title: 'Mentors & Professionals',
    desc: 'Industry mentors and career guides',
    link: '/programs#mentors',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship',
    desc: 'Founders and purpose-driven innovators',
    link: '/programs#entrepreneurship',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Building2,
    title: 'Partners & Organizations',
    desc: 'Corporates, NGOs, and government',
    link: '/programs#partners',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const AudienceSection = () => {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-cinematic">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4 leading-tight tracking-tight">
            One Platform. Five Ecosystems.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            An interconnected platform where every participant accelerates the other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ecosystemCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group"
            >
              <Link
                to={c.link}
                className="block relative rounded-2xl overflow-hidden aspect-[3/4] h-full"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="glass w-10 h-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/15 transition-all duration-300">
                    <c.icon className="text-white/80" size={18} />
                  </div>
                  <h3 className="text-sm font-bold font-montserrat text-white mb-1">{c.title}</h3>
                  <p className="text-xs text-white/50 mb-3 leading-relaxed">{c.desc}</p>
                  <ArrowRight className="text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
