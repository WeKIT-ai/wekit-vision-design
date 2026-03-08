import teamImage from '@/assets/team-section.png';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-cinematic overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white mb-4 tracking-tight">
            Meet the Team Behind WeKIT
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Leadership, partners, and advisors building the future of mentorship
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl overflow-hidden group"
        >
          <img
            src={teamImage}
            alt="Meet the WeKIT Team - Leadership, Partners, and Advisors"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 px-10 py-7 text-base font-semibold rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl group"
            >
              <Calendar className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={18} />
              Book a Session with Our Founder
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
