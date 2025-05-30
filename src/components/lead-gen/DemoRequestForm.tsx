
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    studentsCount: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request:', formData);
    toast({
      title: "Demo Scheduled!",
      description: "We'll contact you to confirm your demo session.",
    });
    setFormData({ name: '', email: '', organization: '', role: '', studentsCount: '' });
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
          placeholder="School/Organization Name"
          value={formData.organization}
          onChange={handleChange}
          required
        />
        <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
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
        />
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
          Schedule Demo
        </Button>
      </form>
    </div>
  );
};

export default DemoRequestForm;
