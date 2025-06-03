
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, GraduationCap, Briefcase, Heart, TrendingUp, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSignup from '@/components/lead-gen/NewsletterSignup';
import ContactForm from '@/components/lead-gen/ContactForm';
import DemoRequestForm from '@/components/lead-gen/DemoRequestForm';
import MentorSignup from '@/components/lead-gen/MentorSignup';
import EarlyAccessForm from '@/components/lead-gen/EarlyAccessForm';

const Index = () => {
  const audiences = [
    {
      title: 'Schools & Educational Institutions',
      description: 'Partner with us to integrate AI-driven mentorship into your curriculum and support your students\' career development.',
      icon: GraduationCap,
      link: '/schools',
    },
    {
      title: 'Students',
      description: 'Access personalized mentorship, upskilling programs, and career roadmaps tailored to your aspirations.',
      icon: Users,
      link: '/students',
    },
    {
      title: 'Young Professionals',
      description: 'Advance your career through networking, skill development, and strategic guidance from industry experts.',
      icon: Briefcase,
      link: '/professionals',
    },
    {
      title: 'NGOs',
      description: 'Collaborate with us to amplify your impact and reach more youth through our mentorship ecosystem.',
      icon: Heart,
      link: '/ngos',
    },
    {
      title: 'Investors',
      description: 'Join us in building the future of youth development through sustainable and scalable solutions.',
      icon: TrendingUp,
      link: '/investors',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Enhanced Video Background */}
      <section className="relative pt-32 pb-24 px-6 md:px-8 overflow-hidden">
        {/* Background Video - Ready for your Canva video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
            poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          >
            {/* Placeholder for your Canva video - replace src with your uploaded video file */}
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-purple-50/90"></div>
        </div>

        {/* Enhanced Floating Video Elements */}
        <div className="absolute top-20 right-10 hidden lg:block z-10">
          <div className="relative group cursor-pointer">
            <div className="w-40 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25">
              <Play className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-bounce shadow-lg"></div>
          </div>
        </div>

        <div className="absolute bottom-20 left-10 hidden lg:block z-10">
          <div className="relative group cursor-pointer">
            <div className="w-36 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-green-500/25">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional floating elements for more dynamic feel */}
        <div className="absolute top-1/2 right-1/4 hidden xl:block z-10">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 opacity-80">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-20">
          <div className="text-center space-y-12">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight animate-fade-in">
              Mentoring the Future.
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powered by AI.
              </span>
              <br />
              <span className="font-medium text-gray-700">
                Driven by Purpose.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in">
              We bridge the gap between potential and opportunity through AI-driven mentorship, 
              connecting youth with the guidance they need to thrive in tomorrow's world.
            </p>
            <div className="pt-8 animate-fade-in">
              <a 
                href="https://lovable.dev/projects/37808d26-fa03-45a3-a188-a2da90bcd27e" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Partner with Us
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Dynamic Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400/15 to-orange-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </section>

      {/* Enhanced Visual Impact Section with Video Elements */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transforming Lives Through Technology</h2>
            <p className="text-xl text-gray-600">Where innovation meets human potential</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dynamic Video Card 1 */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              >
                <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-lg font-semibold">Collaborative Learning</h3>
                <p className="text-sm opacity-90">Building tomorrow's leaders</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Users className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>

            {/* Dynamic Image 2 with enhanced effects */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI-powered mentorship platform"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-lg font-semibold">AI-Powered Matching</h3>
                <p className="text-sm opacity-90">Smart mentor connections</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 bg-white rounded-full animate-spin flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Dynamic Video Card 3 */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-all duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                poster="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              >
                <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
              <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-lg font-semibold">Future-Ready Skills</h3>
                <p className="text-sm opacity-90">Technology meets purpose</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <TrendingUp className="w-6 h-6 text-white animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Career Matching Section */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Meet YOMA
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Your AI Mentor Assistant
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the future of career guidance with our AI-powered matching system that connects you with the perfect mentors and opportunities.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full">
                Discover YOMA
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/3176369b-2415-4829-9170-5a436bde6704.png" 
                  alt="YOMA AI-Powered Career Matching Assistant"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 left-1/3 w-10 h-10 bg-purple-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section - New placement after YOMA */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
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

      {/* Lead Gen Section 1 - Quick Engagement */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Journey</h2>
            <p className="text-xl text-gray-600">Take the first step towards transforming youth development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsletterSignup />
            <DemoRequestForm />
          </div>
        </div>
      </section>

      {/* Mission Statement with Enhanced Background */}
      <section className="relative py-32 px-6 md:px-8 overflow-hidden">
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

      {/* Lead Gen Section 2 - Community Building */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600">Connect with like-minded individuals passionate about youth development</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MentorSignup />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Audience Sections */}
      <section className="py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Who We
              <br />
              <span className="font-medium">Serve</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Our ecosystem brings together diverse stakeholders united by a common goal: 
              empowering youth to achieve their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Card 
                key={index} 
                className="border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group bg-white rounded-xl shadow-lg hover:scale-105"
              >
                <CardContent className="p-12">
                  <div className="mb-8">
                    <audience.icon size={48} className="text-gray-900 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-tight">
                    {audience.title}
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed font-light">
                    {audience.description}
                  </p>
                  <Link to={audience.link}>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-900 text-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent rounded-lg font-medium transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Dynamic Background */}
      <section className="relative py-32 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Ocean waves representing endless possibilities"
            className="w-full h-full object-cover opacity-30 transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
          {/* Animated wave elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/20 to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Ready to Make
            <br />
            <span className="font-medium">an Impact?</span>
          </h2>
          <p className="text-xl text-blue-100 font-light leading-relaxed">
            Join our growing ecosystem of mentors, institutions, and organizations 
            dedicated to empowering the next generation of leaders.
          </p>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-12 py-6 text-lg font-medium rounded-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
