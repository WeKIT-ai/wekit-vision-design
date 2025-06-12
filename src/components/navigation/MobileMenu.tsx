
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronRight } from 'lucide-react';
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
    { name: 'Schools & Colleges', path: '/schools' },
    { name: 'Students & Mentees', path: '/students' },
    { name: 'Parents', path: 'https://lovable.dev/projects/db205b89-38c3-49ab-9fb5-591b507101f0', external: true },
    { name: 'Professionals', path: '/professionals' },
    { name: 'NGOs & Partners', path: '/ngos' },
    { name: 'Courses & Certifications', path: '/courses', highlight: true },
  ];

  const dropdownItems = [
    { name: 'Investment Overview', path: '/investors' },
    { name: 'Schedule a Call', path: 'https://calendly.com/yvonne-roberts/wekit', external: true },
    { name: 'About Us', path: '/about' },
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="px-4 py-6 space-y-1">
        {/* Main Navigation Items */}
        <div className="space-y-1 mb-6">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 px-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
              >
                <span>{item.name}</span>
                <ChevronRight size={16} className="opacity-50" />
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-3 px-4 text-base font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-foreground bg-accent/70 shadow-sm'
                    : item.highlight
                    ? 'text-primary hover:text-primary/80 hover:bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </Link>
            )
          ))}
        </div>
        
        {/* Dropdown Items */}
        <div className="space-y-1 mb-6 pt-4 border-t border-border">
          <h3 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            More
          </h3>
          {dropdownItems.map((item) => (
            item.external ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 px-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
              >
                <span>{item.name}</span>
                <ChevronRight size={16} className="opacity-50" />
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-3 px-4 text-base font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-foreground bg-accent/70 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </Link>
            )
          ))}
        </div>
        
        {/* Auth Section */}
        {user ? (
          <div className="pt-4 border-t border-border">
            <UserMenu />
          </div>
        ) : (
          <div className="flex flex-col space-y-3 pt-4 border-t border-border">
            <Link to="/auth" onClick={() => setIsOpen(false)}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:bg-accent hover:text-accent-foreground font-medium py-3 px-4 rounded-lg"
              >
                Sign In
              </Button>
            </Link>
            <Button className="w-full bg-foreground hover:bg-foreground/90 text-background font-medium py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              Partner with WeKIT & NRECT
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
