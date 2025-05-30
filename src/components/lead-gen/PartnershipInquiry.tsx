
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Handshake } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PartnershipInquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    partnershipType: '',
    details: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership inquiry:', formData);
    toast({
      title: "Partnership Inquiry Received!",
      description: "Our partnerships team will review and contact you soon.",
    });
    setFormData({ name: '', email: '', organization: '', partnershipType: '', details: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
          <Input
            name="name"
            placeholder="Contact Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <Input
          name="organization"
          placeholder="Organization Name"
          value={formData.organization}
          onChange={handleChange}
          required
        />
        <Select value={formData.partnershipType} onValueChange={(value) => setFormData(prev => ({ ...prev, partnershipType: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Partnership Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="strategic">Strategic Partnership</SelectItem>
            <SelectItem value="technology">Technology Integration</SelectItem>
            <SelectItem value="content">Content Collaboration</SelectItem>
            <SelectItem value="funding">Funding/Investment</SelectItem>
            <SelectItem value="distribution">Distribution Partnership</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="details"
          placeholder="Describe your partnership vision and how we can work together..."
          rows={4}
          value={formData.details}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Submit Partnership Inquiry
        </Button>
      </form>
    </div>
  );
};

export default PartnershipInquiry;
