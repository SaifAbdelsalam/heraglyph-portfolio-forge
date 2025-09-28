import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { FileText, Scale, AlertTriangle, Shield, Users, CreditCard, Ban, RefreshCw } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-heraglyph-black to-heraglyph-dark-gray text-heraglyph-white">
      {/* Legal Page Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-heraglyph-black/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <a href="/" className="group flex items-center">
                <span className="text-2xl font-bold font-heading transition-colors duration-300 group-hover:text-heraglyph-accent">
                  <span className="gradient-text">HERA</span>GLYPH
                </span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a 
                  href="/#services"
                  className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                >
                  Services
                </a>
                <a 
                  href="/#comparison" 
                  className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                >
                  Comparison
                </a>
                <a 
                  href="/#chatbot-section" 
                  className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                >
                  Chatbot
                </a>
                <a 
                  href="/#booking-section" 
                  className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                >
                  Book a Call
                </a>
                <a
                  href="/el"
                  className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-heraglyph-accent bg-heraglyph-black/80 shadow mr-2 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-heraglyph-accent"
                  style={{ minWidth: 36, padding: 0 }}
                  aria-label="Switch to Greek"
                >
                  <img
                    src="/uploads/greece.png"
                    alt="Greek"
                    className="w-6 h-6 object-cover rounded-full"
                    style={{ display: 'block' }}
                  />
                </a>
                <a 
                  href="/#booking-section" 
                  className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-5 py-2.5 rounded-md font-medium hover:shadow-lg hover:shadow-heraglyph-accent/20 hover:scale-105 transition-all duration-300"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-heraglyph-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-heraglyph-gradient-end/5 rounded-full filter blur-3xl"></div>
      </div>

      <main className="relative pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <Scale className="w-16 h-16 mx-auto mb-4 text-heraglyph-accent" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-heraglyph-accent">Terms of</span> Service
              </h1>
              <p className="text-heraglyph-gray text-lg">Effective Date: May 20, 2025</p>
            </div>

            {/* Introduction */}
            <div className="bg-heraglyph-black/30 border border-heraglyph-accent/10 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-lg text-heraglyph-gray leading-relaxed">
                Welcome to HERAGLYPH. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Main content sections */}
            <div className="space-y-8">
              {/* Acceptance of Terms */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </motion.section>

              {/* Use License */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Use License</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on HERAGLYPH's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-heraglyph-gray space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </motion.section>

              {/* Service Description */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Service Description</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed mb-4">
                  HERAGLYPH provides comprehensive branding and digital solutions including:
                </p>
                <ul className="list-disc list-inside text-heraglyph-gray space-y-2 ml-4">
                  <li>AI Chatbots & Automation</li>
                  <li>Cold Email AI Systems</li>
                  <li>AI-Driven Process Optimization</li>
                  <li>AI Security & Compliance</li>
                  <li>Website development and design</li>
                  <li>Digital marketing services</li>
                </ul>
              </motion.section>

              {/* Payment Terms */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Payment Terms</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed mb-4">
                  Payment terms for our services are as follows:
                </p>
                <ul className="list-disc list-inside text-heraglyph-gray space-y-2 ml-4">
                  <li>Payment is due upon completion of services unless otherwise agreed in writing</li>
                  <li>Late payments may incur additional charges</li>
                  <li>All prices are subject to change with 30 days notice</li>
                  <li>Refunds are subject to our refund policy as outlined in the service agreement</li>
                </ul>
              </motion.section>

              {/* Prohibited Uses */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Ban className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Prohibited Uses</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed mb-4">
                  You may not use our service:
                </p>
                <ul className="list-disc list-inside text-heraglyph-gray space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </motion.section>

              {/* Disclaimer */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Disclaimer</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  The materials on HERAGLYPH's website are provided on an 'as is' basis. HERAGLYPH makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </motion.section>

              {/* Limitation of Liability */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  In no event shall HERAGLYPH or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HERAGLYPH's website, even if HERAGLYPH or a HERAGLYPH authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </motion.section>

              {/* Changes to Terms */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <RefreshCw className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Changes to Terms</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  HERAGLYPH reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </motion.section>

              {/* Contact Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us through our website contact form or via the contact information provided on our website.
                </p>
              </motion.section>
            </div>

            {/* Decorative footer element */}
            <div className="flex justify-center opacity-30 mt-12">
              <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L60 17H40L50 0Z" fill="currentColor" className="text-heraglyph-accent" />
                <path d="M30 5L40 22H20L30 5Z" fill="currentColor" className="text-heraglyph-accent" />
                <path d="M70 5L80 22H60L70 5Z" fill="currentColor" className="text-heraglyph-accent" />
              </svg>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
