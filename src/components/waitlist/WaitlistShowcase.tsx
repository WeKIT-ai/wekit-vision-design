import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const slides = [
  { title: 'Assessment Interface', desc: 'Intuitive question-by-question format' },
  { title: 'Career DNA Results', desc: 'Your unique personality profile' },
  { title: 'Career Recommendations', desc: 'Personalized career matches' },
  { title: 'Career Detail Page', desc: 'Deep-dive into each career path' },
];

const highlights = [
  { emoji: '💻', items: ['Intuitive interface', 'Mobile responsive', 'Progress tracking'] },
  { emoji: '📊', items: ['Real-time results', 'Detailed analytics', 'Comparison tools'] },
  { emoji: '🤝', items: ['24/7 access', 'Expert guidance', 'Community forums'] },
];

const WaitlistShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-wekit-black via-wekit-black to-wekit-zaffre text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="font-montserrat font-bold text-3xl md:text-[42px] mb-4 leading-tight">See We-KIT in Action</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-gray-300 text-lg mb-12">A glimpse into India's most advanced career discovery platform</motion.p>

        {/* Browser mockup */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="max-w-3xl mx-auto mb-8">
          <div className="bg-gray-800 rounded-t-xl p-3 flex items-center gap-2">
            <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
            <div className="flex-1 bg-gray-700 rounded-md h-6 mx-8" />
          </div>
          <div className="bg-gradient-to-br from-wekit-blue/20 to-wekit-zaffre/20 rounded-b-xl p-12 min-h-[280px] flex flex-col items-center justify-center">
            <span className="text-5xl mb-4">{['📝', '🧬', '🎯', '📋'][activeSlide]}</span>
            <h3 className="font-montserrat font-bold text-2xl mb-2">{slides[activeSlide].title}</h3>
            <p className="text-gray-300">{slides[activeSlide].desc}</p>
          </div>
        </motion.div>

        <div className="flex justify-center gap-2 mb-14">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)} className={`w-3 h-3 rounded-full transition-all ${i === activeSlide ? 'bg-wekit-orange w-8' : 'bg-white/30'}`} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}>
              <span className="text-3xl block mb-4">{h.emoji}</span>
              <ul className="space-y-2 text-sm text-gray-300">
                {h.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistShowcase;
