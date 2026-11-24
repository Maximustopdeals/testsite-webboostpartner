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
          DEFAULT: "#173F35",
          muted: "#66716B",
        },
        brand: {
          DEFAULT: "#173F35",
          hover: "#245747",
          accessible: "#173F35",
          "accessible-hover": "#245747",
        },
        accent: {
          DEFAULT: "#D96B35",
          hover: "#C45A2A",
          soft: "#F5E5DA",
        },
        border: {
          subtle: "#E5E0D7",
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
        soft: "0 8px 30px -10px rgba(23, 63, 53, 0.12)",
        card: "0 18px 50px -20px rgba(23, 63, 53, 0.18)",
      },
    },
  },
  plugins: [],
};
