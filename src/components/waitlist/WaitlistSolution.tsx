import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  { emoji: '📝', title: 'Comprehensive Testing', desc: 'Age-specific psychometric questions designed by career counseling experts' },
  { emoji: '🎯', title: '1,288+ Career Paths', desc: 'From musicians to engineers, explore every career path including emerging professions' },
  { emoji: '🤖', title: 'AI Matching', desc: 'Advanced algorithms match your personality with careers that suit you best' },
  { emoji: '🎓', title: 'Scholarship Connect', desc: 'Get matched with relevant scholarships and financial aid opportunities' },
];

const WaitlistSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="font-montserrat text-sm font-bold uppercase tracking-widest text-wekit-blue mb-4 block">OUR SOLUTION</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-montserrat font-bold text-3xl md:text-[42px] text-wekit-black mb-4 leading-tight">Science-Backed Career Discovery</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-gray-600 text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          We-KIT combines advanced psychometric testing, AI-powered matching, and India's most comprehensive career database to help you find your perfect career fit.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg hover:border-wekit-blue/30 hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl block mb-4">{c.emoji}</span>
              <h3 className="font-montserrat font-semibold text-xl text-wekit-black mb-2">{c.title}</h3>
              <p className="text-gray-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSolution;
