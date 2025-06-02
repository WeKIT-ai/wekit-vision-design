
import ContactForm from '@/components/lead-gen/ContactForm';

const SchoolsImpact = () => {
  return (
    <section className="py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Measurable Impact Across
              <br />
              <span className="font-medium text-blue-600">All Institution Types</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              See the concrete results our partner educational institutions achieve - from high schools to universities.
            </p>
            <div className="space-y-6 pt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Graduate Employment Rate</span>
                  <span className="text-2xl font-bold text-green-600">+47%</span>
                </div>
                <p className="text-sm text-gray-500">From 53% to 78% within first year across all institutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Student Engagement</span>
                  <span className="text-2xl font-bold text-blue-600">+65%</span>
                </div>
                <p className="text-sm text-gray-500">Higher participation in career services across all educational levels</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Industry Partnerships</span>
                  <span className="text-2xl font-bold text-purple-600">+200%</span>
                </div>
                <p className="text-sm text-gray-500">More companies engaged with students from partner institutions</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsImpact;
