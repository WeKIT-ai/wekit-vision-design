
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from './UserMenu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Schools', path: '/schools' },
    { name: 'Students', path: '/students' },
    { name: 'Professionals', path: '/professionals' },
    { name: 'NGOs', path: '/ngos' },
    { name: 'Investors', path: '/investors' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/4c95f2da-0e89-4698-8a7e-e9d25349b6c3.png" 
              alt="We-KIT Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                  location.pathname === item.path
                    ? 'text-gray-900'
                    : 'text-gray-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-sm font-medium text-gray-500 hover:text-gray-600 p-0 h-auto bg-transparent hover:bg-transparent flex items-center gap-1"
                >
                  About Us
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full cursor-pointer">
                    Our Story
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#team" className="w-full cursor-pointer">
                    Our Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#mission" className="w-full cursor-pointer">
                    Mission & Vision
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {user ? (
              <UserMenu />
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/auth">
                  <Button variant="ghost" className="text-gray-900 hover:bg-gray-100 rounded-none font-medium">
                    Sign In
                  </Button>
                </Link>
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none border-0 shadow-none hover:shadow-none font-medium">
                  Partner with Us
                </Button>
              </div>
            )}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-8 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-gray-600 ${
                    location.pathname === item.path
                      ? 'text-gray-900'
                      : 'text-gray-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-500 hover:text-gray-600 transition-colors"
              >
                About Us
              </Link>
              
              {user ? (
                <div className="pt-4 border-t border-gray-100">
                  <UserMenu />
                </div>
              ) : (
                <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-fit text-gray-900 hover:bg-gray-100 rounded-none font-medium">
                      Sign In
                    </Button>
                  </Link>
                  <Button className="bg-black hover:bg-gray-800 text-white w-fit px-8 py-3 rounded-none border-0 shadow-none hover:shadow-none font-medium">
                    Partner with Us
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
