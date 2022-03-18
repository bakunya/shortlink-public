module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#041C32',
        'dark-2': '#04293A',
        'dark-3': '#064663',
        'dark-4': '#94A3B8',
        'dark-5': '#E2E8F0',
      },
      boxShadow: {
        'solid-black': '8px 8px 0px 0px rgba(0,0,0,0.75);'
      },
      screens: {
        xs: '400px'
      }
    },
  },
  plugins: [],
}
