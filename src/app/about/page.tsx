'use client'

import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-cyber-darker text-white p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-lg mb-4">
          I am a passionate and creative full-stack developer with a love for building beautiful and functional web applications. I have a strong background in both front-end and back-end technologies, and I am always eager to learn new things.
        </p>
        <p className="text-lg mb-4">
          My journey into the world of programming started with a fascination for video games and a desire to understand how they were made. This led me to learn C++ and eventually to the world of web development. I am proficient in JavaScript, React, Node.js, and have experience with various other technologies.
        </p>
        <p className="text-lg">
          When I am not coding, I enjoy playing guitar, reading sci-fi novels, and exploring the great outdoors.
        </p>
      </motion.div>
    </div>
  )
}

export default AboutPage
