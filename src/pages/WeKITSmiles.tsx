import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight, BookOpen, Award, Users, Zap, Target, Heart,
  Smile, Stethoscope, Monitor, Briefcase, Shield, Star,
  CheckCircle2, GraduationCap, Handshake,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PolicyAcceptance from '@/components/PolicyAcceptance';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const curriculum = [
  { icon: Stethoscope, title: 'Clinical Assisting', desc: 'Hands-on training in chairside procedures, infection control, sterilisation, and instrument handling at leading dental clinics.' },
  { icon: Heart, title: 'Patient Care & Communication', desc: 'Build empathy-driven patient interactions, appointment management, and anxiety-reduction techniques.' },
  { icon: Briefcase, title: 'Office Management', desc: 'Learn scheduling, billing, insurance coordination, and front-desk operations for modern dental practices.' },
  { icon: Monitor, title: 'Dental Software & Digital Tools', desc: 'Get certified on industry-standard dental practice management software and digital record-keeping.' },
  { icon: Users, title: 'Soft Skills & Professional Development', desc: 'Communication, teamwork, conflict resolution, and interview preparation powered by WeKIT mentorship.' },
  { icon: Shield, title: 'Ethics & Compliance', desc: 'Understand patient privacy, clinical ethics, and healthcare compliance frameworks.' },
];

const whySmiles = [
  { icon: Target, title: 'Purpose-Led Training', desc: 'Every learner discovers their purpose through WeKIT\'s proprietary career architecture framework.' },
  { icon: Users, title: 'Mentorship-Driven', desc: 'Each student is paired with an industry mentor for guidance throughout the programme and beyond.' },
  { icon: Handshake, title: 'Industry Partnerships', desc: 'Direct placement pipelines with top dental clinics, hospital chains, and healthcare networks.' },
  { icon: Star, title: 'Holistic Development', desc: 'Beyond clinical skills — we build leaders with life skills, financial literacy, and AI readiness.' },
];

