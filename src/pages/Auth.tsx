import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, Linkedin, Mail, Loader2, User as UserIcon, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';

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
    if (password.length < 8) return 'Password must be at least 8 characters long';
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return 'Must contain uppercase, lowercase, and number';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    if (isSignUp) {
      const passwordError = validatePassword(password);
      if (passwordError) { setError(passwordError); setLoading(false); return; }
    }
    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, fullName);
        if (error) { setError(error.message.includes('User already registered') ? 'Account exists. Try signing in.' : error.message); }
        else { setMessage('Check your email for a confirmation link!'); }
      } else {
        const { error } = await signIn(email, password);
        if (error) setError('Invalid email or password.');
      }
    } catch { setError('An unexpected error occurred.'); }
    finally { setLoading(false); }
  };

  const oauthProviders = [
    { id: 'google', label: "Continue with Google", icon: <LogIn size={18} className="mr-2 text-accent" /> },
    { id: 'linkedin_oidc', label: "Continue with LinkedIn", icon: <Linkedin size={18} className="mr-2 text-secondary" /> },
  ];

  const socialLogin = async (provider: string) => {
    setError(''); setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: provider as any, options: { redirectTo: `${window.location.origin}/` } });
      if (error) setError(error.message);
    } catch { setError('Unexpected error with ' + provider); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-montserrat text-foreground">
            {isSignUp ? 'Create your account' : 'Sign in to your account'}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {isSignUp ? 'Join WeKIT to get started' : 'Welcome back to WeKIT'}
          </p>
        </div>

        <Card className="glass-strong rounded-2xl border-white/10">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-foreground">{isSignUp ? 'Sign Up' : 'Sign In'}</CardTitle>
            <CardDescription className="text-muted-foreground">{isSignUp ? 'Enter your details to create an account' : 'Enter your credentials'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col gap-2 w-full">
              {oauthProviders.map(({ id, label, icon }) => (
                <Button key={id} variant="glass" type="button" disabled={loading} onClick={() => socialLogin(id)} className="w-full justify-center">
                  {icon}{label}
                </Button>
              ))}
            </div>
            <div className="my-3 flex items-center gap-2 opacity-40"><span className="flex-1 h-px bg-white/20" /><span className="text-sm text-muted-foreground">or</span><span className="flex-1 h-px bg-white/20" /></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div><Label htmlFor="fullName" className="text-foreground">Full Name</Label><Input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required={isSignUp} className="bg-white/5 border-white/10 rounded-xl mt-1" placeholder="Enter your full name" /></div>
              )}
              <div><Label htmlFor="email" className="text-foreground">Email</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-white/5 border-white/10 rounded-xl mt-1" placeholder="Enter your email" /></div>
              <div>
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="bg-white/5 border-white/10 rounded-xl mt-1" placeholder="Enter your password" minLength={8} autoComplete={isSignUp ? "new-password" : "current-password"} />
                {isSignUp && <p className="mt-1 text-xs text-muted-foreground">Min 8 chars with uppercase, lowercase, and number</p>}
              </div>

              {error && <Alert variant="destructive" className="rounded-xl"><AlertCircle className="w-4 h-4 flex-none" /><AlertDescription>{error}</AlertDescription></Alert>}
              {message && <Alert className="rounded-xl border-secondary/30 bg-secondary/10"><UserIcon className="w-4 h-4 flex-none text-secondary" /><AlertDescription className="text-secondary">{message}</AlertDescription></Alert>}

              <Button type="submit" disabled={loading} className="w-full" variant="accent" size="lg">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button type="button" onClick={() => { setIsSignUp(!isSignUp); setError(''); setMessage(''); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors" disabled={loading}>
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Auth;
