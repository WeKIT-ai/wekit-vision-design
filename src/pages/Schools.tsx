import SchoolsHero from '@/components/schools/SchoolsHero';
import CoreOfferings from '@/components/schools/CoreOfferings';
import WALSSection from '@/components/schools/WALSSection';
import InstitutionBenefits from '@/components/schools/InstitutionBenefits';
import SchoolsLeadGen from '@/components/schools/SchoolsLeadGen';
import SchoolsCTA from '@/components/schools/SchoolsCTA';

const Schools = () => {
  return (
    <div className="min-h-screen bg-white">
      <SchoolsHero />
      <CoreOfferings />
      <WALSSection />
      <InstitutionBenefits />
      <SchoolsLeadGen />
      <SchoolsCTA />
    </div>
  );
};

export default Schools;
