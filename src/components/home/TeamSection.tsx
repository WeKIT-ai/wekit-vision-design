import teamImage from '@/assets/team-section.png';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  return (
    <section className="py-20 px-6 md:px-8 section-darker overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl"
        >
          <img 
            src={teamImage} 
            alt="Meet the WeKIT Team - Leadership, Partners, and Advisors" 
            className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
            <Button size="xl" variant="accent" className="group">
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
