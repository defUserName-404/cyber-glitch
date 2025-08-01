'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail, Code } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'CYBERPUNK_DEVELOPER.exe'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glitch Effect Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-cyber font-black mb-6 glitch-text glow-text text-cyber-blue"
            data-text={text}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-mono">
              {'>'} INITIALIZING_NEURAL_INTERFACE...
            </p>
            <p className="text-lg md:text-xl text-cyber-green mb-8 font-mono">
              {'>'} FULL_STACK_DEVELOPER | AI_ENTHUSIAST | DIGITAL_ARCHITECT
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-cyber-blue text-cyber-blue font-cyber font-bold text-lg glow-border glow-hover relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code size={20} />
                VIEW_PROJECTS.exe
              </span>
              <div className="absolute inset-0 bg-cyber-blue/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-cyber-gradient text-black font-cyber font-bold text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                CONNECT.exe
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-4 border border-cyber-blue/50 rounded-lg bg-cyber-darker/50 backdrop-blur-sm hover:bg-cyber-blue/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
              >
                <social.icon
                  size={24}
                  className="text-cyber-blue group-hover:text-white transition-colors duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-cyber-blue glow-text" />
        </motion.div>
      </div>

      {/* Matrix-style Code Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyber-green font-mono text-sm"
            style={{ left: `${i * 5}%` }}
            animate={{
              y: [-100, window.innerHeight + 100],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {Array.from({ length: 20 }, () =>
              Math.random() < 0.5 ? '1' : '0'
            ).join('\n')}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Hero