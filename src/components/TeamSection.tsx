
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Adam Shawky",
      role: "Front End Developer",
      bio: "Specializes in creating beautiful, responsive user interfaces with modern web technologies.",
      initials: "AS",
    },
    {
      name: "Saif Rayan",
      role: "Backend Developer",
      bio: "Expert in building robust, scalable backend systems and database architecture.",
      initials: "SR",
    },
  ];

  return (
    <section id="team" className="bg-heraglyph-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">
            Meet Our <span className="text-heraglyph-white">Team</span>
          </h2>
          <p className="section-subtitle opacity-0 animate-fade-in-delayed">
            The talented people behind HERAGLYPH's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="glass-card opacity-0 animate-fade-in-delayed border-heraglyph-white/10 overflow-hidden group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-6 mt-2 relative">
                  <Avatar className="h-24 w-24 border-2 border-heraglyph-white/20 bg-heraglyph-dark-gray">
                    <AvatarFallback className="bg-heraglyph-dark-gray text-heraglyph-white text-xl font-medium">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-heraglyph-white text-heraglyph-black p-1 rounded-full">
                    <Users size={16} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-heraglyph-white mb-1">{member.name}</h3>
                <p className="text-heraglyph-gray font-medium mb-4">{member.role}</p>
                <p className="text-heraglyph-gray text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
