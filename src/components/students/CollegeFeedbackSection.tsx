import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Users, BarChart3, MessageSquare } from 'lucide-react';

const CollegeFeedbackSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real College Insights from Real Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get honest, unfiltered feedback about colleges from students who actually studied there. 
            Make informed decisions based on real experiences, not marketing brochures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Academic Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Real ratings on teaching quality, curriculum, and academic support
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Campus Life</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Honest reviews about student life, clubs, and social atmosphere
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <BarChart3 className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Placements</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Transparent data on job placements and career outcomes
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <MessageSquare className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Student Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Unbiased feedback from graduates and current students
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Don't Choose Blindly. Choose Wisely.
          </h3>
          <p className="text-lg mb-6 text-purple-100 max-w-2xl mx-auto">
            Access thousands of authentic college reviews, ratings, and insights from students 
            who've walked the path you're about to take. Make your college decision with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wekit-college-dicovery.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Explore College Reviews
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
            <div className="text-sm text-purple-200">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                Join 10,000+ students making informed choices
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Powered by real student experiences • Updated daily • 100% authentic reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollegeFeedbackSection;