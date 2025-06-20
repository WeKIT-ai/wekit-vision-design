
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Network, Target, CheckCircle } from 'lucide-react';

const CareerSolutions = () => {
  const solutions = [
    {
      icon: TrendingUp,
      title: 'Strategic Career Acceleration',
      description: 'Get personalized guidance from senior professionals who\'ve achieved the success you\'re targeting.',
      impact: '3x faster promotion rates',
      details: ['Executive mentorship', 'Leadership development', 'Strategic planning']
    },
    {
      icon: Network,
      title: 'Professional Network Expansion',
      description: 'Build meaningful connections across industries through structured networking and mentorship exchanges.',
      impact: '250% network growth average',
      details: ['Industry introductions', 'Peer mentoring circles', 'Executive access']
    },
    {
      icon: Target,
      title: 'Skills Future-Proofing',
      description: 'Stay ahead of industry changes with targeted skill development and continuous learning programs.',
      impact: '85% report increased job security',
      details: ['Skills gap analysis', 'Learning pathways', 'Industry insights']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-[slideUp_0.8s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
            How We Accelerate Your Career
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Our proven methodology combines mentorship, networking, and strategic development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className={`border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-[slideUp_0.8s_ease-out_${index * 0.2}s_both]`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <solution.icon size={32} className="group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {solution.description}
                </p>
                <div className="bg-purple-50 p-4 rounded mb-4 hover:bg-purple-100 transition-colors duration-300 transform hover:scale-105">
                  <p className="text-purple-800 font-medium text-sm text-center">Proven Impact:</p>
                  <p className="text-purple-700 font-bold text-center animate-pulse">{solution.impact}</p>
                </div>
                <div className="space-y-2">
                  {solution.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300 animate-[slideLeft_0.5s_ease-out_${idx * 0.1}s_both]`}
                    >
                      <CheckCircle className="text-purple-500 flex-shrink-0 hover:animate-spin transition-transform duration-300" size={16} />
                      <span className="text-gray-700 text-sm hover:text-purple-600 transition-colors duration-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSolutions;
