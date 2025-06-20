
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const CareerLevels = () => {
  const careerLevels = [
    {
      title: 'Early Career (0-3 years)',
      challenge: 'Building foundation skills and proving value',
      solution: 'Structured mentorship for rapid skill acquisition',
      outcomes: ['Faster skill development', 'Clear career direction', 'Increased confidence']
    },
    {
      title: 'Mid-Level (3-8 years)', 
      challenge: 'Breaking into leadership and expanding influence',
      solution: 'Leadership development and strategic thinking training',
      outcomes: ['Leadership promotions', 'Expanded responsibilities', 'Higher visibility']
    },
    {
      title: 'Senior Level (8+ years)',
      challenge: 'Maximizing impact and preparing for executive roles',
      solution: 'Executive coaching and organizational leadership',
      outcomes: ['C-suite readiness', 'Board positions', 'Industry recognition']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-[slideUp_0.8s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
            Solutions for Every Career Stage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Whether you're building foundations or reaching for the C-suite, 
            we have targeted programs for your level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerLevels.map((level, index) => (
            <Card 
              key={index} 
              className={`border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-[slideUp_0.8s_ease-out_${index * 0.2}s_both]`}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {level.title}
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded hover:bg-red-100 transition-colors duration-300 transform hover:translate-x-1">
                    <p className="text-red-800 font-medium text-sm mb-1">Common Challenge:</p>
                    <p className="text-red-700 text-sm">{level.challenge}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded hover:bg-purple-100 transition-colors duration-300 transform hover:translate-x-1">
                    <p className="text-purple-800 font-medium text-sm mb-1">Our Approach:</p>
                    <p className="text-purple-700 text-sm">{level.solution}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-800 font-medium text-sm">Typical Outcomes:</p>
                    {level.outcomes.map((outcome, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300 animate-[slideLeft_0.5s_ease-out_${idx * 0.1}s_both]`}
                      >
                        <CheckCircle className="text-green-500 flex-shrink-0 hover:animate-spin transition-transform duration-300" size={16} />
                        <span className="text-gray-700 text-sm hover:text-green-600 transition-colors duration-300">{outcome}</span>
                      </div>
                    ))}
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

export default CareerLevels;
