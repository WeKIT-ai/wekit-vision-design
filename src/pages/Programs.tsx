import ProgramsHero from '@/components/programs/ProgramsHero';
import EcosystemJourney from '@/components/programs/EcosystemJourney';
import EducationalInstitutions from '@/components/programs/EducationalInstitutions';
import YouthPathways from '@/components/programs/YouthPathways';
import ExperientialLearning from '@/components/programs/ExperientialLearning';
import ParentsFamilies from '@/components/programs/ParentsFamilies';
import IndividualCourseAccess from '@/components/programs/IndividualCourseAccess';
import MentorsAndProfessionals from '@/components/programs/MentorsAndProfessionals';
import Entrepreneurship from '@/components/programs/Entrepreneurship';
import PartnersAndOrganizations from '@/components/programs/PartnersAndOrganizations';
import CorporateCSR from '@/components/programs/CorporateCSR';
import FinalHeroCTA from '@/components/programs/FinalHeroCTA';

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProgramsHero />
      <EcosystemJourney />
      <EducationalInstitutions />
      <YouthPathways />
      <ExperientialLearning />
      <ParentsFamilies />
      <IndividualCourseAccess />
      <MentorsAndProfessionals />
      <Entrepreneurship />
      <PartnersAndOrganizations />
      <CorporateCSR />
      <FinalHeroCTA />
    </div>
  );
};

export default Programs;
