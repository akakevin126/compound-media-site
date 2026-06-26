import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2D3250",
        coral: {
          DEFAULT: "#F4837C",
          hover: "#EF6F66",
          light: "#FCE9E7",
        },
        "sky-top": "#1C9FDB",
        "sky-mid": "#3DB4EA",
        "sky-bottom": "#8FD4F0",
        cash: "#4ADE80",
        card: "#FFFFFF",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
        card: "1.5rem",
      },
      boxShadow: {
        chunky: "6px 6px 0 0 #2D3250",
        "chunky-sm": "4px 4px 0 0 #2D3250",
        "chunky-press": "3px 3px 0 0 #2D3250",
        "chunky-lg": "8px 8px 0 0 #2D3250",
      },
    },
  },
  plugins: [],
};

export default config;
