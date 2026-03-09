
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { earlyAccessSchema } from '@/lib/validation';
import { syncToZohoCRM } from '@/utils/zohoSync';
import PolicyAcceptance from '@/components/PolicyAcceptance';
import { recordPolicyConsent } from '@/utils/policyConsent';

const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', userType: '', organization: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [showPolicyError, setShowPolicyError] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!policyAccepted) { setShowPolicyError(true); return; }
    setIsLoading(true);
    
    try {
      const result = earlyAccessSchema.safeParse(formData);
      if (!result.success) {
        toast({ title: "Validation Error", description: result.error.errors[0].message, variant: "destructive" });
        setIsLoading(false);
        return;
      }

      const { error: contactError } = await supabase.from('contact_submissions').insert({
        name: result.data.name, email: result.data.email, company: result.data.organization || null,
        message: `Early Access Signup - User Type: ${result.data.userType}`
      });
      if (contactError) throw contactError;

      recordPolicyConsent(result.data.email, 'early-access');

      syncToZohoCRM({ form_type: 'early-access', first_name: result.data.name, last_name: result.data.name, email: result.data.email, company: result.data.organization || '', description: `Early Access Signup - User Type: ${result.data.userType}` });

      await supabase.from('page_interactions').insert({
        page_name: window.location.pathname, interaction_type: 'early_access_signup',
        metadata: { user_type: result.data.userType, source: 'early_access_form' }
      });

      toast({ title: "You're In!", description: "You've been added to our early access list. Get ready for exclusive features!" });
      setFormData({ name: '', email: '', userType: '', organization: '' });
      setPolicyAccepted(false); setShowPolicyError(false);
    } catch (error) {
      toast({ title: "Error", description: "Failed to join early access. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
      <div className="flex items-center mb-4">
        <Zap className="w-6 h-6 text-indigo-600 mr-3" />
        <h3 className="text-lg font-semibold text-gray-900">Join our Waitlist!!!</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">Be among the first to experience our latest AI-powered features.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="text-sm" disabled={isLoading} />
        <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="text-sm" disabled={isLoading} />
        <Select value={formData.userType} onValueChange={(value) => setFormData(prev => ({ ...prev, userType: value }))} disabled={isLoading}>
          <SelectTrigger className="text-sm"><SelectValue placeholder="I am a..." /></SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="educator">Educator</SelectItem>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="administrator">Administrator</SelectItem>
          </SelectContent>
        </Select>
        <Input name="organization" placeholder="School/Organization (Optional)" value={formData.organization} onChange={handleChange} className="text-sm" disabled={isLoading} />
        <PolicyAcceptance accepted={policyAccepted} onAcceptedChange={(v) => { setPolicyAccepted(v); if (v) setShowPolicyError(false); }} showError={showPolicyError} showMinorNotice />
        <Button type="submit" size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isLoading || !policyAccepted}>
          {isLoading ? 'Joining...' : 'Join Early Access'}
        </Button>
      </form>
    </div>
  );
};

export default EarlyAccessForm;
