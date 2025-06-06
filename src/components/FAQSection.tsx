import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What AI automation services does HERAGLYPH offer?",
      answer: "HERAGLYPH specializes in comprehensive AI automation solutions, including custom AI model development, data processing automation, cloud-based AI infrastructure setup, and intelligent system integration. Our services cover everything from initial AI strategy development to full-scale implementation and optimization."
    },
    {
      question: "How can AI automation benefit my business?",
      answer: "AI automation can transform your business through real-time data processing, intelligent decision-making, and automated workflows. Our solutions can reduce operational costs, improve efficiency, enhance customer experiences, and provide valuable insights through advanced data analytics and machine learning."
    },
    {
      question: "What security measures are in place for AI systems?",
      answer: "We implement enterprise-grade security protocols including robust data encryption, secure authentication systems, and comprehensive security audits. Our AI systems are built with privacy-by-design principles and comply with industry standards to ensure your data and automated processes remain protected."
    },
    {
      question: "How do you handle AI system scalability?",
      answer: "Our cloud infrastructure is designed for seamless scalability. We utilize auto-scaling configurations and implement efficient database architectures that can handle growing data volumes and processing demands. This ensures your AI systems remain performant as your business expands."
    },
    {
      question: "What is your implementation process for AI automation?",
      answer: "Our implementation process begins with a thorough assessment of your current systems and requirements. We then design a custom solution leveraging our modern tech stack, followed by careful development and integration. We provide continuous monitoring, optimization, and support to ensure optimal performance."
    },
    {
      question: "Do you provide ongoing support for AI systems?",
      answer: "Yes, we offer comprehensive support packages that include 24/7 system monitoring, performance optimization, regular updates, and technical support. Our team ensures your AI automation systems remain efficient, secure, and aligned with your evolving business needs."
    }
  ];

  return (
    <section id="faq" className="relative py-20 bg-[#121212]">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-heraglyph-dark-gray/20 to-transparent opacity-60"></div>
      
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-heraglyph-gray text-lg">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-heraglyph-white/10 rounded-lg bg-heraglyph-black/50 backdrop-blur-sm px-6 data-[state=open]:bg-heraglyph-black/70"
                >
                  <AccordionTrigger className="text-heraglyph-white hover:text-heraglyph-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-heraglyph-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
