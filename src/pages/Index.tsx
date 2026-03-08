import Hero from '@/components/home/Hero';
import VisualImpact from '@/components/home/VisualImpact';
import YomaSection from '@/components/home/YomaSection';
import MissionStatement from '@/components/home/MissionStatement';
import AudienceSection from '@/components/home/AudienceSection';
import TeamSection from '@/components/home/TeamSection';
import LeadGenSections from '@/components/home/LeadGenSections';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VisualImpact />
      <YomaSection />
      <MissionStatement />
      <AudienceSection />
      <TeamSection />
      <LeadGenSections />
      <CTASection />
    </div>
  );
};

export default Index;
