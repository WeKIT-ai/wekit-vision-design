
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, GraduationCap, Briefcase, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AudienceSection = () => {
  const audiences = [
    {
      title: 'Schools & Educational Institutions',
      description: 'Partner with us to integrate AI-driven mentorship into your curriculum and support your students\' career development.',
      icon: GraduationCap,
      link: '/schools',
    },
    {
      title: 'Students',
      description: 'Access personalized mentorship, upskilling programs, and career roadmaps tailored to your aspirations.',
      icon: Users,
      link: '/students',
    },
    {
      title: 'Young Professionals',
      description: 'Advance your career through networking, skill development, and strategic guidance from industry experts.',
      icon: Briefcase,
      link: '/professionals',
    },
    {
      title: 'NGOs',
      description: 'Collaborate with us to amplify your impact and reach more youth through our mentorship ecosystem.',
      icon: Heart,
      link: '/ngos',
    },
    {
      title: 'Investors',
      description: 'Join us in building the future of youth development through sustainable and scalable solutions.',
      icon: TrendingUp,
      link: '/investors',
    }
  ];

  return (
    <section className="py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Who We
            <br />
            <span className="font-medium">Serve</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Our ecosystem brings together diverse stakeholders united by a common goal: 
            empowering youth to achieve their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group bg-white rounded-xl shadow-lg hover:scale-105"
            >
              <CardContent className="p-12">
                <div className="mb-8">
                  <audience.icon size={48} className="text-gray-900 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-tight">
                  {audience.title}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed font-light">
                  {audience.description}
                </p>
                <Link to={audience.link}>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-900 text-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent rounded-lg font-medium transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
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
