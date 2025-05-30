
import SchoolsHero from '@/components/schools/SchoolsHero';
import SchoolsProblems from '@/components/schools/SchoolsProblems';
import SchoolsLeadGen from '@/components/schools/SchoolsLeadGen';
import SchoolsSolutions from '@/components/schools/SchoolsSolutions';
import SchoolsImpact from '@/components/schools/SchoolsImpact';
import SchoolsCTA from '@/components/schools/SchoolsCTA';

const Schools = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SchoolsHero />
      <SchoolsProblems />
      <SchoolsLeadGen />
      <SchoolsSolutions />
      <SchoolsImpact />
      <SchoolsCTA />
    </div>
  );
};

export default Schools;
