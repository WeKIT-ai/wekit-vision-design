import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { waitlistSchema } from '@/lib/validation';

export const useWaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = waitlistSchema.safeParse({ name, email });
      if (!result.success) {
        toast({ title: "Validation Error", description: result.error.errors[0].message, variant: "destructive" });
        setIsLoading(false);
        return;
      }

      const { error } = await supabase.from('page_interactions').insert({
        page_name: '/waitlist',
        interaction_type: 'waitlist_signup',
        metadata: { name: result.data.name, email: result.data.email, source: 'waitlist_page' }
      });

      if (error) throw error;

      // Also track as psychometric test lead
      await supabase.from('psychometric_test_leads').insert({
        referral_source: 'waitlist_page',
        metadata: { name: result.data.name, email: result.data.email }
      });

      toast({ title: "You're on the list! 🎉", description: "We'll notify you as soon as We-KIT launches." });
      setName('');
      setEmail('');
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return { name, setName, email, setEmail, isLoading, handleSubmit };
};
