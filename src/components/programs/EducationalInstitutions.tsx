import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, School, BookOpen } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Link } from 'react-router-dom';

// Reuse the schools-landing components inline for the full system
import WhyPartner from '@/components/schools-landing/WhyPartner';
import FutureReadinessSystem from '@/components/schools-landing/FutureReadinessSystem';
import StudentJourneyTimeline from '@/components/schools-landing/StudentJourneyTimeline';
import InstitutionalImpact from '@/components/schools-landing/InstitutionalImpact';
import SchoolDiscoveryCTA from '@/components/schools-landing/SchoolDiscoveryCTA';

const DISCOVERY_URL = 'https://forms.zoho.in/wekitmentoring/form/WeKITActualLifeSkillsLabSchoolDiscoveryInput2';

const audiences = [
  { icon: School, label: 'Schools (Grades 8–12)' },
  { icon: GraduationCap, label: 'Colleges & Universities' },
  { icon: BookOpen, label: 'Alternative & Future-Ready Institutions' },
];

const EducationalInstitutions = () => {
  return (
    <div id="institutions">
      {/* Section Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <span className="inline-block border border-secondary/30 px-4 py-1.5 text-xs tracking-widest uppercase text-secondary font-semibold mb-6">
              Section 1
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight mb-4">
              Educational Institutions
            </h2>
            <p className="text-lg text-secondary font-medium mb-4">
              Future readiness infrastructure for schools and colleges.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl leading-relaxed mb-8">
              WeKIT provides a plug-and-play mentorship and career development ecosystem that helps institutions guide students from self-discovery to career pathways.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="flex flex-wrap gap-4 mb-10" staggerDelay={100} animation="fade-up">
            {audiences.map((a) => (
              <div key={a.label} className="flex items-center gap-3 bg-wekit-soft border border-border px-5 py-3">
                <a.icon className="text-secondary" size={18} />
                <span className="text-sm font-medium text-foreground">{a.label}</span>
              </div>
            ))}
          </StaggeredChildren>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group">
                  Request a School Partnership Discovery
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Button>
              </a>
              <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-medium transition-all duration-300 hover:translate-y-[-2px]">
                  Start the School Discovery Process
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reuse the detailed schools-landing subsections */}
      <WhyPartner />
      <FutureReadinessSystem />
      <StudentJourneyTimeline />
      <InstitutionalImpact />
      <SchoolDiscoveryCTA />
    </div>
  );
};

export default EducationalInstitutions;
