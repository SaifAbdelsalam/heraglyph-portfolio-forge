import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^\+?[0-9]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only allow numbers and + symbol
      const sanitizedValue = value.replace(/[^0-9+]/g, '');
      // Ensure + only appears at the start
      const formattedValue = sanitizedValue.replace(/\+/g, (match, offset) => offset === 0 ? match : '');
      
      setFormData(prevState => ({
        ...prevState,
        [name]: formattedValue
      }));
      
      // Clear error when field is empty
      if (!formattedValue) {
        setPhoneError('');
      }
    } else if (name === 'email') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
      setEmailError('');
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Validate phone number before submission
    if (!validatePhoneNumber(formData.phone)) {
      setPhoneError('Please enter a valid phone number (min 10 digits, + allowed at start)');
      return;
    }

    setIsSubmitting(true);
    setIsError(false);
    
    // EmailJS configuration
    const serviceId = 'service_8tjf30b';
    const templateId = 'template_hle784s';
    const publicKey = 'T_MaEfPL4Kf782Lc-';
    
    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setIsSubmitting(false);
          setSubmitMessage('Thank you for your message! We will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          
          // Clear the success message after 5 seconds
          setTimeout(() => setSubmitMessage(''), 5000);
        }, (error) => {
          console.error('Failed to send email:', error.text);
          setIsSubmitting(false);
          setIsError(true);
          setSubmitMessage('Failed to send message. Please try again or contact us directly via email.');
          
          // Clear the error message after 5 seconds
          setTimeout(() => setSubmitMessage(''), 5000);
        });
    }
  };
  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden bg-heraglyph-black">
      {/* Modern minimalist background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark background base */}
        <div className="absolute inset-0 bg-heraglyph-black/95"></div>
        
        {/* Minimalist geometric patterns */}
        {/* Horizontal lines */}
        <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/15 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/15 to-transparent"></div>
        
        {/* Subtle golden accents */}
        <div className="absolute top-40 -left-20 w-64 h-64 rounded-full bg-heraglyph-accent/5 blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-64 h-64 rounded-full bg-heraglyph-accent/5 blur-3xl"></div>
        
        {/* Modern geometric shapes - subtle triangles and pyramids */}
        <div className="absolute bottom-10 right-10 opacity-10">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 20L280 250H20L150 20Z" stroke="currentColor" strokeWidth="1" className="text-heraglyph-accent" fill="none" />
            <path d="M150 80L230 230H70L150 80Z" stroke="currentColor" strokeWidth="0.5" className="text-heraglyph-accent" fill="none" />
          </svg>
        </div>
        
        <div className="absolute top-10 left-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20L180 170H20L100 20Z" stroke="currentColor" strokeWidth="1" className="text-heraglyph-accent" fill="none" />
          </svg>
        </div>
        
        {/* Additional pyramid shapes */}
        <div className="absolute top-1/3 right-1/4 opacity-15 transform rotate-12">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10L90 90H10L50 10Z" stroke="currentColor" strokeWidth="0.8" className="text-heraglyph-accent" fill="none" />
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 left-1/3 opacity-10 transform -rotate-15">
          <svg width="160" height="160" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L100 86.6H0L50 0Z" fill="currentColor" className="text-heraglyph-accent" opacity="0.05" />
            <path d="M50 0L100 86.6H0L50 0Z" stroke="currentColor" strokeWidth="0.6" className="text-heraglyph-accent" fill="none" />
          </svg>
        </div>
        
        <div className="absolute top-2/3 right-1/2 opacity-8 transform rotate-45">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20L80 80H20L50 20Z" stroke="currentColor" strokeWidth="0.5" className="text-heraglyph-accent" fill="none" />
            <path d="M50 35L65 70H35L50 35Z" fill="currentColor" className="text-heraglyph-accent" opacity="0.1" />
          </svg>
        </div>
        
        <div className="absolute top-1/4 right-1/5 opacity-12">
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L85 85H15L50 15Z" stroke="currentColor" strokeWidth="0.7" className="text-heraglyph-accent" fill="none" />
          </svg>
        </div>
        
        {/* Clean grid lines */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-5">
          {[...Array(13)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-[0.5px] bg-heraglyph-accent/20" 
                 style={{left: `${(i/12) * 100}%`}}></div>
          ))}
        </div>
        
        {/* Abstract minimal circle */}
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-heraglyph-accent/10 opacity-20"></div>
        
        {/* More pyramid-inspired shapes */}
        <div className="absolute bottom-1/3 right-1/6 opacity-8">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20L50 70L10 70L30 20Z" stroke="currentColor" strokeWidth="0.5" className="text-heraglyph-accent" fill="none" />
            <path d="M70 20L90 70L50 70L70 20Z" stroke="currentColor" strokeWidth="0.5" className="text-heraglyph-accent" fill="none" />
          </svg>
        </div>
        
        <div className="absolute top-2/5 left-1/4 opacity-10 transform rotate-30">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 20L110 120H10L60 20Z" stroke="currentColor" strokeWidth="0.7" className="text-heraglyph-accent-light" fill="none" />
            <path d="M60 40L90 100H30L60 40Z" fill="currentColor" className="text-heraglyph-accent" opacity="0.05" />
          </svg>
        </div>
        
        {/* Overlapping triangular shapes */}
        <div className="absolute bottom-10 left-1/6 opacity-10">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 30L150 130H30L90 30Z" stroke="currentColor" strokeWidth="0.6" className="text-heraglyph-accent" fill="none" />
            <path d="M60 70L90 130H30L60 70Z" stroke="currentColor" strokeWidth="0.4" className="text-heraglyph-accent" fill="none" />
            <path d="M120 70L150 130H90L120 70Z" stroke="currentColor" strokeWidth="0.4" className="text-heraglyph-accent" fill="none" />
          </svg>
        </div>
        
        {/* Golden light gradients */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-heraglyph-accent/5 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-heraglyph-gradient-end/5 to-transparent opacity-30"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 relative">
          {/* Modern minimal decoration */}
          {/* <div className="relative mb-6">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-[1px] bg-heraglyph-accent/50"></div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-5 h-[1px] bg-heraglyph-accent"></div>
          </div> */}
          
          <h2 className="section-title itext-heraglyph-white">
            Get In Touch
          </h2>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mt-3 mb-3 opacity-80"></div>
          <div className="w-12 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mb-8 opacity-60"></div>
          
          <p className="section-subtitle">
            Ready to elevate your brand? Contact us today to discuss how we can help bring your vision to life.
          </p>
        </div>

        {/* Elegant free consultation message */}
        <div className="max-w-4xl mx-auto mb-12 flex items-center justify-center">
          <div className="py-3 px-4 border-l-2 border-heraglyph-accent flex items-center gap-4">
            <div className="text-2xl text-heraglyph-accent">
              𓂀
            </div>
            <div>
              <span className="font-medium text-heraglyph-white">Book your first consultation for FREE —</span>
              <span className="ml-1 text-heraglyph-gray">Schedule your complimentary strategy session today.</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-lg border border-heraglyph-accent/20 shadow-lg shadow-heraglyph-accent/5">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-heraglyph-white mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-heraglyph-dark-gray/80 border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-accent focus:ring-1 focus:ring-heraglyph-accent/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-heraglyph-white mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 bg-heraglyph-dark-gray/80 border ${
                      emailError ? 'border-red-500' : 'border-heraglyph-gray/30'
                    } rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-accent focus:ring-1 focus:ring-heraglyph-accent/50 transition-all`}
                    placeholder="your@email.com"
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-red-400 min-h-[20px]">
                      {emailError}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-heraglyph-white mb-2 font-medium">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 bg-heraglyph-dark-gray/80 border ${
                      phoneError ? 'border-red-500' : 'border-heraglyph-gray/30'
                    } rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-accent focus:ring-1 focus:ring-heraglyph-accent/50 transition-all`}
                    placeholder="+1234567890"
                  />
                  {phoneError && (
                    <p className="mt-2 text-sm text-red-400 min-h-[20px]">
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-heraglyph-white mb-2 font-medium">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-heraglyph-dark-gray/80 border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-accent focus:ring-1 focus:ring-heraglyph-accent/50 transition-all appearance-none custom-select"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239CA3AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem"
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Email Services">Email Services</option>
                  <option value="Business Cards">Business Cards</option>
                  <option value="Letterheads">Letterheads & Stationery</option>
                  <option value="Full Branding Package">Full Branding Package</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-heraglyph-white mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-heraglyph-dark-gray/80 border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-accent focus:ring-1 focus:ring-heraglyph-accent/50 transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-black py-3 px-6 rounded-md font-semibold hover:from-heraglyph-accent-dark hover:to-heraglyph-accent transition-all duration-300 disabled:opacity-70 group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-heraglyph-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <span className="absolute right-0 top-0 h-full w-0 bg-white/20 transform skew-x-12 group-hover:animate-shimmer"></span>
                    </>
                  )}
                </button>
              </div>
              
              {submitMessage && (
                <div className={`mt-4 p-4 ${isError ? 'bg-red-800/30 border border-red-600 text-red-200' : 'bg-green-800/30 border border-green-600 text-green-200'} rounded-md animate-fade-in flex items-center`}>
                  {isError ? (
                    <svg className="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  )}
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div className="lg:pl-12">
            <div className="glass-card p-8 rounded-lg border border-heraglyph-accent/20 shadow-lg shadow-heraglyph-accent/5 h-full bg-gradient-to-br from-heraglyph-dark-gray/90 to-heraglyph-black/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M50 0L100 86.6H0L50 0Z" fill="currentColor" className="text-heraglyph-accent" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-8 relative">
                <span className="gradient-text">Contact Information</span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mt-2"></div>
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="rounded-full bg-gradient-to-br from-heraglyph-accent to-heraglyph-gradient-end p-2 mr-4 mt-1">
                    <Mail className="text-heraglyph-black" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-heraglyph-white">Email</p>
                    <a href="mailto:info@heraglyphs.com" className="text-heraglyph-gray hover:text-heraglyph-accent transition-colors">
                      info@heraglyphs.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="rounded-full bg-gradient-to-br from-heraglyph-accent to-heraglyph-gradient-end p-2 mr-4 mt-1">
                    <Phone className="text-heraglyph-black" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-heraglyph-white">Phone</p>
                    <a href="tel:+306948677416" className="text-heraglyph-gray hover:text-heraglyph-accent transition-colors">
                      +30 (694) 86 77416
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-heraglyph-gray/20">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-gradient-to-br from-heraglyph-accent to-heraglyph-gradient-end p-2">
                    <svg className="w-4 h-4 text-heraglyph-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-heraglyph-white gradient-text">Available 24/7</h4>
                    <p className="text-heraglyph-gray">We're here to help anytime</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M50 20L80 70H20L50 20Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-heraglyph-accent" />
                  <path d="M50 0L90 80H10L50 0Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-heraglyph-accent-light" />
                  <path d="M50 40L65 65H35L50 40Z" fill="currentColor" className="text-heraglyph-accent" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS animations are defined in index.css */}
    </section>
  );
};

export default ContactSection;
