
import { useState, useEffect } from 'react';
import { Users, Heart, Target, Award, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const [activeSection, setActiveSection] = useState('story');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['story', 'mission', 'team', 'impact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      description: "Passionate about empowering youth through technology and mentorship."
    },
    {
      name: "Michael Chen",
      role: "Head of AI Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Leading our AI-driven mentorship platform development."
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Education",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Expert in educational psychology and youth development."
    },
    {
      name: "David Thompson",
      role: "Partnerships Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Building bridges between schools, students, and professionals."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Mentored", icon: Users, color: "text-blue-600" },
    { number: "500+", label: "Professional Mentors", icon: Award, color: "text-green-600" },
    { number: "50+", label: "Partner Schools", icon: Globe, color: "text-purple-600" },
    { number: "95%", label: "Success Rate", icon: Target, color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-8 animate-fade-in">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Empowering Youth Through AI-Driven Mentorship
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WeKIT</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to bridge the gap between potential and opportunity, 
            connecting young minds with the guidance they need to thrive in an AI-powered world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
                <Lightbulb className="w-4 h-4 mr-2" />
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                From Vision to <span className="text-blue-600">Reality</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  WeKIT was born from a simple observation: too many talented young people 
                  lack access to the guidance and mentorship that could unlock their potential. 
                  In a rapidly evolving world where AI and technology reshape every industry, 
                  we saw an opportunity to democratize mentorship.
                </p>
                <p>
                  Our founders, coming from diverse backgrounds in education, technology, and 
                  youth development, united around a shared vision: create an AI-powered platform 
                  that connects students with the right mentors at the right time, making quality 
                  guidance accessible to all.
                </p>
                <p>
                  Today, we're proud to serve thousands of students, hundreds of mentors, 
                  and dozens of educational institutions, creating a thriving ecosystem of 
                  learning and growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Students collaborating" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white shadow-xl">
                <div className="text-2xl font-bold">2019</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 px-6 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-16">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <Target className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To democratize access to quality mentorship by leveraging AI technology, 
                ensuring every young person has the guidance they need to achieve their dreams 
                and contribute meaningfully to society.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <Globe className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                A world where geographical, economic, and social barriers don't limit access 
                to mentorship, where every student can connect with inspiring professionals 
                who help them navigate their journey to success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-4">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet the People Behind <span className="text-purple-600">WeKIT</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise in education, technology, 
              and youth development to create meaningful impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-white shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-center mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you're a student seeking guidance or a professional ready to mentor, 
            there's a place for you in the WeKIT community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-none font-medium hover:bg-gray-100 transition-colors">
              Join as Student
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-none font-medium hover:bg-white hover:text-black transition-colors">
              Become a Mentor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
