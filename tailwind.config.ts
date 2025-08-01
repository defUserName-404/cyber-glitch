/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f3ff',
        'cyber-purple': '#9945ff',
        'cyber-pink': '#ff0080',
        'cyber-green': '#00ff41',
        'cyber-orange': '#ff6b00',
        'cyber-dark': '#0a0a0a',
        'cyber-darker': '#050505',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'mono': ['Fira Code', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': {
            'box-shadow': '0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 15px #00f3ff'
          },
          '100%': {
            'box-shadow': '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(45deg, #00f3ff, #9945ff)',
        'cyber-grid': 'linear-gradient(rgba(0,243,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      }
    },
  },
  plugins: [],
}