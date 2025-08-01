'use client'

import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-cyber-darker text-white p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form className="bg-cyber-dark p-8 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" className="w-full bg-cyber-darker border border-cyber-blue p-2 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input type="email" id="email" className="w-full bg-cyber-darker border border-cyber-blue p-2 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full bg-cyber-darker border border-cyber-blue p-2 rounded"></textarea>
          </div>
          <button type="submit" className="bg-cyber-blue text-white font-bold py-2 px-4 rounded hover:bg-cyber-blue-dark transition-colors">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactPage
