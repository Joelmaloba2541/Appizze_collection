import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        night: '#0b0b1d',
        glow: '#f8f7ff',
        accent: '#ff6ad5',
        lagoon: '#4bb3fd',
        ember: '#ff9671',
      },
      backgroundImage: {
        aurora: 'radial-gradient(circle at 20% 20%, rgba(75,179,253,0.4), transparent 50%), radial-gradient(circle at 80% 0%, rgba(255,150,113,0.4), transparent 55%), radial-gradient(circle at 50% 80%, rgba(255,106,213,0.25), transparent 60%)',
      },
    },
  },
  plugins: [],
}
