import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Linkedin, Instagram, Facebook, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yvonne1roberts/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'X' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: ExternalLink, href: 'https://reddit.com', label: 'Reddit' },
];

const WaitlistFooter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const { error } = await supabase.from('newsletter_subscriptions').insert({ email });
      if (error) throw error;
      toast.success('Subscribed! You\'ll get launch updates.');
      setEmail('');
    } catch {
      toast.error('Could not subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-wekit-black text-white">
      {/* Main Footer */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png" alt="WeKIT" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-400 italic mb-4">Discover. Decide. Succeed.</p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-wekit-orange hover:text-white hover:border-wekit-orange transition-all duration-200">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-montserrat font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">FAQ</button></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-montserrat font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="cursor-default">Blog (Coming Soon)</span></li>
              <li><span className="cursor-default">Career Guides</span></li>
              <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">FAQ</button></li>
              <li><Link to="/investors" className="hover:text-white transition-colors">Investors</Link></li>
            </ul>
          </div>

          {/* Get Launch Updates */}
          <div>
            <h4 className="font-montserrat font-semibold text-sm mb-4">Get Launch Updates</h4>
            <p className="text-sm text-gray-400 mb-3">Be the first to know when we launch.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required disabled={loading}
                className="h-10 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm" />
              <Button type="submit" disabled={loading} className="h-10 px-4 rounded-lg bg-wekit-orange hover:bg-wekit-orange/90 text-white font-montserrat font-semibold text-sm whitespace-nowrap">
                {loading ? '...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Founder Row */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <img src="/lovable-uploads/f9e02f74-cebe-4891-a8e2-d36b5e83b5a7.png" alt="Yvonne Roberts" className="w-12 h-12 rounded-full object-cover border-2 border-wekit-orange" />
          <span className="text-sm text-gray-300">Connect with Founder <strong className="text-white">Yvonne Roberts</strong></span>
          <a href="https://www.linkedin.com/in/yvonne1roberts/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-montserrat font-semibold text-white bg-[#0A66C2] hover:bg-[#084d96] px-4 py-1.5 rounded-lg transition-colors">
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} We-KIT International Pvt Limited — Wot Kareer Is iT? All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default WaitlistFooter;
