/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cc-dark-blue": "#101851",
        "cc-dark-blue-hover": "#072ade",
        "cc-dark-blue-secondary": "#163bfb",
        "cc-mid-blue": "#163bf9",
        "cc-pale-blue": "#64a2fb",
        "cc-light-gray": "#f3f3f6",
        "cc-mid-gray": "#e8e8ed",
        "cc-light-green": "#dafbed",
        "cc-dark-green": "#139c64",
        "cc-kelly-green": "#7ab51e",
        "cc-dark-orange": "#ff9800",
        "cc-dark-red": "#d51d17",
        "cc-dark-indigo": "#404674"
      },
    },
  },
  plugins: [],
};
