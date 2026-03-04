
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-wekit-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">
            The Career Advancement Roadblocks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These aren't personal failings — they're systematic challenges that require strategic solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerChallenges.map((challenge, index) => (
            <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 group rounded-2xl bg-card">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-wekit-soft rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-wekit-teal/10 transition-colors duration-300">
                  <challenge.icon size={28} className="text-wekit-teal" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-foreground mb-4 text-center">
                  {challenge.title}
                </h3>
                <div className="space-y-4">
                  <div className="bg-wekit-soft p-4 rounded-2xl border-l-4 border-wekit-primary">
                    <p className="text-foreground font-medium text-sm">The Challenge:</p>
                    <p className="text-muted-foreground text-sm">{challenge.problem}</p>
                  </div>
                  <div className="bg-wekit-soft p-4 rounded-2xl border-l-4 border-wekit-teal">
                    <p className="text-foreground font-medium text-sm">Our Solution:</p>
                    <p className="text-muted-foreground text-sm">{challenge.solution}</p>
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
