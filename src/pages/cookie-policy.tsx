import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Cookie, Settings, Eye, Shield, Database, Clock, AlertCircle, CheckCircle } from 'lucide-react';

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

const CookiePolicy = () => {
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
                <Cookie className="w-16 h-16 mx-auto mb-4 text-heraglyph-accent" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-heraglyph-accent">Cookie</span> Policy
              </h1>
              <p className="text-heraglyph-gray text-lg">Effective Date: May 20, 2025</p>
            </div>

            {/* Introduction */}
            <div className="bg-heraglyph-black/30 border border-heraglyph-accent/10 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-lg text-heraglyph-gray leading-relaxed">
                This Cookie Policy explains how HERAGLYPH uses cookies and similar technologies when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </div>

            {/* Main content sections */}
            <div className="space-y-8">
              {/* What Are Cookies */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Cookie className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">What Are Cookies</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed mb-4">
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
                <p className="text-heraglyph-gray leading-relaxed">
                  Cookies set by the website owner (in this case, HERAGLYPH) are called "first party cookies." Cookies set by parties other than the website owner are called "third party cookies." Third party cookies enable third party features or functionality to be provided on or through the website.
                </p>
              </motion.section>

              {/* Why We Use Cookies */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Why We Use Cookies</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed mb-4">
                  We use first party and third party cookies for several reasons:
                </p>
                <ul className="list-disc list-inside text-heraglyph-gray space-y-2 ml-4">
                  <li>To enable certain functions of the website</li>
                  <li>To provide analytics and improve website performance</li>
                  <li>To store your preferences and personalize your experience</li>
                  <li>To enable ad delivery and behavioral advertising</li>
                  <li>To ensure website security and prevent fraud</li>
                </ul>
              </motion.section>

              {/* Types of Cookies We Use */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Types of Cookies We Use</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Essential Cookies */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-heraglyph-white mb-2 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Essential Cookies
                    </h3>
                    <p className="text-heraglyph-gray leading-relaxed">
                      These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-heraglyph-white mb-2 flex items-center">
                      <Eye className="w-5 h-5 text-blue-500 mr-2" />
                      Analytics Cookies
                    </h3>
                    <p className="text-heraglyph-gray leading-relaxed">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                    </p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="text-lg font-semibold text-heraglyph-white mb-2 flex items-center">
                      <Settings className="w-5 h-5 text-yellow-500 mr-2" />
                      Functional Cookies
                    </h3>
                    <p className="text-heraglyph-gray leading-relaxed">
                      These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-heraglyph-white mb-2 flex items-center">
                      <Shield className="w-5 h-5 text-purple-500 mr-2" />
                      Marketing Cookies
                    </h3>
                    <p className="text-heraglyph-gray leading-relaxed">
                      These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Cookie Duration */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Cookie Duration</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-heraglyph-white mb-2">Session Cookies</h3>
                    <p className="text-heraglyph-gray leading-relaxed">
                      These are temporary cookies that expire when you close your browser. They help us remember your actions during a single browsing session.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heraglyph-white mb-2">Persistent Cookies</h3>
                    <p className="text-heraglyph-gray leading-relaxed">
                      These cookies remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Third Party Cookies */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Third Party Cookies</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed mb-4">
                  We may use third party services that set cookies on our website. These include:
                </p>
                <ul className="list-disc list-inside text-heraglyph-gray space-y-2 ml-4">
                  <li>Google Analytics - for website analytics and performance monitoring</li>
                  <li>Social Media Platforms - for social sharing and integration features</li>
                  <li>Advertising Networks - for targeted advertising and marketing</li>
                  <li>Customer Support Tools - for live chat and support functionality</li>
                </ul>
                <p className="text-heraglyph-gray leading-relaxed mt-4">
                  These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.
                </p>
              </motion.section>

              {/* Managing Cookies */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Managing Cookies</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed mb-4">
                  You have several options for managing cookies:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-heraglyph-white mb-2">Browser Settings</h3>
                    <p className="text-heraglyph-gray leading-relaxed">
                      Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heraglyph-white mb-2">Cookie Consent</h3>
                    <p className="text-heraglyph-gray leading-relaxed">
                      When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heraglyph-white mb-2">Opt-Out Links</h3>
                    <p className="text-heraglyph-gray leading-relaxed">
                      For third party cookies, you can often opt out directly through the third party's website or through industry opt-out pages.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Impact of Disabling Cookies */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Impact of Disabling Cookies</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  If you choose to disable cookies, some features of our website may not function properly. This may include the inability to access certain areas of the website, remember your preferences, or provide personalized content and services.
                </p>
              </motion.section>

              {/* Updates to This Policy */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Updates to This Policy</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page.
                </p>
              </motion.section>

              {/* Contact Us */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heraglyph-black/20 border border-heraglyph-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-heraglyph-accent mr-3" />
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <p className="text-heraglyph-gray leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us through our website contact form or via the contact information provided on our website.
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

export default CookiePolicy;
