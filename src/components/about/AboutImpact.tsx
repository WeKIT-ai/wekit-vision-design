
import { Users, Award, Globe, Target } from 'lucide-react';

const AboutImpact = () => {
  const stats = [
    { number: "10,000+", label: "Students Mentored", icon: Users },
    { number: "500+", label: "Professional Mentors", icon: Award },
    { number: "50+", label: "Partner Schools", icon: Globe },
    { number: "95%", label: "Success Rate", icon: Target }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-wekit-soft">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-montserrat text-center text-foreground mb-16">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-card p-8 shadow-sm text-center hover:shadow-lg transition-shadow border border-border/60">
                <Icon className="w-12 h-12 mx-auto mb-4 text-wekit-teal" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutImpact;
