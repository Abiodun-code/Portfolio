/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Fira Sans',
      secondary: 'Mulish',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors:{
        glass: "#9d9d9d2e",
        dark: "#1d1c1c",
        flat: "#242424",
        grey: "#f8fafc",
        green:"#16a34a"
      }
    },
  },
  plugins: [],
}