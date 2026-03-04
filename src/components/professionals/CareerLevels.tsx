
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const CareerLevels = () => {
  const careerLevels = [
    { title: 'Early Career (0-3 years)', challenge: 'Building foundation skills and proving value', solution: 'Structured mentorship for rapid skill acquisition', outcomes: ['Faster skill development', 'Clear career direction', 'Increased confidence'] },
    { title: 'Mid-Level (3-8 years)', challenge: 'Breaking into leadership and expanding influence', solution: 'Leadership development and strategic thinking training', outcomes: ['Leadership promotions', 'Expanded responsibilities', 'Higher visibility'] },
    { title: 'Senior Level (8+ years)', challenge: 'Maximizing impact and preparing for executive roles', solution: 'Executive coaching and organizational leadership', outcomes: ['C-suite readiness', 'Board positions', 'Industry recognition'] }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-wekit-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Solutions for Every Career Stage</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Whether you're building foundations or reaching for the C-suite, we have targeted programs for your level.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerLevels.map((level, index) => (
            <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 group bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-montserrat text-foreground mb-4 group-hover:text-wekit-teal transition-colors duration-300">{level.title}</h3>
                <div className="space-y-4">
                  <div className="bg-wekit-soft p-4 border-l-4 border-wekit-primary">
                    <p className="text-foreground font-medium text-sm mb-1">Common Challenge:</p>
                    <p className="text-muted-foreground text-sm">{level.challenge}</p>
                  </div>
                  <div className="bg-wekit-soft p-4 border-l-4 border-wekit-teal">
                    <p className="text-foreground font-medium text-sm mb-1">Our Approach:</p>
                    <p className="text-muted-foreground text-sm">{level.solution}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium text-sm">Typical Outcomes:</p>
                    {level.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-wekit-teal flex-shrink-0" size={16} />
                        <span className="text-muted-foreground text-sm">{outcome}</span>
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
