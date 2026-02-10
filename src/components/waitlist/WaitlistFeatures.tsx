import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    emoji: '🧪', title: 'Scientific Assessment',
    desc: '72 carefully designed questions validated by career counseling experts. Age-specific versions for students 14-50+.',
    checks: ['Multiple personality dimensions', 'Interest mapping (39 categories)', 'Skill identification'],
  },
  {
    emoji: '📚', title: '1,288+ Career Paths',
    desc: "India's most comprehensive career database covering 21 career families including creative arts, sports, technology, and more.",
    checks: ['Traditional + emerging careers', 'Salary insights (INR)', 'Growth projections 2026'],
  },
  {
    emoji: '✨', title: 'Smart Recommendations',
    desc: 'Advanced AI algorithms analyze your profile and match you with careers that align with your interests, skills, and personality.',
    checks: ['Personalized rankings', 'Match strength scores', 'Alternative paths'],
  },
  {
    emoji: '💰', title: 'Scholarship Connect',
    desc: 'Get automatically matched with relevant scholarships based on your career choices and high-growth field selections.',
    checks: ['Government schemes', 'Private scholarships', 'Financial aid options'],
  },
];

const WaitlistFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="font-montserrat font-bold text-3xl md:text-[42px] text-wekit-black mb-14 text-center leading-tight">Everything You Need to Find Your Path</motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-wekit-blue/30 hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl block mb-4">{f.emoji}</span>
              <h3 className="font-montserrat font-semibold text-xl text-wekit-black mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-4">{f.desc}</p>
              {f.checks.length > 0 && (
                <ul className="space-y-2">
                  {f.checks.map((c, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check size={14} className="text-wekit-green flex-shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistFeatures;
