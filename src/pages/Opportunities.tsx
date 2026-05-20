import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Wallet, CalendarDays, Briefcase, ArrowRight } from 'lucide-react';

type Opportunity = {
  id: string;
  type: 'Internship' | 'Fellowship' | 'Graduate Program' | 'Volunteer';
  title: string;
  organization: string;
  location: string;
  mode: 'Remote' | 'On-site' | 'Hybrid';
  duration: string;
  stipend: string;
  deadline: string;
  description: string;
};

const opportunities: Opportunity[] = [
  {
    id: 'ms-swe',
    type: 'Internship',
    title: 'Software Engineering Intern',
    organization: 'Microsoft',
    location: 'Nairobi, Kenya',
    mode: 'On-site',
    duration: '3 months',
    stipend: '$1,500 / month',
    deadline: 'Jun 30, 2026',
    description: 'Build cloud-native features alongside the Azure for Africa team. Open to penultimate-year CS students.',
  },
  {
    id: 'safaricom-mkt',
    type: 'Fellowship',
    title: 'Marketing Fellowship',
    organization: 'Safaricom Foundation',
    location: 'Remote',
    mode: 'Remote',
    duration: '6 months',
    stipend: 'KES 80,000 / month',
    deadline: 'Jul 15, 2026',
    description: 'Lead community-driven campaigns for digital literacy programs across East Africa.',
  },
  {
    id: 'ibm-ds',
    type: 'Internship',
    title: 'Data Science Internship',
    organization: 'IBM Africa',
    location: 'Lagos, Nigeria',
    mode: 'Hybrid',
    duration: '4 months',
    stipend: '$1,200 / month',
    deadline: 'Jun 20, 2026',
    description: 'Work on Watson AI projects supporting financial inclusion across West Africa.',
  },
  {
    id: 'unicef-youth',
    type: 'Fellowship',
    title: 'Youth Leadership Fellow',
    organization: 'UNICEF',
    location: 'Kampala, Uganda',
    mode: 'On-site',
    duration: '12 months',
    stipend: '$1,800 / month',
    deadline: 'Aug 1, 2026',
    description: 'Champion youth policy initiatives and co-design programs with adolescents across Uganda.',
  },
  {
    id: 'andela-pd',
    type: 'Internship',
    title: 'Product Design Intern',
    organization: 'Andela',
    location: 'Remote',
    mode: 'Remote',
    duration: '3 months',
    stipend: '$1,000 / month',
    deadline: 'Jul 5, 2026',
    description: 'Prototype and ship features in a distributed design team building tools for global talent.',
  },
  {
    id: 'wekit-csr',
    type: 'Volunteer',
    title: 'CSR Program Volunteer',
    organization: 'WeKIT NGO Network',
    location: 'Multiple locations',
    mode: 'Hybrid',
    duration: 'Flexible',
    stipend: 'Stipend + certificate',
    deadline: 'Rolling',
    description: 'Mentor secondary-school students and run weekend purpose-discovery workshops.',
  },
  {
    id: 'mkopa-energy',
    type: 'Internship',
    title: 'Renewable Energy Intern',
    organization: 'M-KOPA',
    location: 'Nairobi, Kenya',
    mode: 'On-site',
    duration: '6 months',
    stipend: 'KES 60,000 / month',
    deadline: 'Jun 28, 2026',
    description: 'Support last-mile solar deployment analytics for off-grid households.',
  },
  {
    id: 'equity-grad',
    type: 'Graduate Program',
    title: 'Finance Graduate Program',
    organization: 'Equity Bank',
    location: 'Kenya (multi-branch)',
    mode: 'On-site',
    duration: '2 years',
    stipend: 'Competitive salary',
    deadline: 'Sep 10, 2026',
    description: 'A two-year rotational program across retail banking, treasury, and credit risk.',
  },
  {
    id: 'wekit-media',
    type: 'Fellowship',
    title: 'Content Creator Fellowship',
    organization: 'WeKIT Media',
    location: 'Remote',
    mode: 'Remote',
    duration: '4 months',
    stipend: '$800 / month',
    deadline: 'Jul 22, 2026',
    description: 'Produce stories, podcasts, and reels spotlighting young African change-makers.',
  },
];

const filters = ['All', 'Internship', 'Fellowship', 'Graduate Program', 'Volunteer', 'Remote', 'On-site'];

const Opportunities = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative py-32 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">WeKIT Resources</p>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight mb-6 max-w-4xl">
          Internships & Opportunities
        </h1>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mb-10">
          Hand-picked internships, fellowships, graduate programs, and volunteer roles from WeKIT partners across Africa and beyond.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#listings">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-8 py-6 text-base">
              Browse Opportunities
            </Button>
          </a>
          <a href="mailto:partners@wekit.ai">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
              Post an Opportunity
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* Filters */}
    <section className="py-8 px-4 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-background border border-border transition-colors"
          >
            {f}
          </button>
        ))}
      </div>
    </section>

    {/* Listings */}
    <section id="listings" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="text-secondary" size={24} />
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Open Roles</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
          Currently accepting applications
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          New opportunities are added weekly. Apply directly through partner organizations or reach out to your WeKIT mentor for a referral.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((o) => (
            <Card key={o.id} className="border-border bg-card hover:shadow-lg transition-shadow duration-300 group flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{o.type}</span>
                  <span className="text-xs font-medium text-muted-foreground">{o.mode}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{o.title}</h3>
                <p className="text-sm font-semibold text-secondary mb-4">{o.organization}</p>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{o.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6 mt-auto">
                  <div className="flex items-center gap-2"><MapPin size={14} /> {o.location}</div>
                  <div className="flex items-center gap-2"><Clock size={14} /> {o.duration}</div>
                  <div className="flex items-center gap-2"><Wallet size={14} /> {o.stipend}</div>
                  <div className="flex items-center gap-2"><CalendarDays size={14} /> Apply by {o.deadline}</div>
                </div>
                <a href="#" className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Apply Now <ArrowRight size={14} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Employer CTA */}
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">For Employers</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight mb-6">
          Partner with WeKIT
        </h2>
        <p className="text-xl text-primary-foreground/70 mb-10">
          Reach a curated network of purpose-driven young talent. List your internships, fellowships, and graduate programs on WeKIT.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:partners@wekit.ai">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-10 py-6 text-base">
              Post an Opportunity
            </Button>
          </a>
          <Link to="/resources">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
              Back to Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Opportunities;
