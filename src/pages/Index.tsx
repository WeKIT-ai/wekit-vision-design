
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
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Students',
      description: 'Access personalized mentorship, upskilling programs, and career roadmaps tailored to your aspirations.',
      icon: Users,
      link: '/students',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      title: 'Young Professionals',
      description: 'Advance your career through networking, skill development, and strategic guidance from industry experts.',
      icon: Briefcase,
      link: '/professionals',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      title: 'NGOs',
      description: 'Collaborate with us to amplify your impact and reach more youth through our mentorship ecosystem.',
      icon: Heart,
      link: '/ngos',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600'
    },
    {
      title: 'Investors',
      description: 'Join us in building the future of African youth development through sustainable and scalable solutions.',
      icon: TrendingUp,
      link: '/investors',
      color: 'bg-indigo-50 border-indigo-200',
      iconColor: 'text-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Empowering Africa's
            <span className="block text-blue-600">Next Generation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            We bridge the gap between potential and opportunity through AI-driven mentorship, 
            connecting Africa's youth with the guidance they need to thrive.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Partner with Us
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Building Bridges to Success
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At wekit.ai, we believe every young person deserves access to quality mentorship and guidance. 
            Our AI-powered platform connects students and young professionals with mentors, educational 
            institutions, and opportunities that align with their goals and aspirations.
          </p>
        </div>
      </section>

      {/* Audience Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our ecosystem brings together diverse stakeholders united by a common goal: 
              empowering Africa's youth to achieve their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Card 
                key={index} 
                className={`${audience.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${audience.iconColor} bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <audience.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {audience.description}
                  </p>
                  <Link to={audience.link}>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-white group-hover:shadow-md transition-all duration-300"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our growing ecosystem of mentors, institutions, and organizations 
            dedicated to empowering Africa's next generation of leaders.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
