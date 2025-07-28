"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const generateGlyph = () => {
  const chars = "0123456789ABCDEF!@#$%^&*()_+-=[]{}|;:'\",.<>/?";
  return chars[Math.floor(Math.random() * chars.length)];
};

const GlowingGlyphs: React.FC = () => {
  const [glyphs, setGlyphs] = useState<string[]>([]);

  useEffect(() => {
    const newGlyphs = Array.from({ length: 100 }).map(generateGlyph);
    setGlyphs(newGlyphs);

    const interval = setInterval(() => {
      setGlyphs(prevGlyphs =>
        prevGlyphs.map(() => generateGlyph())
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-2]">
      {glyphs.map((glyph, index) => (
        <motion.span
          key={index}
          className="absolute text-secondary text-lg animate-glow"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight - 100, Math.random() * window.innerHeight],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth + 50, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 2,
          }}
          style={{
            fontFamily: '"Space Mono", monospace', // Using a monospace font for glyphs
          }}
        >
          {glyph}
        </motion.span>
      ))}
    </div>
  );
};

export default GlowingGlyphs;
