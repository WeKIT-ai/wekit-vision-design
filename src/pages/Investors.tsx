import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TrendingUp, DollarSign, Globe, Users, Target, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 section-darker">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold font-montserrat text-foreground mb-8 leading-[1.05] tracking-tight">
            Invest in the
            <span className="block text-gradient">Future of Youth</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light">
            Join us in building the largest youth empowerment platform globally.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="accent" className="group">Request Investment Deck <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} /></Button>
            <Button size="xl" variant="outline">Schedule Call</Button>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Massive Market Opportunity</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketOpportunity.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{item.stat}</div>
                <h3 className="text-lg font-semibold font-montserrat text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-darker">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-8">Proven Traction</h2>
            <p className="text-lg text-muted-foreground mb-8 font-light">Strong product-market fit with consistent growth.</p>
            <div className="space-y-4">
              {traction.map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold font-montserrat text-foreground mb-8">Key Performance Metrics</h3>
            <div className="space-y-4">
              {keyMetrics.map((metric, i) => (
                <div key={i} className="glass rounded-xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">{metric.label}</span>
                    <span className="text-2xl font-bold text-accent">{metric.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Investment Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentOpportunities.map((opp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mx-auto mb-6">
                  <opp.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-foreground mb-2">{opp.title}</h3>
                <div className="text-2xl font-bold text-accent mb-4">{opp.amount}</div>
                <p className="text-muted-foreground">{opp.use}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-darker">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Connect with Our Investment Team</h2>
          </div>
          <div className="glass rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-foreground mb-2">Name</label><Input placeholder="Your full name" className="bg-white/5 border-white/10 rounded-xl" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Organization</label><Input placeholder="Investment firm" className="bg-white/5 border-white/10 rounded-xl" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-foreground mb-2">Email</label><Input type="email" placeholder="email@example.com" className="bg-white/5 border-white/10 rounded-xl" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Phone</label><Input type="tel" placeholder="Phone number" className="bg-white/5 border-white/10 rounded-xl" /></div>
              </div>
              <div><label className="block text-sm font-medium text-foreground mb-2">Investment Interest</label><Textarea placeholder="Tell us about your investment thesis" rows={4} className="bg-white/5 border-white/10 rounded-xl" /></div>
              <Button className="w-full" variant="accent" size="lg">Send Investment Inquiry</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-8">Be Part of the Global Growth Story</h2>
          <Button size="xl" variant="accent" className="group">Download Investment Deck <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} /></Button>
        </div>
      </section>
    </div>
  );
};

export default Investors;
