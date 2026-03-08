import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Target, BookOpen, MessageCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.userName) setUserName(location.state.userName);
  }, [location.state]);

  const roadmapSteps = [
    { id: 1, title: "Assessment Complete", description: "We've analyzed your responses and identified your unique profile", status: "completed", icon: CheckCircle, timeline: "Just completed" },
    { id: 2, title: "Mentor Matching", description: "Our AI is finding the perfect mentor match based on your goals", status: "in-progress", icon: Users, timeline: "Within 24 hours" },
    { id: 3, title: "First Session", description: "Schedule your initial mentorship session to set your goals", status: "upcoming", icon: MessageCircle, timeline: "2-3 days" },
    { id: 4, title: "Skill Development", description: "Access personalized courses and micro-learning modules", status: "upcoming", icon: BookOpen, timeline: "Ongoing" },
    { id: 5, title: "Goal Achievement", description: "Work towards your dreams with continuous support", status: "upcoming", icon: Target, timeline: "3-6 months" }
  ];

  const services = [
    { title: "1-on-1 Mentorship", description: "Connect with industry professionals", features: ["Weekly video sessions", "Career guidance", "Industry insights", "Network introductions"], status: "Available" },
    { title: "Skill-Building Courses", description: "Access curated learning paths", features: ["Interactive lessons", "Real-world projects", "Certification", "Progress tracking"], status: "Coming Soon" },
    { title: "Peer Community", description: "Join a supportive community", features: ["Discussion forums", "Study groups", "Events & workshops", "Networking opportunities"], status: "Available" }
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-4">
            Welcome to Your Journey{userName && `, ${userName}`}!
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Your personalized roadmap to success is ready.
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat text-foreground mb-8 text-center">Your Personalized Roadmap</h2>
          <div className="space-y-4">
            {roadmapSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`glass rounded-2xl p-6 ${step.status === 'completed' ? 'border-secondary/40' : step.status === 'in-progress' ? 'border-accent/40' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      step.status === 'completed' ? 'bg-secondary/20 text-secondary' :
                      step.status === 'in-progress' ? 'bg-accent/20 text-accent' :
                      'bg-white/5 text-muted-foreground'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          step.status === 'completed' ? 'bg-secondary/20 text-secondary' :
                          step.status === 'in-progress' ? 'bg-accent/20 text-accent' :
                          'bg-white/5 text-muted-foreground'
                        }`}>{step.timeline}</span>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-montserrat text-foreground mb-8 text-center">Services Available to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${service.status === 'Available' ? 'bg-secondary/20 text-secondary' : 'bg-accent/20 text-accent'}`}>{service.status}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />{f}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-strong rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground mb-6 font-light">Our team will contact you within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="accent" onClick={() => navigate('/courses')} className="group">Explore Courses <BookOpen className="ml-2" size={16} /></Button>
            <Button size="xl" variant="outline" onClick={() => navigate('/about')} className="group">Learn More <ArrowRight className="ml-2" size={16} /></Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Questions? <a href="mailto:support@wekit.com" className="text-accent hover:underline">support@wekit.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
