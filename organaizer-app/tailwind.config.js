/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#A0C4FF',
        'pastel-purple': '#BDB2FF',
        'pastel-pink': '#FFC6FF',
        'pastel-red': '#FFADAD',
        'pastel-orange': '#FFD6A5',
        'pastel-yellow': '#FDFFB6',
        'pastel-green': '#CAFFBF',
        'pastel-cyan': '#9BF6FF',
      },
      fontFamily: {
        'sans': ['JetBrains Mono', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
