import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {    
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
         'very-dark-violet': 'hsl(270, 9%, 17%)',
         'Dark-Grayish-Violet': 'hsl(273, 4%, 51%)',
         'Very-Light-Gray': 'hsl(0, 0%, 98%)',
          'Dark-Violet': 'hsl(256, 26%, 20%)',
          'Grayish-Blue': 'hsl(216, 30%, 68%)',
      },
      screens: {
        xs: "240px",
        sm: "320px",
        sml: "480px",
        md: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config