
const portfolioItems = [
  {
    category: "Website Design",
    title: "Modern E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400"
  },
  {
    category: "Branding",
    title: "Startup Identity Package",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400"
  },
  {
    category: "Web Application",
    title: "Financial Dashboard",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400"
  },
  {
    category: "Email Design",
    title: "Corporate Email Template",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400"
  },
  {
    category: "Print Design",
    title: "Business Card Collection",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400"
  },
  {
    category: "Web Design",
    title: "Corporate Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-heraglyph-black py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our recent projects showcasing our expertise in website development and brand identity design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-sm text-heraglyph-gray mb-1">{item.category}</p>
                <h3 className="text-xl font-bold text-heraglyph-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="border border-heraglyph-white px-6 py-3 rounded-md font-medium hover:bg-heraglyph-white hover:text-heraglyph-black transition-colors">
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
