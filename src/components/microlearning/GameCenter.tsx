
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Gamepad2, 
  Puzzle, 
  Target, 
  Brain, 
  Zap, 
  Timer,
  Users,
  Trophy,
  Play,
  Star
} from 'lucide-react';

const GameCenter = () => {
  const games = [
    {
      id: 1,
      title: 'Logic Blast',
      description: 'Solve puzzles under time pressure to boost critical thinking',
      category: 'Critical Thinking',
      difficulty: 'Medium',
      players: 'Single Player',
      duration: '5-10 min',
      icon: Brain,
      color: 'bg-blue-500',
      points: 150,
      badge: 'Logic Master'
    },
    {
      id: 2,
      title: 'Creativity Quest',
      description: 'Design solutions and create art in timed challenges',
      category: 'Creativity',
      difficulty: 'Easy',
      players: 'Single Player',
      duration: '8-12 min',
      icon: Star,
      color: 'bg-purple-500',
      points: 200,
      badge: 'Creative Genius'
    },
    {
      id: 3,
      title: 'Team Builder Arena',
      description: 'Collaborate with peers to solve group challenges',
      category: 'Collaboration',
      difficulty: 'Hard',
      players: 'Multiplayer',
      duration: '15 min',
      icon: Users,
      color: 'bg-green-500',
      points: 300,
      badge: 'Team Champion'
    },
    {
      id: 4,
      title: 'Code Breaker',
      description: 'Learn programming concepts through interactive puzzles',
      category: 'Digital Literacy',
      difficulty: 'Medium',
      players: 'Single Player',
      duration: '10-15 min',
      icon: Zap,
      color: 'bg-orange-500',
      points: 250,
      badge: 'Code Warrior'
    },
    {
      id: 5,
      title: 'Empathy Adventures',
      description: 'Navigate social scenarios and build emotional intelligence',
      category: 'Emotional Intelligence',
      difficulty: 'Easy',
      players: 'Single Player',
      duration: '6-10 min',
      icon: Target,
      color: 'bg-pink-500',
      points: 180,
      badge: 'Empathy Star'
    },
    {
      id: 6,
      title: 'Resilience Challenge',
      description: 'Face setbacks and learn to bounce back stronger',
      category: 'Adaptability',
      difficulty: 'Hard',
      players: 'Single Player',
      duration: '12-15 min',
      icon: Puzzle,
      color: 'bg-indigo-500',
      points: 280,
      badge: 'Resilience Hero'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlayersColor = (players: string) => {
    return players === 'Multiplayer' 
      ? 'bg-blue-100 text-blue-800' 
      : 'bg-purple-100 text-purple-800';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Game Center</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn essential skills through engaging games and challenges. Earn points, unlock badges, and compete with friends!
        </p>
      </div>

      {/* Featured Game */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="w-6 h-6" />
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Featured Game
                </Badge>
              </div>
              <h3 className="text-3xl font-bold mb-4">Daily Challenge Arena</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Take on today's special challenge combining multiple skills. 
                Complete it for bonus points and exclusive badges!
              </p>
              <div className="flex items-center space-x-6 text-purple-100 mb-6">
                <div className="flex items-center space-x-2">
                  <Timer className="w-5 h-5" />
                  <span>15 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5" />
                  <span>500 points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Daily Master Badge</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Play className="w-5 h-5 mr-2" />
                Play Daily Challenge
              </Button>
            </div>
            <div className="hidden lg:block w-64 h-48 bg-white/10 rounded-lg flex items-center justify-center ml-8">
              <Gamepad2 className="w-24 h-24 text-white/30" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => {
          const IconComponent = game.icon;
          return (
            <Card 
              key={game.id}
              className="transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-12 h-12 ${game.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{game.title}</CardTitle>
                    <p className="text-sm text-gray-500">{game.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {game.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className={getDifficultyColor(game.difficulty)}>
                    {game.difficulty}
                  </Badge>
                  <Badge className={getPlayersColor(game.players)}>
                    {game.players}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Timer className="w-4 h-4" />
                    <span>{game.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4" />
                    <span>{game.points} pts</span>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  <span className="font-medium">Unlock:</span> {game.badge}
                </div>

                <Button className="w-full group-hover:bg-gray-900 transition-colors">
                  <Play className="w-4 h-4 mr-2" />
                  Play Game
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Coming Soon Section */}
      <Card className="bg-gray-50">
        <CardContent className="p-8 text-center">
          <Gamepad2 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">More Games Coming Soon!</h3>
          <p className="text-gray-600 mb-6">
            We're developing new games and challenges based on your feedback. 
            What type of games would you like to see next?
          </p>
          <Button variant="outline">
            Request a Game
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameCenter;
