
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SchoolsCTA = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary-foreground leading-tight">
          Transform Student Outcomes with
          <br />
          <span className="text-wekit-gold">WeKIT International</span>
        </h2>
        <p className="text-xl text-primary-foreground/70 leading-relaxed">
          Whether you're a high school, college, university, or training center — your students deserve better than a 41% job placement rate. 
          Partner with WeKIT International to make every graduate job-ready and industry-connected.
        </p>
        <p className="text-lg text-primary-foreground/50 italic">
          "Wot Kareer Is iT?" — We help your students find their answer
        </p>
        <div className="pt-4">
          <a href="/schools#lead-gen">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              Schedule Impact Assessment
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SchoolsCTA;
