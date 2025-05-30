
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TrendingUp, DollarSign, Globe, Users, Target, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const Investors = () => {
  const marketOpportunity = [
    {
      icon: Users,
      title: 'Market Size',
      stat: '420M',
      description: 'Youth population in Africa (ages 15-35)'
    },
    {
      icon: TrendingUp,
      title: 'Growth Rate',
      stat: '23%',
      description: 'Annual growth in digital adoption'
    },
    {
      icon: DollarSign,
      title: 'Economic Impact',
      stat: '$2.5T',
      description: 'Potential economic contribution by 2050'
    },
    {
      icon: Globe,
      title: 'Market Reach',
      stat: '54',
      description: 'Countries with youth empowerment needs'
    }
  ];

  const keyMetrics = [
    { label: 'User Growth Rate', value: '150%', trend: 'YoY increase' },
    { label: 'Revenue Growth', value: '280%', trend: 'Last 18 months' },
    { label: 'Market Penetration', value: '12%', trend: 'Target market captured' },
    { label: 'Customer Retention', value: '94%', trend: 'Annual retention rate' }
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
      use: 'Continental expansion, acquisition opportunities'
    }
  ];

  const traction = [
    'Revenue growth of 280% in last 18 months',
    '25,000+ active users across 12 countries',
    'Partnerships with 45+ educational institutions',
    'Network of 2,500+ verified mentors',
    'Average session engagement of 45 minutes',
    '89% user satisfaction rating'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Invest in Africa's
            <span className="block text-indigo-600">Future Leaders</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join us in building the largest youth empowerment platform in Africa. 
            Exceptional returns meet meaningful impact in the world's fastest-growing market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Request Investment Deck
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2"
            >
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Massive Market Opportunity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Africa's youth population represents the largest untapped market for 
              educational technology and career development solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketOpportunity.map((item, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon size={32} />
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    {item.stat}
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
          </div>
        </div>
      </section>

      {/* Traction & Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Proven Traction
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform has demonstrated strong product-market fit with 
                consistent growth across all key metrics.
              </p>
              <div className="space-y-4">
                {traction.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Key Performance Metrics
              </h3>
              <div className="space-y-6">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{metric.label}</span>
                      <span className="text-2xl font-bold text-indigo-600">{metric.value}</span>
                    </div>
                    <p className="text-sm text-gray-500">{metric.trend}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple investment rounds available to support our growth strategy 
              and continental expansion plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentOpportunities.map((opportunity, index) => (
              <Card key={index} className="border-2 border-indigo-200 hover:shadow-lg transition-all duration-300">
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with Our Investment Team
            </h2>
            <p className="text-lg text-gray-600">
              Ready to learn more about investment opportunities? 
              Get in touch with our team to discuss next steps.
            </p>
          </div>

          <Card className="border-2 border-indigo-200 bg-white">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <Input placeholder="Investment firm or company" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input placeholder="your.email@example.com" type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input placeholder="Your phone number" type="tel" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Interest
                  </label>
                  <Textarea 
                    placeholder="Tell us about your investment thesis and interest in wekit.ai" 
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg">
                  Send Investment Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Be Part of Africa's Growth Story
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join leading investors who are backing the next generation of African talent 
            and the platforms that will shape their future.
          </p>
          <Button 
            size="lg" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Download Investment Deck
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Investors;
