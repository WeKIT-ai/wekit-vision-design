
import { useState, useEffect } from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutMission from '@/components/about/AboutMission';
import AboutImpact from '@/components/about/AboutImpact';
import AboutTeam from '@/components/about/AboutTeam';
import AboutCTA from '@/components/about/AboutCTA';
import NewsletterSignup from '@/components/lead-gen/NewsletterSignup';
import ContactForm from '@/components/lead-gen/ContactForm';
import DemoRequestForm from '@/components/lead-gen/DemoRequestForm';
import PartnershipInquiry from '@/components/lead-gen/PartnershipInquiry';
import MentorSignup from '@/components/lead-gen/MentorSignup';
import EarlyAccessForm from '@/components/lead-gen/EarlyAccessForm';

const About = () => {
  const [activeSection, setActiveSection] = useState('story');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['story', 'mission', 'team', 'impact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <AboutHero />
      
      {/* Video Section - Our Story in Motion */}
      <section className="py-16 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story in Motion</h2>
            <p className="text-xl text-gray-600">See the passion and purpose behind WeKIT</p>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group hover:scale-105 transition-all duration-500 max-w-4xl mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              poster="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            >
              <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Building the Future Together</h3>
              <p className="text-lg opacity-90">Every young person deserves the chance to thrive</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lead Gen Section 1 - Newsletter & Early Access */}
      <section className="py-16 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NewsletterSignup />
            <EarlyAccessForm />
          </div>
        </div>
      </section>

      <AboutStory />
      
      {/* Lead Gen Section 2 - Demo Request & Contact */}
      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the next step in transforming youth development at your institution.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DemoRequestForm />
            <ContactForm />
          </div>
        </div>
      </section>

      <AboutMission />
      <AboutImpact />
      
      {/* Lead Gen Section 3 - Partnership & Mentor Signup */}
      <section className="py-16 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Become part of the WeKIT ecosystem and help shape the future of youth mentorship.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PartnershipInquiry />
            <MentorSignup />
          </div>
        </div>
      </section>

      <AboutTeam />
      <AboutCTA />
    </div>
  );
};

export default About;
