/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        climateCrisis: ['"Climate Crisis"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

