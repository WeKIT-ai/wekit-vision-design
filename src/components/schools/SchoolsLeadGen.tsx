
import DemoRequestForm from '@/components/lead-gen/DemoRequestForm';
import NewsletterSignup from '@/components/lead-gen/NewsletterSignup';
import EarlyAccessForm from '@/components/lead-gen/EarlyAccessForm';
import PartnershipInquiry from '@/components/lead-gen/PartnershipInquiry';

const SchoolsLeadGen = () => {
  return (
    <>
      {/* Lead Gen Section 1 - Quick Access Forms */}
      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Making Your Students Job-Ready Today</h2>
            <p className="text-xl text-gray-600">See how our platform can transform student outcomes at your institution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DemoRequestForm />
            </div>
            <div className="space-y-6">
              <NewsletterSignup />
              <EarlyAccessForm />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Section 2 - Partnership Focus */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Connect Students with Industry?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss how we can solve your specific career services challenges and make your students industry-ready.
            </p>
          </div>
          <PartnershipInquiry />
        </div>
      </section>
    </>
  );
};

export default SchoolsLeadGen;
