'use client'

import { motion } from 'framer-motion'

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "CyberCorp",
      date: "2022 - Present",
      description: "Developing and maintaining web applications using React, Node.js, and TypeScript. Collaborating with cross-functional teams to deliver high-quality software solutions."
    },
    {
      title: "Software Engineer Intern",
      company: "Data Systems Inc.",
      date: "2021 - 2022",
      description: "Assisted in the development of a new data processing pipeline. Gained experience with Python, SQL, and cloud technologies."
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      date: "2020 - 2021",
      description: "Designed and built websites for small businesses. Gained experience with HTML, CSS, JavaScript, and WordPress."
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
        My Experience
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-cyber-dark p-6 rounded-lg mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold">{experience.title}</h2>
            <p className="text-lg font-semibold">{experience.company} | {experience.date}</p>
            <p className="text-md mt-2">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ExperiencePage
