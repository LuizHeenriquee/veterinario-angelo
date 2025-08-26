import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ce3824",
        dark: "#1e1e1e",
        light: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
