import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address');
      return;
    }

    setNewsletterError('');
    setIsSubscribing(true);

    // Simulate newsletter subscription
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscriptionSuccess(true);
      setNewsletterEmail('');
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubscriptionSuccess(false), 5000);
    }, 1500);
  };
  
  // Hide footer on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth <= 640) {
    return null;
  }

  return (
    <footer className="bg-gradient-to-b from-heraglyph-black to-heraglyph-dark-gray py-16 relative">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-80 bg-heraglyph-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-heraglyph-gradient-end/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>            
            <div className="flex items-center mb-4">
              <a href="/" className="group flex items-center">
                <img 
                  src="./uploads/872dcae6-04ca-4497-a5fd-4c14b83f6a66.png" 
                  alt="HERAGLYPH Logo" 
                  className="h-12 mr-3 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-xl font-bold font-heading transition-colors duration-300 group-hover:text-heraglyph-accent">
                  <span className="gradient-text">HERA</span>GLYPH
                </span>
              </a>
            </div>
            <p className="text-heraglyph-gray mb-6">
              Transforming visions into digital realities with comprehensive branding solutions that elevate your business.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-heraglyph-white mb-5 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-heraglyph-accent to-transparent"></span>
            </h3>
            <ul className="space-y-3 text-heraglyph-gray">
              <li><div className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center cursor-default">
                <span className="mr-2 text-xs">→</span>AI Chatbots & Automation
              </div></li>
              <li><div className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center cursor-default">
                <span className="mr-2 text-xs">→</span>Cold Email AI Systems
              </div></li>
              <li><div className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center cursor-default">
                <span className="mr-2 text-xs">→</span>AI-Driven Process Optimization
              </div></li>
              <li><div className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center cursor-default">
                <span className="mr-2 text-xs">→</span>AI Security & Compliance
              </div></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-heraglyph-white mb-5 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-heraglyph-accent to-transparent"></span>
            </h3>
            <ul className="space-y-3 text-heraglyph-gray">
              <li><a href="#about" className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center">
                <span className="mr-2 text-xs">→</span>About Us
              </a></li>
              <li><a href="#testimonials" className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center">
                <span className="mr-2 text-xs">→</span>Testimonials
              </a></li>
              <li><a href="#contact" className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center">
                <span className="mr-2 text-xs">→</span>Contact
              </a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold text-heraglyph-white mb-5 relative inline-block">
              Connect
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-heraglyph-accent to-transparent"></span>
            </h3>
            <div className="flex space-x-5 mb-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61576319677804&sk=about_contact_and_basic_info" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-heraglyph-dark-gray/90 text-heraglyph-gray hover:text-heraglyph-accent p-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-heraglyph-accent/10"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com/heraglyph/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-heraglyph-dark-gray/90 text-heraglyph-gray hover:text-heraglyph-accent p-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-heraglyph-accent/10"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.666.25 1.23.597 1.77 1.139.54.54.889 1.104 1.139 1.76.247.636.416 1.363.465 2.428.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.139 1.77c-.54.54-1.104.889-1.76 1.139-.636.247-1.363.416-2.428.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.77-1.139 4.902 4.902 0 01-1.139-1.77c-.247-.636-.416-1.363-.465-2.428C2.012 14.97 2 14.63 2 11.85c0-2.778.01-3.118.058-4.185.049-1.064.218-1.791.465-2.427.25-.66.599-1.225 1.139-1.77.54-.54 1.104-.89 1.77-1.139.636-.247 1.363-.416 2.428-.465C9.09 2.013 9.43 2 12.108 2h.207zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="border border-heraglyph-white/10 p-4 rounded-lg bg-heraglyph-dark-gray/40 backdrop-blur-sm">
              <h4 className="text-sm font-medium mb-2 text-heraglyph-white">Sign up for our newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input 
                    type="email" 
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      setNewsletterError('');
                    }}
                    placeholder="Your email" 
                    className={`bg-heraglyph-black/50 text-sm border ${
                      newsletterError ? 'border-red-500' : 'border-heraglyph-white/10'
                    } rounded-l-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-heraglyph-accent focus:border-heraglyph-accent text-heraglyph-white`}
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-black rounded-r-md px-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-sm text-red-400">{newsletterError}</p>
                )}
                {subscriptionSuccess && (
                  <p className="text-sm text-green-400">Successfully subscribed to our newsletter!</p>
                )}
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-heraglyph-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-heraglyph-gray text-sm mb-4 md:mb-0">
            &copy; {currentYear} <span className="gradient-text font-medium">HERAGLYPH</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-heraglyph-gray">
            <a 
              href="/privacy-policy" 
              className="hover:text-heraglyph-accent transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="hover:text-heraglyph-accent transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <a 
              href="/cookie-policy" 
              className="hover:text-heraglyph-accent transition-colors cursor-pointer"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;