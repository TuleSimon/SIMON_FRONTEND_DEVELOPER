/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "4rem",
      },
    },
    extend: {
      fontSize: {
        size_onPrimary: '13px',
        size_textbutton: '14px',
        size_large: '16px',
      },
      fontFamily: {
        poppins: ['Poppins'], // Replace 'YourChosenFont' with the actual font name
      },
      backgroundImage: {

      },
      colors: {
        navBar:'#141723',
        divider:"#242538",
        textButton:'#CDD0FF',
        body:"#C9CCD9",
         primary: {
          100: "#3640D7",
          hover: "#545DE9",
          200: "#171825",
          300: "#8087F4",
          500: "#434DEF"
        },
        navBar_Dark:"#121521",
        onPrimary: "#EEEFFC",
        text: {
          100:'#AEB2FE',
          primary:"#AEB2FE",
          action: "#8087F4",
        },
        faq_bg:"rgba(49, 52, 70, 0.35)",
        grey:{
          50: "#B8C1E0",
          100: "#EEEFFC",
          150: "#C9CCD9",
          200: "#A4A7BC",
          300:  "#444A69",
          500:  "#242538",
          400:"#24293D",
          600:"#1D1E2B",
          700:"#121521",
          800: "#171825"
        }
      },
      screens: {
        tabw: { max: "1120px" },
        mdw: { max: "860px" },
        smw2: { max: "620px" },
        smw: { max: "520px" },
        xsw: { max: "320px" },      
        mxsw: { min: "320px" },
        msmw: { min: "520px" },
        mmdw: { min: "760px" },
        mtabw: { min: "950px" },
        mdh: { raw: "(max-height: 1000px)" },
        smh: { raw: "(max-height: 800px)" },
        xsh: { raw: "(max-height: 600px)" },
      },
    },
  },
  plugins: [],
}

