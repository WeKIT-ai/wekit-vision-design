
import { Card, CardContent } from '@/components/ui/card';
import { Users, BarChart3, Award } from 'lucide-react';

const SchoolsSolutions = () => {
  const solutions = [
    {
      icon: Users,
      title: 'AI-Powered Mentor Matching',
      description: 'Automatically connect students with industry professionals based on career goals, skills, and interests.',
      impact: '3x increase in meaningful mentor connections'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Career Analytics',
      description: 'Track student progress, identify at-risk learners, and measure career outcome improvements.',
      impact: '85% improvement in career services effectiveness'
    },
    {
      icon: Award,
      title: 'Industry-Integrated Learning',
      description: 'Bridge academic learning with real-world skills through mentorship and practical projects.',
      impact: '67% increase in graduate employability'
    }
  ];

  return (
    <section className="py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Our
            <br />
            <span className="font-medium text-green-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Comprehensive tools that address the root causes of poor career outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg bg-white rounded-none shadow-none">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <solution.icon size={48} className="text-green-600 mx-auto" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="bg-green-50 p-4 rounded">
                  <p className="text-green-800 font-medium text-sm">Proven Impact:</p>
                  <p className="text-green-700 font-bold">{solution.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSolutions;
