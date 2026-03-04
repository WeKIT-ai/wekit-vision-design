import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TrendingUp, DollarSign, Globe, Users, Target, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const Investors = () => {
  const marketOpportunity = [
    { icon: Users, title: 'Market Size', stat: '1.8B', description: 'Global youth population (ages 15-35)' },
    { icon: TrendingUp, title: 'Growth Rate', stat: '23%', description: 'Annual growth in digital adoption' },
    { icon: DollarSign, title: 'Economic Impact', stat: '$15T', description: 'Potential economic contribution by 2050' },
    { icon: Globe, title: 'Market Reach', stat: '195', description: 'Countries with youth empowerment needs' }
  ];

  const keyMetrics = [
    { label: 'User Growth Rate', value: '150%', trend: 'YoY increase' },
    { label: 'Revenue Growth', value: '280%', trend: 'Last 18 months' },
    { label: 'Market Penetration', value: '12%', trend: 'Target market captured' },
    { label: 'Customer Retention', value: '94%', trend: 'Annual retention rate' }
  ];

  const investmentOpportunities = [
    { icon: Target, title: 'Series A Funding', amount: '$5M - $15M', use: 'Platform scaling, team expansion, market penetration' },
    { icon: BarChart3, title: 'Growth Capital', amount: '$15M - $30M', use: 'International expansion, AI development, partnerships' },
    { icon: Globe, title: 'Strategic Investment', amount: '$30M+', use: 'Global expansion, acquisition opportunities' }
  ];

  const traction = [
    'Revenue growth of 280% in last 18 months',
    '25,000+ active users across multiple regions',
    'Partnerships with 45+ educational institutions',
    'Network of 2,500+ verified mentors',
    'Average session engagement of 45 minutes',
    '89% user satisfaction rating'
  ];

  return (
    <div className="min-h-screen pt-16 overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-wekit-soft">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-foreground mb-8">
            Invest in the
            <span className="block text-wekit-teal">Future of Youth</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join us in building the largest youth empowerment platform globally. 
            Exceptional returns meet meaningful impact in the world's fastest-growing market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
              Request Investment Deck <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-medium rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Massive Market Opportunity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The global youth population represents the largest untapped market for educational technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketOpportunity.map((item, index) => (
              <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 rounded-2xl bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 bg-wekit-soft rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon size={28} className="text-wekit-teal" />
                  </div>
                  <div className="text-3xl font-bold text-wekit-teal mb-2">{item.stat}</div>
                  <h3 className="text-lg font-semibold font-montserrat text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-wekit-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-8">Proven Traction</h2>
              <p className="text-lg text-muted-foreground mb-8">Our platform has demonstrated strong product-market fit with consistent growth across all key metrics.</p>
              <div className="space-y-4">
                {traction.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-wekit-teal flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold font-montserrat text-foreground mb-8">Key Performance Metrics</h3>
              <div className="space-y-4">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="bg-card p-6 rounded-2xl border border-border/60 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{metric.label}</span>
                      <span className="text-2xl font-bold text-wekit-teal">{metric.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{metric.trend}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Investment Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Multiple investment rounds available to support our growth strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentOpportunities.map((opp, index) => (
              <Card key={index} className="border border-border/60 hover:shadow-lg transition-all duration-300 rounded-2xl bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 bg-wekit-soft rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <opp.icon size={28} className="text-wekit-teal" />
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat text-foreground mb-2">{opp.title}</h3>
                  <div className="text-2xl font-bold text-wekit-teal mb-4">{opp.amount}</div>
                  <p className="text-muted-foreground">{opp.use}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-wekit-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Connect with Our Investment Team</h2>
            <p className="text-lg text-muted-foreground">Ready to learn more? Get in touch with our team to discuss next steps.</p>
          </div>
          <Card className="border border-border/60 bg-card rounded-2xl shadow-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input placeholder="Your full name" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Organization</label>
                    <Input placeholder="Investment firm or company" className="rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input placeholder="your.email@example.com" type="email" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <Input placeholder="Your phone number" type="tel" className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Investment Interest</label>
                  <Textarea placeholder="Tell us about your investment thesis" rows={4} className="rounded-xl" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl py-3 text-lg">Send Investment Inquiry</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary-foreground mb-8">Be Part of the Global Growth Story</h2>
          <p className="text-lg text-primary-foreground/70 mb-8">Join leading investors who are backing the next generation of global talent.</p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
            Download Investment Deck <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Investors;
