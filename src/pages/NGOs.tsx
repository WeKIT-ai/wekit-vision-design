import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Users, Globe, Target, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import NRECTSection from '@/components/ngos/NRECTSection';

const NGOs = () => {
  const collaborationModels = [
    { icon: Users, title: 'Program Integration', description: 'Integrate our mentorship platform into your existing youth development programs.' },
    { icon: Target, title: 'Targeted Initiatives', description: 'Collaborate on specific initiatives targeting underserved communities and vulnerable youth.' },
    { icon: Globe, title: 'Community Outreach', description: 'Expand your reach through our network of mentors and educational institutions.' },
    { icon: Handshake, title: 'Resource Sharing', description: 'Share resources, expertise, and best practices to maximize impact across programs.' }
  ];

  const impactMetrics = [
    { metric: 'Youth Reached', value: '25,000+', description: 'Through our partner NGO network' },
    { metric: 'Communities Served', value: '150+', description: 'Across multiple regions' },
    { metric: 'Partner Organizations', value: '45+', description: 'NGOs and community organizations' },
    { metric: 'Program Success Rate', value: '89%', description: 'Positive outcome achievement' }
  ];

  const benefits = [
    'Amplified reach and impact', 'Access to technology platform', 'Professional mentor network', 'Data analytics and reporting',
    'Capacity building support', 'Funding opportunity access', 'Cross-organization collaboration', 'Best practice sharing'
  ];

  return (
    <div className="min-h-screen pt-16 overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-wekit-soft">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground mb-8">
            Amplify Your Impact
            <span className="block text-wekit-teal">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Partner with WeKIT to expand your reach, enhance your programs, and create lasting change in the lives of youth worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
              Explore Partnership <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-medium rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              View Impact Report
            </Button>
          </div>
        </div>
      </section>

      <NRECTSection />

      {/* Collaboration Models */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Collaboration Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Flexible partnership models designed to complement and enhance your existing youth development initiatives.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationModels.map((model, index) => (
              <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 rounded-2xl bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 bg-wekit-soft rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <model.icon size={28} className="text-wekit-teal" />
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat text-foreground mb-4">{model.title}</h3>
                  <p className="text-muted-foreground">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-wekit-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Collective Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Together with our NGO partners, we're creating measurable change in communities worldwide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((item, index) => (
              <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 rounded-2xl bg-card">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-wekit-teal mb-2">{item.value}</div>
                  <h3 className="text-lg font-semibold font-montserrat text-foreground mb-2">{item.metric}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Contact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-8">Why Partner with Us?</h2>
              <p className="text-lg text-muted-foreground mb-8">Our platform provides NGOs with the tools and network needed to scale their impact and reach more young people effectively.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-wekit-teal flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="border border-border/60 shadow-sm rounded-2xl bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold font-montserrat text-foreground mb-6">Start a Partnership</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Organization Name" className="rounded-xl" />
                      <Input placeholder="Your Name" className="rounded-xl" />
                    </div>
                    <Input placeholder="Email Address" type="email" className="rounded-xl" />
                    <Input placeholder="Phone Number" type="tel" className="rounded-xl" />
                    <Input placeholder="Organization Website" type="url" className="rounded-xl" />
                    <Textarea placeholder="Tell us about your organization and how you'd like to collaborate" rows={4} className="rounded-xl" />
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl">Submit Partnership Inquiry</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-wekit-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Partnership Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how our NGO partners are making a difference.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { org: 'Youth Empowerment Foundation', impact: '3,500 youth mentored', story: 'Integrated our platform into their existing programs, reaching rural communities across multiple regions.' },
              { org: 'Skills4Future Initiative', impact: '89% job placement rate', story: 'Combined their vocational training with our mentorship program for improved employment outcomes.' },
              { org: 'Girls in Tech Network', impact: '1,200 girls in STEM', story: 'Focused partnership on connecting young women with female tech professionals and role models.' }
            ].map((story, index) => (
              <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 rounded-2xl bg-card">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-wekit-soft rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart size={28} className="text-wekit-teal" />
                  </div>
                  <h3 className="text-lg font-semibold font-montserrat text-foreground mb-2">{story.org}</h3>
                  <p className="text-wekit-teal font-medium mb-4">{story.impact}</p>
                  <p className="text-muted-foreground">{story.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary-foreground mb-8">Ready to Amplify Your Impact?</h2>
          <p className="text-lg text-primary-foreground/70 mb-8">Join our network of partner organizations working together to create sustainable change in the lives of youth worldwide.</p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
            Begin Partnership Discussion <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NGOs;
