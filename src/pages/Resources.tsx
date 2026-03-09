import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Wrench, Users, Calendar, ArrowRight, FileText, Compass, BarChart3, ClipboardList } from 'lucide-react';

const resourceSections = [
  {
    id: 'articles',
    icon: BookOpen,
    category: 'Insights',
    title: 'Articles & Thought Leadership',
    description: 'Expert perspectives on career design, leadership, AI readiness, and youth development from WeKIT mentors and partners.',
    items: [
      { title: 'The Future of Purpose-Led Careers', type: 'Article', readTime: '8 min' },
      { title: 'Why Life Skills Matter More Than Grades', type: 'Article', readTime: '6 min' },
      { title: 'AI and the New Career Landscape', type: 'Article', readTime: '10 min' },
      { title: 'Building Leadership Presence in Your 20s', type: 'Article', readTime: '7 min' },
    ],
  },
  {
    id: 'research',
    icon: BarChart3,
    category: 'Insights',
    title: 'Research & Reports',
    description: 'Data-driven insights on youth employability, mentorship effectiveness, and skills gap analysis across Africa and beyond.',
    items: [
      { title: 'State of Youth Employability 2025', type: 'Report', readTime: '25 min' },
      { title: 'Mentorship Impact Report', type: 'Report', readTime: '15 min' },
      { title: 'Skills Gap Analysis: Africa', type: 'Research Paper', readTime: '20 min' },
    ],
  },
  {
    id: 'career-tools',
    icon: Wrench,
    category: 'Tools',
    title: 'Career Tools',
    description: 'Practical tools to help you design your career path, build your brand, and track your professional development.',
    items: [
      { title: 'Career Path Planner', type: 'Interactive Tool', readTime: '' },
      { title: 'Personal Brand Canvas', type: 'Template', readTime: '' },
      { title: 'Skills Gap Analyzer', type: 'Assessment', readTime: '' },
      { title: 'Goal Setting Framework', type: 'Worksheet', readTime: '' },
    ],
  },
  {
    id: 'assessments',
    icon: ClipboardList,
    category: 'Tools',
    title: 'Purpose Assessments',
    description: 'Discover your strengths, values, and purpose through our research-backed assessment tools.',
    items: [
      { title: 'Purpose Discovery Assessment', type: 'Assessment', readTime: '15 min' },
      { title: 'Leadership Style Inventory', type: 'Assessment', readTime: '10 min' },
      { title: 'Career Values Alignment', type: 'Assessment', readTime: '12 min' },
    ],
  },
  {
    id: 'workshops',
    icon: Calendar,
    category: 'Events',
    title: 'Workshops & Events',
    description: 'Live and virtual workshops, masterclasses, and networking events with industry leaders and WeKIT mentors.',
    items: [
      { title: 'Purpose Architecture Masterclass', type: 'Workshop', readTime: 'Mar 22, 2026' },
      { title: 'AI for Career Growth — Live Session', type: 'Webinar', readTime: 'Apr 5, 2026' },
      { title: 'Leadership Presence Bootcamp', type: 'Bootcamp', readTime: 'Apr 18–20, 2026' },
      { title: 'WeKIT Annual Summit 2026', type: 'Conference', readTime: 'Jun 12–14, 2026' },
    ],
  },
];

const Resources = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative py-32 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">WeKIT Resources</p>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight mb-6 max-w-4xl">
          Tools, insights & events to fuel your growth
        </h1>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mb-10">
          Articles, career tools, purpose assessments, research reports, and upcoming workshops to support your journey.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/white-paper">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-8 py-6 text-base">
              Read the White Paper
            </Button>
          </Link>
          <a href="https://purpose-pathway-pilot.lovable.app/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
              Join WeKIT
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* Quick Nav */}
    <section className="py-8 px-4 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
        {resourceSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-background border border-border transition-colors"
          >
            {section.title.split(' — ')[0]}
          </a>
        ))}
      </div>
    </section>

    {/* Resource Sections */}
    {resourceSections.map((section, index) => (
      <section
        key={section.id}
        id={section.id}
        className={`py-24 px-4 ${index % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <section.icon className="text-secondary" size={24} />
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">{section.category}</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">{section.title}</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">{section.description}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item) => (
              <Card key={item.title} className="border-border bg-card hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{item.type}</span>
                  <h3 className="text-lg font-bold text-foreground mt-3 mb-4">{item.title}</h3>
                  {item.readTime && (
                    <p className="text-sm text-muted-foreground mb-4">{item.readTime}</p>
                  )}
                  <span className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Coming Soon <ArrowRight size={14} />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* White Paper Feature */}
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Community</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              WeKIT White Paper
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive white paper outlines the WeKIT methodology, impact data, and vision for transforming youth career development across Africa and beyond.
            </p>
            <Link to="/white-paper">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8">
                Read the White Paper <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
          <div className="bg-primary p-12 flex flex-col gap-6">
            {['Methodology & Framework', 'Impact Data & Case Studies', 'Technology & AI Integration', 'Global Expansion Strategy'].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <FileText className="text-accent flex-shrink-0" size={20} />
                <p className="text-primary-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight mb-6">
          Stay ahead with WeKIT
        </h2>
        <p className="text-xl text-primary-foreground/70 mb-10">
          Get access to the latest insights, tools, and events when you join the WeKIT community.
        </p>
        <a href="https://purpose-pathway-pilot.lovable.app/" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-10 py-6 text-base">
            Join WeKIT
          </Button>
        </a>
      </div>
    </section>
  </div>
);

export default Resources;
