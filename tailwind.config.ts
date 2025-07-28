import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        primary: '#0a0a2a',
        secondary: '#00f0ff',
        accent: '#ff00ff',
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 15px #00f0ff' },
          '100%': { textShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff, 0 0 40px #ff00ff' },
        },
      },
    },
  },
  plugins: [],
}
export default config