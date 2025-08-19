import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Modern spotlight effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.08), transparent 70%)`,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      {/* Modern floating particle */}
      <motion.div
        className="fixed w-4 h-4 bg-red-500/30 rounded-full pointer-events-none z-40 blur-sm"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
      />
    </>
  );
};

export default MouseTracker;
