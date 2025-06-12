
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Heart, Users, BookOpen, Target } from 'lucide-react';

const NRECTSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60"
              alt="Education and Youth Development"
              className="w-20 h-20 rounded-full object-cover shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Partnership Spotlight
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Napoleon Roberts Educational and Charitable Trust
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partnering with NRECT to transform educational opportunities and create pathways 
            to success for underserved youth through innovative mentorship and support programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Bridging Dreams with Reality
            </h4>
            <p className="text-gray-600 leading-relaxed">
              The Napoleon Roberts Educational and Charitable Trust shares our vision of empowering 
              young minds through education and mentorship. Together, we're creating comprehensive 
              support systems that address both educational needs and career development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <BookOpen className="text-green-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">Educational Support</p>
                  <p className="text-sm text-gray-600">Scholarships & Resources</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Users className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">Mentorship</p>
                  <p className="text-sm text-gray-600">Guidance & Career Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Heart className="text-purple-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">Community Impact</p>
                  <p className="text-sm text-gray-600">Local Development</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Target className="text-orange-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">Targeted Programs</p>
                  <p className="text-sm text-gray-600">Focused Initiatives</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60"
              alt="Students learning and growing"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-purple-500/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Partnership Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '500+', label: 'Students Supported', color: 'from-green-500 to-emerald-500' },
            { number: '15+', label: 'Partner Schools', color: 'from-blue-500 to-cyan-500' },
            { number: '85%', label: 'Success Rate', color: 'from-purple-500 to-pink-500' },
            { number: '3+', label: 'Communities Served', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Mission to Transform Lives
          </h4>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Support our partnership with NRECT through sponsorship or volunteering. 
            Together, we can create lasting change in young people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://nrect.org/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Visit NRECT Website
                <ExternalLink className="ml-2" size={20} />
              </Button>
            </a>
            <a 
              href="https://nrect.org/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Become a Sponsor
                <Heart className="ml-2" size={20} />
              </Button>
            </a>
            <a 
              href="https://nrect.org/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Volunteer With Us
                <Users className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRECTSection;
