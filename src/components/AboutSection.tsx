
import { Bot, Cpu, SatelliteDish, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-heraglyph-black py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-heraglyph-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-heraglyph-gradient-end/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            <span className="text-heraglyph-accent">About</span>
            <span className="text-heraglyph-white"> Us</span>
          </h2>
          <p className="section-subtitle text-heraglyph-gray max-w-2xl mx-auto text-lg md:text-xl">
            Pioneering AI solutions to empower businesses in the digital era
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-heraglyph-gray text-lg leading-relaxed mb-6">
              At HERAGLYPH, we use AI and smart design to build solutions that look great and boost your business. Our AI-driven tools help you work more efficiently and connect better with your customers.
            </p>
            <p className="text-heraglyph-gray text-lg leading-relaxed mb-6">
              Our team of AI specialists and designers creates intelligent systems that automate tasks, improve customer experiences, and give you clear insights to help your business grow.
            </p>
            <p className="text-heraglyph-gray text-lg leading-relaxed">
              We believe AI should be easy for every business to use. Instead of just adding AI, we make sure it fits your specific goals and strengthens your brand online.
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="bg-heraglyph-dark-gray rounded-xl p-6 shadow-md border border-opacity-10 border-heraglyph-gray backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(31, 31, 31, 0.7) 0%, rgba(18, 18, 18, 0.9) 100%)',
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-md bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] shadow-inner text-heraglyph-accent-light">
                    <Bot size={28} />
                  </div>
                  <h3 className="text-xl font-medium ml-4 text-heraglyph-white">AI Projects</h3>
                </div>
                <p className="text-heraglyph-accent text-2xl font-bold mb-1">15+</p>
                <p className="text-heraglyph-gray text-sm">Successful implementations</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-heraglyph-dark-gray rounded-xl p-6 shadow-md border border-opacity-10 border-heraglyph-gray backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(31, 31, 31, 0.7) 0%, rgba(18, 18, 18, 0.9) 100%)',
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-md bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] shadow-inner text-heraglyph-accent-light">
                    <Cpu size={28} />
                  </div>
                  <h3 className="text-xl font-medium ml-4 text-heraglyph-white">Integrations</h3>
                </div>
                <p className="text-heraglyph-accent text-2xl font-bold mb-1">10+</p>
                <p className="text-heraglyph-gray text-sm">Enterprise solutions</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-heraglyph-dark-gray rounded-xl p-6 shadow-md border border-opacity-10 border-heraglyph-gray backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(31, 31, 31, 0.7) 0%, rgba(18, 18, 18, 0.9) 100%)',
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-md bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] shadow-inner text-heraglyph-accent-light">
                    <BrainCircuit size={28} />
                  </div>
                  <h3 className="text-xl font-medium ml-4 text-heraglyph-white">Experience</h3>
                </div>
                <p className="text-heraglyph-accent text-2xl font-bold mb-1">2+</p>
                <p className="text-heraglyph-gray text-sm">Years in AI innovation</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-heraglyph-dark-gray rounded-xl p-6 shadow-md border border-opacity-10 border-heraglyph-gray backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(31, 31, 31, 0.7) 0%, rgba(18, 18, 18, 0.9) 100%)',
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-md bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] shadow-inner text-heraglyph-accent-light">
                    <SatelliteDish size={28} />
                  </div>
                  <h3 className="text-xl font-medium ml-4 text-heraglyph-white">Support</h3>
                </div>
                <p className="text-heraglyph-accent text-2xl font-bold mb-1">24/7</p>
                <p className="text-heraglyph-gray text-sm">Dedicated monitoring</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
