
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    organization: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Early access signup:', formData);
    toast({
      title: "You're In!",
      description: "You've been added to our early access list. Get ready for exclusive features!",
    });
    setFormData({ name: '', email: '', userType: '', organization: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
      <div className="flex items-center mb-4">
        <Zap className="w-6 h-6 text-indigo-600 mr-3" />
        <h3 className="text-lg font-semibold text-gray-900">Get Early Access</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">Be among the first to experience our latest AI-powered features.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="text-sm"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-sm"
        />
        <Select value={formData.userType} onValueChange={(value) => setFormData(prev => ({ ...prev, userType: value }))}>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder="I am a..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="educator">Educator</SelectItem>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="administrator">Administrator</SelectItem>
          </SelectContent>
        </Select>
        <Input
          name="organization"
          placeholder="School/Organization (Optional)"
          value={formData.organization}
          onChange={handleChange}
          className="text-sm"
        />
        <Button type="submit" size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
          Join Early Access
        </Button>
      </form>
    </div>
  );
};

export default EarlyAccessForm;
