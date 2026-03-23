/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Near-blacks
        ink: {
          DEFAULT: "#0f0e0d",
          soft: "#242220",
        },
        // Warm off-whites
        stone: {
          DEFAULT: "#f5f3ef",
          dark: "#e9e6df",
        },
        // Muted gray for body text / labels
        ash: "#57534e",
        // Light warm gray for borders / dividers
        dust: "#d5d1ca",
        // Deep black for dark sections
        void: "#0a0908",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
