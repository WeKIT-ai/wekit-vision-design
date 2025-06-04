
import { QuizStep } from '@/types/LessonTypes';

interface QuizStepProps {
  step: QuizStep;
  answers: { [key: number]: string };
  currentStep: number;
  onAnswerSelect: (answer: string, index: number) => void;
  onNext: () => void;
}

const QuizStepComponent = ({ step, answers, currentStep, onAnswerSelect, onNext }: QuizStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
      <p className="text-lg text-gray-700">{step.question}</p>
      <div className="space-y-3">
        {step.options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              onAnswerSelect(option, index);
              setTimeout(onNext, 1000);
            }}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:border-blue-500 hover:bg-blue-50 ${
              answers[currentStep] === option 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200'
            }`}
          >
            <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizStepComponent;
