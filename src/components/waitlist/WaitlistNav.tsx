import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const WaitlistNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'About', id: 'founder' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png" alt="WeKIT" className="h-10 lg:h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="font-montserrat text-sm font-medium text-wekit-black hover:text-wekit-blue transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo('waitlist-cta')} className="font-montserrat text-sm font-semibold text-white px-6 py-2.5 rounded-full bg-gradient-to-r from-wekit-blue to-wekit-zaffre hover:opacity-90 transition-opacity">
              Join Waitlist
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-fade-in">
            {links.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left font-montserrat text-sm font-medium text-wekit-black py-2">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo('waitlist-cta')} className="w-full font-montserrat text-sm font-semibold text-white px-6 py-2.5 rounded-full bg-gradient-to-r from-wekit-blue to-wekit-zaffre">
              Join Waitlist
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default WaitlistNav;
