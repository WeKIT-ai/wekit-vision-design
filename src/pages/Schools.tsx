
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Users, BarChart3, Award, ArrowRight } from 'lucide-react';

const Schools = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Enhanced Student Engagement',
      description: 'Connect your students with industry professionals and career mentors to boost motivation and engagement.'
    },
    {
      icon: BarChart3,
      title: 'Improved Career Outcomes',
      description: 'Track and measure student career progression with our comprehensive analytics and reporting tools.'
    },
    {
      icon: Award,
      title: 'Curriculum Integration',
      description: 'Seamlessly integrate mentorship programs into your existing curriculum and educational framework.'
    }
  ];

  const features = [
    'AI-powered mentor matching',
    'Real-time progress tracking',
    'Career pathway guidance',
    'Industry partnerships',
    'Professional development workshops',
    'Alumni network integration'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Transform Your Students'
              <span className="block text-blue-600">Career Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Partner with wekit.ai to provide your students with AI-driven mentorship, 
              career guidance, and industry connections that prepare them for success.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Schedule a Demo
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform helps educational institutions enhance student outcomes 
              and prepare graduates for the modern workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Comprehensive Mentorship Platform
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform provides everything your institution needs to support 
                student career development and professional growth.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Request Partnership Information
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Institution Name" />
                      <Input placeholder="Your Name" />
                    </div>
                    <Input placeholder="Email Address" type="email" />
                    <Input placeholder="Phone Number" type="tel" />
                    <Textarea 
                      placeholder="Tell us about your institution and how you'd like to partner with us" 
                      rows={4}
                    />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Send Partnership Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Transform Student Outcomes?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join leading educational institutions across Africa that are already 
            empowering their students through our mentorship platform.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Start Partnership Discussion
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Schools;
