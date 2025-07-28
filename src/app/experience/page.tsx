"use client";

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-4 animate-glow"
      >
        Chronicles of the Netrunner
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl mb-8 max-w-2xl text-left"
      >
        <h2 className="text-3xl font-bold mb-2 text-accent">Cybernetic Solutions Inc.</h2>
        <p className="text-lg mb-4">Lead Data Architect | 2077 - Present</p>
        <ul className="list-disc list-inside mb-6">
          <li>Designed and implemented secure neural interfaces for corporate espionage.</li>
          <li>Optimized data streams for real-time predictive analytics in urban environments.</li>
          <li>Developed sentient AI companions for high-net-worth individuals.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-2 text-accent">Neo-Tokyo Robotics</h2>
        <p className="text-lg mb-4">Robotics Engineer | 2070 - 2077</p>
        <ul className="list-disc list-inside">
          <li>Engineered autonomous combat drones for urban pacification.</li>
          <li>Integrated bio-mechanical enhancements into human-robot interfaces.</li>
          <li>Pioneered self-repairing nanobot technology for industrial applications.</li>
        </ul>
      </motion.div>
    </div>
  );
}
