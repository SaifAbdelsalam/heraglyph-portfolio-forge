import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Linkedin, Instagram, Github } from "lucide-react";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
    },
  },
};

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
    <section id="team" className="bg-gradient-to-b from-heraglyph-dark-gray to-heraglyph-black py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-heraglyph-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-heraglyph-gradient-end/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-heraglyph-accent text-sm uppercase tracking-wider font-medium mb-2">The Experts</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-heraglyph-white">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end rounded-full mx-auto mb-6"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            The talented people behind HERAGLYPH's success, combining creativity with technical expertise to deliver exceptional results
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
            >
              <Card className="glass-card bg-heraglyph-black/50 border border-heraglyph-white/10 hover:border-heraglyph-accent/30 overflow-hidden group rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-heraglyph-accent/10">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6 mt-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end rounded-full opacity-0 blur-xl group-hover:opacity-20 transition-all duration-500 -z-10 scale-[1.35]"></div>
                    <Avatar className="h-28 w-28 border-2 border-heraglyph-accent/20 bg-heraglyph-dark-gray group-hover:border-heraglyph-accent/50 transition-all duration-300 p-0.5">
                      {member.name === "Adam Shawky" ? (
                        <img
                          src="/lovable-uploads/me.jpg"
                          alt="Adam Shawky"
                          className="h-full w-full object-cover rounded-full"
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
                          ? "https://www.behance.net/adamshawky1"
                          : member.name === "Saif Rayan"
                          ? "https://github.com/SaifAbdelsalam"
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-heraglyph-gray hover:text-heraglyph-accent transition-colors"
                    >
                      {member.name === "Adam Shawky" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                        </svg>
                      ) : (
                        <Github size={18} />
                      )}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
