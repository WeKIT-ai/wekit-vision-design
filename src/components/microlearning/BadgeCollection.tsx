
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Star, 
  Award, 
  Crown, 
  Shield, 
  Zap,
  Target,
  Heart,
  Brain,
  Users,
  Lightbulb,
  Lock
} from 'lucide-react';

const BadgeCollection = () => {
  const earnedBadges = [
    {
      id: 1,
      name: 'Logic Master',
      description: 'Solved 10 logic puzzles perfectly',
      category: 'Critical Thinking',
      icon: Brain,
      color: 'bg-blue-500',
      rarity: 'Common',
      earnedDate: '2024-01-15',
      points: 100
    },
    {
      id: 2,
      name: 'Creative Genius',
      description: 'Completed 5 creativity challenges with top scores',
      category: 'Creativity',
      icon: Lightbulb,
      color: 'bg-purple-500',
      rarity: 'Rare',
      earnedDate: '2024-01-10',
      points: 200
    },
    {
      id: 3,
      name: 'Team Player',
      description: 'Participated in 3 successful team projects',
      category: 'Collaboration',
      icon: Users,
      color: 'bg-green-500',
      rarity: 'Common',
      earnedDate: '2024-01-08',
      points: 150
    },
    {
      id: 4,
      name: 'Empathy Star',
      description: 'Completed emotional intelligence pathway',
      category: 'Emotional Intelligence',
      icon: Heart,
      color: 'bg-pink-500',
      rarity: 'Epic',
      earnedDate: '2024-01-05',
      points: 300
    },
    {
      id: 5,
      name: 'Daily Warrior',
      description: 'Maintained 7-day learning streak',
      category: 'Achievement',
      icon: Shield,
      color: 'bg-orange-500',
      rarity: 'Rare',
      earnedDate: '2024-01-12',
      points: 250
    }
  ];

  const availableBadges = [
    {
      id: 6,
      name: 'Code Warrior',
      description: 'Complete 15 coding challenges',
      category: 'Digital Literacy',
      icon: Zap,
      color: 'bg-indigo-500',
      rarity: 'Rare',
      progress: 60,
      requirement: '9/15 challenges completed'
    },
    {
      id: 7,
      name: 'Resilience Hero',
      description: 'Master adaptability challenges',
      category: 'Adaptability',
      icon: Target,
      color: 'bg-red-500',
      rarity: 'Epic',
      progress: 30,
      requirement: '3/10 challenges completed'
    },
    {
      id: 8,
      name: 'Master Learner',
      description: 'Complete all 6 skill pathways',
      category: 'Achievement',
      icon: Crown,
      color: 'bg-yellow-500',
      rarity: 'Legendary',
      progress: 45,
      requirement: '2.7/6 pathways completed'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-100 text-gray-800';
      case 'Rare': return 'bg-blue-100 text-blue-800';
      case 'Epic': return 'bg-purple-100 text-purple-800';
      case 'Legendary': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    totalBadges: earnedBadges.length,
    totalPoints: earnedBadges.reduce((sum, badge) => sum + badge.points, 0),
    completionRate: Math.round((earnedBadges.length / (earnedBadges.length + availableBadges.length)) * 100)
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Badge Collection</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Showcase your achievements and track your progress toward new badges!
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
          <CardContent className="p-6 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <p className="text-3xl font-bold">{stats.totalBadges}</p>
            <p className="text-yellow-100">Badges Earned</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          <CardContent className="p-6 text-center">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <p className="text-3xl font-bold">{stats.totalPoints}</p>
            <p className="text-purple-100">Total Points</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
          <CardContent className="p-6 text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <p className="text-3xl font-bold">{stats.completionRate}%</p>
            <p className="text-blue-100">Collection Complete</p>
          </CardContent>
        </Card>
      </div>

      {/* Earned Badges */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
          Earned Badges
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {earnedBadges.map((badge) => {
            const IconComponent = badge.icon;
            return (
              <Card 
                key={badge.id}
                className="transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-yellow-400"></div>
                <div className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{badge.name}</h4>
                  <p className="text-xs text-gray-600 mb-3 leading-tight">{badge.description}</p>
                  <div className="space-y-2">
                    <Badge className={getRarityColor(badge.rarity)} variant="secondary">
                      {badge.rarity}
                    </Badge>
                    <p className="text-xs text-gray-500">{badge.category}</p>
                    <p className="text-xs font-medium text-blue-600">{badge.points} points</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Available Badges */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Lock className="w-6 h-6 mr-2 text-gray-400" />
          Available Badges
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableBadges.map((badge) => {
            const IconComponent = badge.icon;
            return (
              <Card 
                key={badge.id}
                className="transition-all duration-300 hover:shadow-lg cursor-pointer group relative opacity-80"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${badge.color} rounded-lg flex items-center justify-center opacity-60`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{badge.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                      <div className="space-y-2">
                        <Badge className={getRarityColor(badge.rarity)} variant="secondary">
                          {badge.rarity}
                        </Badge>
                        <p className="text-xs text-gray-500">{badge.requirement}</p>
                        <div>
                          <Progress value={badge.progress} className="h-2" />
                          <p className="text-xs text-gray-500 mt-1">{badge.progress}% complete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Badge Categories */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            Badge Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Critical Thinking', icon: Brain, color: 'bg-blue-500' },
              { name: 'Creativity', icon: Lightbulb, color: 'bg-purple-500' },
              { name: 'Collaboration', icon: Users, color: 'bg-green-500' },
              { name: 'Digital Literacy', icon: Zap, color: 'bg-orange-500' },
              { name: 'Emotional Intelligence', icon: Heart, color: 'bg-pink-500' },
              { name: 'Achievements', icon: Trophy, color: 'bg-yellow-500' }
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{category.name}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BadgeCollection;
