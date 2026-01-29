import { Youtube, Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <AnimatedSection animation="fade-up" className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center space-x-4 group">
              <img 
                src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png" 
                alt="WeKIT Logo" 
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
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
                className="text-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.facebook.com/wekitorg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/we-kit-mentoring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/we.kit.mentoring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:hello@wekitmentoring.com" 
                className="text-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100} className="space-y-6">
            <h4 className="font-medium text-gray-900 text-lg">Quick Links</h4>
            <StaggeredChildren className="space-y-4" staggerDelay={50} animation="fade-left">
              <li className="list-none"><Link to="/schools" className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light hover:translate-x-1 inline-block">Schools</Link></li>
              <li className="list-none"><Link to="/students" className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light hover:translate-x-1 inline-block">Students</Link></li>
              <li className="list-none"><Link to="/parents" className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light hover:translate-x-1 inline-block">Parents</Link></li>
              <li className="list-none"><Link to="/professionals" className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light hover:translate-x-1 inline-block">Professionals</Link></li>
              <li className="list-none"><Link to="/ngos" className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light hover:translate-x-1 inline-block">NGOs</Link></li>
              <li className="list-none"><Link to="/investors" className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light hover:translate-x-1 inline-block">Investors</Link></li>
              <li className="list-none"><Link to="/about" className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light hover:translate-x-1 inline-block">About Us</Link></li>
            </StaggeredChildren>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200} className="space-y-6">
            <h4 className="font-medium text-gray-900 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:hello@wekitmentoring.com" 
                  className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light hover:translate-x-1 inline-block"
                >
                  hello@wekitmentoring.com
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@wekitmentoring.com" 
                  className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-light hover:translate-x-1 inline-block"
                >
                  support@wekitmentoring.com
                </a>
              </li>
              <li className="text-gray-500 font-light">London, UK</li>
              <li className="text-gray-500 font-light">Global Operations</li>
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="border-t border-gray-100 mt-16 pt-8">
            <p className="text-gray-400 font-light text-center">
              © 2024 WeKIT International Pvt Limited. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
