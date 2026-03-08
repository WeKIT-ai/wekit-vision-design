
import StudentsHero from '@/components/students/StudentsHero';
import StudentsProblems from '@/components/students/StudentsProblems';
import StudentsSolutions from '@/components/students/StudentsSolutions';
import StudentsImpact from '@/components/students/StudentsImpact';
import StudentsProcess from '@/components/students/StudentsProcess';
import StudentsVideoSection from '@/components/students/StudentsVideoSection';
import CollegeFeedbackSection from '@/components/students/CollegeFeedbackSection';
import StudentsCTA from '@/components/students/StudentsCTA';
import { motion } from 'framer-motion';

const Students = () => {
  return (
    <div className="min-h-screen bg-background">
      <StudentsHero />
      
      {/* Video Section - Student Journey */}
      <section className="py-20 px-6 md:px-8 section-darker">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Your Journey to Success</h2>
            <p className="text-lg text-muted-foreground font-light">Watch how students like you are achieving their dreams</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Find Your Path', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
              { title: 'Build Skills', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
              { title: 'Achieve Goals', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer h-56"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StudentsProblems />
      <StudentsSolutions />
      <StudentsImpact />
      <StudentsProcess />
      <StudentsVideoSection />
      <CollegeFeedbackSection />
      <StudentsCTA />
    </div>
  );
};

export default Students;
