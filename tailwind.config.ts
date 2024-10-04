import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "teal" : "#A7BEAE",
        "lightBlue" : "#E7E8D1"
      },
      boxShadow: {
        '3xl': '0px 0px 2vh black',
        "white" : "0px 0px 2vh black"
      }
    },
  },
  plugins: [],
};
export default config;
