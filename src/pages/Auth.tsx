
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, Linkedin, Github, Mail, Loader2, User as UserIcon, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const { signUp, signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    // Validate password strength for sign up
    if (isSignUp) {
      const passwordError = validatePassword(password);
      if (passwordError) {
        setError(passwordError);
        setLoading(false);
        return;
      }
    }

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          if (error.message.includes('User already registered')) {
            setError('An account with this email already exists. Try signing in instead.');
          } else {
            setError(error.message);
          }
        } else {
          setMessage('Check your email for a confirmation link!');
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError('Invalid email or password. Please try again.');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // --- Social login with security (Google/LinkedIn) ---
  const oauthProviders = [
    { id: 'google', label: "Continue with Google", icon: <LogIn size={18} className="mr-2 text-blue-600" /> },
    { id: 'linkedin_oidc', label: "Continue with LinkedIn", icon: <Linkedin size={18} className="mr-2 text-blue-700" /> },
    // Add more as needed.
  ];

  const socialLogin = async (provider: string) => {
    setError('');
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider as any,
        options: {
          redirectTo: `${window.location.origin}/`,
        }
      });
      if (error) {
        setError(error.message || 'Social login failed');
      } else {
        setMessage('Redirecting to ' + provider + '...');
      }
    } catch (e: any) {
      setError('Unexpected error occurred with ' + provider);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900">
            {isSignUp ? 'Create your account' : 'Sign in to your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isSignUp ? 'Join wekit.ai to get started' : 'Welcome back to wekit.ai'}
          </p>
        </div>

        <Card className="rounded-none border-gray-200 shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-medium">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </CardTitle>
            <CardDescription>
              {isSignUp 
                ? 'Enter your details to create an account'
                : 'Enter your credentials to access your account'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* --- Social auth section --- */}
            <div className="mb-4 flex flex-col gap-2 w-full">
              {oauthProviders.map(({ id, label, icon }) => (
                <Button
                  key={id}
                  variant="outline"
                  type="button"
                  disabled={loading}
                  onClick={() => socialLogin(id)}
                  className={`w-full border border-gray-200 hover:bg-gray-100 shadow-none font-medium ${id === 'google' ? 'text-blue-600' : id === 'linkedin_oidc' ? 'text-blue-700' : ''}`}
                >
                  {icon}
                  {label}
                </Button>
              ))}
            </div>
            <div className="my-3 flex items-center gap-2 opacity-60"><span className="flex-1 h-px bg-gray-200"></span><span className="text-sm">or</span><span className="flex-1 h-px bg-gray-200"></span></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required={isSignUp}
                    className="rounded-none"
                    placeholder="Enter your full name"
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-none"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-none"
                  placeholder="Enter your password"
                  minLength={8}
                  autoComplete={isSignUp ? "new-password" : "current-password"}
                />
                {isSignUp && (
                  <p className="mt-1 text-xs text-gray-500">
                    Password must be at least 8 characters with uppercase, lowercase, and number
                  </p>
                )}
              </div>

              {error && (
                <Alert variant="destructive" className="rounded-none flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 flex-none mt-1.5" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {message && (
                <Alert className="rounded-none border-green-200 bg-green-50 flex items-start gap-2">
                  <UserIcon className="w-4 h-4 flex-none mt-1.5 text-green-600" />
                  <AlertDescription className="text-green-800">{message}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-black hover:bg-gray-800 text-white rounded-none font-medium"
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                  setMessage('');
                }}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                disabled={loading}
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
