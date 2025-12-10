import { Star, Check } from 'lucide-react';

const WALSSection = () => {
  const gradeJourney = [
    {
      grade: "Grade 8",
      title: "Identity & Confidence",
      description: "Understanding oneself, growing confidence, navigating early adolescence, and building healthy habits."
    },
    {
      grade: "Grade 9",
      title: "Relationships, Emotions & Media Influence",
      description: "Friendships, empathy, boundaries, emotional literacy, digital behaviour, and handling peer influence."
    },
    {
      grade: "Grade 10",
      title: "Smart Choices & Exam-Year Wellbeing",
      description: "Practical consent, digital safety, study habits, stress management, and decision-making under pressure."
    },
    {
      grade: "Grade 11",
      title: "Leadership, Ethics & Real-World Readiness",
      description: "Values, teamwork, communication, ethical reasoning, mental health literacy, and purpose exploration."
    },
    {
      grade: "Grade 12",
      title: "Purpose, Adulting & Life After School",
      description: "Future identity, adult relationships, financial basics, professional communication, and readiness for university/work life."
    }
  ];

  const differentiators = [
    {
      title: "Board-Sensitive Design",
      description: "Lighter wellbeing capsules in Grades 10 and 12 ensure life skills support students without adding pressure."
    },
    {
      title: "Research-Aligned Curriculum",
      description: "Built on NEP 2020, PSHE (UK), CASEL SEL standards, and OECD future skills."
    },
    {
      title: "Weekly Experiential Sessions",
      description: "Engaging, relatable activities (Hook → Activity → Reflection → Take-Home) that make learning stick."
    },
    {
      title: "Real-Life Competencies",
      description: "Communication, resilience, digital citizenship, ethical reasoning, conflict resolution, and leadership."
    },
    {
      title: "Focus on Mental & Emotional Health",
      description: "Students learn to understand stress, recognise emotions, seek help, and build coping tools."
    },
    {
      title: "Safe Relationships & Consent Education",
      description: "Age-appropriate, respectful, culturally aligned guidance for navigating friendships, boundaries, and social pressure."
    },
    {
      title: "Digital Life Skills for Today's Teens",
      description: "Online safety, digital reputation, media influence, comparison culture, and responsible online behaviour."
    }
  ];

  const outcomes = [
    "More confident in who they are",
    "Better equipped to handle stress and choices",
    "Respectful and emotionally intelligent",
    "Ethical and responsible—online and offline",
    "Future-ready, purposeful, and capable of adult decisions"
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why WALS?</h2>
          <p className="text-lg text-primary font-medium mb-4">
            WeKIT Actual Life Skills Lab (Grades 8–12)
          </p>
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            Preparing young people for life—not just exams.
          </p>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Modern adolescence is complex. Students today face academic pressure, digital overload, shifting friendships, identity questions, and rising expectations from universities and workplaces. Schools need a structured, safe, research-backed way to guide them through these formative years.
            </p>
            <p>
              The <strong>WeKIT Actual Life Skills Lab (WALS)</strong> gives every learner a clear, age-appropriate pathway to grow their identity, relationships, wellbeing, leadership, and purpose across five years—without adding academic burden.
            </p>
          </div>
        </div>

        {/* 5-Year Journey */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
            <h3 className="text-3xl font-bold text-gray-900">A 5-Year Future-Ready Development Journey</h3>
          </div>
          <div className="space-y-6">
            {gradeJourney.map((item, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {item.grade} – {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes WALS Different */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
            <h3 className="text-3xl font-bold text-gray-900">What Makes WALS Different?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-2">• {item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
            <h3 className="text-3xl font-bold text-gray-900">Credentials That Matter</h3>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-purple-50 p-8 rounded-xl">
            <p className="text-gray-700 mb-4 font-medium">Students earn:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="font-semibold">• Weekly micro-badges</li>
              <li className="font-semibold">• Cluster micro-certifications</li>
              <li>
                <span className="font-semibold">• A 5-year WAP³ Portfolio</span> (Purpose & Pathways Portfolio) capturing strengths, values, projects, reflections, and future pathways—ideal for university applications.
              </li>
            </ul>
          </div>
        </div>

        {/* The Result */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
            <h3 className="text-3xl font-bold text-gray-900">The Result?</h3>
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-xl">
            <p className="text-gray-300 mb-6">A young adult who is:</p>
            <div className="space-y-3 mb-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="font-medium">{outcome}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 border-t border-gray-700 pt-6">
              And a school that can proudly say it develops <strong className="text-white">whole, future-ready human beings</strong>, not just examinees.
            </p>
          </div>
        </div>

        {/* 150-Word Summary */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-8 md:p-10 rounded-xl">
          <p className="text-sm uppercase tracking-wide text-teal-200 mb-2">
            Sharp, 150-word brochure-ready version
          </p>
          <h3 className="text-2xl font-bold mb-6">Why WALS?</h3>
          <div className="prose prose-invert max-w-none text-teal-50">
            <p className="mb-4">
              The WeKIT Actual Life Skills Lab (WALS) prepares students for life beyond academics through a structured, age-appropriate journey from Grades 8–12. Grounded in NEP 2020, global SEL research, and real adolescent needs, WALS builds confidence, emotional intelligence, resilience, healthy relationships, digital responsibility, leadership, and purpose.
            </p>
            <p className="mb-4">
              Each grade focuses on a key developmental theme—Identity, Relationships, Boundaries & Wellbeing, Leadership & Ethics, and Adulting & Purpose—delivered through engaging weekly sessions that are board-sensitive and easy to integrate.
            </p>
            <p className="mb-4">
              Students learn to manage stress, make ethical choices, communicate effectively, handle peer influence, build healthy boundaries, and navigate online life safely. They also gain practical skills for university and adulthood: financial basics, professional communication, collaboration, and independent decision-making.
            </p>
            <p className="mb-4">
              Every learner graduates with <strong>WAP³</strong>, a verifiable Purpose & Pathways Portfolio showcasing strengths, projects, micro-credentials, and reflections—ideal for university admissions.
            </p>
            <p className="font-semibold text-white">
              WALS helps schools shape confident, compassionate, future-ready young adults.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WALSSection;
