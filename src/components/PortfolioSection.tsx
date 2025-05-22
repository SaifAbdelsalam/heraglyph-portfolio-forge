import { useState } from "react";

const portfolioItems = [
	{
		category: "Website Design",
		title: "Full Stack Landing page",
		image: "/lovable-uploads/MacBook_Dresser_Mockup_3.png",
	},
	{
		category: "Website Design",
		title: "Laudansky Landing Page",
		image: "/lovable-uploads/Free_Mac_Book_Mockup_2.png",
	},
	{
		category: "Web Application",
		title: "Furniture Store Website",
		image:
			"/lovable-uploads/MacBook_Dresser_Mockup_1.png",
	},
	{
		category: "Web Design",
		title: "Flower Shop Website",
		image: "/lovable-uploads/Free_Tablet_Mockup_4.png",
	},
	{
		category: "Website Design",
		title: "Water Altai Website",
		image: "/lovable-uploads/MacBook_Mockup_2.png",
	},
	{
		category: "Ui/Ux Design",
		title: "Photoshoot Studio Website",
		image: "/lovable-uploads/Free_Tablet_Mockup_5.png",
	},
	// --- Hidden projects below ---
	{
		category: "Mobile App Development",
		title: "Crypto Wallet Website and App",
		image:
			"/lovable-uploads/MacBook_Mockup_3.png",
	},
	{
		category: "Website Design",
		title: "News Website",
		image:
			"/lovable-uploads/Free_Mac_Book_Mockup_3.png",
	},
];

const PortfolioSection = () => {
	const [showAll, setShowAll] = useState(false);

	// Show 6 by default, all if showAll is true
	const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, 6);

	return (
		<section id="portfolio" className="bg-heraglyph-black py-20 relative overflow-hidden">
			<div className="section-container relative z-10">
				<div className="text-center mb-12">
					<h2 className="section-title">Our Projects</h2>
					<p className="section-subtitle">
						Explore our recent projects showcasing our expertise in website
						development and brand identity design.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{visibleItems.map((item, index) => (
						<div
							key={index}
							className="group relative overflow-hidden rounded-lg transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
						>
							{item.title === "Full Stack Landing page" ? (
								<a
									href="https://adams-dynamite-site-8c8b29.webflow.io"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</a>
							) : item.title === "Laudansky Landing Page" ? (
								<a
									href="https://laudansky.co"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</a>
							) : item.title === "Water Altai Website" ? (
								<a
									href="https://www.behance.net/gallery/226067069/Water-Altai-Landing-Page"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</a>
							) : item.title === "Crypto Wallet Website and App" ? (
								<a
									href="https://www.behance.net/gallery/226044197/Crypto-Wallet-landing-and-app-design-Case-study"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</a>
							) : item.title === "Neon Frame" ? (
								<a
									href="https://laudansky-2713e0.webflow.io"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</a>
							) : item.title === "News Website" ? (
								<a
									href="https://laudansky-2713e0.webflow.io"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</a>
							) : item.title === "Furniture Store Website" ? (
								<a
									href="https://saifabdelsalam.github.io/Luxury_Furniture_Store/"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</a>
							) : item.title === "Flower Shop Website" ? (
								<a
									href="https://saifabdelsalam.github.io/Flower_Shop/"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</a>
							) : item.title === "Photoshoot Studio Website" ? (
								<a
									href="https://laudansky-2713e0.webflow.io"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</a>
							) : (
								<>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-heraglyph-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
										<p className="text-sm text-heraglyph-gray mb-1">
											{item.category}
										</p>
										<h3 className="text-xl font-bold text-heraglyph-white">
											{item.title}
										</h3>
									</div>
								</>
							)}
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					{!showAll ? (
						<button
							className="border border-heraglyph-white px-6 py-3 rounded-md font-medium hover:bg-heraglyph-white hover:text-heraglyph-black transition-colors"
							onClick={() => setShowAll(true)}
						>
							View All Work
						</button>
					) : (
						<button
							className="border border-heraglyph-white px-6 py-3 rounded-md font-medium hover:bg-heraglyph-white hover:text-heraglyph-black transition-colors"
							onClick={() => setShowAll(false)}
						>
							Show Less
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
