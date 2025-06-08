import { Bot, Cpu, SatelliteDish, BrainCircuit, Code, Users, Globe, Shield } from 'lucide-react';
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
  hidden: { opacity: 1, y: 20, scale: 0.95 },
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

const AboutSection = () => {
  const stats = [
    {
      icon: <Code size={28} />, title: "AI Projects", value: "50+", description: "AI chatbots, automation & optimization"
    },
    {
      icon: <Users size={28} />, title: "AI Specialists", value: "15+", description: "Engineers & data scientists"
    },
    {
      icon: <Globe size={28} />, title: "Global AI Reach", value: "10+", description: "Countries using our AI solutions"
    },
    {
      icon: <Shield size={28} />, title: "AI Security", value: "99.9%", description: "Uptime & compliance"
    }
  ];

  return (
    <section id="about" className="bg-heraglyph-black py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-heraglyph-accent/5 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-heraglyph-gradient-end/5 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-heraglyph-black via-transparent to-heraglyph-black"></div>
      <div className="section-container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light bg-clip-text text-transparent">
              AI Optimization
            </span>
            <span className="text-heraglyph-white ml-3">for Business Growth</span>
          </h2>
          <p className="section-subtitle text-heraglyph-gray max-w-3xl mx-auto text-lg md:text-xl">
            We empower companies with AI chatbots, automated cold email systems, and process optimization to drive efficiency and results.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <p className="text-heraglyph-gray text-lg leading-relaxed">
                <span className="text-heraglyph-white font-semibold">HERAGLYPH</span> specializes in AI-driven digital transformation. We build custom chatbots, automate cold outreach, and optimize business processes with the latest in artificial intelligence.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-heraglyph-accent/10 text-heraglyph-accent mt-1">
                    <Code size={20} />
                  </div>
                  <div>
                    <h3 className="text-heraglyph-white font-medium mb-2">AI Chatbots & Assistants</h3>
                    <p className="text-heraglyph-gray">Conversational AI for support, sales, and lead generation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-heraglyph-accent/10 text-heraglyph-accent mt-1">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="text-heraglyph-white font-medium mb-2">Automated Outreach</h3>
                    <p className="text-heraglyph-gray">Cold email systems and workflow automations for growth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-heraglyph-accent/10 text-heraglyph-accent mt-1">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="text-heraglyph-white font-medium mb-2">Process Optimization</h3>
                    <p className="text-heraglyph-gray">AI-powered analytics and automation for business efficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-heraglyph-dark-gray/90 to-heraglyph-black/95 \
                    rounded-xl p-6 shadow-lg border border-heraglyph-gray/10 backdrop-blur-sm \
                    hover:border-heraglyph-accent/20 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-heraglyph-accent/10 to-heraglyph-accent/5 \
                      shadow-inner text-heraglyph-accent group-hover:text-heraglyph-accent-light transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <h3 className="text-xl font-medium ml-4 text-heraglyph-white">{stat.title}</h3>
                  </div>
                  <p className="text-heraglyph-accent text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-heraglyph-gray text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
