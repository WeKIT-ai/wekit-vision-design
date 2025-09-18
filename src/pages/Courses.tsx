
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Award, Users, Zap, Gamepad2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const features = [
    {
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals and experienced mentors.',
      icon: BookOpen,
    },
    {
      title: 'Industry Certifications',
      description: 'Earn recognized certifications that boost your career prospects.',
      icon: Award,
    },
    {
      title: 'Peer Learning',
      description: 'Connect with fellow learners and build lasting professional networks.',
      icon: Users,
    },
    {
      title: 'AI-Powered Learning',
      description: 'Personalized learning paths adapted to your goals and pace.',
      icon: Zap,
    },
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
              Courses &
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Unlock your potential with our comprehensive learning platform. From skill development 
              to industry certifications, we provide the tools you need to advance your career.
            </p>
            <div className="pt-8">
              <a 
                href="https://lovable.dev/projects/d35e1f9b-a70c-431e-a387-124d37b10d7a" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Learning Today
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Microlearning Spotlight */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              <Gamepad2 className="w-4 h-4 mr-2" />
              New: Microlearning Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Master Skills in
              <br />
              <span className="text-yellow-300">5-15 Minutes</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Perfect for IGCSE/Cambridge students! Learn essential skills through interactive games, 
              stories, and challenges. Earn badges, compete with friends, and level up your future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Target className="w-5 h-5" />
                <span>6 Skill Pathways</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>Gamified Learning</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span>Collaborative Challenges</span>
              </div>
            </div>
            <Link to="/microlearning">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Try Microlearning Now
                <Gamepad2 className="ml-3" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WeKIT Drone Pilot School Section */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium text-blue-300 mb-4">
                <Target className="w-4 h-4 mr-2" />
                Featured Program
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                WeKIT Drone
                <br />
                <span className="text-yellow-400">Pilot School</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Train to become a certified DGCA drone pilot with our comprehensive 4-week bootcamp. 
                Perfect for minority and underserved youth looking to enter the fast-growing drone industry.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                  <BookOpen className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-medium">40 hrs Theory</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-medium">20 hrs Flying</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-medium">AI Mentorship</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-medium">70%+ Placement</span>
                </div>
              </div>

              {/* Career Paths */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Agriculture</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Logistics</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Defense</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Surveillance</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-8 py-6 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Apply for Drone Pilot School
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </div>

            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Program Impact</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Target Pilots Year 1</span>
                  <span className="text-2xl font-bold text-yellow-400">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Training Duration</span>
                  <span className="text-2xl font-bold text-yellow-400">4 Weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Placement Rate</span>
                  <span className="text-2xl font-bold text-yellow-400">70%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Course Fee</span>
                  <span className="text-2xl font-bold text-yellow-400">₹50K</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-500/20 rounded-lg">
                <p className="text-sm text-blue-200">
                  <strong className="text-white">ESG-Aligned:</strong> Quarterly reporting on placements, 
                  income uplift, and diversity metrics with community outreach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with expert mentorship to deliver 
              an unparalleled learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group bg-white rounded-xl shadow-lg hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <feature.icon size={48} className="text-gray-900 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Learning Paths</h2>
            <p className="text-xl text-gray-600">
              Structured courses designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Technology & Programming</h3>
                  <p className="text-gray-600">
                    Master in-demand programming languages and frameworks with hands-on projects.
                  </p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Web Development</li>
                  <li>• Data Science</li>
                  <li>• Mobile App Development</li>
                  <li>• AI & Machine Learning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Business & Leadership</h3>
                  <p className="text-gray-600">
                    Develop essential business skills and leadership capabilities for career advancement.
                  </p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Project Management</li>
                  <li>• Digital Marketing</li>
                  <li>• Leadership Skills</li>
                  <li>• Entrepreneurship</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Creative & Design</h3>
                  <p className="text-gray-600">
                    Express your creativity through design, multimedia, and digital arts courses.
                  </p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• UI/UX Design</li>
                  <li>• Graphic Design</li>
                  <li>• Video Production</li>
                  <li>• Content Creation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Ready to Transform
            <br />
            <span className="font-medium">Your Future?</span>
          </h2>
          <p className="text-xl text-blue-100 font-light leading-relaxed">
            Join thousands of learners who have already advanced their careers through our platform.
          </p>
          <div className="pt-8">
            <a 
              href="https://lovable.dev/projects/d35e1f9b-a70c-431e-a387-124d37b10d7a" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-12 py-6 text-lg font-medium rounded-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Explore Courses
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
