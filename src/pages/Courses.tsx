
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Award, Users, Zap, Gamepad2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import CertificationsSection from '@/components/courses/CertificationsSection';

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-8 overflow-hidden bg-wekit-soft">
        <div className="max-w-6xl mx-auto relative z-20">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-foreground leading-[0.95] tracking-tight">
              Courses &
              <br />
              <span className="text-wekit-teal">
                Certifications
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unlock your potential with our comprehensive learning platform. From skill development 
              to industry certifications, we provide the tools you need to advance your career.
            </p>
            <div className="pt-4">
              <Link to="/start-journey">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Start Learning Today
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Microlearning Spotlight */}
      <section className="py-24 px-6 md:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-primary-foreground space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/15 rounded-full text-sm font-medium">
              <Gamepad2 className="w-4 h-4 mr-2" />
              New: Microlearning Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight">
              Master Skills in
              <br />
              <span className="text-wekit-gold">5-15 Minutes</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Perfect for IGCSE/Cambridge students. Learn essential skills through interactive games, 
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
                className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                Try Microlearning Now
                <Gamepad2 className="ml-3" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WeKIT Drone Pilot School Section */}
      <section className="py-24 px-6 md:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/15 rounded-full text-sm font-medium text-primary-foreground">
                <Target className="w-4 h-4 mr-2" />
                Featured Program
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary-foreground leading-tight">
                WeKIT Drone
                <br />
                <span className="text-wekit-gold">Pilot School</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Train to become a certified DGCA drone pilot with our comprehensive 4-week bootcamp. 
                Perfect for minority and underserved youth looking to enter the fast-growing drone industry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl">
                  <BookOpen className="w-6 h-6 text-wekit-gold" />
                  <span className="text-primary-foreground font-medium">40 hrs Theory</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl">
                  <Zap className="w-6 h-6 text-wekit-gold" />
                  <span className="text-primary-foreground font-medium">20 hrs Flying</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl">
                  <Users className="w-6 h-6 text-wekit-gold" />
                  <span className="text-primary-foreground font-medium">AI Mentorship</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl">
                  <Award className="w-6 h-6 text-wekit-gold" />
                  <span className="text-primary-foreground font-medium">70%+ Placement</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-foreground">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-primary-foreground/90 rounded-full text-sm">Agriculture</span>
                  <span className="px-3 py-1 bg-white/10 text-primary-foreground/90 rounded-full text-sm">Logistics</span>
                  <span className="px-3 py-1 bg-white/10 text-primary-foreground/90 rounded-full text-sm">Defense</span>
                  <span className="px-3 py-1 bg-white/10 text-primary-foreground/90 rounded-full text-sm">Surveillance</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-wekit-gold text-primary hover:bg-wekit-gold/90 px-8 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                Apply for Drone Pilot School
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold font-montserrat text-primary-foreground mb-6">Program Impact</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-primary-foreground/70">Target Pilots Year 1</span>
                  <span className="text-2xl font-bold text-wekit-gold">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-foreground/70">Training Duration</span>
                  <span className="text-2xl font-bold text-wekit-gold">4 Weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-foreground/70">Placement Rate</span>
                  <span className="text-2xl font-bold text-wekit-gold">70%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-foreground/70">Course Fee</span>
                  <span className="text-2xl font-bold text-wekit-gold">₹50K</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-2xl">
                <p className="text-sm text-primary-foreground/70">
                  <strong className="text-primary-foreground">ESG-Aligned:</strong> Quarterly reporting on placements, 
                  income uplift, and diversity metrics with community outreach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WeKIT Dental Assistant School Section */}
      <section className="py-24 px-6 md:px-8 bg-wekit-teal">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/15 rounded-full text-sm font-medium text-white">
                <Target className="w-4 h-4 mr-2" />
                Featured Program
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white leading-tight">
                WeKIT Dental
                <br />
                <span className="text-wekit-gold">Assistant School</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Train to become a certified dental assistant with hands-on clinical experience at top dental clinics. 
                Perfect for 10th pass candidates looking to enter the healthcare industry with purpose-driven mentorship.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl">
                  <BookOpen className="w-6 h-6 text-wekit-gold" />
                  <span className="text-white font-medium">Clinical Training</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl">
                  <Zap className="w-6 h-6 text-wekit-gold" />
                  <span className="text-white font-medium">Soft Skills Modules</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl">
                  <Users className="w-6 h-6 text-wekit-gold" />
                  <span className="text-white font-medium">1-on-1 Mentor</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl">
                  <Award className="w-6 h-6 text-wekit-gold" />
                  <span className="text-white font-medium">Certification</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">What You'll Learn:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm">Clinical Assisting</span>
                  <span className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm">Patient Care</span>
                  <span className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm">Office Management</span>
                  <span className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm">Dental Software</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-wekit-gold text-primary hover:bg-wekit-gold/90 px-8 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                Apply for Dental Assistant School
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold font-montserrat text-white mb-6">Programme Snapshot</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Eligibility</span>
                  <span className="text-lg font-bold text-wekit-gold">10th Pass, 18+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Location</span>
                  <span className="text-lg font-bold text-wekit-gold">Top Dental Clinics</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Course Fee</span>
                  <span className="text-lg font-bold text-wekit-gold">From ₹25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Scholarships</span>
                  <span className="text-lg font-bold text-wekit-gold">Available</span>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-2xl p-3 text-center">
                  <p className="text-sm text-white/80">Certifications</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 text-center">
                  <p className="text-sm text-white/80">Professional Networks</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 text-center">
                  <p className="text-sm text-white/80">Purpose-Driven</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 text-center">
                  <p className="text-sm text-white/80">Global Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional & Corporate Certifications */}
      <CertificationsSection />

      {/* Features Section */}
      <section className="py-24 px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-foreground mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with expert mentorship to deliver 
              an unparalleled learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border border-border/60 hover:border-wekit-teal/30 transition-all duration-300 hover:shadow-lg group bg-card rounded-2xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <feature.icon size={48} className="text-foreground group-hover:text-wekit-teal transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-24 px-6 md:px-8 bg-wekit-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-foreground mb-4">Popular Learning Paths</h2>
            <p className="text-xl text-muted-foreground">
              Structured courses designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/60">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-wekit-soft rounded-2xl flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-wekit-teal" />
                  </div>
                  <h3 className="text-2xl font-semibold font-montserrat text-foreground mb-2">Technology & Programming</h3>
                  <p className="text-muted-foreground">
                    Master in-demand programming languages and frameworks with hands-on projects.
                  </p>
                </div>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>Web Development</li>
                  <li>Data Science</li>
                  <li>Mobile App Development</li>
                  <li>AI & Machine Learning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/60">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-wekit-soft rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-wekit-teal" />
                  </div>
                  <h3 className="text-2xl font-semibold font-montserrat text-foreground mb-2">Business & Leadership</h3>
                  <p className="text-muted-foreground">
                    Develop essential business skills and leadership capabilities for career advancement.
                  </p>
                </div>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>Project Management</li>
                  <li>Digital Marketing</li>
                  <li>Leadership Skills</li>
                  <li>Entrepreneurship</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/60">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-wekit-soft rounded-2xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-wekit-teal" />
                  </div>
                  <h3 className="text-2xl font-semibold font-montserrat text-foreground mb-2">Creative & Design</h3>
                  <p className="text-muted-foreground">
                    Express your creativity through design, multimedia, and digital arts courses.
                  </p>
                </div>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                  <li>Video Production</li>
                  <li>Content Creation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 px-6 md:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary-foreground leading-tight">
            Build a Future-Ready
            <br />
            Workforce with WeKIT
          </h2>
          <p className="text-xl text-primary-foreground/70 leading-relaxed">
            Join thousands of learners who have already advanced their careers through our platform.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schools">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                Request Corporate Proposal
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </Link>
            <Link to="/start-journey">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-medium rounded-2xl transition-all duration-300"
              >
                Enroll as a Professional
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
