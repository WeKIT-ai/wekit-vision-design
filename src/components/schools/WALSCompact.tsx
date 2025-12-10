import { Star, Check } from 'lucide-react';

const WALSCompact = () => {
  const grades = [
    { grade: "8", title: "Identity & Confidence" },
    { grade: "9", title: "Relationships & Emotions" },
    { grade: "10", title: "Choices & Wellbeing" },
    { grade: "11", title: "Leadership & Ethics" },
    { grade: "12", title: "Purpose & Adulting" }
  ];

  const outcomes = [
    "Confident & self-aware",
    "Emotionally intelligent",
    "Future-ready & purposeful"
  ];

  return (
    <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-xl h-full">
      <div className="flex items-center gap-2 mb-3">
        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
        <h3 className="text-lg font-bold">Why WALS?</h3>
      </div>
      
      <p className="text-sm text-teal-100 mb-4">
        WeKIT Actual Life Skills Lab (Grades 8–12) — Preparing young people for life, not just exams.
      </p>

      <div className="mb-4">
        <p className="text-xs uppercase tracking-wide text-teal-200 mb-2">5-Year Journey</p>
        <div className="grid grid-cols-5 gap-1">
          {grades.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1 text-xs font-bold">
                {item.grade}
              </div>
              <p className="text-[10px] leading-tight text-teal-100">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs uppercase tracking-wide text-teal-200 mb-2">The Result</p>
        <div className="space-y-1">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-3 h-3 text-green-300 flex-shrink-0" />
              <span className="text-xs">{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-teal-500/50">
        <p className="text-xs text-teal-100">
          Includes <strong className="text-white">WAP³ Portfolio</strong> for university applications.
        </p>
      </div>
    </div>
  );
};

export default WALSCompact;
