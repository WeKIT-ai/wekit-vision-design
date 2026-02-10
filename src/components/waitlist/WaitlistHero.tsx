import { useWaitlistForm } from '@/hooks/useWaitlistForm';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const floatingCards = [
  { emoji: '👨‍⚕️', label: 'Doctor', top: '10%', right: '5%', delay: 0 },
  { emoji: '💻', label: 'Engineer', top: '30%', right: '0%', delay: 0.2 },
  { emoji: '🎨', label: 'Designer', top: '55%', right: '10%', delay: 0.4 },
  { emoji: '📊', label: 'Analyst', top: '75%', right: '2%', delay: 0.6 },
  { emoji: '🎬', label: 'Director', top: '20%', right: '35%', delay: 0.3 },
];

const WaitlistHero = () => {
  const { name, setName, email, setEmail, isLoading, handleSubmit } = useWaitlistForm();

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-5 gap-12 items-center">
        {/* Left - 60% */}
        <div className="lg:col-span-3">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-wekit-orange text-white text-sm font-montserrat font-semibold px-4 py-1.5 rounded-full mb-6">
              🚀 Launching Soon in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight text-wekit-black mb-6"
          >
            Discover Your Perfect Career Path with{' '}
            <span className="bg-gradient-to-r from-wekit-blue to-wekit-zaffre bg-clip-text text-transparent">AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
          >
            India's first AI-powered career discovery platform. Take a 72-question psychometric assessment and unlock personalized career recommendations from 1,288+ professions.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mb-6 max-w-xl"
          >
            <Input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required disabled={isLoading} className="flex-1 h-12 rounded-lg border-wekit-grey font-roboto" />
            <Input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required disabled={isLoading} className="flex-1 h-12 rounded-lg border-wekit-grey font-roboto" />
            <Button type="submit" disabled={isLoading} className="h-12 px-8 rounded-lg bg-gradient-to-r from-wekit-blue to-wekit-zaffre hover:opacity-90 text-white font-montserrat font-semibold whitespace-nowrap">
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {['🧑‍🎓', '👩‍💼', '👨‍🔬', '👩‍🎨'].map((e, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-wekit-grey flex items-center justify-center text-sm border-2 border-white">{e}</div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-roboto">Join <strong className="text-wekit-black">500+</strong> students already on the waitlist</p>
          </motion.div>
        </div>

        {/* Right - 40% floating cards */}
        <div className="lg:col-span-2 relative hidden lg:block h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-wekit-blue/5 to-wekit-zaffre/10 rounded-3xl" />
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: card.delay }}
              className="absolute bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3 border border-gray-100"
              style={{ top: card.top, right: card.right }}
            >
              <span className="text-2xl">{card.emoji}</span>
              <span className="font-montserrat font-semibold text-sm text-wekit-black">{card.label}</span>
            </motion.div>
          ))}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-wekit-blue to-wekit-green rounded-2xl opacity-20 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WaitlistHero;
