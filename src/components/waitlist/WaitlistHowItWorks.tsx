import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: '01', emoji: '👤', title: 'Take the Assessment', desc: 'Complete our 72-question psychometric test in 20-30 minutes. Answer honestly to get accurate results.' },
  { num: '02', emoji: '🧠', title: 'Get Your Career DNA', desc: 'Receive your personalized Career DNA profile from 8 distinct personality types with detailed analysis.' },
  { num: '03', emoji: '🚀', title: 'Explore & Apply', desc: 'Browse personalized career recommendations, salary insights, and apply for matched scholarships.' },
];

const WaitlistHowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="font-montserrat text-sm font-bold uppercase tracking-widest text-wekit-blue mb-4 block">HOW IT WORKS</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-montserrat font-bold text-3xl md:text-[42px] text-wekit-black mb-14 leading-tight">3 Simple Steps to Your Dream Career</motion.h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Dashed line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] border-t-2 border-dashed border-wekit-blue/20" />

          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.15 }} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-wekit-blue to-wekit-zaffre text-white font-montserrat font-bold text-lg flex items-center justify-center mx-auto mb-6 relative z-10">{s.num}</div>
              <span className="text-4xl block mb-4">{s.emoji}</span>
              <h3 className="font-montserrat font-semibold text-xl text-wekit-black mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistHowItWorks;
