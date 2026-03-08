import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { allMenus, aboutLinks } from './MegaMenuData';
import UserMenu from '../../UserMenu';
import { motion, AnimatePresence } from 'framer-motion';

interface MegaMenuMobileProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MegaMenuMobile = ({ isOpen, setIsOpen }: MegaMenuMobileProps) => {
  const { user } = useAuth();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggle = (label: string) => {
    setExpanded(expanded === label ? null : label);
    setExpandedSub(null);
  };

  const toggleSub = (label: string) => {
    setExpandedSub(expandedSub === label ? null : label);
  };

  const close = () => setIsOpen(false);

  return (
    <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl overflow-y-auto">
      <div className="px-4 py-6 space-y-1">
        {/* Home */}
        <Link
          to="/"
          onClick={close}
          className="block px-4 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors rounded-sm"
        >
          Home
        </Link>

        {/* Expandable sections */}
        {allMenus.map((menu) => {
          const hasCategories = menu.categories && menu.categories.length > 0;
          return (
            <div key={menu.label}>
              <button
                onClick={() => toggle(menu.label)}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors rounded-sm"
              >
                <span>{menu.label}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${expanded === menu.label ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {expanded === menu.label && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-2 pb-2">
                      {hasCategories ? (
                        // Nested accordion for audience categories
                        menu.groups.map((group) => (
                          <div key={group.title}>
                            <button
                              onClick={() => toggleSub(group.title)}
                              className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-muted/50 transition-colors rounded-sm"
                            >
                              <span>{group.title}</span>
                              <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${expandedSub === group.title ? 'rotate-180' : ''}`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedSub === group.title && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 pb-1">
                                    {group.links.map((link) => (
                                      <Link
                                        key={link.label}
                                        to={link.path}
                                        onClick={close}
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-sm"
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))
                      ) : (
                        // Flat list for menus without categories
                        menu.groups.map((group) => (
                          <div key={group.title} className="mb-3">
                            <p className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                              {group.title}
                            </p>
                            {group.links.map((link) => (
                              <Link
                                key={link.label}
                                to={link.path}
                                onClick={close}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-sm"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* About */}
        <div>
          <button
            onClick={() => toggle('About')}
            className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors rounded-sm"
          >
            <span>About</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${expanded === 'About' ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence>
            {expanded === 'About' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pl-4 pb-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={close}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
