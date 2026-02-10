import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { emoji: '😞', number: '70%', label: 'Students unhappy with career choice' },
  { emoji: '🔄', number: '45%', label: 'Switch careers within 5 years' },
  { emoji: '💸', number: '₹50L+', label: 'Average financial loss from wrong career' },
];

const WaitlistProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          className="font-montserrat text-sm font-bold uppercase tracking-widest text-wekit-orange mb-4 block"
        >
          THE CHALLENGE
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
          className="font-montserrat font-bold text-3xl md:text-[42px] text-wekit-black mb-6 leading-tight"
        >
          70% of Indian Students Choose the Wrong Career
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Without proper guidance, students make career decisions based on peer pressure, parental expectations, or limited information. This leads to dissatisfaction, career changes, and wasted potential.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-4xl block mb-4">{s.emoji}</span>
              <p className="font-montserrat font-bold text-4xl mb-2 bg-gradient-to-r from-wekit-blue to-wekit-green bg-clip-text text-transparent">{s.number}</p>
              <p className="text-gray-500 font-roboto">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistProblem;
