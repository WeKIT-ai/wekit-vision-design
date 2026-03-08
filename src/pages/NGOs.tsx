import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Users, Globe, Target, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import NRECTSection from '@/components/ngos/NRECTSection';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 section-darker">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold font-montserrat text-foreground mb-8 leading-[1.05] tracking-tight">
            Amplify Your Impact
            <span className="block text-secondary">Together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light">
            Partner with WeKIT to expand your reach, enhance your programs, and create lasting change in the lives of youth worldwide.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="accent" className="group">Explore Partnership <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} /></Button>
            <Button size="xl" variant="outline">View Impact Report</Button>
          </motion.div>
        </div>
      </section>

      <NRECTSection />

      {/* Collaboration Models */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Collaboration Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">Flexible partnership models designed to complement and enhance your existing youth development initiatives.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationModels.map((model, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/10">
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mx-auto mb-6">
                  <model.icon size={28} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-foreground mb-4">{model.title}</h3>
                <p className="text-muted-foreground">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Collective Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">Together with our NGO partners, we're creating measurable change in communities worldwide.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-accent mb-2">{item.value}</div>
                <h3 className="text-lg font-semibold font-montserrat text-foreground mb-2">{item.metric}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
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
              <p className="text-lg text-muted-foreground mb-8 font-light">Our platform provides NGOs with the tools and network needed to scale their impact.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold font-montserrat text-foreground mb-6">Start a Partnership</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Organization Name" className="bg-white/5 border-white/10 rounded-xl" />
                    <Input placeholder="Your Name" className="bg-white/5 border-white/10 rounded-xl" />
                  </div>
                  <Input placeholder="Email Address" type="email" className="bg-white/5 border-white/10 rounded-xl" />
                  <Input placeholder="Phone Number" type="tel" className="bg-white/5 border-white/10 rounded-xl" />
                  <Textarea placeholder="Tell us about your organization" rows={4} className="bg-white/5 border-white/10 rounded-xl" />
                  <Button className="w-full" variant="accent">Submit Partnership Inquiry</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Partnership Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { org: 'Youth Empowerment Foundation', impact: '3,500 youth mentored', story: 'Integrated our platform into their existing programs, reaching rural communities.' },
              { org: 'Skills4Future Initiative', impact: '89% job placement rate', story: 'Combined vocational training with our mentorship program.' },
              { org: 'Girls in Tech Network', impact: '1,200 girls in STEM', story: 'Focused partnership connecting young women with female tech professionals.' }
            ].map((story, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mx-auto mb-6">
                  <Heart size={28} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold font-montserrat text-foreground mb-2">{story.org}</h3>
                <p className="text-accent font-medium mb-4">{story.impact}</p>
                <p className="text-muted-foreground">{story.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-8">Ready to Amplify Your Impact?</h2>
          <p className="text-lg text-muted-foreground mb-8 font-light">Join our network of partner organizations working together to create sustainable change.</p>
          <Button size="xl" variant="accent" className="group">Begin Partnership Discussion <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} /></Button>
        </div>
      </section>
    </div>
  );
};

export default NGOs;
