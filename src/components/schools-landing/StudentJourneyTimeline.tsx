import AnimatedSection from '@/components/ui/animated-section';
import { Fingerprint, HeartHandshake, Telescope, Rocket, Award } from 'lucide-react';

const years = [
  { grade: 'Grade 8', title: 'Identity & Self Discovery', icon: Fingerprint, color: 'text-secondary' },
  { grade: 'Grade 9', title: 'Life Skills & Financial Literacy', icon: HeartHandshake, color: 'text-accent' },
  { grade: 'Grade 10', title: 'Career Exploration & Future Skills', icon: Telescope, color: 'text-secondary' },
  { grade: 'Grade 11', title: 'Mentorship & Real-World Projects', icon: Rocket, color: 'text-accent' },
  { grade: 'Grade 12', title: 'Career Portfolio & Pathway Decisions', icon: Award, color: 'text-secondary' },
];

const StudentJourneyTimeline = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-wekit-soft overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight">
            The WeKIT Student Journey
          </h2>
        </AnimatedSection>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-5 gap-4">
            {years.map((y, i) => (
              <AnimatedSection key={y.grade} animation="fade-up" delay={i * 150} className="relative flex flex-col items-center text-center">
                {/* Dot */}
                <div className="w-6 h-6 border-2 border-foreground bg-background z-10 mb-6" />
                {/* Icon */}
                <div className="w-14 h-14 border border-border flex items-center justify-center mb-4">
                  <y.icon className={y.color} size={24} />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">{y.grade}</span>
                <h4 className="text-sm font-semibold font-montserrat text-foreground leading-snug">{y.title}</h4>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute top-0 bottom-0 left-3 w-px bg-border" />
          {years.map((y, i) => (
            <AnimatedSection key={y.grade} animation="fade-left" delay={i * 120} className="relative mb-10 last:mb-0">
              <div className="absolute -left-5 top-1 w-4 h-4 border-2 border-foreground bg-background" />
              <div className="flex items-center gap-3 mb-2">
                <y.icon className={y.color} size={20} />
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{y.grade}</span>
              </div>
              <h4 className="text-base font-semibold font-montserrat text-foreground">{y.title}</h4>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentJourneyTimeline;
