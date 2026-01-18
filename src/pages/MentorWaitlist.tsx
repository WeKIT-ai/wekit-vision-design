import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const MentorWaitlist = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    industry: '',
    experience_years: '',
    specialties: '',
    availability: '',
    mentoring_philosophy: '',
    preferred_meeting_format: '',
    time_commitment: '',
    motivation: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Marketing',
    'Engineering', 'Design', 'Consulting', 'Non-profit', 'Government',
    'Real Estate', 'Media', 'Retail', 'Manufacturing', 'Other'
  ];

  const meetingFormats = [
    'Video calls', 'Phone calls', 'In-person meetings', 
    'Chat/messaging', 'Email correspondence', 'Group sessions'
  ];

  const timeCommitments = [
    '1-2 hours per month', '3-5 hours per month', '6-10 hours per month',
    '11+ hours per month', 'Flexible based on need'
  ];

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
        .from('mentor_waitlist')
        .insert({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          position: formData.position,
          industry: formData.industry,
          experience_years: formData.experience_years ? parseInt(formData.experience_years) : null,
          specialties: formData.specialties.split(',').map(s => s.trim()).filter(s => s),
          availability: formData.availability,
          mentoring_philosophy: formData.mentoring_philosophy,
          preferred_meeting_format: formData.preferred_meeting_format,
          time_commitment: formData.time_commitment,
          motivation: formData.motivation
        });

      if (error) throw error;

      toast({
        title: "Thank you for joining!",
        description: "We'll be in touch soon about mentor opportunities.",
      });
      
      setCurrentStep(3); // Success step
      
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
          alt="Mentor Background"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[5000ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/50 animate-fade-in"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-[float_3s_ease-in-out_infinite] opacity-60 z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-[float_4s_ease-in-out_infinite_1s] opacity-50 z-10"></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-yellow-400 rounded-full animate-[float_5s_ease-in-out_infinite_2s] opacity-40 z-10"></div>

      <div className="relative z-20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Step 1: Introduction */}
          {currentStep === 1 && (
            <div className="text-center mb-12 animate-[slideUp_1.2s_ease-out]">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl hover:scale-105 transition-transform duration-300 mb-6">
                  Join Our Mentor Community
                </h1>
                <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg font-medium mb-8">
                  Share your experience, guide the next generation, and make a lasting impact
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Users className="w-8 h-8 mb-3 mx-auto text-blue-400" />
                    <h3 className="font-bold mb-2">Guide Future Leaders</h3>
                    <p className="text-sm">Help young professionals navigate their career paths</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Lightbulb className="w-8 h-8 mb-3 mx-auto text-yellow-400" />
                    <h3 className="font-bold mb-2">Share Your Wisdom</h3>
                    <p className="text-sm">Turn your experience into valuable guidance for others</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Heart className="w-8 h-8 mb-3 mx-auto text-red-400" />
                    <h3 className="font-bold mb-2">Give Back</h3>
                    <p className="text-sm">Make a meaningful difference in someone's life and career</p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => setCurrentStep(2)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-full border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 group animate-pulse hover:animate-none"
                >
                  Start My Mentor Application
                  <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:animate-bounce" size={20} />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Application Form */}
          {currentStep === 2 && (
            <div className="animate-[slideUp_1.2s_ease-out]">
              <Card className="mb-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Tell Us About Yourself
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Help us understand your background and mentoring goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="first_name" className="text-lg font-medium text-gray-800">First Name *</Label>
                        <Input
                          id="first_name"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                          placeholder="Enter your first name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="last_name" className="text-lg font-medium text-gray-800">Last Name *</Label>
                        <Input
                          id="last_name"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
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
                      
                      <div>
                        <Label htmlFor="phone" className="text-lg font-medium text-gray-800">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2 h-12 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-lg font-medium text-gray-800">Company/Organization *</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                          placeholder="Enter your company name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="position" className="text-lg font-medium text-gray-800">Position/Title *</Label>
                        <Input
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                          placeholder="Enter your job title"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="industry" className="text-lg font-medium text-gray-800">Industry *</Label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          required
                          className="mt-2 w-full h-12 p-3 text-lg border-2 border-gray-300 rounded-md focus:border-blue-500 transition-colors duration-300"
                        >
                          <option value="">Select your industry</option>
                          {industries.map(industry => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="experience_years" className="text-lg font-medium text-gray-800">Years of Experience *</Label>
                        <Input
                          id="experience_years"
                          name="experience_years"
                          type="number"
                          min="1"
                          value={formData.experience_years}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                          placeholder="Years of experience"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="specialties" className="text-lg font-medium text-gray-800">Areas of Expertise *</Label>
                      <Textarea
                        id="specialties"
                        name="specialties"
                        value={formData.specialties}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="mt-2 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="List your key skills and expertise areas (separated by commas)"
                      />
                    </div>

                    {/* Mentoring Preferences */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="preferred_meeting_format" className="text-lg font-medium text-gray-800">Preferred Meeting Format</Label>
                        <select
                          id="preferred_meeting_format"
                          name="preferred_meeting_format"
                          value={formData.preferred_meeting_format}
                          onChange={handleInputChange}
                          className="mt-2 w-full h-12 p-3 text-lg border-2 border-gray-300 rounded-md focus:border-blue-500 transition-colors duration-300"
                        >
                          <option value="">Select format</option>
                          {meetingFormats.map(format => (
                            <option key={format} value={format}>{format}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="time_commitment" className="text-lg font-medium text-gray-800">Time Commitment</Label>
                        <select
                          id="time_commitment"
                          name="time_commitment"
                          value={formData.time_commitment}
                          onChange={handleInputChange}
                          className="mt-2 w-full h-12 p-3 text-lg border-2 border-gray-300 rounded-md focus:border-blue-500 transition-colors duration-300"
                        >
                          <option value="">Select time commitment</option>
                          {timeCommitments.map(commitment => (
                            <option key={commitment} value={commitment}>{commitment}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="availability" className="text-lg font-medium text-gray-800">Availability</Label>
                      <Textarea
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        rows={3}
                        className="mt-2 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="Describe your availability (days, times, timezone)"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mentoring_philosophy" className="text-lg font-medium text-gray-800">Mentoring Philosophy *</Label>
                      <Textarea
                        id="mentoring_philosophy"
                        name="mentoring_philosophy"
                        value={formData.mentoring_philosophy}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-2 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="What's your approach to mentoring? How do you like to help others grow?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="motivation" className="text-lg font-medium text-gray-800">Why do you want to become a mentor? *</Label>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-2 text-lg border-2 focus:border-blue-500 transition-colors duration-300"
                        placeholder="Share your motivation for wanting to mentor others"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isLoading || !formData.first_name || !formData.last_name || !formData.email || !formData.company || !formData.position || !formData.industry || !formData.experience_years || !formData.specialties || !formData.mentoring_philosophy || !formData.motivation}
                      className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
                    >
                      {isLoading ? "Submitting..." : "Submit My Application"}
                      {!isLoading && <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:animate-bounce" size={20} />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Success Message */}
          {currentStep === 3 && (
            <div className="text-center animate-[slideUp_1.2s_ease-out]">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-2xl mb-6">
                  Thank You!
                </h1>
                <p className="text-xl text-white/90 drop-shadow-lg font-medium mb-8">
                  Your mentor application has been submitted successfully. Our team will review your application and reach out to you soon with next steps.
                </p>
                
                <Button 
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-full border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  Return to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorWaitlist;