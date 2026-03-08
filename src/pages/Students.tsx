
import StudentsHero from '@/components/students/StudentsHero';
import StudentsProblems from '@/components/students/StudentsProblems';
import StudentsSolutions from '@/components/students/StudentsSolutions';
import StudentsImpact from '@/components/students/StudentsImpact';
import StudentsProcess from '@/components/students/StudentsProcess';
import StudentsVideoSection from '@/components/students/StudentsVideoSection';
import CollegeFeedbackSection from '@/components/students/CollegeFeedbackSection';
import StudentsCTA from '@/components/students/StudentsCTA';

const Students = () => {
  return (
    <div className="min-h-screen bg-white">
      <StudentsHero />
      
      {/* Video Section - Student Journey */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey to Success</h2>
            <p className="text-xl text-gray-600">Watch how students like you are achieving their dreams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              >
                <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-sm font-semibold">Find Your Path</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              >
                <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-sm font-semibold">Build Skills</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                poster="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              >
                <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-sm font-semibold">Achieve Goals</h3>
              </div>
            </div>
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
