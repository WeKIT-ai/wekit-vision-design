
import { Users, ExternalLink } from 'lucide-react';

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Yvonne V Roberts",
      role: "Founder & CEO",
      image: "/lovable-uploads/9e4025f7-646d-4433-ae99-3c7a8bdfabea.png",
      description: "Passionate about empowering youth through technology and mentorship.",
      linkedin: "https://www.linkedin.com/in/yvonne1roberts/"
    },
    {
      name: "Henry L Nathan",
      role: "Head of Education",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Global Education Strategist"
    }
  ];

  return (
    <section id="team" className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-wekit-soft text-sm font-medium text-foreground mb-4">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </div>
          <h2 className="text-4xl font-bold font-montserrat text-foreground mb-4">
            Meet the People Behind <span className="text-wekit-teal">WeKIT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team brings together expertise in education, technology, 
            and youth development to create meaningful impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-wekit-soft p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden ring-4 ring-background shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold font-montserrat text-foreground text-center mb-2">{member.name}</h3>
                <p className="text-wekit-teal font-medium text-center mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">{member.description}</p>
                {member.linkedin && (
                  <div className="text-center">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-wekit-teal hover:text-wekit-primary text-sm font-medium transition-colors"
                    >
                      LinkedIn
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
