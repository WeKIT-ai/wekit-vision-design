import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const credentials = [
  { emoji: '🎓', text: '15+ years in career counseling and mentorship' },
  { emoji: '👥', text: 'Helped 5,000+ students find their career path' },
  { emoji: '🏆', text: 'Expert in psychometric assessment and career psychology' },
  { emoji: '🌏', text: 'Advocate for accessible education across India' },
];

const WaitlistFounder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="founder" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
        {/* Image - 40% */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="lg:col-span-2 relative order-2 lg:order-1">
          <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-wekit-blue rounded-full" />
          <div className="relative ml-4">
            <img
              src="/lovable-uploads/f9e02f74-cebe-4891-a8e2-d36b5e83b5a7.png"
              alt="Yvonne Roberts - Founder & CEO of We-KIT"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-xl object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-wekit-orange text-white text-xs font-montserrat font-bold px-4 py-1.5 rounded-full">Founder & CEO</span>
          </div>
        </motion.div>

        {/* Content - 60% */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-3 order-1 lg:order-2">
          <span className="font-montserrat text-sm font-bold uppercase tracking-widest text-wekit-orange mb-4 block">MEET THE FOUNDER</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-[36px] text-wekit-black mb-4 leading-tight">Why Yvonne Roberts is Building We-KIT</h2>
          <p className="text-gray-500 italic mb-6 leading-relaxed">A career discovery platform built by someone who understands the journey from uncertainty to purpose.</p>

          <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
            <p>With over 15 years of experience in career counseling, education, and mentorship, Yvonne Roberts has witnessed firsthand the challenges Indian students face when choosing their career paths.</p>
            <p>Her deep understanding of psychometric assessments and career psychology led her to create We-KIT — a platform that makes scientific career discovery accessible to every student in India.</p>
            <p>Yvonne's mission is to ensure that no student has to make one of life's most important decisions based on guesswork or peer pressure alone.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-lg">{c.emoji}</span>
                <span className="text-sm text-gray-600">{c.text}</span>
              </div>
            ))}
          </div>

          <a href="https://www.linkedin.com/in/yvonne1roberts/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#0A66C2] hover:bg-[#084d96] text-white font-montserrat font-semibold rounded-lg gap-2 mb-8">
              <Linkedin size={18} /> Connect with Yvonne on LinkedIn
            </Button>
          </a>

          <blockquote className="border-l-4 border-wekit-orange pl-6 py-4 bg-wekit-orange/5 rounded-r-xl">
            <p className="text-gray-700 italic leading-relaxed">"Every student deserves to discover a career they'll love. We-KIT is my commitment to making that discovery scientific, accessible, and empowering."</p>
            <footer className="mt-3 font-montserrat font-semibold text-sm text-wekit-black">— Yvonne Roberts, Founder & CEO</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistFounder;
