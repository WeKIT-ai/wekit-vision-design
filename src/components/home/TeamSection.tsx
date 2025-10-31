import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TeamSection = () => {
  const coreTeam = [
    {
      name: "Yvonne Roberts",
      role: "Chief Executive Officer",
      image: "/lovable-uploads/9e4025f7-646d-4433-ae99-3c7a8bdfabea.png",
    },
    {
      name: "Henry Nathan",
      role: "Director - Programs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const partner = {
    name: "Tarsh Williams",
    role: "CEO, TrueNature",
    badge: "Community Outreach Training - Partner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  };

  const advisors = [
    {
      name: "Yashaswini KS",
      role: "State President, WICCI Karnataka",
      badge: "Karnataka Technology Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sobhita Neelnath",
      role: "Tech Leader, Salesforce",
      badge: "AI & Technology Advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Shewali B",
      role: "CEO, Briq",
      badge: "Sustainability Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              MEET THE TEAM
            </h2>
          </div>
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-yellow-400">OUR MISSION</span>
              </h3>
              <p className="text-lg text-gray-300">
                To connect every youth to purpose, mentors, and future-ready skills through an intelligent AI ecosystem that scales human connection.
              </p>
            </div>
            <p className="text-xl font-semibold text-green-400">
              WE ARE JOINED BY NUMEROUS PARTNERS
            </p>
          </div>
        </div>

        {/* Core Team */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {coreTeam.map((member) => (
            <Card key={member.name} className="bg-transparent border-purple-500/50 border-2">
              <CardContent className="p-6 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-purple-500">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-transparent border-yellow-500/50 border-2">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full">
                  {partner.badge}
                </span>
              </div>
              <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-cyan-500">
                <AvatarImage src={partner.image} alt={partner.name} className="object-cover" />
                <AvatarFallback>{partner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
              <p className="text-gray-300">{partner.role}</p>
            </CardContent>
          </Card>
        </div>

        {/* Advisors Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-400">
            ADVISORS IN KARNATAKA AND OUTSIDE
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advisors.map((advisor) => (
            <Card key={advisor.name} className="bg-transparent border-green-500/50 border-2">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full">
                    {advisor.badge}
                  </span>
                </div>
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-green-500">
                  <AvatarImage src={advisor.image} alt={advisor.name} className="object-cover" />
                  <AvatarFallback>{advisor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold mb-2">{advisor.name}</h3>
                <p className="text-gray-300">{advisor.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
