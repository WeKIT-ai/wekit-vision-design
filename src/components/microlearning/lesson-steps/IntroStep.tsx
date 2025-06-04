
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { IntroStep } from '@/types/LessonTypes';

interface IntroStepProps {
  step: IntroStep;
  onNext: () => void;
}

const IntroStepComponent = ({ step, onNext }: IntroStepProps) => {
  return (
    <div className="text-center space-y-6">
      {step.image && (
        <img 
          src={step.image} 
          alt={step.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{step.content}</p>
      </div>
      <Button onClick={onNext} size="lg" className="mt-6">
        Let's Start!
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
};

export default IntroStepComponent;
