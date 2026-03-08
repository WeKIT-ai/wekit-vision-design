import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Lightbulb, Users, TrendingUp, GraduationCap } from 'lucide-react';

const programs = [
  { icon: Lightbulb, title: 'Founder Discovery Lab', desc: 'Structured exploration program helping aspiring founders identify problems worth solving and validate ideas.' },
  { icon: Users, title: 'Startup Mentorship Network', desc: 'Connect with experienced founders, investors, and operators who guide you through early-stage challenges.' },
  { icon: TrendingUp, title: 'Angel Readiness Program', desc: 'Prepare for investment with pitch training, financial modeling, and investor relationship building.' },
  { icon: GraduationCap, title: 'Student Entrepreneurship Labs', desc: 'Campus-based innovation labs that help students build real ventures while still in school.' },
];

const Entrepreneurship = () => {
  return (
    <section id="entrepreneurship" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="https://videos.pexels.com/video-files/3253766/3253766-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/90" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="mb-16">
          <span className="inline-block border border-white/20 px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-white/60 mb-6">
            Entrepreneurship
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-white leading-tight mb-4">
            Entrepreneurship
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            Programs supporting aspiring founders and purpose-driven innovators in building ventures that matter.
          </p>
        </AnimatedSection>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={100} animation="fade-up">
          {programs.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -6, scale: 1.02 }}
              className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 transition-shadow duration-500 hover:shadow-2xl hover:border-accent/50 group"
            >
              <div className="w-12 h-12 border border-accent/40 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                <p.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default Entrepreneurship;
