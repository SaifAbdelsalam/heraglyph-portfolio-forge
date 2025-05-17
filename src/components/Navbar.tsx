
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-heraglyph-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-heraglyph-white text-xl font-bold font-heading">HERAGLYPH</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#services" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">Services</a>
              <a href="#about" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">About</a>
              <a href="#team" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">Team</a>
              <a href="#portfolio" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">Testimonials</a>
              <a href="#contact" className="bg-heraglyph-white text-heraglyph-black px-4 py-2 rounded-md font-medium hover:bg-heraglyph-gray transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-heraglyph-gray hover:text-heraglyph-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-heraglyph-dark-gray/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#services" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#team" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white transition-colors"
              onClick={toggleMenu}
            >
              Team
            </a>
            <a 
              href="#portfolio" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 bg-heraglyph-white text-heraglyph-black rounded-md font-medium hover:bg-heraglyph-gray transition-colors"
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
