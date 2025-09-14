import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
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
          <div>            <div className="flex items-center mb-4">
              <a href="#" className="group flex items-center">
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
                href="https://www.instagram.com/heraglyph/?fbclid=IwY2xjawKbJ1NleHRuA2FlbQIxMABicmlkETFROEd6bVdJZEx5QnZmSjNQAR5bwTT4uUm_5wwqDGW2aXOm8g3Y7dWfdSYh_dlgPUr9VEZNlj24N9oDFA1KXA_aem_UlWCSJ8uk_AAt8nqqZiYOw#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-heraglyph-dark-gray/90 text-heraglyph-gray hover:text-heraglyph-accent p-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-heraglyph-accent/10"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.666.25 1.23.597 1.77 1.139.54.54.889 1.104 1.139 1.76.247.636.416 1.363.465 2.428.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.139 1.77c-.54.54-1.104.889-1.76 1.139-.636.247-1.363.416-2.428.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.77-1.139 4.902 4.902 0 01-1.139-1.77c-.247-.636-.416-1.363-.465-2.428C2.012 14.97 2 14.63 2 11.85c0-2.778.01-3.118.058-4.185.049-1.064.218-1.791.465-2.427.25-.66.599-1.225 1.139-1.77.54-.54 1.104-.89 1.77-1.139.636-.247 1.363-.416 2.428-.465C9.09 2.013 9.43 2 12.108 2h.207zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" clipRule="evenodd" />
                </svg>
              </a>
              {/* <a href="#" className="bg-heraglyph-dark-gray/90 text-heraglyph-gray hover:text-heraglyph-accent p-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-heraglyph-accent/10">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a> */}
              {/* <a href="#" className="bg-heraglyph-dark-gray/90 text-heraglyph-gray hover:text-heraglyph-accent p-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-heraglyph-accent/10">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a> */}
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
        
        <div className="border-t border-heraglyph-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-heraglyph-gray text-sm mb-4 md:mb-0">
            &copy; {currentYear} <span className="gradient-text font-medium">HERAGLYPH</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-heraglyph-gray">
            <button 
              onClick={() => setShowPrivacyPolicy(true)} 
              className="hover:text-heraglyph-accent transition-colors cursor-pointer bg-transparent border-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowTermsOfService(true)} 
              className="hover:text-heraglyph-accent transition-colors cursor-pointer bg-transparent border-none"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setShowCookiePolicy(true)} 
              className="hover:text-heraglyph-accent transition-colors cursor-pointer bg-transparent border-none"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-heraglyph-black/80 backdrop-blur-sm p-4">
          <div className="bg-heraglyph-dark-gray border border-heraglyph-accent/20 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto relative animate-fade-in">
            {/* Egyptian-inspired decorative element at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end"></div>
            {/* Close button */}
            <button 
              onClick={() => setShowPrivacyPolicy(false)}
              className="absolute top-4 right-4 text-heraglyph-gray hover:text-heraglyph-accent transition-colors"
              aria-label="Close privacy policy"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-8">
              <div className="flex items-center mb-6">
                {/* Small pyramid icon */}
                <div className="mr-3 text-heraglyph-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 20H2L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">
                  <span className="text-heraglyph-accent">Privacy</span>
                  <span className="text-heraglyph-white"> Policy</span>
                </h2>
              </div>
                <div className="pb-2 border-b border-heraglyph-accent/10 mb-5">
                  <p><strong className="text-heraglyph-white">Effective Date:</strong> May 20, 2025</p>
                </div>

              
              
              <div className="space-y-4 text-heraglyph-gray leading-relaxed">
                <p>
                  We recognize the importance of information privacy. This document describes the personal information we collect when you use our website. We hope this information helps you make informed decisions regarding the personal information you provide to us.
                </p>

                <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-2">Public Information</h3>
                <p>
                  If you browse the website without registering, no information about you is published on the site. When you write or edit materials on the site, you publish every word you write, and this information will be stored and displayed to other visitors. This applies to articles, helpful tips, materials, personal user pages, comments, etc.
                </p>

                <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-2">Visitor Identification</h3>
                <p>
                  You can register on the site or choose not to. If you register, you will be identified by your username. This can be your real name (if you wish) or a pseudonym—the name you provided when creating your account. Other registered visitors will be able to view the information you provided during registration.
                </p>

                <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-2">Email</h3>
                <p>
                  The email address you provide during registration is not visible to other visitors. We may retain email messages and other correspondence sent by users to handle inquiries, respond to requests, and improve our services.
                </p>

                <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-2">Cookies</h3>
                <p>
                  When you visit the site, one or more cookies are sent to your computer. A cookie is a small file containing a set of characters that allows us to identify your browser. When you register on the site, additional cookies may be sent to your computer to avoid re-entering your username (and possibly password) on subsequent visits. You can delete them after your session if you use a public computer and do not wish to reveal your pseudonym to subsequent users (in this case, you should also clear your browser cache). We use cookies to enhance the quality of our services by saving user settings and tracking trends in user activities, such as search queries. Most browsers are initially set to accept cookies; however, you can completely prohibit the use of cookies or configure notifications about their sending. However, without cookies, some site features may not function correctly.
                </p>

                <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-2">Logging</h3>
                <p>
                  Each time you visit the site, our servers automatically record information that your browser sends when visiting web pages. This information typically includes the requested web page, your computer's IP address, browser type, browser language settings, date and time of the request, and one or more cookies that allow us to accurately identify your browser.
                </p>

                <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-2">Links</h3>
                <p>
                  On this site, links may be in a format that allows us to track whether visitors use them. This information is used to improve the quality of our advertising.
                </p>

                <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-2">Changes to the Privacy Policy</h3>
                <p>
                  Please note that the privacy policy may change periodically. All changes to the privacy policy are published on this page.
                </p>
              </div>

                            <div className="mt-8 flex justify-center opacity-30">
                <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L60 17H40L50 0Z" fill="currentColor" className="text-heraglyph-accent" />
                  <path d="M30 5L40 22H20L30 5Z" fill="currentColor" className="text-heraglyph-accent" />
                  <path d="M70 5L80 22H60L70 5Z" fill="currentColor" className="text-heraglyph-accent" />
                </svg>
              </div>

              <div className="mt-6 flex justify-end">
                <button 
                onClick={() => setShowPrivacyPolicy(false)}
                className="px-6 py-2 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-black rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                Close
                </button>
              </div>
              </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsOfService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-heraglyph-black/80 backdrop-blur-sm p-4">
          <div className="bg-heraglyph-dark-gray border border-heraglyph-accent/20 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto relative animate-fade-in">
            {/* Egyptian-inspired decorative element at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end"></div>
            
            {/* Close button */}
            <button 
              onClick={() => setShowTermsOfService(false)}
              className="absolute top-4 right-4 text-heraglyph-gray hover:text-heraglyph-accent transition-colors"
              aria-label="Close terms of service"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-8">
              <div className="flex items-center mb-6">
                {/* Small pyramid icon */}
                <div className="mr-3 text-heraglyph-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 20H2L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">
                  <span className="text-heraglyph-accent">Terms of</span>
                  <span className="text-heraglyph-white"> Service</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-heraglyph-gray leading-relaxed">
                 <div className="pb-2 border-b border-heraglyph-accent/10">
                  <p><strong className="text-heraglyph-white">Effective Date:</strong> May 20, 2025</p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">1. Acceptance of Terms</h3>
                  <p className="mb-3">
                    By accessing or using HERAGLYPH's website, services, or digital products, you agree to be bound by these Terms of Service ("Terms"). 
                    If you do not agree to these Terms, you must not use our services.
                  </p>
                  <p>
                    HERAGLYPH reserves the right to update or modify these Terms at any time without prior notice. 
                    Your continued use of the services constitutes acceptance of the revised Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">2. Services Provided</h3>
                  <p className="mb-3">
                    HERAGLYPH provides custom branding and digital design solutions, including but not limited to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Website design and development</li>
                    <li>Logo and brand identity design</li>
                    <li>Custom email domains and signatures</li>
                    <li>Business cards and stationery</li>
                    <li>Digital brand asset packages</li>
                  </ul>
                  <p className="mt-3">
                    We work with clients to create tailored deliverables based on the scope defined in the project agreement or proposal.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">3. Client Responsibilities</h3>
                  <p className="mb-3">
                    Clients are responsible for:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Providing accurate and timely information and materials required for project execution</li>
                    <li>Reviewing and approving drafts and deliverables within specified timelines</li>
                    <li>Ensuring they have rights or permissions for any content they provide</li>
                  </ul>
                  <p className="mt-3">
                    HERAGLYPH is not liable for delays caused by incomplete or late submissions from the client.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">4. Payments & Billing</h3>
                  <p className="mb-3">
                    All fees are clearly stated in project proposals or invoices. Payment terms are as follows unless otherwise agreed:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>A deposit (typically 50%) is due upfront before any work begins</li>
                    <li>The remaining balance is due upon project completion or delivery of final assets</li>
                    <li>Late payments may incur a service fee of 2% per month</li>
                  </ul>
                  <p className="mt-3">
                    HERAGLYPH reserves the right to withhold final deliverables until full payment is received.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">5. Intellectual Property</h3>
                  <p className="mb-3">
                    All materials created by HERAGLYPH remain our intellectual property until full payment is made. Upon payment:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Clients receive full rights to use, reproduce, and distribute the final deliverables</li>
                    <li>HERAGLYPH retains the right to showcase work in portfolios, marketing, and social media</li>
                  </ul>
                  <p className="mt-3">
                    Any usage outside the scope of the original agreement (e.g., resale, redistribution) requires written consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">6. Cancellations & Refunds</h3>
                  <p className="mb-3">
                    Clients may cancel a project by written notice at any time. However:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Deposits are non-refundable once work has commenced</li>
                    <li>If cancellation occurs mid-project, charges will be applied for work completed up to the cancellation date</li>
                  </ul>
                  <p className="mt-3">
                    HERAGLYPH reserves the right to terminate any project in the event of unprofessional behavior, breach of terms, or non-payment.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">7. Limitation of Liability</h3>
                  <p className="mb-3">
                    HERAGLYPH is not liable for:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Any indirect, incidental, or consequential damages arising from the use of our services</li>
                    <li>Any issues related to third-party services (e.g., hosting providers, domain registrars)</li>
                  </ul>
                  <p className="mt-3">
                    Our total liability will not exceed the total amount paid by the client for the specific project.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">8. User Conduct</h3>
                  <p className="mb-3">
                    You agree not to use the HERAGLYPH website or services to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Upload or distribute harmful, illegal, or infringing content</li>
                    <li>Interfere with the functionality or security of our website or systems</li>
                    <li>Violate applicable laws, regulations, or these Terms</li>
                  </ul>
                  <p className="mt-3">
                    HERAGLYPH reserves the right to suspend or terminate access for violations.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">9. Third-Party Tools & Integrations</h3>
                  <p className="mb-3">
                    HERAGLYPH may recommend or integrate third-party tools (e.g., email services, analytics, fonts). We are not responsible for these services' availability, performance, or terms.
                  </p>
                  <p>
                    You are responsible for complying with third-party terms when applicable.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">10. Privacy Policy</h3>
                  <p>
                    Your use of HERAGLYPH's website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">11. Governing Law</h3>
                  <p>
                    These Terms are governed by the laws of the Hellenic Republic (Greece), without regard to conflict of law principles. Any disputes shall be resolved in the courts of Athens, Greece.
                  </p>
                </div>

                <div>
                  <h3 className="text-heraglyph-white text-lg font-medium mt-6 mb-3">12. Contact</h3>
                                    <p>
                    For more information, contact us at <a href="mailto:info@heraglyphs.com" className="text-heraglyph-accent hover:underline">info@heraglyphs.com</a>.
                  </p>
                  {/* <p className="mt-2">
                    <strong className="text-heraglyph-white">HERAGLYPH</strong><br />
                    Email: <a href="mailto:info@heraglyphs.com" className="text-heraglyph-accent hover:underline">info@heraglyphs.com</a><br />
                    Website: <a href="https://heraglyphs.com" target="_blank" rel="noopener noreferrer" className="text-heraglyph-accent hover:underline">https://heraglyphs.com</a>
                  </p> */}
                </div>
              </div>

              {/* Egyptian-inspired decorative elements at bottom */}
              <div className="mt-8 flex justify-center opacity-30">
                <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L60 17H40L50 0Z" fill="currentColor" className="text-heraglyph-accent" />
                  <path d="M30 5L40 22H20L30 5Z" fill="currentColor" className="text-heraglyph-accent" />
                  <path d="M70 5L80 22H60L70 5Z" fill="currentColor" className="text-heraglyph-accent" />
                </svg>
              </div>

              <div className="mt-6 flex justify-end">
                <button 
                onClick={() => setShowTermsOfService(false)}
                className="px-6 py-2 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-black rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                Close
                </button>
              </div>
            </div>
            </div>

          </div>
      )}

      {/* Cookie Policy Modal */}
      {showCookiePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-heraglyph-black/80 backdrop-blur-sm p-4">
          <div className="bg-heraglyph-dark-gray border border-heraglyph-accent/20 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto relative animate-fade-in">
            {/* Egyptian-inspired decorative element at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end"></div>
            
            {/* Close button */}
            <button 
              onClick={() => setShowCookiePolicy(false)}
              className="absolute top-4 right-4 text-heraglyph-gray hover:text-heraglyph-accent transition-colors"
              aria-label="Close cookie policy"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-8">
              <div className="flex items-center mb-6">
                {/* Small pyramid icon */}
                <div className="mr-3 text-heraglyph-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 20H2L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">
                  <span className="text-heraglyph-accent">Cookie</span>
                  <span className="text-heraglyph-white"> Policy</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-heraglyph-gray leading-relaxed">
                <div className="pb-2 border-b border-heraglyph-accent/10">
                  <p><strong className="text-heraglyph-white">Effective Date:</strong> May 20, 2025</p>
                </div>

                <p className="pt-2">
                  HERAGLYPH uses cookies to enhance your browsing experience, analyze site traffic, and improve our services.
                </p>

                <div className="mt-6">
                  <h3 className="text-heraglyph-white text-lg font-medium mb-3">What Are Cookies?</h3>
                  <p>
                    Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how you interact with our site.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-heraglyph-white text-lg font-medium mb-3">Types of Cookies We Use:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="text-heraglyph-accent mr-2 mt-1">•</div>
                      <div>
                        <span className="text-heraglyph-white">Essential Cookies:</span> Required for basic site functionality.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-heraglyph-accent mr-2 mt-1">•</div>
                      <div>
                        <span className="text-heraglyph-white">Performance Cookies:</span> Help us analyze website traffic and usage patterns.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-heraglyph-accent mr-2 mt-1">•</div>
                      <div>
                        <span className="text-heraglyph-white">Functional Cookies:</span> Remember your preferences and enhance your experience.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-heraglyph-accent mr-2 mt-1">•</div>
                      <div>
                        <span className="text-heraglyph-white">Third-Party Cookies:</span> Used by services like Google Analytics or embedded content.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-heraglyph-white text-lg font-medium mb-3">Managing Cookies</h3>
                  <p>
                    You can control or delete cookies through your browser settings. Disabling cookies may affect site functionality.
                  </p>
                </div>

                <div className="mt-6">
                  <p>
                    For more information, contact us at <a href="mailto:info@heraglyphs.com" className="text-heraglyph-accent hover:underline">info@heraglyphs.com</a>.
                  </p>
                </div>
              </div>

              {/* Egyptian-inspired decorative elements */}
              <div className="mt-8 flex justify-center opacity-30">
                <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L60 17H40L50 0Z" fill="currentColor" className="text-heraglyph-accent" />
                  <path d="M30 5L40 22H20L30 5Z" fill="currentColor" className="text-heraglyph-accent" />
                  <path d="M70 5L80 22H60L70 5Z" fill="currentColor" className="text-heraglyph-accent" />
                </svg>
              </div>

              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setShowCookiePolicy(false)}
                  className="px-6 py-2 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-black rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

