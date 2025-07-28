"use client";

import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-4 animate-glow"
      >
        Digital Creations
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl mb-8 max-w-2xl text-left grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg border border-accent">
          <h2 className="text-3xl font-bold mb-2 text-accent">Project: Neural Net Weaver</h2>
          <p className="text-lg mb-4">A decentralized AI network for predictive market analysis.</p>
          <p className="text-sm">Technologies: Quantum Computing, Blockchain, Self-learning Algorithms.</p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg border border-accent">
          <h2 className="text-3xl font-bold mb-2 text-accent">Project: Urban Recon Drone</h2>
          <p className="text-lg mb-4">Autonomous surveillance drone with advanced facial recognition.</p>
          <p className="text-sm">Technologies: AI, Computer Vision, Drone Piloting Systems.</p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg border border-accent">
          <h2 className="text-3xl font-bold mb-2 text-accent">Project: Synth-Human Interface</h2>
          <p className="text-lg mb-4">Direct neural link for enhanced human-machine interaction.</p>
          <p className="text-sm">Technologies: Brain-Computer Interface, Haptic Feedback, VR/AR.</p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg border border-accent">
          <h2 className="text-3xl font-bold mb-2 text-accent">Project: Glitch Protocol</h2>
          <p className="text-lg mb-4">Secure communication protocol for underground data brokers.</p>
          <p className="text-sm">Technologies: End-to-End Encryption, Quantum Cryptography, Dark Web Integration.</p>
        </div>
      </motion.div>
    </div>
  );
}
