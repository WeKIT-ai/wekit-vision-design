import ProgramsHero from '@/components/programs/ProgramsHero';
import EducationalInstitutions from '@/components/programs/EducationalInstitutions';
import YouthAndFamilies from '@/components/programs/YouthAndFamilies';
import MentorsAndProfessionals from '@/components/programs/MentorsAndProfessionals';
import Entrepreneurship from '@/components/programs/Entrepreneurship';
import PartnersAndOrganizations from '@/components/programs/PartnersAndOrganizations';

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProgramsHero />
      <EducationalInstitutions />
      <YouthAndFamilies />
      <MentorsAndProfessionals />
      <Entrepreneurship />
      <PartnersAndOrganizations />
    </div>
  );
};

export default Programs;
