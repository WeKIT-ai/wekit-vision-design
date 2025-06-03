import { ArrowRight, BookOpen, Users, Target, Star, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import EarlyAccessForm from '@/components/lead-gen/EarlyAccessForm';
import NewsletterSignup from '@/components/lead-gen/NewsletterSignup';
import SystemCheck from '@/components/SystemCheck';

const Index = () => {
  console.log('Index page rendered - system is responsive to changes');

  const features = [
    {
      icon: BookOpen,
      title: 'AI-Powered Assessments',
      description: 'Discover your unique strengths and career potential through our advanced psychometric evaluations.',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Connect with industry professionals who guide your journey toward meaningful career success.',
    },
    {
      icon: Target,
      title: 'Personalized Roadmaps',
      description: 'Get customized career pathways designed specifically for your goals and circumstances.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Student',
      content: 'We-KIT helped me discover my passion for environmental science and connected me with amazing mentors.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Parent',
      content: 'The platform gave my daughter clarity about her future and the confidence to pursue her dreams.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Educator',
      content: 'As a school counselor, I recommend We-KIT to students who need personalized career guidance.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Students Guided' },
    { number: '500+', label: 'Expert Mentors' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Career Paths' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-20">
          <div className="text-center space-y-12">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight">
              Unlock Your
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Career Potential
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              AI-powered career guidance platform that matches young talent with expert mentors 
              and personalized development pathways for meaningful career success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a 
                href="https://lovable.dev/projects/d35e1f9b-a70c-431e-a387-124d37b10d7a" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Take Free Assessment
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </a>
              <a 
                href="https://calendly.com/yvonne-roberts/wekit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-6 text-lg font-medium rounded-full transition-all duration-300"
                >
                  Schedule a Call
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Transform Careers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge AI with human expertise to guide your career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <feature.icon size={32} className="text-gray-900" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Status Check - Temporary for debugging */}
      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SystemCheck />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
            <p className="text-xl text-gray-600">What our users have to say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100">
                    <img 
                      src="https://via.placeholder.com/128" 
                      alt="Testimonial Avatar"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 ml-2">({testimonial.rating}/5)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access CTA Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Be among the first to experience YOMA and our AI-powered mentorship platform</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <EarlyAccessForm />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Mountain landscape representing growth and achievement"
            className="w-full h-full object-cover opacity-20 transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80"></div>
          {/* Animated overlay elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Building Bridges
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">to Success</span>
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            At wekit.ai, we believe every young person deserves access to quality mentorship and guidance. 
            Our AI-powered platform connects students and young professionals with mentors, educational 
            institutions, and opportunities that align with their goals and aspirations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
