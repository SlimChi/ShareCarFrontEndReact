/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           light: "#4da6ff",
//           DEFAULT: "#0B84FF",
//           dark: "#0066cc",
//         },
//         secondary: {
//           light: "#f39e58",
//           DEFAULT: "#ed7410",
//           dark: "#bf5d0d",
//         },
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/forms")],
// };

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {colors: {
      primary: {
        light: "#4da6ff",
        DEFAULT: "#0B84FF",
        dark: "#0066cc",
      },
      secondary: {
        light: "#f39e58",
        DEFAULT: "#ed7410",
        dark: "#bf5d0d",
      },
    },},
  },
  plugins: [require("@tailwindcss/forms")],
});