import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const metrics = [
  { emoji: '🎯', end: 1288, suffix: '+', label: 'Career Paths' },
  { emoji: '📝', end: 72, suffix: '', label: 'Assessment Questions' },
  { emoji: '👥', end: 21, suffix: '', label: 'Career Families' },
  { emoji: '❤️', end: 39, suffix: '', label: 'Interest Categories' },
];

const CountUp = ({ end, suffix, isInView }: { end: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const WaitlistStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
            <span className="text-3xl block mb-3">{m.emoji}</span>
            <p className="font-montserrat font-bold text-4xl md:text-5xl bg-gradient-to-r from-wekit-blue to-wekit-green bg-clip-text text-transparent mb-2">
              <CountUp end={m.end} suffix={m.suffix} isInView={isInView} />
            </p>
            <p className="text-gray-500 font-roboto text-sm">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WaitlistStats;
