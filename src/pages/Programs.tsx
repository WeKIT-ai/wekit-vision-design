import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Compass, Brain, Users, Building2, Sparkles, ArrowRight, BookOpen, TrendingUp, Shield } from 'lucide-react';

const programCategories = [
  {
    id: 'life-skills-lab',
    category: 'Students (Grades 8–12)',
    icon: Sparkles,
    programs: [
      {
        id: 'life-skills-lab',
        title: 'Life Skills Lab',
        description: 'Build emotional intelligence, resilience, and decision-making skills through interactive workshops and real-world scenarios.',
        duration: '8 weeks',
        format: 'Hybrid',
      },
      {
        id: 'purpose-architecture-labs',
        title: 'Purpose Architecture Labs',
        description: 'A structured mentorship and learning system helping youth discover purpose, design career paths, and build real-world skills.',
        duration: '12 weeks',
        format: 'In-person + Online',
      },
      {
        id: 'financial-literacy-lab',
        title: 'Financial Literacy Lab',
        description: 'Foundational financial skills — budgeting, saving, investing basics, and money mindset for young learners.',
        duration: '6 weeks',
        format: 'Online',
      },
      {
        id: 'career-discovery',
        title: 'Career Discovery Program',
        description: 'Explore career pathways through industry exposure, mentorship sessions, and personality-career alignment tools.',
        duration: '4 weeks',
        format: 'Hybrid',
      },
      {
        id: 'ai-readiness-youth',
        title: 'AI Readiness for Youth',
        description: 'Prepare students for an AI-driven world with responsible AI literacy, tools, and ethical frameworks.',
        duration: '6 weeks',
        format: 'Online',
      },
    ],
  },
  {
    id: 'career-architecture-accelerator',
    category: 'University Students',
    icon: TrendingUp,
    programs: [
      {
        id: 'career-architecture-accelerator',
        title: 'Career Architecture Accelerator',
        description: 'Design your career blueprint with industry mentors, personal brand building, and strategic career planning.',
        duration: '10 weeks',
        format: 'Hybrid',
      },
      {
        id: 'leadership-foundations',
        title: 'Leadership Foundations',
        description: 'Develop leadership presence, communication mastery, and influence skills for the modern workplace.',
        duration: '8 weeks',
        format: 'In-person',
      },
      {
        id: 'ai-career-growth',
        title: 'AI Tools for Career Growth',
        description: 'Leverage AI productivity tools, portfolio builders, and career intelligence platforms to accelerate your trajectory.',
        duration: '4 weeks',
        format: 'Online',
      },
    ],
  },
  {
    id: 'purpose-led-career',
    category: 'Young Professionals',
    icon: Target,
    programs: [
      {
        id: 'purpose-led-career',
        title: 'Purpose-Led Career Design',
        description: 'Align your career trajectory with your core values and life purpose through structured reflection and mentorship.',
        duration: '8 weeks',
        format: 'Hybrid',
      },
      {
        id: 'leadership-presence',
        title: 'Leadership Presence Certification',
        description: 'Master executive presence, public speaking, and leadership communication for career advancement.',
        duration: '6 weeks',
        format: 'Online + Live Sessions',
      },
      {
        id: 'financial-intelligence',
        title: 'Financial Intelligence Program',
        description: 'Advanced financial strategy — wealth building, investment frameworks, and financial independence planning.',
        duration: '8 weeks',
        format: 'Online',
      },
      {
        id: 'ai-literacy-professionals',
        title: 'AI Literacy for Professionals',
        description: 'Understand AI implications for your industry, adopt AI tools ethically, and future-proof your career.',
        duration: '4 weeks',
        format: 'Online',
      },
    ],
  },
  {
    id: 'mentor-certification',
    category: 'Mentors',
    icon: Users,
    programs: [
      {
        id: 'become-a-mentor',
        title: 'Become a Mentor',
        description: 'Join our global network of mentors shaping the next generation of leaders, innovators, and changemakers.',
        duration: 'Ongoing',
        format: 'Flexible',
      },
      {
        id: 'mentor-certification',
        title: 'Mentor Certification',
        description: 'Get certified as a WeKIT mentor through our rigorous training program covering mentorship frameworks and best practices.',
        duration: '6 weeks',
        format: 'Online + Practicum',
      },
      {
        id: 'mentor-training',
        title: 'Mentor Training Lab',
        description: 'Advanced mentorship techniques — coaching frameworks, cross-cultural mentoring, and impact measurement.',
        duration: '4 weeks',
        format: 'Online',
      },
    ],
  },
  {
    id: 'organizations',
    category: 'Organizations',
    icon: Building2,
    programs: [
      {
        id: 'school-programs',
        title: 'School Programs',
        description: 'Comprehensive life skills and career readiness programs designed for integration into school curricula.',
        duration: 'Term-based',
        format: 'In-school delivery',
      },
      {
        id: 'corporate-programs',
        title: 'Corporate Programs',
        description: 'Leadership development, AI readiness, and employee wellness programs for forward-thinking organizations.',
        duration: 'Custom',
        format: 'On-site + Virtual',
      },
      {
        id: 'government-partnerships',
        title: 'Government Partnerships',
        description: 'Scalable youth skilling and career readiness initiatives for government and public sector organizations.',
        duration: 'Custom',
        format: 'Partnership Model',
      },
    ],
  },
];

const Programs = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative py-32 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">WeKIT Programs</p>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight mb-6 max-w-4xl">
          Structured pathways to purpose, skills & career growth
        </h1>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mb-10">
          From high school students to seasoned professionals — our programs are designed to meet you where you are and take you where you need to go.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/waitlist">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-8 py-6 text-base">
              Join the Waitlist
            </Button>
          </Link>
          <Link to="/courses">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
              Browse Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Featured Program */}
    <section id="purpose-architecture-labs" className="py-24 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">Featured Program</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Purpose Architecture Lab
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A structured mentorship and learning system helping youth discover purpose, design career paths, and build real-world skills. This flagship program combines self-discovery assessments, industry mentorship, and hands-on projects.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div>
                <p className="text-3xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Week Program</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">1:1</p>
                <p className="text-sm text-muted-foreground">Mentor Matching</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">94%</p>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </div>
            </div>
            <Link to="/waitlist">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8">
                Explore Program <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
          <div className="bg-primary p-12 flex flex-col justify-center">
            <div className="space-y-6">
              {['Self-Discovery & Purpose Mapping', 'Career Path Architecture', 'Mentor-Guided Projects', 'Skills Portfolio Building', 'Industry Exposure Sessions'].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-primary-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* All Program Categories */}
    {programCategories.map((cat, catIndex) => (
      <section
        key={cat.id}
        id={cat.id}
        className={`py-24 px-4 ${catIndex % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <cat.icon className="text-secondary" size={28} />
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">{cat.category}</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-12">
            Programs for {cat.category}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.programs.map((program) => (
              <Card key={program.id} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="bg-muted px-3 py-1 font-medium">{program.duration}</span>
                    <span className="bg-muted px-3 py-1 font-medium">{program.format}</span>
                  </div>
                  <Link to="/waitlist" className="text-secondary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight mb-6">
          Ready to start your journey?
        </h2>
        <p className="text-xl text-primary-foreground/70 mb-10">
          Join thousands of learners building purpose-driven careers with WeKIT.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/waitlist">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-10 py-6 text-base">
              Join WeKIT
            </Button>
          </Link>
          <Link to="/find-mentor">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-10 py-6 text-base">
              Find a Mentor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Programs;
