import SchoolsLandingHero from '@/components/schools-landing/SchoolsLandingHero';
import ScrollStory from '@/components/schools-landing/ScrollStory';
import WhyPartner from '@/components/schools-landing/WhyPartner';
import FutureReadinessSystem from '@/components/schools-landing/FutureReadinessSystem';
import StudentJourneyTimeline from '@/components/schools-landing/StudentJourneyTimeline';
import InstitutionalImpact from '@/components/schools-landing/InstitutionalImpact';
import SchoolDiscoveryCTA from '@/components/schools-landing/SchoolDiscoveryCTA';

const Schools = () => {
  return (
    <div className="min-h-screen bg-background">
      <SchoolsLandingHero />
      <ScrollStory />
      <WhyPartner />
      <FutureReadinessSystem />
      <StudentJourneyTimeline />
      <InstitutionalImpact />
      <SchoolDiscoveryCTA />
    </div>
  );
};

export default Schools;
