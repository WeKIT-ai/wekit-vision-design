
import Hero from '@/components/home/Hero';
import VisualImpact from '@/components/home/VisualImpact';
import YomaSection from '@/components/home/YomaSection';
import LeadGenSections from '@/components/home/LeadGenSections';
import MissionStatement from '@/components/home/MissionStatement';
import AudienceSection from '@/components/home/AudienceSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <VisualImpact />
      <YomaSection />
      <LeadGenSections />
      <MissionStatement />
      <AudienceSection />
      <CTASection />
    </div>
  );
};

export default Index;
