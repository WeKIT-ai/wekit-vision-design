
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Award, Users, Zap, Gamepad2, Target, Heart, Compass, Brain, DollarSign, Cpu, Building2, ShieldCheck, Sparkles, TrendingUp, Lightbulb, Globe, MessageSquare, Lock, Fingerprint, BarChart3, Wallet, PiggyBank, Bot, Shield, Smartphone, Briefcase, RefreshCw, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import CertificationsSection from '@/components/courses/CertificationsSection';

interface CourseItem {
  title: string;
  description: string;
  icon: React.ElementType;
  anchor: string;
}

interface CourseCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  courses: CourseItem[];
  bgClass: string;
}

const courseCategories: CourseCategory[] = [
  {
    id: 'life-skills',
    title: 'Life Skills',
    subtitle: 'Build Your Inner Foundation',
    description: 'Develop the essential human capabilities that AI cannot replicate — self-awareness, emotional regulation, resilience, and ethical clarity.',
    icon: Heart,
    bgClass: 'bg-background',
    courses: [
      { title: 'Identity & Self-Awareness', description: 'Discover your core values, strengths, and personal narrative to build authentic confidence and direction.', icon: Fingerprint, anchor: 'identity-self-awareness' },
      { title: 'Emotional Intelligence', description: 'Master the science of emotional awareness, empathy, and interpersonal effectiveness in professional settings.', icon: Heart, anchor: 'emotional-intelligence' },
      { title: 'Resilience & Stress Management', description: 'Build mental toughness and adaptive strategies to thrive under pressure and navigate uncertainty.', icon: ShieldCheck, anchor: 'resilience-stress' },
      { title: 'Ethics & Decision-Making', description: 'Develop structured frameworks for navigating complex ethical dilemmas with integrity and accountability.', icon: Shield, anchor: 'ethics-decision-making' },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership',
    subtitle: 'Lead with Presence & Purpose',
    description: 'Cultivate the executive presence, communication mastery, and purpose-driven leadership that defines high-impact professionals.',
    icon: Sparkles,
    bgClass: 'bg-wekit-soft',
    courses: [
      { title: 'Leadership Presence', description: 'Develop executive presence, gravitas, and the ability to command rooms and inspire teams at every level.', icon: Sparkles, anchor: 'leadership-presence' },
      { title: 'Influence & Communication', description: 'Master persuasion, storytelling, and strategic communication to drive alignment and action.', icon: MessageSquare, anchor: 'influence-communication' },
      { title: 'Purpose-Led Leadership', description: 'Align your leadership style with a clear sense of purpose to create lasting organizational impact.', icon: Compass, anchor: 'purpose-led-leadership' },
    ],
  },
  {
    id: 'career-design',
    title: 'Career Design',
    subtitle: 'Architect Your Career Path',
    description: 'Move beyond job-seeking to strategic career architecture — design a purpose-aligned trajectory with clarity and confidence.',
    icon: Target,
    bgClass: 'bg-background',
    courses: [
      { title: 'Purpose Architecture Lab', description: 'A structured methodology to discover your purpose and translate it into a concrete, actionable career blueprint.', icon: Target, anchor: 'purpose-architecture' },
      { title: 'Career Strategy', description: 'Learn strategic career planning — from positioning and networking to negotiation and transition management.', icon: TrendingUp, anchor: 'career-strategy' },
      { title: 'Personal Brand Building', description: 'Craft a compelling personal brand that differentiates you in the market and attracts the right opportunities.', icon: Globe, anchor: 'personal-brand' },
    ],
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy',
    subtitle: 'Master Your Financial Future',
    description: 'Build the financial acumen to make data-driven decisions, manage risk, and create sustainable wealth — personally and professionally.',
    icon: DollarSign,
    bgClass: 'bg-wekit-soft',
    courses: [
      { title: 'Money Foundations', description: 'Build a solid financial foundation with budgeting, saving, and smart money management principles.', icon: Wallet, anchor: 'money-foundations' },
      { title: 'Financial Intelligence', description: 'Develop strategic financial acumen for investment decisions, risk assessment, and long-term wealth creation.', icon: BarChart3, anchor: 'financial-intelligence' },
      { title: 'Wealth Design', description: 'Learn advanced wealth-building strategies, portfolio thinking, and financial independence planning.', icon: PiggyBank, anchor: 'wealth-design' },
    ],
  },
  {
    id: 'ai-digital-skills',
    title: 'AI & Digital Skills',
    subtitle: 'Thrive in the AI Era',
    description: 'Develop the AI literacy, digital responsibility, and technology fluency needed to stay relevant and lead in an AI-driven world.',
    icon: Cpu,
    bgClass: 'bg-background',
    courses: [
      { title: 'AI Literacy', description: 'Understand AI fundamentals, capabilities, and limitations to make informed decisions about AI adoption.', icon: Bot, anchor: 'ai-literacy' },
      { title: 'Responsible AI', description: 'Learn ethical AI frameworks, bias detection, and governance models for responsible technology deployment.', icon: Shield, anchor: 'responsible-ai' },
      { title: 'Digital Reputation', description: 'Build and protect your digital footprint with strategies for professional online presence management.', icon: Lock, anchor: 'digital-reputation' },
      { title: 'AI Productivity Tools', description: 'Master AI-powered tools for writing, research, analysis, and workflow automation to 10x your output.', icon: Smartphone, anchor: 'ai-productivity' },
    ],
  },
  {
    id: 'corporate-programs',
    title: 'Corporate Programs',
    subtitle: 'Transform Your Organization',
    description: 'Enterprise-grade learning programs designed to build resilient leadership, ethical culture, and future-ready talent at scale.',
    icon: Building2,
    bgClass: 'bg-wekit-soft',
    courses: [
      { title: 'Resilient Leadership', description: 'Equip your leadership team with emotional intelligence and resilience skills to navigate uncertainty.', icon: ShieldCheck, anchor: 'resilient-leadership' },
      { title: 'Responsible AI Adoption', description: 'Guide your organization through ethical AI adoption with governance and risk assessment frameworks.', icon: Bot, anchor: 'responsible-ai-adoption' },
      { title: 'Digital Transformation Mindset', description: 'Shift organizational mindsets for digital transformation with change management and innovation thinking.', icon: RefreshCw, anchor: 'digital-transformation' },
      { title: 'Talent Architecture', description: 'Design internal career mobility pathways that retain talent, reduce attrition, and build a future-ready workforce.', icon: LayoutGrid, anchor: 'talent-architecture' },
    ],
  },
];

const Courses = () => {
  const features = [
    { title: 'Expert-Led Courses', description: 'Learn from industry professionals and experienced mentors.', icon: BookOpen },
    { title: 'Industry Certifications', description: 'Earn recognized certifications that boost your career prospects.', icon: Award },
    { title: 'Peer Learning', description: 'Connect with fellow learners and build lasting professional networks.', icon: Users },
    { title: 'AI-Powered Learning', description: 'Personalized learning paths adapted to your goals and pace.', icon: Zap },
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
              <span className="text-wekit-teal">Certifications</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Future-ready courses designed for professionals, leaders and youth navigating the AI-driven world. 
              From life skills to enterprise programs — learn what matters.
            </p>
            {/* Category quick-nav */}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {courseCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-5 py-2.5 text-sm font-medium border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  {cat.title}
                </a>
              ))}
            </div>
            <div className="pt-4">
              <Link to="/start-journey">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
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
                className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
              >
                Try Microlearning Now
                <Gamepad2 className="ml-3" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== Course Category Sections ====== */}
      {courseCategories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-24 px-6 md:px-8 ${category.bgClass} scroll-mt-24`}
        >
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section header */}
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 text-sm font-medium text-primary">
                <category.icon className="w-4 h-4" />
                {category.title}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground tracking-tight">
                {category.subtitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Course cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.courses.map((course) => (
                <Card
                  key={course.anchor}
                  id={course.anchor}
                  className="group border border-border/60 bg-card hover:shadow-lg transition-all duration-300 scroll-mt-24"
                >
                  <CardContent className="p-7 space-y-4">
                    <div className="w-11 h-11 bg-wekit-soft flex items-center justify-center">
                      <course.icon className="w-5 h-5 text-wekit-teal" />
                    </div>
                    <h3 className="text-lg font-semibold font-montserrat text-foreground leading-snug group-hover:text-wekit-teal transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                    <Link to="/start-journey" className="inline-flex items-center text-sm font-medium text-primary hover:text-wekit-teal transition-colors gap-1.5 pt-1">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Vocational Programs — Drone School */}
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
                <div className="flex items-center space-x-3 bg-white/10 p-4">
                  <BookOpen className="w-6 h-6 text-wekit-gold" />
                  <span className="text-primary-foreground font-medium">40 hrs Theory</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4">
                  <Zap className="w-6 h-6 text-wekit-gold" />
                  <span className="text-primary-foreground font-medium">20 hrs Flying</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4">
                  <Users className="w-6 h-6 text-wekit-gold" />
                  <span className="text-primary-foreground font-medium">AI Mentorship</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4">
                  <Award className="w-6 h-6 text-wekit-gold" />
                  <span className="text-primary-foreground font-medium">70%+ Placement</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-foreground">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Agriculture', 'Logistics', 'Defense', 'Surveillance'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-primary-foreground/90 text-sm">{tag}</span>
                  ))}
                </div>
              </div>
              <Button size="lg" className="bg-wekit-gold text-primary hover:bg-wekit-gold/90 px-8 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300">
                Apply for Drone Pilot School
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
              <h3 className="text-2xl font-bold font-montserrat text-primary-foreground mb-6">Program Impact</h3>
              <div className="space-y-6">
                {[
                  ['Target Pilots Year 1', '100+'],
                  ['Training Duration', '4 Weeks'],
                  ['Placement Rate', '70%+'],
                  ['Course Fee', '₹50K'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-primary-foreground/70">{label}</span>
                    <span className="text-2xl font-bold text-wekit-gold">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-white/10">
                <p className="text-sm text-primary-foreground/70">
                  <strong className="text-primary-foreground">ESG-Aligned:</strong> Quarterly reporting on placements,
                  income uplift, and diversity metrics with community outreach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WeKIT Smiles Teaser */}
      <section className="py-24 px-6 md:px-8 bg-wekit-teal">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/15 rounded-full text-sm font-medium text-white">
            <Target className="w-4 h-4 mr-2" />
            Vocational Programme
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white leading-tight">
            WeKIT <span className="text-wekit-gold">Smiles</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A purpose-driven dental assistant training programme combining clinical excellence
            with mentorship, life skills, and career architecture. Starting from ₹25,000.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['10th Pass Eligible', 'Industry Certification', 'Placement Support', 'Scholarships Available'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/10 border border-white/15 text-white/90 text-sm font-medium rounded-full">{tag}</span>
            ))}
          </div>
          <Link to="/smiles">
            <Button size="lg" className="bg-wekit-gold text-primary hover:bg-wekit-gold/90 px-10 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Explore WeKIT Smiles
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </Link>
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
              We combine cutting-edge technology with expert mentorship to deliver an unparalleled learning experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border/60 hover:border-wekit-teal/30 transition-all duration-300 hover:shadow-lg group bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <feature.icon size={48} className="text-foreground group-hover:text-wekit-teal transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300">
                Request Corporate Proposal
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </Link>
            <Link to="/start-journey">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-medium transition-all duration-300">
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
