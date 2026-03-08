import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, School, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import WhyPartner from '@/components/schools-landing/WhyPartner';
import FutureReadinessSystem from '@/components/schools-landing/FutureReadinessSystem';
import StudentJourneyTimeline from '@/components/schools-landing/StudentJourneyTimeline';
import InstitutionalImpact from '@/components/schools-landing/InstitutionalImpact';
import SchoolDiscoveryCTA from '@/components/schools-landing/SchoolDiscoveryCTA';

const DISCOVERY_URL = 'https://forms.zoho.in/wekitmentoring/form/WeKITActualLifeSkillsLabSchoolDiscoveryInput2';

const audiences = [
  { icon: School, label: 'Schools (Grades 8–12)' },
  { icon: GraduationCap, label: 'Colleges & Universities' },
  { icon: BookOpen, label: 'Alternative & Future-Ready Institutions' },
];

const EducationalInstitutions = () => {
  return (
    <div id="institutions">
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block glass rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-secondary font-semibold mb-6">
              Section 1
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-foreground leading-tight mb-4">
              Educational Institutions
            </h2>
            <p className="text-lg text-secondary font-medium mb-4">
              Future readiness infrastructure for schools and colleges.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl leading-relaxed mb-8 font-light">
              WeKIT provides a plug-and-play mentorship and career development ecosystem that helps institutions guide students from self-discovery to career pathways.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {audiences.map((a) => (
              <div key={a.label} className="flex items-center gap-3 glass rounded-xl px-5 py-3">
                <a.icon className="text-secondary" size={18} />
                <span className="text-sm font-medium text-foreground">{a.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer">
              <Button size="xl" variant="accent" className="group">
                Request a School Partnership Discovery
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Button>
            </a>
            <a href={DISCOVERY_URL} target="_blank" rel="noopener noreferrer">
              <Button size="xl" variant="outline" className="group">
                Start the School Discovery Process
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <WhyPartner />
      <FutureReadinessSystem />
      <StudentJourneyTimeline />
      <InstitutionalImpact />
      <SchoolDiscoveryCTA />
    </div>
  );
};

export default EducationalInstitutions;
