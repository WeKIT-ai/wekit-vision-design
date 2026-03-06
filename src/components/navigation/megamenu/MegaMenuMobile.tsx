import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { allMenus, aboutLinks } from './MegaMenuData';
import UserMenu from '../../UserMenu';

interface MegaMenuMobileProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MegaMenuMobile = ({ isOpen, setIsOpen }: MegaMenuMobileProps) => {
  const { user } = useAuth();
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggle = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  const close = () => setIsOpen(false);

  return (
    <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background overflow-y-auto">
      <div className="px-4 py-6 space-y-1">
        {/* Home */}
        <Link
          to="/"
          onClick={close}
          className="block px-4 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
        >
          Home
        </Link>

        {/* Expandable sections */}
        {allMenus.map((menu) => (
          <div key={menu.label}>
            <button
              onClick={() => toggle(menu.label)}
              className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
            >
              <span>{menu.label}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${expanded === menu.label ? 'rotate-180' : ''}`}
              />
            </button>
            {expanded === menu.label && (
              <div className="pl-4 pb-2 animate-fade-in">
                {menu.groups.map((group) => (
                  <div key={group.title} className="mb-3">
                    <p className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {group.title}
                    </p>
                    {group.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={close}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* About */}
        <div>
          <button
            onClick={() => toggle('About')}
            className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <span>About</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${expanded === 'About' ? 'rotate-180' : ''}`}
            />
          </button>
          {expanded === 'About' && (
            <div className="pl-4 pb-2 animate-fade-in">
              {aboutLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={close}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Auth buttons */}
        <div className="pt-6 border-t border-border space-y-3 px-4">
          {user ? (
            <UserMenu />
          ) : (
            <>
              <Link to="/auth" onClick={close}>
                <Button variant="outline" className="w-full border-primary text-foreground font-semibold">
                  Login
                </Button>
              </Link>
              <Link to="/waitlist" onClick={close}>
                <Button className="w-full bg-primary text-primary-foreground font-semibold mt-2">
                  Join WeKIT
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuMobile;
