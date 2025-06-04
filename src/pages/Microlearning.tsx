
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Lightbulb, 
  Users, 
  Smartphone, 
  Heart, 
  Shield,
  Trophy,
  Star,
  Clock,
  Play,
  BookOpen,
  Target,
  Zap
} from 'lucide-react';
import MicrolearningDashboard from '@/components/microlearning/MicrolearningDashboard';
import SkillPathways from '@/components/microlearning/SkillPathways';
import GameCenter from '@/components/microlearning/GameCenter';
import BadgeCollection from '@/components/microlearning/BadgeCollection';
import LessonPlayer from '@/components/microlearning/LessonPlayer';

const Microlearning = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedLesson, setSelectedLesson] = useState(null);

  const skillPathways = [
    {
      id: 'critical-thinking',
      title: 'Critical Thinking & Problem-Solving',
      icon: Brain,
      color: 'bg-blue-500',
      modules: 15,
      progress: 60,
      description: 'Master logic, analysis, and strategic thinking',
      badges: ['Logic Master', 'Problem Solver', 'Strategy Expert']
    },
    {
      id: 'creativity',
      title: 'Creativity & Innovation',
      icon: Lightbulb,
      color: 'bg-purple-500',
      modules: 12,
      progress: 40,
      description: 'Unleash your creative potential and innovative thinking',
      badges: ['Creative Genius', 'Innovation Star', 'Idea Generator']
    },
    {
      id: 'collaboration',
      title: 'Collaboration & Communication',
      icon: Users,
      color: 'bg-green-500',
      modules: 18,
      progress: 75,
      description: 'Excel in teamwork and effective communication',
      badges: ['Team Player', 'Communication Pro', 'Leadership Skills']
    },
    {
      id: 'digital-literacy',
      title: 'Digital & AI Literacy',
      icon: Smartphone,
      color: 'bg-orange-500',
      modules: 20,
      progress: 30,
      description: 'Navigate the digital world with confidence',
      badges: ['Digital Native', 'AI Detective', 'Code Warrior']
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence',
      icon: Heart,
      color: 'bg-pink-500',
      modules: 14,
      progress: 85,
      description: 'Understand and manage emotions effectively',
      badges: ['Empathy Star', 'Mindfulness Master', 'EQ Champion']
    },
    {
      id: 'adaptability',
      title: 'Adaptability & Resilience',
      icon: Shield,
      color: 'bg-indigo-500',
      modules: 16,
      progress: 50,
      description: 'Build resilience and adapt to change',
      badges: ['Resilience Hero', 'Change Master', 'Bounce Back Champion']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-700 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            Microlearning Hub - Skill Snacks for Future Success
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Learn <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Essential Skills</span>
            <br />in Bite-Sized Lessons
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Master future-ready skills with 5-15 minute interactive lessons designed for IGCSE/Cambridge students. 
            Earn badges, compete on leaderboards, and level up your potential!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              5-15 min lessons
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Trophy className="w-4 h-4 mr-2" />
              Gamified Learning
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Target className="w-4 h-4 mr-2" />
              IGCSE Aligned
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="pathways" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Pathways
              </TabsTrigger>
              <TabsTrigger value="games" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Games
              </TabsTrigger>
              <TabsTrigger value="badges" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Badges
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Leaderboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <MicrolearningDashboard skillPathways={skillPathways} />
            </TabsContent>

            <TabsContent value="pathways">
              <SkillPathways 
                pathways={skillPathways} 
                onSelectLesson={setSelectedLesson}
              />
            </TabsContent>

            <TabsContent value="games">
              <GameCenter />
            </TabsContent>

            <TabsContent value="badges">
              <BadgeCollection />
            </TabsContent>

            <TabsContent value="leaderboard">
              <div className="text-center py-20">
                <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Leaderboard Coming Soon!</h3>
                <p className="text-gray-600">Compete with classmates and climb the rankings</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lesson Player Modal */}
      {selectedLesson && (
        <LessonPlayer 
          lesson={selectedLesson} 
          onClose={() => setSelectedLesson(null)} 
        />
      )}
    </div>
  );
};

export default Microlearning;
