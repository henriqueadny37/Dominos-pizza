/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      powerpink: "#e3193b",
      powerblue: "#006491",
      powerwhite: "#fff",
      powerdarkblue: "#005177",
      powerdarkpink: "#BF0436",
      powergray: "#8090A6",
      powerlightgray: "#BFBFBF",
      powerdarkgray: "#1F2024",
      powerblack: "#000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
