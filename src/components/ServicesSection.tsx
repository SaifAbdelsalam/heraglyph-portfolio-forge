import { Database, Shield, Cloud, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const services = [
	{
		icon: <Database size={32} />,
		title: 'AI Chatbots & Automation',
		description: 'Custom AI chatbots and workflow automations to boost efficiency and customer engagement.',
		details: [
			'Conversational AI for websites & apps',
			'Automated lead qualification & support',
			'Integration with CRM and business tools',
			'24/7 customer interaction'
		],
		gradient: 'from-amber-500/20 to-amber-700/20'
	},
	{
		icon: <Code size={32} />,
		title: 'Cold Email AI Systems',
		description: 'AI-powered cold email outreach and follow-up systems for sales and marketing.',
		details: [
			'Personalized email generation',
			'Automated follow-ups & scheduling',
			'Inbox management & analytics',
			'Seamless integration with email platforms'
		],
		gradient: 'from-amber-600/20 to-amber-800/20'
	},
	{
		icon: <Cloud size={32} />,
		title: 'AI-Driven Process Optimization',
		description: 'Streamline business operations with AI for data analysis, reporting, and workflow automation.',
		details: [
			'Automated data entry & reporting',
			'Predictive analytics for business growth',
			'Task and workflow automation',
			'Custom AI integrations for unique needs'
		],
		gradient: 'from-amber-500/20 to-amber-700/20'
	},
	{
		icon: <Shield size={32} />,
		title: 'AI Security & Compliance',
		description: 'Protect your business with AI-powered security, monitoring, and compliance solutions.',
		details: [
			'AI-based threat detection',
			'Automated compliance monitoring',
			'Data privacy & encryption',
			'Incident response automation'
		],
		gradient: 'from-amber-600/20 to-amber-800/20'
	}
];

const ServicesSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (!isAutoplay || isHovered) return;

		const interval = setInterval(() => {
			setActiveIndex((current) => (current + 1) % services.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [isAutoplay, isHovered]);

	// Handler for mouse enter/leave
	const handleSlideMouseEnter = () => {
		setIsHovered(true);
		setIsAutoplay(false);
	};
	const handleSlideMouseLeave = () => {
		setIsHovered(false);
		setIsAutoplay(true);
	};

	return (
		<section id="services" className="bg-heraglyph-black py-32 relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-heraglyph-accent/5 to-transparent opacity-60" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heraglyph-accent/10 via-transparent to-transparent opacity-30" />
			
			<div className="max-w-4xl mx-auto px-6 relative">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 1, y: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
						<span className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light bg-clip-text text-transparent">
							Technical
						</span>
						<span className="text-heraglyph-white ml-3">Solutions</span>
					</h2>
					<p className="text-heraglyph-gray text-lg md:text-xl">
						Enterprise-grade solutions powered by modern technologies
					</p>
				</motion.div>

				<div className="relative h-[450px] w-full max-w-2xl mx-auto">
					<AnimatePresence mode="wait" initial={false}>
						{services.map((service, index) => (
							index === activeIndex && (
								<motion.div
									key={index}
									className={cn(
										"absolute inset-0 flex items-center justify-center",
										"bg-gradient-to-br from-heraglyph-dark-gray/90 to-heraglyph-black/95",
										"rounded-2xl p-8 shadow-xl border border-heraglyph-accent/10",
										"backdrop-blur-sm transition-all duration-300",
										"hover:border-heraglyph-accent/30 hover:shadow-2xl"
									)}
									initial={{ opacity: 1, x: 0 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 1, x: 0 }}
									transition={{ 
										duration: 0.4,
										ease: "easeInOut"
									}}
									onMouseEnter={handleSlideMouseEnter}
									onMouseLeave={handleSlideMouseLeave}
								>
									<div className="max-w-2xl text-center">
										<div className="mb-6 flex justify-center">
											<div className={cn(
												"p-4 rounded-xl bg-gradient-to-br",
												service.gradient,
												"shadow-inner text-heraglyph-accent"
											)}>
												{service.icon}
											</div>
										</div>
										<h3 className="text-2xl md:text-3xl font-bold text-heraglyph-white mb-4">
											{service.title}
										</h3>
										<p className="text-heraglyph-gray text-lg mb-6">
											{service.description}
										</p>
										
										{/* Reveal more info on hover */}
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden"
										>
											<ul className="text-heraglyph-gray/80 space-y-2">
												{service.details.map((detail, i) => (
													<motion.li
														key={i}
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
														transition={{ delay: isHovered ? i * 0.1 : 0 }}
														className="flex items-center justify-center gap-2"
													>
														<span className="w-1.5 h-1.5 rounded-full bg-heraglyph-accent/50" />
														{detail}
													</motion.li>
												))}
											</ul>
										</motion.div>
									</div>
								</motion.div>
							)
						))}
					</AnimatePresence>
				</div>

				{/* Navigation Dots */}
				<div className="flex justify-center gap-3 mt-8">
					{services.map((_, index) => (
						<button
							key={index}
							className={cn(
								"w-2 h-2 rounded-full transition-all duration-300",
								index === activeIndex 
									? "bg-heraglyph-accent w-6" 
									: "bg-heraglyph-gray/30 hover:bg-heraglyph-gray/50"
							)}
							onClick={() => {
								setActiveIndex(index);
								setIsAutoplay(false);
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;