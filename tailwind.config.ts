import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-color": "#4ac6a7"
      },
      screens: {
        'xs': '450px',
        'sm': '640px',
        'md': '768px',
        'lg': '850px',
        "cl":'1020px',
        'xl': '1280px',
        '2xl': '1350px',
        '3xl': '1700px',
      },
    },
  },
  plugins: [],
};
export default config;
