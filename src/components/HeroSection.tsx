import { useEffect, useState } from "react";
import { ArrowDown, CheckCircle2, Star, Zap } from 'lucide-react';

const HeroSection = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showHeadline, setShowHeadline] = useState(false);
  const [showSubheadline, setShowSubheadline] = useState(false);
  const [showTrust, setShowTrust] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 200);
    const headlineTimer = setTimeout(() => setShowHeadline(true), 900);
    const subheadlineTimer = setTimeout(() => setShowSubheadline(true), 1600);
    const trustTimer = setTimeout(() => setShowTrust(true), 2000);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(headlineTimer);
      clearTimeout(subheadlineTimer);
      clearTimeout(trustTimer);
    };
  }, []);

  const trustIndicators = [
    { icon: <CheckCircle2 size={20} />, text: "35+ Projects Delivered" },
    { icon: <Star size={20} />, text: "100% Guarantee" },
    { icon: <Zap size={20} />, text: "Fast Turnaround Time" }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-heraglyph-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
             style={{ backgroundImage: 'url("./lovable-uploads/pyramid-bg.jpg")' }}>
        </div>
        <div className="absolute inset-0 bg-heraglyph-black/60"></div>
        {/* Additional background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heraglyph-accent via-heraglyph-accent/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-heraglyph-accent/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-heraglyph-gradient-end/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="section-container relative z-10 pt-32 md:pt-40">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content - Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className={`transition-all duration-700 ${showHeadline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-3">
                Websites That <span className="gradient-text">Grow Your Business</span>
              </h2>
            </div>
            <div className={`transition-all duration-700 ${showSubheadline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} mb-8`}>
              <p className="text-heraglyph-gray text-lg md:text-xl mx-auto md:mx-0 max-w-2xl mb-6">
                From stunning websites to complete brand identities, we create digital experiences that captivate your audience and drive business growth.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className={`transition-all duration-700 ${showTrust ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-6 mb-10">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center gap-2 text-heraglyph-gray">
                    <span className="text-heraglyph-accent">{indicator.icon}</span>
                    <span>{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="relative overflow-hidden bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-8 py-4 rounded-md font-medium text-center group"
              >
                <span className="relative z-10">Start Your Project</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
              <a 
                href="#portfolio" 
                className="border border-heraglyph-white/30 hover:border-heraglyph-white/80 text-heraglyph-white px-8 py-4 rounded-md font-medium text-center hover:bg-heraglyph-white/5 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Logo - Right Side */}
          <div className="w-full md:w-1/2">
            <div className={`transition-all duration-700 pt-8 md:pt-16 ${showLogo ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="animate-float-slow">
                <img 
                  src="./lovable-uploads/MacBook_Mockup_3.png" 
                  alt="HERAGLYPH Website Mockup" 
                  className="w-full max-w-3xl mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 transform -translate-x-0 animate-bounce flex justify-center w-full">
        <a 
          href="#services" 
          className="text-heraglyph-white/50 hover:text-heraglyph-accent transition-colors duration-300 flex flex-col items-center"
        >
          <span className="mb-2 text-sm font-medium">Explore Our Services</span>
          <ArrowDown size={24} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
