
const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-heraglyph-black to-heraglyph-dark-gray py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-heraglyph-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-heraglyph-gradient-end/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="inline-block text-heraglyph-accent text-sm uppercase tracking-wider font-medium mb-2">Our Story</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">About <span className="gradient-text">HERAGLYPH</span></h2>
              <div className="h-1 w-24 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end rounded-full mb-8"></div>
            </div>
            
            <p className="text-heraglyph-gray text-lg leading-relaxed mb-6">
              At HERAGLYPH, we transform visions into digital realities. Our name draws inspiration from the ancient Egyptian hieroglyphs – symbols that conveyed meaning through visual language, just as we translate your brand's essence into compelling digital experiences.
            </p>
            <p className="text-heraglyph-gray text-lg leading-relaxed mb-6">
              Founded on the principle that great design should be both visually stunning and functionally effective, we work closely with startups and established businesses to create comprehensive brand identities and digital solutions that stand out in today's competitive landscape.
            </p>
            <p className="text-heraglyph-gray text-lg leading-relaxed">
              Our team combines creative expertise with technical prowess to deliver end-to-end solutions – from logo design and website development to complete branding packages and digital assets. We don't just build websites; we craft digital experiences that embody your brand's unique story and values.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card p-10 rounded-xl shadow-2xl border border-heraglyph-white/10 hover:border-heraglyph-accent/20 transition-all duration-500 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-heraglyph-accent/10 rounded-full filter blur-2xl group-hover:bg-heraglyph-accent/20 transition-all duration-500"></div>
              
              <div className="grid grid-cols-2 gap-8 relative z-10">
                <div className="text-center p-6 bg-heraglyph-black/30 rounded-lg border border-heraglyph-white/5 hover:border-heraglyph-white/10 hover:shadow-lg hover:shadow-heraglyph-accent/5 transition-all duration-300">
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3">100+</h3>
                  <p className="text-heraglyph-gray font-medium">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-heraglyph-black/30 rounded-lg border border-heraglyph-white/5 hover:border-heraglyph-white/10 hover:shadow-lg hover:shadow-heraglyph-accent/5 transition-all duration-300">
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3">50+</h3>
                  <p className="text-heraglyph-gray font-medium">Satisfied Clients</p>
                </div>
                <div className="text-center p-6 bg-heraglyph-black/30 rounded-lg border border-heraglyph-white/5 hover:border-heraglyph-white/10 hover:shadow-lg hover:shadow-heraglyph-accent/5 transition-all duration-300">
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3">5+</h3>
                  <p className="text-heraglyph-gray font-medium">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-heraglyph-black/30 rounded-lg border border-heraglyph-white/5 hover:border-heraglyph-white/10 hover:shadow-lg hover:shadow-heraglyph-accent/5 transition-all duration-300">
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3">24/7</h3>
                  <p className="text-heraglyph-gray font-medium">Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
