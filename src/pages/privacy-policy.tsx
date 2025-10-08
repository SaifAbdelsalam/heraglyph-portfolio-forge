import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Shield, Key, Eye, Mail, Cookie, Database, Link, RefreshCw } from 'lucide-react';

function smoothScrollTo(element: HTMLElement, duration = 1200) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t: number, b: number, c: number, d: number) {
    // Ease out cubic for smoother, slower animation
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  }

  requestAnimationFrame(animation);
}

const PrivacyPolicy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-heraglyph-black to-heraglyph-dark-gray text-heraglyph-white">
      {/* Main Page Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-heraglyph-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
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
                  href="/#new-services"
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
                  className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-5 py-2.5 rounded-md font-medium hover:shadow-lg hover:shadow-heraglyph-accent/20 hover:scale-105 transition-all duration-300"
                >
                  Book a Call
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="relative z-50 p-2 rounded-lg text-heraglyph-gray hover:text-heraglyph-white focus:outline-none focus:ring-2 focus:ring-heraglyph-accent transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span 
                    className={`absolute left-0 block h-0.5 w-6 transform transition-all duration-300 ${
                      isMenuOpen 
                        ? 'top-3 rotate-45 bg-heraglyph-white' 
                        : 'top-1 bg-heraglyph-gray'
                    }`}
                  />
                  <span 
                    className={`absolute left-0 block h-0.5 w-6 transition-all duration-300 ${
                      isMenuOpen 
                        ? 'opacity-0' 
                        : 'top-3 bg-heraglyph-gray'
                    }`}
                  />
                  <span 
                    className={`absolute left-0 block h-0.5 w-6 transform transition-all duration-300 ${
                      isMenuOpen 
                        ? 'top-3 -rotate-45 bg-heraglyph-white' 
                        : 'top-5 bg-heraglyph-gray'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-heraglyph-black/95 backdrop-blur-lg transform transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen ? 'opacity-100 translate-y-16' : 'opacity-0 -translate-y-full'
          }`}
          style={{ 
            pointerEvents: isMenuOpen ? 'auto' : 'none',
            height: 'calc(100vh - 64px)'
          }}
        >
          <div className="flex flex-col items-center justify-center min-h-full px-6" style={{ marginTop: '-15vh' }}>
            <div className="w-full max-w-sm mx-auto">
              <div className="space-y-7">
                {[
                  { href: '/#new-services', text: 'Services' },
                  { href: '/#comparison', text: 'Comparison' },
                  { href: '/#chatbot-section', text: 'Chatbot' },
                  { href: '/#booking-section', text: 'Book a Call' }
                ].map((item) => (
                  <a 
                    key={item.href}
                    href={item.href}
                    className="block text-center text-2xl font-medium text-heraglyph-white/90 hover:text-heraglyph-accent hover:scale-105 transform transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
              
              <div className="mt-12 flex items-center justify-center space-x-6">
                <a
                  href="/el"
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-heraglyph-accent bg-heraglyph-black/80 shadow hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-heraglyph-accent"
                  aria-label="Switch to Greek"
                >
                  <img
                    src="/uploads/greece.png"
                    alt="Greek"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </a>
                <a 
                  href="/#booking-section"
                  className="px-8 py-3 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white text-lg rounded-md font-medium hover:shadow-lg hover:shadow-heraglyph-accent/20 hover:scale-105 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
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