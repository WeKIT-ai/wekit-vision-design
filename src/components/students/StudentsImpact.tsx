
import { Card, CardContent } from '@/components/ui/card';

const StudentsImpact = () => {
  const successMetrics = [
    { metric: 'Job Placement Rate', value: '94%', description: 'within 6 months of graduation' },
    { metric: 'Salary Increase', value: '+38%', description: 'compared to non-mentored peers' },
    { metric: 'Career Satisfaction', value: '92%', description: 'report being in their ideal role' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Results Speak for Themselves
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – see the measurable impact on student careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successMetrics.map((metric, index) => (
            <Card key={index} className="border-2 border-green-200 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{metric.value}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.metric}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsImpact;
