import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Shield, Key, Eye, Mail, Cookie, Database, Link, RefreshCw } from 'lucide-react';

const PrivacyPolicy = () => {
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
                <Shield className="w-16 h-16 mx-auto mb-4 text-heraglyph-accent" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-heraglyph-accent">Privacy</span> Policy
              </h1>
              <p className="text-heraglyph-gray text-lg">Effective Date: May 20, 2025</p>
            </div>

            {/* Introduction */}
            <div className="bg-heraglyph-black/30 border border-heraglyph-accent/10 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-lg text-heraglyph-gray leading-relaxed">
                We recognize the importance of information privacy. This document describes the personal information we collect when you use our website. We hope this information helps you make informed decisions regarding the personal information you provide to us.
              </p>
            </div>

            {/* Main content sections */}
            <div className="space-y-8">
              {/* Public Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Public Information</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  If you browse the website without registering, no information about you is published on the site. When you write or edit materials on the site, you publish every word you write, and this information will be stored and displayed to other visitors. This applies to articles, helpful tips, materials, personal user pages, comments, etc.
                </p>
              </motion.section>

              {/* Visitor Identification */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Key className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Visitor Identification</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  You can register on the site or choose not to. If you register, you will be identified by your username. This can be your real name (if you wish) or a pseudonym—the name you provided when creating your account. Other registered visitors will be able to view the information you provided during registration.
                </p>
              </motion.section>

              {/* Email */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Email</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  The email address you provide during registration is not visible to other visitors. We may retain email messages and other correspondence sent by users to handle inquiries, respond to requests, and improve our services.
                </p>
              </motion.section>

              {/* Cookies */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Cookie className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Cookies</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  When you visit the site, one or more cookies are sent to your computer. A cookie is a small file containing a set of characters that allows us to identify your browser. When you register on the site, additional cookies may be sent to your computer to avoid re-entering your username (and possibly password) on subsequent visits. You can delete them after your session if you use a public computer and do not wish to reveal your pseudonym to subsequent users (in this case, you should also clear your browser cache).
                </p>
                <p className="text-heraglyph-gray leading-relaxed mt-4">
                  We use cookies to enhance the quality of our services by saving user settings and tracking trends in user activities, such as search queries. Most browsers are initially set to accept cookies; however, you can completely prohibit the use of cookies or configure notifications about their sending. However, without cookies, some site features may not function correctly.
                </p>
              </motion.section>

              {/* Logging */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Logging</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  Each time you visit the site, our servers automatically record information that your browser sends when visiting web pages. This information typically includes the requested web page, your computer's IP address, browser type, browser language settings, date and time of the request, and one or more cookies that allow us to accurately identify your browser.
                </p>
              </motion.section>

              {/* Links */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Link className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Links</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  On this site, links may be in a format that allows us to track whether visitors use them. This information is used to improve the quality of our advertising.
                </p>
              </motion.section>

              {/* Changes */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <RefreshCw className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Changes to the Privacy Policy</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  Please note that the privacy policy may change periodically. All changes to the privacy policy are published on this page.
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

export default PrivacyPolicy;