
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, GraduationCap, Briefcase, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight">
              Empowering the
              <br />
              <span className="font-medium">Next Generation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between potential and opportunity through AI-driven mentorship, 
              connecting youth with the guidance they need to thrive.
            </p>
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-none border-0 shadow-none hover:shadow-none"
              >
                Partner with Us
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Building Bridges
            <br />
            <span className="font-medium">to Success</span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
            At wekit.ai, we believe every young person deserves access to quality mentorship and guidance. 
            Our AI-powered platform connects students and young professionals with mentors, educational 
            institutions, and opportunities that align with their goals and aspirations.
          </p>
        </div>
      </section>

      {/* Audience Sections */}
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
                className="border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group bg-white rounded-none shadow-none"
              >
                <CardContent className="p-12">
                  <div className="mb-8">
                    <audience.icon size={48} className="text-gray-900" />
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
                      className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none font-medium transition-all duration-300"
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

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Ready to Make
            <br />
            <span className="font-medium">an Impact?</span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Join our growing ecosystem of mentors, institutions, and organizations 
            dedicated to empowering the next generation of leaders.
          </p>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-none border-0 shadow-none hover:shadow-none"
            >
              Get Started Today
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
