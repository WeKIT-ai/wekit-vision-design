import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { ClipboardCheck, Brain, Users, Lightbulb, FolderOpen, Route } from 'lucide-react';

const stages = [
  { icon: ClipboardCheck, label: 'Assessment', desc: 'Psychometric & strengths profiling' },
  { icon: Brain, label: 'AI Career Map', desc: 'Personalized career pathway generation' },
  { icon: Users, label: 'Mentor Matching', desc: 'Industry professional pairing' },
  { icon: Lightbulb, label: 'Skill Development', desc: 'Life skills & future skills training' },
  { icon: FolderOpen, label: 'Real-World Projects', desc: 'Experiential learning & exposure' },
  { icon: Route, label: 'Career Pathways', desc: 'Portfolio & pathway decisions' },
];

const ScrollStory = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight mb-4">
            One Integrated System.
            <br />
            <span className="text-secondary">Seven Components. Five-Year Journey.</span>
          </h2>
        </AnimatedSection>

        {/* Flow diagram */}
        <StaggeredChildren 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          staggerDelay={120}
          animation="fade-up"
        >
          {stages.map((stage, i) => (
            <div key={stage.label} className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-secondary/30 flex items-center justify-center mb-4 transition-all duration-500 group-hover:border-secondary group-hover:bg-secondary/5">
                <stage.icon className="text-secondary" size={28} />
              </div>
              <h4 className="text-sm md:text-base font-semibold font-montserrat text-foreground mb-1">{stage.label}</h4>
              <p className="text-xs text-muted-foreground leading-snug">{stage.desc}</p>
              {/* Connector line (hidden on last & on mobile wrap) */}
              {i < stages.length - 1 && (
                <div className="hidden lg:block absolute top-8 md:top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
              )}
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default ScrollStory;
