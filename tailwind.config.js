/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite"), require("daisyui")],
};
