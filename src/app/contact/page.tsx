"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-4 animate-glow"
      >
        Connect in the Network
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl mb-8 max-w-2xl"
      >
        <p className="mb-4">Do you seek to interface? To collaborate on a new digital frontier? Or perhaps to simply exchange data packets?</p>
        <p className="mb-4">You can reach me through the following channels:</p>
        <ul className="list-none space-y-2">
          <li><a href="mailto:contact@cyberglitch.com" className="hover:text-accent transition-colors duration-300">Email: contact@cyberglitch.com</a></li>
          <li><a href="https://twitter.com/cyberglitch" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">Twitter: @cyberglitch</a></li>
          <li><a href="https://github.com/cyberglitch" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">GitHub: /cyberglitch</a></li>
        </ul>
        <p className="mt-8">Let&apos;s hack the future, together.</p>
      </motion.div>
    </div>
  );
}
