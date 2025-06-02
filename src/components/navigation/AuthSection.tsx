
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
    <div className="flex items-center space-x-4">
      <Link to="/auth">
        <Button variant="ghost" className="text-gray-900 hover:bg-gray-100 rounded-none font-medium">
          Sign In
        </Button>
      </Link>
      <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none border-0 shadow-none hover:shadow-none font-medium">
        Partner with Us
      </Button>
    </div>
  );
};

export default AuthSection;
