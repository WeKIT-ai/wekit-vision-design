
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from '../UserMenu';

const AuthSection = () => {
  const { user } = useAuth();

  if (user) {
    return <UserMenu />;
  }

  return (
    <div className="flex items-center space-x-3">
      <Link to="/auth">
        <Button 
          variant="ghost" 
          size="sm"
          className="text-foreground hover:bg-accent hover:text-accent-foreground font-medium px-4 py-2 rounded-md transition-all duration-200"
        >
          Sign In
        </Button>
      </Link>
      <Button 
        size="sm"
        className="bg-foreground hover:bg-foreground/90 text-background font-medium px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
      >
        Partner with WeKIT & NRECT
      </Button>
    </div>
  );
};

export default AuthSection;
