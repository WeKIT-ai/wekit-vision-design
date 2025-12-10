import { BookOpen, Trees, Compass, Users, Award, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const offerings = [
  {
    icon: BookOpen,
    title: "WALS – WeKIT Actual Life Skills Lab",
    subtitle: "Grades 8–12",
    color: "bg-blue-500",
    items: [
      "Structured 5-year life-skills curriculum: identity, relationships & consent, digital citizenship, resilience, ethics, leadership",
      "Heavy, experiential years in Grades 8, 9 and 11; intentionally lite capsules in Grades 10 and 12 focused on exam wellbeing and transitions",
      "Fully mapped to CBSE/ICSE and Cambridge/PSHE outcomes, with plug-and-play lesson structures (Hook → Activity → Reflection → Take-home)"
    ]
  },
  {
    icon: Trees,
    title: "WABLS – WeKIT Actual Bagless Learning Studio",
    subtitle: "NEP-Aligned",
    color: "bg-green-500",
    items: [
      "NEP-aligned Bagless Days framework delivered with curated partners like TrueNature.in for nature, outdoor and experiential days",
      "Single outcomes, reflection and credential template so every Bagless Day feeds into the same WeKIT skills and transcript—not 'random events'"
    ]
  },
  {
    icon: Compass,
    title: "WAPPS – WeKIT Actual Purpose & Pathways Studio",
    subtitle: "AI-Powered",
    color: "bg-purple-500",
    items: [
      "AI-powered Career Exploration tool (Phase 1: 300+ careers) that links subjects, skills and real-world projects to future paths",
      "AI-supported Purpose & Psychometric flow that generates a simple 'Purpose & Pathways Profile' to guide students, mentors and parents at key transition years"
    ]
  },
  {
    icon: Users,
    title: "WeKIT 360 Mentoring for Institutions",
    subtitle: "Structured Circuits",
    color: "bg-orange-500",
    items: [
      "Structured mentoring circuits connecting students, alumni, professionals and partner schools (e.g., with YuvaLok and similar organisations)",
      "Clear mentor/mentee roles, guided session templates and feedback loops so mentoring becomes visible, trackable and credit-bearing"
    ]
  },
  {
    icon: Award,
    title: "WeCred – Digital Credentials & 5-Year Transcript",
    subtitle: "Verifiable Badges",
    color: "bg-indigo-500",
    items: [
      "Micro-badges for weekly skills (consent, digital safety, resilience, leadership, money skills, etc.) and micro-certifications for clusters and projects",
      "Annual WeKIT Life Skills Certificates and a unified 5-Year WeKIT Life Skills & Purpose Transcript per learner, designed for portfolios, applications and LinkedIn"
    ]
  },
  {
    icon: Wallet,
    title: "WAFLE & Future-Ready Capsules",
    subtitle: "Optional Add-ons",
    color: "bg-teal-500",
    items: [
      "WAFLE – WeKIT Actual Financial Literacy & Entrepreneurship: budgeting, digital payments, ethical side-hustles, salary basics and debt traps",
      "Future-ready capsules: accessibility & neurodiversity, sustainability, digital productivity & information literacy, grief & major change, AI in learning"
    ]
  }
];

const CoreOfferings = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Core Offerings for <span className="font-semibold">Institutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive suite of programs designed to build future-ready students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`${offering.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform`}>
                    <offering.icon size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                      {offering.title}
                    </CardTitle>
                    <span className="text-sm text-gray-500 font-medium">{offering.subtitle}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {offering.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
