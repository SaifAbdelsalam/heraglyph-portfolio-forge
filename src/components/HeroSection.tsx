
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-heraglyph-black">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full text-center mb-10">
            <div className="opacity-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight mb-6">
                YOUR VISION,<br />OUR CODE
              </h1>
              <p className="text-heraglyph-gray text-lg md:text-xl mb-8 mx-auto max-w-lg">
                We help companies build their startup portfolio or upgrade their existing brand identity with comprehensive design solutions.
              </p>
            </div>
            
            <div className="opacity-0 animate-fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-heraglyph-white text-heraglyph-black px-6 py-3 rounded-md font-medium text-center hover:bg-heraglyph-gray transition-colors"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="border border-heraglyph-white text-heraglyph-white px-6 py-3 rounded-md font-medium text-center hover:bg-heraglyph-white/10 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="flex justify-center w-full">
            <div className="opacity-0 animate-fade-in-delayed-more">
              <div className="eye-animate">
                <img 
                  src="/lovable-uploads/872dcae6-04ca-4497-a5fd-4c14b83f6a66.png" 
                  alt="HERAGLYPH Logo" 
                  className="w-full max-w-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-heraglyph-gray hover:text-heraglyph-white">
          <ArrowDown size={32} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
