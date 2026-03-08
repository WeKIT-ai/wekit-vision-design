import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { UserCheck, Award, BookOpen, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  { icon: UserCheck, title: 'Become a Mentor', desc: 'Join a global network of mentors shaping the next generation of leaders, innovators, and changemakers.' },
  { icon: Award, title: 'Mentor Certification Program', desc: 'Get certified through our rigorous training covering mentorship frameworks, coaching, and best practices.' },
  { icon: BookOpen, title: 'Mentor Training Lab', desc: 'Advanced mentorship techniques — cross-cultural mentoring, coaching frameworks, and impact measurement.' },
  { icon: Globe, title: 'WeKIT Experience Collective', desc: 'Share your expertise, contribute to community learning, and build your professional legacy.' },
];

const MentorsAndProfessionals = () => {
  return (
    <section id="mentors" className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up">
          <span className="inline-block border border-secondary/30 px-4 py-1.5 text-xs tracking-widest uppercase text-secondary font-semibold mb-6">
            Section 3
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight mb-4">
            Mentors & Professionals
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-14">
            Join a global community of mentors guiding the next generation. Earn recognition, certification, and create lasting impact.
          </p>
        </AnimatedSection>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={100} animation="zoom-in">
          {programs.map((p) => (
            <div key={p.title} className="bg-card border border-border p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-accent/40 group">
              <div className="w-11 h-11 border border-accent/40 flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:border-accent transition-colors duration-300">
                <p.icon className="text-accent" size={20} />
              </div>
              <h3 className="text-lg font-semibold font-montserrat text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </StaggeredChildren>

        {/* Highlight strip */}
        <AnimatedSection animation="fade-up" delay={200} className="mt-12">
          <div className="bg-wekit-soft border border-border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold font-montserrat text-foreground mb-1">Recognition. Certification. Impact.</h4>
              <p className="text-sm text-muted-foreground">Mentors receive verified certifications, community recognition, and tools to measure their mentoring impact.</p>
            </div>
            <Link to="/mentor-waitlist" className="inline-flex items-center gap-2 text-secondary font-semibold text-sm whitespace-nowrap hover:gap-3 transition-all duration-300">
              Join as Mentor <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MentorsAndProfessionals;
