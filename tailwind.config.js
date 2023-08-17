/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        480: "30rem",
      },
      shadow: {
        innerShadow: " inset 0 8px 20px 0 rgb(0 0 0 / 0.05)",
      },
      pfp: "url('public/images/ellie_shark.png')",
      background: "url('public/images/background.jpg')",
    },
  },
  plugins: [],
};
