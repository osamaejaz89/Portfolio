import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Deep navy / slate base
        navy: {
          950: "#020617",
          900: "#060B1A",
          800: "#0A1124",
          700: "#111A33",
          600: "#1B2547",
        },
        // React Native signature blue (#61DAFB family)
        rn: {
          DEFAULT: "#61DAFB",
          50: "#E6FAFF",
          100: "#C4F2FE",
          200: "#8BE5FD",
          300: "#61DAFB",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
        },
        // Accent "green" highlight (tech / terminal feel)
        accent: {
          DEFAULT: "#22D3A5",
          400: "#4ADE80",
          500: "#22D3A5",
          600: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(97, 218, 251, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(97, 218, 251, 0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at 50% 0%, rgba(97,218,251,0.15), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(97, 218, 251, 0.35)",
        "glow-accent": "0 0 40px -10px rgba(34, 211, 165, 0.35)",
        card: "0 10px 30px -15px rgba(2, 6, 23, 0.8)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
