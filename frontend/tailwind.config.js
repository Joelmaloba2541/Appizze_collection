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
        night: '#f4f6fb',
        glow: '#1f2933',
        accent: '#2563eb',
        lagoon: '#0ea5e9',
        ember: '#f97316',
        surface: '#ffffff',
        mist: '#e2e8f0',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 15% 20%, rgba(37,99,235,0.15), transparent 55%), radial-gradient(circle at 80% 5%, rgba(14,165,233,0.18), transparent 60%), radial-gradient(circle at 50% 85%, rgba(249,115,22,0.12), transparent 65%)',
      },
    },
  },
  plugins: [],
}
