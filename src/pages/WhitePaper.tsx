
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Download, FileText, Users, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WhitePaperFormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
}

const WhitePaper = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<WhitePaperFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      organization: ''
    }
  });

  const onSubmit = async (data: WhitePaperFormData) => {
    setIsSubmitting(true);
    console.log('White paper form submitted:', data);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your white paper download will begin shortly. Check your email for additional resources.",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <FileText className="mx-auto h-16 w-16 text-blue-600 mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future of 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI-Driven Mentorship</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive white paper exploring how artificial intelligence is transforming 
              youth mentorship and career guidance in the digital age.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <p className="text-gray-600">Improvement in Career Clarity</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <p className="text-gray-600">Students Mentored</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* White Paper Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Inside</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Market Analysis</h3>
                    <p className="text-gray-600">Comprehensive analysis of the global youth mentorship market and emerging trends.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Case Studies</h3>
                    <p className="text-gray-600">Real-world examples of successful AI-driven mentorship implementations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Implementation Guide</h3>
                    <p className="text-gray-600">Step-by-step guide for institutions looking to implement AI mentorship programs.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">42 Pages of Insights</h4>
                <p className="text-blue-800">Including exclusive data, research findings, and future predictions for the industry.</p>
              </div>
            </div>

            {/* Download Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download White Paper</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below to get instant access to our research findings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        rules={{ required: "First name is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        rules={{ required: "Last name is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="organization"
                      rules={{ required: "Organization is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Your School/Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Download Now</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Research Papers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Access our collection of peer-reviewed research on AI in education.</p>
                <Button variant="outline" className="w-full">Browse Papers</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Case Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Detailed analysis of successful mentorship program implementations.</p>
                <Button variant="outline" className="w-full">View Studies</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Implementation Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Practical guide for educators and administrators.</p>
                <Button variant="outline" className="w-full">Get Guide</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePaper;
