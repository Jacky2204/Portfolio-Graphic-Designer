import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
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

      <motion.div
        className="md:hidden cursor-pointer p-3 rounded-xl hover:bg-red-500/20 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu
          size={28}
          className="text-white hover:text-red-400 transition-colors duration-300"
        />
      </motion.div>
    </motion.header>
  );
}

export default Navbar;
