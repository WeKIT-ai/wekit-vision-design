import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Users, BarChart3, Globe, Target, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import NRECTSection from '@/components/ngos/NRECTSection';

const NGOs = () => {
  const collaborationModels = [
    {
      icon: Users,
      title: 'Program Integration',
      description: 'Integrate our mentorship platform into your existing youth development programs.'
    },
    {
      icon: Target,
      title: 'Targeted Initiatives',
      description: 'Collaborate on specific initiatives targeting underserved communities and vulnerable youth.'
    },
    {
      icon: Globe,
      title: 'Community Outreach',
      description: 'Expand your reach through our network of mentors and educational institutions.'
    },
    {
      icon: Handshake,
      title: 'Resource Sharing',
      description: 'Share resources, expertise, and best practices to maximize impact across programs.'
    }
  ];

  const impactMetrics = [
    { metric: 'Youth Reached', value: '25,000+', description: 'Through our partner NGO network' },
    { metric: 'Communities Served', value: '150+', description: 'Across multiple regions' },
    { metric: 'Partner Organizations', value: '45+', description: 'NGOs and community organizations' },
    { metric: 'Program Success Rate', value: '89%', description: 'Positive outcome achievement' }
  ];

  const benefits = [
    'Amplified reach and impact',
    'Access to technology platform',
    'Professional mentor network',
    'Data analytics and reporting',
    'Capacity building support',
    'Funding opportunity access',
    'Cross-organization collaboration',
    'Best practice sharing'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Amplify Your Impact
            <span className="block text-orange-600">Together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Partner with wekit.ai to expand your reach, enhance your programs, 
            and create lasting change in the lives of youth worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Explore Partnership
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2"
            >
              View Impact Report
            </Button>
          </div>
        </div>
      </section>

      {/* NRECT Partnership Section */}
      <NRECTSection />

      {/* Collaboration Models Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Collaboration Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer flexible partnership models designed to complement and enhance 
              your existing youth development initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationModels.map((model, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <model.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {model.title}
                  </h3>
                  <p className="text-gray-600">
                    {model.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Collective Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Together with our NGO partners, we're creating measurable change 
              in communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((item, index) => (
              <Card key={index} className="border-2 border-orange-200 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {item.value}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.metric}
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

      {/* Benefits and Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Partner with Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform provides NGOs with the tools and network needed to 
                scale their impact and reach more young people effectively.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Start a Partnership
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Organization Name" />
                      <Input placeholder="Your Name" />
                    </div>
                    <Input placeholder="Email Address" type="email" />
                    <Input placeholder="Phone Number" type="tel" />
                    <Input placeholder="Organization Website" type="url" />
                    <Textarea 
                      placeholder="Tell us about your organization and how you'd like to collaborate" 
                      rows={4}
                    />
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Submit Partnership Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our NGO partners are making a difference in their communities 
              through our collaborative programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                org: 'Youth Empowerment Foundation',
                impact: '3,500 youth mentored',
                story: 'Integrated our platform into their existing programs, reaching rural communities across multiple regions.'
              },
              {
                org: 'Skills4Future Initiative',
                impact: '89% job placement rate',
                story: 'Combined their vocational training with our mentorship program for improved employment outcomes.'
              },
              {
                org: 'Girls in Tech Network',
                impact: '1,200 girls in STEM',
                story: 'Focused partnership on connecting young women with female tech professionals and role models.'
              }
            ].map((story, index) => (
              <Card key={index} className="border-2 border-orange-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {story.org}
                  </h3>
                  <p className="text-orange-600 font-medium mb-4">{story.impact}</p>
                  <p className="text-gray-600">{story.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Amplify Your Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our network of partner organizations working together to create 
            sustainable change in the lives of youth worldwide.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Begin Partnership Discussion
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NGOs;
