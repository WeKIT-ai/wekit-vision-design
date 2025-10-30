
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const StudentsCTA = () => {
  const trackButtonClick = async (buttonType: string) => {
    try {
      await supabase
        .from('page_interactions')
        .insert({
          page_name: '/students',
          interaction_type: 'cta_button_click',
          interaction_data: {
            button_type: buttonType,
            timestamp: new Date().toISOString()
          }
        });
    } catch (error) {
      // Silently handle error - don't expose to console
    }
  };

  const handleCareerAssessmentClick = async () => {
    trackButtonClick('career_assessment');
    // Track as psychometric test lead
    try {
      await supabase
        .from('psychometric_test_leads')
        .insert({
          referral_source: 'students_page'
        });
    } catch (error) {
      // Silently handle error - don't expose to console
    }
  };

  const handleCareerTransformationClick = () => {
    trackButtonClick('career_transformation');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Stop Feeling Lost About Your Future
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of students who went from career confusion to landing 
          their dream jobs. Your success story starts today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://purpose-pathway-pilot.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleCareerAssessmentClick}
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full mb-4 sm:mb-0"
            >
              Take Career Assessment
              <Brain className="ml-2" size={20} />
            </Button>
          </a>
          <a 
            href="/start-journey" 
            onClick={handleCareerTransformationClick}
          >
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
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
