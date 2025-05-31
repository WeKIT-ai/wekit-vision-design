
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';

const StudentsProblems = () => {
  const studentProblems = [
    {
      icon: AlertTriangle,
      title: 'Career Direction Confusion',
      problem: '73% of students feel uncertain about their career path',
      solution: 'AI-powered career matching based on your skills, interests, and market demand'
    },
    {
      icon: Clock,
      title: 'Lack of Industry Experience',
      problem: 'Limited real-world exposure makes job applications challenging',
      solution: 'Connect with industry mentors for practical insights and project guidance'
    },
    {
      icon: DollarSign,
      title: 'Skills-Jobs Mismatch',
      problem: '65% of graduates lack skills employers actually need',
      solution: 'Personalized skill development roadmaps aligned with industry requirements'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Problems Every Student Faces
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These aren't your fault – they're systemic issues with how education 
            prepares students for modern careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studentProblems.map((item, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {item.title}
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                    <p className="text-red-800 font-medium text-sm">The Problem:</p>
                    <p className="text-red-700 text-sm">{item.problem}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                    <p className="text-green-800 font-medium text-sm">Our Solution:</p>
                    <p className="text-green-700 text-sm">{item.solution}</p>
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

export default StudentsProblems;
