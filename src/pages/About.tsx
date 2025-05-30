
import { useState, useEffect } from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutMission from '@/components/about/AboutMission';
import AboutImpact from '@/components/about/AboutImpact';
import AboutTeam from '@/components/about/AboutTeam';
import AboutCTA from '@/components/about/AboutCTA';

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
      <AboutStory />
      <AboutMission />
      <AboutImpact />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
};

export default About;
