
import { Card, CardContent } from '@/components/ui/card';
import { User, Target, TrendingUp } from 'lucide-react';

const StudentsSolutions = () => {
  const solutions = [
    { icon: User, title: 'AI-Powered Career Guidance', description: 'Get matched with mentors and career paths that align with your unique profile and aspirations.', impact: 'Students find career clarity 4x faster' },
    { icon: Target, title: 'Personalized Learning Paths', description: 'Receive customized skill development plans based on your career goals and current market needs.', impact: '89% skill-job match rate for graduates' },
    { icon: TrendingUp, title: 'Real-World Experience', description: 'Access industry projects, internships, and mentorship opportunities that build practical skills.', impact: '3x higher job offer rates' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">How We Solve These Problems</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our platform addresses the root causes of career uncertainty with personalized, AI-driven solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-6">
                  <solution.icon size={32} />
                </div>
                <h3 className="text-xl font-bold font-montserrat text-foreground mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <div className="bg-secondary/10 p-4">
                  <p className="text-foreground font-medium text-sm">Proven Result:</p>
                  <p className="text-secondary font-bold">{solution.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsSolutions;
