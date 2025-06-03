
import { BookOpen, Users, Target } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'AI-Powered Assessments',
      description: 'Discover your unique strengths and career potential through our advanced psychometric evaluations.',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Connect with industry professionals who guide your journey toward meaningful career success.',
    },
    {
      icon: Target,
      title: 'Personalized Roadmaps',
      description: 'Get customized career pathways designed specifically for your goals and circumstances.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Transform Careers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform combines cutting-edge AI with human expertise to guide your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <feature.icon size={32} className="text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
