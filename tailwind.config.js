/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#041827',
        serviceBlue: '#DEE3FF',
        serviceYellow: '#FEEFD9',
        servicePink: '#FEEAEA'
      },
      fontFamily :{
        poppins: ["Poppins", "sans-serif"]
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [],
}

