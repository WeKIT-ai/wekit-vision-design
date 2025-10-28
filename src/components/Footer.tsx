import { Youtube, Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
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
                <h3 className="text-2xl font-medium text-gray-900">WeKIT</h3>
                <p className="text-sm text-gray-500">Wot Kareer Is iT?</p>
              </div>
            </div>
            <p className="text-gray-500 font-light leading-relaxed max-w-md text-lg">
              Rooting you in your purpose. Empowering youth through AI-driven mentorship, bridging the gap between potential and opportunity.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.youtube.com/@WeKITMentoring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.facebook.com/wekitorg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/we-kit-mentoring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/we.kit.mentoring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:hello@wekitmentoring.com" 
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-medium text-gray-900 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/schools" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Schools</Link></li>
              <li><Link to="/students" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Students</Link></li>
              <li>
                <a 
                  href="https://lovable.dev/projects/db205b89-38c3-49ab-9fb5-591b507101f0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors font-light"
                >
                  Parents
                </a>
              </li>
              <li><Link to="/professionals" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Professionals</Link></li>
              <li><Link to="/ngos" className="text-gray-500 hover:text-gray-900 transition-colors font-light">NGOs</Link></li>
              <li><Link to="/investors" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Investors</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-gray-900 transition-colors font-light">About Us</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-medium text-gray-900 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:hello@wekitmentoring.com" 
                  className="text-gray-500 hover:text-gray-900 transition-colors font-light"
                >
                  hello@wekitmentoring.com
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@wekitmentoring.com" 
                  className="text-gray-500 hover:text-gray-900 transition-colors font-light"
                >
                  support@wekitmentoring.com
                </a>
              </li>
              <li className="text-gray-500 font-light">London, UK</li>
              <li className="text-gray-500 font-light">Global Operations</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8">
          <p className="text-gray-400 font-light text-center">
            © 2024 WeKIT International Pvt Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
