import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQSection() {
  return (
    <section id="faq" className="bg-heraglyph-black py-24 px-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/20 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/20 to-transparent"></div>
        
        {/* Floating accent elements */}
        <div className="absolute top-40 -right-20 w-64 h-64 rounded-full bg-heraglyph-accent/5 blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-64 h-64 rounded-full bg-heraglyph-gradient-end/5 blur-3xl"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-5">
          {[...Array(13)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-[0.5px] bg-heraglyph-accent/20" 
                 style={{left: `${(i/12) * 100}%`}}></div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-heraglyph-accent rounded-full"></div>
            <span className="text-heraglyph-accent font-medium tracking-wide uppercase text-sm">FAQ</span>
            <div className="w-2 h-2 bg-heraglyph-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-heraglyph-white via-heraglyph-accent to-heraglyph-accent-light bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mb-4 opacity-80"></div>
          <div className="w-12 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mb-6 opacity-60"></div>
          <p className="text-heraglyph-gray text-lg md:text-xl max-w-2xl mx-auto">
            Get answers to the most common questions about our AI solutions and services.
          </p>
        </div>

        {/* Enhanced FAQ Items */}
        <div className="space-y-4">
          <div className="group cursor-pointer bg-gradient-to-r from-heraglyph-dark-gray/40 to-heraglyph-dark-gray/20 rounded-2xl p-6 border border-heraglyph-accent/10 hover:border-heraglyph-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-heraglyph-accent/10 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-heraglyph-accent mb-3 group-hover:text-heraglyph-accent-light transition-colors duration-300 flex items-center gap-3">
                  <div className="w-2 h-2 bg-heraglyph-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  What comprehensive services does HERAGLYPH offer?
                </h3>
                <p className="text-heraglyph-gray opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
                  HERAGLYPH provides end-to-end AI solutions including enterprise-grade chatbots, multilingual voice assistants, automated email marketing systems, advanced lead generation funnels, and custom business process automation tailored to your specific industry requirements.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <ChevronDown className="w-5 h-5 text-heraglyph-accent group-hover:rotate-180 transition-all duration-300" />
              </div>
            </div>
          </div>

          <div className="group cursor-pointer bg-gradient-to-r from-heraglyph-dark-gray/40 to-heraglyph-dark-gray/20 rounded-2xl p-6 border border-heraglyph-accent/10 hover:border-heraglyph-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-heraglyph-accent/10 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-heraglyph-accent mb-3 group-hover:text-heraglyph-accent-light transition-colors duration-300 flex items-center gap-3">
                  <div className="w-2 h-2 bg-heraglyph-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  How does HERAGLYPH approach custom AI solution development?
                </h3>
                <p className="text-heraglyph-gray opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
                  We follow a comprehensive consultative approach, beginning with a thorough analysis of your business requirements. Our solutions are built using enterprise-grade AI technologies, ensuring scalability, security, and seamless integration with your existing systems. Each solution is meticulously customized to align with your specific industry needs and business objectives.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <ChevronDown className="w-5 h-5 text-heraglyph-accent group-hover:rotate-180 transition-all duration-300" />
              </div>
            </div>
          </div>

          <div className="group cursor-pointer bg-gradient-to-r from-heraglyph-dark-gray/40 to-heraglyph-dark-gray/20 rounded-2xl p-6 border border-heraglyph-accent/10 hover:border-heraglyph-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-heraglyph-accent/10 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-heraglyph-accent mb-3 group-hover:text-heraglyph-accent-light transition-colors duration-300 flex items-center gap-3">
                  <div className="w-2 h-2 bg-heraglyph-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  What ROI can businesses expect from HERAGLYPH's AI solutions?
                </h3>
                <p className="text-heraglyph-gray opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
                  Our clients typically experience significant improvements in operational efficiency and revenue generation. Through our advanced AI solutions, businesses see enhanced customer engagement rates, reduced operational costs, and measurable improvements in conversion rates. We provide detailed analytics and regular performance reports to track and optimize your return on investment.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <ChevronDown className="w-5 h-5 text-heraglyph-accent group-hover:rotate-180 transition-all duration-300" />
              </div>
            </div>
          </div>

          <div className="group cursor-pointer bg-gradient-to-r from-heraglyph-dark-gray/40 to-heraglyph-dark-gray/20 rounded-2xl p-6 border border-heraglyph-accent/10 hover:border-heraglyph-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-heraglyph-accent/10 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-heraglyph-accent mb-3 group-hover:text-heraglyph-accent-light transition-colors duration-300 flex items-center gap-3">
                  <div className="w-2 h-2 bg-heraglyph-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  What security measures and compliance standards does HERAGLYPH maintain?
                </h3>
                <p className="text-heraglyph-gray opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
                  We maintain the highest standards of data security through enterprise-grade infrastructure, end-to-end encryption, and regular security audits. Our solutions comply with international data protection regulations including GDPR and CCPA. We implement robust access controls, continuous monitoring, and automated backup systems to ensure your data remains secure and confidential.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <ChevronDown className="w-5 h-5 text-heraglyph-accent group-hover:rotate-180 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
