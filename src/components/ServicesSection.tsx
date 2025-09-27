import { Brain, Zap, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const whyUsFeatures = [
	{
		icon: <Brain size={24} />,
		title: 'AI-First Innovation',
		description: 'We don\'t just implement AI, we reimagine your business processes. Every solution we build is designed to give your customers the fastest, most intelligent experience possible.'
	},
	{
		icon: <Zap size={24} />,
		title: 'Lightning-Fast Automation',
		description: 'Our AI systems work like clockwork, connecting every part of your business into one seamless, efficient ecosystem, so you can focus on growth, not repetitive tasks.'
	},
	{
		icon: <Users size={24} />,
		title: 'Dedicated Partnership',
		description: 'We don\'t disappear after delivery. From day one, we\'re your growth partner, continuously optimizing your systems and unlocking new opportunities to scale your business.'
	}
];

const ServicesSection = () => {
	return (
		<section id="services" className="bg-heraglyph-black py-32 relative overflow-hidden">
			{/* Entrance Animation Overlay */}
			<motion.div
				className="absolute inset-0 z-20 bg-heraglyph-black"
				initial={{ opacity: 1 }}
				animate={{ opacity: 0 }}
				transition={{ duration: 1.5, delay: 0.5 }}
				style={{ pointerEvents: 'none' }}
			/>
			{/* Optimized Background */}
			<motion.div 
				className="absolute inset-0 bg-gradient-to-b from-heraglyph-black via-heraglyph-black to-heraglyph-black"
				initial={{ opacity: 1 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
			>
				{/* Simplified starry background - reduced from 100 to 20 stars */}
				<div className="absolute inset-0 opacity-20">
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-white rounded-full"
							initial={{ opacity: 1}}
							animate={{ opacity: [1, 1, 1] }}
							transition={{
								duration: 2,
								delay: i * 0.1,
								repeat: Infinity,
								repeatDelay: 2 + i * 0.2,
								ease: "easeInOut"
							}}
							style={{
								left: `${(i * 5) % 100}%`,
								top: `${(i * 7) % 100}%`,
							}}
						/>
					))}
				</div>
				
				{/* Simplified glowing effects */}
				<div className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-r from-transparent via-heraglyph-accent/10 to-transparent transform rotate-45 blur-2xl opacity-40"></div>
				<div className="absolute top-20 -right-20 w-64 h-64 bg-gradient-to-r from-transparent via-heraglyph-accent/10 to-transparent transform -rotate-45 blur-2xl opacity-40"></div>
				
				{/* Static grid pattern - no animation */}
				<div className="absolute inset-0 opacity-5">
					<div className="grid grid-cols-12 h-full">
						{[...Array(12)].map((_, i) => (
							<div 
								key={i} 
								className="border-r border-heraglyph-accent/20"
							/>
						))}
					</div>
				</div>
			</motion.div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				{/* Why Us Badge */}
				<motion.div
					className="text-center mb-8"
					initial={{ opacity: 1, scale: 0.5, y: 50 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ 
						duration: 0.8, 
						delay: 0.8,
						type: "spring",
						stiffness: 100,
						damping: 15
					}}
				>
					<div className="inline-flex items-center px-4 py-2 rounded-full border border-heraglyph-accent/30 bg-heraglyph-dark-gray/50 backdrop-blur-sm">
						<Sparkles size={16} className="text-heraglyph-accent mr-2" />
						<span className="text-heraglyph-accent font-medium text-sm tracking-wide uppercase">Why Us</span>
					</div>
				</motion.div>

				{/* Main Title Section */}
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 1, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ 
						duration: 0.8, 
						delay: 0.,
						ease: "easeOut"
					}}
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-heraglyph-white">
						Why HERAGLYPH Stands Out
					</h2>
					<p className="text-heraglyph-gray text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
						We don't just offer AI automation, we reengineer the way your business works. Every system we build is designed to give your customers the fastest, most seamless experience possible.
					</p>
				</motion.div>

				{/* Three Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{whyUsFeatures.map((feature, index) => (
						<motion.div
							key={index}
							className="group relative h-full"
							initial={{ 
								opacity: 1, 
								y: 60
							}}
							whileInView={{ 
								opacity: 1, 
								y: 0
							}}
							viewport={{ once: true }}
							transition={{ 
								duration: 0.6, 
								delay: 0 + index * 0.2,
								ease: "easeOut"
							}}
						>
							{/* Card Background */}
							<div className="relative bg-gradient-to-br from-heraglyph-dark-gray/80 to-heraglyph-black/90 rounded-2xl p-8 border border-heraglyph-accent/20 hover:border-heraglyph-accent/40 transition-all duration-500 hover:shadow-lg hover:shadow-heraglyph-accent/10 backdrop-blur-sm h-full flex flex-col min-h-[350px] md:min-h-[400px] lg:min-h-[420px]">
								{/* Icon Area with Grid Pattern */}
								<div className="relative mb-6 h-24 flex items-center justify-center">
									{/* Grid background */}
									<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-heraglyph-dark-gray/50 to-heraglyph-black/50 opacity-50">
										<div className="grid grid-cols-4 h-full opacity-20">
											{[...Array(16)].map((_, i) => (
												<div key={i} className="border border-heraglyph-accent/20"></div>
											))}
										</div>
									</div>
									
									{/* Icon */}
									<div className="relative z-10 w-16 h-16 bg-gradient-to-br from-heraglyph-accent to-heraglyph-accent-light rounded-full flex items-center justify-center text-heraglyph-white group-hover:scale-110 transition-transform duration-300">
										{feature.icon}
									</div>
									
									{/* Subtle stars around icon */}
									<div className="absolute inset-0">
										{[...Array(8)].map((_, i) => (
											<div
												key={i}
												className="absolute w-1 h-1 bg-heraglyph-accent/60 rounded-full"
												style={{
													left: `${20 + Math.cos(i * 45 * Math.PI / 180) * 30}%`,
													top: `${20 + Math.sin(i * 45 * Math.PI / 180) * 30}%`,
												}}
											/>
										))}
									</div>
								</div>

								{/* Content */}
								<div className="flex-1 flex flex-col">
									<h3 className="text-xl font-bold text-heraglyph-white mb-4 group-hover:text-heraglyph-accent-light transition-colors duration-300">
										{feature.title}
									</h3>
									<p className="text-heraglyph-gray leading-relaxed group-hover:text-heraglyph-gray/90 transition-colors duration-300 flex-1">
										{feature.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div
					className="text-center"
					initial={{ opacity: 1, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ 
						duration: 0.6, 
						delay: 1.4,
						ease: "easeOut"
					}}
				>
					<a
						href="#contact"
						className="inline-flex items-center gap-3 bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light text-heraglyph-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-heraglyph-accent/25 transition-all duration-300 hover:scale-105"
					>
						<span>Book A Call</span>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default ServicesSection;