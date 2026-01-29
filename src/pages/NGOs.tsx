import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Users, Globe, Target, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import NRECTSection from '@/components/ngos/NRECTSection';
import AnimatedSection from '@/components/ui/animated-section';
import CounterAnimation from '@/components/ui/counter-animation';
import FloatingElement from '@/components/ui/floating-element';
import StaggeredChildren from '@/components/ui/staggered-children';

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
    { metric: 'Youth Reached', value: 25000, suffix: '+', description: 'Through our partner NGO network' },
    { metric: 'Communities Served', value: 150, suffix: '+', description: 'Across multiple regions' },
    { metric: 'Partner Organizations', value: 45, suffix: '+', description: 'NGOs and community organizations' },
    { metric: 'Program Success Rate', value: 89, suffix: '%', description: 'Positive outcome achievement' }
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
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <FloatingElement className="absolute top-24 left-10" color="bg-orange-400" size="lg" speed="slow" />
        <FloatingElement className="absolute top-40 right-20" color="bg-yellow-400" size="md" speed="medium" delay={1} />
        <FloatingElement className="absolute bottom-20 left-1/4" color="bg-red-300" size="sm" speed="fast" delay={2} />

        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animation="zoom-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Amplify Your Impact
              <span className="block text-orange-600">Together</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={150}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Partner with wekit.ai to expand your reach, enhance your programs, 
              and create lasting change in the lives of youth worldwide.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              >
                Explore Partnership
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                View Impact Report
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NRECT Partnership Section */}
      <NRECTSection />

      {/* Collaboration Models Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Collaboration Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer flexible partnership models designed to complement and enhance 
              your existing youth development initiatives.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={100}>
            {collaborationModels.map((model, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
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
          </StaggeredChildren>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Collective Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Together with our NGO partners, we're creating measurable change 
              in communities worldwide.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={100}>
            {impactMetrics.map((item, index) => (
              <Card key={index} className="border-2 border-orange-200 bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    <CounterAnimation end={item.value} suffix={item.suffix} duration={2000} />
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
          </StaggeredChildren>
        </div>
      </section>

      {/* Benefits and Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Partner with Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform provides NGOs with the tools and network needed to 
                scale their impact and reach more young people effectively.
              </p>
              <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={75}>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </StaggeredChildren>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="lg:pl-8">
                <Card className="border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Start a Partnership
                    </h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="Organization Name" className="transition-all duration-300 focus:scale-[1.02]" />
                        <Input placeholder="Your Name" className="transition-all duration-300 focus:scale-[1.02]" />
                      </div>
                      <Input placeholder="Email Address" type="email" className="transition-all duration-300 focus:scale-[1.02]" />
                      <Input placeholder="Phone Number" type="tel" className="transition-all duration-300 focus:scale-[1.02]" />
                      <Input placeholder="Organization Website" type="url" className="transition-all duration-300 focus:scale-[1.02]" />
                      <Textarea 
                        placeholder="Tell us about your organization and how you'd like to collaborate" 
                        rows={4}
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 hover:scale-105">
                        Submit Partnership Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our NGO partners are making a difference in their communities 
              through our collaborative programs.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={150}>
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
              <Card key={index} className="border-2 border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
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
          </StaggeredChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoom-in" className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Amplify Your Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our network of partner organizations working together to create 
            sustainable change in the lives of youth worldwide.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
          >
            Begin Partnership Discussion
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default NGOs;
