import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "HERAGLYPH's AI automation solutions transformed our customer service. Their custom chatbot handles 80% of our inquiries 24/7, reducing response times from hours to seconds while maintaining high customer satisfaction.",
    name: "David Chen",
    position: "Operations Director, TechFlow Solutions"
  },
  {
    quote: "The AI-powered workflow automation HERAGLYPH implemented has revolutionized our business processes. We've seen a 65% reduction in manual tasks and our team can now focus on strategic initiatives instead of repetitive work.",
    name: "Rachel Martinez",
    position: "CEO, InnovateAI Systems"
  },
  {
    quote: "Their expertise in integrating AI chatbots with our existing systems was impressive. The intelligent automation not only improved our customer engagement but also provided valuable insights through data analytics. A game-changer for our business.",
    name: "Mark Thompson",
    position: "Head of Digital Transformation, Future Corp"
  }
];

const TestimonialsSection = () => {
  // Animation state for testimonial cards
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-cycle through testimonials for highlight effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="min-h-screen py-20 relative overflow-hidden bg-heraglyph-black">
      {/* Modern minimalist background with Egyptian-inspired elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark background base */}
        <div className="absolute inset-0 bg-heraglyph-black/95"></div>
        
        {/* Horizontal decorative lines */}
        <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/15 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/15 to-transparent"></div>
        
        {/* Subtle golden accents */}
        <div className="absolute top-40 -left-20 w-64 h-64 rounded-full bg-heraglyph-accent/5 blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-64 h-64 rounded-full bg-heraglyph-accent/5 blur-3xl"></div>
        
        {/* Modern geometric pyramid shapes */}
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
        
        {/* Additional triangular pyramid shapes */}
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
        
        {/* Clean grid lines */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-5">
          {[...Array(13)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-[0.5px] bg-heraglyph-accent/20" 
                 style={{left: `${(i/12) * 100}%`}}></div>
          ))}
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
          
          <h2 className="section-title text-heraglyph-white">
            What Clients Say
          </h2>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mt-3 mb-3 opacity-80"></div>
          {/* <div className="w-12 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mb-8 opacity-60"></div> */}
          
          <p className="section-subtitle">
            Hear from businesses we've helped transform their digital presence and brand identity.
          </p>
        </div>
        
        {/* Testimonial cards with Egyptian-inspired design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-lg border border-heraglyph-accent/20 shadow-lg shadow-heraglyph-accent/5 
                        transition-all duration-500 overflow-hidden relative
                        ${activeIndex === index ? 'scale-105 border-heraglyph-accent/40' : 'scale-100 hover:scale-102'}`}
            >
              {/* Background geometric pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M50 0L100 86.6H0L50 0Z" fill="currentColor" className="text-heraglyph-accent" />
                </svg>
              </div>
              
              {/* Golden top border accent */}
              <div className="h-1 w-full bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end"></div>
              
              <div className="p-8 flex flex-col h-full relative">
                {/* Decorative quote icon with Egyptian-inspired styling */}
                <div className="mb-4 relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-heraglyph-accent to-heraglyph-gradient-end flex items-center justify-center">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-heraglyph-black">
                      <path d="M6 10.8H0.2L4.2 0.799998H8L6 10.8ZM16 10.8H10.2L14.2 0.799998H18L16 10.8Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                
                <p className="text-heraglyph-white/90 mb-6 flex-grow leading-relaxed">
                  {testimonial.quote}
                </p>
                
                <div className="pt-4 border-t border-heraglyph-accent/10">
                  <p className="font-bold text-heraglyph-white">{testimonial.name}</p>
                  <p className="text-sm text-heraglyph-accent">{testimonial.position}</p>
                </div>
                
                {/* Bottom right decorative element */}
                <div className="absolute bottom-2 right-2 opacity-10">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 20L80 70H20L50 20Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-heraglyph-accent" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative indicators for active testimonial */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${activeIndex === index 
                ? 'bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end' 
                : 'bg-heraglyph-gray/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
