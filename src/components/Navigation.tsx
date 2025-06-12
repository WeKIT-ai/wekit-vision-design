
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavigationItems from './navigation/NavigationItems';
import InvestorsDropdown from './navigation/InvestorsDropdown';
import AboutDropdown from './navigation/AboutDropdown';
import AuthSection from './navigation/AuthSection';
import MobileMenu from './navigation/MobileMenu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
              aria-label="WeKIT - Home"
            >
              <img 
                src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png" 
                alt="WeKIT - Vot Kareer Is iT?" 
                className="h-12 lg:h-14 w-auto"
                title="WeKIT International Pvt Limited"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <div className="flex items-center space-x-1 xl:space-x-2">
              <NavigationItems />
              <InvestorsDropdown />
              <AboutDropdown />
            </div>
            <div className="ml-4 xl:ml-6">
              <AuthSection />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-accent hover:text-accent-foreground p-2 rounded-md transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
