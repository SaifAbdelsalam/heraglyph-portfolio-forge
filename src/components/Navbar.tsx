import { useState, useEffect } from 'react';

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'bg-heraglyph-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <a href="/" className="group flex items-center">
              <img src="./uploads/872dcae6-04ca-4497-a5fd-4c14b83f6a66.png" alt="HERAGLYPH Logo" className="h-8 mr-3 transition-transform duration-300 group-hover:scale-105" />
              <span className="text-xl font-bold font-heading transition-colors duration-300 group-hover:text-heraglyph-accent">
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
                  setIsMenuOpen(false);
                }}
              >
                Services
              </a>
              <a 
                href="#comparison" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('comparison') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                Comparison
              </a>
              <a 
                href="#chatbot-section" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('chatbot-section') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                Chatbot
              </a>
              <a 
                href="#booking-section" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('booking-section') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                Book a Call
              </a>
              <a
                href="/el"
                className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-heraglyph-accent bg-heraglyph-black/80 shadow mr-2 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-heraglyph-accent"
                style={{ minWidth: 36, padding: 0 }}
                aria-label="Switch to Greek"
              >
                <img
                  src="/uploads/greece.png"
                  alt="Greek"
                  className="w-6 h-6 object-cover rounded-full"
                  style={{ display: 'block' }}
                />
              </a>
              <a 
                href="#booking-section" 
                className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-5 py-2.5 rounded-md font-medium hover:shadow-lg hover:shadow-heraglyph-accent/20 hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('booking-section') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                Book a Call
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="relative z-50 p-2 rounded-lg text-heraglyph-gray hover:text-heraglyph-white focus:outline-none focus:ring-2 focus:ring-heraglyph-accent transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute left-0 block h-0.5 w-6 transform transition-all duration-300 ${
                    isMenuOpen 
                      ? 'top-3 rotate-45 bg-heraglyph-white' 
                      : 'top-1 bg-heraglyph-gray'
                  }`}
                />
                <span 
                  className={`absolute left-0 block h-0.5 w-6 transition-all duration-300 ${
                    isMenuOpen 
                      ? 'opacity-0' 
                      : 'top-3 bg-heraglyph-gray'
                  }`}
                />
                <span 
                  className={`absolute left-0 block h-0.5 w-6 transform transition-all duration-300 ${
                    isMenuOpen 
                      ? 'top-3 -rotate-45 bg-heraglyph-white' 
                      : 'top-5 bg-heraglyph-gray'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-heraglyph-black/95 backdrop-blur-lg transform transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-16' : 'opacity-0 -translate-y-full'
        }`}
        style={{ 
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          height: 'calc(100vh - 64px)'
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-full px-6" style={{ marginTop: '-15vh' }}>
          <div className="w-full max-w-sm mx-auto">
            <div className="space-y-7">
              {[
                { href: '#services', text: window.location.pathname === '/el' ? 'Υπηρεσίες' : 'Services' },
                { href: '#comparison', text: window.location.pathname === '/el' ? 'Σύγκριση' : 'Comparison' },
                { href: '#chatbot', text: window.location.pathname === '/el' ? 'Chatbot' : 'Chatbot' },
                { href: '#booking', text: window.location.pathname === '/el' ? 'Κλείστε Ραντεβού' : 'Book a Call' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="block text-center text-2xl font-medium text-heraglyph-white/90 hover:text-heraglyph-accent hover:scale-105 transform transition-all duration-300"
                  onClick={e => {
                    e.preventDefault();
                    smoothScrollTo(document.getElementById(item.href.slice(1)) as HTMLElement);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.text}
                </a>
              ))}
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-6">
              <a
                href={window.location.pathname === '/el' ? '/' : '/el'}
                className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-heraglyph-accent bg-heraglyph-black/80 shadow hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-heraglyph-accent"
                aria-label={window.location.pathname === '/el' ? 'Switch to English' : 'Μετάβαση στα Ελληνικά'}
              >
                <img
                  src={window.location.pathname === '/el' ? '/united-kingdom.png' : '/greece.png'}
                  alt={window.location.pathname === '/el' ? 'English' : 'Greek'}
                  className="w-8 h-8 object-cover rounded-full"
                />
              </a>
              <a 
                href="#booking"
                className="px-8 py-3 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white text-lg rounded-md font-medium hover:shadow-lg hover:shadow-heraglyph-accent/20 hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('booking') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                {window.location.pathname === '/el' ? 'Κλείστε Ραντεβού' : 'Book a Call'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

