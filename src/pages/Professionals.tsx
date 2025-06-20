
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
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3000ms] ease-out"
            src="https://www.youtube.com/embed/8t34Mhbl-Uk?autoplay=1&mute=1&loop=1&playlist=8t34Mhbl-Uk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
            title="Professional Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: -1
            }}
          ></iframe>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70 z-10 animate-fade-in"></div>
          
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-20 animate-[slideDown_1s_ease-out]"></div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-[float_3s_ease-in-out_infinite] opacity-70 z-25"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-[float_4s_ease-in-out_infinite_1s] opacity-60 z-25"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-red-400 rounded-full animate-[float_5s_ease-in-out_infinite_2s] opacity-50 z-25"></div>

        {/* Hero Content */}
        <div className="relative z-30 max-w-7xl mx-auto text-center flex items-center justify-center min-h-[80vh]">
          <div className="space-y-8 animate-[slideUp_1s_ease-out]">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl animate-[zoomIn_1.2s_ease-out] hover:animate-pulse transition-all duration-300">
              Break Through the
              <span className="block text-red-400 drop-shadow-2xl animate-[slideLeft_1.5s_ease-out] hover:text-red-300 transition-colors duration-300">Career Ceiling</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8 drop-shadow-lg leading-relaxed animate-[slideRight_1.8s_ease-out]">
              You're talented, hardworking, and ambitious. So why does career advancement feel impossible? 
              You're not alone – 67% of professionals feel stuck despite their best efforts.
            </p>
            <div className="bg-red-500/90 backdrop-blur-sm border border-red-400 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-2xl animate-[zoomIn_2s_ease-out] hover:bg-red-500/95 hover:scale-105 transition-all duration-300">
              <p className="text-lg text-white drop-shadow-sm">
                <strong>The Hidden Truth:</strong> 85% of career advancement happens through relationships and guidance, 
                not just performance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[slideUp_2.2s_ease-out]">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-pulse hover:animate-none"
              >
                Accelerate My Career
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                See Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Career Challenges Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-[slideUp_0.8s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
              The Career Advancement Roadblocks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
              These aren't personal failings – they're systematic challenges that require strategic solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerChallenges.map((challenge, index) => (
              <Card 
                key={index} 
                className={`border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-[slideUp_0.8s_ease-out_${index * 0.2}s_both]`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <challenge.icon size={32} className="group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-red-600 transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded border-l-4 border-red-500 hover:bg-red-100 transition-colors duration-300 transform hover:translate-x-1">
                      <p className="text-red-800 font-medium text-sm">The Challenge:</p>
                      <p className="text-red-700 text-sm">{challenge.problem}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500 hover:bg-purple-100 transition-colors duration-300 transform hover:translate-x-1">
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
          <div className="text-center mb-16 animate-[slideUp_0.8s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
              How We Accelerate Your Career
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
              Our proven methodology combines mentorship, networking, and strategic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className={`border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-[slideUp_0.8s_ease-out_${index * 0.2}s_both]`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <solution.icon size={32} className="group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {solution.description}
                  </p>
                  <div className="bg-purple-50 p-4 rounded mb-4 hover:bg-purple-100 transition-colors duration-300 transform hover:scale-105">
                    <p className="text-purple-800 font-medium text-sm text-center">Proven Impact:</p>
                    <p className="text-purple-700 font-bold text-center animate-pulse">{solution.impact}</p>
                  </div>
                  <div className="space-y-2">
                    {solution.details.map((detail, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300 animate-[slideLeft_0.5s_ease-out_${idx * 0.1}s_both]`}
                      >
                        <CheckCircle className="text-purple-500 flex-shrink-0 hover:animate-spin transition-transform duration-300" size={16} />
                        <span className="text-gray-700 text-sm hover:text-purple-600 transition-colors duration-300">{detail}</span>
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
          <div className="text-center mb-16 animate-[slideUp_0.8s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
              Solutions for Every Career Stage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
              Whether you're building foundations or reaching for the C-suite, 
              we have targeted programs for your level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerLevels.map((level, index) => (
              <Card 
                key={index} 
                className={`border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-[slideUp_0.8s_ease-out_${index * 0.2}s_both]`}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {level.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded hover:bg-red-100 transition-colors duration-300 transform hover:translate-x-1">
                      <p className="text-red-800 font-medium text-sm mb-1">Common Challenge:</p>
                      <p className="text-red-700 text-sm">{level.challenge}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded hover:bg-purple-100 transition-colors duration-300 transform hover:translate-x-1">
                      <p className="text-purple-800 font-medium text-sm mb-1">Our Approach:</p>
                      <p className="text-purple-700 text-sm">{level.solution}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-800 font-medium text-sm">Typical Outcomes:</p>
                      {level.outcomes.map((outcome, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300 animate-[slideLeft_0.5s_ease-out_${idx * 0.1}s_both]`}
                        >
                          <CheckCircle className="text-green-500 flex-shrink-0 hover:animate-spin transition-transform duration-300" size={16} />
                          <span className="text-gray-700 text-sm hover:text-green-600 transition-colors duration-300">{outcome}</span>
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
          <div className="text-center mb-16 animate-[slideUp_0.8s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
              Real Professionals, Real Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
              See how professionals like you broke through career barriers with strategic mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card 
                key={index} 
                className={`border-2 border-gray-100 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-[slideUp_0.8s_ease-out_${index * 0.2}s_both]`}
              >
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:animate-pulse">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{story.name}</h3>
                    <p className="text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-300">{story.role}</p>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="bg-red-50 p-3 rounded hover:bg-red-100 transition-colors duration-300 transform hover:translate-x-1">
                      <p className="text-red-800 font-medium mb-1">Challenge:</p>
                      <p className="text-red-700">{story.challenge}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded hover:bg-purple-100 transition-colors duration-300 transform hover:translate-x-1">
                      <p className="text-purple-800 font-medium mb-1">Solution:</p>
                      <p className="text-purple-700">{story.solution}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded hover:bg-green-100 transition-colors duration-300 transform hover:translate-x-1 hover:scale-105">
                      <p className="text-green-800 font-medium mb-1">Outcome:</p>
                      <p className="text-green-700 font-bold animate-pulse group-hover:animate-none">{story.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 hover:text-purple-600 transition-colors duration-300">
            Stop Waiting for Your Career to "Just Happen"
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Join professionals who took control of their career trajectory and 
            achieved the success they deserved through strategic mentorship.
          </p>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 animate-pulse hover:animate-none"
          >
            Start Your Career Acceleration
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Button>
        </div>
        
        {/* Floating Background Elements */}
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-purple-300 rounded-full animate-[float_4s_ease-in-out_infinite] opacity-30"></div>
        <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-blue-300 rounded-full animate-[float_5s_ease-in-out_infinite_1s] opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-red-300 rounded-full animate-[float_6s_ease-in-out_infinite_2s] opacity-25"></div>
      </section>
    </div>
  );
};

export default Professionals;
