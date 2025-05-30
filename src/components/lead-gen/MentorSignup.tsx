
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MentorSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    experience: '',
    expertise: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mentor signup:', formData);
    toast({
      title: "Welcome to WeKIT!",
      description: "Your mentor application has been submitted. We'll be in touch soon!",
    });
    setFormData({ name: '', email: '', company: '', industry: '', experience: '', expertise: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg border border-orange-200">
      <div className="flex items-center mb-4">
        <UserPlus className="w-6 h-6 text-orange-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Become a Mentor</h3>
      </div>
      <p className="text-gray-600 mb-6">Share your expertise and help shape the next generation of leaders.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="name"
            placeholder="Full Name"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="company"
            placeholder="Current Company"
            value={formData.company}
            onChange={handleChange}
          />
          <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Years of Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3-5">3-5 years</SelectItem>
            <SelectItem value="5-10">5-10 years</SelectItem>
            <SelectItem value="10-15">10-15 years</SelectItem>
            <SelectItem value="15+">15+ years</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="expertise"
          placeholder="Describe your expertise and what you'd like to mentor students in..."
          rows={3}
          value={formData.expertise}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
          Apply as Mentor
        </Button>
      </form>
    </div>
  );
};

export default MentorSignup;
