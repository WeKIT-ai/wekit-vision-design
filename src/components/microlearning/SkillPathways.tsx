
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Clock, 
  Play, 
  Lock, 
  CheckCircle, 
  Star,
  ArrowRight,
  BookOpen,
  Gamepad2,
  PenTool,
  MessageCircle
} from 'lucide-react';

interface SkillPathway {
  id: string;
  title: string;
  icon: any;
  color: string;
  modules: number;
  progress: number;
  description: string;
  badges: string[];
}

interface SkillPathwaysProps {
  pathways: SkillPathway[];
  onSelectLesson: (lesson: any) => void;
}

const SkillPathways = ({ pathways, onSelectLesson }: SkillPathwaysProps) => {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);

  const sampleLessons = {
    'critical-thinking': [
      {
        id: 1,
        title: 'Logic Puzzle of the Day',
        type: 'puzzle',
        duration: 8,
        completed: true,
        locked: false,
        description: 'Solve mind-bending puzzles to sharpen your logical reasoning'
      },
      {
        id: 2,
        title: 'Science Mystery Challenge',
        type: 'story',
        duration: 12,
        completed: true,
        locked: false,
        description: 'Detective work meets science in this engaging mystery'
      },
      {
        id: 3,
        title: 'Strategy Game Scenario',
        type: 'game',
        duration: 15,
        completed: false,
        locked: false,
        description: 'Make strategic decisions in real-world scenarios'
      },
      {
        id: 4,
        title: 'Advanced Problem Solving',
        type: 'lesson',
        duration: 10,
        completed: false,
        locked: true,
        description: 'Complex problems require sophisticated thinking'
      }
    ],
    'creativity': [
      {
        id: 1,
        title: 'Art Sprint Challenge',
        type: 'creative',
        duration: 10,
        completed: true,
        locked: false,
        description: 'Create amazing art in just 10 minutes'
      },
      {
        id: 2,
        title: 'Mini Story Builder',
        type: 'story',
        duration: 15,
        completed: false,
        locked: false,
        description: 'Craft compelling narratives with interactive elements'
      },
      {
        id: 3,
        title: 'Inventor\'s Challenge',
        type: 'game',
        duration: 12,
        completed: false,
        locked: false,
        description: 'Design solutions to everyday problems'
      }
    ]
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'puzzle': return PenTool;
      case 'story': return BookOpen;
      case 'game': return Gamepad2;
      case 'creative': return Star;
      default: return MessageCircle;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'puzzle': return 'bg-blue-100 text-blue-600';
      case 'story': return 'bg-green-100 text-green-600';
      case 'game': return 'bg-purple-100 text-purple-600';
      case 'creative': return 'bg-pink-100 text-pink-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  if (selectedPathway) {
    const pathway = pathways.find(p => p.id === selectedPathway);
    const lessons = sampleLessons[selectedPathway as keyof typeof sampleLessons] || [];
    const IconComponent = pathway?.icon;

    return (
      <div className="space-y-6">
        {/* Pathway Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setSelectedPathway(null)}
              className="mb-4"
            >
              ← Back to Pathways
            </Button>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              {IconComponent && (
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-8 h-8" />
                </div>
              )}
              <div>
                <h2 className="text-3xl font-bold">{pathway?.title}</h2>
                <p className="text-blue-100 mt-2">{pathway?.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div>
                <p className="text-blue-100 text-sm">Progress</p>
                <Progress value={pathway?.progress} className="w-48 h-3 mt-1" />
              </div>
              <div>
                <p className="text-blue-100 text-sm">Modules</p>
                <p className="text-2xl font-bold">{pathway?.modules}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => {
            const TypeIcon = getTypeIcon(lesson.type);
            return (
              <Card 
                key={lesson.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  lesson.locked ? 'opacity-60' : 'hover:scale-105 cursor-pointer'
                }`}
                onClick={() => !lesson.locked && onSelectLesson(lesson)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(lesson.type)}`}>
                      <TypeIcon className="w-5 h-5" />
                    </div>
                    {lesson.completed && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                    {lesson.locked && (
                      <Lock className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {lesson.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {lesson.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{lesson.duration} min</span>
                    </div>
                    {!lesson.locked && (
                      <Button size="sm" variant={lesson.completed ? "outline" : "default"}>
                        {lesson.completed ? "Review" : "Start"}
                        <Play className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
                {lesson.locked && (
                  <div className="absolute inset-0 bg-gray-500/10 flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Complete previous lessons</p>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Each pathway contains bite-sized lessons designed to build essential skills for your future success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pathways.map((pathway) => {
          const IconComponent = pathway.icon;
          const completedModules = Math.round((pathway.progress / 100) * pathway.modules);
          
          return (
            <Card 
              key={pathway.id}
              className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedPathway(pathway.id)}
            >
              <div className={`absolute top-0 left-0 right-0 h-2 ${pathway.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-12 h-12 ${pathway.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{pathway.title}</CardTitle>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pathway.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{completedModules}/{pathway.modules} modules</span>
                  </div>
                  <Progress value={pathway.progress} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {pathway.badges.slice(0, 2).map((badge, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                  {pathway.badges.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{pathway.badges.length - 2} more
                    </Badge>
                  )}
                </div>

                <Button 
                  className="w-full group-hover:bg-gray-900 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPathway(pathway.id);
                  }}
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SkillPathways;
