import NewsletterSignup from '@/components/lead-gen/NewsletterSignup';
import ContactForm from '@/components/lead-gen/ContactForm';
import DemoRequestForm from '@/components/lead-gen/DemoRequestForm';
import MentorSignup from '@/components/lead-gen/MentorSignup';
import { motion } from 'framer-motion';

const LeadGenSections = () => {
  return (
    <>
      {/* Zoho Form Section */}
      <section className="py-20 px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">
              Be Part of Reshaping the Future of Work
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Join our community and help shape the next generation of career development
            </p>
          </motion.div>
          <div className="flex justify-center">
            <div className="w-full glass rounded-2xl overflow-hidden">
              <iframe 
                aria-label='Be Part of Reshaping the Future of Work' 
                frameBorder="0" 
                className="h-[500px] w-full border-none"
                src="https://forms.wekitmentoring.com/wekitmentoring/form/WotKareerIsiTWeKITInterestForm/formperma/Nd-1rWm5fatHjDCTeRo4JbuHwArUQOWpuvplDE38HHU"
                allow="geolocation; microphone; camera"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Section 1 */}
      <section className="py-20 px-6 md:px-8 section-darker">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Start Your Journey</h2>
            <p className="text-lg text-muted-foreground font-light">Take the first step towards transforming youth development</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsletterSignup />
            <DemoRequestForm />
          </div>
        </div>
      </section>

      {/* Lead Gen Section 2 */}
      <section className="py-20 px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground font-light">Connect with like-minded individuals passionate about youth development</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MentorSignup />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadGenSections;
