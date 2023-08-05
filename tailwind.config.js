/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#363636",
        bgSecondary: "#3E3E3E",
        blueColor: "#4799EB",
        whiteColor: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
