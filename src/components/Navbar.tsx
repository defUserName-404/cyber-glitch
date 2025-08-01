"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Experience", href: "/experience" },
		{ name: "Projects", href: "/projects" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<motion.nav
			className={`fixed top-0 w-full z-50 transition-all duration-500 ${
				scrolled
					? "bg-cyber-darker/90 backdrop-blur-md"
					: "bg-transparent"
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<motion.div
						className="flex items-center space-x-2"
						whileHover={{ scale: 1.05 }}
					>
						<Terminal className="h-8 w-8 text-cyber-blue glow-text" />
						<span className="font-cyber text-xl font-bold text-cyber-blue glow-text">
							CYBERDEV
						</span>
					</motion.div>

					{/* Desktop Navigation */}
					<div>
						<div className="ml-10 flex items-baseline space-x-8">
							{navItems.map((item, index) => (
								<Link key={item.name} href={item.href} passHref>
									<motion.a
										className="text-gray-300 hover:text-cyber-blue px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											delay: index * 0.1,
											duration: 0.5,
										}}
										whileHover={{ scale: 1.1 }}
									>
										{item.name}
										<span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
									</motion.a>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
