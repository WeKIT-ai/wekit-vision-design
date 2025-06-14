
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Brain, HeartHandshake, Star, ArrowDownToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

const painPoints = [
  { icon: <Brain className="w-7 h-7 text-blue-500" />, title: "Career Confusion", desc: "Worried your child will choose the wrong career path and regret it later?" },
  { icon: <HeartHandshake className="w-7 h-7 text-green-500" />, title: "Lack of Guidance", desc: "Not sure what skills, mentorship, or resources your child actually needs?" },
  { icon: <Star className="w-7 h-7 text-yellow-500" />, title: "Falling Behind", desc: "Concerned your child won’t keep up in a world where AI is upending every industry?" }
];

const ParentBenefits = [
  'Personalized, step-by-step roadmaps for your child’s ambitions.',
  'Skill building & self-discovery programs—AI-powered and globally recognized.',
  'Direct access to real mentors, counselors, and international experts.',
  'Track growth and celebrate every milestone with our parent dashboards.',
];

const hook = (
  <span>
    <span className="text-blue-800 font-semibold">Over 10,000 families</span> trust WEKIT to build future-ready youth.
    <br className="hidden md:block" />
    Unlock the playbook for guiding your child’s dream career—<span className="underline decoration-blue-400">download our FREE white paper</span> now!
  </span>
);

const Parents = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-slate-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* HERO section with hook */}
      <section className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.15]">
          Put Your Child on the Right Career Path—<span className="text-blue-700">Without Guesswork</span>
        </h1>
        <div className="mb-4 text-lg md:text-xl text-blue-900 font-medium">{hook}</div>
      </section>
      {/* PAIN POINTS */}
      <section className="max-w-4xl w-full mb-10">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {painPoints.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white shadow-md border border-blue-100 rounded-2xl p-6 flex-1">
              {p.icon}
              <div className="font-semibold text-gray-800 mt-3 text-lg">{p.title}</div>
              <div className="text-gray-600 mt-1 text-sm">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* SOLUTION/Benefits */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 text-center">How We Support Parents</h2>
        <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          {ParentBenefits.map((txt, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ArrowRight className="w-5 h-5 mt-1 text-purple-500" /> {txt}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            size="lg"
            variant="default"
            className="w-full sm:w-auto font-bold flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white"
            onClick={() => navigate("/white-paper")}
          >
            <ArrowDownToLine className="w-5 h-5" />
            Download the Free White Paper
          </Button>
        </div>
        <div className="mt-3 text-center text-sm text-gray-500">
          Instant download. Email follow-up with extra parent resources.
        </div>
      </section>
      {/* TESTIMONIALS/RESULTS */}
      <section className="w-full max-w-4xl mb-10">
        <div className="rounded-xl bg-white/90 border border-blue-100 shadow-sm py-8 px-5 flex flex-col items-center">
          <p className="text-lg italic text-blue-900 mb-3 font-medium">&ldquo;I finally feel confident about supporting my son’s career choices. The roadmap and mentorship worked wonders.&rdquo;</p>
          <span className="text-xs text-gray-500">— Priya S., WEKIT Parent</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">10,000+</div>
            <div className="text-gray-500">Families Empowered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">42</div>
            <div className="text-gray-500">Pages of Guidance (White Paper)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-700 mb-2">95%</div>
            <div className="text-gray-500">Parent Satisfaction</div>
          </div>
        </div>
      </section>
      {/* SECONDARY CTA */}
      <section className="w-full max-w-2xl text-center mt-10">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col gap-3 items-center">
          <div className="font-semibold text-blue-900 text-lg">Ready to guide your child’s future with confidence?</div>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-blue-400 text-blue-700 hover:bg-blue-600/20 font-bold flex items-center gap-2"
            onClick={() => navigate("/white-paper")}
          >
            <FileText className="w-5 h-5" />
            Get the Free White Paper
          </Button>
          <div className="text-xs text-gray-400 mt-1">We never spam. Your child’s future comes first.</div>
        </div>
      </section>
    </div>
  );
};

export default Parents;
