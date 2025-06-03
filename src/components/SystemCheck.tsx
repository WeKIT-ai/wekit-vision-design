
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

const SystemCheck = () => {
  const [dbStatus, setDbStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [authStatus, setAuthStatus] = useState<'checking' | 'ready' | 'error'>('checking');

  useEffect(() => {
    console.log('SystemCheck component mounted - verifying system functionality');
    
    // Check database connection
    const checkDatabase = async () => {
      try {
        const { data, error } = await supabase.from('profiles').select('count').limit(1);
        if (error) {
          console.error('Database connection error:', error);
          setDbStatus('error');
        } else {
          console.log('Database connection successful');
          setDbStatus('connected');
        }
      } catch (err) {
        console.error('Database check failed:', err);
        setDbStatus('error');
      }
    };

    // Check auth system
    const checkAuth = async () => {
      try {
        const { data: session } = await supabase.auth.getSession();
        console.log('Auth system check:', session ? 'User logged in' : 'No active session');
        setAuthStatus('ready');
      } catch (err) {
        console.error('Auth check failed:', err);
        setAuthStatus('error');
      }
    };

    checkDatabase();
    checkAuth();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'checking':
        return <Loader className="w-5 h-5 animate-spin text-blue-500" />;
      case 'connected':
      case 'ready':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Loader className="w-5 h-5 animate-spin text-blue-500" />;
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">System Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Database Connection</span>
          {getStatusIcon(dbStatus)}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Authentication System</span>
          {getStatusIcon(authStatus)}
        </div>
        <div className="text-xs text-gray-500 mt-4">
          Check console for detailed logs
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemCheck;
