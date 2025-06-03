
import EarlyAccessForm from '@/components/lead-gen/EarlyAccessForm';

const EarlyAccessCTA = () => {
  return (
    <section className="py-24 px-6 md:px-8">
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
  );
};

export default EarlyAccessCTA;
