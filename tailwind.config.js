/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./constants.tsx",
    "./types.ts",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0D0D0F',
          surface: '#262626',
          accent: '#00FFB3',
          glow: '#5CFFC2',
          muted: '#D9D9D9',
          bone: '#F4F4F0',
          border: '#404040',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
      }
    }
  },
  plugins: [],
}
