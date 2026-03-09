
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const StudentsCTA = () => {
  const trackButtonClick = async (buttonType: string) => {
    try {
      await supabase.from('page_interactions').insert({
        page_name: '/students',
        interaction_type: 'cta_button_click',
        metadata: { button_type: buttonType, timestamp: new Date().toISOString() }
      });
    } catch (error) {}
  };

  const handleCareerAssessmentClick = async () => {
    trackButtonClick('career_assessment');
    try {
      await supabase.from('psychometric_test_leads').insert({ referral_source: 'students_page' });
    } catch (error) {}
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary-foreground mb-8">
          Stop Feeling Lost About Your Future
        </h2>
        <p className="text-lg text-primary-foreground/70 mb-8">
          Join thousands of students who went from career confusion to landing 
          their dream jobs. Your success story starts today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a href="https://wekit.ai/" target="_blank" rel="noopener noreferrer" onClick={handleCareerAssessmentClick}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300">
              Take Career Assessment
              <Brain className="ml-2" size={20} />
            </Button>
          </a>
          <a href="/discover" onClick={() => trackButtonClick('college_discovery')}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300">
              Discover Colleges
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
          <a href="/start-journey" onClick={() => trackButtonClick('career_transformation')}>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium transition-all duration-300">
              Start Your Career Transformation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentsCTA;
