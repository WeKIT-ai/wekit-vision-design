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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png" 
              alt="WeKIT - Vot Kareer Is iT?" 
              className="h-16 w-auto"
              title="WeKIT International Pvt Limited"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <NavigationItems />
            <InvestorsDropdown />
            <AboutDropdown />
            <AuthSection />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:bg-gray-100 rounded-none shadow-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
