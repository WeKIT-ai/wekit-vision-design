import { useState, useRef, useCallback, useEffect } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll-aware header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
  const hasOpenPanel = activeConfig && activeMenu !== 'About';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || hasOpenPanel || activeMenu === 'About'
          ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-background/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300" aria-label="WeKIT Home">
              <img
                src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png"
                alt="WeKIT"
                className="h-9 lg:h-11 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {/* Home */}
            <Link
              to="/"
              className="px-3.5 py-2 text-[13px] font-semibold text-foreground/80 hover:text-foreground transition-colors duration-200"
              onMouseEnter={closeMenu}
            >
              Home
            </Link>

            {/* Mega menu triggers */}
            {megaMenus.map((item) => (
              <button
                key={item.label}
                className={`group flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  activeMenu === item.label
                    ? 'text-foreground'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                {item.label}
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`}
                />
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                    activeMenu === item.label ? 'w-6 opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </button>
            ))}

            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openMenu('About')}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`group flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  activeMenu === 'About' ? 'text-foreground' : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                About
                <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === 'About' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeMenu === 'About' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 w-56 bg-background/95 backdrop-blur-xl border border-border shadow-lg py-2 rounded-lg mt-1"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={closeMenu}
                        className="group block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-2.5">
            {user ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground font-semibold text-[13px] h-9">
                    Login
                  </Button>
                </Link>
                <a href="https://wekit.ai/" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-primary text-primary-foreground font-semibold px-5 text-[13px] h-9 rounded-md hover:bg-primary/90 transition-colors duration-200">
                    Join WeKIT
                  </Button>
                </a>
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
      <AnimatePresence>
        {hasOpenPanel && (
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
      </AnimatePresence>

      {/* Mobile Menu */}
      <MegaMenuMobile isOpen={mobileOpen} setIsOpen={setMobileOpen} />
    </nav>
  );
};

export default Navigation;
