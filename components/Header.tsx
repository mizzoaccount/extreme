"use client"
import { useState, useEffect, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User, Search, Heart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link (for mobile)
  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Collections", href: "#collections" },
    { name: "Designers", href: "#designers" },
    { name: "Boutique", href: "#boutique" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo (EC - Extreme Collections) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <a href="#" className="text-white font-bold text-2xl">
              <span className="group relative">
                <span className="block group-hover:opacity-0 transition-opacity">EC</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-clip-text text-transparent bg-gradient-to-r from-[#f4b500] to-[#ffffff]">
                  Extreme
                </span>
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`relative text-white/80 hover:text-white transition-colors ${activeLink === link.name ? "text-[#f4b500]" : ""}`}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute left-0 bottom-0 w-full h-px bg-[#f4b500]"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Right-side icons (Search, Cart, Wishlist, Account) */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <Heart size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <ShoppingBag size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <User size={20} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu (Drawer Effect) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-[#333]"
          >
            <div className="px-4 py-6 space-y-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`block text-white/80 hover:text-white text-lg ${activeLink === link.name ? "text-[#f4b500] font-medium" : ""}`}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center space-x-6 pt-6">
                <motion.button whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white">
                  <Search size={20} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white">
                  <Heart size={20} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white">
                  <ShoppingBag size={20} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white">
                  <User size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;