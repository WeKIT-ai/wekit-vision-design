import { Youtube, Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[hsl(210,28%,10%)] text-[hsl(0,0%,75%)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Logo */}
        <div className="pt-16 md:pt-20 pb-10 flex items-center space-x-3">
          <img 
            src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png" 
            alt="WeKIT Logo" 
            className="h-10 w-auto"
          />
          <span className="text-[hsl(0,0%,95%)] text-xl font-semibold font-montserrat">WeKIT</span>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 md:pb-20">
          {/* Column 1 */}
          <div className="space-y-4">
            <Link to="/about" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">About</Link>
            <Link to="/programs" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Programs</Link>
            <Link to="/schools" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Schools</Link>
            <Link to="/mentorship" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Mentorship</Link>
            <Link to="/start-journey" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Start now</Link>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <Link to="/students" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Students</Link>
            <Link to="/parents" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Parents</Link>
            <Link to="/professionals" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Professionals</Link>
            <Link to="/resources" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Resources</Link>
            <Link to="/courses" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Courses</Link>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <Link to="/ngos" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">NGOs</Link>
            <Link to="/investors" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Investors</Link>
            <Link to="/enterprise" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Enterprise</Link>
            <Link to="/roadmap" className="block text-[hsl(0,0%,95%)] hover:text-[hsl(0,0%,100%)] font-medium transition-colors">Roadmap</Link>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-8">
            <div>
              <a href="mailto:hello@wekitmentoring.com" className="inline-flex items-center text-[hsl(0,0%,95%)] font-semibold hover:text-[hsl(0,0%,100%)] transition-colors">
                Get in Touch <ChevronRight className="ml-1 h-4 w-4" />
              </a>
              <p className="mt-2 text-sm leading-relaxed">
                Reach out for partnerships, programs, or to learn how WeKIT can support your community.
              </p>
            </div>
            <div>
              <a href="mailto:support@wekitmentoring.com" className="inline-flex items-center text-[hsl(0,0%,95%)] font-semibold hover:text-[hsl(0,0%,100%)] transition-colors">
                Media Inquiries <ChevronRight className="ml-1 h-4 w-4" />
              </a>
              <p className="mt-2 text-sm leading-relaxed">
                Members of the press and media are welcome to contact us.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[hsl(210,20%,18%)] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
            <span>© 2025 WeKIT International Pvt Limited. All rights reserved.</span>
            <span className="hidden md:inline text-[hsl(210,20%,25%)]">|</span>
            <Link to="/terms" className="text-[hsl(0,0%,75%)] hover:text-[hsl(0,0%,95%)] transition-colors">Terms & Conditions</Link>
            <span className="hidden md:inline text-[hsl(210,20%,25%)]">|</span>
            <span>Global Operations</span>
          </div>

          <div className="flex items-center space-x-5">
            <a href="https://www.instagram.com/we.kit.mentoring" target="_blank" rel="noopener noreferrer" className="text-[hsl(0,0%,60%)] hover:text-[hsl(0,0%,95%)] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/wekitorg" target="_blank" rel="noopener noreferrer" className="text-[hsl(0,0%,60%)] hover:text-[hsl(0,0%,95%)] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.youtube.com/@WeKITMentoring" target="_blank" rel="noopener noreferrer" className="text-[hsl(0,0%,60%)] hover:text-[hsl(0,0%,95%)] transition-colors">
              <Youtube size={18} />
            </a>
            <a href="https://www.linkedin.com/company/we-kit-mentoring" target="_blank" rel="noopener noreferrer" className="text-[hsl(0,0%,60%)] hover:text-[hsl(0,0%,95%)] transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@wekitmentoring.com" className="text-[hsl(0,0%,60%)] hover:text-[hsl(0,0%,95%)] transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
