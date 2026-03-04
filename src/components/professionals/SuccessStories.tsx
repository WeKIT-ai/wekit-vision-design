
import { Card, CardContent } from '@/components/ui/card';

const SuccessStories = () => {
  const successStories = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer → Tech Director',
      challenge: 'Felt stuck in technical role, wanted leadership position',
      solution: 'Matched with CTO mentor for leadership development',
      outcome: 'Promoted to Tech Director in 18 months, 67% salary increase'
    },
    {
      name: 'Marcus Johnson',
      role: 'Marketing Manager → VP Marketing',
      challenge: 'Lacked strategic business perspective for VP role',
      solution: 'Executive mentorship program with Fortune 500 CMO',
      outcome: 'Landed VP role at competitor, leading team of 45'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Project Manager → Entrepreneur',
      challenge: 'Wanted to start own business but lacked guidance',
      solution: 'Entrepreneur mentorship and investor network access',
      outcome: 'Launched successful startup, raised $2M Series A'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">
            Real Professionals, Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how professionals like you broke through career barriers with strategic mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 group rounded-2xl bg-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold font-montserrat text-foreground">{story.name}</h3>
                  <p className="text-wekit-teal font-medium">{story.role}</p>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="bg-wekit-soft p-3 rounded-2xl border-l-4 border-wekit-primary">
                    <p className="text-foreground font-medium mb-1">Challenge:</p>
                    <p className="text-muted-foreground">{story.challenge}</p>
                  </div>
                  <div className="bg-wekit-soft p-3 rounded-2xl border-l-4 border-wekit-teal">
                    <p className="text-foreground font-medium mb-1">Solution:</p>
                    <p className="text-muted-foreground">{story.solution}</p>
                  </div>
                  <div className="bg-wekit-soft p-3 rounded-2xl border-l-4 border-wekit-gold">
                    <p className="text-foreground font-medium mb-1">Outcome:</p>
                    <p className="text-wekit-teal font-bold">{story.outcome}</p>
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

export default SuccessStories;
