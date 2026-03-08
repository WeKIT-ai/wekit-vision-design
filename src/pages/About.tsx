
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
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      
      {/* Video Section */}
      <section className="py-20 px-6 md:px-8 section-darker">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Our Story in Motion</h2>
            <p className="text-lg text-muted-foreground font-light">See the passion and purpose behind WeKIT</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl group max-w-4xl mx-auto"
          >
            <video autoPlay muted loop playsInline
              className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              poster="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            >
              <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c3ef&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Building the Future Together</h3>
              <p className="text-lg text-white/70">Every young person deserves the chance to thrive</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Lead Gen 1 */}
      <section className="py-20 px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NewsletterSignup />
            <EarlyAccessForm />
          </div>
        </div>
      </section>

      <AboutStory />
      
      {/* Lead Gen 2 */}
      <section className="py-20 px-6 md:px-8 section-darker">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground font-light">Take the next step in transforming youth development.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DemoRequestForm />
            <ContactForm />
          </div>
        </div>
      </section>

      <AboutMission />
      <AboutImpact />
      
      {/* Lead Gen 3 */}
      <section className="py-20 px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground font-light">Become part of the WeKIT ecosystem.</p>
          </motion.div>
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
