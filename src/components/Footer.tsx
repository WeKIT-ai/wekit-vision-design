import { Youtube, Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
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
            <div className="flex space-x-6">
              <a href="https://www.youtube.com/@WeKITMentoring" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Youtube size={24} />
              </a>
              <a href="https://www.facebook.com/wekitorg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://www.linkedin.com/company/we-kit-mentoring" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/we.kit.mentoring" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="mailto:hello@wekitmentoring.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold font-montserrat text-foreground text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/schools" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Schools</Link></li>
              <li><Link to="/students" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Students</Link></li>
              <li><Link to="/parents" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Parents</Link></li>
              <li><Link to="/professionals" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Professionals</Link></li>
              <li><Link to="/ngos" className="text-muted-foreground hover:text-foreground transition-colors duration-300">NGOs</Link></li>
              <li><Link to="/investors" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Investors</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-300">About Us</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold font-montserrat text-foreground text-lg">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@wekitmentoring.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                  hello@wekitmentoring.com
                </a>
              </li>
              <li>
                <a href="mailto:support@wekitmentoring.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                  support@wekitmentoring.com
                </a>
              </li>
              <li className="text-muted-foreground">Global Operations</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8">
          <p className="text-muted-foreground text-center">
            © 2024 WeKIT International Pvt Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
