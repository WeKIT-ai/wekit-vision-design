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
      // Store PII in dedicated contact_submissions table
      const { error: contactError } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          company: null,
          message: `Journey Signup - Persona: ${formData.persona}, Challenge: ${formData.challenge}, Dream: ${formData.dream}, Clarity: ${formData.clarity_scale}/10, Support: ${formData.support_type}, Has Mentor: ${formData.has_mentor}, Communication: ${formData.communication_style}, Matching: ${formData.matching_preference}${formData.additional_info ? ', Additional: ' + formData.additional_info : ''}`
        });

      if (contactError) throw contactError;

      // Log non-PII analytics only
      const { error } = await supabase
        .from('page_interactions')
        .insert({
          page_name: '/start-journey',
          interaction_type: 'journey_signup',
          metadata: {
            persona: formData.persona,
            clarity_scale: formData.clarity_scale,
            support_type: formData.support_type,
            has_mentor: formData.has_mentor,
            source: 'start_journey_form'
          }
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png"
          alt="Journey Background"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[5000ms] ease-out"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/50 animate-fade-in"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-[float_3s_ease-in-out_infinite] opacity-60 z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-[float_4s_ease-in-out_infinite_1s] opacity-50 z-10"></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-yellow-400 rounded-full animate-[float_5s_ease-in-out_infinite_2s] opacity-40 z-10"></div>
      <div className="absolute top-20 right-10 w-6 h-6 bg-blue-300 rounded-full animate-[float_4s_ease-in-out_infinite] opacity-30 z-10"></div>
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-purple-300 rounded-full animate-[float_5s_ease-in-out_infinite_1s] opacity-40 z-10"></div>

      {/* Floating Video Element - Small decorative video */}
      <div className="absolute top-20 left-10 hidden lg:block z-10 animate-[slideLeft_1.5s_ease-out]">
        <div className="relative group">
          <div className="w-48 h-32 bg-black rounded-xl overflow-hidden shadow-2xl hover:scale-110 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 hover:shadow-blue-500/25">
            <img
              src="/lovable-uploads/f9e02f74-cebe-4891-a8e2-d36b5e83b5a7.png"
              alt="Inspiration"
              className="w-full h-full object-cover opacity-80"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Floating Animation Element - Right Side */}
      <div className="absolute top-32 right-10 hidden lg:block z-10 animate-[slideRight_1.5s_ease-out]">
        <div className="relative group cursor-pointer">
          <div className="w-32 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl hover:scale-125 hover:-translate-y-3 hover:rotate-3 transition-all duration-500 hover:shadow-green-500/50">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce hover:animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100 hover:animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200 hover:animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Step 1: Identity Quiz */}
          {currentStep === 1 && (
            <div className="text-center mb-12 animate-[slideUp_1.2s_ease-out]">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl hover:scale-105 transition-transform duration-300 mb-6">
                  Tell us where you are in life—
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-[slideLeft_1.5s_ease-out] hover:from-purple-400 hover:to-blue-400 transition-all duration-500">
                    we'll meet you there.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg animate-[slideRight_1.8s_ease-out] hover:text-white transition-colors duration-300 font-medium">
                  What best describes you right now? Choose one to start:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-[zoomIn_1.5s_ease-out]">
                {personas.map((persona, index) => {
                  const IconComponent = persona.icon;
                  return (
                    <div
                      key={persona.id}
                      className={`animate-[slideUp_1s_ease-out_${index * 0.1}s_both]`}
                    >
                      <Card 
                        className="cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-2 hover:border-blue-400 bg-white/95 backdrop-blur-sm group"
                        onClick={() => handlePersonaSelect(persona.id)}
                      >
                        <CardContent className="p-8 text-center">
                          <div className="text-5xl mb-4 group-hover:animate-bounce">{persona.emoji}</div>
                          <IconComponent className="w-10 h-10 mx-auto mb-4 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                          <p className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{persona.title}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Basic Information */}
          {currentStep === 2 && (
            <div className="animate-[slideUp_1.2s_ease-out]">
              <Card className="mb-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Let's get to know you
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    First, we need some basic information to get started
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-8">
                    <div className="animate-[slideLeft_0.8s_ease-out]">
                      <Label htmlFor="name" className="text-lg font-medium text-gray-800">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="animate-[slideRight_0.8s_ease-out_0.2s_both]">
                      <Label htmlFor="phone" className="text-lg font-medium text-gray-800">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="animate-[slideLeft_0.8s_ease-out_0.4s_both]">
                      <Label htmlFor="email" className="text-lg font-medium text-gray-800">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <Button 
                      type="button" 
                      onClick={() => setCurrentStep(3)}
                      className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group animate-pulse hover:animate-none"
                      disabled={!formData.name || !formData.phone || !formData.email}
                    >
                      Continue to Discovery Questions
                      <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:animate-bounce" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Guided Discovery Form */}
          {currentStep === 3 && (
            <div className="animate-[slideUp_1.2s_ease-out]">
              <Card className="mb-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    We want to know you better
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Help us understand your goals and how we can best support you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    <div className="animate-[slideLeft_0.8s_ease-out]">
                      <Label htmlFor="challenge" className="text-lg font-medium text-gray-800">What's a challenge you're facing right now? *</Label>
                      <Textarea
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-2 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="Tell us about a specific challenge you're dealing with..."
                      />
                    </div>
                    
                    <div className="animate-[slideRight_0.8s_ease-out_0.2s_both]">
                      <Label htmlFor="dream" className="text-lg font-medium text-gray-800">What dream or goal do you secretly wish you could pursue? *</Label>
                      <Textarea
                        id="dream"
                        name="dream"
                        value={formData.dream}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-2 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="Share your aspirations and dreams with us..."
                      />
                    </div>
                    
                    <div className="animate-[slideLeft_0.8s_ease-out_0.4s_both]">
                      <Label htmlFor="clarity_scale" className="text-lg font-medium text-gray-800">On a scale of 1–10, how clear are you about your next step? *</Label>
                      <select
                        id="clarity_scale"
                        name="clarity_scale"
                        value={formData.clarity_scale}
                        onChange={handleInputChange}
                        required
                        className="mt-2 w-full h-12 p-3 text-lg border-2 border-gray-300 rounded-md focus:border-blue-500 transition-colors duration-300"
                      >
                        <option value="">Select a number</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} - {i === 0 ? 'Completely lost' : i === 9 ? 'Crystal clear' : ''}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="animate-[slideRight_0.8s_ease-out_0.6s_both]">
                      <Label htmlFor="support_type" className="text-lg font-medium text-gray-800">What kind of support would help you most right now? *</Label>
                      <select
                        id="support_type"
                        name="support_type"
                        value={formData.support_type}
                        onChange={handleInputChange}
                        required
                        className="mt-2 w-full h-12 p-3 text-lg border-2 border-gray-300 rounded-md focus:border-blue-500 transition-colors duration-300"
                      >
                        <option value="">Select support type</option>
                        {supportTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="animate-[slideLeft_0.8s_ease-out_0.8s_both]">
                      <Label htmlFor="has_mentor" className="text-lg font-medium text-gray-800">Have you ever had a mentor before? *</Label>
                      <select
                        id="has_mentor"
                        name="has_mentor"
                        value={formData.has_mentor}
                        onChange={handleInputChange}
                        required
                        className="mt-2 w-full h-12 p-3 text-lg border-2 border-gray-300 rounded-md focus:border-blue-500 transition-colors duration-300"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes, I've had a mentor</option>
                        <option value="no">No, this would be my first time</option>
                      </select>
                    </div>
                    
                    <div className="animate-[slideRight_0.8s_ease-out_1s_both]">
                      <Label htmlFor="communication_style" className="text-lg font-medium text-gray-800">Preferred communication style: *</Label>
                      <select
                        id="communication_style"
                        name="communication_style"
                        value={formData.communication_style}
                        onChange={handleInputChange}
                        required
                        className="mt-2 w-full h-12 p-3 text-lg border-2 border-gray-300 rounded-md focus:border-blue-500 transition-colors duration-300"
                      >
                        <option value="">Select style</option>
                        {communicationStyles.map((style) => (
                          <option key={style} value={style}>{style}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="animate-[slideLeft_0.8s_ease-out_1.2s_both]">
                      <Label htmlFor="matching_preference" className="text-lg font-medium text-gray-800">What would you like us to do next? *</Label>
                      <select
                        id="matching_preference"
                        name="matching_preference"
                        value={formData.matching_preference}
                        onChange={handleInputChange}
                        required
                        className="mt-2 w-full h-12 p-3 text-lg border-2 border-gray-300 rounded-md focus:border-blue-500 transition-colors duration-300"
                      >
                        <option value="">Select preference</option>
                        {matchingPreferences.map((pref) => (
                          <option key={pref} value={pref}>{pref}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="animate-[slideRight_0.8s_ease-out_1.4s_both]">
                      <Label htmlFor="additional_info" className="text-lg font-medium text-gray-800">Anything else you'd like us to know?</Label>
                      <Textarea
                        id="additional_info"
                        name="additional_info"
                        value={formData.additional_info}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-2 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="Share any additional thoughts, questions, or specific areas you'd like to focus on..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-16 text-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group animate-pulse hover:animate-none"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Start My Journey'}
                      <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:animate-bounce" size={24} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Success */}
          {currentStep === 4 && (
            <div className="text-center animate-[zoomIn_1.5s_ease-out]">
              <Card className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardContent className="pt-12 pb-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8 animate-bounce" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    Welcome to WeKIT!
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                    Thank you for starting your journey with us. We'll be in touch within 24 hours to begin matching you with the perfect mentor and resources.
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-inner mb-8">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      What's Next?
                    </h3>
                    <ul className="text-left text-gray-700 space-y-3 max-w-2xl mx-auto">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 text-xl">✓</span>
                        <span className="text-lg">We'll review your responses and find the perfect mentor match</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 text-xl">✓</span>
                        <span className="text-lg">You'll receive a welcome email with next steps</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 text-xl">✓</span>
                        <span className="text-lg">Our team will schedule your first mentorship session</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 text-xl">✓</span>
                        <span className="text-lg">You'll gain access to our exclusive community and resources</span>
                      </li>
                    </ul>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="h-14 px-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
                  >
                    Return to Home
                    <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2" size={20} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Progress Indicator */}
          {currentStep < 4 && (
            <div className="mt-16 flex justify-center animate-[slideUp_1.5s_ease-out]">
              <div className="flex space-x-4 bg-white/20 backdrop-blur-sm rounded-full p-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      step <= currentStep 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
