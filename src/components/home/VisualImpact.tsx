import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Collaborative Learning',
    desc: 'Building tomorrow\'s leaders',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/courses',
  },
  {
    title: 'AI-Powered Matching',
    desc: 'Smart mentor connections',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: null,
  },
  {
    title: 'Future-Ready Skills',
    desc: 'Technology meets purpose',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: null,
  },
];

const VisualImpact = () => {
  return (
    <section className="py-28 px-6 md:px-8 overflow-hidden section-darker">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground mb-4">
            Transforming Lives Through Technology
          </h2>
          <p className="text-xl text-muted-foreground font-light">Where innovation meets human potential</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const content = (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer h-80"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-semibold font-montserrat text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-white/70">{card.desc}</p>
                </div>
              </motion.div>
            );
            return card.link ? <Link key={card.title} to={card.link}>{content}</Link> : <div key={card.title}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default VisualImpact;
