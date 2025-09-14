import { useEffect, useState } from "react";
import { ArrowDown, CheckCircle2, Star, Zap } from 'lucide-react';
import "./HeroSection.mobile.css";

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
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/uploads/background vid heraglyph.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-heraglyph-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heraglyph-accent via-heraglyph-accent/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-heraglyph-accent/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-heraglyph-gradient-end/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="section-container w-full relative z-10 pt-32 md:pt-40 h-screen flex items-center">
        {/* Text Content */}
        <div className="max-w-[1280px] my-auto hero-mobile-fix">
          <div className={`transition-all duration-700 ${showHeadline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} hero-mobile-text`}>
            <p className="text-heraglyph-accent text-base md:text-lg font-medium mb-2">AI Automation Agency</p>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-heading mb-3">
              Get an <span className="gradient-text">Unfair Advantage</span> with AI
            </h2>
          </div>
          <div className={`transition-all duration-700 ${showSubheadline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} mb-8 hero-mobile-text`}>
            <p className="text-heraglyph-gray text-base md:text-lg mb-6">
              We guide you toward sustainable growth by seamlessly integrating AI and automation into your workflows, which drives efficiency and reduces cost. Experience improved trend predictions and streamlined processes, all aimed at achieving sustainable growth and long-term success.
            </p>
          </div>

          {/* Trust Indicators and CTA Button Row */}
          <div className={`transition-all duration-700 ${showTrust ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
              {/* CTA Button */}
              <div className="opacity-0 animate-fade-in-delayed hero-mobile-btns">
                <a 
                  href="#contact" 
                  className="relative overflow-hidden bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-8 py-4 rounded-md font-medium text-center group inline-block"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 hero-mobile-trust">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center gap-2 text-heraglyph-gray">
                    <span className="text-heraglyph-accent">{indicator.icon}</span>
                    <span>{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Place the arrow at the bottom for all screen sizes */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center animate-bounce">
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
