import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "#FFFFFF",
          paper: "#F5F5F5",
          border: "#E5E5E5",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          paper: "#141414",
          border: "#262626",
        },
        text: {
          light: {
            primary: "#1A1A1A",
            secondary: "#4A4A4A",
            muted: "#767676",
          },
          dark: {
            primary: "#FFFFFF",
            secondary: "#E5E5E5",
            muted: "#A3A3A3",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;