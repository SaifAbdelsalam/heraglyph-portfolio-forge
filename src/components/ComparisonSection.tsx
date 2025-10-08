import { motion } from 'framer-motion';
import { Clock, Database, Frown, AlertTriangle, Hand, Zap, BarChart3, TrendingUp, Users, CheckCircle } from 'lucide-react';
import './ComparisonSection.mobile.css';

const comparisonPoints = [
  {
    without: {
      icon: <Clock size={20} />,
      text: "Slow responses & missed opportunities"
    },
    with: {
      icon: <Zap size={20} />,
      text: "Instant, 24/7 AI-powered responses"
    }
  },
  {
    without: {
      icon: <Database size={20} />,
      text: "Scattered data & lost leads"
    },
    with: {
      icon: <BarChart3 size={20} />,
      text: "Automated data collection & intelligent tracking"
    }
  },
  {
    without: {
      icon: <Frown size={20} />,
      text: "Customer frustration & low satisfaction"
    },
    with: {
      icon: <Users size={20} />,
      text: "Seamless customer experience that drives loyalty"
    }
  },
  {
    without: {
      icon: <AlertTriangle size={20} />,
      text: "Reactive business decisions"
    },
    with: {
      icon: <TrendingUp size={20} />,
      text: "Data-driven insights for proactive growth"
    }
  },
  {
    without: {
      icon: <Hand size={20} />,
      text: "Manual follow-ups & missed deals"
    },
    with: {
      icon: <CheckCircle size={20} />,
      text: "Automated follow-ups that close deals"
    }
  }
];

const ComparisonSection = () => {
  return (
    <section id="comparison" className="bg-heraglyph-black py-32 relative overflow-hidden comparison-section">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-heraglyph-black via-heraglyph-black to-heraglyph-black">
        {/* Starry background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0, 1, 0] 
              }}
              transition={{
                duration: 4,
                delay: Math.random() * 3,
                repeat: Infinity,
                repeatDelay: Math.random() * 4
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-heraglyph-accent/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 comparison-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-heraglyph-accent/30 bg-heraglyph-dark-gray/50 backdrop-blur-sm mb-8 badge">
            <span className="text-heraglyph-accent font-medium text-sm tracking-wide uppercase">Comparison</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-heraglyph-white">
            Choosing HERAGLYPH Over Others
          </h2>
          
          <p className="text-heraglyph-gray text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            The difference isn't just in service, it's in transformation. In today's fast-moving market, choosing HERAGLYPH means more efficiency, happier customers, and a business that never stops growing.
          </p>
        </motion.div>

        {/* VS Badge */}
        <motion.div
          className="flex justify-center mb-12 comparison-badge"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-heraglyph-accent to-heraglyph-accent-light rounded-full flex items-center justify-center text-heraglyph-black font-bold text-xl shadow-lg shadow-heraglyph-accent/25 vs-badge">
            VS
          </div>
        </motion.div>

        {/* Comparison Lines */}
        <div className="max-w-4xl mx-auto">
          {/* Headers */}
          <div className="grid grid-cols-2 gap-8 mb-8 comparison-headers">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-2">
                Without HERAGLYPH
              </h3>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-heraglyph-accent mb-2 flex items-center justify-center gap-2">
                <span>HERAGLYPH</span>
                <span className="text-2xl">𓂀</span>
              </h3>
            </motion.div>
          </div>

          {/* Comparison Lines */}
          <div className="space-y-6 comparison-lines">
            {comparisonPoints.map((point, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-2 gap-8 items-stretch comparison-line"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                {/* Without HERAGLYPH - Dark Line */}
                <div className="flex items-center gap-4 p-4 rounded-lg border-l-4 border-red-600 bg-red-950/20 h-full min-h-[80px] without">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center text-red-400 icon-container">
                    {point.without.icon}
                  </div>
                  <p className="text-red-300 leading-relaxed flex-1 text">
                    {point.without.text}
                  </p>
                </div>

                {/* With HERAGLYPH - Bright Line */}
                <div className="flex items-center gap-4 p-4 rounded-lg border-l-4 border-heraglyph-accent bg-heraglyph-accent/10 h-full min-h-[80px] with">
                  <div className="flex-shrink-0 w-8 h-8 bg-heraglyph-accent/20 rounded-full flex items-center justify-center text-heraglyph-accent icon-container">
                    {point.with.icon}
                  </div>
                  <p className="text-heraglyph-white leading-relaxed font-medium flex-1 text">
                    {point.with.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 comparison-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href="#booking-section"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light text-heraglyph-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-heraglyph-accent/25 transition-all duration-300 hover:scale-105"
          >
            <span>Transform Your Business Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
