
import { Lightbulb, Building2, Heart, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutStory = () => {
  return (
    <section id="story" className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Original Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-wekit-soft text-sm font-medium text-foreground">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-4xl font-bold font-montserrat text-foreground">
              From Vision to <span className="text-wekit-teal">Reality</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                WeKIT was born from a simple observation: too many talented young people 
                lack access to the guidance and mentorship that could unlock their potential. 
                In a rapidly evolving world where AI and technology reshape every industry, 
                we saw an opportunity to democratize mentorship.
              </p>
              <p>
                Our founders, coming from diverse backgrounds in education, technology, and 
                youth development, united around a shared vision: create an AI-powered platform 
                that connects students with the right mentors at the right time, making quality 
                guidance accessible to all.
              </p>
              <p>
                Today, we're proud to serve thousands of students, hundreds of mentors, 
                and dozens of educational institutions, creating a thriving ecosystem of 
                learning and growth.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
              alt="Students collaborating" 
              className="shadow-lg"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary p-6 text-primary-foreground shadow-lg">
              <div className="text-2xl font-bold">2019</div>
              <div className="text-sm text-primary-foreground/70">Founded</div>
            </div>
          </div>
        </div>

        {/* From Grassroots to Global */}
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-4">
              From Grassroots to <span className="text-wekit-teal">Global</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The WeKIT.ai Story
            </p>
          </div>

          {/* Founder Quote */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-wekit-teal/20" />
            <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "Raised by educators and rooted in a legacy of service, I saw firsthand 
                how purpose and mentorship could transform lives, especially for youth with no prospects."
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "After 25+ years leading Market Intelligence, SCM, strategy, and global programs at IBM, 
                in 2023 I headed key AI projects for IBM which was an Eureka moment. I found several use 
                cases for WeKIT and that gave me the impetus to leave it all behind to answer a deeper calling."
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-wekit-teal/20 flex items-center justify-center">
                  <span className="text-wekit-teal font-bold text-lg">YR</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Yvonne Roberts</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO, WeKIT</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Birth of WeKIT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-montserrat text-foreground">
                <span className="text-wekit-teal">WeKIT.ai</span> | Wot Kareer Is iT?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                WeKIT.ai was born from that calling — an end-to-end ecosystem made possible by AI, 
                built to scale real human connection and guide every young person toward their purpose.
              </p>
            </div>
            <div className="space-y-6">
              {/* Timeline milestones */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-accent/30 border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-wekit-teal/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-wekit-teal" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">NRECT — May 2011, Bangalore</p>
                  <p className="text-sm text-muted-foreground">
                    Napoleon Roberts Education & Charitable Trust was incorporated to deliver grassroots 
                    mentoring initiatives in schools and communities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-accent/30 border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-wekit-teal/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-wekit-teal" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WeKIT International — August 2024, Bangalore</p>
                  <p className="text-sm text-muted-foreground">
                    Incorporated to scale the mentoring initiatives pioneered through NRECT, 
                    powered by AI and purpose-driven technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
