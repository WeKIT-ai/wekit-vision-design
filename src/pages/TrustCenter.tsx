import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Brain, Users, Lock, Heart, Star, Compass, Target, Handshake, Sprout, Scale, TrendingUp, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import teamImg from '@/assets/team-section.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const values = [
  { icon: Target, title: 'Purpose', desc: 'Every person has the potential to contribute meaningfully to society.' },
  { icon: Heart, title: 'Respect', desc: 'Every participant deserves dignity, fairness, and thoughtful engagement.' },
  { icon: Shield, title: 'Integrity', desc: 'Trust is built through honesty, transparency, and accountability.' },
  { icon: Scale, title: 'Responsibility', desc: 'Technology and mentorship must be used carefully and ethically.' },
  { icon: Compass, title: 'Curiosity & Growth', desc: 'Learning thrives when curiosity and exploration are encouraged.' },
  { icon: Handshake, title: 'Collaboration', desc: 'Progress happens when people share knowledge and support one another.' },
  { icon: Star, title: 'Fair Opportunity', desc: 'Access to mentorship and opportunity should not be limited by circumstance.' },
  { icon: TrendingUp, title: 'Long-Term Impact', desc: 'Our goal is sustainable contribution to individuals and communities.' },
];

const pillars = [
  { icon: Users, title: 'Code of Conduct', desc: 'Defines the behavioral standards expected from everyone using the platform.', link: '/terms#mentor-code' },
  { icon: Brain, title: 'Responsible AI', desc: 'Explains how We-KIT uses AI responsibly to support mentorship and learning.', link: '/terms#privacy' },
  { icon: Sprout, title: 'Ethical Mentorship', desc: 'Guidelines for providing career guidance responsibly and respectfully.', link: '/terms#mentor-code' },
  { icon: Lock, title: 'Privacy & Data Protection', desc: 'How personal information is protected and managed.', link: '/terms#privacy' },
];

const techBullets = [
  'Human-centered design',
  'Transparent use of AI systems',
  'Continuous monitoring to reduce bias',
  'Strong privacy protections',
  'Responsible and ethical technology development',
];

const safetyBullets = [
  'Clear reporting mechanisms',
  'Fair and consistent moderation',
  'Responsible enforcement actions',
  'Continuous improvement of policies',
];

const TrustCenter = () => {
  return (
    <div className="bg-background">
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6">
              Trust Center
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Trust, Safety &amp; Ethics<br className="hidden sm:block" /> at We-KIT
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              Unlocking human potential requires more than technology.<br />
              It requires trust, responsibility, and ethical mentorship.
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We-KIT connects individuals, mentors, educators, and institutions across the world to support meaningful career discovery and skill development. To protect this ecosystem, we follow clear principles that guide how our community interacts and how our technology is used.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 text-sm font-semibold rounded-md" asChild>
                <a href="#values">Explore Our Principles</a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-sm font-semibold rounded-md border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/terms#mentor-code">Read the Code of Conduct</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Mission Statement */}
      <section className="py-20 md:py-28 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            Trust Is the Foundation<br className="hidden sm:block" /> of Human Potential
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            At We-KIT, we believe that when people discover their strengths and receive the right guidance, they can build meaningful careers and contribute to stronger communities.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            Our Trust Center exists to ensure that mentorship, learning, and opportunity are supported by clear ethical standards.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed">
            This commitment guides how we build technology, how our community interacts, and how we scale responsibly.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 3 — Our Values */}
      <section id="values" className="py-20 md:py-28 scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-4">Our Principles</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">The Values That Guide Our Platform</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <Card className="h-full border-border/50 bg-card hover:shadow-md transition-shadow duration-300 rounded-xl">
                  <CardContent className="p-6 pt-6">
                    <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <v.icon size={20} className="text-secondary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 4 — Trust Framework */}
      <section className="py-20 md:py-28 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-4">Trust Framework</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">How We Protect the We-KIT Ecosystem</h2>
            <p className="text-muted-foreground text-base">Our Trust Center is built on four core pillars.</p>
          </motion.div>
          <div className="space-y-5">
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeUp}>
                <Card className="border-border/50 bg-card hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden">
                  <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <p.icon size={26} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-md border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-shrink-0" asChild>
                      <Link to={p.link}>
                        Learn More <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 5 — Responsible Technology */}
      <section className="py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div variants={fadeUp}>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-4">Responsible Technology</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                Technology Should Empower People
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We-KIT uses digital tools and AI systems to support career discovery, mentorship, and learning pathways.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our systems are designed to support human development rather than replace human judgment.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="space-y-4">
                {techBullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl overflow-hidden">
                <img src={teamImg} alt="WeKIT team collaboration" className="w-full object-cover rounded-xl" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 6 — Community Safety */}
      <section className="py-20 md:py-28 bg-primary/[0.03]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeUp} className="mb-10">
            <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={26} className="text-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">A Safe and Respectful Community</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              Maintaining a positive environment requires shared responsibility. We-KIT provides clear reporting channels, fair moderation processes, and transparent enforcement practices to ensure that community standards are upheld.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
            {safetyBullets.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{b}</span>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button variant="outline" size="lg" className="px-8 text-sm font-semibold rounded-md border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="mailto:safeguarding@wekit.ai">Report a Concern</a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 7 — Closing Vision */}
      <section className="py-24 md:py-36 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Building the Human<br className="hidden sm:block" /> Potential Economy
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-lg leading-relaxed opacity-90 mb-4">
            We-KIT is more than a platform. It is a global ecosystem designed to help people discover their purpose, develop meaningful skills, and connect with opportunities where they can contribute.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base md:text-lg leading-relaxed opacity-90 mb-10">
            Maintaining trust in this ecosystem requires the commitment of everyone involved. Together we build a community grounded in purpose, responsibility, and growth.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button size="lg" className="px-10 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <a href="https://wekit.ai/" target="_blank" rel="noopener noreferrer">
                Join We-KIT <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default TrustCenter;
