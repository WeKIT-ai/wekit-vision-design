import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useWaitlistForm } from '@/hooks/useWaitlistForm';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Lock, Mail, Zap } from 'lucide-react';

const benefits = [
  'First access when we launch',
  'Exclusive beta tester benefits',
  'Free premium features for 6 months',
];

const WaitlistCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { name, setName, email, setEmail, isLoading, handleSubmit } = useWaitlistForm();

  return (
    <section id="waitlist-cta" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-wekit-blue to-wekit-zaffre">
      <div className="max-w-3xl mx-auto text-center text-white">
        <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-montserrat font-semibold px-4 py-1.5 rounded-full mb-6">
          🎉 Limited Spots Available
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-montserrat font-bold text-3xl md:text-[42px] mb-4 leading-tight">Join 500+ Students on the Waitlist</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-white/80 text-lg mb-8 leading-relaxed">
          Be among the first to discover your perfect career path. Get exclusive early access and special launch benefits.
        </motion.p>

        <motion.ul initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-white/90"><Check size={16} className="text-wekit-green" /> {b}</li>
          ))}
        </motion.ul>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
          <Input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required disabled={isLoading} className="flex-1 h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 font-roboto" />
          <Input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required disabled={isLoading} className="flex-1 h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 font-roboto" />
          <Button type="submit" disabled={isLoading} className="h-14 px-10 rounded-xl bg-wekit-orange hover:bg-wekit-orange/90 text-white font-montserrat font-bold text-base whitespace-nowrap">
            {isLoading ? 'Joining...' : 'Join Now →'}
          </Button>
        </motion.form>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-6 text-xs text-white/60 mb-6">
          <span className="flex items-center gap-1"><Lock size={12} /> Your data is 100% secure</span>
          <span className="flex items-center gap-1"><Mail size={12} /> No spam, ever</span>
          <span className="flex items-center gap-1"><Zap size={12} /> Instant confirmation</span>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {['🧑‍🎓', '👩‍💼', '👨‍🔬', '👩‍🎨'].map((e, i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs border-2 border-white/30">{e}</div>
            ))}
          </div>
          <p className="text-sm text-white/70">Join Anna, Rahul, Priya and <strong className="text-white">497 others</strong></p>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
