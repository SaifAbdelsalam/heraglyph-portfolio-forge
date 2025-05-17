
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
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
    }, 1500);
  };

  return (
    <section id="contact" className="bg-heraglyph-black py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to elevate your brand? Contact us today to discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-heraglyph-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-heraglyph-dark-gray border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-white"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-heraglyph-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-heraglyph-dark-gray border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-heraglyph-white mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-heraglyph-dark-gray border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-heraglyph-white mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-heraglyph-dark-gray border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-white"
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
                <label htmlFor="message" className="block text-heraglyph-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-heraglyph-dark-gray border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-white"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-heraglyph-white text-heraglyph-black py-3 px-6 rounded-md font-medium hover:bg-heraglyph-gray transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {submitMessage && (
                <div className="mt-4 p-3 bg-green-800/30 border border-green-600 text-green-200 rounded-md">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          
          <div className="lg:pl-12">
            <div className="glass-card p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-heraglyph-white mr-4 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-heraglyph-white">Email</p>
                    <a href="mailto:contact@heraglyph.com" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">
                      contact@heraglyph.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-heraglyph-white mr-4 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-heraglyph-white">Phone</p>
                    <a href="tel:+11234567890" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-heraglyph-white mr-4 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-heraglyph-white">Location</p>
                    <p className="text-heraglyph-gray">
                      123 Creative Avenue<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-heraglyph-white mb-4">Business Hours</h4>
                <p className="text-heraglyph-gray mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-heraglyph-gray">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
