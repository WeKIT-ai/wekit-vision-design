import { Youtube, Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cinematic border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <img
                src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png"
                alt="WeKIT Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-semibold font-montserrat text-white">WeKIT</h3>
                <p className="text-sm text-white/40">Wot Kareer Is iT?</p>
              </div>
            </div>
            <p className="text-white/40 leading-relaxed max-w-md text-lg">
              Rooting you in your purpose. Empowering youth through AI-driven mentorship, bridging the gap between potential and opportunity.
            </p>
            <div className="flex space-x-5">
              {[
                { href: 'https://www.youtube.com/@WeKITMentoring', icon: Youtube },
                { href: 'https://www.facebook.com/wekitorg', icon: Facebook },
                { href: 'https://www.linkedin.com/company/we-kit-mentoring', icon: Linkedin },
                { href: 'https://www.instagram.com/we.kit.mentoring', icon: Instagram },
                { href: 'mailto:hello@wekitmentoring.com', icon: Mail },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white transition-colors duration-300"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold font-montserrat text-white text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { to: '/schools', label: 'Schools' },
                { to: '/students', label: 'Students' },
                { to: '/parents', label: 'Parents' },
                { to: '/professionals', label: 'Professionals' },
                { to: '/ngos', label: 'NGOs' },
                { to: '/investors', label: 'Investors' },
                { to: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/40 hover:text-white transition-colors duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold font-montserrat text-white text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@wekitmentoring.com" className="text-white/40 hover:text-white transition-colors duration-300 text-sm">
                  hello@wekitmentoring.com
                </a>
              </li>
              <li>
                <a href="mailto:support@wekitmentoring.com" className="text-white/40 hover:text-white transition-colors duration-300 text-sm">
                  support@wekitmentoring.com
                </a>
              </li>
              <li className="text-white/40 text-sm">London, UK</li>
              <li className="text-white/40 text-sm">Global Operations</li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-16 mb-8" />
        <p className="text-white/30 text-center text-sm">
          © 2024 WeKIT International Pvt Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
