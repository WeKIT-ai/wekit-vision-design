import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Heart, Lightbulb, Rocket, Compass, GraduationCap, Briefcase } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const StartJourney = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPersona, setSelectedPersona] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    persona: '',
    challenge: '',
    dream: '',
    clarity_scale: '',
    support_type: '',
    has_mentor: '',
    communication_style: '',
    matching_preference: '',
    additional_info: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const personas = [
    { id: 'student', icon: GraduationCap, title: "I'm a student trying to figure out my career path", emoji: '🧑‍🎓' },
    { id: 'graduate', icon: GraduationCap, title: "I've just graduated and feel unsure about next steps", emoji: '🎓' },
    { id: 'professional', icon: Briefcase, title: "I'm a working professional looking for mentorship or upskilling", emoji: '👩‍💼' },
    { id: 'entrepreneur', icon: Rocket, title: "I'm launching a startup or passion project", emoji: '🚀' },
    { id: 'transition', icon: Compass, title: "I'm in transition, looking for clarity and purpose", emoji: '🧭' },
    { id: 'mentor', icon: Lightbulb, title: "I'm a mentor/leader wanting to give back", emoji: '💡' },
    { id: 'educator', icon: Heart, title: "I'm a parent or educator who wants to help others grow", emoji: '❤️' }
  ];

  const supportTypes = [
    'Mentorship',
    'Skill-building',
    'Career Roadmap',
    'Emotional Clarity',
    'Startup Guidance',
    'Other'
  ];

  const communicationStyles = [
    'Video',
    'Chat',
    'Events',
    'In-Person'
  ];

  const matchingPreferences = [
    'Match me with my next step',
    'Help me build my roadmap',
    "Let's talk purpose"
  ];

  const handlePersonaSelect = (personaId: string) => {
    setSelectedPersona(personaId);
    setFormData(prev => ({ ...prev, persona: personaId }));
    setCurrentStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Persona: ${formData.persona}\nChallenge: ${formData.challenge}\nDream: ${formData.dream}\nClarity Scale: ${formData.clarity_scale}\nSupport Type: ${formData.support_type}\nHas Mentor: ${formData.has_mentor}\nCommunication Style: ${formData.communication_style}\nMatching Preference: ${formData.matching_preference}\nAdditional Info: ${formData.additional_info}`,
          source_page: '/start-journey'
        });

      if (error) throw error;

      toast({
        title: "Welcome to We-KIT!",
        description: "Redirecting you to your personalized roadmap...",
      });
      
      // Redirect to roadmap with user's name
      setTimeout(() => {
        navigate('/roadmap', { 
          state: { 
            userName: formData.name.split(' ')[0] // Use first name
          } 
        });
      }, 1500);
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Step 1: Identity Quiz */}
        {currentStep === 1 && (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tell us where you are in life—we'll meet you there.
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              What best describes you right now? Choose one to start:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personas.map((persona) => {
                const IconComponent = persona.icon;
                return (
                  <Card 
                    key={persona.id}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-blue-300"
                    onClick={() => handlePersonaSelect(persona.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{persona.emoji}</div>
                      <IconComponent className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                      <p className="text-lg font-medium text-gray-800">{persona.title}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Basic Information */}
        {currentStep === 2 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Let's get to know you</CardTitle>
              <CardDescription className="text-center">
                First, we need some basic information to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="button" 
                  onClick={() => setCurrentStep(3)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!formData.name || !formData.phone || !formData.email}
                >
                  Continue to Discovery Questions
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Guided Discovery Form */}
        {currentStep === 3 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">We want to know you better</CardTitle>
              <CardDescription className="text-center">
                Help us understand your goals and how we can best support you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <Label htmlFor="challenge">What's a challenge you're facing right now? *</Label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="dream">What dream or goal do you secretly wish you could pursue? *</Label>
                  <Textarea
                    id="dream"
                    name="dream"
                    value={formData.dream}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="clarity_scale">On a scale of 1–10, how clear are you about your next step? *</Label>
                  <select
                    id="clarity_scale"
                    name="clarity_scale"
                    value={formData.clarity_scale}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select a number</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="support_type">What kind of support would help you most right now? *</Label>
                  <select
                    id="support_type"
                    name="support_type"
                    value={formData.support_type}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select support type</option>
                    {supportTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="has_mentor">Have you ever had a mentor before? *</Label>
                  <select
                    id="has_mentor"
                    name="has_mentor"
                    value={formData.has_mentor}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="communication_style">Preferred communication style: *</Label>
                  <select
                    id="communication_style"
                    name="communication_style"
                    value={formData.communication_style}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select style</option>
                    {communicationStyles.map((style) => (
                      <option key={style} value={style}>{style}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="matching_preference">What would you like us to do next? *</Label>
                  <select
                    id="matching_preference"
                    name="matching_preference"
                    value={formData.matching_preference}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select preference</option>
                    {matchingPreferences.map((pref) => (
                      <option key={pref} value={pref}>{pref}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="additional_info">Anything else you'd like us to know?</Label>
                  <Textarea
                    id="additional_info"
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleInputChange}
                    rows={3}
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Start My Journey'}
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Success */}
        {currentStep === 4 && (
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-8 pb-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to We-KIT!</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Thank you for starting your journey with us. We'll be in touch within 24 hours to begin matching you with the perfect mentor and resources.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">What's Next?</h3>
                  <ul className="text-left text-blue-800 space-y-2">
                    <li>• We'll review your responses and find the perfect mentor match</li>
                    <li>• You'll receive a welcome email with next steps</li>
                    <li>• Our team will schedule your first mentorship session</li>
                    <li>• You'll gain access to our exclusive community and resources</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="mt-6 bg-blue-600 hover:bg-blue-700"
                >
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Progress Indicator */}
        {currentStep < 4 && (
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full ${
                    step <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartJourney;
