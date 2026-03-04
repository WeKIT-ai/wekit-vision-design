import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, GraduationCap, Briefcase, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AudienceSection = () => {
  const audiences = [
    { title: 'Schools & Educational Institutions', description: 'Partner with us to integrate AI-driven mentorship into your curriculum.', icon: GraduationCap, link: '/schools' },
    { title: 'Students', description: 'Access personalized mentorship, upskilling programs, and career roadmaps.', icon: Users, link: '/students' },
    { title: 'Young Professionals', description: 'Advance your career through networking, skill development, and strategic guidance.', icon: Briefcase, link: '/professionals' },
    { title: 'NGOs', description: 'Collaborate with us to amplify your impact and reach more youth.', icon: Heart, link: '/ngos' },
    { title: 'Investors', description: 'Join us in building the future of youth development through sustainable solutions.', icon: TrendingUp, link: '/investors' }
  ];

  return (
    <section className="relative py-32 px-6 md:px-8 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground leading-tight">
            Who We
            <br />
            <span className="text-wekit-teal">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our ecosystem brings together diverse stakeholders united by a common goal: 
            empowering youth to achieve their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="border border-border/60 hover:shadow-lg transition-all duration-300 group bg-card overflow-hidden h-full"
            >
              <CardContent className="p-10 relative z-10">
                <div className="mb-8">
                  <audience.icon size={40} className="text-foreground group-hover:text-wekit-teal transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-semibold font-montserrat text-foreground mb-4 leading-tight group-hover:text-wekit-teal transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {audience.description}
                </p>
                <Link to={audience.link}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium transition-all duration-300 group/button"
                  >
                    Learn More
                    <ArrowRight className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
