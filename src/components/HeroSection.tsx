
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-heraglyph-black">      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{ backgroundImage: 'url("./lovable-uploads/pyramid-bg.jpg")' }}>
        </div>
        <div className="absolute inset-0 bg-heraglyph-black/60"></div>
        {/* Additional background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heraglyph-accent via-heraglyph-accent/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-heraglyph-accent/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-heraglyph-gradient-end/10 rounded-full filter blur-3xl opacity-20"></div>
      </div><div className="section-container relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Logo placed at the top */}
          <div className="flex justify-center w-full mb-8">
        <div className="opacity-0 animate-scale-up-delayed">          <div className="animate-float">
            <img 
          src="./lovable-uploads/872dcae6-04ca-4497-a5fd-4c14b83f6a66.png" 
          alt="HERAGLYPH Logo" 
          className="w-full max-w-2xl mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
          </div>
          
          <div className="w-full text-center">            <div className="opacity-0 animate-fade-in">
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight mb-6">
            YOUR <span className="gradient-text">VISION</span>,<br />OUR <span className="gradient-text">CODE</span>
          </h1> */}
          {/* <p className="text-heraglyph-gray text-lg md:text-xl mb-8 mx-auto max-w-xl">
            We help companies build their startup portfolio or upgrade their existing brand identity with comprehensive design solutions that stand out.
          </p> */}
        </div>
        
        <div className="opacity-0 animate-fade-in-delayed mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-3">
            Websites That <span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="text-heraglyph-gray text-base md:text-lg mx-auto max-w-2xl mb-6">
            Custom designs, logos, and email domains to make your brand stand out—fast and affordable.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="relative overflow-hidden bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-7 py-3.5 rounded-md font-medium text-center group"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </a>
          <a 
            href="#services" 
            className="border border-heraglyph-white/30 hover:border-heraglyph-white/80 text-heraglyph-white px-7 py-3.5 rounded-md font-medium text-center hover:bg-heraglyph-white/5 transition-all duration-300"
          >
            Our Services              </a>        </div>
          </div>
        </div>      </div>

      <div className="absolute bottom-0 left-0 transform -translate-x-0 animate-bounce flex justify-center w-full mt-4">
        <a 
          href="#services" 
          className="text-heraglyph-white/50 hover:text-heraglyph-accent transition-colors duration-300 flex flex-col items-center"
        >
          <span className="mb-2 text-sm font-medium">Discover More</span>
          <ArrowDown size={24} />
        </a>
      </div>
        </div>
  );
};

export default HeroSection;
