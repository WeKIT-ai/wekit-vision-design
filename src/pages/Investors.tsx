import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TrendingUp, DollarSign, Globe, Users, Target, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import CounterAnimation from '@/components/ui/counter-animation';
import FloatingElement from '@/components/ui/floating-element';
import StaggeredChildren from '@/components/ui/staggered-children';

const Investors = () => {
  const marketOpportunity = [
    {
      icon: Users,
      title: 'Market Size',
      stat: 1.8,
      suffix: 'B',
      description: 'Global youth population (ages 15-35)'
    },
    {
      icon: TrendingUp,
      title: 'Growth Rate',
      stat: 23,
      suffix: '%',
      description: 'Annual growth in digital adoption'
    },
    {
      icon: DollarSign,
      title: 'Economic Impact',
      stat: 15,
      prefix: '$',
      suffix: 'T',
      description: 'Potential economic contribution by 2050'
    },
    {
      icon: Globe,
      title: 'Market Reach',
      stat: 195,
      suffix: '',
      description: 'Countries with youth empowerment needs'
    }
  ];

  const keyMetrics = [
    { label: 'User Growth Rate', value: 150, suffix: '%', trend: 'YoY increase' },
    { label: 'Revenue Growth', value: 280, suffix: '%', trend: 'Last 18 months' },
    { label: 'Market Penetration', value: 12, suffix: '%', trend: 'Target market captured' },
    { label: 'Customer Retention', value: 94, suffix: '%', trend: 'Annual retention rate' }
  ];

  const investmentOpportunities = [
    {
      icon: Target,
      title: 'Series A Funding',
      amount: '$5M - $15M',
      use: 'Platform scaling, team expansion, market penetration'
    },
    {
      icon: BarChart3,
      title: 'Growth Capital',
      amount: '$15M - $30M',
      use: 'International expansion, AI development, partnerships'
    },
    {
      icon: Globe,
      title: 'Strategic Investment',
      amount: '$30M+',
      use: 'Global expansion, acquisition opportunities'
    }
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
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
        <FloatingElement className="absolute top-24 left-10" color="bg-indigo-400" size="lg" speed="slow" />
        <FloatingElement className="absolute top-40 right-20" color="bg-purple-400" size="md" speed="medium" delay={1} />
        <FloatingElement className="absolute bottom-20 left-1/4" color="bg-blue-300" size="sm" speed="fast" delay={2} />

        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animation="zoom-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Invest in the
              <span className="block text-indigo-600">Future of Youth</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join us in building the largest youth empowerment platform globally. 
              Exceptional returns meet meaningful impact in the world's fastest-growing market.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              >
                Request Investment Deck
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Schedule Call
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Massive Market Opportunity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The global youth population represents the largest untapped market for 
              educational technology and career development solutions.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={100}>
            {marketOpportunity.map((item, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon size={32} />
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    {item.prefix}<CounterAnimation end={item.stat} duration={2000} />{item.suffix}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Traction & Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Proven Traction
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform has demonstrated strong product-market fit with 
                consistent growth across all key metrics.
              </p>
              <StaggeredChildren className="space-y-4" staggerDelay={75}>
                {traction.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </StaggeredChildren>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Key Performance Metrics
              </h3>
              <div className="space-y-6">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{metric.label}</span>
                      <span className="text-2xl font-bold text-indigo-600">
                        <CounterAnimation end={metric.value} suffix={metric.suffix} duration={2000} />
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{metric.trend}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple investment rounds available to support our growth strategy 
              and global expansion plans.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={150}>
            {investmentOpportunities.map((opportunity, index) => (
              <Card key={index} className="border-2 border-indigo-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <opportunity.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-4">
                    {opportunity.amount}
                  </div>
                  <p className="text-gray-600">
                    {opportunity.use}
                  </p>
                </CardContent>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with Our Investment Team
            </h2>
            <p className="text-lg text-gray-600">
              Ready to learn more about investment opportunities? 
              Get in touch with our team to discuss next steps.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <Card className="border-2 border-indigo-200 bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input placeholder="Your full name" className="transition-all duration-300 focus:scale-[1.02]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <Input placeholder="Investment firm or company" className="transition-all duration-300 focus:scale-[1.02]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input placeholder="your.email@example.com" type="email" className="transition-all duration-300 focus:scale-[1.02]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input placeholder="Your phone number" type="tel" className="transition-all duration-300 focus:scale-[1.02]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Interest
                    </label>
                    <Textarea 
                      placeholder="Tell us about your investment thesis and interest in wekit.ai" 
                      rows={4}
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg transition-all duration-300 hover:scale-105">
                    Send Investment Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom-in" className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Be Part of the Global Growth Story
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join leading investors who are backing the next generation of global talent 
            and the platforms that will shape their future.
          </p>
          <Button 
            size="lg" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
          >
            Download Investment Deck
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Investors;
