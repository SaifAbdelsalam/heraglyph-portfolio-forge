import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does HERAGLYPH offer?",
      answer: "HERAGLYPH provides comprehensive web development and branding services, including custom website design, logos, brand identity development, and digital marketing strategies tailored to your business needs."
    },
    {
      question: "How long does it typically take to complete a website?",
      answer: "Project timelines vary depending on complexity and scope. A landing page can be completed in 2-7 days, while multi-page websites may take 5-12 days. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes, we offer ongoing website maintenance packages that include regular updates, security monitoring, performance optimization, and content updates to keep your site running smoothly."
    },
    {
      question: "Can you help with branding and logo design?",
      answer: "Absolutely! Our branding services include logo design, color palette selection, typography, brand guidelines, and complete visual identity development to help your business stand out."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on your specific requirements. We provide detailed quotes after understanding your needs during the initial consultation. Contact us to discuss your project and receive a customized estimate."
    },
    {
      question: "Do you offer any guarantee?",
      answer: "Yes, we're confident in the quality of our work! If your website doesn't generate any clicks or leads within the first month of launch, we'll refund your money back. This guarantee demonstrates our commitment to delivering effective, results-driven websites that actually work for your business."
    }
  ];

  return (
    <section id="faq" className="relative py-20 bg-[#121212]">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-heraglyph-dark-gray/20 to-transparent opacity-60"></div>
      
      <div className="container relative px-4 mx-auto" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-heraglyph-gray text-lg">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-heraglyph-dark-gray px-6 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors duration-200"
              >
                <AccordionTrigger className="text-left font-medium text-heraglyph-white hover:text-heraglyph-accent transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-heraglyph-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
