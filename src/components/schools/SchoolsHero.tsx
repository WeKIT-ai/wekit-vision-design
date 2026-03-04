import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap } from 'lucide-react';

const SchoolsHero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-8 bg-wekit-soft overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full text-sm font-medium text-foreground">
            <GraduationCap size={18} />
            Grades 8-12 Framework
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-foreground leading-[1.1] tracking-tight">
            WeKIT for Schools & Colleges
            <br />
            <span className="text-wekit-teal">
              Future-Ready Spine
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Move from "we care about life skills" to proof-backed, AI-powered mentoring 
            and credentialing across Grades 8-12 — without timetable chaos.
          </p>
          
          <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto shadow-sm">
            <h3 className="text-lg font-semibold font-montserrat text-foreground mb-3">Why Partner with WeKIT?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Institutions get a clear, board-sensitive framework that integrates 
              <span className="font-medium text-wekit-teal"> life skills, mentoring, careers and purpose</span> — fully 
              mapped to CBSE/ICSE and Cambridge/PSHE outcomes.
            </p>
          </div>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              Explore Our Framework
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg font-medium rounded-2xl transition-all duration-300"
            >
              Download One-Pager
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsHero;
