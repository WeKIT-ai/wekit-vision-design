
import { Card, CardContent } from '@/components/ui/card';

const SuccessStories = () => {
  const successStories = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer → Tech Director',
      challenge: 'Felt stuck in technical role, wanted leadership position',
      solution: 'Matched with CTO mentor for leadership development',
      outcome: 'Promoted to Tech Director in 18 months, 67% salary increase'
    },
    {
      name: 'Marcus Johnson',
      role: 'Marketing Manager → VP Marketing',
      challenge: 'Lacked strategic business perspective for VP role',
      solution: 'Executive mentorship program with Fortune 500 CMO',
      outcome: 'Landed VP role at competitor, leading team of 45'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Project Manager → Entrepreneur',
      challenge: 'Wanted to start own business but lacked guidance',
      solution: 'Entrepreneur mentorship and investor network access',
      outcome: 'Launched successful startup, raised $2M Series A'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-[slideUp_0.8s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-300">
            Real Professionals, Real Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
            See how professionals like you broke through career barriers with strategic mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card 
              key={index} 
              className={`border-2 border-gray-100 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-[slideUp_0.8s_ease-out_${index * 0.2}s_both]`}
            >
              <CardContent className="p-8">
                <div className="mb-6 group-hover:animate-pulse">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{story.name}</h3>
                  <p className="text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-300">{story.role}</p>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="bg-red-50 p-3 rounded hover:bg-red-100 transition-colors duration-300 transform hover:translate-x-1">
                    <p className="text-red-800 font-medium mb-1">Challenge:</p>
                    <p className="text-red-700">{story.challenge}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded hover:bg-purple-100 transition-colors duration-300 transform hover:translate-x-1">
                    <p className="text-purple-800 font-medium mb-1">Solution:</p>
                    <p className="text-purple-700">{story.solution}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded hover:bg-green-100 transition-colors duration-300 transform hover:translate-x-1 hover:scale-105">
                    <p className="text-green-800 font-medium mb-1">Outcome:</p>
                    <p className="text-green-700 font-bold animate-pulse group-hover:animate-none">{story.outcome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
