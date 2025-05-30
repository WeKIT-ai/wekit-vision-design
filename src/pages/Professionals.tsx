
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Network, TrendingUp, Target, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

const Professionals = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Accelerate your career growth with strategic guidance from senior professionals and industry leaders.'
    },
    {
      icon: Network,
      title: 'Professional Networking',
      description: 'Build meaningful connections with professionals across industries and expand your career opportunities.'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop clear career strategies and actionable plans to achieve your professional goals.'
    },
    {
      icon: Award,
      title: 'Skill Enhancement',
      description: 'Identify skill gaps and access targeted learning resources to stay competitive in your field.'
    },
    {
      icon: Users,
      title: 'Mentorship Exchange',
      description: 'Both receive mentorship and give back by mentoring others, creating a cycle of professional growth.'
    },
    {
      icon: Briefcase,
      title: 'Industry Insights',
      description: 'Stay updated with industry trends and best practices through expert-led discussions and resources.'
    }
  ];

  const features = [
    'One-on-one mentorship sessions',
    'Group networking events',
    'Professional development workshops',
    'Career transition support',
    'Leadership development programs',
    'Industry-specific guidance',
    'Resume and interview coaching',
    'Personal branding strategies'
  ];

  const careerLevels = [
    {
      title: 'Early Career',
      description: 'Build foundation skills and navigate your first professional roles',
      focus: ['Career exploration', 'Skill building', 'Professional etiquette', 'Goal setting']
    },
    {
      title: 'Mid-Level',
      description: 'Advance to leadership roles and expand your professional influence',
      focus: ['Leadership development', 'Strategic thinking', 'Team management', 'Career pivoting']
    },
    {
      title: 'Senior Level',
      description: 'Maximize your impact and prepare for executive responsibilities',
      focus: ['Executive presence', 'Strategic planning', 'Organizational leadership', 'Legacy building']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Accelerate Your
            <span className="block text-purple-600">Professional Growth</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with industry leaders, develop strategic career plans, and unlock 
            new opportunities through our professional mentorship network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Join Professional Network
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2"
            >
              Explore Mentorship
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Our Professional Network?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides young professionals with the tools, connections, 
              and guidance needed to excel in today's competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Levels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mentorship for Every Career Stage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're just starting out or looking to make your next big career move, 
              we have mentorship programs tailored to your professional level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerLevels.map((level, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {level.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {level.description}
                  </p>
                  <div className="space-y-3">
                    {level.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-purple-500 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Comprehensive Professional Development
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Access a complete suite of professional development resources designed 
                to help you advance your career and achieve your goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Success Metrics
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Career Advancement</span>
                        <span className="font-bold text-purple-600">87%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Salary Increase</span>
                        <span className="font-bold text-purple-600">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Network Growth</span>
                        <span className="font-bold text-purple-600">93%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '93%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Take Your Career to the Next Level?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our professional network and connect with mentors who can help 
            you navigate your career journey and achieve your professional goals.
          </p>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Start Professional Mentorship
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Professionals;
