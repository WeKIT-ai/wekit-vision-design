
import NewsletterSignup from '@/components/lead-gen/NewsletterSignup';
import ContactForm from '@/components/lead-gen/ContactForm';
import DemoRequestForm from '@/components/lead-gen/DemoRequestForm';
import MentorSignup from '@/components/lead-gen/MentorSignup';
import EarlyAccessForm from '@/components/lead-gen/EarlyAccessForm';

const LeadGenSections = () => {
  return (
    <>
      {/* Lead Gen Section 1 - Quick Engagement */}
      <section className="py-16 px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-foreground mb-4">Start Your Journey</h2>
            <p className="text-xl text-muted-foreground">Take the first step towards transforming youth development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsletterSignup />
            <DemoRequestForm />
          </div>
        </div>
      </section>

      {/* Lead Gen Section 2 - Community Building */}
      <section className="py-16 px-6 md:px-8 bg-wekit-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-foreground mb-4">Join Our Community</h2>
            <p className="text-xl text-muted-foreground">Connect with like-minded individuals passionate about youth development</p>
          </div>
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
