import { Bot, Zap, BarChart3, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const aiServices = [
	{
		icon: <Bot size={32} />,
		title: 'AI Chatbot Development',
		description:
			'Custom conversational AI solutions with natural language understanding to enhance customer engagement and support.',
	},
	{
		icon: <Zap size={32} />,
		title: 'Business Process Automation',
		description:
			'Streamline workflows with AI-powered automation using n8n, Zapier, and custom integrations to boost efficiency.',
	},
	{
		icon: <BarChart3 size={32} />,
		title: 'AI-powered Analytics',
		description:
			'Data-driven insights and recommendation engines that help your business make smarter decisions and personalize user experiences.',
	},
	{
		icon: <Sparkles size={32} />,
		title: 'Custom AI Integrations',
		description:
			'Tailor-made AI solutions including GPT-4 implementations, image generation, OCR, and other advanced AI technologies.',
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

const ServicesSection = () => {
	return (
		<section id="ai-services" className="bg-heraglyph-black py-24">
			<div className="section-container max-w-6xl mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
						<span className="text-heraglyph-accent">AI</span>
						<span className="text-heraglyph-white">-Powered Solutions</span>
					</h2>
					<p className="section-subtitle text-heraglyph-gray max-w-2xl mx-auto text-lg md:text-xl">
						Innovative artificial intelligence technologies to transform your
						business operations and customer experiences.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{aiServices.map((service, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="bg-heraglyph-dark-gray rounded-xl p-8 shadow-md border border-opacity-10 border-heraglyph-gray backdrop-blur-sm hover:shadow-lg transition-all duration-300"
							style={{
								background:
									'linear-gradient(145deg, rgba(31, 31, 31, 0.7) 0%, rgba(18, 18, 18, 0.9) 100%)',
							}}
						>
							<div className="flex items-center mb-6">
								<div className="p-3 rounded-md bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] shadow-inner text-heraglyph-accent-light">
									{service.icon}
								</div>
								<h3 className="text-xl font-medium ml-4 text-heraglyph-white">
									{service.title}
								</h3>
							</div>
							<p className="text-heraglyph-gray leading-relaxed">
								{service.description}
							</p>
						</motion.div>
					))}
				</motion.div>

			</div>
		</section>
	);
};

export default ServicesSection;
