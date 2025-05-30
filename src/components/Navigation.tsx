
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
          <Link to="/" className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors">
            wekit.ai
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
