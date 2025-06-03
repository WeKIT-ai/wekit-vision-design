
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from '../UserMenu';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Schools', path: '/schools' },
    { name: 'Students', path: '/students' },
    { name: 'Parents', path: 'https://lovable.dev/projects/db205b89-38c3-49ab-9fb5-591b507101f0', external: true },
    { name: 'Professionals', path: '/professionals' },
    { name: 'NGOs', path: '/ngos' },
    { name: 'Courses & Certifications', path: '/courses', highlight: true },
  ];

  if (!isOpen) return null;

  return (
    <div className="md:hidden py-8 border-t border-gray-100 bg-white">
      <div className="flex flex-col space-y-6">
        {navItems.map((item) => (
          item.external ? (
            <a
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-500 hover:text-gray-600 transition-colors"
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium transition-colors hover:text-gray-600 ${
                location.pathname === item.path
                  ? 'text-gray-900'
                  : item.highlight
                  ? 'text-blue-600'
                  : 'text-gray-500'
              }`}
            >
              {item.name}
            </Link>
          )
        ))}
        
        <Link
          to="/investors"
          onClick={() => setIsOpen(false)}
          className="text-lg font-medium text-gray-500 hover:text-gray-600 transition-colors"
        >
          Investors
        </Link>
        
        <a
          href="https://calendly.com/yvonne-roberts/wekit"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="text-lg font-medium text-gray-500 hover:text-gray-600 transition-colors pl-4"
        >
          Schedule a Call
        </a>
        
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
  );
};

export default MobileMenu;
