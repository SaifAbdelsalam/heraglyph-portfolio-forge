import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  Globe,
  MapPin
} from 'lucide-react';

const NewContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+201120574501',
      link: 'https://wa.me/201120574501',
      description: 'Chat with us instantly',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+201120574501',
      link: 'tel:+201120574501',
      description: 'Call us directly',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@heraglyph.com',
      link: 'mailto:info@heraglyph.com',
      description: 'Send us an email',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Starry Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-heraglyph-accent/5 via-transparent to-transparent"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,215,0,0.03)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-heraglyph-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-heraglyph-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-heraglyph-accent/10 border border-heraglyph-accent/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MessageCircle className="w-4 h-4 text-heraglyph-accent" />
            <span className="text-heraglyph-accent text-sm font-medium">Get In Touch</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's{' '}
            <span className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your business with AI automation? 
            Choose your preferred way to reach us and let's start the conversation.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target={method.title === 'WhatsApp' ? '_blank' : '_self'}
                rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-heraglyph-accent/50 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-heraglyph-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-heraglyph-accent transition-colors duration-300">
                    {method.title}
                  </h3>

                  {/* Value */}
                  <p className="text-lg text-gray-300 mb-3 font-medium">
                    {method.value}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6">
                    {method.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-heraglyph-accent font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Contact Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-heraglyph-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 text-center"
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-heraglyph-accent/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-heraglyph-accent" />
              </div>
              <span className="text-xl text-white font-medium">HERAGLYPH</span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              We're here to help you transform your business with cutting-edge AI automation. 
              Whether you prefer a quick WhatsApp message, a direct call, or a detailed email, 
              we're ready to discuss your project and provide a tailored solution.
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Based in Egypt • Serving Worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContactSection;

