
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { StoryStep } from '@/types/LessonTypes';

interface StoryStepProps {
  step: StoryStep;
  onNext: () => void;
}

const StoryStepComponent = ({ step, onNext }: StoryStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
      <p className="text-lg text-gray-700 leading-relaxed">{step.content}</p>
      {step.clues && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-4">Clues:</h4>
          <ul className="space-y-2">
            {step.clues.map((clue, index) => (
              <li key={index} className="flex items-start space-x-2 text-blue-800">
                <span className="font-bold">{index + 1}.</span>
                <span>{clue}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Button onClick={onNext} size="lg">
        Continue
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
};

export default StoryStepComponent;
