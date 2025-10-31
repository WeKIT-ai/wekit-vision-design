import teamImage from '@/assets/team-section.png';

const TeamSection = () => {
  return (
    <section className="py-20 px-6 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <img 
          src={teamImage} 
          alt="Meet the WeKIT Team - Leadership, Partners, and Advisors" 
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default TeamSection;
