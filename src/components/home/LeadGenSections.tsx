
import NewsletterSignup from '@/components/lead-gen/NewsletterSignup';
import ContactForm from '@/components/lead-gen/ContactForm';
import DemoRequestForm from '@/components/lead-gen/DemoRequestForm';
import MentorSignup from '@/components/lead-gen/MentorSignup';
import EarlyAccessForm from '@/components/lead-gen/EarlyAccessForm';

const LeadGenSections = () => {
  return (
    <>
      {/* Be Part of Reshaping the Future of Work Section */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Be Part of Reshaping the Future of Work</h2>
            <p className="text-xl text-gray-600">Join our community and help shape the next generation of career development</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100">
              <iframe 
                aria-label='Be Part of Reshaping the Future of Work' 
                frameBorder="0" 
                className="h-[500px] w-full border-none"
                src="https://forms.wekitmentoring.com/wekitmentoring/form/WotKareerIsiTWeKITInterestForm/formperma/Nd-1rWm5fatHjDCTeRo4JbuHwArUQOWpuvplDE38HHU"
              />
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
