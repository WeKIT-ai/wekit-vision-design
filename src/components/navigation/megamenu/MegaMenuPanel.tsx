import { Link } from 'react-router-dom';
import { MegaMenuConfig } from './MegaMenuData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Compass, Wallet, Search, Bot, Users, Backpack, Rocket, Crown, GraduationCap, Zap, Navigation, Briefcase, Star, Home, Shield, UserPlus, Award, BookOpen, Globe, Mountain, TrendingUp, BarChart3, Sparkles, Target, Code, FileText, Handshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const iconMap: Record<string, typeof Heart> = {
  Heart, Compass, Wallet, Search, Bot, Users, Backpack, Rocket, Crown, GraduationCap, Zap, Navigation, Briefcase, Star, Home, Shield, UserPlus, Award, BookOpen, Globe, Mountain, TrendingUp, BarChart3, Sparkles, Target, Code, FileText, Handshake,
};

interface MegaMenuPanelProps {
  config: MegaMenuConfig;
  onClose: () => void;
  activeCategory: string | null;
  setActiveCategory: (cat: string | null) => void;
}

const MegaMenuPanel = ({ config, onClose, activeCategory, setActiveCategory }: MegaMenuPanelProps) => {
  const categories = config.categories || config.groups.map(g => g.title);
  const currentCategory = activeCategory || categories[0];
  const activeGroup = config.groups.find(g => g.title === currentCategory);

  // Get audience-specific featured or fallback to default
  const featured = config.featuredByCategory?.[currentCategory] || config.featured;

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Column 1 — Audience */}
          <div className="col-span-3 border-r border-border pr-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Audience</p>
            <nav className="space-y-0.5">
              {categories.map((cat) => {
                const isEdTech = cat === 'EdTech Platforms';
                return (
                  <button
                    key={cat}
                    onMouseEnter={() => setActiveCategory(cat)}
                    onClick={() => setActiveCategory(cat)}
                    className={`group flex items-center justify-between w-full text-left px-3 py-2.5 text-sm font-medium rounded-sm transition-all duration-200 ${
                      currentCategory === cat
                        ? 'bg-primary/10 text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {cat}
                      {isEdTech && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-1.5 py-0.5 rounded">Soon</span>
                      )}
                    </span>
                    <ArrowRight
                      size={12}
                      className={`transition-all duration-200 ${
                        currentCategory === cat ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Column 2 — Programs */}
          <div className="col-span-5">
            <AnimatePresence mode="wait">
              {activeGroup && (
                <motion.div
                  key={activeGroup.title}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Programs</p>
                  <nav className="space-y-0.5">
                    {activeGroup.links.map((link) => {
                      const IconComp = link.icon ? iconMap[link.icon] : null;
                      return (
                        <Link
                          key={link.label}
                          to={link.path}
                          onClick={onClose}
                          className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-sm transition-all duration-200"
                        >
                          {IconComp && (
                            <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-md bg-muted group-hover:bg-primary/10 transition-colors duration-200">
                              <IconComp size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                            </span>
                          )}
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowRight size={12} className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </Link>
                      );
                    })}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Column 3 — Featured */}
          <div className="col-span-4 pl-6 border-l border-border">
            <AnimatePresence mode="wait">
              {featured ? (
                <motion.div
                  key={featured.subtitle}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-lg bg-muted cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Video or gradient background */}
                  {featured.videoUrl ? (
                    <div className="absolute inset-0">
                      <video
                        ref={videoRef}
                        src={featured.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
                  )}

                  <div className="relative p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">{featured.title}</p>
                    <h4 className="text-lg font-bold text-foreground mb-2 font-montserrat leading-tight">{featured.subtitle}</h4>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">{featured.description}</p>
                    <Link to={featured.buttonPath} onClick={onClose}>
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 group/btn">
                        {featured.buttonLabel}
                        <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-primary/20" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-muted p-6 rounded-lg"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Explore</p>
                  <h4 className="text-lg font-bold text-foreground mb-2 font-montserrat">{config.label}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Discover our comprehensive {config.label.toLowerCase()} designed to build future-ready skills and leadership.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenuPanel;
