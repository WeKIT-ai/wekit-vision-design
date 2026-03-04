
import { Target, Globe } from 'lucide-react';

const AboutMission = () => {
  return (
    <section id="mission" className="py-20 px-6 md:px-8 bg-primary">
      <div className="max-w-6xl mx-auto text-center text-primary-foreground">
        <h2 className="text-4xl font-bold font-montserrat mb-16">Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm p-8">
            <Target className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              To democratize access to quality mentorship by leveraging AI technology, 
              ensuring every young person has the guidance they need to achieve their dreams 
              and contribute meaningfully to society.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8">
            <Globe className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
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
