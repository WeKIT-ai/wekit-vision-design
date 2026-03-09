
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { contactFormSchema } from '@/lib/validation';
import { syncToZohoCRM } from '@/utils/zohoSync';
import PolicyAcceptance from '@/components/PolicyAcceptance';
import { recordPolicyConsent } from '@/utils/policyConsent';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [showPolicyError, setShowPolicyError] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!policyAccepted) {
      setShowPolicyError(true);
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = contactFormSchema.safeParse(formData);
      if (!result.success) {
        toast({ title: "Validation Error", description: result.error.errors[0].message, variant: "destructive" });
        setIsLoading(false);
        return;
      }

      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: result.data.name,
          email: result.data.email,
          company: result.data.company || null,
          message: result.data.message,
          source_page: window.location.pathname
        });

      if (error) throw error;

      recordPolicyConsent(result.data.email, 'contact-form');

      syncToZohoCRM({
        form_type: 'contact-form',
        first_name: result.data.name,
        last_name: result.data.name,
        email: result.data.email,
        company: result.data.company || '',
        description: result.data.message,
      });

      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: '', email: '', company: '', message: '' });
      setPolicyAccepted(false);
      setShowPolicyError(false);
    } catch (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
      <div className="flex items-center mb-4">
        <Phone className="w-6 h-6 text-green-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
      </div>
      <p className="text-gray-600 mb-6">Ready to transform youth development? Let's discuss your needs.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required disabled={isLoading} />
          <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required disabled={isLoading} />
        </div>
        <Input name="company" placeholder="Organization/Company" value={formData.company} onChange={handleChange} disabled={isLoading} />
        <Textarea name="message" placeholder="Tell us about your goals and how we can help..." rows={4} value={formData.message} onChange={handleChange} required disabled={isLoading} />
        <PolicyAcceptance accepted={policyAccepted} onAcceptedChange={(v) => { setPolicyAccepted(v); if (v) setShowPolicyError(false); }} showError={showPolicyError} />
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading || !policyAccepted}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
