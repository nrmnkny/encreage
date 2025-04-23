/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          black: "#0e0e0e",
          white: "#ffffff",
          green: "#27ae60",
        },
      },
    },
  },
  plugins: [],
};
