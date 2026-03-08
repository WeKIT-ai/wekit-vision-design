import { Youtube, Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="section-darker border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png" 
                alt="WeKIT Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-semibold font-montserrat text-foreground">WeKIT</h3>
                <p className="text-sm text-muted-foreground">Wot Kareer Is iT?</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md text-lg">
              Rooting you in your purpose. Empowering youth through AI-driven mentorship, bridging the gap between potential and opportunity.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: Youtube, href: 'https://www.youtube.com/@WeKITMentoring' },
                { icon: Facebook, href: 'https://www.facebook.com/wekitorg' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/we-kit-mentoring' },
                { icon: Instagram, href: 'https://www.instagram.com/we.kit.mentoring' },
                { icon: Mail, href: 'mailto:hello@wekitmentoring.com' },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold font-montserrat text-foreground text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { to: '/schools', label: 'Schools' },
                { to: '/students', label: 'Students' },
                { to: '/parents', label: 'Parents' },
                { to: '/professionals', label: 'Professionals' },
                { to: '/ngos', label: 'NGOs' },
                { to: '/investors', label: 'Investors' },
                { to: '/about', label: 'About Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground hover:text-white transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold font-montserrat text-foreground text-lg">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@wekitmentoring.com" className="text-muted-foreground hover:text-white transition-colors duration-300">
                  hello@wekitmentoring.com
                </a>
              </li>
              <li>
                <a href="mailto:support@wekitmentoring.com" className="text-muted-foreground hover:text-white transition-colors duration-300">
                  support@wekitmentoring.com
                </a>
              </li>
              <li className="text-muted-foreground">London, UK</li>
              <li className="text-muted-foreground">Global Operations</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8">
          <p className="text-muted-foreground/60 text-center text-sm">
            © 2024 WeKIT International Pvt Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
