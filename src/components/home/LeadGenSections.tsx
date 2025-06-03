
import NewsletterSignup from '@/components/lead-gen/NewsletterSignup';
import ContactForm from '@/components/lead-gen/ContactForm';
import DemoRequestForm from '@/components/lead-gen/DemoRequestForm';
import MentorSignup from '@/components/lead-gen/MentorSignup';
import EarlyAccessForm from '@/components/lead-gen/EarlyAccessForm';

const LeadGenSections = () => {
  return (
    <>
      {/* Early Access Section */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Be among the first to experience YOMA and our AI-powered mentorship platform</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <EarlyAccessForm />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Section 1 - Quick Engagement */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Journey</h2>
            <p className="text-xl text-gray-600">Take the first step towards transforming youth development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsletterSignup />
            <DemoRequestForm />
          </div>
        </div>
      </section>

      {/* Lead Gen Section 2 - Community Building */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600">Connect with like-minded individuals passionate about youth development</p>
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
