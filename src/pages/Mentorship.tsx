import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Search, Award, Briefcase, ArrowRight, Globe, MessageSquare, Star } from 'lucide-react';

const mentorshipPrograms = [
  {
    icon: Search,
    title: 'Find a Mentor',
    description: 'Get matched with experienced professionals who align with your goals, industry, and learning style through our AI-powered matching system.',
    link: '/find-mentor',
    linkLabel: 'Get Matched',
  },
  {
    icon: Users,
    title: 'Become a Mentor',
    description: 'Share your expertise, give back to the next generation, and join a global network of purpose-driven professionals.',
    link: '/mentor-waitlist',
    linkLabel: 'Apply Now',
  },
  {
    icon: Globe,
    title: 'Mentor Network',
    description: 'Access our curated global network of mentors spanning industries from tech and finance to education and social impact.',
    link: '/mentor-dashboard',
    linkLabel: 'Explore Network',
  },
  {
    icon: Briefcase,
    title: 'Executive Mentorship',
    description: 'Premium 1:1 mentorship with C-suite executives and industry leaders for senior professionals and high-potential talent.',
    link: '/waitlist',
    linkLabel: 'Learn More',
  },
];

const stats = [
  { value: '500+', label: 'Active Mentors' },
  { value: '12', label: 'Countries' },
  { value: '2,000+', label: 'Mentees Matched' },
  { value: '4.8/5', label: 'Satisfaction Score' },
];

const howItWorks = [
  { step: '01', title: 'Create Your Profile', description: 'Share your goals, interests, industry, and preferred mentorship style.' },
  { step: '02', title: 'Get Matched', description: 'Our AI engine finds mentors who align with your aspirations and background.' },
  { step: '03', title: 'Connect & Grow', description: 'Schedule sessions, set goals, and track your progress with structured frameworks.' },
  { step: '04', title: 'Achieve & Give Back', description: 'Reach your milestones and eventually become a mentor yourself.' },
];

const Mentorship = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative py-32 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">WeKIT Mentorship</p>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight mb-6 max-w-4xl">
          The right mentor changes everything
        </h1>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mb-10">
          Connect with experienced professionals and industry leaders guiding the next generation of innovators, changemakers, and purpose-driven leaders.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/find-mentor">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-8 py-6 text-base">
              Find a Mentor
            </Button>
          </Link>
          <Link to="/mentor-waitlist">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
              Become a Mentor
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Programs */}
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">Mentorship Programs</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-12 max-w-3xl">
          Multiple ways to connect, learn & grow
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {mentorshipPrograms.map((program) => (
            <Card key={program.title} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-10">
                <program.icon className="text-secondary mb-6" size={32} />
                <h3 className="text-2xl font-bold text-foreground mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{program.description}</p>
                <Link to={program.link} className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  {program.linkLabel} <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* How it Works */}
    <section className="py-24 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">How It Works</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-16 max-w-3xl">
          From signup to success in four steps
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((item) => (
            <div key={item.step}>
              <p className="text-5xl font-bold text-secondary/20 mb-4">{item.step}</p>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured - Global Mentor Network */}
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Featured</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Global Mentor Network
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mentors come from leading companies, startups, academia, and social enterprises across 12+ countries. Each mentor is vetted, trained, and certified through our rigorous onboarding process.
            </p>
            <div className="space-y-4 mb-10">
              {['Industry-specific mentor pools', 'AI-powered compatibility matching', 'Structured goal-setting frameworks', 'Progress tracking & accountability'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Star className="text-accent flex-shrink-0" size={16} />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
            <Link to="/find-mentor">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8">
                Find a Mentor <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
          <div className="bg-primary p-12">
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: MessageSquare, label: 'Structured Sessions' },
                { icon: Award, label: 'Certified Mentors' },
                { icon: Globe, label: 'Global Reach' },
                { icon: Star, label: 'Premium Support' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="text-accent mx-auto mb-3" size={28} />
                  <p className="text-primary-foreground font-medium text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight mb-6">
          Your next chapter starts with the right mentor
        </h2>
        <p className="text-xl text-primary-foreground/70 mb-10">
          Whether you're seeking guidance or ready to give back — there's a place for you in the WeKIT mentorship ecosystem.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/find-mentor">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-10 py-6 text-base">
              Find a Mentor
            </Button>
          </Link>
          <Link to="/mentor-waitlist">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-10 py-6 text-base">
              Become a Mentor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Mentorship;
