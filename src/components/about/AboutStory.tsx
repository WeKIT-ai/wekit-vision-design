
import { Lightbulb } from 'lucide-react';

const AboutStory = () => {
  return (
    <section id="story" className="py-20 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              From Vision to <span className="text-blue-600">Reality</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                WeKIT was born from a simple observation: too many talented young people 
                lack access to the guidance and mentorship that could unlock their potential. 
                In a rapidly evolving world where AI and technology reshape every industry, 
                we saw an opportunity to democratize mentorship.
              </p>
              <p>
                Our founders, coming from diverse backgrounds in education, technology, and 
                youth development, united around a shared vision: create an AI-powered platform 
                that connects students with the right mentors at the right time, making quality 
                guidance accessible to all.
              </p>
              <p>
                Today, we're proud to serve thousands of students, hundreds of mentors, 
                and dozens of educational institutions, creating a thriving ecosystem of 
                learning and growth.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
              alt="Students collaborating" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white shadow-xl">
              <div className="text-2xl font-bold">2019</div>
              <div className="text-sm">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
