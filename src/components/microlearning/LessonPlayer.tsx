
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  Play, 
  Pause, 
  SkipForward, 
  Check, 
  Star,
  Clock,
  Trophy,
  ArrowRight,
  BookOpen,
  MessageCircle
} from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  type: string;
  duration: number;
  description: string;
}

interface LessonPlayerProps {
  lesson: Lesson;
  onClose: () => void;
}

interface BaseLessonStep {
  type: string;
  title: string;
  content: string;
}

interface IntroStep extends BaseLessonStep {
  type: 'intro';
  image?: string;
}

interface StoryStep extends BaseLessonStep {
  type: 'story';
  clues?: string[];
}

interface QuizStep extends BaseLessonStep {
  type: 'quiz';
  question: string;
  options: string[];
  correct: number;
}

interface InteractiveStep extends BaseLessonStep {
  type: 'interactive';
  options: string[];
}

interface ExplanationStep extends BaseLessonStep {
  type: 'explanation' | 'reveal';
  points?: number;
}

type LessonStep = IntroStep | StoryStep | QuizStep | InteractiveStep | ExplanationStep;

const LessonPlayer = ({ lesson, onClose }: LessonPlayerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  // Sample lesson content based on type
  const getLessonContent = (): { steps: LessonStep[] } => {
    switch (lesson.type) {
      case 'puzzle':
        return {
          steps: [
            {
              type: 'intro',
              title: 'Logic Puzzle Challenge',
              content: 'Welcome to today\'s logic puzzle! You\'ll need to use deductive reasoning to solve this mystery.',
              image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            } as IntroStep,
            {
              type: 'story',
              title: 'The Case',
              content: 'Three friends - Alex, Blake, and Casey - each have a different pet (dog, cat, bird) and favorite color (red, blue, green). Can you figure out who has what?',
              clues: [
                'Alex doesn\'t like red and doesn\'t have a dog',
                'The person with the bird likes blue',
                'Casey has a cat and doesn\'t like green'
              ]
            } as StoryStep,
            {
              type: 'quiz',
              title: 'Solve the Puzzle',
              content: 'Now let\'s test your reasoning',
              question: 'Who has the bird?',
              options: ['Alex', 'Blake', 'Casey'],
              correct: 0
            } as QuizStep,
            {
              type: 'explanation',
              title: 'Great Work!',
              content: 'Alex has the bird! Since Casey has a cat and Alex doesn\'t have a dog, Alex must have the bird. And since the bird owner likes blue, Alex likes blue.',
              points: 150
            } as ExplanationStep
          ]
        };
      case 'story':
        return {
          steps: [
            {
              type: 'intro',
              title: 'Science Mystery: The Missing Formula',
              content: 'Dr. Chen\'s revolutionary formula has disappeared from her lab. As a detective scientist, you must solve this mystery!',
              image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            } as IntroStep,
            {
              type: 'interactive',
              title: 'Examine the Evidence',
              content: 'You find three clues at the scene. Which one seems most important?',
              options: [
                'A coffee mug with lipstick marks',
                'A torn piece of paper with chemical symbols',
                'An open window with muddy footprints'
              ]
            } as InteractiveStep,
            {
              type: 'reveal',
              title: 'The Chemical Trail',
              content: 'The torn paper contains part of the formula! You notice it matches the periodic table pattern Dr. Chen was working on.',
              points: 100
            } as ExplanationStep
          ]
        };
      default:
        return {
          steps: [
            {
              type: 'intro',
              title: lesson.title,
              content: 'Welcome to this engaging lesson!',
              image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            } as IntroStep
          ]
        };
    }
  };

  const content = getLessonContent();
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
        const introStep = currentStepData as IntroStep;
        return (
          <div className="text-center space-y-6">
            {introStep.image && (
              <img 
                src={introStep.image} 
                alt={introStep.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{introStep.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{introStep.content}</p>
            </div>
            <Button onClick={handleNext} size="lg" className="mt-6">
              Let's Start!
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );

      case 'story':
        const storyStep = currentStepData as StoryStep;
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">{storyStep.title}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{storyStep.content}</p>
            {storyStep.clues && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">Clues:</h4>
                <ul className="space-y-2">
                  {storyStep.clues.map((clue, index) => (
                    <li key={index} className="flex items-start space-x-2 text-blue-800">
                      <span className="font-bold">{index + 1}.</span>
                      <span>{clue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Button onClick={handleNext} size="lg">
              Continue
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );

      case 'quiz':
        const quizStep = currentStepData as QuizStep;
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">{quizStep.title}</h3>
            <p className="text-lg text-gray-700">{quizStep.question}</p>
            <div className="space-y-3">
              {quizStep.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleAnswerSelect(option, index);
                    setTimeout(handleNext, 1000);
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

      case 'interactive':
        const interactiveStep = currentStepData as InteractiveStep;
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">{interactiveStep.title}</h3>
            <p className="text-lg text-gray-700">{interactiveStep.content}</p>
            <div className="grid gap-4">
              {interactiveStep.options.map((option, index) => (
                <Card 
                  key={index}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => {
                    handleAnswerSelect(option, index);
                    setTimeout(handleNext, 1000);
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

      case 'explanation':
      case 'reveal':
        const explanationStep = currentStepData as ExplanationStep;
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{explanationStep.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{explanationStep.content}</p>
            </div>
            {explanationStep.points && (
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-yellow-800">
                  <Trophy className="w-6 h-6" />
                  <span className="text-xl font-bold">+{explanationStep.points} points earned!</span>
                </div>
              </div>
            )}
            <Button onClick={handleNext} size="lg">
              {currentStep < content.steps.length - 1 ? 'Continue' : 'Complete Lesson'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
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
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-2xl max-h-[90vh] overflow-auto">
          <CardHeader className="text-center border-b">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl">Lesson Complete!</CardTitle>
            <p className="text-gray-600">Congratulations on completing "{lesson.title}"</p>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">250</p>
                  <p className="text-sm text-blue-800">Points Earned</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">95%</p>
                  <p className="text-sm text-green-800">Accuracy</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-2">Badge Progress</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-yellow-700">Logic Master</span>
                  <span className="text-sm text-yellow-700">8/10</span>
                </div>
                <Progress value={80} className="h-2" />
                <p className="text-xs text-yellow-600 mt-1">2 more lessons to unlock!</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button onClick={onClose} variant="outline" className="flex-1">
                Back to Dashboard
              </Button>
              <Button className="flex-1">
                Next Lesson
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
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
