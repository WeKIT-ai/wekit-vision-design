
import { Target, Globe } from 'lucide-react';

const AboutMission = () => {
  return (
    <section id="mission" className="py-20 px-6 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-16">Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <Target className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To democratize access to quality mentorship by leveraging AI technology, 
              ensuring every young person has the guidance they need to achieve their dreams 
              and contribute meaningfully to society.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <Globe className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              A world where geographical, economic, and social barriers don't limit access 
              to mentorship, where every student can connect with inspiring professionals 
              who help them navigate their journey to success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
