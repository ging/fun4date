/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5441FF",
        accent: "#5340FF",
        black: "#272932",
        white: "#FAFBFF",
        burgundy: "#9F226D",
        cyan: "#21E2ED",
        lilac: "#AE9FF2",
        bluePrimary:'#1C74D9',
        greenPrimary:'#98CE00',
        //borrar ca_blue, ca_orange cuando ya no estén usándose en ningún componente
        //borrar
        ca_blue: {
          900: "#3302BF",
          800: "#4507C9",
          700: "#4F1BE4",
          600: "#5441FF",
          500: "#6E76FF",
          400: "#97A7FF",
          300: "#BECAFF",
          200: "#DBE2FF",
          100: "#EBF0FF",
          50: "#F5F8FF",
        },
        ca_orange: {
          300: "FF9900",
          200: "FFBD1B",
          100: "FFE685",
        },
        //borrar

        gray: {
          600:'#393D49',
          500:'#606578',
          400:'#B4B7C2',
          300:'#DEE0EA',
          200:'#F1F3FA',
          100:'#F8F8F8',
  
        },
        ffdGreen:{
          400:'#D7F38A',
          300: '#F1FFCA',
        },
        ffdBlue:{
          500:'#3D8EEA',
          400: '#9ECBFF',
          300: '#C9E2FF',
          200: '#E8F2FF',
          100: '#F9FCFF'
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
