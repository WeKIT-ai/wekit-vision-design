
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star, ArrowRight } from 'lucide-react';
import { Lesson } from '@/types/LessonTypes';

interface LessonResultsProps {
  lesson: Lesson;
  onClose: () => void;
}

const LessonResults = ({ lesson, onClose }: LessonResultsProps) => {
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
};

export default LessonResults;
