import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const mobileMenuItems = [
    { to: "/work", label: "Work" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        className="flex justify-between items-center px-8 py-6 border-b border-gray-800/50 bg-black/90 backdrop-blur-xl sticky top-0 z-50 shadow-2xl shadow-black/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <Link to="/">
          <motion.h1
            className="text-3xl font-extrabold gradient-text cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Ajinkya Pandit
          </motion.h1>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <motion.div whileHover={{ y: -3 }} className="relative group">
            <Link
              to="/work"
              className="font-bold text-base px-5 py-3 rounded-xl transition-all duration-300 hover:text-red-400"
            >
              <span className="relative z-10">Work</span>
            </Link>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-lg group-hover:shadow-red-500/50"></div>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="relative group">
            <Link
              to="/services"
              className="font-bold text-base px-5 py-3 rounded-xl transition-all duration-300 hover:text-red-400"
            >
              <span className="relative z-10">Services</span>
            </Link>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-lg group-hover:shadow-red-500/50"></div>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="relative group">
            <Link
              to="/about"
              className="font-bold text-base px-5 py-3 rounded-xl transition-all duration-300 hover:text-red-400"
            >
              <span className="relative z-10">About</span>
            </Link>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-lg group-hover:shadow-red-500/50"></div>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="relative group">
            <Link
              to="/testimonials"
              className="font-bold text-base px-5 py-3 rounded-xl transition-all duration-300 hover:text-red-400"
            >
              <span className="relative z-10">Testimonials</span>
            </Link>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-lg group-hover:shadow-red-500/50"></div>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="relative group">
            <Link
              to="/contact"
              className="font-bold text-base px-5 py-3 rounded-xl transition-all duration-300 hover:text-red-400"
            >
              <span className="relative z-10">Contact</span>
            </Link>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-lg group-hover:shadow-red-500/50"></div>
          </motion.div>
        </nav>

        <motion.button
          className="md:hidden cursor-pointer p-3 rounded-xl hover:bg-red-500/20 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X
              size={28}
              className="text-white hover:text-red-400 transition-colors duration-300"
            />
          ) : (
            <Menu
              size={28}
              className="text-white hover:text-red-400 transition-colors duration-300"
            />
          )}
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-gray-800/50 z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-800/50">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <motion.button
                    className="p-2 rounded-lg hover:bg-red-500/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close mobile menu"
                  >
                    <X size={24} className="text-white" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <ul className="space-y-4">
                    {mobileMenuItems.map((item, index) => (
                      <motion.li
                        key={item.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.1,
                          duration: 0.3 
                        }}
                      >
                        <Link
                          to={item.to}
                          onClick={handleNavLinkClick}
                          className="block w-full text-lg font-semibold text-white hover:text-red-400 py-4 px-4 rounded-xl transition-all duration-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/30"
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-800/50">
                  <div className="text-center text-gray-400 text-sm">
                    <p>© 2024 Ajinkya Pandit</p>
                    <p className="mt-1">Creative Designer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
