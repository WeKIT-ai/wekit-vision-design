import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cards = [
  {
    title: 'Collaborative Learning',
    subtitle: 'Building tomorrow\'s leaders through shared experiences',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/courses',
  },
  {
    title: 'AI-Powered Matching',
    subtitle: 'Smart mentor connections driven by purpose',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/mentorship',
  },
  {
    title: 'Future-Ready Skills',
    subtitle: 'Technology meets human potential',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/programs',
  },
];

const VisualImpact = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground mb-4 tracking-tight">
            Transforming Lives Through Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where innovation meets human potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={card.link} className="group block relative rounded-2xl overflow-hidden aspect-[4/5] card-cinematic">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-montserrat text-white mb-1">{card.title}</h3>
                      <p className="text-sm text-white/60">{card.subtitle}</p>
                    </div>
                    <div className="glass w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                      <ArrowUpRight className="text-white" size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualImpact;
