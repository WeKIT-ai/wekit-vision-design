
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
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-accent/30 px-3 py-1.5 rounded-md">
        <User size={14} />
        <span className="font-medium">{user.email}</span>
      </div>
      <Button
        onClick={handleSignOut}
        variant="outline"
        size="sm"
        className="border-border text-foreground hover:bg-accent hover:text-accent-foreground font-medium px-3 py-1.5 rounded-md transition-all duration-200"
      >
        <LogOut size={14} className="mr-2" />
        Sign Out
      </Button>
    </div>
  );
};

export default UserMenu;
