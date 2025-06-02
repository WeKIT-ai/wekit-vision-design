
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';

const SchoolsProblems = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Poor Career Outcomes',
      problem: 'Only 41% of graduates find jobs in their field within 6 months across all educational institutions',
      solution: 'Our AI-powered mentorship increases job placement rates by 73% for students at every level'
    },
    {
      icon: AlertTriangle,
      title: 'Student Disengagement',
      problem: '68% of students feel disconnected from their career goals regardless of institution type',
      solution: 'Connect students with industry mentors who provide real-world context and career motivation'
    },
    {
      icon: Clock,
      title: 'Limited Resources',
      problem: 'Career counselors manage 400+ students each, limiting individual attention across institutions',
      solution: 'Scale personalized guidance with AI-driven mentor matching and 24/7 support for all students'
    }
  ];

  return (
    <section className="py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Challenges Facing All
            <br />
            <span className="font-medium text-red-600">Educational Institutions</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            From high schools to universities, educational institutions worldwide face unprecedented challenges in preparing students for modern careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <Card key={index} className="border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg bg-white rounded-none shadow-none">
              <CardContent className="p-12">
                <div className="mb-8">
                  <item.icon size={48} className="text-red-600 mx-auto" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-tight">
                  {item.title}
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                    <p className="text-red-800 font-medium text-sm">Problem:</p>
                    <p className="text-red-700">{item.problem}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                    <p className="text-green-800 font-medium text-sm">Our Solution:</p>
                    <p className="text-green-700">{item.solution}</p>
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

export default SchoolsProblems;
