import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Compass, Heart, Coins, Cpu, Backpack, Users, FolderOpen } from 'lucide-react';

const layers = [
  {
    num: '01',
    icon: Compass,
    title: 'Purpose & Pathways Studio (WAPPS)',
    desc: 'AI-powered career discovery linking student strengths, psychometric insights, and values with future career pathways.',
    outcome: 'Personalized AI-guided career map.',
  },
  {
    num: '02',
    icon: Heart,
    title: 'Life Skills Lab (WALS)',
    desc: 'Identity development, emotional intelligence, leadership, resilience, ethics, and digital citizenship.',
    outcome: 'Students develop strong personal foundations.',
  },
  {
    num: '03',
    icon: Coins,
    title: 'Financial Literacy & Entrepreneurship Lab (WAFLE)',
    desc: 'Budgeting, digital payments, personal finance, and entrepreneurial thinking.',
    outcome: 'Students gain financial confidence and value creation mindset.',
  },
  {
    num: '04',
    icon: Cpu,
    title: 'Future Skills (WAFES)',
    desc: 'AI literacy, sustainability awareness, emerging technologies.',
    outcome: 'Skills aligned with future careers.',
  },
  {
    num: '05',
    icon: Backpack,
    title: 'Bagless Learning Studio (WABLS)',
    desc: 'Experiential learning aligned with NEP guidelines.',
    outcome: 'Real-world exposure and applied learning.',
  },
  {
    num: '06',
    icon: Users,
    title: 'WeKIT 360 Mentorship',
    desc: 'Mentor matching connecting students with professionals and alumni.',
    outcome: 'Industry guidance and career insights.',
  },
  {
    num: '07',
    icon: FolderOpen,
    title: 'Purpose & Pathways Portfolio (WAP³)',
    desc: 'A 5-year digital career development portfolio.',
    outcome: 'Verified career readiness transcript.',
  },
];

const FutureReadinessSystem = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight">
            The WeKIT Future Readiness System
          </h2>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={80} className="text-center mb-4">
          <p className="text-lg md:text-xl font-medium text-secondary max-w-3xl mx-auto">
            One integrated system. Seven components. Five-year student journey.
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={120} className="text-center mb-16">
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The WeKIT Future Readiness System combines AI-powered career discovery, mentorship, future skills education, experiential learning, and career portfolios into a structured journey for Grades 8–12 students.
          </p>
        </AnimatedSection>

        <StaggeredChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
          staggerDelay={80}
          animation="zoom-in"
        >
          {layers.map((l) => (
            <div
              key={l.num}
              className="relative bg-card border border-border p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-accent/40 group"
            >
              <span className="absolute top-4 right-5 text-5xl font-bold text-muted/60 font-montserrat select-none">
                {l.num}
              </span>
              <div className="w-11 h-11 border border-accent/40 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-accent/10 group-hover:border-accent">
                <l.icon className="text-accent" size={20} />
              </div>
              <h3 className="text-base font-semibold font-montserrat text-foreground mb-3 pr-10">{l.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{l.desc}</p>
              <div className="border-t border-border pt-3">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Outcome</span>
                <p className="text-sm font-medium text-secondary mt-1">{l.outcome}</p>
              </div>
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default FutureReadinessSystem;
