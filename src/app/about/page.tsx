"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-4 animate-glow"
      >
        About the Architect
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl mb-8 max-w-2xl"
      >
        In the neon-drenched alleys of the digital realm, I am a data alchemist, forging code into reality. My neural network is wired for innovation, constantly seeking new algorithms to unravel the complexities of the cyber-verse. I thrive on the hum of processors and the glow of monitors, crafting solutions that bridge the gap between the tangible and the virtual.
      </motion.p>
    </div>
  );
}
