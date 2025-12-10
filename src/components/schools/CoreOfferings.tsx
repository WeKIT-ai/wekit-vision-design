import { BookOpen, Trees, Compass, Users, Wallet, Sparkles, FolderOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const offerings = [
  {
    icon: BookOpen,
    title: "WALS Lab – WeKIT Actual Life Skills Lab",
    subtitle: "Grades 8–12",
    color: "bg-blue-500",
    description: "A board-sensitive Grade 8–12 life-skills curriculum that builds identity, consent, digital citizenship, emotional resilience, ethics and leadership through structured, experiential weekly sessions."
  },
  {
    icon: Trees,
    title: "WABLS – WeKIT Actual Bagless Learning Studio",
    subtitle: "NEP-Aligned",
    color: "bg-green-500",
    description: "A NEP-aligned Bagless Days framework that integrates curated partners like TrueNature.in into reflective, safe, outcome-based experiential learning—credentialed through WeKIT badges."
  },
  {
    icon: Compass,
    title: "WAPPS – WeKIT Actual Purpose & Pathways Studio",
    subtitle: "AI-Powered",
    color: "bg-purple-500",
    description: "An AI-powered purpose & career exploration studio linking 300+ careers with student strengths, values, psychometrics and future pathways—designed for students and families to make confident choices."
  },
  {
    icon: Users,
    title: "WeKIT 360 Mentoring (Institutions)",
    subtitle: "Structured Ecosystem",
    color: "bg-orange-500",
    description: "A structured mentoring ecosystem connecting students, alumni, professionals and partner schools through guided roles, tools, feedback loops and measurable outcomes."
  },
  {
    icon: Wallet,
    title: "WAFLE Lab – Financial Literacy & Entrepreneurship",
    subtitle: "Micro-Certifications",
    color: "bg-teal-500",
    description: "A micro-certification track that turns money basics, digital payments, budgeting, ethical side-hustles and early financial decision-making into practical, assessed competencies."
  },
  {
    icon: Sparkles,
    title: "WAFFS – WeKIT Actual Future-Focussed Skills",
    subtitle: "Plug-in Capsules",
    color: "bg-pink-500",
    description: "A plug-in capsule studio covering accessibility & neurodiversity, sustainability, digital productivity, AI-in-learning, safety, and other essential future-ready competencies for Grade 8–12 learners."
  },
  {
    icon: FolderOpen,
    title: "WAP³ – WeKIT Actual PURPOSE & PATHWAYS PORTFOLIO",
    subtitle: "5-Year Transcript",
    color: "bg-indigo-500",
    description: "A 5-year, verifiable portfolio capturing each learner's badges, micro-certifications, mentoring journeys, reflections, leadership evidence, purpose profile and future pathways—all in one signature WeKIT transcript."
  }
];

const CoreOfferings = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            🎓 WeKIT Product Suite for <span className="font-semibold">Schools & Colleges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive suite of 7 programs designed to build future-ready students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className={`${offering.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <offering.icon size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold text-gray-900 leading-tight">
                      {offering.title}
                    </CardTitle>
                    <span className="text-sm text-gray-500 font-medium">{offering.subtitle}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {offering.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
