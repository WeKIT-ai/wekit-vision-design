
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">
            How We Accelerate Your Career
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology combines mentorship, networking, and strategic development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 group rounded-2xl bg-card">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-wekit-soft rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-wekit-teal/10 transition-colors duration-300">
                  <solution.icon size={28} className="text-wekit-teal" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-foreground mb-4 text-center">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-center">
                  {solution.description}
                </p>
                <div className="bg-wekit-soft p-4 rounded-2xl mb-4">
                  <p className="text-foreground font-medium text-sm text-center">Proven Impact:</p>
                  <p className="text-wekit-teal font-bold text-center">{solution.impact}</p>
                </div>
                <div className="space-y-2">
                  {solution.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-wekit-teal flex-shrink-0" size={16} />
                      <span className="text-muted-foreground text-sm">{detail}</span>
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
