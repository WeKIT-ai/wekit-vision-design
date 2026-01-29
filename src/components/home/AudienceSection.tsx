import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, GraduationCap, Briefcase, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingElement from '@/components/ui/floating-element';

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
    <section className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingElement className="absolute top-1/4 left-10" color="bg-blue-300" size="lg" speed="slow" />
      <FloatingElement className="absolute bottom-1/4 right-16" color="bg-purple-300" size="md" speed="medium" delay={1} />
      <FloatingElement className="absolute top-1/2 left-1/3" color="bg-green-300" size="sm" speed="fast" delay={2} />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-24 space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight hover:text-blue-600 transition-colors duration-500">
            Who We
            <br />
            <span className="font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-500">Serve</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed hover:text-gray-700 transition-colors duration-300">
            Our ecosystem brings together diverse stakeholders united by a common goal: 
            empowering youth to achieve their full potential.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <Card 
                className="border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl group bg-white rounded-xl shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden h-full"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-12 relative z-10">
                  <div className="mb-8 group-hover:animate-bounce">
                    <audience.icon 
                      size={48} 
                      className="text-gray-900 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" 
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
                    {audience.description}
                  </p>
                  <Link to={audience.link}>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-900 text-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 group/button"
                    >
                      Learn More
                      <ArrowRight className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1" size={16} />
                    </Button>
                  </Link>
                </CardContent>
                
                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
