
import { Button } from '@/components/ui/button';
import { Check, Trophy, ArrowRight } from 'lucide-react';
import { ExplanationStep } from '@/types/LessonTypes';

interface ExplanationStepProps {
  step: ExplanationStep;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
}

const ExplanationStepComponent = ({ step, currentStep, totalSteps, onNext }: ExplanationStepProps) => {
  return (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{step.content}</p>
      </div>
      {step.points && (
        <div className="bg-yellow-50 p-6 rounded-lg">
          <div className="flex items-center justify-center space-x-2 text-yellow-800">
            <Trophy className="w-6 h-6" />
            <span className="text-xl font-bold">+{step.points} points earned!</span>
          </div>
        </div>
      )}
      <Button onClick={onNext} size="lg">
        {currentStep < totalSteps - 1 ? 'Continue' : 'Complete Lesson'}
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
};

export default ExplanationStepComponent;
