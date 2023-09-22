/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0083b3",
        "dark-grey": "#484848",
        "green-bright": "#50BB11",
        "light-grey": "#888888",
      },
    },
  },
  plugins: [],
}

