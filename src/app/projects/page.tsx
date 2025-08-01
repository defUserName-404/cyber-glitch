'use client'

import { motion } from 'framer-motion'

const ProjectsPage = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A web-based application for managing and tracking personal projects. Built with React, Node.js, and MongoDB.",
      link: "#"
    },
    {
      title: "Project Beta",
      description: "An e-commerce platform for selling custom-designed t-shirts. Built with Next.js, Stripe, and Tailwind CSS.",
      link: "#"
    },
    {
      title: "Project Gamma",
      description: "A mobile app for tracking fitness and nutrition goals. Built with React Native, Firebase, and Chart.js.",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-cyber-darker text-white p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-cyber-dark p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-md mt-2">{project.description}</p>
            <a href={project.link} className="text-cyber-blue hover:underline mt-4 inline-block">View Project</a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
