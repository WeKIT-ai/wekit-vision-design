
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Network, Clock } from 'lucide-react';

const CareerChallenges = () => {
  const careerChallenges = [
    {
      icon: BarChart,
      title: 'Career Stagnation',
      problem: '47% of professionals feel stuck in their current role with no clear advancement path',
      solution: 'Strategic career planning with senior mentors who\'ve navigated similar transitions'
    },
    {
      icon: Network,
      title: 'Limited Professional Network',
      problem: '73% cite networking as their biggest career obstacle',
      solution: 'Access to curated industry networks and mentorship connections'
    },
    {
      icon: Clock,
      title: 'Skill Obsolescence',
      problem: 'Skills become outdated every 2-5 years in fast-moving industries',
      solution: 'Continuous learning roadmaps aligned with industry evolution'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-[slideUp_0.8s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
            The Career Advancement Roadblocks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
            These aren't personal failings – they're systematic challenges that require strategic solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerChallenges.map((challenge, index) => (
            <Card 
              key={index} 
              className={`border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-[slideUp_0.8s_ease-out_${index * 0.2}s_both]`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <challenge.icon size={32} className="group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-red-600 transition-colors duration-300">
                  {challenge.title}
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-500 hover:bg-red-100 transition-colors duration-300 transform hover:translate-x-1">
                    <p className="text-red-800 font-medium text-sm">The Challenge:</p>
                    <p className="text-red-700 text-sm">{challenge.problem}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500 hover:bg-purple-100 transition-colors duration-300 transform hover:translate-x-1">
                    <p className="text-purple-800 font-medium text-sm">Our Solution:</p>
                    <p className="text-purple-700 text-sm">{challenge.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerChallenges;
