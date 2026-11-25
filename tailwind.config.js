
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F7F5F0",
          secondary: "#EAE3D8",
        },
        foreground: {
          DEFAULT: "#242B28",
          muted: "#737D89",
        },
        brand: {
          DEFAULT: "#173F35",
          hover: "#245747",
          accessible: "#173F35",
          "accessible-hover": "#245747",
          accent: "#D96B35",
        },
        border: {
          subtle: "#E5DED3",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-dm-serif)", "serif"],
      },
      letterSpacing: {
        tighter: "-0.02em",
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(23, 63, 53, 0.10)",
        elevated: "0 20px 50px -15px rgba(23, 63, 53, 0.16)",
      },
    },
  },
  plugins: [],
};
