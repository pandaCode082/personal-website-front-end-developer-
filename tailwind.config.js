/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MacondoRegular: "Macondo-Regular",
        MatemasieRegular: "Matemasie-Regular",
        ConcertOneRegular: "ConcertOne-Regular",
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}
