import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from './UserMenu';
import MegaMenuPanel from './navigation/megamenu/MegaMenuPanel';
import MegaMenuMobile from './navigation/megamenu/MegaMenuMobile';
import {
  programsMenu,
  coursesMenu,
  mentorshipMenu,
  enterpriseMenu,
  resourcesMenu,
  aboutLinks,
  MegaMenuConfig,
} from './navigation/megamenu/MegaMenuData';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { user } = useAuth();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const megaMenus: { label: string; config: MegaMenuConfig }[] = [
    { label: 'Programs', config: programsMenu },
    { label: 'Courses', config: coursesMenu },
    { label: 'Mentorship', config: mentorshipMenu },
    { label: 'Enterprise', config: enterpriseMenu },
    { label: 'Resources', config: resourcesMenu },
  ];

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
    setActiveCategory(null);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveCategory(null);
    }, 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const closeMenu = useCallback(() => {
    setActiveMenu(null);
    setActiveCategory(null);
  }, []);

  const activeConfig = megaMenus.find((m) => m.label === activeMenu)?.config;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity" aria-label="WeKIT Home">
              <img
                src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png"
                alt="WeKIT"
                className="h-10 lg:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              to="/"
              className="px-4 py-2 text-sm font-semibold text-foreground hover:text-secondary transition-colors"
              onMouseEnter={closeMenu}
            >
              Home
            </Link>

            {/* Mega menu triggers */}
            {megaMenus.map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors ${
                  activeMenu === item.label
                    ? 'text-secondary'
                    : 'text-foreground hover:text-secondary'
                }`}
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                {item.label}
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
              </button>
            ))}

            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openMenu('About')}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors ${
                  activeMenu === 'About' ? 'text-secondary' : 'text-foreground hover:text-secondary'
                }`}
              >
                About
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === 'About' ? 'rotate-180' : ''}`} />
              </button>
              {activeMenu === 'About' && (
                <div
                  className="absolute top-full right-0 w-56 bg-background border border-border shadow-lg py-2 animate-fade-in"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMenu}
                      className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="text-foreground font-semibold">
                    Login
                  </Button>
                </Link>
                <Link to="/waitlist">
                  <Button size="sm" className="bg-primary text-primary-foreground font-semibold px-6">
                    Join WeKIT
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="p-2"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu Panel */}
      {activeConfig && activeMenu !== 'About' && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <MegaMenuPanel
            config={activeConfig}
            onClose={closeMenu}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      )}

      {/* Mobile Menu */}
      <MegaMenuMobile isOpen={mobileOpen} setIsOpen={setMobileOpen} />
    </nav>
  );
};

export default Navigation;
