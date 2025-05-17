
const AboutSection = () => {
  return (
    <section id="about" className="bg-heraglyph-dark-gray py-20">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="section-title text-left">About HERAGLYPH</h2>
            <p className="text-heraglyph-gray mb-6">
              At HERAGLYPH, we transform visions into digital realities. Our name draws inspiration from the ancient Egyptian hieroglyphs – symbols that conveyed meaning through visual language, just as we translate your brand's essence into compelling digital experiences.
            </p>
            <p className="text-heraglyph-gray mb-6">
              Founded on the principle that great design should be both visually stunning and functionally effective, we work closely with startups and established businesses to create comprehensive brand identities and digital solutions that stand out in today's competitive landscape.
            </p>
            <p className="text-heraglyph-gray">
              Our team combines creative expertise with technical prowess to deliver end-to-end solutions – from logo design and website development to complete branding packages and digital assets. We don't just build websites; we craft digital experiences that embody your brand's unique story and values.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-heraglyph-white mb-2">100+</h3>
                  <p className="text-heraglyph-gray">Projects Completed</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-heraglyph-white mb-2">50+</h3>
                  <p className="text-heraglyph-gray">Satisfied Clients</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-heraglyph-white mb-2">5+</h3>
                  <p className="text-heraglyph-gray">Years Experience</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-heraglyph-white mb-2">24/7</h3>
                  <p className="text-heraglyph-gray">Customer Support</p>
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
