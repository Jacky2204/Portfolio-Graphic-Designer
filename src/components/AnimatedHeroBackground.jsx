import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimatedHeroBackground = () => {
  const containerRef = useRef(null);

  // Create floating particles for depth
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        
        {/* Dynamic gradient layers */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-purple-600/15 to-pink-600/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle light rays */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-red-400 to-purple-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Elegant wave patterns */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 opacity-20"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.1), transparent)`,
        }}
        animate={{
          x: ['0%', '100%'],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing orbs with depth */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.1, 0.3, 0.1],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default AnimatedHeroBackground;
