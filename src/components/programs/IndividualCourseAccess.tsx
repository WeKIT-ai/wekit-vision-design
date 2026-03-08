import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';

const IndividualCourseAccess = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection animation="fade-up">
          <div className="w-16 h-16 border border-accent/40 flex items-center justify-center mx-auto mb-8">
            <BookOpen className="text-accent" size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight mb-6">
            Access WeKIT Courses Individually
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Students, homeschool families, churches, and NGOs can access WeKIT courses independently using invitation access codes.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-base font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group">
            Request Access Code
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IndividualCourseAccess;
