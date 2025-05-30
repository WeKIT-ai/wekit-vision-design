
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

const UserMenu = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <User size={16} />
        <span>{user.email}</span>
      </div>
      <Button
        onClick={handleSignOut}
        variant="outline"
        size="sm"
        className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none font-medium"
      >
        <LogOut size={16} className="mr-2" />
        Sign Out
      </Button>
    </div>
  );
};

export default UserMenu;
