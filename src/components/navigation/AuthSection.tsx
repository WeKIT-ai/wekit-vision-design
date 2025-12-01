
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from '../UserMenu';
import { Calendar } from 'lucide-react';

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
      <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
        <Button 
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
        >
          <Calendar className="mr-2" size={16} />
          Book a Call
        </Button>
      </a>
    </div>
  );
};

export default AuthSection;
