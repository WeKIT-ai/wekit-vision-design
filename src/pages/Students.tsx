
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Target, TrendingUp, BookOpen, Users, Award, ArrowRight } from 'lucide-react';

const Students = () => {
  const features = [
    {
      icon: User,
      title: 'Personalized Mentorship',
      description: 'Get matched with mentors who understand your goals and can guide your career journey.'
    },
    {
      icon: Target,
      title: 'Career Roadmaps',
      description: 'Receive customized career pathways with clear milestones and actionable steps.'
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Access curated learning resources and upskilling programs aligned with industry needs.'
    },
    {
      icon: BookOpen,
      title: 'Educational Support',
      description: 'Get academic guidance and study strategies to excel in your current programs.'
    },
    {
      icon: Users,
      title: 'Peer Community',
      description: 'Connect with like-minded students and build valuable professional networks.'
    },
    {
      icon: Award,
      title: 'Achievement Tracking',
      description: 'Monitor your progress and celebrate milestones on your journey to success.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Tell us about your goals, interests, and career aspirations.'
    },
    {
      number: '02',
      title: 'Get Matched',
      description: 'Our AI connects you with the perfect mentor and learning resources.'
    },
    {
      number: '03',
      title: 'Start Your Journey',
      description: 'Begin your personalized mentorship and skill development program.'
    },
    {
      number: '04',
      title: 'Achieve Your Goals',
      description: 'Track progress and celebrate achievements as you grow professionally.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Your Journey to
            <span className="block text-green-600">Success Starts Here</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access personalized mentorship, develop in-demand skills, and build the career 
            you've always dreamed of with guidance from industry professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Start Free Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and support 
              you need to achieve your career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started is simple. Follow these four easy steps to begin 
              your journey toward career success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how students like you are achieving their career goals 
              through our mentorship platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amara Okafor',
                role: 'Computer Science Student',
                achievement: 'Landed internship at major tech company',
                quote: 'The mentorship I received helped me understand the tech industry and prepare for interviews.'
              },
              {
                name: 'Kwame Asante',
                role: 'Business Student',
                achievement: 'Started successful e-commerce business',
                quote: 'My mentor guided me through the entrepreneurship journey and helped me avoid common mistakes.'
              },
              {
                name: 'Fatima Ahmed',
                role: 'Engineering Student',
                achievement: 'Received scholarship for advanced studies',
                quote: 'The career roadmap showed me exactly what steps to take to achieve my academic goals.'
              }
            ].map((story, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                    <p className="text-green-600 font-medium">{story.role}</p>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{story.quote}"</p>
                  <p className="text-sm font-medium text-gray-900">{story.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students who are already building their dream careers 
            with personalized mentorship and guidance.
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Get Started for Free
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Students;
