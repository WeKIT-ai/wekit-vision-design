
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    designation: '',
    organization: '',
    employeeCount: '',
    programme: '',
    serviceFor: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Replace this with your Zoho Forms webhook URL
  const ZOHO_WEBHOOK_URL = '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Validate required fields
      if (!formData.fullName || !formData.email || !formData.phone || 
          !formData.designation || !formData.organization || !formData.employeeCount) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      if (ZOHO_WEBHOOK_URL) {
        // Submit to Zoho Forms webhook
        await fetch(ZOHO_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            designation: formData.designation,
            organization: formData.organization,
            employee_count: formData.employeeCount,
            programme: formData.programme,
            service_for: formData.serviceFor,
            submitted_at: new Date().toISOString()
          })
        });
      }

      toast({
        title: "Demo Request Submitted!",
        description: "Our team will get in touch with you shortly.",
      });
      setFormData({ 
        fullName: '', email: '', phone: '', designation: '', 
        organization: '', employeeCount: '', programme: '', serviceFor: '' 
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Demo</h3>
        <p className="text-gray-600">
          Share your details <span className="text-primary font-medium">here</span>, and our team will get in touch with you.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="fullName"
          placeholder="Full Name*"
          value={formData.fullName}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="border-teal-400 focus:border-teal-500"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address*"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="border-teal-400 focus:border-teal-500"
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number*"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="border-teal-400 focus:border-teal-500"
        />
        <Select 
          value={formData.designation} 
          onValueChange={(value) => setFormData(prev => ({ ...prev, designation: value }))} 
          disabled={isLoading}
        >
          <SelectTrigger className="border-teal-400 focus:border-teal-500">
            <SelectValue placeholder="Designation*" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="principal">Principal/Director</SelectItem>
            <SelectItem value="vice_principal">Vice Principal</SelectItem>
            <SelectItem value="coordinator">Coordinator</SelectItem>
            <SelectItem value="counselor">Career Counselor</SelectItem>
            <SelectItem value="teacher">Teacher/Educator</SelectItem>
            <SelectItem value="admin">Administrator</SelectItem>
            <SelectItem value="trustee">Trustee/Management</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Input
          name="organization"
          placeholder="Name of Organisation*"
          value={formData.organization}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="border-teal-400 focus:border-teal-500"
        />
        <Select 
          value={formData.employeeCount} 
          onValueChange={(value) => setFormData(prev => ({ ...prev, employeeCount: value }))} 
          disabled={isLoading}
        >
          <SelectTrigger className="border-teal-400 focus:border-teal-500">
            <SelectValue placeholder="Number of Employees*" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-50">1-50</SelectItem>
            <SelectItem value="51-100">51-100</SelectItem>
            <SelectItem value="101-250">101-250</SelectItem>
            <SelectItem value="251-500">251-500</SelectItem>
            <SelectItem value="500+">500+</SelectItem>
          </SelectContent>
        </Select>
        <Select 
          value={formData.programme} 
          onValueChange={(value) => setFormData(prev => ({ ...prev, programme: value }))} 
          disabled={isLoading}
        >
          <SelectTrigger className="border-teal-400 focus:border-teal-500">
            <SelectValue placeholder="Which programme are you interested in?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wals">WALS – Life Skills Lab</SelectItem>
            <SelectItem value="wabls">WABLS – Bagless Learning Studio</SelectItem>
            <SelectItem value="wapps">WAPPS – Purpose & Pathways Studio</SelectItem>
            <SelectItem value="mentoring">WeKIT 360 Mentoring</SelectItem>
            <SelectItem value="wecred">WeCred – Digital Credentials</SelectItem>
            <SelectItem value="wafle">WAFLE – Financial Literacy</SelectItem>
            <SelectItem value="complete">Complete WeKIT Suite</SelectItem>
          </SelectContent>
        </Select>
        <Select 
          value={formData.serviceFor} 
          onValueChange={(value) => setFormData(prev => ({ ...prev, serviceFor: value }))} 
          disabled={isLoading}
        >
          <SelectTrigger className="border-teal-400 focus:border-teal-500">
            <SelectValue placeholder="Who do you need the service for?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="students">Students</SelectItem>
            <SelectItem value="teachers">Teachers</SelectItem>
            <SelectItem value="parents">Parents</SelectItem>
            <SelectItem value="institution">Entire Institution</SelectItem>
          </SelectContent>
        </Select>
        <Button 
          type="submit" 
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3" 
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default DemoRequestForm;
