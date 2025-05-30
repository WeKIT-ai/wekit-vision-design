
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Target, TrendingUp, BookOpen, Users, Award, ArrowRight, AlertTriangle, Clock, DollarSign } from 'lucide-react';

const Students = () => {
  const studentProblems = [
    {
      icon: AlertTriangle,
      title: 'Career Direction Confusion',
      problem: '73% of students feel uncertain about their career path',
      solution: 'AI-powered career matching based on your skills, interests, and market demand'
    },
    {
      icon: Clock,
      title: 'Lack of Industry Experience',
      problem: 'Limited real-world exposure makes job applications challenging',
      solution: 'Connect with industry mentors for practical insights and project guidance'
    },
    {
      icon: DollarSign,
      title: 'Skills-Jobs Mismatch',
      problem: '65% of graduates lack skills employers actually need',
      solution: 'Personalized skill development roadmaps aligned with industry requirements'
    }
  ];

  const solutions = [
    {
      icon: User,
      title: 'AI-Powered Career Guidance',
      description: 'Get matched with mentors and career paths that align with your unique profile and aspirations.',
      impact: 'Students find career clarity 4x faster'
    },
    {
      icon: Target,
      title: 'Personalized Learning Paths',
      description: 'Receive customized skill development plans based on your career goals and current market needs.',
      impact: '89% skill-job match rate for graduates'
    },
    {
      icon: TrendingUp,
      title: 'Real-World Experience',
      description: 'Access industry projects, internships, and mentorship opportunities that build practical skills.',
      impact: '3x higher job offer rates'
    }
  ];

  const successMetrics = [
    { metric: 'Job Placement Rate', value: '94%', description: 'within 6 months of graduation' },
    { metric: 'Salary Increase', value: '+38%', description: 'compared to non-mentored peers' },
    { metric: 'Career Satisfaction', value: '92%', description: 'report being in their ideal role' }
  ];

  const steps = [
    {
      number: '01',
      title: 'Complete Career Assessment',
      description: 'AI analyzes your skills, interests, and goals to identify optimal career paths.'
    },
    {
      number: '02',
      title: 'Get Matched with Mentors',
      description: 'Connect with industry professionals who can guide your specific journey.'
    },
    {
      number: '03',
      title: 'Follow Your Roadmap',
      description: 'Complete personalized learning and experience milestones toward your goals.'
    },
    {
      number: '04',
      title: 'Land Your Dream Job',
      description: 'Leverage your new skills, experience, and network to secure ideal positions.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Problem-Focused */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Stop Graduating Into
            <span className="block text-red-600">Uncertainty</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            You're not alone if you feel unprepared for the job market. 68% of students graduate 
            without clear career direction or job-ready skills. We change that.
          </p>
          <div className="bg-red-100 border border-red-300 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <p className="text-lg text-red-800">
              <strong>The Reality:</strong> Average job search takes 6+ months. 
              Our students land offers in under 3 months.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Start Your Success Story
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2"
            >
              See Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Problems Every Student Faces
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These aren't your fault – they're systemic issues with how education 
              prepares students for modern careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentProblems.map((item, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {item.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                      <p className="text-red-800 font-medium text-sm">The Problem:</p>
                      <p className="text-red-700 text-sm">{item.problem}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                      <p className="text-green-800 font-medium text-sm">Our Solution:</p>
                      <p className="text-green-700 text-sm">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Solve These Problems
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform addresses the root causes of career uncertainty with 
              personalized, AI-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <solution.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-green-800 font-medium text-sm">Proven Result:</p>
                    <p className="text-green-700 font-bold">{solution.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Results Speak for Themselves
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it – see the measurable impact on student careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="border-2 border-green-200 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.metric}</h3>
                  <p className="text-gray-600">{metric.description}</p>
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
              Your Path from Confusion to Career Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow our proven 4-step process that's helped thousands of students 
              land their dream jobs.
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Stop Feeling Lost About Your Future
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students who went from career confusion to landing 
            their dream jobs. Your success story starts today.
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Start Your Career Transformation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Students;
