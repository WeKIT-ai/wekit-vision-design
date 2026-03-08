import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const IndividualCourseAccess = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 section-darker">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-8">
            <BookOpen className="text-accent" size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight mb-6">
            Access WeKIT Courses Individually
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Students, homeschool families, churches, and NGOs can access WeKIT courses independently using invitation access codes.
          </p>
          <Button size="xl" variant="accent" className="group">
            Request Access Code
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndividualCourseAccess;
