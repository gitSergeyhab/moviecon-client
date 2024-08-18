/** @type {import('tailwindcss').Config} */

import animate from 'tailwindcss-animate'

const conf  = {
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
      colors: {
        "text-input": "var(--text-input)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "background-opacity": "var(--background-opacity)",
        "base-gradient":
          "linear-gradient(to bottom left, var(--light), var(--dark));",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "rotate-back": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gettingDark: {
          '0%': { backgroundColor: '#DDD'},
          '50%': { backgroundColor: '#222' },
          '100%': { backgroundColor: '#DDD' },

        },
        blink: {
          '0%': { backgroundColor: '#222'},
          '29.2%': { backgroundColor: '#DDD'},
          '29.4%': { backgroundColor: '#222'},
          '29.6%': { backgroundColor: '#DDD'},
          '29.8%': { backgroundColor: '#222'},
          '30%': { backgroundColor: '#DDD'},
          '69.2%': { backgroundColor: '#DDD', transform: 'scale(1)'},
          '69.4%': { backgroundColor: '#222'},
          '69.6%': { backgroundColor: '#DDD'},
          '69.8%': { backgroundColor: '#222', transform: 'scale(1.01)'},
          '70%': { backgroundColor: '#DDD'},
          '71%': { backgroundColor: '#222'},
          '71.2%': { backgroundColor: '#DDD', transform: 'scale(1.02)'},
          '71.4%': { backgroundColor: '#222'},
          '71.6%': { backgroundColor: '#DDD', transform: 'scale(1.04)'},
          '71.8%': { backgroundColor: '#222',  transform: 'scale(1)'},
          '72%': { backgroundColor: '#DDD'},
          '72.4%': { backgroundColor: '#222'},
          '72.8%': { backgroundColor: '#DDD'},
          '100%': { backgroundColor: '#222'},
        },
        shadowsUp: {
          '0%': { filter: 'drop-shadow(0px 30px 20px #000)', opacity: 0.5, },
          '5%': { filter: 'drop-shadow(0px 30px 20px #dba903)', opacity: 1 },
          '10%': { filter: 'drop-shadow(0px 10px 20px #dba903)', opacity: 1 },
          '20%': { filter: 'drop-shadow(0 4px 4px #dba903)', opacity: 1},
          '100%': { filter: 'drop-shadow(0 2px 2px #dba903)',opacity: 1},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-back": "rotate-back 0.8s linear infinite",
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        blink: 'blink 20s infinite',
        shadowsUp: 'shadowsUp 3s ease-out forwards',
        gettingDark: 'gettingDark 4s ease-in-out infinite',
      },
      backgroundImage: {
        "basic-gradient": "linear-gradient(to bottom left, #696363, #202120)",
        "light-gradient": "linear-gradient(to bottom left, #696363, #cecfce)",
        "dark-gradient": "linear-gradient(to bottom left, #333333, #000000)",
        "base-gradient": "var(--base-gradient)",
      },
      backgroundColor: {
        "basic-dark": "#202120",
        "basic-darker": "#151515",
        "basic-middle": "#696363",
      },
    },
  },
  plugins: [animate],
}

export default conf