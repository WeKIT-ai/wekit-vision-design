
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Brain, HeartHandshake, Star, ArrowDownToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

const painPoints = [
  { icon: <Brain className="w-7 h-7 text-wekit-teal" />, title: "Career Confusion", desc: "Worried your child will choose the wrong career path and regret it later?" },
  { icon: <HeartHandshake className="w-7 h-7 text-wekit-teal" />, title: "Lack of Guidance", desc: "Not sure what skills, mentorship, or resources your child actually needs?" },
  { icon: <Star className="w-7 h-7 text-wekit-gold" />, title: "Falling Behind", desc: "Concerned your child won't keep up in a world where AI is upending every industry?" }
];

const ParentBenefits = [
  'Personalized, step-by-step roadmaps for your child\u2019s ambitions.',
  'Skill building & self-discovery programs \u2014 AI-powered and globally recognized.',
  'Direct access to real mentors, counselors, and international experts.',
  'Track growth and celebrate every milestone with our parent dashboards.',
];

const Parents = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* HERO */}
      <section className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-6 leading-[1.15]">
          Put Your Child on the Right Career Path — <span className="text-wekit-teal">Without Guesswork</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          <span className="text-foreground font-semibold">Over 10,000 families</span> trust WeKIT to build future-ready youth.
          Unlock the playbook for guiding your child's dream career — download our FREE white paper now.
        </p>
      </section>

      {/* PAIN POINTS */}
      <section className="max-w-4xl w-full mb-10">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {painPoints.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-card border border-border/60 p-6 flex-1 shadow-sm hover:shadow-lg transition-all duration-300">
              {p.icon}
              <div className="font-semibold font-montserrat text-foreground mt-3 text-lg">{p.title}</div>
              <div className="text-muted-foreground mt-1 text-sm">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-foreground mb-5 text-center">How We Support Parents</h2>
        <ul className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
          {ParentBenefits.map((txt, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ArrowRight className="w-5 h-5 mt-1 text-wekit-teal flex-shrink-0" /> {txt}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            size="lg"
            className="w-full sm:w-auto font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => navigate("/white-paper")}
          >
            <ArrowDownToLine className="w-5 h-5 mr-2" />
            Download the Free White Paper
          </Button>
        </div>
        <div className="mt-3 text-center text-sm text-muted-foreground">
          Instant download. Email follow-up with extra parent resources.
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="w-full max-w-4xl mb-10">
        <div className="bg-card border border-border/60 shadow-sm py-8 px-5 flex flex-col items-center">
          <p className="text-lg italic text-foreground mb-3 font-medium">"I finally feel confident about supporting my son's career choices. The roadmap and mentorship worked wonders."</p>
          <span className="text-xs text-muted-foreground">— Priya S., WeKIT Parent</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-wekit-teal mb-2">10,000+</div>
            <div className="text-muted-foreground">Families Empowered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-wekit-teal mb-2">42</div>
            <div className="text-muted-foreground">Pages of Guidance (White Paper)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-wekit-teal mb-2">95%</div>
            <div className="text-muted-foreground">Parent Satisfaction</div>
          </div>
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="w-full max-w-2xl text-center mt-10">
        <div className="bg-wekit-soft p-6 border border-border/60 flex flex-col gap-3 items-center">
          <div className="font-semibold font-montserrat text-foreground text-lg">Ready to guide your child's future with confidence?</div>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-4 transition-all duration-300"
            onClick={() => navigate("/white-paper")}
          >
            <FileText className="w-5 h-5 mr-2" />
            Get the Free White Paper
          </Button>
          <div className="text-xs text-muted-foreground mt-1">We never spam. Your child's future comes first.</div>
        </div>
      </section>
    </div>
  );
};

export default Parents;
