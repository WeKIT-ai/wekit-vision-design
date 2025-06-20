
import ProfessionalsHero from '@/components/professionals/ProfessionalsHero';
import CareerChallenges from '@/components/professionals/CareerChallenges';
import CareerSolutions from '@/components/professionals/CareerSolutions';
import CareerLevels from '@/components/professionals/CareerLevels';
import SuccessStories from '@/components/professionals/SuccessStories';
import ProfessionalsCTA from '@/components/professionals/ProfessionalsCTA';

const Professionals = () => {
  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      <ProfessionalsHero />
      <CareerChallenges />
      <CareerSolutions />
      <CareerLevels />
      <SuccessStories />
      <ProfessionalsCTA />
    </div>
  );
};

export default Professionals;
