
import { Youtube, Facebook, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h3 className="text-3xl font-medium text-gray-900">wekit.ai</h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-md text-lg">
              Empowering youth through AI-driven mentorship, bridging the gap between potential and opportunity.
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
              <li><a href="/schools" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Schools</a></li>
              <li><a href="/students" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Students</a></li>
              <li><a href="/professionals" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Professionals</a></li>
              <li><a href="/ngos" className="text-gray-500 hover:text-gray-900 transition-colors font-light">NGOs</a></li>
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
              <li className="text-gray-500 font-light">Global Headquarters</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8">
          <p className="text-gray-400 font-light text-center">
            © 2024 wekit.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
