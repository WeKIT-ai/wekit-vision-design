
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { demoRequestSchema } from '@/lib/validation';

const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    studentsCount: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Validate input
      const result = demoRequestSchema.safeParse({
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        role: formData.role,
        numberOfStudents: formData.studentsCount
      });
      
      if (!result.success) {
        toast({
          title: "Validation Error",
          description: result.error.errors[0].message,
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      // Store in page_interactions table as demo request
      const { error } = await supabase
        .from('page_interactions')
        .insert({
          page_name: window.location.pathname,
          interaction_type: 'demo_request',
          interaction_data: {
            name: result.data.name,
            email: result.data.email,
            organization: result.data.organization,
            role: result.data.role,
            students_count: result.data.numberOfStudents
          }
        });

      if (error) throw error;

      toast({
        title: "Demo Scheduled!",
        description: "We'll contact you to confirm your demo session.",
      });
      setFormData({ name: '', email: '', organization: '', role: '', studentsCount: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to schedule demo. Please try again.",
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
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg border border-purple-200">
      <div className="flex items-center mb-4">
        <Calendar className="w-6 h-6 text-purple-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Request a Demo</h3>
      </div>
      <p className="text-gray-600 mb-6">See how WeKIT can transform your institution's approach to student mentorship.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        <Input
          name="organization"
          placeholder="School/Organization Name"
          value={formData.organization}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))} disabled={isLoading}>
          <SelectTrigger>
            <SelectValue placeholder="Your Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="principal">Principal/Head</SelectItem>
            <SelectItem value="counselor">Career Counselor</SelectItem>
            <SelectItem value="teacher">Teacher/Educator</SelectItem>
            <SelectItem value="admin">Administrator</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Input
          name="studentsCount"
          placeholder="Number of Students"
          value={formData.studentsCount}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
          {isLoading ? 'Scheduling...' : 'Schedule Demo'}
        </Button>
      </form>
    </div>
  );
};

export default DemoRequestForm;
