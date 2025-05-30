
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
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight">
              Transform Your
              <br />
              <span className="font-medium">Students' Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed">
              Partner with wekit.ai to provide your students with AI-driven mentorship, 
              career guidance, and industry connections that prepare them for success.
            </p>
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-none border-0 shadow-none hover:shadow-none"
              >
                Schedule a Demo
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Why Partner
              <br />
              <span className="font-medium">with Us?</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Our platform helps educational institutions enhance student outcomes 
              and prepare graduates for the modern workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg bg-white rounded-none shadow-none">
                <CardContent className="p-12 text-center">
                  <div className="mb-8">
                    <benefit.icon size={48} className="text-gray-900 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                Comprehensive
                <br />
                <span className="font-medium">Platform</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Our platform provides everything your institution needs to support 
                student career development and professional growth.
              </p>
              <div className="space-y-6 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="text-gray-900 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-light text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-12">
              <Card className="border border-gray-200 bg-white rounded-none shadow-none">
                <CardContent className="p-12">
                  <h3 className="text-3xl font-medium text-gray-900 mb-8 leading-tight">
                    Request Partnership
                    <br />
                    Information
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input placeholder="Institution Name" className="rounded-none border-gray-200 p-4 text-lg font-light" />
                      <Input placeholder="Your Name" className="rounded-none border-gray-200 p-4 text-lg font-light" />
                    </div>
                    <Input placeholder="Email Address" type="email" className="rounded-none border-gray-200 p-4 text-lg font-light" />
                    <Input placeholder="Phone Number" type="tel" className="rounded-none border-gray-200 p-4 text-lg font-light" />
                    <Textarea 
                      placeholder="Tell us about your institution and how you'd like to partner with us" 
                      rows={4}
                      className="rounded-none border-gray-200 p-4 text-lg font-light resize-none"
                    />
                    <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-medium rounded-none border-0 shadow-none hover:shadow-none">
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
      <section className="py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Ready to Transform
            <br />
            <span className="font-medium">Student Outcomes?</span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Join leading educational institutions worldwide that are already 
            empowering their students through our mentorship platform.
          </p>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-none border-0 shadow-none hover:shadow-none"
            >
              Start Partnership Discussion
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;
