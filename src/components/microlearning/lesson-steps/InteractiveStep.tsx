
import { Card, CardContent } from '@/components/ui/card';
import { InteractiveStep } from '@/types/LessonTypes';

interface InteractiveStepProps {
  step: InteractiveStep;
  onAnswerSelect: (answer: string, index: number) => void;
  onNext: () => void;
}

const InteractiveStepComponent = ({ step, onAnswerSelect, onNext }: InteractiveStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
      <p className="text-lg text-gray-700">{step.content}</p>
      <div className="grid gap-4">
        {step.options.map((option, index) => (
          <Card 
            key={index}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => {
              onAnswerSelect(option, index);
              setTimeout(onNext, 1000);
            }}
          >
            <CardContent className="p-4">
              <p className="font-medium">{option}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InteractiveStepComponent;
