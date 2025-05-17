
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-heraglyph-dark-gray py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/872dcae6-04ca-4497-a5fd-4c14b83f6a66.png" 
              alt="HERAGLYPH Logo" 
              className="h-12 mb-4"
            />
            <p className="text-heraglyph-gray mb-4">
              Transforming visions into digital realities with comprehensive branding solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-heraglyph-white mb-4">Services</h3>
            <ul className="space-y-2 text-heraglyph-gray">
              <li><a href="#" className="hover:text-heraglyph-white transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-heraglyph-white transition-colors">Logo Design</a></li>
              <li><a href="#" className="hover:text-heraglyph-white transition-colors">Email Solutions</a></li>
              <li><a href="#" className="hover:text-heraglyph-white transition-colors">Business Cards & Stationery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-heraglyph-white mb-4">Company</h3>
            <ul className="space-y-2 text-heraglyph-gray">
              <li><a href="#about" className="hover:text-heraglyph-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-heraglyph-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-heraglyph-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-heraglyph-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-heraglyph-white mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.666.25 1.23.597 1.77 1.139.54.54.889 1.104 1.139 1.76.247.636.416 1.363.465 2.428.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.139 1.77c-.54.54-1.104.889-1.76 1.139-.636.247-1.363.416-2.428.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.77-1.139 4.902 4.902 0 01-1.139-1.77c-.247-.636-.416-1.363-.465-2.428C2.012 14.97 2 14.63 2 11.85c0-2.778.01-3.118.058-4.185.049-1.064.218-1.791.465-2.427.25-.66.599-1.225 1.139-1.77.54-.54 1.104-.89 1.77-1.139.636-.247 1.363-.416 2.428-.465C9.09 2.013 9.43 2 12.108 2h.207zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-heraglyph-gray hover:text-heraglyph-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-heraglyph-gray/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-heraglyph-gray text-sm mb-4 md:mb-0">
            &copy; {currentYear} HERAGLYPH. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-heraglyph-gray">
            <a href="#" className="hover:text-heraglyph-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-heraglyph-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-heraglyph-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
