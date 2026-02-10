import { useEffect } from 'react';
import WaitlistHero from '@/components/waitlist/WaitlistHero';
import WaitlistProblem from '@/components/waitlist/WaitlistProblem';
import WaitlistSolution from '@/components/waitlist/WaitlistSolution';
import WaitlistHowItWorks from '@/components/waitlist/WaitlistHowItWorks';
import WaitlistFounder from '@/components/waitlist/WaitlistFounder';
import WaitlistFeatures from '@/components/waitlist/WaitlistFeatures';
import WaitlistShowcase from '@/components/waitlist/WaitlistShowcase';
import WaitlistStats from '@/components/waitlist/WaitlistStats';
import WaitlistCTA from '@/components/waitlist/WaitlistCTA';
import WaitlistFAQ from '@/components/waitlist/WaitlistFAQ';
import WaitlistFooter from '@/components/waitlist/WaitlistFooter';
import WaitlistNav from '@/components/waitlist/WaitlistNav';
import { supabase } from '@/integrations/supabase/client';

const Waitlist = () => {
  useEffect(() => {
    supabase.from('page_interactions').insert({
      page_name: '/waitlist',
      interaction_type: 'page_view',
    }).then();
  }, []);

  return (
    <div className="font-roboto bg-white">
      <WaitlistNav />
      <WaitlistHero />
      <WaitlistProblem />
      <WaitlistSolution />
      <WaitlistHowItWorks />
      <WaitlistFounder />
      <WaitlistFeatures />
      <WaitlistShowcase />
      <WaitlistStats />
      <WaitlistCTA />
      <WaitlistFAQ />
      <WaitlistFooter />
    </div>
  );
};

export default Waitlist;
