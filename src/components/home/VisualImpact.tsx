import { Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';

const VisualImpact = () => {
  return (
    <section className="py-16 px-6 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Transforming Lives Through Technology</h2>
          <p className="text-xl text-gray-600">Where innovation meets human potential</p>
        </AnimatedSection>
        
        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={150} animation="fade-up">
          {/* Dynamic Video Card 1 */}
          <Link to="/courses" className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500 cursor-pointer">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            >
              <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
              <h3 className="text-lg font-semibold">Collaborative Learning</h3>
              <p className="text-sm opacity-90">Building tomorrow's leaders</p>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Users className="w-6 h-6 text-white animate-pulse" />
            </div>
          </Link>

          {/* Dynamic Image 2 */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AI-powered mentorship platform"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
            <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
              <h3 className="text-lg font-semibold">AI-Powered Matching</h3>
              <p className="text-sm opacity-90">Smart mentor connections</p>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-6 h-6 bg-white rounded-full animate-spin flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Dynamic Video Card 3 */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              poster="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            >
              <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
            <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
              <h3 className="text-lg font-semibold">Future-Ready Skills</h3>
              <p className="text-sm opacity-90">Technology meets purpose</p>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <TrendingUp className="w-6 h-6 text-white animate-bounce" />
            </div>
          </div>
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default VisualImpact;
