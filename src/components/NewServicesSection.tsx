import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Bot, 
  Sparkles, 
  Target, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Building2,
  Cpu,
  MessageSquare,
  PhoneCall,
  Mic,
  Globe
} from 'lucide-react';

const NewServicesSection = () => {
  const mainServices = [
    {
      title: "AI-Powered Chatbots",
      icon: <Bot className="w-8 h-8" />,
      description: "Intelligent chatbots that do more than answer questions - they capture leads, close sales, and keep customers engaged 24/7 with natural conversations.",
      graphic: (
        <div className="relative w-full h-32 bg-gradient-to-br from-heraglyph-accent/20 to-heraglyph-accent-light/10 rounded-lg p-4 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2">
            <div className="w-6 h-6 bg-heraglyph-accent/30 rounded"></div>
            <div className="w-6 h-6 bg-heraglyph-accent/50 rounded flex items-center justify-center">
              <MessageSquare className="w-3 h-3 text-heraglyph-accent" />
            </div>
            <div className="w-6 h-6 bg-heraglyph-accent/30 rounded"></div>
            <div className="w-6 h-6 bg-heraglyph-accent/40 rounded"></div>
            <div className="w-6 h-6 bg-heraglyph-accent/60 rounded flex items-center justify-center">
              <Bot className="w-3 h-3 text-heraglyph-accent" />
            </div>
            <div className="w-6 h-6 bg-heraglyph-accent/40 rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: "AI Voice Assistants",
      icon: <PhoneCall className="w-8 h-8" />,
      description: "Professional voice agents that answer calls, qualify leads, schedule appointments, and support customers in multiple languages — reducing call center costs while increasing conversions.",
      graphic: (
        <div className="relative w-full h-32 bg-gradient-to-br from-heraglyph-accent/20 to-heraglyph-accent-light/10 rounded-lg p-4 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-heraglyph-accent/30 rounded-xl flex items-center justify-center">
              <Mic className="w-6 h-6 text-heraglyph-accent" />
            </div>
            <div className="w-12 h-12 bg-heraglyph-accent/30 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-heraglyph-accent" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Custom Solutions",
      icon: <Cpu className="w-8 h-8" />,
      description: "Bespoke AI solutions tailored to your business needs. We don't just build tools, we engineer growth engines that make your business faster and smarter.",
      graphic: (
        <div className="relative w-full h-32 bg-gradient-to-br from-heraglyph-accent/20 to-heraglyph-accent-light/10 rounded-lg p-4 flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 bg-heraglyph-accent/30 rounded-lg flex items-center justify-center">
              <Cpu className="w-8 h-8 text-heraglyph-accent" />
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-heraglyph-accent/50 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-heraglyph-accent/50 rounded-full"></div>
            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-heraglyph-accent/40 rounded-full"></div>
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-heraglyph-accent/40 rounded-full"></div>
          </div>
        </div>
      )
    }
  ];

  const featureButtons = [
    { title: "AI-Driven Solutions", icon: <Zap className="w-4 h-4" /> },
    { title: "Auto-Lead Capture", icon: <Target className="w-4 h-4" /> },
    { title: "Unique Customer Journeys", icon: <Users className="w-4 h-4" /> },
    { title: "Continuous Improvement", icon: <TrendingUp className="w-4 h-4" /> },
    { title: "Daily Analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { title: "Enterprise Security", icon: <Shield className="w-4 h-4" /> },
    { title: "Real-Time Management", icon: <Building2 className="w-4 h-4" />, hideOnMobile: true }
  ];

  return (
    <section id="new-services" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Starry Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-heraglyph-accent/5 via-transparent to-transparent"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,215,0,0.03)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Simplified Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-heraglyph-accent/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-heraglyph-accent/4 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-heraglyph-accent/10 border border-heraglyph-accent/20 rounded-full px-4 py-2 mb-6"
            initial={{ y: 12, scale: 0.98 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Sparkles className="w-4 h-4 text-heraglyph-accent" />
            <span className="text-heraglyph-accent text-sm font-medium">Our Services</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: 18 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Expertise That Drives{' '}
            <span className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light bg-clip-text text-transparent">
              Quality
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            We don't just build solutions, we engineer growth engines. From AI-powered chatbots to fully automated workflows, every service is designed to make your business faster, smarter, and impossible to ignore.
          </motion.p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-heraglyph-accent/30 transition-all duration-300 group"
              initial={{ y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -3 }}
            >
              <div className="mb-6">
                {service.graphic}
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-heraglyph-accent/20 rounded-xl flex items-center justify-center text-heraglyph-accent group-hover:bg-heraglyph-accent/30 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {featureButtons.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-5 hover:border-heraglyph-accent/50 hover:bg-gradient-to-br hover:from-heraglyph-accent/10 hover:to-heraglyph-accent/5 transition-all duration-300 group cursor-pointer ${feature.hideOnMobile ? 'hidden md:block' : ''}`}
              initial={{ y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -1 }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-heraglyph-accent/20 to-heraglyph-accent/10 rounded-xl flex items-center justify-center text-heraglyph-accent group-hover:from-heraglyph-accent/30 group-hover:to-heraglyph-accent/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <span className="text-sm text-gray-300 group-hover:text-heraglyph-accent transition-colors duration-300 font-medium leading-tight">
                  {feature.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.a
            href="#booking-section"
            className="inline-block bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light text-black font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-heraglyph-accent/25 transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              Let's Build Something Amazing
              <Zap className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewServicesSection;
