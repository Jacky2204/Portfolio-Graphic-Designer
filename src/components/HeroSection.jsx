import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import MouseTracker from "./MouseTracker";

function HeroSection() {
  return (
    <section className="relative px-4 sm:px-8 md:px-20 py-16 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen overflow-hidden">
      {/* Background animations */}
      <AnimatedHeroBackground />
      <MouseTracker />

      {/* Content with z-index to appear above background */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="gradient-text">Ajinkya Pandit</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A passionate and creative graphic designer with 10+ years of
          experience in creating engaging visuals that elevate brands and
          communicate messages with impact. Let's create something
          extraordinary together.
        </motion.p>
        
        {/* Mobile-first button layout */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Primary CTA Button - Full width on mobile */}
          <Link to="/work" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-xl sm:rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px] sm:min-h-[60px] touch-manipulation"
            >
              <span>See my work</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
          
          {/* Secondary CTA Button - Full width on mobile */}
          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-lg bg-transparent border-2 border-red-600 text-red-500 font-semibold rounded-xl sm:rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px] sm:min-h-[60px] touch-manipulation"
            >
              <span>Get in touch</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="sm:w-5 sm:h-5"
              >
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Mobile-specific additional CTA for better engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 md:hidden"
        >
          <Link to="/services" className="block w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 text-sm bg-gray-800/50 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] touch-manipulation"
            >
              <span>Explore Services</span>
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image section with enhanced animations and mobile optimization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 order-first md:order-last"
      >
        <div className="w-full h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
          <motion.div 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="https://i.pinimg.com/originals/96/75/1f/96751fd1951cd1872c4b65915c8f9780.jpg" 
              alt="Ajinkya Pandit - Portfolio Person" 
              className="w-full h-full object-cover"
            />
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-red-500/50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
