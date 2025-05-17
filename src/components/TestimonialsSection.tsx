
const testimonials = [
  {
    quote: "HERAGLYPH transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their attention to detail and creativity exceeded our expectations.",
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc."
  },
  {
    quote: "The team at HERAGLYPH created an incredible brand identity for our startup. From logo to website to business cards, everything works together seamlessly and has helped us establish a professional presence in our industry.",
    name: "Michael Chen",
    position: "Founder, Novus Solutions"
  },
  {
    quote: "Working with HERAGLYPH was effortless. They took the time to understand our vision and translated it into a beautiful website that converts visitors into customers. The ROI has been fantastic.",
    name: "Amanda Torres",
    position: "Marketing Director, Elevate Group"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-heraglyph-dark-gray py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Hear from businesses we've helped transform their digital presence and brand identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg flex flex-col h-full"
            >
              <div className="mb-4 text-3xl text-heraglyph-white">"</div>
              <p className="italic text-heraglyph-gray mb-6 flex-grow">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-bold text-heraglyph-white">{testimonial.name}</p>
                <p className="text-sm text-heraglyph-gray">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
