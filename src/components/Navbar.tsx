
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-heraglyph-black/95 backdrop-blur-md py-2 shadow-lg' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-heraglyph-white text-xl font-bold font-heading">
              <span className="gradient-text">HERA</span>GLYPH
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300">Services</a>
              <a href="#about" className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300">About</a>
              <a href="#team" className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300">Team</a>
              <a href="#portfolio" className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300">Portfolio</a>
              <a href="#testimonials" className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300">Testimonials</a>
              <a href="#contact" className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-5 py-2.5 rounded-md font-medium hover:shadow-lg hover:shadow-heraglyph-accent/20 hover:scale-105 transition-all duration-300">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-heraglyph-gray hover:text-heraglyph-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-heraglyph-dark-gray/95 backdrop-blur-lg shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#services" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#team" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={toggleMenu}
            >
              Team
            </a>
            <a 
              href="#portfolio" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block mx-3 mt-2 px-3 py-2 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white rounded-md font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

