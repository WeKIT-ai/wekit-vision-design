import { Link } from 'react-router-dom';
import { MegaMenuConfig } from './MegaMenuData';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

  return (
    <div className="w-full bg-background border-b border-border shadow-lg animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Column 1 — Categories */}
          <div className="col-span-3 border-r border-border pr-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Categories</p>
            <nav className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => setActiveCategory(cat)}
                  className={`block w-full text-left px-3 py-2.5 text-sm font-medium transition-colors ${
                    currentCategory === cat
                      ? 'bg-muted text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 2 — Links */}
          <div className="col-span-5">
            {activeGroup && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{activeGroup.title}</p>
                <nav className="space-y-1">
                  {activeGroup.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={onClose}
                      className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors group"
                    >
                      <span className="flex items-center gap-2">
                        {link.label}
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Column 3 — Featured */}
          <div className="col-span-4 pl-6 border-l border-border">
            {config.featured ? (
              <div className="bg-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{config.featured.title}</p>
                <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">{config.featured.subtitle}</h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{config.featured.description}</p>
                <Link to={config.featured.buttonPath} onClick={onClose}>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {config.featured.buttonLabel}
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="bg-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Explore</p>
                <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">{config.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Discover our comprehensive {config.label.toLowerCase()} designed to build future-ready skills and leadership.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuPanel;
