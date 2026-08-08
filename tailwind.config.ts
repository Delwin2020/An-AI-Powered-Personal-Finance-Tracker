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
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        income: {
          DEFAULT: "#10b981", // emerald-500
          foreground: "#ffffff",
        },
        expense: {
          DEFAULT: "#ef4444", // red-500
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#8b5cf6", // violet-500
          foreground: "#ffffff",
        }
      },
    },
  },
  plugins: [],
};
export default config;
