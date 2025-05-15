// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#0ea5e9',   // sky-500
        secondary: '#0369a1', // sky-700
        light: '#f0f9ff',     // sky-50
        dark: '#0c4a6e',      // sky-900
      },
    },
  },
  plugins: [],
}
