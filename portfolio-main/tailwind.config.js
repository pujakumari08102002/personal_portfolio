/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          50: "#C5C7D4",
          100: "#AFB2BF",
          200: "#999DAA",
          300: "#838894",
          400: "#6E727F",
          500: "#585D69",
          600: "#424854",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(183deg, rgba(207,213,255,1) 0%, rgba(245,229,234,1) 78%, rgba(255,249,249,1) 87%)',
        'dark-custom-gradient': 'linear-gradient(180deg, #000814 0%, #000814 100%)',
        'skill-gradient' : 'linear-gradient(to bottom right, #f5e9e9, #fcfcfc);',
        'light-gradient': 'linear-gradient(180deg, #1a1a2e 0%, #1a1a2e 100%);'
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

