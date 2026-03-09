
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Handshake } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { partnershipInquirySchema } from '@/lib/validation';
import { syncToZohoCRM } from '@/utils/zohoSync';
import PolicyAcceptance from '@/components/PolicyAcceptance';
import { recordPolicyConsent } from '@/utils/policyConsent';

const PartnershipInquiry = () => {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', partnershipType: '', details: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [showPolicyError, setShowPolicyError] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!policyAccepted) { setShowPolicyError(true); return; }
    setIsLoading(true);
    
    try {
      const result = partnershipInquirySchema.safeParse(formData);
      if (!result.success) {
        toast({ title: "Validation Error", description: result.error.errors[0].message, variant: "destructive" });
        setIsLoading(false);
        return;
      }

      const { error: contactError } = await supabase.from('contact_submissions').insert({
        name: result.data.name, email: result.data.email, company: result.data.organization,
        message: `Partnership Inquiry - Type: ${result.data.partnershipType}. Details: ${result.data.details}`
      });
      if (contactError) throw contactError;

      recordPolicyConsent(result.data.email, 'partnership-inquiry');

      syncToZohoCRM({ form_type: 'partnership-inquiry', first_name: result.data.name, last_name: result.data.name, email: result.data.email, company: result.data.organization, description: `Partnership Inquiry - Type: ${result.data.partnershipType}. Details: ${result.data.details}` });

      await supabase.from('page_interactions').insert({
        page_name: window.location.pathname, interaction_type: 'partnership_inquiry',
        metadata: { partnership_type: result.data.partnershipType, source: 'partnership_form' }
      });

      toast({ title: "Partnership Inquiry Received!", description: "Our partnerships team will review and contact you soon." });
      setFormData({ name: '', email: '', organization: '', partnershipType: '', details: '' });
      setPolicyAccepted(false); setShowPolicyError(false);
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit inquiry. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg border border-green-200">
      <div className="flex items-center mb-4">
        <Handshake className="w-6 h-6 text-green-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Partnership Opportunities</h3>
      </div>
      <p className="text-gray-600 mb-6">Explore collaboration opportunities to expand your impact in youth development.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="name" placeholder="Contact Name" value={formData.name} onChange={handleChange} required disabled={isLoading} />
          <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required disabled={isLoading} />
        </div>
        <Input name="organization" placeholder="Organization Name" value={formData.organization} onChange={handleChange} required disabled={isLoading} />
        <Select value={formData.partnershipType} onValueChange={(value) => setFormData(prev => ({ ...prev, partnershipType: value }))} disabled={isLoading}>
          <SelectTrigger><SelectValue placeholder="Partnership Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="strategic">Strategic Partnership</SelectItem>
            <SelectItem value="technology">Technology Integration</SelectItem>
            <SelectItem value="content">Content Collaboration</SelectItem>
            <SelectItem value="funding">Funding/Investment</SelectItem>
            <SelectItem value="distribution">Distribution Partnership</SelectItem>
          </SelectContent>
        </Select>
        <Textarea name="details" placeholder="Describe your partnership vision and how we can work together..." rows={4} value={formData.details} onChange={handleChange} required disabled={isLoading} />
        <PolicyAcceptance accepted={policyAccepted} onAcceptedChange={(v) => { setPolicyAccepted(v); if (v) setShowPolicyError(false); }} showError={showPolicyError} />
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading || !policyAccepted}>
          {isLoading ? 'Submitting...' : 'Submit Partnership Inquiry'}
        </Button>
      </form>
    </div>
  );
};

export default PartnershipInquiry;
