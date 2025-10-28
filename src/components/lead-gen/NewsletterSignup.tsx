
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { newsletterSchema } from '@/lib/validation';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Validate input
      const result = newsletterSchema.safeParse({ email });
      if (!result.success) {
        toast({
          title: "Validation Error",
          description: result.error.errors[0].message,
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: result.data.email,
          source_page: window.location.pathname
        });

      if (error) throw error;

      toast({
        title: "Welcome to WeKIT!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Stay Updated with WeKIT</h3>
      </div>
      <p className="text-gray-600 mb-2">Get the latest insights on youth mentorship and AI-driven education from WeKIT International.</p>
      <p className="text-sm text-gray-500 mb-4 italic">"Wot Kareer Is iT?" - Stay informed about career development</p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
