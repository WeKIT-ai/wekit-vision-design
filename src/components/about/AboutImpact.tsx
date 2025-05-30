
import { Users, Award, Globe, Target } from 'lucide-react';

const AboutImpact = () => {
  const stats = [
    { number: "10,000+", label: "Students Mentored", icon: Users, color: "text-blue-600" },
    { number: "500+", label: "Professional Mentors", icon: Award, color: "text-green-600" },
    { number: "50+", label: "Partner Schools", icon: Globe, color: "text-purple-600" },
    { number: "95%", label: "Success Rate", icon: Target, color: "text-orange-600" }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutImpact;
