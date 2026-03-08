import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Building2, Landmark, School, ArrowRight, CheckCircle2 } from 'lucide-react';

const institutions = [
{
  id: 'schools',
  icon: School,
  title: 'Schools',
  subtitle: 'Grades 8–12 Life Skills & Career Readiness',
  description: 'Embed life skills, career discovery, and purpose architecture into your school curriculum with turnkey programs designed for educators.',
  programs: [
  { title: 'Life Skills Lab', description: 'Emotional intelligence, resilience, decision-making, and ethics workshops.' },
  { title: 'Purpose Architecture Labs', description: 'Self-discovery and career path design through structured mentorship.' },
  { title: 'Career Portfolio Programs', description: 'Build student career portfolios with skills assessments and project showcases.' }],

  link: '/schools',
  stats: [
  { value: '50+', label: 'Partner Schools' },
  { value: '10,000+', label: 'Students Reached' }]

},
{
  id: 'universities',
  icon: GraduationCap,
  title: 'Universities',
  subtitle: 'Career Acceleration & Leadership Development',
  description: 'Prepare graduates for the real world with career architecture, mentorship platforms, and leadership development tracks.',
  programs: [
  { title: 'Career Acceleration Programs', description: 'Strategic career planning, personal branding, and industry readiness.' },
  { title: 'Mentorship Platforms', description: 'Scalable alumni-to-student mentorship infrastructure.' },
  { title: 'Leadership Development', description: 'Executive-track leadership skills for high-potential students.' }],

  link: '/students',
  stats: [
  { value: '15+', label: 'University Partners' },
  { value: '5,000+', label: 'Students Enrolled' }]

},
{
  id: 'corporates',
  icon: Building2,
  title: 'Corporates',
  subtitle: 'Leadership, AI Readiness & Employee Wellness',
  description: 'Build resilient, future-ready teams with leadership labs, AI workforce training, and financial wellness programs.',
  programs: [
  { title: 'Leadership Development Labs', description: 'Executive presence, purpose-led leadership, and influence mastery.' },
  { title: 'AI Workforce Readiness', description: 'Responsible AI adoption, digital transformation mindset, and AI tools training.' },
  { title: 'Employee Financial Wellness', description: 'Financial intelligence and wealth design programs for employees at every level.' }],

  link: '/professionals',
  stats: [
  { value: '20+', label: 'Corporate Clients' },
  { value: '3,000+', label: 'Professionals Trained' }]

},
{
  id: 'government-ngos',
  icon: Landmark,
  title: 'Government & NGOs',
  subtitle: 'Youth Skilling & Purpose Discovery at Scale',
  description: 'Scalable, impact-driven programs for public sector organizations tackling youth unemployment and career readiness.',
  programs: [
  { title: 'Youth Skilling Programs', description: 'Life skills, digital skills, and employability training for at-risk youth.' },
  { title: 'Career Readiness Initiatives', description: 'Large-scale career guidance and mentorship deployment for communities.' },
  { title: 'Purpose Discovery Programs', description: 'Purpose mapping and career architecture for youth in transition.' }],

  link: '/ngos',
  stats: [
  { value: '8', label: 'Government Partners' },
  { value: '25,000+', label: 'Youth Impacted' }]

}];


const Enterprise = () =>
<div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative py-32 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Enterprise Solutions</p>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight mb-6 max-w-4xl">
          Build future-ready talent at scale
        </h1>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mb-10">
          Tailored programs for schools, universities, corporates, and government organizations to develop the skills, leadership, and purpose that drive real impact.
        </p>
        <Link to="/waitlist">
          <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-8 py-6 text-base">
            Request a Partnership
          </Button>
        </Link>
      </div>
    </section>

    {/* Institution Sections */}
    {institutions.map((inst, index) =>
  <section
    key={inst.id}
    id={inst.id}
    className={`py-24 px-4 ${index % 2 === 0 ? 'bg-background' : 'bg-muted'}`}>
    
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <inst.icon className="text-secondary" size={28} />
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary">{inst.title}</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                {inst.subtitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{inst.description}</p>
              <div className="flex gap-8 mb-10">
                {inst.stats.map((stat) =>
            <div key={stat.label}>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
            )}
              </div>
              <Link to={inst.link}>
                <Button className="bg-primary text-primary-foreground font-semibold px-8">
                  Explore {inst.title} Solutions <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="space-y-6">
              {inst.programs.map((program) =>
          <Card key={program.title} className="border-border bg-card">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{program.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
          )}
            </div>
          </div>
        </div>
      </section>
  )}

    {/* CTA */}
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight mb-6">
          Let's build the future together
        </h2>
        <p className="text-xl text-primary-foreground/70 mb-10">
          Partner with WeKIT to develop purpose-driven talent pipelines at your institution.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/waitlist">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold px-10 py-6 text-base">
              Request a Demo
            </Button>
          </Link>
          <Link to="/about#contact">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground px-10 py-6 text-base bg-secondary font-bold">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>;


export default Enterprise;