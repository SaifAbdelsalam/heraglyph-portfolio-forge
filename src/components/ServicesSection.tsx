
import { Code, Image, Mail, Smartphone, FileText, Layout, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Layout size={32} />,
    title: "Website Design & Development",
    description: "Custom website solutions tailored to your brand and business needs."
  },
  {
    icon: <Image size={32} />,
    title: "Logo Design",
    description: "Iconic brand identities that capture your company's essence."
  },
  {
    icon: <Mail size={32} />,
    title: "Email Domains & Signatures",
    description: "Professional email setups with custom domains and branded signatures."
  },
  {
    icon: <PenTool size={32} />,
    title: "Business Cards",
    description: "Memorable business cards that make a lasting impression."
  },
  {
    icon: <FileText size={32} />,
    title: "Letterheads & A4 Papers",
    description: "Consistent branded stationery for all your business needs."
  },
  {
    icon: <Code size={32} />,
    title: "Digital Brand Assets",
    description: "Complete digital brand packages for consistent online presence."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-heraglyph-black py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive branding solutions to elevate your business identity from concept to implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg transition-all hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="text-heraglyph-white mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-heraglyph-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
