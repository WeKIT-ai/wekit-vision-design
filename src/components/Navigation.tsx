
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavigationItems from './navigation/NavigationItems';
import InvestorsDropdown from './navigation/InvestorsDropdown';
import AboutDropdown from './navigation/AboutDropdown';
import ResourcesDropdown from './navigation/ResourcesDropdown';
import AuthSection from './navigation/AuthSection';
import MobileMenu from './navigation/MobileMenu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 animate-[slideLeft_0.8s_ease-out]">
            <Link 
              to="/" 
              className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              aria-label="WeKIT - Home"
            >
              <img 
                src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png" 
                alt="WeKIT - Wot Kareer Is iT?" 
                className="h-12 lg:h-14 w-auto group-hover:animate-pulse transition-all duration-300"
                title="WeKIT International Pvt Limited"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 animate-[slideRight_0.8s_ease-out]">
            <div className="flex items-center space-x-1 xl:space-x-2">
              <div className="animate-[slideUp_0.6s_ease-out_0.2s_both]">
                <NavigationItems />
              </div>
              <div className="animate-[slideUp_0.6s_ease-out_0.4s_both]">
                <InvestorsDropdown />
              </div>
              <div className="animate-[slideUp_0.6s_ease-out_0.6s_both]">
                <ResourcesDropdown />
              </div>
              <div className="animate-[slideUp_0.6s_ease-out_0.7s_both]">
                <AboutDropdown />
              </div>
            </div>
            <div className="ml-4 xl:ml-6 animate-[slideUp_0.6s_ease-out_0.8s_both]">
              <AuthSection />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden animate-[slideRight_0.8s_ease-out]">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-accent hover:text-accent-foreground p-2 rounded-md transition-all duration-300 hover:scale-110 hover:rotate-6 group"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? 
                <X size={20} className="group-hover:animate-spin transition-transform duration-300" /> : 
                <Menu size={20} className="group-hover:animate-bounce transition-transform duration-300" />
              }
            </Button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
