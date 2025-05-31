
const StudentsProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Complete Career Assessment',
      description: 'AI analyzes your skills, interests, and goals to identify optimal career paths.'
    },
    {
      number: '02',
      title: 'Get Matched with Mentors',
      description: 'Connect with industry professionals who can guide your specific journey.'
    },
    {
      number: '03',
      title: 'Follow Your Roadmap',
      description: 'Complete personalized learning and experience milestones toward your goals.'
    },
    {
      number: '04',
      title: 'Land Your Dream Job',
      description: 'Leverage your new skills, experience, and network to secure ideal positions.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Path from Confusion to Career Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our proven 4-step process that's helped thousands of students 
            land their dream jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsProcess;
