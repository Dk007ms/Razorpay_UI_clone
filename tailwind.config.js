/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
        },
        colors: {
          deepBlue: "#02042a",
          lightBlue: "#2b84ea",
          lightBlue300: "#4b94ed",
          lightBlue500: "#0b72e7",
          greenLight: "#61cea6",
          grayText: "#818597",
          lightGray: "#e2e2e2",
          grayBlue: "#344a6c",
          deepBlueHead: "#344a6c",
          gray2: "#525a76",
          slatekabhai:"#181C2E",
          chakra_colors_gray_100:" hsla(220, 81.8%, 97.8%, 1)",
          footer1: "#eef9fe",
          footer2:"#edf7ff",
          
        },
        
          letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.1em',
            widest: '.25em',
          },
    },
  },
  plugins: [],
}