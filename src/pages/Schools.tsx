
import SchoolsHero from '@/components/schools/SchoolsHero';
import SchoolsProblems from '@/components/schools/SchoolsProblems';
import SchoolsLeadGen from '@/components/schools/SchoolsLeadGen';
import SchoolsSolutions from '@/components/schools/SchoolsSolutions';
import SchoolsImpact from '@/components/schools/SchoolsImpact';
import SchoolsCTA from '@/components/schools/SchoolsCTA';

const Schools = () => {
  return (
    <div className="min-h-screen bg-white">
      <SchoolsHero />
      
      {/* Video Section - Showcasing School Success Stories */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Schools Transforming Lives</h2>
            <p className="text-xl text-gray-600">See how educational institutions are leveraging AI-powered mentorship</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                poster="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              >
                <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Student Success Stories</h3>
                <p className="text-sm opacity-90">Real outcomes, real impact</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              >
                <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Campus Innovation</h3>
                <p className="text-sm opacity-90">Technology meets education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SchoolsProblems />
      <SchoolsLeadGen />
      <SchoolsSolutions />
      <SchoolsImpact />
      <SchoolsCTA />
    </div>
  );
};

export default Schools;
