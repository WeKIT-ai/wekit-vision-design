
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Network, TrendingUp, Target, Users, Award, ArrowRight, CheckCircle, BarChart, Clock, AlertTriangle } from 'lucide-react';

const Professionals = () => {
  const careerChallenges = [
    {
      icon: BarChart,
      title: 'Career Stagnation',
      problem: '47% of professionals feel stuck in their current role with no clear advancement path',
      solution: 'Strategic career planning with senior mentors who\'ve navigated similar transitions'
    },
    {
      icon: Network,
      title: 'Limited Professional Network',
      problem: '73% cite networking as their biggest career obstacle',
      solution: 'Access to curated industry networks and mentorship connections'
    },
    {
      icon: Clock,
      title: 'Skill Obsolescence',
      problem: 'Skills become outdated every 2-5 years in fast-moving industries',
      solution: 'Continuous learning roadmaps aligned with industry evolution'
    }
  ];

  const solutions = [
    {
      icon: TrendingUp,
      title: 'Strategic Career Acceleration',
      description: 'Get personalized guidance from senior professionals who\'ve achieved the success you\'re targeting.',
      impact: '3x faster promotion rates',
      details: ['Executive mentorship', 'Leadership development', 'Strategic planning']
    },
    {
      icon: Network,
      title: 'Professional Network Expansion',
      description: 'Build meaningful connections across industries through structured networking and mentorship exchanges.',
      impact: '250% network growth average',
      details: ['Industry introductions', 'Peer mentoring circles', 'Executive access']
    },
    {
      icon: Target,
      title: 'Skills Future-Proofing',
      description: 'Stay ahead of industry changes with targeted skill development and continuous learning programs.',
      impact: '85% report increased job security',
      details: ['Skills gap analysis', 'Learning pathways', 'Industry insights']
    }
  ];

  const careerLevels = [
    {
      title: 'Early Career (0-3 years)',
      challenge: 'Building foundation skills and proving value',
      solution: 'Structured mentorship for rapid skill acquisition',
      outcomes: ['Faster skill development', 'Clear career direction', 'Increased confidence']
    },
    {
      title: 'Mid-Level (3-8 years)', 
      challenge: 'Breaking into leadership and expanding influence',
      solution: 'Leadership development and strategic thinking training',
      outcomes: ['Leadership promotions', 'Expanded responsibilities', 'Higher visibility']
    },
    {
      title: 'Senior Level (8+ years)',
      challenge: 'Maximizing impact and preparing for executive roles',
      solution: 'Executive coaching and organizational leadership',
      outcomes: ['C-suite readiness', 'Board positions', 'Industry recognition']
    }
  ];

  const successStories = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer → Tech Director',
      challenge: 'Felt stuck in technical role, wanted leadership position',
      solution: 'Matched with CTO mentor for leadership development',
      outcome: 'Promoted to Tech Director in 18 months, 67% salary increase'
    },
    {
      name: 'Marcus Johnson',
      role: 'Marketing Manager → VP Marketing',
      challenge: 'Lacked strategic business perspective for VP role',
      solution: 'Executive mentorship program with Fortune 500 CMO',
      outcome: 'Landed VP role at competitor, leading team of 45'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Project Manager → Entrepreneur',
      challenge: 'Wanted to start own business but lacked guidance',
      solution: 'Entrepreneur mentorship and investor network access',
      outcome: 'Launched successful startup, raised $2M Series A'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Problem-Focused */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Break Through the
            <span className="block text-red-600">Career Ceiling</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            You're talented, hardworking, and ambitious. So why does career advancement feel impossible? 
            You're not alone – 67% of professionals feel stuck despite their best efforts.
          </p>
          <div className="bg-red-100 border border-red-300 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <p className="text-lg text-red-800">
              <strong>The Hidden Truth:</strong> 85% of career advancement happens through relationships and guidance, 
              not just performance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Accelerate My Career
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

      {/* Career Challenges Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Career Advancement Roadblocks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These aren't personal failings – they're systematic challenges that require strategic solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerChallenges.map((challenge, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <challenge.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {challenge.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                      <p className="text-red-800 font-medium text-sm">The Challenge:</p>
                      <p className="text-red-700 text-sm">{challenge.problem}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                      <p className="text-purple-800 font-medium text-sm">Our Solution:</p>
                      <p className="text-purple-700 text-sm">{challenge.solution}</p>
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
              How We Accelerate Your Career
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven methodology combines mentorship, networking, and strategic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <solution.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {solution.description}
                  </p>
                  <div className="bg-purple-50 p-4 rounded mb-4">
                    <p className="text-purple-800 font-medium text-sm text-center">Proven Impact:</p>
                    <p className="text-purple-700 font-bold text-center">{solution.impact}</p>
                  </div>
                  <div className="space-y-2">
                    {solution.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-purple-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Level Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Career Stage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're building foundations or reaching for the C-suite, 
              we have targeted programs for your level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerLevels.map((level, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {level.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded">
                      <p className="text-red-800 font-medium text-sm mb-1">Common Challenge:</p>
                      <p className="text-red-700 text-sm">{level.challenge}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded">
                      <p className="text-purple-800 font-medium text-sm mb-1">Our Approach:</p>
                      <p className="text-purple-700 text-sm">{level.solution}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-800 font-medium text-sm">Typical Outcomes:</p>
                      {level.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Professionals, Real Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how professionals like you broke through career barriers with strategic mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                    <p className="text-purple-600 font-medium">{story.role}</p>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-red-800 font-medium mb-1">Challenge:</p>
                      <p className="text-red-700">{story.challenge}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="text-purple-800 font-medium mb-1">Solution:</p>
                      <p className="text-purple-700">{story.solution}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-green-800 font-medium mb-1">Outcome:</p>
                      <p className="text-green-700 font-bold">{story.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Stop Waiting for Your Career to "Just Happen"
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join professionals who took control of their career trajectory and 
            achieved the success they deserved through strategic mentorship.
          </p>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Start Your Career Acceleration
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Professionals;
