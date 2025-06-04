
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { X, Clock, BookOpen } from 'lucide-react';
import { Lesson, LessonStep, BaseLessonStep } from '@/types/LessonTypes';
import { getLessonContent } from '@/utils/lessonContent';
import IntroStepComponent from './lesson-steps/IntroStep';
import StoryStepComponent from './lesson-steps/StoryStep';
import QuizStepComponent from './lesson-steps/QuizStep';
import InteractiveStepComponent from './lesson-steps/InteractiveStep';
import ExplanationStepComponent from './lesson-steps/ExplanationStep';
import LessonResults from './LessonResults';

interface LessonPlayerProps {
  lesson: Lesson;
  onClose: () => void;
}

const LessonPlayer = ({ lesson, onClose }: LessonPlayerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const content = getLessonContent(lesson);
  const currentStepData = content.steps[currentStep];
  const progress = ((currentStep + 1) / content.steps.length) * 100;

  const handleNext = () => {
    if (currentStep < content.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleAnswerSelect = (answer: string, index: number) => {
    setAnswers({ ...answers, [currentStep]: answer });
  };

  const renderStepContent = () => {
    switch (currentStepData.type) {
      case 'intro':
        return (
          <IntroStepComponent 
            step={currentStepData} 
            onNext={handleNext} 
          />
        );

      case 'story':
        return (
          <StoryStepComponent 
            step={currentStepData} 
            onNext={handleNext} 
          />
        );

      case 'quiz':
        return (
          <QuizStepComponent 
            step={currentStepData} 
            answers={answers}
            currentStep={currentStep}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNext}
          />
        );

      case 'interactive':
        return (
          <InteractiveStepComponent 
            step={currentStepData} 
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNext}
          />
        );

      case 'explanation':
      case 'reveal':
        return (
          <ExplanationStepComponent 
            step={currentStepData} 
            currentStep={currentStep}
            totalSteps={content.steps.length}
            onNext={handleNext}
          />
        );

      default:
        // Handle any unknown step types by falling back to the base properties
        const baseStep = currentStepData as BaseLessonStep;
        return (
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">{baseStep.title}</h3>
            <p className="text-lg text-gray-600">{baseStep.content}</p>
            <Button onClick={handleNext}>Next</Button>
          </div>
        );
    }
  };

  if (showResults) {
    return <LessonResults lesson={lesson} onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <Badge variant="outline">{lesson.type}</Badge>
              </div>
              <h2 className="text-xl font-bold text-gray-900">{lesson.title}</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{lesson.duration} min</span>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{currentStep + 1} of {content.steps.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="p-8">
          {renderStepContent()}
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlayer;
