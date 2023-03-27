// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./pages/*html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        lg: "12px",
        xl: "12px",
        "2xl": "12px",
      },
      screens: {
        sm: "640px",
        md: "640px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1140px"
      }
    },
    extend: {},
  }
}