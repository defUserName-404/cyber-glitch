import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'
import Footer from '../components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cyberpunk Portfolio',
  description: 'A futuristic cyberpunk-themed portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cyber-darker text-white">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}