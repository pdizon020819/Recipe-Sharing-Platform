import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        test1: "#DD5353",
        test2: "#B73E3E",
        test3: "#DBC8AC",
        test4: "#EDDBC0",
        test5: "#264E01",

      }
    },
  },
  plugins: [],
};
export default config;