const WeKITSmiles = () => {
  const [policyAccepted, setPolicyAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* ===== Hero ===== */}
      <section className="relative pt-32 pb-28 px-6 md:px-8 overflow-hidden bg-gradient-to-br from-[hsl(170,60%,30%)] via-[hsl(170,50%,22%)] to-[hsl(170,55%,15%)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(45,80%,55%,0.12),transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/80">
              <Smile className="w-4 h-4" />
              Vocational Excellence Programme
            </span>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-5xl md:text-7xl font-bold font-montserrat text-white leading-[0.95] tracking-tight"
          >
            WeKIT{' '}
            <span className="text-wekit-gold">Smiles</span>
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            A purpose-driven dental assistant training programme that combines clinical excellence
            with mentorship, life skills, and career architecture.
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-wrap justify-center gap-4 pt-2">
            {['10th Pass Eligible', 'Industry Certification', 'Mentor-Guided', 'Placement Support'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/10 border border-white/15 text-white/90 text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-journey">
              <Button size="lg" className="bg-wekit-gold text-primary hover:bg-wekit-gold/90 px-10 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Apply Now
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </Link>
            <a href="#curriculum">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-medium transition-all duration-300">
                View Curriculum
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== Programme Overview ===== */}
      <section className="py-24 px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 text-sm font-medium text-primary">
              <GraduationCap className="w-4 h-4" />
              Programme Overview
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground tracking-tight leading-tight">
              Your Career in
              <br />
              <span className="text-wekit-teal">Healthcare Starts Here</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              WeKIT Smiles is a comprehensive dental assistant training programme designed for young adults
              looking to enter the healthcare industry with confidence, purpose, and professional skills.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Combining hands-on clinical training at top dental clinics with WeKIT's signature
              mentorship framework, life skills modules, and career portfolio building — we don't
              just train dental assistants, we build future healthcare leaders.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['Clinical Assisting', 'Patient Care', 'Office Management', 'Dental Software', 'Soft Skills'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-wekit-soft text-wekit-teal text-sm font-medium border border-wekit-teal/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Programme Snapshot Card */}
          <Card className="border border-border bg-card shadow-xl">
            <CardContent className="p-8 md:p-10 space-y-8">
              <h3 className="text-2xl font-bold font-montserrat text-foreground">Programme Snapshot</h3>
              <div className="space-y-6">
                {[
                  ['Eligibility', '10th Pass, 18+'],
                  ['Duration', '3–6 Months'],
                  ['Location', 'Top Dental Clinics'],
                  ['Course Fee', 'From ₹25,000'],
                  ['Scholarships', 'Available'],
                  ['Certification', 'Industry Recognised'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center border-b border-border/50 pb-3 last:border-0">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="text-lg font-bold text-wekit-teal">{value}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Certifications', 'Professional Networks', 'Purpose-Driven', 'Global Reach'].map(tag => (
                  <div key={tag} className="bg-wekit-soft p-3 text-center border border-wekit-teal/10">
                    <p className="text-sm font-medium text-foreground">{tag}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Curriculum ===== */}
      <section id="curriculum" className="py-24 px-6 md:px-8 bg-wekit-soft scroll-mt-24">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-wekit-teal/10 border border-wekit-teal/20 text-sm font-medium text-wekit-teal">
              <BookOpen className="w-4 h-4" />
              Curriculum
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground tracking-tight">
              What You'll Learn
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A holistic curriculum combining clinical excellence with the human skills
              that set WeKIT graduates apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="h-full border border-border/60 bg-card hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-7 space-y-4">
                    <div className="w-12 h-12 bg-wekit-teal/10 flex items-center justify-center rounded-lg">
                      <item.icon className="w-6 h-6 text-wekit-teal" />
                    </div>
                    <h3 className="text-lg font-semibold font-montserrat text-foreground group-hover:text-wekit-teal transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why WeKIT Smiles ===== */}
      <section className="py-24 px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground tracking-tight">
              Why <span className="text-wekit-teal">WeKIT Smiles</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We go beyond training — we build purpose-driven healthcare professionals
              with mentorship, life skills, and industry connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whySmiles.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i}
                variants={fadeUp}
                className="flex gap-5 p-6 border border-border/60 bg-card hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 bg-wekit-gold/10 flex items-center justify-center rounded-lg">
                  <item.icon className="w-6 h-6 text-wekit-gold" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold font-montserrat text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Impact Numbers ===== */}
      <section className="py-24 px-6 md:px-8 bg-gradient-to-br from-[hsl(170,60%,30%)] via-[hsl(170,50%,22%)] to-[hsl(170,55%,15%)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white tracking-tight">
              Programme Impact
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Building a pipeline of skilled, purpose-driven dental professionals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Graduates Targeted Y1', value: '200+' },
              { label: 'Clinic Partners', value: '15+' },
              { label: 'Placement Rate Goal', value: '80%' },
              { label: 'Scholarship Spots', value: '50+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-3xl md:text-4xl font-bold text-wekit-gold font-montserrat">{stat.value}</p>
                <p className="text-sm text-white/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA with Policy ===== */}
      <section className="py-24 px-6 md:px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground tracking-tight">
            Ready to Start Your
            <br />
            <span className="text-wekit-teal">Healthcare Career?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join WeKIT Smiles and gain the clinical skills, mentorship, and purpose-driven
            training you need to launch a meaningful career in dentistry.
          </p>

          <div className="max-w-md mx-auto text-left">
            <PolicyAcceptance
              accepted={policyAccepted}
              onAcceptedChange={setPolicyAccepted}
              showMinorNotice
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/start-journey">
              <Button
                size="lg"
                disabled={!policyAccepted}
                className="bg-wekit-teal text-white hover:bg-wekit-teal/90 px-10 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                Apply for WeKIT Smiles
                <ArrowRight className="ml-3" size={20} />
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-2 border-border px-10 py-6 text-lg font-medium transition-all duration-300">
                Explore All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeKITSmiles;
