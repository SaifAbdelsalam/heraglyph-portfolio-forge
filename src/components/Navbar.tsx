import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function smoothScrollTo(element: HTMLElement, duration = 500) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

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
            <a
              href="/"
              aria-label="Go to top"
              className="flex items-center"
              onClick={e => {
                e.preventDefault();
                smoothScrollTo(document.body, 500);
                setIsMenuOpen(false);
              }}
            >
              <span className="text-heraglyph-white text-xl font-bold font-heading">
                <span className="gradient-text">HERA</span>GLYPH
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#services"
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('services') as HTMLElement, 500);
                  setIsMenuOpen(false); // for mobile menu
                }}
              >
                Services
              </a>
              <a 
                href="#about"
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('about') as HTMLElement);
                  setIsMenuOpen(false); // for mobile menu
                }}
              >
                About
              </a>
              <a 
                href="#team" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('team') as HTMLElement);
                  setIsMenuOpen(false); // for mobile menu
                }}
              >
                Team
              </a>
              <a 
                href="#portfolio" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('portfolio') as HTMLElement);
                  setIsMenuOpen(false); // for mobile menu
                }}
              >
                Portfolio
              </a>
              <a 
                href="#faq" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('faq') as HTMLElement);
                  setIsMenuOpen(false); // for mobile menu
                }}
              >
                FAQ
              </a>
              <a 
                href="#testimonials" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('testimonials') as HTMLElement);
                  setIsMenuOpen(false); // for mobile menu
                }}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-5 py-2.5 rounded-md font-medium hover:shadow-lg hover:shadow-heraglyph-accent/20 hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('contact') as HTMLElement);
                  setIsMenuOpen(false); // for mobile menu
                }}
              >
                Contact Us
              </a>
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
              onClick={e => {
                e.preventDefault();
                smoothScrollTo(document.getElementById('services') as HTMLElement, 500);
                setIsMenuOpen(false);
              }}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={e => {
                e.preventDefault();
                smoothScrollTo(document.getElementById('about') as HTMLElement);
                setIsMenuOpen(false);
              }}
            >
              About
            </a>
            <a 
              href="#team" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={e => {
                e.preventDefault();
                smoothScrollTo(document.getElementById('team') as HTMLElement);
                setIsMenuOpen(false);
              }}
            >
              Team
            </a>
            <a 
              href="#portfolio" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={e => {
                e.preventDefault();
                smoothScrollTo(document.getElementById('portfolio') as HTMLElement);
                setIsMenuOpen(false);
              }}
            >
              Portfolio
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={e => {
                e.preventDefault();
                smoothScrollTo(document.getElementById('testimonials') as HTMLElement);
                setIsMenuOpen(false);
              }}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 text-heraglyph-gray hover:text-heraglyph-white hover:translate-x-1 transition-all duration-300"
              onClick={e => {
                e.preventDefault();
                smoothScrollTo(document.getElementById('faq') as HTMLElement);
                setIsMenuOpen(false);
              }}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="block mx-3 mt-2 px-3 py-2 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white rounded-md font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300"
              onClick={e => {
                e.preventDefault();
                smoothScrollTo(document.getElementById('contact') as HTMLElement);
                setIsMenuOpen(false);
              }}
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

