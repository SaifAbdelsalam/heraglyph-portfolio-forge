import React from 'react';

export function FAQSection() {
  return (
    <section id="faq" className="bg-heraglyph-black py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-heraglyph-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-heraglyph-accent mb-2">What is AI optimization?</h3>
            <p className="text-heraglyph-gray">AI optimization refers to using artificial intelligence to automate, streamline, and improve business processes, such as chatbots, automated outreach, and workflow automation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-heraglyph-accent mb-2">Can you build custom chatbots for my business?</h3>
            <p className="text-heraglyph-gray">Yes! We specialize in building custom AI chatbots tailored to your business needs, from customer support to lead generation and more.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-heraglyph-accent mb-2">How does your cold email automation work?</h3>
            <p className="text-heraglyph-gray">Our AI-powered cold email systems generate personalized outreach, automate follow-ups, and provide analytics to maximize your campaign's effectiveness.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-heraglyph-accent mb-2">Is my data secure with your AI solutions?</h3>
            <p className="text-heraglyph-gray">Absolutely. We implement enterprise-grade security and compliance measures to ensure your data is protected at all times.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
