
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Stay Updated</h3>
      </div>
      <p className="text-gray-600 mb-4">Get the latest insights on youth mentorship and AI-driven education.</p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
