
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
