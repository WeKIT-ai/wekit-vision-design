
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Flame,
  Play,
  Star
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

interface MicrolearningDashboardProps {
  skillPathways: SkillPathway[];
}

const MicrolearningDashboard = ({ skillPathways }: MicrolearningDashboardProps) => {
  const totalProgress = Math.round(
    skillPathways.reduce((acc, pathway) => acc + pathway.progress, 0) / skillPathways.length
  );

  const completedModules = skillPathways.reduce((acc, pathway) => 
    acc + Math.round((pathway.progress / 100) * pathway.modules), 0
  );

  const totalModules = skillPathways.reduce((acc, pathway) => acc + pathway.modules, 0);

  const recentAchievements = [
    { badge: 'Creative Genius', pathway: 'Creativity & Innovation', date: '2 days ago' },
    { badge: 'Team Player', pathway: 'Collaboration', date: '1 week ago' },
    { badge: 'Logic Master', pathway: 'Critical Thinking', date: '2 weeks ago' }
  ];

  const dailyStreak = 7;

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Overall Progress</p>
                <p className="text-3xl font-bold">{totalProgress}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Modules Completed</p>
                <p className="text-3xl font-bold">{completedModules}/{totalModules}</p>
              </div>
              <Target className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">Daily Streak</p>
                <p className="text-3xl font-bold">{dailyStreak} days</p>
              </div>
              <Flame className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Time Spent</p>
                <p className="text-3xl font-bold">2.5h</p>
              </div>
              <Clock className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Continue Learning Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="w-5 h-5 text-blue-600" />
              Continue Learning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillPathways.slice(0, 3).map((pathway) => {
              const IconComponent = pathway.icon;
              return (
                <div key={pathway.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className={`w-12 h-12 ${pathway.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{pathway.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress value={pathway.progress} className="flex-1 h-2" />
                      <span className="text-sm text-gray-500">{pathway.progress}%</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Continue
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{achievement.badge}</h4>
                  <p className="text-sm text-gray-600">{achievement.pathway}</p>
                  <p className="text-xs text-gray-500">{achievement.date}</p>
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  New!
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <CardContent className="p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Today's Challenge?</h3>
            <p className="text-purple-100 mb-6">
              Complete a 10-minute module and earn points toward your next badge!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Daily Challenge
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Quick Quiz
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MicrolearningDashboard;
