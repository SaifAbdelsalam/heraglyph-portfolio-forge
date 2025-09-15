import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Linkedin, Instagram, Github } from "lucide-react";

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
      role: "AI Solutions Architect",
      bio: "Expert in designing and implementing advanced AI solutions, specializing in natural language processing and machine learning systems for enterprise applications.",
      initials: "AS",
    },
    {
      name: "Saif Rayan",
      role: "AI Research & Development Lead",
      bio: "Specializes in developing cutting-edge AI models and algorithms, with expertise in deep learning, neural networks, and automated decision systems.",
      initials: "SR",
    },
  ];

  return (
    <section id="team" className="bg-gradient-to-b from-heraglyph-dark-gray to-heraglyph-black py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-heraglyph-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-heraglyph-gradient-end/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-heraglyph-accent text-sm uppercase tracking-wider font-medium mb-2 opacity-0 animate-fade-in">AI Innovation Leaders</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-heraglyph-white opacity-100 animate-none">
            Meet Our <span className="gradient-text">AI Experts</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end rounded-full mx-auto mb-6 opacity-0 animate-fade-in"></div>
          <p className="section-subtitle opacity-0 animate-fade-in-delayed max-w-2xl mx-auto">
            Our team of AI specialists combines deep technical expertise with innovative thinking to develop cutting-edge artificial intelligence solutions that transform businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="glass-card bg-heraglyph-black/50 opacity-0 animate-fade-in-delayed border border-heraglyph-white/10 hover:border-heraglyph-accent/30 overflow-hidden group rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-heraglyph-accent/10">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-6 mt-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end rounded-full opacity-0 blur-xl group-hover:opacity-20 transition-all duration-500 -z-10 scale-[1.35]"></div>
                  <Avatar className="h-28 w-28 border-2 border-heraglyph-accent/20 bg-heraglyph-dark-gray group-hover:border-heraglyph-accent/50 transition-all duration-300 p-0.5">
                    {member.name === "Adam Shawky" ? (
                      <img
                        src="./uploads/me.jpg"
                        alt="Adam Shawky"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : member.name === "Saif Rayan" ? (
                      <img
                        src="./uploads/saif photo.jpeg"
                        alt="Saif Rayan"
                        className="h-full w-full object-cover rounded-full"
                        style={{ transform: 'scale(2)', objectPosition: 'center -10%' }}
                      />
                    ) : (
                      <AvatarFallback className="bg-gradient-to-br from-heraglyph-black to-heraglyph-dark-gray text-heraglyph-white text-xl font-medium rounded-full">
                        {member.initials}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white p-1.5 rounded-full shadow-lg">
                    <Users size={16} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-heraglyph-white mb-2">{member.name}</h3>
                <p className="text-heraglyph-accent font-medium mb-4">{member.role}</p>
                <p className="text-heraglyph-gray text-base mb-6">{member.bio}</p>
                
                <div className="flex space-x-4 mt-2">
                  <a
                    href={
                      member.name === "Adam Shawky"
                        ? "https://www.linkedin.com/in/adam-shawky23"
                        : member.name === "Saif Rayan"
                        ? "https://www.linkedin.com/in/saif-abdelsalam-33a09a279/"
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heraglyph-gray hover:text-heraglyph-accent transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={
                      member.name === "Adam Shawky"
                        ? "https://www.instagram.com/adam__shawky/"
                        : member.name === "Saif Rayan"
                        ? "https://www.instagram.com/saif_rayan0_0/"
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heraglyph-gray hover:text-heraglyph-accent transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={
                      member.name === "Adam Shawky"
                        ? "https://github.com/Adam-Shawky23"
                        : member.name === "Saif Rayan"
                        ? "https://github.com/SaifAbdelsalam"
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heraglyph-gray hover:text-heraglyph-accent transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
         

export default TeamSection;
