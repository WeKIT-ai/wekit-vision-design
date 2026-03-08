import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/animated-section';
import StaggeredChildren from '@/components/ui/staggered-children';
import { Mountain, Compass, Users, TreePine } from 'lucide-react';

const programs = [
  {
    icon: Mountain,
    title: 'Youth Outdoor Leadership Expeditions',
    partner: 'Delivered with INME',
    activities: ['Trekking', 'Climbing', 'Kayaking', 'Outdoor Survival', 'Leadership Expeditions'],
  },
  {
    icon: Compass,
    title: 'College Leadership Expeditions',
    partner: 'Delivered with INME',
    activities: ['Team leadership retreats', 'Outdoor problem solving', 'Executive team building'],
  },
  {
    icon: Users,
    title: 'Corporate Leadership Adventures',
    partner: 'Delivered with TrueNature',
    activities: ['Team leadership retreats', 'Outdoor problem solving', 'Executive team building'],
  },
];

const ExperientialLearning = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="https://videos.pexels.com/video-files/2519660/2519660-uhd_2560_1440_24fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="mb-16">
          <span className="inline-block border border-white/20 px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-white/60 mb-6">
            Beyond the Classroom
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-white leading-tight mb-4">
            Learning Beyond
            <br />the Classroom
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            Experiential programs that build resilience, leadership, and real-world capabilities through outdoor adventures and team challenges.
          </p>
        </AnimatedSection>

        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={120} animation="fade-up">
          {programs.map((p) => (
            <div key={p.title} className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/10 group">
              <div className="w-12 h-12 border border-accent/40 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                <p.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-lg font-semibold font-montserrat text-white mb-2">{p.title}</h3>
              <p className="text-xs text-accent tracking-wide uppercase mb-4">{p.partner}</p>
              <ul className="space-y-2">
                {p.activities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-white/60">
                    <TreePine size={12} className="text-accent shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default ExperientialLearning;
