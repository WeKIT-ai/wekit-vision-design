import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Download, FileText, Users, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

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
    defaultValues: { firstName: '', lastName: '', email: '', organization: '' }
  });

  const onSubmit = async (data: WhitePaperFormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Success!", description: "Your white paper download will begin shortly." });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-28 px-6 md:px-8 section-darker">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground mb-6 leading-[1.05] tracking-tight">
              The Future of
              <span className="text-gradient"> AI-Driven Mentorship</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Download our comprehensive white paper exploring how artificial intelligence is transforming youth mentorship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { value: '85%', label: 'Improvement in Career Clarity', color: 'text-secondary' },
              { value: '10,000+', label: 'Students Mentored', color: 'text-accent' },
              { value: '95%', label: 'Success Rate', color: 'text-secondary' },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
              <h2 className="text-3xl font-bold font-montserrat text-foreground mb-6">What's Inside</h2>
              {[
                { icon: TrendingUp, title: 'Market Analysis', desc: 'Comprehensive analysis of the global youth mentorship market.', color: 'text-secondary' },
                { icon: Users, title: 'Case Studies', desc: 'Real-world examples of successful AI-driven mentorship.', color: 'text-accent' },
                { icon: FileText, title: 'Implementation Guide', desc: 'Step-by-step guide for institutions.', color: 'text-secondary' },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <item.icon className={`h-6 w-6 ${item.color} mt-1`} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="glass rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-2">42 Pages of Insights</h4>
                <p className="text-muted-foreground">Including exclusive data, research findings, and future predictions.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <Card className="glass-strong rounded-2xl border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-foreground">
                    <Download className="h-5 w-5 text-accent" />
                    <span>Download White Paper</span>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">Fill out the form below to get instant access.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField control={form.control} name="firstName" rules={{ required: "Required" }} render={({ field }) => (
                          <FormItem><FormLabel className="text-foreground">First Name</FormLabel><FormControl><Input placeholder="John" {...field} className="bg-white/5 border-white/10 rounded-xl" /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="lastName" rules={{ required: "Required" }} render={({ field }) => (
                          <FormItem><FormLabel className="text-foreground">Last Name</FormLabel><FormControl><Input placeholder="Doe" {...field} className="bg-white/5 border-white/10 rounded-xl" /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="email" rules={{ required: "Required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" } }} render={({ field }) => (
                        <FormItem><FormLabel className="text-foreground">Email</FormLabel><FormControl><Input type="email" placeholder="john@example.com" {...field} className="bg-white/5 border-white/10 rounded-xl" /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="organization" rules={{ required: "Required" }} render={({ field }) => (
                        <FormItem><FormLabel className="text-foreground">Organization</FormLabel><FormControl><Input placeholder="Your School/Company" {...field} className="bg-white/5 border-white/10 rounded-xl" /></FormControl><FormMessage /></FormItem>
                      )} />
                      <Button type="submit" className="w-full" variant="accent" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? <div className="flex items-center space-x-2"><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Processing...</span></div>
                          : <div className="flex items-center space-x-2"><Download className="h-4 w-4" /><span>Download Now</span></div>}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 px-6 md:px-8 section-darker">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-montserrat text-foreground mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Research Papers', 'Case Studies', 'Implementation Guide'].map((title) => (
              <div key={title} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4">Access our collection of resources.</p>
                <Button variant="outline" size="sm" className="w-full">Browse</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePaper;
