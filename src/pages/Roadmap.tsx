
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, Star, Users, Target, BookOpen, MessageCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Roadmap = () => {
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Get user name from navigation state if available
    if (location.state?.userName) {
      setUserName(location.state.userName);
    }
  }, [location.state]);

  const roadmapSteps = [
    {
      id: 1,
      title: "Assessment Complete",
      description: "We've analyzed your responses and identified your unique profile",
      status: "completed",
      icon: CheckCircle,
      timeline: "Just completed"
    },
    {
      id: 2,
      title: "Mentor Matching",
      description: "Our AI is finding the perfect mentor match based on your goals",
      status: "in-progress",
      icon: Users,
      timeline: "Within 24 hours"
    },
    {
      id: 3,
      title: "First Session",
      description: "Schedule your initial mentorship session to set your goals",
      status: "upcoming",
      icon: MessageCircle,
      timeline: "2-3 days"
    },
    {
      id: 4,
      title: "Skill Development",
      description: "Access personalized courses and micro-learning modules",
      status: "upcoming",
      icon: BookOpen,
      timeline: "Ongoing"
    },
    {
      id: 5,
      title: "Goal Achievement",
      description: "Work towards your dreams with continuous support and guidance",
      status: "upcoming",
      icon: Target,
      timeline: "3-6 months"
    }
  ];

  const services = [
    {
      title: "1-on-1 Mentorship",
      description: "Connect with industry professionals who understand your journey",
      features: ["Weekly video sessions", "Career guidance", "Industry insights", "Network introductions"],
      status: "Available"
    },
    {
      title: "Skill-Building Courses",
      description: "Access curated learning paths designed for your career goals",
      features: ["Interactive lessons", "Real-world projects", "Certification", "Progress tracking"],
      status: "Coming Soon"
    },
    {
      title: "Peer Community",
      description: "Join a supportive community of like-minded individuals",
      features: ["Discussion forums", "Study groups", "Events & workshops", "Networking opportunities"],
      status: "Available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Your Journey{userName && `, ${userName}`}!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your personalized roadmap to success is ready. Here's what happens next on your path to achieving your dreams.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Personalized Roadmap</h2>
          <div className="space-y-6">
            {roadmapSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.id} className={`relative ${
                  step.status === 'completed' ? 'border-green-300 bg-green-50' :
                  step.status === 'in-progress' ? 'border-blue-300 bg-blue-50' :
                  'border-gray-200'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-100 text-green-600' :
                        step.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            step.status === 'completed' ? 'bg-green-100 text-green-800' :
                            step.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services Available */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Services Available to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-xl mb-6 opacity-90">
              Our team will contact you within 24 hours to schedule your first mentorship session
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/courses')}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Explore Courses
                <BookOpen className="ml-2" size={16} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/about')}
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Questions? Contact us at{' '}
            <a href="mailto:support@wekit.com" className="text-blue-600 hover:underline">
              support@wekit.com
            </a>
            {' '}or call{' '}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              (123) 456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
