import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0F3D7A",
          navy: "#0A2C57",
          gold: "#F2C044",
          cream: "#FAF7EF",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        fancy: ["Cinzel", "'Playfair Display'", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
} satisfies Config;