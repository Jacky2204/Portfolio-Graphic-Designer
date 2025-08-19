import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import MouseTracker from "./MouseTracker";

function HeroSection() {
  return (
    <section className="relative px-8 md:px-20 py-20 grid md:grid-cols-2 gap-12 items-center min-h-screen overflow-hidden">
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
          className="text-6xl md:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="gradient-text">Ajinkya Pandit</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A passionate and creative graphic designer with 10+ years of
          experience in creating engaging visuals that elevate brands and
          communicate messages with impact. Let's create something
          extraordinary together.
        </motion.p>
        
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/work">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 flex items-center gap-2"
            >
              See my work
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg bg-transparent border-2 border-red-600 text-red-500 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Get in touch
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image section with enhanced animations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="w-full h-96 flex items-center justify-center overflow-hidden">
          <motion.div 
            className="w-64 h-64 rounded-full overflow-hidden relative"
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
