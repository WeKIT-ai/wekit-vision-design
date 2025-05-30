
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">wekit.ai</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering Africa's youth through AI-driven mentorship, bridging the gap between potential and opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:hello@wekit.ai" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/schools" className="text-gray-600 hover:text-blue-600 transition-colors">Schools</a></li>
              <li><a href="/students" className="text-gray-600 hover:text-blue-600 transition-colors">Students</a></li>
              <li><a href="/professionals" className="text-gray-600 hover:text-blue-600 transition-colors">Professionals</a></li>
              <li><a href="/ngos" className="text-gray-600 hover:text-blue-600 transition-colors">NGOs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">hello@wekit.ai</li>
              <li className="text-gray-600">+234 (0) 123 456 789</li>
              <li className="text-gray-600">Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 wekit.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
