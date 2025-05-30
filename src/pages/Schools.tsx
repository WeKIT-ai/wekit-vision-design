
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, BarChart3, Award, ArrowRight, AlertTriangle, TrendingDown, Clock } from 'lucide-react';
import DemoRequestForm from '@/components/lead-gen/DemoRequestForm';
import ContactForm from '@/components/lead-gen/ContactForm';
import PartnershipInquiry from '@/components/lead-gen/PartnershipInquiry';
import NewsletterSignup from '@/components/lead-gen/NewsletterSignup';
import EarlyAccessForm from '@/components/lead-gen/EarlyAccessForm';

const Schools = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Poor Career Outcomes',
      problem: 'Only 41% of graduates find jobs in their field within 6 months',
      solution: 'Our AI-powered mentorship increases job placement rates by 73%'
    },
    {
      icon: AlertTriangle,
      title: 'Student Disengagement',
      problem: '68% of students feel disconnected from their career goals',
      solution: 'Connect students with industry mentors who provide real-world context and motivation'
    },
    {
      icon: Clock,
      title: 'Limited Resources',
      problem: 'Career counselors manage 400+ students each, limiting individual attention',
      solution: 'Scale personalized guidance with AI-driven mentor matching and 24/7 support'
    }
  ];

  const solutions = [
    {
      icon: Users,
      title: 'AI-Powered Mentor Matching',
      description: 'Automatically connect students with industry professionals based on career goals, skills, and interests.',
      impact: '3x increase in meaningful mentor connections'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Career Analytics',
      description: 'Track student progress, identify at-risk learners, and measure career outcome improvements.',
      impact: '85% improvement in career services effectiveness'
    },
    {
      icon: Award,
      title: 'Industry-Integrated Learning',
      description: 'Bridge academic learning with real-world skills through mentorship and practical projects.',
      impact: '67% increase in graduate employability'
    }
  ];

  const features = [
    'Automated mentor-student matching',
    'Career pathway tracking dashboard',
    'Industry skills gap analysis',
    'Alumni network integration',
    'Professional development workshops',
    'Employment outcome analytics'
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section - Problem-Focused */}
      <section className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight">
              Bridge the Gap Between
              <br />
              <span className="font-medium text-red-600">Education & Employment</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
              Address the growing disconnect between academic achievement and career success. 
              Our AI-driven platform ensures your graduates are job-ready and industry-connected.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg text-red-800 font-medium">
                <strong>The Crisis:</strong> 60% of employers say recent graduates lack job-ready skills, 
                while 73% of students feel unprepared for the workforce.
              </p>
            </div>
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-none border-0 shadow-none hover:shadow-none"
              >
                See Our Solution
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Problems We
              <br />
              <span className="font-medium text-red-600">Solve</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Educational institutions face unprecedented challenges in preparing students for modern careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((item, index) => (
              <Card key={index} className="border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg bg-white rounded-none shadow-none">
                <CardContent className="p-12">
                  <div className="mb-8">
                    <item.icon size={48} className="text-red-600 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                      <p className="text-red-800 font-medium text-sm">Problem:</p>
                      <p className="text-red-700">{item.problem}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                      <p className="text-green-800 font-medium text-sm">Our Solution:</p>
                      <p className="text-green-700">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Gen Section 1 - Quick Access Forms */}
      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Solving These Problems Today</h2>
            <p className="text-xl text-gray-600">See how our platform can transform your student outcomes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DemoRequestForm />
            </div>
            <div className="space-y-6">
              <NewsletterSignup />
              <EarlyAccessForm />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Our
              <br />
              <span className="font-medium text-green-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Comprehensive tools that address the root causes of poor career outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg bg-white rounded-none shadow-none">
                <CardContent className="p-12 text-center">
                  <div className="mb-8">
                    <solution.icon size={48} className="text-green-600 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-green-800 font-medium text-sm">Proven Impact:</p>
                    <p className="text-green-700 font-bold">{solution.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Impact Section */}
      <section className="py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                Measurable
                <br />
                <span className="font-medium text-blue-600">Impact</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Don't just take our word for it. See the concrete results our partner institutions achieve.
              </p>
              <div className="space-y-6 pt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Graduate Employment Rate</span>
                    <span className="text-2xl font-bold text-green-600">+47%</span>
                  </div>
                  <p className="text-sm text-gray-500">From 53% to 78% within first year</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Student Engagement</span>
                    <span className="text-2xl font-bold text-blue-600">+65%</span>
                  </div>
                  <p className="text-sm text-gray-500">Higher participation in career services</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Industry Partnerships</span>
                    <span className="text-2xl font-bold text-purple-600">+200%</span>
                  </div>
                  <p className="text-sm text-gray-500">More companies engaged with students</p>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Section 2 - Partnership Focus */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Student Outcomes?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss how we can solve your specific career services challenges.
            </p>
          </div>
          <PartnershipInquiry />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Stop Accepting Poor
            <br />
            <span className="font-medium text-red-600">Career Outcomes</span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Your students deserve better than a 41% job placement rate. 
            Partner with us to ensure every graduate is career-ready and industry-connected.
          </p>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-none border-0 shadow-none hover:shadow-none"
            >
              Schedule Impact Assessment
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;
