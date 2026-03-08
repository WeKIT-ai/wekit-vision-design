import { motion } from 'framer-motion';
import { GraduationCap, Users, Briefcase, Rocket, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ecosystemCards = [
  { icon: GraduationCap, title: 'Educational Institutions', desc: 'Schools, colleges, and learning institutions', link: '/programs#institutions' },
  { icon: Users, title: 'Youth & Families', desc: 'Students and young professionals', link: '/programs#youth' },
  { icon: Briefcase, title: 'Mentors & Professionals', desc: 'Industry mentors and career guides', link: '/programs#mentors' },
  { icon: Rocket, title: 'Entrepreneurship', desc: 'Founders and purpose-driven innovators', link: '/programs#entrepreneurship' },
  { icon: Building2, title: 'Partners & Organizations', desc: 'Corporates, NGOs, and government', link: '/programs#partners' },
];

const AudienceSection = () => {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-4 leading-tight">
            One Platform. Five Ecosystems.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An interconnected platform where every participant accelerates the other.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
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
                className="block bg-card border border-border p-7 text-center transition-shadow duration-500 hover:shadow-xl hover:border-secondary/40 h-full"
              >
                <div className="w-14 h-14 mx-auto border border-secondary/30 flex items-center justify-center mb-5 group-hover:border-secondary group-hover:bg-secondary/5 transition-all duration-300">
                  <c.icon className="text-secondary" size={24} />
                </div>
                <h3 className="text-sm font-semibold font-montserrat text-foreground mb-1">{c.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{c.desc}</p>
                <ArrowRight className="mx-auto text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
