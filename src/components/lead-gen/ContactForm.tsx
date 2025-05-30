
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
          name="company"
          placeholder="Organization/Company"
          value={formData.company}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          placeholder="Tell us about your goals and how we can help..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
