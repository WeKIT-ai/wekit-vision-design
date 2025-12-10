import { CheckCircle2, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle2,
    title: "Single, Coherent Framework",
    description: "Joins life skills, mentoring, careers and purpose across Grades 8–12 into one unified system."
  },
  {
    icon: Shield,
    title: "Board-Safe Design",
    description: "Respects academic load—especially in Grades 10 and 12—while still supporting wellbeing and exam transitions."
  },
  {
    icon: TrendingUp,
    title: "Visible Differentiation",
    description: "Verifiable transcripts, digital credentials and AI-powered mentoring that match what ambitious parents and universities expect."
  }
];

const InstitutionBenefits = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            What Institutions <span className="font-semibold">Get</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Everything you need to differentiate your institution and prepare students for the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="bg-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-blue-200 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ CBSE/ICSE Mapped</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Cambridge/PSHE Aligned</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ NEP Compliant</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ LinkedIn-Ready Credentials</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionBenefits;
